import Image from "next/image";
import Type from "../Images/SOGType.jpeg";
import Disturb from "../Images/DoDisturb.png";
import Stories from "../Images/BusyTellingStories.png";
import Remodel from "../Images/ALittleRemodeling.png";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex flex-col items-center m-16">
          <Image src={Type} width={350} height={62} />
          <h1 className="text-center font-mono text-white md:text-2xl">
            Creative Hospitality Agency
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-white">
        <div className="flex flex-col md:flex-row justify-around w-full md:w-4/5 space-y-8 md:space-y-0">
          <div className="flex flex-col items-center">
            <Image
              src={Stories}
              alt="Busy Telling Stories"
              width={198}
              height={350}
            />
            <Image
              src={Remodel}
              alt="a little remodeling"
              width={150}
              height={300}
              className="relative left-0 md:left-28 bottom-0 md:bottom-40"
            />
          </div>
          <div className="flex flex-col items-center pt-20">
            <h2 className="text-3xl md:text-5xl text-white font">
              Coming Soon...
            </h2>
            <a
              href="mailto:admin@strokeofgeniusco.com"
              className="mt-48 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition duration-300"
            >
              CONTACT US
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={Disturb}
              alt="Do Not Distrub"
              width={150}
              height={300}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
