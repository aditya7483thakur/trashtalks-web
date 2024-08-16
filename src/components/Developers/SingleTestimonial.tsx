import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import Link from "next/link";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, content, linkedin } = testimonial;

  return (
    <div
      className="mx-auto mb-8 w-full sm:w-[90%] md:w-[70%] lg:w-[45%]"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark">
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white sm:text-lg">
          “{content}“
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[80px] w-[80px] overflow-hidden rounded-full sm:h-[100px] sm:w-[100px]">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white sm:text-xl lg:text-xl xl:text-2xl">
              {name}
            </h3>
            <Link
              href={`${linkedin}`}
              className="break-all text-sm text-body-color"
            >
              {linkedin}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
