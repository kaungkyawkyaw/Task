import { Button } from "@mantine/core";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { FaLocationDot } from "react-icons/fa6";

const Popular = () => {
  return (
    <div className=" my-10 container mx-auto">
      <div className=" w-full h-full flex flex-col gap-10">
        <div className=" flex flex-col">
          <h1 className=" text-5xl font-bold">Popular Place</h1>
          <div className=" hidden md:flex justify-end items-center gap-x-5">
            <a className=" hover:border-b-2 hover:border-orange-400" href="">
              All
            </a>
            <a className=" hover:border-b-2 hover:border-orange-400" href="">
              Beach
            </a>
            <a className=" hover:border-b-2 hover:border-orange-400" href="">
              Island
            </a>
            <a className=" hover:border-b-2 hover:border-orange-400" href="">
              Mountain
            </a>
            <a
              href=""
              className=" py-2 px-3 bg-orange-100 rounded-3xl text-orange-400"
            >
              Show all
            </a>
          </div>
        </div>
        <div className=" flex flex-wrap gap-10 justify-center items-center">
          <Card isFooterBlurred className="w-[300px] h-[300px]">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Island</p>
                  <div className=" flex">
                    <span className=" text-slate-200">
                      <FaLocationDot />
                    </span>
                    <p className="text-tiny text-white/60">
                      Lorem, ipsum dolor.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                color="rgba(255, 252, 252, 1)"
                radius="xl"
                size="sm"
              >
                4.5
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-[300px] h-[300px]">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8fHww"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Island</p>
                  <div className=" flex">
                    <span className=" text-slate-200">
                      <FaLocationDot />
                    </span>
                    <p className="text-tiny text-white/60">
                      Lorem, ipsum dolor.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                color="rgba(255, 252, 252, 1)"
                radius="xl"
                size="sm"
              >
                4.5
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-[300px] h-[300px]">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGJlYWNofGVufDB8fDB8fHww"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Island</p>
                  <div className=" flex">
                    <span className=" text-slate-200">
                      <FaLocationDot />
                    </span>
                    <p className="text-tiny text-white/60">
                      Lorem, ipsum dolor.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                color="rgba(255, 252, 252, 1)"
                radius="xl"
                size="sm"
              >
                4.5
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Popular;
