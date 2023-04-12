import React, { Fragment } from 'react';

export default function Table({data, config}) {

    const headingRow = config.map((col, index)=>{
        if(col.header) return (<Fragment key={index}>{col.header}</Fragment>);
        return (
            <th key={index}>
                {col.label}
            </th>
        )
    })

    const bodyRows = data.map((rowItem, index)=>{
        const renderedCells = config.map((col, index)=>{
            return (<td key={index} className='p-3'>{col.render(rowItem)}</td>)
        })

        return (
            <tr key={index} className='border-b'>
                {renderedCells}
            </tr>
        )
    })

    return (
        <div>
            <h1>This is a table</h1>
            <table className='mx-auto table-auto border-spacing-2'>
                <thead>
                    <tr className='border-b-2'>{headingRow}</tr>
                </thead>
                <tbody>
                    {bodyRows}
                </tbody>
            </table>
        </div>
    )
}
