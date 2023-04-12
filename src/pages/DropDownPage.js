import React, { useState } from 'react'
import DropDown from '../components/DropDown';

export default function DropDownPage() {
    const [selectedOption, setSelectedOption] = useState({});
    const options = [
        {label:"JavaScript brings life to web pages!", value:"JavaScript"},
        {label:"C++ is the fastest programming language alive!", value:"C++"},
        {label:"Who uses PHP anymore?", value:"PHP"}
    ]
    return (
        <div>
            <h1 className='text-center my-5 text-xl'>Drop Down Page</h1>
            <DropDown options={options} value={selectedOption} onChange={setSelectedOption} />
        </div>
    )
}
