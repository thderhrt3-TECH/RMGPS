import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const GetInvolved = () => {
  const [donateForm, setDonateForm] = useState({ name: '', email: '', amount: '', message: '' });
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', phone: '', interests: '', availability: '' });
  const [partnerForm, setPartnerForm] = useState({ organization: '', contact: '', email: '', phone: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleDonateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/donate`, donateForm);
      setSubmitStatus({ type: 'success', message: 'Thank you for your generous donation intention! We will contact you soon.' });
      setDonateForm({ name: '', email: '', amount: '', message: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'There was an error submitting your form. Please try again.' });
    }
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/volunteer`, volunteerForm);
      setSubmitStatus({ type: 'success', message: 'Thank you for your interest in volunteering! We will contact you soon.' });
      setVolunteerForm({ name: '', email: '', phone: '', interests: '', availability: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'There was an error submitting your form. Please try again.' });
    }
  };

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/partner`, partnerForm);
      setSubmitStatus({ type: 'success', message: 'Thank you for your interest in partnering with us! We will contact you soon.' });
      setPartnerForm({ organization: '', contact: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'There was an error submitting your form. Please try again.' });
    }
  };

  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 py-20" data-testid="get-involved-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us in creating opportunities that transform lives and build a better world for children
          </p>
        </div>
      </section>

      {/* Status Message */}
      {submitStatus.message && (
        <div className={`max-w-3xl mx-auto mt-8 px-4 sm:px-6 lg:px-8`}>
          <div className={`p-4 rounded-lg ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`} data-testid="submit-status-message">
            {submitStatus.message}
          </div>
        </div>
      )}

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-white" data-testid="donate-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Make a Donation</h2>
            <p className="text-xl text-gray-700">
              Your generous contribution helps us provide world-class facilities and programs to children from all backgrounds.
            </p>
          </div>
          
          <form onSubmit={handleDonateSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="donate-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={donateForm.name}
                  onChange={(e) => setDonateForm({...donateForm, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-testid="donate-name-input"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={donateForm.email}
                  onChange={(e) => setDonateForm({...donateForm, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-testid="donate-email-input"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Donation Amount *</label>
              <input
                type="text"
                required
                value={donateForm.amount}
                onChange={(e) => setDonateForm({...donateForm, amount: e.target.value})}
                placeholder="$100"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-testid="donate-amount-input"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
              <textarea
                value={donateForm.message}
                onChange={(e) => setDonateForm({...donateForm, message: e.target.value})}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-testid="donate-message-input"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              data-testid="donate-submit-button"
            >
              Submit Donation
            </button>
          </form>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gray-50" data-testid="volunteer-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Become a Volunteer</h2>
            <p className="text-xl text-gray-700">
              Share your time and talents to make a direct impact on children's lives.
            </p>
          </div>
          
          <form onSubmit={handleVolunteerSubmit} className="bg-white p-8 rounded-lg shadow-md" data-testid="volunteer-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={volunteerForm.name}
                  onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  data-testid="volunteer-name-input"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={volunteerForm.email}
                  onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  data-testid="volunteer-email-input"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={volunteerForm.phone}
                onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                data-testid="volunteer-phone-input"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Areas of Interest *</label>
              <textarea
                required
                value={volunteerForm.interests}
                onChange={(e) => setVolunteerForm({...volunteerForm, interests: e.target.value})}
                rows="3"
                placeholder="Coaching, mentoring, administration, facilities, etc."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                data-testid="volunteer-interests-input"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Availability *</label>
              <input
                type="text"
                required
                value={volunteerForm.availability}
                onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                placeholder="Weekdays, weekends, evenings, etc."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                data-testid="volunteer-availability-input"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              data-testid="volunteer-submit-button"
            >
              Submit Volunteer Application
            </button>
          </form>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-20 bg-white" data-testid="partner-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl text-gray-700">
              Join us as a corporate or community partner to amplify our impact.
            </p>
          </div>
          
          <form onSubmit={handlePartnerSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="partner-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Organization Name *</label>
                <input
                  type="text"
                  required
                  value={partnerForm.organization}
                  onChange={(e) => setPartnerForm({...partnerForm, organization: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  data-testid="partner-organization-input"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Contact Name *</label>
                <input
                  type="text"
                  required
                  value={partnerForm.contact}
                  onChange={(e) => setPartnerForm({...partnerForm, contact: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  data-testid="partner-contact-input"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  data-testid="partner-email-input"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={partnerForm.phone}
                  onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  data-testid="partner-phone-input"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Tell Us About Your Organization *</label>
              <textarea
                required
                value={partnerForm.message}
                onChange={(e) => setPartnerForm({...partnerForm, message: e.target.value})}
                rows="4"
                placeholder="How would you like to partner with us?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                data-testid="partner-message-input"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              data-testid="partner-submit-button"
            >
              Submit Partnership Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;