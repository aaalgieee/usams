import React from 'react';
import logo from './img/logo.png';

const TapID = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center">
        <img src={logo} alt="Authenticator" className="mb-4 w-24 h-24" /> {/* Adjust width and height as needed */}
          <h2 className="text-2xl font-semibold mb-2">Authenticator</h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your ID to authenticate your account.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="tapid" className="block text-sm font-medium text-gray-700">Your ID</label>
            <input type="tapid" id="tapid" name="tapid" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your ID" />
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TapID;
