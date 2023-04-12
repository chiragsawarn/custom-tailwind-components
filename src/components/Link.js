import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import classNames from 'classnames';

export default function Link({children, to, className}) {
    const {navigate, currentPath} = useContext(NavigationContext);

    const handleClick = (event)=>{
        if(event.metaKey || event.ctrlKey) return;
        event.preventDefault();
        navigate(to);
    }

    const linkClassName = classNames(className, 'text-white',{
        'font-bold':(to === currentPath)
    })

    return (
        <a href={to} onClick={handleClick} className={linkClassName}>{children}</a>
    )
}
