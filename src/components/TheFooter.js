import React, { Component } from "react";

export default class TheFooter extends Component {
  render() {
    return (
      <div>
        <footer className="px-3 py-8 dark:bg-gray-800 text-2 transition-colors duration-200">
          <div className="flex flex-col">
            <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
              <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                <a
                  aria-current="page"
                  href="http://github.com/dimar-hanung"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <p aria-current="page">Contacts : 087737092992</p>
              </nav>
              <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
              <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                Made with 💖 by Dimar
                <br />
              </div>
              <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full "></div>
              <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                <span className="">© 2021</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
