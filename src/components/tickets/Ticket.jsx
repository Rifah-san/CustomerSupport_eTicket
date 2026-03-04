
import "./../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays as calendar } from "@fortawesome/free-regular-svg-icons";

const Ticket = ({ ticket , updateProgress, handleStatus}) => {
    const handleCardClick = () =>{
        alert('Added To Task Status Section.');
        updateProgress();
        handleStatus(ticket.id);
    } 
  return (
    <div onClick={handleCardClick} className="card flex flex-col align-middle gap-3 shadow-md">
      <div className="flex align-middle justify-between">
        <h1 className="font-semibold">{ticket.title}</h1>
        <p className={`${ticket.status==='Open'?  "bg-green-200" : "bg-yellow-100" } p-4 badge rounded-2xl flex align-middle gap-1.5 justify-center`}>
          <span className={`p-1.5 ${ticket.status==='Open'?  "bg-green-700" : "bg-yellow-500" } rounded-full`}></span>
          {ticket.status}
        </p>
      </div>
      <div>
        <p className="text-gray-500">{ticket.description}</p>
      </div>
      <div className="flex align-middle justify-between">
        <div className="flex align-middle gap-3 text-gray-500">
          <p>#{ticket.id}</p>
          <p className={`${ticket.priority==="High"?"text-red-400":(ticket.priority==="Low"?"text-green-400": "text-yellow-400")}`}>{ticket.priority}</p>
        </div>
        <div className="flex align-middle gap-3 text-gray-500">
          <p>{ticket.customer}</p>
          <p>
            <FontAwesomeIcon icon={calendar} />
            {ticket.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
