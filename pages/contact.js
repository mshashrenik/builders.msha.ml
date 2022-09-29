import { useRouter } from "next/router";
import { Label, TextInput, Button } from "flowbite-react";

export default function Contact(props) {
  const { query } = useRouter();
  const message = query.message || "";
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to join us or have any concerns? Write them in the text area below and we will actually receive them unlike before.</p>
        <form action="https://formspree.io/f/mgeqkoye" method="POST" class="space-y-8">
          <div>
            <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full name</label>
            <input name="name" type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
          </div>
          <div>
            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input name="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="john.doe@students.christina.k12.de.us" required />
          </div>
          <div>
            <label htmlFor="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input type="text" id="subject" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="">
            <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea name="body" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={message} placeholder="Leave a comment..."></textarea>
          </div>
          <Button type="submit" gradientMonochrome="purple">Send message</Button>
        </form>
      </div>
    </section>
  );
}
