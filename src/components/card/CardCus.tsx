"use client";
import React, { useEffect } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import CardPrice from "./CardPrice";
import Hotline from "../contact/Hotline";
interface CardProps {
  index?: number;
  name?: string;
  img?: string;
  price?: number;
  list_image?: string[];
}

const CardCus = (props: CardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  let newImages = [];
  if (props.img && props.list_image) {
    newImages.unshift(props.img, ...props.list_image);
    console.log("newImages", newImages);
  }
  return (
    <>
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center justify-between gap-1 px-20">
                <p className="capitalize">{props.name}</p>
                <CardPrice price={props.price}></CardPrice>
                <Hotline />
              </ModalHeader>
              <ModalBody>
                <Swiper
                  cssMode={true}
                  grabCursor={true}
                  spaceBetween={15}
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                >
                  {newImages?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        radius="lg"
                        alt={`${index}`}
                        width="100%"
                        className="!object-contain h-[500px]"
                        src={item}
                      ></Image>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Card shadow="sm" key={props.index} isPressable onPress={onOpen}>
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
          <b className="capitalize">{props.name}</b>
          <CardPrice price={props.price}></CardPrice>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardCus;
