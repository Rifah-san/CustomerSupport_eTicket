import React from "react";
import { use } from "react";

const TaskStatus = ({ promiseData, card, handleResolved}) => {
  const handleTaskBtn = () =>{
    alert("Task Completed!");
    handleResolved();
  }
  const tickets = use(promiseData);
  return (
    <div className="p-10">
      <h1 className="py-10 font-semibold text-2xl text-gray-700">
        Task Status
      </h1>
      <div>
        {card.length === 0 ? (
          <p>Select a ticket to add to Task Status</p>
        ) : (
          card.map((cardID) => {
            const matchedTicket = tickets.find(
              (ticket) => ticket.id === cardID,
            );

            return matchedTicket ? (
              <div key={matchedTicket.id} className="shadow-md rounded-sm flex flex-col gap-3 p-3">
                <h1 className="text-lg font-semibold text-gray-600">{matchedTicket.title}</h1>
                <button onClick={handleTaskBtn} className="btn bg-green-500 text-white border-0">Complete</button>
              </div>
            ) : null;
          })
        )}
      </div>
    </div>
  );
};

export default TaskStatus;

{
  /* <p>Select a ticket to add to Task Status</p>; */
}

// tickets.map((ticket) => (
//   <div>
//     <h1>{ticket.title}</h1>
//     <button className="btn">Complete</button>
//   </div>
// ));
