import { Accordion } from "flowbite-react";

export default function Faq(props) {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have any questions? Before you send us them through our Contact form, check if any one of the questions below answer your question.</p>
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>
              What is Builders Club?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Builders Club is the largest service organization for middle school and junior high students, with more than 45,000 members worldwide.

                Members learn to work together and develop servant-leaders skills as they serve their school and community. In partnership with UNICEF and March of Dimes, the clubs are able to expand their outreach to babies and children of the world.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              How will Builders Club help me?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                By encouraging students to go out and help someone else, Builders Club teaches a generation of students about the importance of taking time out of your own life to help and support others. When many of these members grow up, they will continue to go out of their way to help others, and that makes the club amazing.              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              That&lsquo;s great! How do I join?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                If you would like to join then contact our leaders (Mrs. Golter, Marley Beach, and Preston Emmons) and go to room K111 (7th grade English classroom) after school on Wednesday or you can contact us through this website.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </section>
  );
}