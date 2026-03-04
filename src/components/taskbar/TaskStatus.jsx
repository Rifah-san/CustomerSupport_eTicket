import React from "react";
import { use } from "react";

const TaskStatus = ({ promiseData, card }) => {
  const tickets = use(promiseData);
  console.log(card);
  return (
    <div className="p-10">
      <h1 className="py-10 font-semibold text-2xl text-gray-700">Task Status</h1>
      <div>
        {
          card.map(cardID=>{
            tickets.find(ticket => {ticket.id === cardID ? (
              <div>
                <h1>{ticket.title}</h1>
                <button className="btn">Complete</button>
              </div>
            ) : (
              <p>Select a ticket to add to Task Status</p>
            );
            })
          })
        }
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
