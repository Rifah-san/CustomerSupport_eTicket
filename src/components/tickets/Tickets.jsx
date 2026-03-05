import React from "react";
import { use } from "react";
import Ticket from "./Ticket";

const Tickets = ({ promiseData, updateProgress, handleStatus }) => {
  const tickets = use(promiseData);
  console.log(tickets);
  return (
    <div className="py-10 lg:px-10 px-5">
      <h1 className="py-10 px-2 font-semibold text-2xl text-gray-700">
        Customer Tickets
      </h1>
      <div className="grid lg:grid-cols-2 col-span-1">
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            updateProgress={updateProgress}
            handleStatus={handleStatus}
          ></Ticket>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
