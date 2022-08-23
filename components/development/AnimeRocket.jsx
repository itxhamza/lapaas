import Image from "next/image";
import Fade from "react-reveal/Fade";

// images
import Img1 from "../../public/imgs/rocketParts/1.png";
import Img2 from "../../public/imgs/rocketParts/2.png";
import Img3 from "../../public/imgs/rocketParts/3.png";
import Img4 from "../../public/imgs/rocketParts/4.png";
import Img5 from "../../public/imgs/rocketParts/5.png";
import Img6 from "../../public/imgs/rocketParts/6.png";
import Fire1 from "../../public/imgs/rocketParts/fire1.png";

const AnimeRocket = () => {
  return (
    <section className="section scrolling-section">
      <div className="flex">
        <div className="w-full overflow-y-clip main-animation-class">
          <section className="h-screen sticky top-0 z-10">
            <div className="absolute scale-[1.8] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Fade bottom>
                <Image src={Img6} alt="Img6" className="w-full h-full" />
              </Fade>
            </div>
            <Fade bottom>
              <div className="absolute  left-20 top-20 flex flex-col max-w-sm border p-5 gap-4 h-56">
                <h2 className="font-bold text-2xl">1. Market research</h2>
                <span>
                  Market research refers to identifying the target audience for
                  your audience because you wouldn’t wish to target everyone.
                  Then we research your competitor and analyse what they are
                  offering and how they are marketing their product.
                </span>
              </div>
            </Fade>
          </section>
          <section className="h-screen sticky top-0 z-30">
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[140px]">
              <Fade bottom>
                <div className="transform scale-[1.5]">
                  <Image src={Img4} alt="Img4" className="w-full h-full" />
                </div>
                <div className="transform scale-[1.5]">
                  <Image src={Img5} alt="Img5" className="w-full h-full" />
                </div>
              </Fade>
            </div>
            <Fade bottom>
              <div className="absolute left-20 bottom-20 flex flex-col max-w-sm border p-5 gap-4 h-56">
                <h2 className="font-bold text-2xl">2. Prototyping</h2>
                <span>
                  First we will create a low fidelity prototype that is a visual
                  product interface of your product on paper. Then we will
                  create a high fidelity prototype that is a detailed and
                  realistic design with all real elements just like a real
                  website.
                </span>
              </div>
            </Fade>
          </section>
          <section className="h-screen sticky top-0 z-50">
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75">
              <Fade bottom>
                <Image src={Img1} alt="Img1" className="w-full h-full" />
              </Fade>
            </div>
            <Fade bottom>
              <div className="absolute right-20 top-20 flex flex-col max-w-sm border p-5 gap-4 h-56">
                <h2 className="font-bold text-2xl">3. MVP Development</h2>
                <span>
                  After the prototyping stage, we will launch a basic featured
                  version of your product and test the product in the market.
                  After launching the product we will focus on improving the
                  value stream to avoid waste value to the customer.
                </span>
              </div>
            </Fade>
          </section>
          <section className="h-screen sticky top-0 z-40">
            <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[72px] ">
              <Fade bottom>
                <div className="">
                  <Image src={Img3} alt="Img3" className="w-full h-full" />
                </div>
                <div className="">
                  <Image src={Img2} alt="Img2" className="w-full h-full" />
                </div>
              </Fade>
            </div>
            <Fade bottom>
              <div className="absolute right-20 bottom-20 flex flex-col max-w-sm border p-5 gap-4 h-56">
                <h2 className="font-bold text-2xl">4. Idea Validation</h2>
                <span>
                  After successfully developing the MVP, we will test the MVP in
                  the market. We will market your product and get feedback and
                  reviews from the market then use an iteration of that data to
                  improve the overall quality of your product.
                </span>
              </div>
            </Fade>
          </section>
          <section className="h-screen sticky top-0 z-40">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.4] flex justify-center items-center gap-[10px]">
              <Fade bottom>
                <div className="">
                  <Image src={Fire1} alt="Fire1" className="w-full h-full" />
                </div>
                <div className="">
                  <Image src={Fire1} alt="Fire1" className="w-full h-full" />
                </div>
              </Fade>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

const AnimeRocket2 = () => {
  return (
    <section className="section scrolling-section">
      <div className="flex">
        <div className="w-full overflow-y-clip main-animation-class">
          <section className="h-screen sticky top-0 z-50">
            <Fade bottom style={{ zIndex: 9999 }}>
              <div className="absolute flex flex-col max-w-sm z-40 border p-5 gap-4 h-56 bottom-[50%] top-[50%]">
                <h2 className="font-bold text-2xl">1. Market research</h2>
                <span>
                  Market research refers to identifying the target audience for
                  your audience because you wouldn’t wish to target everyone.
                  Then we research your competitor and analyse what they are
                  offering and how they are marketing their product.
                </span>
              </div>
            </Fade>
            <div className="absolute scale-[1.8] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Fade bottom>
                <Image src={Img6} alt="Img6" className="w-full h-full" />
              </Fade>
            </div>
            {/* <Fade bottom>
              <div className="absolute  left-20 top-20 flex flex-col max-w-sm border p-5 gap-4 h-56">
                <h2 className="font-bold text-2xl">1. Market research</h2>
                <span>
                  Market research refers to identifying the target audience for
                  your audience because you wouldn’t wish to target everyone.
                  Then we research your competitor and analyse what they are
                  offering and how they are marketing their product.
                </span>
              </div>
            </Fade> */}
          </section>
          <section className="h-screen sticky top-0 z-30">
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[140px]">
              <Fade bottom>
                <div className="transform scale-[1.5]">
                  <Image src={Img4} alt="Img4" className="w-full h-full" />
                </div>
                <div className="transform scale-[1.5]">
                  <Image src={Img5} alt="Img5" className="w-full h-full" />
                </div>
              </Fade>
            </div>
            {/* <Fade bottom>
              <div className="absolute left-20 bottom-20 flex flex-col max-w-sm border p-5 gap-4 h-56">
                <h2 className="font-bold text-2xl">2. Prototyping</h2>
                <span>
                  First we will create a low fidelity prototype that is a visual
                  product interface of your product on paper. Then we will
                  create a high fidelity prototype that is a detailed and
                  realistic design with all real elements just like a real
                  website.
                </span>
              </div>
            </Fade> */}
          </section>
          <section className="h-screen sticky top-0 z-50">
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75">
              <Fade bottom>
                <Image src={Img1} alt="Img1" className="w-full h-full" />
              </Fade>
            </div>
            {/* <Fade bottom>
              <div className="absolute right-20 top-20 flex flex-col max-w-sm border p-5 gap-4 h-56">
                <h2 className="font-bold text-2xl">3. MVP Development</h2>
                <span>
                  After the prototyping stage, we will launch a basic featured
                  version of your product and test the product in the market.
                  After launching the product we will focus on improving the
                  value stream to avoid waste value to the customer.
                </span>
              </div>
            </Fade> */}
          </section>
          <section className="h-screen sticky top-0 z-40">
            <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[72px] ">
              <Fade bottom>
                <div className="">
                  <Image src={Img3} alt="Img3" className="w-full h-full" />
                </div>
                <div className="">
                  <Image src={Img2} alt="Img2" className="w-full h-full" />
                </div>
              </Fade>
            </div>
            {/* <Fade bottom>
              <div className="absolute right-20 bottom-20 flex flex-col max-w-sm border p-5 gap-4 h-56">
                <h2 className="font-bold text-2xl">4. Idea Validation</h2>
                <span>
                  After successfully developing the MVP, we will test the MVP in
                  the market. We will market your product and get feedback and
                  reviews from the market then use an iteration of that data to
                  improve the overall quality of your product.
                </span>
              </div>
            </Fade> */}
          </section>
          <section className="h-screen sticky top-0 z-40">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.4] flex justify-center items-center gap-[10px]">
              <Fade bottom>
                <div className="">
                  <Image src={Fire1} alt="Fire1" className="w-full h-full" />
                </div>
                <div className="">
                  <Image src={Fire1} alt="Fire1" className="w-full h-full" />
                </div>
              </Fade>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AnimeRocket2;
