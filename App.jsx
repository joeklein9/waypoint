import React from "react"
import Navbar from "/Navbar.jsx"
import Driver from "/Driver.jsx"
import Participant from "/Participant.jsx"
import Location from "/Location.jsx"
import Route from "/Route.jsx"
import {drivers} from '/drivers.js'
import {participants} from "/participants.js"
import { locations } from "./locations"

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
   
const participantsElement = participants.map(participant => {
  return <Participant
  label = {participant.name} 
        age = {participant.age} 
        driver = {participant.driver} 
        location = {participant.location}
        routeId = {participant.routeId}
        key = {participant.routeId}
   
   
   />
})

const locationsElement = locations.map(location => {
  return <Location
  label = {location.name} 
        address = {location.address} 
        drivers = {location.drivers} 
        residents = {location.residents}
        routeId = {location.routeId}
        key = {location.routeId}
   
   
   />
})

    return (
   
    <>
      <Navbar />
      <div className = "main-container">

        <div className="drivers-container">
          <h1 className ="drivers-header">Drivers</h1>
          <div className = "drivers-element-container">
              {driversElement}
          </div>
        </div>
        
        <div className="participants-container">
          <h1 className ="participants-header">Participants</h1>
          <div className = "participants-element-container">
              {participantsElement}
          </div>
        </div>

        <div className="locations-container">
          <h1 className ="locations-header">Locations</h1>
          <div className = "locations-element-container">
              {locationsElement}
          </div>
        </div>
      </div>


      <div className = "routes-container">
      <h1 className ="routes-header">Routes</h1>
        <Route/>

      </div>
    
    </>
    )
}