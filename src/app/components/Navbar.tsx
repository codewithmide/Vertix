"use client";

import Link from "next/link";
import React, { useState } from "react";
import CustomConnectButton from "./CustomConnectButton";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleOpen = () => {
    setDropdown(!dropdown);
  };

  const handleClose = () => {
    setDropdown(false);
  };

  return (
    <nav className="between w-11/12 py-4">
      <Logo />
      <div className="center gap-10 md:flex sm:hidden">
        <ul className="center gap-8 text-[.9rem] capitalize font-medium">
          <li className="hover:scale-95 transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:scale-95 transition-all duration-300">
            <Link href="#">Communities</Link>
          </li>
          <li className="hover:scale-95 transition-all duration-300">
            <Link href="#">How it works</Link>
          </li>
          <li className="hover:scale-95 transition-all duration-300">
            <Link href="#">My Profile</Link>
          </li>
        </ul>
        <CustomConnectButton />
      </div>

      <div className="md:hidden grid place-items-center">
        <div className="center" onClick={handleOpen}>
          <img src="/icons/menu.png" alt="menu" />
        </div>
      </div>
      {dropdown && (
        <div className="absolute w-screen flex flex-col h-[70vh] top-0 left-0 right-0 bg-blue text-white">
          <div className="ended w-[95%] py-4">
            <div className="center" onClick={handleClose}>
              <img src="/icons/close.png" alt="close" />
            </div>
          </div>
          <div className="center gap-8 my-10">
            <ul className="center flex-col gap-5 capitalize font-medium">
              <li className="hover:scale-95 transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:scale-95 transition-all duration-300">
                <Link href="#">Communities</Link>
              </li>
              <li className="hover:scale-95 transition-all duration-300">
                <Link href="#">How it works</Link>
              </li>
              <li className="hover:scale-95 transition-all duration-300">
                <Link href="#">My Profile</Link>
              </li>
            </ul>

            <CustomConnectButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
