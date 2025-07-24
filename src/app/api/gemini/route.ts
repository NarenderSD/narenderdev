import { NextRequest, NextResponse } from "next/server";

const GEMINI_MODELS = [
  "gemini-2.5-pro",
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-pro",
  "gemini-1.5-flash"
];

const FALLBACK_FEEDBACK: Record<string, string> = {
  python: `This is a simple Python code explainer.\n\n- Line 1: a = 5 assigns 5 to variable a.\n- Line 2: b = 10 assigns 10 to variable b.\n- Line 3: print(a+b) prints the sum of a and b (15).\n\nTip: Always check for syntax errors and use comments for clarity.`,
  cpp: `This is a simple C++ code explainer.\n\n- Make sure to include all necessary headers.\n- Check for missing semicolons and correct variable types.\n- Use cout for output and cin for input.\n\nTip: Always initialize variables and use comments for clarity.`,
  javascript: `This is a simple JavaScript code explainer.\n\n- Use let/const for variable declarations.\n- Check for missing semicolons and correct function usage.\n- Use console.log for output.\n\nTip: Always test your code in the browser console or Node.js.`,
  java: `This is a simple Java code explainer.\n\n- Make sure to define your class and main method.\n- Use System.out.println for output.\n- Check for missing semicolons and correct data types.\n\nTip: Always compile your code before running.`
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { code, mode, language, prompt } = body;
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API key not set." }, { status: 500 });
    }

    let userPrompt = "";
    if (mode === "review") {
      userPrompt = `Explain this code in simple terms. Reply in English and Hinglish.\n\nCode:\n${code}`;
    } else if (mode === "generate") {
      userPrompt = prompt;
    }

    let lastError = null;
    for (const model of GEMINI_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          generationConfig: { temperature: 0.2, maxOutputTokens: 1024 }
        })
      });
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text && text.trim() !== "") {
        return NextResponse.json({ text, model });
      } else if (data?.error) {
        lastError = data;
        if (data.error.status === "NOT_FOUND") continue;
        if (data.error.status === "PERMISSION_DENIED" || data.error.status === "RESOURCE_EXHAUSTED") break;
      } else {
        lastError = data;
      }
    }
    // Fallback: return a generic explanation for supported languages
    if (mode === "review" && language && FALLBACK_FEEDBACK[language]) {
      return NextResponse.json({ text: FALLBACK_FEEDBACK[language], model: "fallback" });
    }
    return NextResponse.json({ error: "No usable response from Gemini. Code review is not supported for this model. Try code generation or a different prompt.", raw: lastError }, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json({ error: "Failed to fetch from Gemini API.", details: String(err) }, { status: 500 });
  }
} 