import Cardcomponent from "../components/Cardcomponent";

const Popular = () => {
  const data = [
    {
      id: 1,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.5,
    },
    {
      id: 2,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://plus.unsplash.com/premium_photo-1665311513485-e15c3f8c833d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpcHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 3.5,
    },
    {
      id: 3,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFya3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 3.8,
    },
    {
      id: 4,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
      rating: 4.5,
    },
    {
      id: 5,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
      rating: 3.5,
    },
    {
      id: 6,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNpdHl8ZW58MHx8MHx8fDA%3D",
      rating: 3.8,
    },
    {
      id: 7,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
      rating: 4.3,
    },
    {
      id: 8,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXNsYW5kfGVufDB8fDB8fHww",
      rating: 3.6,
    },
    {
      id: 9,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D",
      rating: 4.5,
    },
  ];
  return (
    <div className=" my-10 container mx-auto">
      <div className=" w-full h-full flex flex-col gap-10">
        <div className=" flex flex-col">
          <h1 className=" text-5xl font-bold">Explore Place</h1>
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
          {data?.map((product) => {
            return <Cardcomponent key={product?.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
