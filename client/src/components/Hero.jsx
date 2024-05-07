// import "./styles/Home.css";
import bgimg from "/public/bg.png"

export default function Hero() {
  return (
      <div className="bg-black py-20 px-4 md:px-0 flex items-center">
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row items-start  justify-between">
          <div className="text-left  md:mr-12">
            <h1 className="text-4xl ml-28 md:text-5xl lg:text-8xl font-bold text-white mb-4" style={{ fontFamily: "'Roboto Slab', serif" }}>
              Welcome to Metarealms 
            </h1>
            <p className="text-xl ml-28 md:text-2xl lg:text-4xl font-light text-gray-600 mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              The only solution for DeFi Scalability
            </p>
            <button className="bg-purple-900 hover:bg-blue-200 ml-28 text-white font-bold text-lg md:text-xl lg:text-2xl py-5 px-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Yield
            </button>
          </div>
          <div className="hidden md:block w-596 h-896 bg-transparent ml-12">
            {/* Add your image here */}
            <img src={bgimg} alt="HealthLens Image" className="object-contain  absolute h-100 right-20 bottom-2"  />
          </div>
        </div>
      </div>
    </div>
  );
}
