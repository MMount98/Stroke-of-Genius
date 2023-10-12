import Image from "next/image";
import Type from "../Images/SOGType.jpeg";

export default function Home() {
  return (
    <main>
      <div className=" flex justify-center min-h-screen">
        <div className="flex flex-col items-center m-16">
          <Image src={Type} width={250} height={250} />
          <h1 className="text-center font-mono text-white">
            Creative Hospitality Agency
          </h1>
        </div>
      </div>

    </main>
  );
}
