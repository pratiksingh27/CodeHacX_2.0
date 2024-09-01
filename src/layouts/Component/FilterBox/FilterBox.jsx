import { dataRender, months, years } from "../../../utils/DataRender"; 
import { useState, useEffect } from "react";

const FilterBox = ({getMonthYear}) => {
 const [selectedMonth, setSelectedMonth] = useState("January");
 const [selectedYear, setSelectedYear] = useState(2024);

  const monthDisplay = () => {
   /*  return months.map((month, index) => {
      return (
        <option key={index} value={month}>
          {month}
        </option>
      );
    }); */
    return dataRender(months);
  };

  const yearDisplay = () => {
    
    /* return years.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    }); */
    return dataRender(years);
  };

  const handleMonthChange = (e) =>{
    // console.log(e.target.value);
    setSelectedMonth(e.target.value) //capturing the value
    
  }

  const handleYearChange = (e) =>{
    setSelectedYear(Number(e.target.value)) //for converting string to number
    // console.log(e.target.value);
  }

  /* const SubmitEventInfo =(e)=>{
    e.preventDefault()
    updateData()
  } */
  /* const updateData=()=>{
    getMonthYear(selectedMonth, selectedYear) //we get info in filterevent page
  } */
  useEffect(()=>{
    // it is use inside so that we not need to click button when need to search
    const updateData=()=>{
      getMonthYear(selectedMonth, selectedYear) //we get info in filterevent page
    }
    updateData()
  },[selectedMonth, selectedYear, getMonthYear]) //it is pass to update change when condition change

  return (
    <>
      <div>
        <form  className=" bg-white flex flex-col justify-between items-center rounded-xl pb-6 mb-10">
          <div className="w-[500px] h-[100px] p-6 flex justify-between items-center">
          
          <label htmlFor="month" className="text-base">Months :</label>
          <select value={selectedMonth} onChange={handleMonthChange} className="text-base border rounded-lg p-2">
            {monthDisplay()}
          </select>

          <label htmlFor="year" className="text-base">Year :</label>
          <select value={selectedYear} onChange={handleYearChange} className="text-base border rounded-lg p-2">
            {yearDisplay()}
          </select>
          </div>
          {/* <button type="submit" className="px-7 py-3 rounded-lg bg-primary cursor-pointer border-none bg-teal-700 text-white">Submit</button> */}
          
        </form>
      </div>
    </>
  );
};
export default FilterBox;
