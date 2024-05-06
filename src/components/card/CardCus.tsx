"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tabs,
  Tab,
} from "@nextui-org/react";
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
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

interface CardProps {
  index?: number;
  name?: string;
  img?: string;
  des?: string;
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
              <ModalHeader className="flex items-center justify-between gap-1 px-20 max-sm:flex-col">
                <p className="capitalize">{props.name}</p>
                <CardPrice price={props.price}></CardPrice>
                <Hotline />
              </ModalHeader>
              <Tabs aria-label="Options" className="mx-auto" color="secondary">
                <Tab
                  key="pictures"
                  title={
                    <div className="flex items-center gap-2 mx-4">
                      <PermMediaOutlinedIcon fontSize="small"></PermMediaOutlinedIcon>
                      <span>Hình ảnh</span>
                    </div>
                  }
                >
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
                            className="!object-contain h-[450px] max-sm:h-[250px]"
                            src={item}
                          ></Image>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </ModalBody>
                </Tab>
                <Tab
                  key="description"
                  title={
                    <div className="flex items-center gap-2 mx-4">
                      <AssignmentOutlinedIcon></AssignmentOutlinedIcon>
                      <span>Mô tả</span>
                    </div>
                  }
                >
                  <Card>
                    <CardBody>
                      {props.des || "Not thing!! Release soon <3"}
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
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
