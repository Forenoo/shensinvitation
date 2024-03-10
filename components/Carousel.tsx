import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

interface TestimonialDataProps {
  id: string;
  username: string;
  rating: number;
  comment: string;
  createdAt: any;
}

const getTestimonialData = async () => {
  try {
    const res = await fetch(
      "https://shensinvitation.vercel.app/api/testimoni",
      {
        method: "GET",
        cache: "no-cache",
      },
    );

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default async function Carousel() {
  const testimonialData: TestimonialDataProps[] = await getTestimonialData();
  return (
    <Marquee speed={70} className="-mt-4 py-10">
      {testimonialData.map((testi: TestimonialDataProps) => (
        <div key={testi.id} className="mx-3">
          {testi && (
            <TestimonialCard
              testimoniDate={formatDate(testi.createdAt)}
              userRating={testi.rating}
              userComment={testi.comment}
              username={testi.username}
            />
          )}
        </div>
      ))}
    </Marquee>
  );
}
