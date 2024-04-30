import CardCus from "@/components/card/CardCus";
import React from "react";

const AppBody = () => {
  const list = [
    {
      title: "Thỏ",
      img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/440754332_944547700697454_3896285286414812858_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BAIocdBaXAcAb4IOcCq&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCr1ytjbhyHjO4X-o7GD8bCLe1BQjVmUuVRtyrE3OcSyg&oe=66366516",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];
  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-4 p-5">
      {list.map((item, index) => (
        <CardCus
          key={index}
          title={item.title}
          img={item.img}
          price={item.price}
        ></CardCus>
      ))}
    </div>
  );
};

export default AppBody;
