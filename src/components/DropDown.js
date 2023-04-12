import React, { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

export default function DropDown({options, value, onChange}) {
    const handleClick = (newlySelectedOption)=>{
        onChange(newlySelectedOption);
        setIsOpen(isOpen => !isOpen);
    }
    const [isOpen, setIsOpen] = useState(false);
    const optionList = options.map((option, index)=>{
        return (<div className='px-8 py-3 hover:cursor-pointer' key={index} onClick={()=>handleClick(option)}>{option.label}</div>)
    })

    const divOfDropdown = useRef();
    useEffect(()=>{
        const handleClick = (event)=>{
            const dropdown = divOfDropdown.current;
            if(dropdown && !dropdown.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleClick, true);

        return ()=>{
            document.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <div ref={divOfDropdown} className='my-5'>
            <div className='flex justify-between px-8 py-3 border shadow bg-white' onClick={()=>setIsOpen(!isOpen)}>
                <h3>{value.label || "Select an option..."}</h3>
                <button>{(isOpen) ? <GoChevronDown /> : <GoChevronRight />}</button>
            </div>
            <div className='shadow bg-white'>
                {isOpen && optionList}
            </div>
        </div>
    )
}
