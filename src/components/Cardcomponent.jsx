import { Button } from "@mantine/core";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { FaLocationDot } from "react-icons/fa6";
const Cardcomponent = (props) => {
  const { title, name, image, rating } = props;
  return (
    <Card isFooterBlurred className="w-[300px] h-[300px]">
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={image}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{title}</p>
            <div className=" flex">
              <span className=" text-slate-200">
                <FaLocationDot />
              </span>
              <p className="text-tiny text-white/60">{name}</p>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          color="rgba(255, 252, 252, 1)"
          radius="xl"
          size="sm"
        >
          {rating}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cardcomponent;
