'use client';
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaUser, FaCalendar, FaEye, FaTrash, FaReply, FaFilter, FaSearch, FaDownload, FaTag } from 'react-icons/fa';
import { MdBusiness, MdSubject, MdPhone, MdPriorityHigh } from 'react-icons/md';

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
}

interface ContactStats {
  new?: number;
  read?: number;
  replied?: number;
  archived?: number;
}

const ContactsAdmin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    search: ''
  });
  const [stats, setStats] = useState<ContactStats>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchContacts();
    
    // Set up real-time updates every 30 seconds
    const interval = setInterval(() => {
      fetchContacts();
      console.log('🔄 Contact data refreshed automatically');
    }, 30000);

    return () => clearInterval(interval);
  }, [filters, currentPage]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '10',
        ...(filters.status && { status: filters.status }),
        ...(filters.priority && { priority: filters.priority }),
        ...(filters.search && { search: filters.search })
      });

      const response = await fetch(`/api/contacts?${params}`);
      const data = await response.json();

      if (response.ok) {
        setContacts(data.contacts);
        setStats(data.stats);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (contactId: string, status: string) => {
    try {
      const response = await fetch(`/api/contacts/${contactId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchContacts();
        if (selectedContact?._id === contactId) {
          setSelectedContact({ ...selectedContact, status: status as Contact['status'] });
        }
      }
    } catch (error) {
      console.error('Failed to update contact:', error);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'read': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'replied': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Contact Management</p>
              </div>
              
              {/* Navigation */}
              <nav className="flex items-center gap-6">
                <a
                  href="/admin"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 font-medium px-3 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="/admin/contacts"
                  className="text-orange-600 dark:text-orange-400 font-medium px-3 py-2 rounded-lg bg-orange-50 dark:bg-orange-900/20"
                >
                  Contact Messages
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {contacts.length} Messages
              </span>
              <a
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
              >
                Back to Portfolio
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Messages</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage and respond to contact form submissions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">New Messages</p>
                <p className="text-2xl font-bold text-blue-600">{stats.new || 0}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Read</p>
                <p className="text-2xl font-bold text-purple-600">{stats.read || 0}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <FaEye className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Replied</p>
                <p className="text-2xl font-bold text-green-600">{stats.replied || 0}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <FaReply className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Archived</p>
                <p className="text-2xl font-bold text-gray-600">{stats.archived || 0}</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <FaTag className="text-gray-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-400" />
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <MdPriorityHigh className="text-gray-400" />
              <select
                value={filters.priority}
                onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <button
              onClick={() => setFilters({ status: '', priority: '', search: '' })}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contacts List */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Messages</h2>
              </div>

              {loading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">Loading messages...</p>
                </div>
              ) : contacts.length === 0 ? (
                <div className="p-8 text-center">
                  <FaEnvelope className="text-gray-400 text-4xl mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">No messages found</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {contacts.map((contact) => (
                    <div
                      key={contact._id}
                      onClick={() => {
                        setSelectedContact(contact);
                        if (contact.status === 'new') {
                          updateContactStatus(contact._id, 'read');
                        }
                      }}
                      className={`p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                        selectedContact?._id === contact._id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <FaUser className="text-white text-sm" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{contact.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{contact.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                            {contact.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(contact.priority)}`}>
                            {contact.priority}
                          </span>
                        </div>
                      </div>
                      
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{contact.subject}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{contact.message}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <FaCalendar />
                            <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                          </div>
                          {contact.phone && (
                            <div className="flex items-center gap-1">
                              <MdPhone />
                              <span>{contact.phone}</span>
                            </div>
                          )}
                          {contact.company && (
                            <div className="flex items-center gap-1">
                              <MdBusiness />
                              <span>{contact.company}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    <span className="text-gray-600 dark:text-gray-400">
                      Page {currentPage} of {totalPages}
                    </span>
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-1">
            {selectedContact ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Message Details</h2>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedContact.status)}`}>
                        {selectedContact.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(selectedContact.priority)}`}>
                        {selectedContact.priority}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Contact Info */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FaUser className="text-gray-400" />
                        <span className="text-gray-900 dark:text-white">{selectedContact.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaEnvelope className="text-gray-400" />
                        <a href={`mailto:${selectedContact.email}`} className="text-blue-600 hover:text-blue-800">
                          {selectedContact.email}
                        </a>
                      </div>
                      {selectedContact.phone && (
                        <div className="flex items-center gap-3">
                          <MdPhone className="text-gray-400" />
                          <a href={`tel:${selectedContact.phone}`} className="text-blue-600 hover:text-blue-800">
                            {selectedContact.phone}
                          </a>
                        </div>
                      )}
                      {selectedContact.company && (
                        <div className="flex items-center gap-3">
                          <MdBusiness className="text-gray-400" />
                          <span className="text-gray-900 dark:text-white">{selectedContact.company}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <FaCalendar className="text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {new Date(selectedContact.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Subject</h3>
                    <p className="text-gray-700 dark:text-gray-300">{selectedContact.subject}</p>
                  </div>

                  {/* Message */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Message</h3>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Actions</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => updateContactStatus(selectedContact._id, 'replied')}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                      >
                        <FaReply />
                        Mark as Replied
                      </button>
                      <button
                        onClick={() => updateContactStatus(selectedContact._id, 'archived')}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                      >
                        <FaTag />
                        Archive
                      </button>
                      <a
                        href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}&body=Hi ${selectedContact.name},%0D%0A%0D%0AThank you for your message. `}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <FaEnvelope />
                        Reply via Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
                <FaEnvelope className="text-gray-400 text-4xl mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Select a Message</h3>
                <p className="text-gray-600 dark:text-gray-400">Click on a message to view details and take actions</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsAdmin;
