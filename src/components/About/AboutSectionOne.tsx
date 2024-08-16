import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <SectionTitle
            title="About"
            paragraph="Get Ready to Laugh, Get Ready to Be Roasted!"
            center
          />
          <div
            className="-mx-4 flex flex-wrap items-center"
            data-aos="fade-right"
          >
            <div className="flex w-full flex-col justify-center px-4 lg:w-1/2">
              <div className="mb-12 flex max-w-[570px] flex-col justify-center text-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  What is TrashTalks?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  TrashTalks is an AI chatbot that delivers sarcastic, funny,
                  and honest responses to your questions. Unlike other chatbots,
                  it focuses on entertainment, using advanced language models to
                  generate witty remarks and keep conversations lively.
                </p>
              </div>
              <div className="mb-12 flex max-w-[570px] flex-col justify-center text-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Why TrashTalks?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Sometimes, you need a little humor in your day. TrashTalks is
                  ideal for those who enjoy a good roast, sarcastic humor, or
                  just want to see an AI make comical comebacks. It’s perfect
                  for killing time, entertaining friends, or adding some
                  amusement to your day.
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center px-4 lg:w-1/2">
              <Image
                src="/collage-trashtalks.png"
                alt="App Screenshots"
                className="h-auto w-full max-w-[400px]"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
