import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav class="border-gray-200 dark:bg-gray-900 w-full">
      <div class="w-full flex flex-wrap items-center justify-center mx-auto p-4">
        <a href="#" class="flex items-center">
          <img src={logo} class="h-20 mr-3" alt="Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
