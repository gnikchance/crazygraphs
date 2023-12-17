/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="container bg-gray-700 px-8 font-md text-gray-300">
        <nav>
          <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link className="w-16" href="/">
                <img
                  src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
                  alt="CrazyGraphs"
                  fetchpriority="high"
                />
              </Link>
              <Link className="hidden w-28 dark:block" href="/"></Link>
              <button
                aria-label="Toggle Menu"
                className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none md:hidden "
                id="headlessui-disclosure-button-:Rslmja:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
            target=""
            rel=""
            href="/archive"
          >
            <span>Archive</span>
          </a>
          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
            target="_blank"
            rel="noopener"
            href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
          >
            <span>Download</span>
          </a>
        </div> */}
          </div>
        </nav>
      </div>
      {/* Start of SubMenu for categories for graphs */}
      <div
        className="bg-gray-200 flex justify-between flex-row flex-wrap px-8"
        id="submenu"
      >
        {/* <a href="/stocks/stock-screener">Government & Politics</a>
        <a href="/stocks/stock-screener">Social Topics</a>
        <a href="/stocks/stock-screener">Science/Nature</a>
        <a href="/stocks/stock-screener">Finance and Economy</a>
        <a href="/stocks/stock-screener">Fun and Interesting</a>
        <a href="/stocks/stock-screener">Other/Uncategorized</a> */}
      </div>
    </>
  );
}
