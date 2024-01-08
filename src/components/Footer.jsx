import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="  bg-orange-200">
        <div className="py-10 container my-5 mx-auto grid grid-cols-5 gap-y-5">
          <div className="  col-span-5 md:col-span-2">
            <div className=" flex flex-col gap-3 ">
              <div className="cursor-pointer flex justify-center items-center gap-1">
                <MdOutlineTravelExplore className=" text-2xl cursor-pointer" />
                <div className=" text-2xl font-bold">
                  TF<span className=" text-orange-500">I</span>
                </div>
              </div>
              <div className=" cursor-pointer  flex justify-center items-center gap-2">
                <FaFacebook className=" hover:animate-bounce text-xl text-orange-700" />
                <FaTwitter className=" hover:animate-bounce text-xl text-orange-700" />
                <FaInstagram className=" hover:animate-bounce text-xl text-orange-700" />
              </div>
            </div>
          </div>
          <div className=" col-span-5 md:col-span-1">
            <div className=" flex flex-col justify-center items-center md:items-start">
              <div className=" font-semibold">Information</div>
              <div className=" cursor-pointer flex flex-col list-none justify-center items-center md:items-start">
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  Home
                </li>
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  Explore
                </li>
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  Travel
                </li>
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  blog
                </li>
              </div>
            </div>
          </div>
          <div className=" col-span-5 md:col-span-1">
            <div className=" flex flex-col justify-center items-center md:items-start">
              <div className=" font-semibold">Helpful Links</div>
              <div className=" cursor-pointer flex flex-col list-none justify-center items-center md:items-start">
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  Destination
                </li>
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  Support
                </li>
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  Travel & Condition
                </li>
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  Privacy
                </li>
              </div>
            </div>
          </div>
          <div className=" col-span-5 md:col-span-1">
            <div className=" flex flex-col justify-center items-center md:items-start">
              <div className=" font-semibold">Contact Details</div>
              <div className=" cursor-pointer flex flex-col list-none justify-center items-center md:items-start">
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  +959445003009
                </li>
                <li className=" hover:translate-x-2 hover:text-orange-700">
                  tfi999@gmail.com
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-3 border-t-1 border-orange-300 flex justify-center items-center">
          © 2023 <span className=" text-orange-400">Company</span>, Inc. All
          rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
