import React, { useState } from 'react';
import classNames from 'classnames';
import { GoChevronDown } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

export default function Accordion({ data, primary, warning, success, danger }) {

    const [expandedIndex, setExpandedIndex] = useState(-1);
    const toggleExpandedIndex = (currentIndex) => {
        (expandedIndex === currentIndex) ? setExpandedIndex(-1) : setExpandedIndex(currentIndex);
    }

    const finalClassNames = classNames('flex justify-between cursor-pointer py-2 px-8 text-white', {
        'bg-blue-500': primary,
        'bg-red-500': danger,
        'bg-yellow-300': warning,
        'bg-green-400': success
    })

    const toRender = data.map((e, index) => {
        return (
            <div key={index}>
                <div onClick={() => toggleExpandedIndex(index)} className={finalClassNames}>{e.heading} <button>{(expandedIndex === index) ? <GoChevronDown /> : <GoChevronRight />}</button></div>
                {expandedIndex === index && <div className='py-2 px-8'>{e.content}</div>}
            </div>
        )
    })

    return (
        <div className='border border-black my-5'>
            {toRender}
        </div>
    )
}
