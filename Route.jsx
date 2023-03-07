import React from "react"
import {useState} from "react"
import {drivers} from '/drivers.js'
import {participants} from "/participants.js"
import { locations } from "./locations"

export default function Route(){
    
      const [clickedRouteIds, setClickedRouteIds] = useState([]);
    
      const handleClick = (routeId) => {
        if (clickedRouteIds.includes(routeId)) {
          // If the clicked routeId is already in the state, remove it to "unselect" the element
          setClickedRouteIds(clickedRouteIds.filter((clickedRouteId) => clickedRouteId !== routeId));
        } else {
          // Otherwise, add the clicked routeId to the state
          setClickedRouteIds([...clickedRouteIds, routeId]);
        }
      };
    
      const elements = [    { routeId: "route1", text: "Element 1" },    { routeId: "route2", text: "Element 2" },    { routeId: "route3", text: "Element 3" },    { routeId: "route4", text: "Element 4" },    { routeId: "route5", text: "Element 5" },  ];
    
      return (
        <div>
          {elements.map((element) => (
            <div
              key={element.routeId}
              onClick={() => handleClick(element.routeId)}
              style={{ color: clickedRouteIds.includes(element.routeId) ? "lightgreen" : "black" }}
            >
              {element.text}
            </div>
          ))}
        </div>
      );
    }
    
    