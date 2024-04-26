import React, { useState } from "react";
import "./datetime.css"; // Import your CSS file for styling

const DateTime = () => {
    const [date, setDate] = useState(null);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <div className="datetime">
            <input
                type="date"
                id="datetime"
                placeholder="Select a date"
                onChange={handleDateChange}
            />
            <label htmlFor="datetime">{date || "Select Date:"}</label>
        </div>
    );
};

export default DateTime;
