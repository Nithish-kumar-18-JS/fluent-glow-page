import { cn } from "@/lib/utils";
import React from "react";

const Footer = ({className}: {className?: string}) => {
  return (
    <footer className={cn("text-gray-300 py-4 px-6 flex justify-between items-center",className)}>
      {/* Left side */}
      <div className="flex items-center space-x-2">
        <span>Language</span>
        <select disabled className="bg-gray-900 text-gray-300 border border-gray-700 rounded px-2 py-1">
          <option>English (United States)</option>
        </select>
      </div>

      {/* Right side */}
      <div className="flex space-x-4">
        <a href="#" className="hover:text-primary">Support</a>
        <a href="#" className="hover:text-primary">Terms</a>
        <a href="#" className="hover:text-primary">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
