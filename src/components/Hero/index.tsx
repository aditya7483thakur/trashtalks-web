import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark"
    >
      <div className="container mx-auto px-4" data-aos="fade-down">
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex w-full flex-col items-center justify-between lg:w-[90%] lg:flex-row">
            <style>
              {`
          :is(.dark .dark\\:via-pink-700) {
            --tw-gradient-to: rgb(255 137 186/ 80%) var(--tw-gradient-to-position);
            --tw-gradient-stops: var(--tw-gradient-from), #be185d var(--tw-gradient-via-position), var(--tw-gradient-to);
          }
        `}
            </style>
            <div className="mb-10 flex w-full flex-col justify-evenly lg:mb-0 lg:w-1/2">
              <h1 className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-300 dark:via-pink-700 sm:text-5xl lg:text-6xl">
                TrashTalks: The Bot That Burns!
              </h1>
              <p className="mb-6 text-base sm:text-lg">
                #TrashTalking with AI: The AI that turns your questions into
                hilarious comebacks!
              </p>
              <div className="mb-6 flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1-AVJwyhjU-PbAcBX7sFUk70UzJaATMFm"
                  className="relative mb-4 inline-flex h-12 w-full overflow-hidden rounded-2xl p-[3px] focus:outline-none active:scale-95 sm:mb-0 sm:w-auto"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-[14px] bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
                    Download App
                  </span>
                </Link>
                <Link
                  href="https://github.com/lordsid003/trashtalks"
                  className="relative inline-flex h-12 w-full overflow-hidden rounded-2xl p-[3px] focus:outline-none active:scale-95 sm:w-auto"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-[14px] bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
                    Source Code
                  </span>
                </Link>
              </div>
              <p className="text-xs">
                **Google Drive may detect the APK file as a harmful executable.
                However, the application is completely safe and contains no
                harmful scripts.
              </p>
            </div>
            <div
              className="flex w-full justify-center lg:w-1/2"
              data-aos="fade-left"
            >
              <img
                src="/trashtalks-homeScreen.png"
                alt="Illustration of TrashTalks AI"
                className="w-10/12 lg:w-6/12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100"></div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100"></div>
    </section>
  );
};

export default Hero;
