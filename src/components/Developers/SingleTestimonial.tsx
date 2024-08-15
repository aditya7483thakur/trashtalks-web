import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import Link from "next/link";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, content, linkedin } = testimonial;

  return (
    <div
      className="mx-3 w-[45%]"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div className="rounded-lg bg-white p-12 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-8 xl:px-12">
        <p className="mb-10 border-b border-body-color border-opacity-10 pb-8 text-lg leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}“
        </p>
        <div className="flex items-center">
          <div className="relative mr-6 h-[100px] w-[130px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill className="object-fit" />
          </div>
          <div className="w-full">
            <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white lg:text-xl xl:text-2xl">
              {name}
            </h3>
            <Link href={`${linkedin}`} className="text-sm text-body-color">
              {linkedin}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
