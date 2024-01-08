import { MdOutlineTravelExplore } from "react-icons/md";
import { Button } from "@mantine/core";
import { IoMenu } from "react-icons/io5";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
const Navbarr = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className=" fixed w-full z-50 top-0 py-3 border-b-1 backdrop-blur-lg ">
        <div className="flex justify-between items-center mx-6 ">
          <div className=" flex justify-center items-center gap-1">
            <MdOutlineTravelExplore className=" text-2xl cursor-pointer" />
            <div className=" text-2xl font-bold">
              TF<span className=" text-orange-500">I</span>
            </div>
          </div>
          <div className=" hidden font-semibold list-none gap-x-5 sm:flex justify-center items-center">
            <a
              href="#Home"
              className=" cursor-pointer hover:border-b-2 hover:border-b-orange-400"
            >
              Home
            </a>
            <a
              href="#Category"
              className=" cursor-pointer hover:border-b-2 hover:border-b-orange-400"
            >
              Category
            </a>
            <a
              href="#Blog"
              className=" cursor-pointer hover:border-b-2 hover:border-b-orange-400"
            >
              Blog
            </a>
            <a
              href="#Aboutus"
              className=" cursor-pointer hover:border-b-2 hover:border-b-orange-400"
            >
              About us
            </a>
          </div>
          <div className=" flex justify-center gap-1 items-center">
            <div className=" sm:hidden text-2xl">
              <IoMenu onClick={open} />
            </div>
            <div>
              <Button variant="outline" color="orange" size="sm" radius="xl">
                Login
              </Button>
            </div>
          </div>
          <Drawer position="right" size="60%" opened={opened} onClose={close}>
            <ul className=" list-none flex flex-col items-center gap-y-5">
              <a
                href="#Home"
                className=" cursor-pointer hover:border-b-2 hover:border-b-orange-400"
              >
                Home
              </a>
              <a
                href="#Category"
                className=" cursor-pointer hover:border-b-2 hover:border-b-orange-400"
              >
                Category
              </a>
              <a
                href="#Blog"
                className=" cursor-pointer hover:border-b-2 hover:border-b-orange-400"
              >
                Blog
              </a>
              <a
                href="#Aboutus"
                className=" cursor-pointer hover:border-b-2 hover:border-b-orange-400"
              >
                About us
              </a>
            </ul>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbarr;
