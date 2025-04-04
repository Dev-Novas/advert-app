import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Search } from "lucide-react";

const Footer = () => {
  return (
    <div className=" w-full min-h-screen bg-[#333333] text-white pt-20 pl-20 pr-20 overflow-hidden ">
      <div className="w-full flex flex-row justify-around pb-20  ">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="font-light">
            Welcome to Digital Deals Hub, the ultimate platform for <br />
            advertising and discovering digital hardware. We connect buyers and <br />
            sellers with the latest gadgets, from laptops and smartphones to <br />
            gaming accessories and workstations. Our user-friendly interface <br />
            ensures a seamless experience, making it easy to showcase and find <br />
            top-quality products.
          </p>
        </div>
        <div className="flex flex-col space-y-4 ">
          <h1 className="text-2xl font-bold">Navigations</h1>
          <ul className="space-y-4 font-light">
            <li className="cursor-pointer hover:text-blue-300">About Us</li>
            <li className="cursor-pointer hover:text-blue-300">Services</li>
            <li className="cursor-pointer hover:text-blue-300">Testinomials</li>
            <li className="cursor-pointer hover:text-blue-300">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Follow Us</h1>
          <Facebook className="cursor-pointer hover:text-blue-300 font-light" />
          <Twitter className="cursor-pointer hover:text-blue-300 font-light" />
          <Instagram className="cursor-pointer hover:text-blue-300 font-light" />
          <Linkedin className="cursor-pointer hover:text-blue-300 font-light" />
        </div>
        <div className="  h-10 max-w-50 mr-20 w-50 items-center">
          <Search className="cursor-product hover:text-blue-300 font-bol  " />
        </div>
      </div>
      <h1 className="flex justify-center p-40 border-t font-light">
        Copyright ©2025 All rights reserved
      </h1>
    </div>
  );
};

export default Footer;
