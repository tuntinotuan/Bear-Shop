"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface CardProps {
  index?: number;
  title?: string;
  img?: string;
  price?: string;
}

const CardCus = (props: CardProps) => {
  return (
    <Card
      shadow="sm"
      key={props.index}
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={props.title}
          className="w-full object-cover h-[240px]"
          src={props.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{props.title}</b>
        <p className="text-default-500">{props.price}</p>
      </CardFooter>
    </Card>
  );
};

export default CardCus;
