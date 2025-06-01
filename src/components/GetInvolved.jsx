import React, { useState } from 'react';

function GetInvolved() {
  const [activeTab, setActiveTab] = useState('volunteer');
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    interests: [],
    experience: '',
    availability: [],
    motivation: '',
    agreeTerms: false
  });

  const [partnerForm, setPartnerForm] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: '',
    collaborationInterest: [],
    message: '',
    agreeTerms: false
  });

  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handleVolunteerInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'interests') {
      const updatedInterests = [...volunteerForm.interests];
      if (checked) {
        updatedInterests.push(value);
      } else {
        const index = updatedInterests.indexOf(value);
        if (index > -1) {
          updatedInterests.splice(index, 1);
        }
      }
      setVolunteerForm({
        ...volunteerForm,
        interests: updatedInterests
      });
    } else if (type === 'checkbox' && name === 'availability') {
      const updatedAvailability = [...volunteerForm.availability];
      if (checked) {
        updatedAvailability.push(value);
      } else {
        const index = updatedAvailability.indexOf(value);
        if (index > -1) {
          updatedAvailability.splice(index, 1);
        }
      }
      setVolunteerForm({
        ...volunteerForm,
        availability: updatedAvailability
      });
    } else if (type === 'checkbox') {
      setVolunteerForm({
        ...volunteerForm,
        [name]: checked
      });
    } else {
      setVolunteerForm({
        ...volunteerForm,
        [name]: value
      });
    }
  };

  const handlePartnerInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'collaborationInterest') {
      const updatedInterests = [...partnerForm.collaborationInterest];
      if (checked) {
        updatedInterests.push(value);
      } else {
        const index = updatedInterests.indexOf(value);
        if (index > -1) {
          updatedInterests.splice(index, 1);
        }
      }
      setPartnerForm({
        ...partnerForm,
        collaborationInterest: updatedInterests
      });
    } else if (type === 'checkbox') {
      setPartnerForm({
        ...partnerForm,
        [name]: checked
      });
    } else {
      setPartnerForm({
        ...partnerForm,
        [name]: value
      });
    }
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Form Submitted:', volunteerForm);
    // Here you would typically send the form data to your backend
    setVolunteerSubmitted(true);
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    console.log('Partnership Form Submitted:', partnerForm);
    // Here you would typically send the form data to your backend
    setPartnerSubmitted(true);
  };

  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us in making a difference! Whether you're an individual looking to volunteer or an organization seeking partnership, we welcome your involvement.
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('volunteer')}
            className={`px-6 py-3 mx-2 font-semibold rounded-full transition-colors duration-300 ${
              activeTab === 'volunteer' 
                ? 'bg-blue-900 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Volunteer Registration
          </button>
          <button
            onClick={() => setActiveTab('partner')}
            className={`px-6 py-3 mx-2 font-semibold rounded-full transition-colors duration-300 ${
              activeTab === 'partner' 
                ? 'bg-blue-900 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Partner With Us
          </button>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          {/* Volunteer Registration Form */}
          {activeTab === 'volunteer' && !volunteerSubmitted && (
            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Volunteer Registration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={volunteerForm.name}
                    onChange={handleVolunteerInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={volunteerForm.email}
                    onChange={handleVolunteerInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={volunteerForm.phone}
                    onChange={handleVolunteerInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="16"
                    max="100"
                    value={volunteerForm.age}
                    onChange={handleVolunteerInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Interest *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Education & Mentoring', 'Event Planning', 'Technical Skills', 'Community Outreach', 'Administration', 'Content Creation'].map((interest) => (
                    <div key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`interest-${interest}`}
                        name="interests"
                        value={interest}
                        checked={volunteerForm.interests.includes(interest)}
                        onChange={handleVolunteerInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`interest-${interest}`} className="ml-2 text-sm text-gray-700">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Previous Volunteer Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows="3"
                  value={volunteerForm.experience}
                  onChange={handleVolunteerInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please describe any previous volunteer experience you have..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Availability *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekend Mornings', 'Weekend Afternoons', 'Weekend Evenings'].map((time) => (
                    <div key={time} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`availability-${time}`}
                        name="availability"
                        value={time}
                        checked={volunteerForm.availability.includes(time)}
                        onChange={handleVolunteerInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`availability-${time}`} className="ml-2 text-sm text-gray-700">
                        {time}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows="4"
                  value={volunteerForm.motivation}
                  onChange={handleVolunteerInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your motivation for volunteering and what you hope to achieve..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={volunteerForm.agreeTerms}
                  onChange={handleVolunteerInputChange}
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
                  I agree to NextLight Initiative's <a href="#" className="text-blue-600 hover:underline">volunteer terms and conditions</a> *
                </label>
              </div>
              
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg transition-colors duration-300 shadow-md"
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
          
          {activeTab === 'volunteer' && volunteerSubmitted && (
            <div className="text-center py-10">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Volunteering!</h3>
              <p className="text-gray-600 mb-6">
                Your application has been successfully submitted. Our volunteer coordinator will contact you within 5-7 business days to discuss next steps.
              </p>
              <button
                onClick={() => {
                  setVolunteerForm({
                    name: '',
                    email: '',
                    phone: '',
                    age: '',
                    interests: [],
                    experience: '',
                    availability: [],
                    motivation: '',
                    agreeTerms: false
                  });
                  setVolunteerSubmitted(false);
                }}
                className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                Submit Another Application
              </button>
            </div>
          )}
          
          {/* Partnership Form */}
          {activeTab === 'partner' && !partnerSubmitted && (
            <form onSubmit={handlePartnerSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Partnership Application</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={partnerForm.organizationName}
                    onChange={handlePartnerInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={partnerForm.contactPerson}
                    onChange={handlePartnerInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="partnerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="partnerEmail"
                    name="email"
                    value={partnerForm.email}
                    onChange={handlePartnerInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="partnerPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="partnerPhone"
                    name="phone"
                    value={partnerForm.phone}
                    onChange={handlePartnerInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Type *
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={partnerForm.organizationType}
                  onChange={handlePartnerInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Organization Type</option>
                  <option value="Business">Business</option>
                  <option value="Non-profit">Non-profit</option>
                  <option value="Government">Government</option>
                  <option value="Educational Institution">Educational Institution</option>
                  <option value="Community Group">Community Group</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Interest for Collaboration *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Sponsorship', 'Event Hosting', 'Skills Training', 'Mentorship', 'Resource Sharing', 'Joint Programs'].map((interest) => (
                    <div key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`collab-${interest}`}
                        name="collaborationInterest"
                        value={interest}
                        checked={partnerForm.collaborationInterest.includes(interest)}
                        onChange={handlePartnerInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`collab-${interest}`} className="ml-2 text-sm text-gray-700">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Partnership Proposal or Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={partnerForm.message}
                  onChange={handlePartnerInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please describe how you envision partnering with NextLight Initiative and what you hope to achieve through this collaboration..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="partnerAgreeTerms"
                  name="agreeTerms"
                  checked={partnerForm.agreeTerms}
                  onChange={handlePartnerInputChange}
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="partnerAgreeTerms" className="ml-2 text-sm text-gray-700">
                  I agree to NextLight Initiative's <a href="#" className="text-blue-600 hover:underline">partnership terms and conditions</a> *
                </label>
              </div>
              
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg transition-colors duration-300 shadow-md"
                >
                  Submit Partnership Request
                </button>
              </div>
            </form>
          )}
          
          {activeTab === 'partner' && partnerSubmitted && (
            <div className="text-center py-10">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h3>
              <p className="text-gray-600 mb-6">
                Your partnership request has been successfully submitted. Our partnerships team will review your proposal and contact you within 10 business days to discuss potential collaboration.
              </p>
              <button
                onClick={() => {
                  setPartnerForm({
                    organizationName: '',
                    contactPerson: '',
                    email: '',
                    phone: '',
                    organizationType: '',
                    collaborationInterest: [],
                    message: '',
                    agreeTerms: false
                  });
                  setPartnerSubmitted(false);
                }}
                className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;