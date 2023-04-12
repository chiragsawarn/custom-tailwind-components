import React from 'react';
import Link from './Link';
import classNames from 'classnames';

export default function Navbar({primary, danger, success, warning, dark, title}) {
    const navContainerClassNames = classNames('flex justify-between py-3 px-8',{
        'bg-blue-500':primary,
        'bg-red-500':danger,
        'bg-yellow-300':warning,
        'bg-green-400':success,
        'bg-black':dark
    });
    
    return (
        <div className={navContainerClassNames}>
            <h1 className='text-2xl text-white'>{title}</h1>
            <div className='flex'>
                <Link className='mx-1' to="/dropdown">DropDowns</Link>
                <Link className='mx-1' to="/accordion">Accordions</Link>
                <Link className='mx-1' to="/button">Buttons</Link>
                <Link className='mx-1' to="/modal">Modals</Link>
                <Link className='mx-1' to="/table">Tables</Link>
            </div>
        </div>
    )
}
