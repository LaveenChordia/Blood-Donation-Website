import { useState } from 'react';

export default function BloodDonationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodType: '',
    lastDonation: '',
    agreeToTerms: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-red-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold">LifeShare</div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-red-200">Home</a>
            <a href="#" className="hover:text-red-200">About</a>
            <a href="#" className="hover:text-red-200">Donate</a>
            <a href="#" className="hover:text-red-200">Contact</a>
          </div>
          <button className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-100">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-red-500 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Give Blood. Save Lives.</h1>
          <p className="text-xl mb-8">Your donation can make a difference to someone in need.</p>
          <a href="#donate-form" className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-red-100 inline-block">
            Donate Now
          </a>
        </div>
      </div>

      {/* Info Cards */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 text-4xl mb-4">
              <span className="font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Why Donate Blood?</h3>
            <p className="text-gray-600">
              Blood donation saves millions of lives every year. One donation can help up to three patients in need.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 text-4xl mb-4">
              <span className="font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Who Can Donate?</h3>
            <p className="text-gray-600">
              Most healthy adults between 18-65 years weighing at least 50kg can donate blood every 3 months.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 text-4xl mb-4">
              <span className="font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">The Process</h3>
            <p className="text-gray-600">
              The donation process takes about 30-45 minutes, with the actual blood draw only taking 8-10 minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Blood Types Info */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Blood Types & Compatibility</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Blood Type</th>
                  <th className="py-3 px-4 text-left">Can Donate To</th>
                  <th className="py-3 px-4 text-left">Can Receive From</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-bold">A+</td>
                  <td className="py-3 px-4">A+, AB+</td>
                  <td className="py-3 px-4">A+, A-, O+, O-</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-bold">A-</td>
                  <td className="py-3 px-4">A+, A-, AB+, AB-</td>
                  <td className="py-3 px-4">A-, O-</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-bold">B+</td>
                  <td className="py-3 px-4">B+, AB+</td>
                  <td className="py-3 px-4">B+, B-, O+, O-</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-bold">B-</td>
                  <td className="py-3 px-4">B+, B-, AB+, AB-</td>
                  <td className="py-3 px-4">B-, O-</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-bold">AB+</td>
                  <td className="py-3 px-4">AB+ only</td>
                  <td className="py-3 px-4">All types</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-bold">AB-</td>
                  <td className="py-3 px-4">AB+, AB-</td>
                  <td className="py-3 px-4">A-, B-, AB-, O-</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-bold">O+</td>
                  <td className="py-3 px-4">A+, B+, AB+, O+</td>
                  <td className="py-3 px-4">O+, O-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-bold">O-</td>
                  <td className="py-3 px-4">All types</td>
                  <td className="py-3 px-4">O- only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div id="donate-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Register to Donate</h2>
          
          {submitted ? (
            <div className="max-w-md mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p className="font-bold">Thank you for registering!</p>
              <p>We will contact you soon with further details about your donation appointment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodType">
                  Blood Type
                </label>
                <select
                  id="bloodType"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select Blood Type</option>
                  {bloodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                  <option value="unknown">Don't Know</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastDonation">
                  Last Donation Date (if applicable)
                </label>
                <input
                  type="date"
                  id="lastDonation"
                  name="lastDonation"
                  value={formData.lastDonation}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I confirm I'm at least 18 years old and agree to be contacted about blood donation.
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Register to Donate
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">LifeShare</h3>
              <p className="mb-4">Connecting donors with those in need since 2010.</p>
              <p>© 2025 LifeShare. All rights reserved.</p>
            </div>
            
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">123 Donation Street</p>
              <p className="mb-2">Anytown, ST 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Email: info@lifeshare.org</p>
            </div>
            
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-red-400">Donation Centers</a></li>
                <li className="mb-2"><a href="#" className="hover:text-red-400">FAQs</a></li>
                <li className="mb-2"><a href="#" className="hover:text-red-400">Eligibility</a></li>
                <li><a href="#" className="hover:text-red-400">Volunteer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}