import EventCard from "../../layouts/Component/EventCard/EventCard";
import "./EventList.css";
import { eventList } from "../../utils/EventDatabase";


const EventList = () => {
  const renderEventCard = () => {
    return eventList.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          location={location}
          img={img}
          heading={heading}
        />
      );
    });
  };
  return (
    <div
        style={mainContentStyle}
        className="scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
      >
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <div className="w-[500px] flex flex-col justify-center items-center gap-[24px] mt-[140px] mb-[60px] ">
          {/* checking if event database is empty or not */}
          {eventList.length > 0 ? renderEventCard() : <p>No event Available</p>}
        </div>
      </div>
    </div>
  );
};
const mainContentStyle = {
    paddingRight: "0.2rem",
    overflowY: "auto",
    maxHeight: "calc(100vh)",
    scrollbarWidth: "thin",
  };
export default EventList;
