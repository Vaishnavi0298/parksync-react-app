import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCarSide } from "react-icons/fa6";

function Form() {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState('');
  const [guestMobile, setGuestMobile] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [checkoutTime, setCheckoutTime] = useState('');
  const [location, setLocation] = useState('');
  const [rate, setRate] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carType, setCarType] = useState('');
  const [carColor, setCarColor] = useState('');
  const [inAndOutPrivileges, setInAndOutPrivileges] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleGuestNameChange = (event) => {
    setGuestName(event.target.value);
  };

  const handleGuestMobileChange = (event) => {
    setGuestMobile(event.target.value);
  };

  const handleLicensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleCheckoutDateChange = (event) => {
    setCheckoutDate(event.target.value);
  };

  const handleCheckoutTimeChange = (event) => {
    setCheckoutTime(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleCarMakeChange = (event) => {
    setCarMake(event.target.value);
  };

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const handleCarColorChange = (event) => {
    setCarColor(event.target.value);
  };

  const handleInAndOutPrivilegesChange = (event) => {
    setInAndOutPrivileges(event.target.checked);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    navigate('/reservation');

  };

  return (
    <div className="container px-8">

      <header className="flex justify-between items-center bg-white p-2 border-b border-gray-300">
        <div>
          <h1 className="text-2xl font-semibold text-gray-700">Reservations</h1>
          <p className="text-sm text-gray-500">Add Reservation</p>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 pt-8">
          <h2 className="text-xl font-bold mb-2 border-b border-gray-300">Guest Details</h2>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <label htmlFor="guestName" className="block text-gray-700 text-sm font-bold mb-2">
                Guest Name *
              </label>
              <input
                type="text"
                id="guestName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={guestName}
                onChange={handleGuestNameChange}
              />
            </div>
            <div>
              <label htmlFor="licensePlate" className="block text-gray-700 text-sm font-bold mb-2">
                License Plate *
              </label>
              <input
                type="text"
                id="licensePlate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={licensePlate}
                onChange={handleLicensePlateChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="guestMobile" className="block text-gray-700 text-sm font-bold mb-2">
              Guest Mobile *
            </label>
            <input
              type="text"
              id="guestMobile"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2"
              value={guestMobile}
              onChange={handleGuestMobileChange}
            />
          </div>
        </div>
        <h2 className="mt-4 mb-4 border-b border-gray-300"></h2>
        <div className="mb-4 pt-4" >
          <h2 className="text-xl font-bold mb-2">Time & Location</h2>
          <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 rounded-lg">
            <div>
              <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
                Start Date *
              </label>
              <input
                type="date"
                id="startDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div>
              <label htmlFor="startTime" className="block text-gray-700 text-sm font-bold mb-2">
                Time *
              </label>
              <select
                id="startTime"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={startTime}
                onChange={handleStartTimeChange}
              >
                <option value="12 Midnight">12 Midnight</option>
                <option value="1:00 AM">1:00 AM</option>
                {/* Add more time options here */}
              </select>
            </div>
            <div>
              <label htmlFor="checkoutDate" className="block text-gray-700 text-sm font-bold mb-2">
                Checkout Date *
              </label>
              <input
                type="date"
                id="checkoutDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={checkoutDate}
                onChange={handleCheckoutDateChange}
              />
            </div>
            <div>
              <label htmlFor="checkoutTime" className="block text-gray-700 text-sm font-bold mb-2">
                Time *
              </label>
              <select
                id="checkoutTime"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={checkoutTime}
                onChange={handleCheckoutTimeChange}
              >
                <option value="12:00 Noon">12:00 Noon</option>
                <option value="1:00 PM">1:00 PM</option>
                {/* Add more time options here */}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 p-4   border-t border-dotted border-gray-400 my-4">
            <div>
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Location *
              </label>
              <select
                id="location"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={location}
                onChange={handleLocationChange}
              >
                {/* Add location options here */}
              </select>
            </div>
            <div>
              <label htmlFor="rate" className="block text-gray-700 text-sm font-bold mb-2">
                Rate *
              </label>
              <select
                id="rate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={rate}
                onChange={handleRateChange}
              >

              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 ">
          <h2 className="text-2xl font-bold mb-4">Car details</h2>
          <div className="flex gap-4 bg-gray-100 p-4 rounded-lg">
            <button className="bg-gray-600 hover:bg-gray-500 text-white rounded-md text-sm py-1 px-2  flex items-center justify-center" type='button' onClick={toggleModal} >
              <div className='mr-2 bg-white rounded-full p-1 text-gray-600'>
                <FaCarSide />
              </div>
              Car Make
            </button>
            <button className="bg-gray-600 hover:bg-gray-500 text-white text-sm py-1 px-2  rounded-md flex items-center justify-center" type='button'>
              <div className='mr-2 bg-white rounded-full p-1 text-gray-600'>
                <FaCarSide />
              </div>
              Car Type
            </button>
            <button className="bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-md py-2 px-2 flex items-center justify-center" type='button'>
              <div className='mr-2 bg-white rounded-full p-1 text-gray-600'>
                <FaCarSide />
              </div>
              Car Color
            </button>
          </div>
        </div>
        <div className="mb-4 border-t pt-4">
          <h2 className="text-xl font-bold mb-2">Settings</h2>
          <div className="grid grid-cols-2 gap-4 border p-4">
            <div>
              <div className="form-check flex items-center">
                <input
                  type="checkbox"
                  className='mx-2 h-10 w-4'
                />
                <label
                  className="form-check-label inline-block text-gray-700 text-sm font-bold mt-1"
                  htmlFor="inAndOutPrivileges"
                >
                  In and Out Privileges
                </label>
              </div>
              <p className="text-gray-600 mt-2">Allow In and Out Privileges?</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">About In and Out Privileges</h3>
              <p className="text-gray-600">
                Can a guest park multiple times during this reservation? Turning on this feature
                will allow the reservation to be used only multiple visits.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
          >
            Save & add another
          </button>
        </div>

        {isModalOpen && (
          <>

            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={toggleModal}
            ></div>


            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">Car Make</h3>
                <input
                  type="text"
                  placeholder="Search Car"
                  className="border rounded-md py-2 px-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ul className="mb-4">
                  <li className="py-2 border-b"><label><input type="radio" name="carMake" className="mr-2" />Acura</label></li>
                  <li className="py-2 border-b"><label><input type="radio" name="carMake" className="mr-2" />Alfa Romeo</label></li>
                  <li className="py-2 border-b"><label><input type="radio" name="carMake" className="mr-2" />Aston Martin</label></li>
                  <li className="py-2 border-b"><label><input type="radio" name="carMake" className="mr-2" />Audi</label></li>
                  <li className="py-2 border-b"><label><input type="radio" name="carMake" className="mr-2" />BMW</label></li>

                </ul>
                <div className="flex justify-between">
                  <button
                    onClick={toggleModal}
                    className="bg-gray-300 py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={toggleModal}
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default Form;