import { Carousel, Button } from "flowbite-react"

export default function Home() {
  return (
    <>
      <div className="h-94 sm:h-94 xl:h-96 2xl:h-96">
        <Carousel slideInterval={5000} rounded={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to MSHA Builders Club.</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">At builders club we help out our community, run meetings, plan projects, and hold leadership positions at the club, district and international levels. Join today, and meet our wonderful team!</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <Button gradientMonochrome="purple" href="/contact?message=I+would+like+to+join+MSHA+Builders+Club."> Get started</Button>
              <Button color="gray" href="/about">About us</Button>
                          </div>
          </div>
        </div>
      </section>
    </>)
}
