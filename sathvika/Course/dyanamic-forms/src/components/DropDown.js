import React, { useState } from "react";

const countries = [
    {
        name: "India",
        value: "IN",
        cities: ["Delhi", "Mumbai"],
    },
    {
        name: "Pakistan",
        value: "PAK",
        cities: ["Karachi", "Lahore"],
    },
    {
        name: "Bangladesh",
        value: "BAN",
        cities: ["Chitagong", "Dhaka"],
    },
];

function DropDown() {
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0)

    return (
        <div>
            <label> Select Country</label>
            <select id="country" onChange={(e)=>setSelectedCountry(e.target.value)}>
                <option value="">--Choose a country--</option>
                {countries.map((c,index) => (
                    <option value={index} >{c.name}</option>
                ))
                }
            </select>
            
            <select id="city"  onChange={(e)=>setSelectedCity(e.target.value)}>
            <option value="">--Choose a city--</option>
                {countries[selectedCountry].cities.map((city,index) => (
                        <option value={index} >{city}</option>
                    )) 
                }
            </select>
            

        </div>
    )
}
export default DropDown;