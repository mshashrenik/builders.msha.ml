import { Footer } from "flowbite-react";

export default function Bottom() {
  return (
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Copyright (C) 2022 Shrenik
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/about" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="/contact" class="mr-4 hover:underline md:mr-6">
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://www.christinak12.org/honorsacademy"
            class="mr-4 hover:underline md:mr-6"
          >
            MSHA
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mshashrenik/builders.msha.ml"
            class="mr-4 hover:underline md:mr-6"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}
