import { useState } from "react";
import CustomSelectBox from "./components/CustomSelectBox/CustomSelectBox";
import ReactModal from "./components/ReactModal/ReactModal";

function App() {
    const [dropDownValue, setDropDownValue] = useState("3");

    const handleValueChange = (item) => {
        setDropDownValue(item.value);
    };

    const data = [
        {
            label: "we",
            value: "1",
        },
        {
            label: "are",
            value: "2",
        },
        {
            label: "some",
            value: "3",
        },
        {
            label: "values",
            value: "4",
        },
    ];

    return (
        <>
            <ReactModal />
            <CustomSelectBox
                defaultValue={dropDownValue}
                data={data}
                onChange={handleValueChange}
            />
        </>
    );
}

export default App;
