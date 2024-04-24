import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./customSelectBox.css";

function CustomSelectBox({ data, defaultValue, disable, onChange }) {
    const dropdownList = useRef();
    const dropdownAction = useRef();

    const [selectedValue, setSelectedValue] = useState(() => {
        if (defaultValue) {
            for (let i = 0; i < data.length; i++) {
                const value = data[i].value;
                if (value === defaultValue) {
                    return data[i].label;
                }
            }
        }

        return data?.[0]?.label;
    });

    const handleButtonClick = (e) => {
        if (disable) return;

        dropdownAction.current.classList.toggle("custom__dropdown__button_active"); // Add Active In Button
        dropdownList.current.classList.toggle("custom__dropdown__list_visible"); // Add Active In List
    };

    const handleChange = (item) => () => {
        if (disable) return;

        dropdownAction.current.classList.toggle("custom__dropdown__button_active"); // Add Active In Button
        dropdownList.current.classList.remove("custom__dropdown__list_visible");
        setSelectedValue(item.label);
        onChange(item);
    };

    return (
        <div className={`custom__dropdown ${disable ? "custom__dropdown-disable" : ""}`}>
            <button
                className="custom__dropdown__button"
                type="button"
                onClick={handleButtonClick}
                ref={dropdownAction}
            >
                {selectedValue}
            </button>

            <ul className="custom__dropdown__list" ref={dropdownList}>
                {data?.map?.((item) => {
                    return (
                        <li
                            className={`custom__dropdown__list-item ${
                                item.label === selectedValue
                                    ? "custom__dropdown__list-item_active"
                                    : ""
                            }`}
                            key={item.value}
                            data-value={item.value}
                            data-label={item.label}
                            onClick={handleChange(item)}
                        >
                            {item.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CustomSelectBox;

CustomSelectBox.propTypes = {
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    disable: PropTypes.bool,
};

// ----------------------------
// USE LIKE THIS
// ----------------------------

// const data = [
//     {
//         label: "we",
//         value: "1",
//     },
//     {
//         label: "are",
//         value: "2",
//     },
//     {
//         label: "some",
//         value: "3",
//     },
//     {
//         label: "values",
//         value: "4",
//     },

// function onChange(value) {
//     console.log("Changed Value: ", value);
// }

// <CustomSelectBox
//    defaultValue={1}
//    values={values}
//    onChange={onChange}
//    disable={true} // OPTIONAL
// />

// ----------------------------
