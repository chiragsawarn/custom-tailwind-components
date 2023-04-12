import React from 'react';
import Table from './Table';
import {GoArrowSmallUp, GoArrowSmallDown} from 'react-icons/go';
import useSort from '../hooks/useSort';

export default function SortableTable(props) {
    const {data, config} = props;
    const {sortParams, sortedData, setSortColumn} = useSort(data, config);
    
    const getIcons = (colName)=>{
        if(sortParams.label === colName && sortParams.direction){
            if(sortParams.direction === 'asc'){
                return <GoArrowSmallUp />
            }
            return <GoArrowSmallDown />
        }else{
            return (
                <div>
                    <GoArrowSmallUp />
                    <GoArrowSmallDown />
                </div>
            )
        }
    }
    

    const updatedConfig = config.map((column)=>{
        if(column.sortBy){
            return {...column, header:<th className='cursor-pointer hover:bg-gray-400' onClick={()=>setSortColumn(column.label)}>
                <div className='flex items-center'>
                    {getIcons(column.label)} {column.label}
                </div>
            </th>}
        }
        return column;
    })

    return (
        <div>
            <h1>{sortParams.label} - {sortParams.direction}</h1>
            <Table data={sortedData} config={updatedConfig} />
        </div>
    )
}
