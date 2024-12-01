import React from "react";
import "../../../../App.css";
import Herosection from "../../Herosection/Herosection";
import Img from "../../../../assets/img/main.jpg";
import us from "../../../../assets/img/us.jpeg";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Homepage() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Img})`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    },
  };

  return (
    <div
      style={styles.paperContainer}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full flex justify-center mt-8">
        <Herosection className="w-full max-w-[1200px] h-[500px]" />
      </div>

      <div className="w-full px-8 mt-12 text-center">
        <h2 className="text-4xl font-bold text-white">Explore Our Features</h2>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center  w-full max-w-[1200px]  px-8 mt-8 mb-16">
        {/* Row 1 - 3 Cards */}
        <div className="flex flex-wrap justify-center w-full max-w-[1200px] gap-4">
          <Card className="h-[400px] w-[300px] shadow-lg rounded-lg transition transform hover:scale-110 hover:brightness-120 duration-1000">
            <CardHeader className="absolute z-10 top-1 flex-col items-center">
              <p className="text-tiny text-white/60 uppercase font-bold">
                <a href="https://store.steampowered.com/agecheck/app/1091500/">
                  What to watch
                </a>
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://image.ceneostatic.pl/data/article_picture/39/fb/f19e-deed-466f-a243-e436926bf0c5_medium.jpg"
            />
          </Card>

          <Card className="h-[400px] w-[300px] shadow-lg rounded-lg transition transform hover:scale-110 hover:brightness-120 duration-1000">
            <CardHeader className="absolute z-10 top-1 flex-col items-center">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Plant a tree
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-3.jpeg"
            />
          </Card>

          <Card className="h-[400px] w-[300px] shadow-lg rounded-lg transition transform hover:scale-110 hover:brightness-120 duration-1000">
            <CardHeader className="absolute z-10 top-1 flex-col items-center">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Supercharged
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
        </div>

        {/* Row 2 - 2 Cards */}
        <div className="flex flex-wrap justify-evenly w-full max-w-[1200px]  mt-4">
          <Card
            isFooterBlurred
            className="h-[300px] w-[350px] shadow-lg rounded-lg transition transform hover:scale-110 hover:brightness-120 duration-1000"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-center">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Mockup</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-contain"
              src="https://previews.123rf.com/images/garnostudio/garnostudio2202/garnostudio220200008/181839238-realistic-laptop-editable-mockup-blue-banner-template-for-all-purposes-vector-illustration.jpg"
            />
            <CardFooter className="absolute flex flex-row bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
              <Button
                className="text-tiny text-white"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            className="h-[300px] w-[400px] shadow-lg   rounded-lg transition transform hover:scale-110 hover:brightness-120 duration-1000"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-center">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Our Team
              </p>
            </CardHeader>
            <Link to="/OurTeam">
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full  object-contain rounded-lg"
                src={us}
              />
            </Link>

            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center"></div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
