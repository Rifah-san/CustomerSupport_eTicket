import React from 'react';
import { use } from 'react'
import Ticket from './Ticket';

const Tickets = ({promiseData}) => {
    const tickets = use(promiseData);
    console.log(tickets);
    return (
      <div className='p-10'>
        <h1 className="p-10 font-semibold text-2xl text-gray-700">
          Customer Tickets
        </h1>
        <div className="grid grid-cols-2">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket}></Ticket>
          ))}
        </div>
      </div>
    );
};

export default Tickets;