import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";
import { IoFilterOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
const TableHeader = () => {

  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilterPopup = () => {
    setShowFilter(!showFilter);
  };

  const handleAddReservationClick = () => {
    navigate('/add-reservation'); 
  };
  return (
    <div className="flex justify-between items-center bg-white p-4">
      <div className="flex items-center space-x-2  border border-gray-300 rounded px-2 py-1">
      <IoMdSearch />
        <input
          type="text"
          placeholder="Search Tickets"
          className="border-none outline-none"
        />
        
      </div>

      <div className="flex items-center space-x-2">
      <button  onClick={toggleFilterPopup}  className="bg-gray-100 text-gray-700 px-4 py-1 rounded border border-gray-300 hover:bg-gray-200 flex items-center justify-between text-sm">
        <IoFilterOutline className='mr-3 mt-1'/> Filter <SlArrowDown className='ml-3 mt-1 text-sm'/>
        </button>
        
        <button className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700"  onClick={handleAddReservationClick}>
          + Add Reservation
        </button>
        
        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-300 hover:bg-gray-200">
          Download Reports
        </button>
      </div>
      {showFilter && (
        <div className="absolute top-40 right-64 bg-white border border-gray-300 rounded shadow-lg p-4 z-50 w-72">
          <h3 className="text-lg font-semibold mb-2">Filter Options</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Location</label>
            <select className="w-full border rounded-md py-2 px-3">
              <option value="">Select location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Date & Time</label>
            <input type="datetime-local" className="w-full border rounded-md py-2 px-3" />
          </div>
          <div className="flex justify-end space-x-2">
            <button 
              onClick={toggleFilterPopup} 
              className="bg-gray-300 py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={toggleFilterPopup} 
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};




 


export default TableHeader;
