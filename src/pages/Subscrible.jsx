import { Input } from "@mantine/core";
import { Button } from "@mantine/core";
const Subscrible = () => {
  return (
    <div className="container mb-10 h-[200px] mx-auto">
      <div className=" h-full flex flex-col gap-5 justify-center items-center ">
        <div className=" text-5xl font-bold">Sign up to our newsletter</div>
        <div className="flex justify-center items-center border rounded-lg">
          <Input placeholder="eg.example" />
          <Button variant="filled" color="orange">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscrible;
