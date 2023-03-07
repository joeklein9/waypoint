import React from "react"
import Navbar from "/Navbar.jsx"
import Driver from "/Driver.jsx"
import {drivers} from '/drivers.js'

export default function App () {
    
const driversElement = drivers.map(driver => {
   return  <Driver
   label = {driver.name} 
        phone = {driver.phone} 
        seats = {driver.seats} 
        occupiedSeats = {driver.occupiedSeats}
        routeId = {driver.routeId}
        key = {driver.routeId}
   
   
   />
   
  })
    
       console.log(driversElement)

    return (
   
    <>
      <Navbar />
      
      <div className="driver-container">
        <h1 className ="drivers-header">Drivers</h1>
      </div>
      <div className = "driver-element-container">
            {driversElement}
      </div>
    
    </>
    )
}