/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function NavBar() {
    return (
  <div class="container bg-gray-900 px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
    <nav>
      <div class="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
        <div class="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
          <Link
            class="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            target=""
            rel=""
            href="/"
          >
            Home
          </Link>
          <a
            class="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            target=""
            rel=""
            href="/about"
          >
            About
          </a>
        </div>
        <div class="flex w-full items-center justify-between md:w-auto">
          <Link class="w-28 dark:hidden" href="/">
            <img alt="CrazyGraphs" fetchpriority="high" />
          </Link>
          <Link class="hidden w-28 dark:block" href="/"></Link>
          <button
            aria-label="Toggle Menu"
            class="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden "
            id="headlessui-disclosure-button-:Rslmja:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <svg
              class="h-6 w-6 fill-current"
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
        <div class="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
          <a
            class="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            target=""
            rel=""
            href="/archive"
          >
            <span>Archive</span>
          </a>
          <a
            class="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            target="_blank"
            rel="noopener"
            href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
          >
            <span>Download</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
    )
}
