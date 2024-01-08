import { Input, Select } from "@mantine/core";
const Home = () => {
  return (
    <>
      <div className=" my-14 container mx-auto md:py-[32px]">
        <div className=" flex flex-col xl:flex-row justify-between xl:items-end">
          {/* left */}
          <div className=" flex flex-col items-start gap-3">
            {/* title */}
            <h1 className=" text-[60px] font-bold leading-[64px]">
              Explore
              <br />
              Beautiful
              <br />
              World!
            </h1>
            {/* searchbar */}
            <div className=" mx-auto flex flex-col justify-center gap-3 my-5 p-5 items-center border rounded-2xl">
              <div className=" flex flex-col sm:flex-row justify-center items-center">
                <div>
                  <Select
                    w={"100px"}
                    withCheckIcon={false}
                    label="Location"
                    placeholder="select"
                    data={["All", "Nature", "Beach", "Mountain"]}
                    searchable
                    nothingFoundMessage="Nothing found..."
                  />
                </div>
                <div>
                  <Select
                    w={"120px"}
                    withCheckIcon={false}
                    label="Budget"
                    placeholder="select"
                    data={[
                      "$500-$1000",
                      "$1000-$1500",
                      "$1500-$2000",
                      "$2000+",
                    ]}
                    searchable
                    nothingFoundMessage="Nothing found..."
                  />
                </div>
                <div>
                  <Input.Wrapper label="Date input">
                    <Input type="date" placeholder="Input component" />
                  </Input.Wrapper>
                </div>
              </div>
              <div className=" border py-1 w-full text-center rounded-2xl bg-orange-500">
                Done
              </div>
            </div>
          </div>
          {/*right*/}
          <div className=" flex justify-center items-center">
            <div className=" w-[400px] h-[400px] rounded-xl overflow-hidden">
              <img
                className=" w-[100%] h-[100%] object-cover "
                src="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGVyfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
