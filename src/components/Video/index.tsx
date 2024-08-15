"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative z-10 -my-20 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Project Demo"
          paragraph="Discover the features and benefits of TrashTalks, showcasing its unique humor and engagement capabilities."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap justify-center" data-aos="zoom-in">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[960px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative flex items-center justify-center">
                {isMounted && (
                  <div className="w-full">
                    <video
                      className="w-full max-w-[900px]"
                      controls
                      autoPlay
                      muted
                    >
                      <source src="trashtalks-demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
