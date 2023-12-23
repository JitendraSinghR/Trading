import React from "react";
import "../Footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto flex flex-col items-center ">
        <div className="flex space-x-4 absolute left-5 p-4 z-20 bg-slate-800">
          <a
            href="#"
            className="text-2xl hover:text-blue-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-blue-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-blue-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGit} />
          </a>
        </div>
        <div className="mt-4 text-center">
          <div>
            <p className="scrolling-text">
              Trade-2-Earn up to ~$20k in esLEX rewards now! More volume = more
              money! Read up onTrade-2-Earn!{" "}
              <span className=" ml-32">LEX GO!</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
