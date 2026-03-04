import React from "react";

const Nav = () => {
  return (
    <div>
      <div class="navbar bg-base-100 shadow-sm lg:px-35">
        <div class="navbar-start">
          <a class="btn btn-ghost text-xl">CS-Ticket System</a>
        </div>
        <div class="navbar-end flex align-middle gap-5">
          <a href="">Home</a>
          <a href="">FAQ</a>
          <a href="">Changelog</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
          <a href="">Download</a>
          <a class="btn bg-linear-to-tl from-green-600 to-purple-600 text-white border-0 rounded-sm hover:text-black">+ New Ticket</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
