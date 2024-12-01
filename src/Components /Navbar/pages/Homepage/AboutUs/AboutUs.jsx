import React from "react";
import Img from "../../../../../assets/img/main.jpg";
import { Card, CardFooter, Image } from "@nextui-org/react";
import family from "../../../../../assets/img/family.jpg";
import salma from "../../../../../assets/img/salma.jpg";
import salma3 from "../../../../../assets/img/salma3.jpeg";
function AboutUs() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Img})`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    },
  };

  const cardData = [
    {
      title: "Our Vision",
      description: "Building a sustainable future.",
      image: salma3,
      extraMargin: "mt-0", // No extra margin for the first card
    },
    {
      title: "Our Mission",
      description: "Empowering communities worldwide.",
      image: family,
      extraMargin: "mt-10", // Extra margin for the middle card
    },
    {
      title: "Our Values",
      description: "Integrity, Innovation, and Impact.",
      image: salma,
      extraMargin: "mt-0", // No extra margin for the last card
    },
  ];

  return (
    <div
      style={styles.paperContainer}
      className="flex flex-col items-center justify-start min-h-screen w-full pt-20"
    >
      <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-300 hover:from-yellow-400 hover:to-yellow-600 transition-all duration-1000 ease-in-out text-center mt-10 mb-5 cursor-pointer">
        About
      </h1>
      <p className="text-6xl font-thin mb-10 text-center">
        The Dream Site <br></br>of Any Gamer Entousiast
      </p>

      <div className="flex flex-wrap justify-evenly items-center w-full max-w-6xl">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className={`w-[320px] h-[500px] bg-black shadow-lg rounded-lg overflow-hidden transform transition-transform duration-1000 hover:scale-110 hover:shadow-2xl ${card.extraMargin}`}
          >
            <div className="flex justify-center items-center h-[80%]">
              <Image
                alt={`${card.title} Image`}
                src={card.image}
                className="w-full h-full object-contain"
              />
            </div>
            <CardFooter className="flex flex-col items-center justify-center bg-gray-900 text-white h-[20%]">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-300 text-center">
                {card.description}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
