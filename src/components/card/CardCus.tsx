"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface CardProps {
  index?: number;
  name?: string;
  img?: string;
  price?: string;
  onPress(): void;
}

const CardCus = (props: CardProps) => {
  return (
    <Card shadow="sm" key={props.index} isPressable onPress={props.onPress}>
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          shadow="sm"
          radius="lg"
          width="100%"
          alt={props.name}
          className="w-full object-cover h-[240px]"
          src={props.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{props.name}</b>
        <p className="text-default-500">{props.price}</p>
      </CardFooter>
    </Card>
  );
};

export default CardCus;
