import {useState} from "react";

const useSort = (data, config)=>{
    let sortableData = [...data];
    const [sortParams, setSortParams] = useState({label:"", direction:""});
    
    const compare = (value1, value2)=>{
        if(typeof value1 === "string"){
            return value1.localeCompare(value2);
        }else if(typeof value1 === "number"){
            return value1 - value2;
        }else{
            return 0;
        }
    }

    const setSortColumn = (colName)=>{
        if(sortParams.label !== colName){
            // When colName changes
            setSortParams({label:colName, direction:'asc'});
        }else{
            // When same colName is being clicked on again
            if(sortParams.direction === 'desc'){
                setSortParams({label:'', direction:''});
            }else{
                setSortParams((sortParams)=>{return {label:colName, direction:(sortParams.direction === '')? 'asc' : 'desc'}});
            }
        }
    }
    
    // Note : You can't move this code inside setSortColumn fn, because then it will have a stale reference to sortableData. And sorting a stale reference will not trigger a re-render
    if(sortParams.label){
        const column = config.find(column => column.label === sortParams.label);
        const sortDirectionMultiplier = (sortParams.direction === 'asc') ? 1 : -1;
        sortableData = [...data].sort((a, b)=>{
            const value1 = column.sortBy(a);
            const value2 = column.sortBy(b);
            return compare(value1, value2)*sortDirectionMultiplier;
        });
    }

    return {
        sortParams,
        sortedData:sortableData,
        setSortColumn
    }
}

export default useSort;