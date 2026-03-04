import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer class="footer sm:footer-horizontal bg-black text-white py-10 px-20 grid grid-cols-5 ">
          <nav>
            <h6 class="footer-title">CS — Ticket System</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </nav>
          <nav>
            <h6 class="footer-title">Company</h6>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Our Mission</a>
            <a class="link link-hover">Contact Saled</a>
          </nav>
          <nav>
            <h6 class="footer-title">Services</h6>
            <a class="link link-hover">Products & Services</a>
            <a class="link link-hover">Customer Stories</a>
            <a class="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 class="footer-title">Information</h6>
            <a class="link link-hover">Privacy Policy</a>
            <a class="link link-hover">Terms & Conditions</a>
            <a class="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 class="footer-title">Social Links</h6>
            <a class="link link-hover">@CS — Ticket System</a>
            <a class="link link-hover">@CS — Ticket System</a>
            <a class="link link-hover">@CS — Ticket System</a>
            <a class="link link-hover">support@cst.com</a>
          </nav>
        </footer>
        <footer class="footer bg-black text-white border-gray-700 border-t px-10 py-4 flex align-middle justify-center">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </footer>
      </div>
    );
};

export default Footer;