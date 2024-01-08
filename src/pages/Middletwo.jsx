import { AiFillCrown } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import {
  GiAbstract049,
  GiAbstract027,
  GiAnthem,
  GiAtSea,
} from "react-icons/gi";
const Middletwo = () => {
  return (
    <div className=" py-5 mt-10 rounded-2xl md:px-5 mx-auto ">
      <div className=" grid grid-flow-row gap-5  sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-2 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl flex justify-center items-center text-slate-300 xl:text-4xl">
            <AiFillCrown />
            CVON
          </div>
        </div>
        <div className="col-span-12 sm:col-span-2 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl flex justify-center items-center text-slate-300 xl:text-4xl">
            <FiPackage />
            AKOI
          </div>
        </div>
        <div className="col-span-12 sm:col-span-2 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl flex justify-center items-center text-slate-300 xl:text-4xl">
            <GiAbstract049 /> KAM
          </div>
        </div>
        <div className="col-span-12 sm:col-span-2 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl flex justify-center items-center text-slate-300 xl:text-4xl">
            <GiAbstract027 /> LIOU
          </div>
        </div>
        <div className="col-span-12 sm:col-span-2 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl flex justify-center items-center text-slate-300 xl:text-4xl">
            <GiAnthem />
            TYOI
          </div>
        </div>
        <div className="col-span-12 sm:col-span-2 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl flex justify-center items-center text-slate-300 xl:text-4xl">
            <GiAtSea />
            PIOL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middletwo;
