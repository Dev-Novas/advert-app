import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className=" min-h-screen bg-[#333333] text-white pt-20 pl-10 pr-10 overflow-hidden ">
      <div className="w-screen flex flex-row justify-around pb-20 ">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Provident rerum unde possimus molestias dolorem fuga,
            <br /> illo quis fugiat!
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
          <h1 className="text-2xl font-bold" >Follow Us</h1>
          <Facebook className="cursor-pointer hover:text-blue-300 font-light" />
          <Twitter className="cursor-pointer hover:text-blue-300 font-light" />
          <Instagram className="cursor-pointer hover:text-blue-300 font-light" />
          <Linkedin className="cursor-pointer hover:text-blue-300 font-light" />
        </div>
        <div className=" border-2 border-grey-300 h-10 max-w-50 ">
          <input type="Search" />
          <button className="bg-blue-300 h-10 max-w-70 ">Search</button>
        </div>
      </div>
      <h1 className="flex justify-center p-40 border-t font-light">Copyright ©2025 All rights reserved</h1>
    </div>
  );
};

export default Footer;
