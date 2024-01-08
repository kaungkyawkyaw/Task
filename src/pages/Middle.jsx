import CountUp from "react-countup";

const Middle = () => {
  return (
    <div className=" py-5 bg-orange-100 my-10 rounded-2xl md:px-5 mx-auto ">
      <div className=" grid grid-flow-row gap-5  sm:grid-cols-12">
        <div className=" col-span-3 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl text-orange-500 xl:text-4xl">
            <CountUp start={0} end={10} duration={5} />
          </div>
          <p className=" opacity-70 w-20 ">world Of Experiences</p>
        </div>
        <div className=" col-span-3 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl text-orange-500 xl:text-4xl">
            <CountUp start={0} end={2} duration={5} />
            <span>K+</span>
          </div>
          <p className=" opacity-70">fine Destinations</p>
        </div>
        <div className=" col-span-3 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl text-orange-500 xl:text-4xl">
            <CountUp start={0} end={10} duration={5} />
            <span>K+</span>
          </div>
          <p className=" opacity-70">Customer Reviews</p>
        </div>
        <div className=" col-span-3 gap-1 flex justify-center items-center">
          <div className=" font-bold text-2xl text-orange-500 xl:text-4xl">
            <CountUp decimals={1} start={0} end={4.8} duration={5} />
          </div>
          <p className=" opacity-70">Overall Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
