import {useParams} from "react-router-dom"
import { eventList } from "../../utils/EventDatabase";
import "./EventDetails.css";
import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import Navigation from "../../layouts/Navigation";

const EventDetails = ()=>{
    const {id} = useParams();
    const numId = Number(id);

    const filteredEvent = eventList.find((eventDetail)=>{
        return eventDetail.id === numId;
    })
    // console.log(filteredEvent)
    return(
        <>
            <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date.month}
              </span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
        </>
    )
}
export default EventDetails;