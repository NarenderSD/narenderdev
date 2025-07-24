"use client";
import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Optionally log error
    // console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-[300px] flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-orange-100 dark:from-gray-900 dark:to-orange-950 rounded-2xl shadow-xl p-8 border-2 border-red-300 dark:border-orange-800">
          <h2 className="text-2xl font-bold text-red-700 dark:text-orange-400 mb-2">Something went wrong.</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">Sorry, an unexpected error occurred. Please refresh the page or try again later.</p>
          <pre className="text-xs text-red-500 bg-white/80 dark:bg-gray-900/80 p-2 rounded-lg overflow-x-auto max-w-xl">{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 