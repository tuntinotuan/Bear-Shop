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
interface CardProps {
  index?: number;
  name?: string;
  img?: string;
  price?: string;
  list_image?: string[];
}

const CardCus = (props: CardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.name}
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
                  {props?.list_image?.map((item, index) => (
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
          <b>{props.name}</b>
          <p className="text-default-500">{props.price}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardCus;
