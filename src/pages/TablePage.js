import React from 'react';
import SortableTable from '../components/SortableTable';

export default function TablePage() {
    const data = [
        {name:"Strawberry", color:"bg-red-300", price:40, discount:.1},
        {name:"Banana", color:"bg-yellow-400", price:10, discount:.2},
        {name:"Lime", color:"bg-green-400", price:30, discount:.25},
        {name:"Apple", color:"bg-red-600", price:100, discount:.2},
    ]

    const config = [
        {label:"Fruit", render:(fruit)=>fruit.name, sortBy:(fruit)=>fruit.name},
        {label:"Color", render:(fruit)=><div className={`p-2 ${fruit.color}`}></div>},
        {label:"Price", render:(fruit)=>fruit.price, sortBy:(fruit)=>fruit.price},
        {label:"Discounted Price", render:(fruit)=>Math.round(fruit.price*(1-fruit.discount),2)}
    ]

    return (
        <div>
            <h1 className='text-center my-5 text-xl'>Table Page</h1>
            <SortableTable  data={data} config={config} />
        </div>
    )
}
