import Image from "next/image";

// images
import Img1 from "../public/imgs/rocketParts/1.png";
import Img2 from "../public/imgs/rocketParts/2.png";
import Img3 from "../public/imgs/rocketParts/3.png";
import Img4 from "../public/imgs/rocketParts/4.png";
import Img5 from "../public/imgs/rocketParts/5.png";
import Img6 from "../public/imgs/rocketParts/6.png";
import Fire1 from "../public/imgs/rocketParts/fire1.png";

const Rocket = ({ data }) => {
  const {
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
  } = data;

  return (
    <section className="section scrolling-section">
      <div className="flex">
        <div className="w-full overflow-y-clip">
          <div className="h-screen sticky top-0 z-10">
            <div className="absolute scale-[1.8] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image src={Img6} alt="Img6" className="w-full h-full" />
            </div>
            <div className="animeBox left-16 top-20">
              <h2 className="font-bold text-2xl capitalize">{title1}</h2>
              <span className="text-sm">{desc1}</span>
            </div>
          </div>
          <div className="h-screen sticky top-0 z-30">
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[140px]">
              <div className="transform scale-[1.5]">
                <Image src={Img4} alt="Img4" className="w-full h-full" />
              </div>
              <div className="transform scale-[1.5]">
                <Image src={Img5} alt="Img5" className="w-full h-full" />
              </div>
            </div>
            <div className="absolute left-16 top-[40%] flex flex-col">
              <div className="animeBox-inner mb-4">
                <h2 className="font-bold text-2xl capitalize">{title2}</h2>
                <span className="text-sm">{desc2}</span>
              </div>
              <div className="animeBox-inner">
                <h2 className="font-bold text-2xl capitalize">{title3}</h2>
                <span className="text-sm">{desc3}</span>
              </div>
            </div>
          </div>
          <div className="h-screen sticky top-0 z-50">
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75">
              <Image src={Img1} alt="Img1" className="w-full h-full" />
            </div>
            <div className="animeBox right-20 top-20">
              <h2 className="font-bold text-2xl capitalize"> {title4}</h2>
              <span className="text-sm">{desc4}</span>
            </div>
          </div>
          <div className="h-screen sticky top-0 z-40">
            <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[72px] ">
              <div className="">
                <Image src={Img3} alt="Img3" className="w-full h-full" />
              </div>
              <div className="">
                <Image src={Img2} alt="Img2" className="w-full h-full" />
              </div>
            </div>
            <div className="absolute right-20 top-[40%] flex flex-col max-w-sm gap-4">
              <div className="animeBox-inner">
                <h2 className="font-bold text-2xl capitalize"> {title5}</h2>
                <span className="text-sm">{desc5}</span>
              </div>
              <div className="animeBox-inner mt-5">
                <h2 className="font-bold text-2xl capitalize"> {title6}</h2>
                <span className="text-sm">{desc6}</span>
              </div>
            </div>
          </div>
          <div className="h-screen sticky top-0 z-40">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.4] flex justify-center items-center gap-[10px]">
              <div className="">
                <Image src={Fire1} alt="Fire1" className="w-full h-full" />
              </div>
              <div className="">
                <Image src={Fire1} alt="Fire1" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rocket;
