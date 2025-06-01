import React, { useState } from 'react';

function Donation() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would connect to a payment processor
    alert(`Thank you for your ${isMonthly ? 'monthly' : 'one-time'} donation of $${donationAmount || customAmount}!`);
  };

  return (
    <section id="donate" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Your generosity helps us create lasting change. Every contribution, no matter the size, makes a difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Donate?</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>100% of donations go directly to our programs</span>
                  </li>
                  <li className="flex">
                    <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Tax-deductible contributions</span>
                  </li>
                  <li className="flex">
                    <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Transparent reporting on how funds are used</span>
                  </li>
                  <li className="flex">
                    <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Regular updates on the impact of your donation</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <h4 className="font-bold mb-2">Other Ways to Give</h4>
                  <a href="#corporate-giving" className="text-blue-200 hover:text-white block mb-2">Corporate Partnerships</a>
                  <a href="#legacy-giving" className="text-blue-200 hover:text-white block mb-2">Legacy Giving</a>
                  <a href="#volunteer" className="text-blue-200 hover:text-white block">Volunteer Your Time</a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="flex items-center mb-4 text-gray-600">
                      <input 
                        type="radio" 
                        name="donation-type" 
                        className="mr-2"
                        checked={!isMonthly}
                        onChange={() => setIsMonthly(false)}
                      />
                      One-time Donation
                    </label>
                    <label className="flex items-center text-gray-600">
                      <input 
                        type="radio" 
                        name="donation-type" 
                        className="mr-2"
                        checked={isMonthly}
                        onChange={() => setIsMonthly(true)}
                      />
                      Monthly Donation
                    </label>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-600 mb-3">Select Amount:</p>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {['25', '50', '100', '250', '500', 'custom'].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-2 px-4 rounded-md ${
                            donationAmount === amount 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          } transition-colors`}
                          onClick={() => {
                            setDonationAmount(amount);
                            if (amount !== 'custom') setCustomAmount('');
                          }}
                        >
                          {amount === 'custom' ? 'Custom' : `$${amount}`}
                        </button>
                      ))}
                    </div>
                    {donationAmount === 'custom' && (
                      <div className="mt-3">
                        <label htmlFor="custom-amount" className="sr-only">Custom Amount</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500">$</span>
                          </div>
                          <input
                            type="number"
                            id="custom-amount"
                            className="pl-7 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter amount"
                            min="1"
                            step="1"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="donor-name" className="block text-gray-600 mb-1">Name (Optional)</label>
                    <input
                      type="text"
                      id="donor-name"
                      className="block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-600 mb-1">Email (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">For donation receipt and updates</p>
                  </div>

                  <button 
                    type="submit"
                    disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isMonthly ? 'Donate Monthly' : 'Donate Now'}
                  </button>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Secure payment processing. Your information is encrypted and never stored.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donation;