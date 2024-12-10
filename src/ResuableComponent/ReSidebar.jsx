
import React from "react";
import { Link } from "react-router-dom";

function ReSidebar({ headerTitle, navLinks, additionalSections }) {
  return (
    <div className="lg:h-[517px] bg-[#0d2539] border-r-2 border-b-2 border-[#F3C15F] mt-[59px] px-[33px] sm:mt-0">
      {/* Header */}
      <div className="bg-[#0d2539] border-b-2 border-[#65676A] p-4">
        <h2 className="text-white font-bold text-[26px]">{headerTitle}</h2>
      </div>

      {/* Navigation Links */}
      <ul className="mt-5 space-y-3 px-4 border-b-2 border-[#65676A] pb-6">
        {navLinks.map((link, index) => (
          <li key={index} className="text-white hover:text-blue-500">
            <Link to={link.href} className="text-[20px] font-bold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Additional Sections */}
      {additionalSections.map((section, index) => (
        <ul
          key={index}
          className="mt-5 space-y-3 px-4 border-b-2 border-[#65676A] pb-6"
        >
          <li className="text-[#f2f0ef] hover:text-blue-500">
            <a href={section.headerLink} className="text-[20px] font-light">
              {section.headerText}
            </a>
          </li>
          {section.links.map((link, idx) => (
            <li key={idx} className="text-white hover:text-blue-500">
              <Link to={link.href} className="text-[20px] font-bold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default ReSidebar;
