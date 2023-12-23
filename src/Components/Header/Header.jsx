import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-gray-400 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="data:image/png;base64,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"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2 ">
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <FontAwesomeIcon className=" mr-2" icon={faWallet} />
              Connect Wallet
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-semibold">
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `block pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/migrate"
                  className={({ isActive }) =>
                    `block pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Migrate V1 Assets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lexstake"
                  className={({ isActive }) =>
                    `block pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  LexStake
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/liquidity"
                  className={({ isActive }) =>
                    `block pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Liquidity
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/trade"
                  className={({ isActive }) =>
                    `block pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Trade
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/leaderboard"
                  className={({ isActive }) =>
                    `block pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Leaderboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/v2launch"
                  className={({ isActive }) =>
                    `block pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  V2 Launch
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
