import Image from "next/image";

export const images = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/5e7f533c3b4f46244ca228af62e83dfa.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/ebcd65fa9fb83580062e7052fa6ee5a5.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/f446d7a2a155c6120742978fb528fb82.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/095217fdb4f228410df09b18f151be28.jpe",
];

function Intro() {
  return (
    <div className="relative w-screen left-1/2 ml-[-50vw]">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-5 scale-110">
          {images.map((url, i) => (
            <div
              key={i}
              className="bg-gray-100 overflow-hidden shadow rotate-12 border-l border-r border-neutral-700"
            >
              <div className="relative pt-[300%] -mx-[50%]">
                <Image
                  fill
                  priority
                  src={url}
                  alt="intro"
                  className="grayscale brightness-50 hover:grayscale-0 hover:brightness-100 
                  object-cover object-center -rotate-12 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Intro;
