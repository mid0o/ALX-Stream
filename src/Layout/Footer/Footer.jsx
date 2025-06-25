import React from "react";
import { Links } from "../../Data/content";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dry py-4  border-black bprder ">
      <div className=" container mx-auto px-2">
        <div className="grid  grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-5  lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6  pb-0.5 ">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex itebas">
                    <Link
                      to={text.link}
                      className="text-border inline-block w-full hover:text-subMain"
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3 ">
            <Link to="/">
              <div className="w-full h-12 object-contain  mt-2 text-2xl ">
                ALX Stream
              </div>
            </Link>
            <p className="leading-7 text-sm mt-3 text-border">
              This is a demo movie streaming site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
