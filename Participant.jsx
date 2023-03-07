import React from "react"
import { useState, useRef} from "react"


export default function Participant(props) {

    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()
    
    
        return (
            <div className="collapsible"> 
                <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{props.label}</button>

                <div
                    className="content-parent"
                    ref = {parentRef}
                    style={
                        isOpen
                            ? {
                                height: parentRef.current.scrollHeight + "px",
                            }
                            : {
                                height: "0px",
                            }
                    }
                >
                    <ul className="content">
                        <li>Age: {props.age}</li>
                        <li>Driver: {props.driver}</li>
                        <li>Location: {props.location}</li>
                        <li>Route ID: {props.routeId}</li>
                    </ul>
                </div>
            </div>

        )
}