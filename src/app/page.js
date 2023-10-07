import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


config.autoAddCss = false; 

export default function Home() {
  return (
    <main>
      <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5">
        <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
          <h1 className="text-5xl">
            We are <b>Almost</b> there!
          </h1>
          <p>Stay tuned for something amazing!</p>

          <div className="mt-10 mb-5">
            <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
              <div className="rounded-full bg-black text-xs leading-none  text-white py-1 w-3/4 ">
                75%
              </div>
            </div>
            <div className="m-10">
            <a href="https://www.linkedin.com/company/stroke-of-genius-co/">
               <FontAwesomeIcon icon={faLinkedin} className="px-5"/>
            </a>
            <a href="https://www.instagram.com/strokeofgeniusco/">
               <FontAwesomeIcon icon={faInstagram} className="px-5"/>
            </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
