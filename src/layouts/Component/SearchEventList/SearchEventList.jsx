import EventCard from "../EventCard/EventCard"
import {eventList} from "../../../utils/EventDatabase"
const SearchEventList =({monthYear})=>{
    const {selectedMonth, selectedYear}=monthYear;

    const filteredEvents =eventList.filter((eventDetail)=>{
        return(
            eventDetail.date.year === selectedYear &&
            eventDetail.date.month === selectedMonth
        )
    })
    // console.log(filteredEvents)
    const renderEventCards =()=>{
        return filteredEvents.map(({ id, date, heading, location, img })=>{
            return(
                <EventCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location={location}
                img={img}
                />
            )
        })
    }
    return(
        <>
          {filteredEvents.length>0 ?(
             renderEventCards()
          ):(
             <p>No Events in the date</p>
          )}
        </>
     )
    }
    export default SearchEventList;