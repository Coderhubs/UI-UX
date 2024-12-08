"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/Separator";
import { ArrowDownUp } from "lucide-react";

// Define sections with options for Select dropdowns
const sections = [
  { label: "Locations", placeholder: "Select your city", options: ["New York", "Los Angeles", "Chicago"] },
  { label: "Date", placeholder: "Select your date", options: ["2024-12-08", "2024-12-09", "2024-12-10"] },
  { label: "Time", placeholder: "Select your time", options: ["10:00 AM", "11:00 AM", "12:00 PM"] },
];

// PickUp component to handle the city, date, and time selections
const PickUp = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Handle value changes for each Select component
  const handleValueChange = (section: string, value: string) => {
    if (section === "Locations") setSelectedCity(value);
    if (section === "Date") setSelectedDate(value);
    if (section === "Time") setSelectedTime(value);
  };

  return (
    <div className="inline-flex items-start gap-6">
      {sections.map((section, index) => (
        <React.Fragment key={section.label}>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-base text-secondary-500">{section.label}</div>
            <select
              className="p-2 border border-secondary-300 rounded-md text-secondary-500 text-sm"
              value={
                section.label === "Locations" ? selectedCity :
                section.label === "Date" ? selectedDate :
                section.label === "Time" ? selectedTime : ""
              }
              onChange={(e) => handleValueChange(section.label, e.target.value)}
            >
              <option value="" disabled>
                {section.placeholder}
              </option>
              {section.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {index < sections.length - 1 && <Separator className="h-12 w-[1px] bg-secondary-300" />}
        </React.Fragment>
      ))}
    </div>
  );
};

// Booking component to structure the layout with left (Pick-Up) and right (Drop-Off) cards
const Booking = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Left Card for 'Pick-Up' */}
      <Card className="w-[582px] h-[136px] bg-white rounded-[10px] shadow-md">
        <CardContent className="p-4 h-full flex flex-col justify-center items-start gap-4">
          <div className="flex items-center gap-3 w-full">
            {/* Circle Icon on the left */}
            <div className="w-4 h-4 bg-blue-600 rounded-full flex"></div>
            {/* 'Pick-Up' Text aligned to the left */}
            <div className="font-bold text-lg text-left">Pick-Up</div>
          </div>
          <PickUp />
        </CardContent>
      </Card>

      {/* ArrowDownUp Button */}
      <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 flex justify-center items-center">
        <ArrowDownUp className="w-6 h-6" />
      </button>

      {/* Right Card for 'Drop-Off' */}
      <Card className="w-[582px] h-[136px] bg-white rounded-[10px] shadow-md">
        <CardContent className="p-4 h-full flex flex-col justify-center items-start gap-4">
          <div className="flex items-center gap-3 w-full">
            {/* Circle Icon on the left */}
            <div className="w-4 h-4 bg-blue-600 rounded-full flex"></div>
            {/* 'Drop-Off' Text aligned to the left */}
            <div className="font-bold text-lg text-left">Drop-Off</div>
          </div>
          <PickUp /> {/* Optionally, use another component for Drop-Off */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Booking;
