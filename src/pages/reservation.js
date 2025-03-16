import React from "react"
import ReservationTable from "./reservationTable";
import Pagination from "./pagination";
import TableHeader from "./tableHeader";


const reservation = props => {

  return (
    
    <div className="bg-gray-100 min-h-screen">
     <header className="flex justify-between items-center bg-white p-4 border-b border-gray-300">
      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Reservations</h1>
        <p className="text-sm text-gray-500">Location settings &gt; Reservation Listing</p>
      </div>
      
    </header>
    <main className="container">
      <TableHeader/>
      <ReservationTable />
      <Pagination />
    </main>
  </div>
  )
}



export default reservation