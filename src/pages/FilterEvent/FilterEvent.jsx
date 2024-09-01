import { useCallback, useState } from "react";
import FilterBox from "../../layouts/Component/FilterBox/FilterBox";
import SearchEventList from "../../layouts/Component/SearchEventList/SearchEventList";

import Navigation from "../../layouts/Navigation"

const FilterEvent = ()=>{

    const [monthYear, setMonthYear]=useState({
        selectedMonth:null,
        selectedYear:null
    })

    //use call back used for stoping multiple search limit excide
    const getMonthYear = useCallback((selectedMonth, selectedYear)=>{
        setMonthYear({selectedYear,selectedMonth})
        // console.log(selectedYear, selectedMonth)
    },[])

    return(
        <>
        <Navigation/>
        <div className="flex flex-col justify-start items-center pt-8">
            <FilterBox getMonthYear={getMonthYear}/>
            <SearchEventList monthYear={monthYear}/>
        </div>
            
        </>
    )
}
export default FilterEvent;