import { Navbar, Button, Flowbite, DarkThemeToggle } from "flowbite-react";
import { useState } from 'react';


export default function Header() {
  const [visible, setVisible] = useState(true);

  const removeBanner = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {visible && (
        <div id="banner" tabindex="" class="flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800 text-center">
        <p class="text-md text-white mt-1 text-center">Welcome to the third rewrite of the MSHA Builders Club site! If you find any bugs or have any other feedback please complete <a href="https://forms.gle/xezWd6mZX7fDxvEVA">the feedback form</a>.</p>
        <button onClick={removeBanner} data-collapse-toggle="banner" type="button" class="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      )}
      <Navbar
        rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="/favicon.png"
            className="mr-3 h-10 sm:h-11"
            alt="BC Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MSHA Builders
          </span>
        </Navbar.Brand>

        <Navbar.Collapse>
          <Navbar.Link
            href="/"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">
            About
          </Navbar.Link>
          <Navbar.Link href="/faq">
            FAQs
          </Navbar.Link>
          <Navbar.Link href="/blog">
            Blog
          </Navbar.Link>
          <Navbar.Link href="/contact">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
        <div className="flex md:order-2">
          <Button gradientMonochrome="purple" href="/contact?message=I+would+like+to+join+MSHA+Builders+Club.">
            Join us
          </Button>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>

  )
}
