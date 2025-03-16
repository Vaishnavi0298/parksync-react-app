import React from 'react';

const ReservationTable = () => {
    const reservations = [
    { name: 'Laynne Neal', start: '6/3/2024 4:26 PM CDT', end: '6/4/2024 12:00 PM CDT', status: 'Delivered', tickets: 2, room: '306', billing: 'Paid' },
    { name: 'Deborah Hatch', start: '6/3/2024 4:26 PM CDT', end: '6/4/2024 12:00 PM CDT', status: 'Delivered', tickets: 2, room: '306', billing: 'N/A' },
    { name: 'Shawn Morris', start: '6/3/2024 4:26 PM CDT', end: '6/4/2024 12:00 PM CDT', status: 'Delivered', tickets: 2, room: '608', billing: 'Pending' },
    { name: 'Camron Jamison', start: '6/3/2024 4:26 PM CDT', end: '6/4/2024 12:00 PM CDT', status: 'Delivered', tickets: 2, room: '408', billing: 'Paid' },
    { name: 'Dustin Rogers', start: '6/3/2024 4:26 PM CDT', end: '6/4/2024 12:00 PM CDT', status: 'Delivered', tickets: 2, room: '504', billing: 'Paid' },
    { name: 'Dennis Hoelzer', start: '6/3/2024 4:26 PM CDT', end: '6/4/2024 12:00 PM CDT', status: 'Delivered', tickets: 2, room: 'None', billing: 'Paid' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">Details</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">Start</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">End</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">Current Status</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">Tickets</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">Room Number</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">Ext. Billing</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">{reservation.name}</td>
              <td className="px-6 py-4">{reservation.start}</td>
              <td className="px-6 py-4">{reservation.end}</td>
              <td className="px-6 py-4">{reservation.status}</td>
              <td className="px-6 py-4">{reservation.tickets}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {reservation.room}
                  <button className="ml-2 text-orange-600 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-9.036-1.768A2.828 2.828 0 1116.95 9.95L10.464 16.436a2.828 2.828 0 11-4-4l6.486-6.486z" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-white ${reservation.billing === 'Paid' ? 'bg-green-500' : reservation.billing === 'Pending' ? 'bg-red-500' : 'bg-gray-500'}`}>
                  {reservation.billing}
                </span>
              </td>
              <td className="px-6 py-4 text-orange-600 hover:underline cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7L10 16m0 0l-4-4m4 4L5 7" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
