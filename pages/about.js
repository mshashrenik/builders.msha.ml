import { Table } from "flowbite-react";

export default function About() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">About Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">A big thing that we do is helping our community. In Builders Club you will be helping with food drives, fundraisers and so much more. For example, in the past, we have done a toy drive, had a fun movie night to go alongside it, and planted trees at our school. Join today, and meet our wonderful team!</p>
        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>
              ROLE
            </Table.HeadCell>
            <Table.HeadCell>
              NAME
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Advisor
              </Table.Cell>
              <Table.Cell>
                Mrs. Golter
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                President
              </Table.Cell>
              <Table.Cell>
                Marley B
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Vice President
              </Table.Cell>
              <Table.Cell>
                Preston E
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Secretary
              </Table.Cell>
              <Table.Cell>
                Sophie S
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Technology
              </Table.Cell>
              <Table.Cell>
                Shrenik S
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Treasurer
              </Table.Cell>
              <Table.Cell>
                Chris L
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Website Creator
              </Table.Cell>
              <Table.Cell>
                Shrenik S
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </section>
  )
}
