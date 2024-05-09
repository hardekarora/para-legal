import heroImg from "../assets/heroImg.jpeg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        One's Own
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
           Paralegal
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Make Your Documents easy to read.
      </p>
      
      <div className="flex mt-15  justify-center">
        <img  src={heroImg} alt="HeroImage"></img>
      </div>
    </div>
  );
};

export default HeroSection;
