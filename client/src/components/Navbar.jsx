import { ConnectWallet } from "@thirdweb-dev/react";
import searchImg from "./images/search-icon-png-5.png";
// import "./styles/Home.css";


export default function Navbar() {
  return (
    <>
      <div className="navbar bg-purple-900 h-20 flex justify-between">
        <div className="heading">
          <section className="text-purple-200 p-6 text-2xl">MetaRealms</section>
        </div>
        <div className="search-box h-max">
          <input className="mt-2 w-96 h-8 p-4 rounded-xl bg-gray-900 text-white" type="text" placeholder="Search"/>
          <button className="absolute ml-2 h-2 w-8 top-3">
            <img className="h-8 " src={searchImg} alt="" />
          </button>
          <ul className="flex justify-between mt-4">
            <li><a className="hover:text-white" href="#">Solutions</a></li>
            <li><a className="hover:text-white" href="#">Services</a></li>
            <li><a className="hover:text-white" href="#">Blog</a></li>
            <li><a className="hover:text-white" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="button float-right p-2 m-0 mr-4">
           <ConnectWallet /> 
        </div>
      </div>
    </>
  );
}
