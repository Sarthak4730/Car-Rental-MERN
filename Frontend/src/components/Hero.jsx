import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold absolute left-[34vw] top-[30vh]"> Luxury Cars on Rent </h1>
      <img className="ml-[18vw] h-[75vh]" src={hero} alt="hero-car-bmw-i4-fully-electric" />
    </div>
  )
}

export default Hero;