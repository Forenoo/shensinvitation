import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

import { testimonialData } from "@/lib/data";

export default function Carousel() {
  return (
    <Marquee pauseOnHover={true} speed={70} className="-mt-4 py-10">
      {[...testimonialData, ...testimonialData].map((testi, index) => (
        <div key={index} className="mx-3">
          <TestimonialCard
            testimoniDate={testi.testimoniDate}
            userRating={testi.userRating}
            userComment={testi.userComment}
            username={testi.username}
          />
        </div>
      ))}
    </Marquee>
  );
}
