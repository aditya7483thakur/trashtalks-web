import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Siddharth",
    content: "string",
    linkedin: "https://www.linkedin.com/in/siddharth-verma-53981a256/",
    image: "/images/testimonials/auth-02.png",
  },
  {
    id: 2,
    name: "Aditya",
    content: "A profficient MERN stack and React native developer",
    linkedin: "https://www.linkedin.com/in/aditya7483/",
    image: "/Aditya.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container mx-auto">
        <SectionTitle
          title="Meet Our Developers"
          paragraph="The team behind trashtalks-app"
          center
        />
        <div className="flex  flex-wrap justify-center ">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        {/* SVG background elements */}
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        {/* SVG background elements */}
      </div>
    </section>
  );
};

export default Testimonials;
