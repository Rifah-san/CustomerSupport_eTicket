import React from "react";
import "./../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays as calendar } from "@fortawesome/free-regular-svg-icons";

const Ticket = ({ ticket }) => {
  return (
    <div className="card flex flex-col align-middle gap-3 shadow-md">
      <div className="flex align-middle justify-between">
        <h1 className="font-semibold">{ticket.title}</h1>
        <p className="badge p-3 bg-green-200 rounded-lg flex align-middle gap-1 justify-center">
          <span className="p-1 bg-green-700 rounded-full"></span>
          {ticket.status}
        </p>
      </div>
      <div>
        <p className="text-gray-500">{ticket.description}</p>
      </div>
      <div className="flex align-middle justify-between">
        <div className="flex align-middle gap-3 text-gray-500">
          <p>#{ticket.id}</p>
          <p className="text-yellow-200">{ticket.priority}</p>
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
