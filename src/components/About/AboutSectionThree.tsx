import SectionTitle from "../Common/SectionTitle";
import Image from "next/image"; // Import the Image component

const AboutSectionThree = () => {
  return (
    <section className="py-8 md:py-12 lg:py-12">
      <div className="mx-auto w-11/12">
        <SectionTitle
          title="Modes"
          paragraph="Explore the two distinct modes of our app, each offering unique features and experiences to cater to different needs."
          center
        />
      </div>
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8">
          <div
            className="mx-auto mb-8 w-full sm:w-[90%] md:w-[45%]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark">
              <h3 className="mb-4 pb-3 text-center text-xl font-semibold text-dark dark:text-white">
                Mode 1: Steven He's Dad's Meme Madness
              </h3>
              <Image
                src="/trashtalks-stevenhe.png"
                alt="Mode 1"
                className="mx-auto mb-4 h-auto  w-[50%] max-w-xs rounded-lg sm:max-w-xs md:max-w-sm lg:max-w-xs"
                width={500} // Adjust width
                height={300} // Adjust height
              />
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-center text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white sm:text-lg">
                Dive into meme-driven hilarity with Steven He's Dad! Type
                "Uncle" to trigger a barrage of comedic and exaggerated
                responses inspired by the “Emotional Damage” meme. Enjoy a fun
                and entertaining twist with each interaction!
              </p>
            </div>
          </div>

          <div
            className="mx-auto mb-8 w-full sm:w-[90%] md:w-[45%]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark">
              <h3 className="mb-4 pb-3 text-center text-xl font-semibold text-dark dark:text-white">
                Mode 2: Gordon Ramsay Roasting
              </h3>
              <Image
                src="/trashtalks-gordon.png"
                alt="Mode 2"
                className="mx-auto mb-4 h-auto w-[50%] max-w-xs rounded-lg sm:max-w-xs md:max-w-sm lg:max-w-xs"
                width={500} // Adjust width
                height={300} // Adjust height
              />
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6  text-center text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white sm:text-lg">
                Type "Chef" to summon Gordon Ramsay and receive comically
                scathing remarks and hilarious critiques. Get ready for a
                virtual kitchen roast with the fiery chef’s iconic insults. It's
                a fun, dysfunctional twist on culinary banter that’ll leave you
                laughing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
