import { Card, Image } from "@nextui-org/react";

const Gallery = () => {
  return (
    <div className=" my-10 container mx-auto">
      <div className=" w-full h-full flex flex-col gap-y-10">
        <div className=" flex items-end justify-between">
          <h1 className=" text-5xl font-bold">
            Our Gallery
            <span className="hidden sm:inline text-small">
              Lorem ipsum dolor sit.
            </span>
          </h1>
          <a
            href=""
            className=" hidden sm:flex py-2 px-3 bg-orange-100 rounded-3xl text-orange-400"
          >
            Show all
          </a>
        </div>
        <div className=" flex flex-wrap gap-10 justify-center items-center">
          <div className=" w-full gap-5 grid grid-cols-12 grid-rows-2 px-8">
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1609541348087-83d44b945654?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbCUyMGltYWdlfGVufDB8fDB8fHww"
              />
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://media.istockphoto.com/id/119583904/photo/floating-market.webp?s=170667a&w=0&k=20&c=4dM6DdM7onFwfmIdU0E-dbRkPy3T-4WqXD6Hy2Xy_Jg="
              />
            </Card>
            <Card className="col-span-12 sm:col-span-3 h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://media.istockphoto.com/id/1450052495/photo/happy-family-with-car-travel-road-trip-summer-vacation-in-car-in-the-sunset-dad-mom-and.webp?b=1&s=170667a&w=0&k=20&c=D82m4Xy6TOuN4ljE_9DVjSSvU8_xFXrltTvGOAKi3Ic="
              />
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7"
            >
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1616172582706-fa96ef25f612?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
              />
            </Card>
            <Card className="col-span-12 sm:col-span-5 h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1669050700606-bf8f42f5a76d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxKQ3YyNW5PaFZCRXx8ZW58MHx8fHx8"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
