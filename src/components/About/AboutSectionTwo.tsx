const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="flex w-full justify-center px-4 lg:w-1/2">
            <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
              <img
                data-aos="fade-right"
                src="https://assets-global.website-files.com/65c9b678d86972b1b07c57b6/65ca29e72617ece37c6521de_Frame_1.png"
                alt="App Screenshot"
                className="h-auto w-full max-w-[300px]"
              />
            </div>
          </div>
          <div
            className="flex w-full flex-col items-center justify-center px-4 lg:w-1/2"
            data-aos="fade-left"
          >
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Tech Stack
                </h3>
                <ul className="list-disc text-2xl font-medium leading-relaxed text-body-color sm:text-3xl sm:leading-relaxed">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
