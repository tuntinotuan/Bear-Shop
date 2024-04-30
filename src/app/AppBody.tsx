"use client";
import CardCus from "@/components/card/CardCus";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { db } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

async function fetchDataFromFirestore() {
  const querySnapshort = await getDocs(collection(db, "products"));
  const data: any = [];
  querySnapshort.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

interface ProductsProps {
  name: string;
  main_image: string;
  image: string[];
  price: number;
}

const AppBody = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    async function fetData() {
      const data = await fetchDataFromFirestore();
      setProducts(data);
    }
    fetData();
  }, []);
  console.log("products: ", products);
  const list = [
    {
      title: "Thỏ",
      img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/440754332_944547700697454_3896285286414812858_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BAIocdBaXAcAb4IOcCq&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCr1ytjbhyHjO4X-o7GD8bCLe1BQjVmUuVRtyrE3OcSyg&oe=66366516",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "",
      price: "$12.20",
    },
  ];
  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-4 p-5">
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      {products?.map((item, index) => (
        <CardCus
          key={index}
          name={item.name}
          img={item.main_image}
          price={item.price}
          onPress={onOpen}
        ></CardCus>
      ))}
    </div>
  );
};

export default AppBody;
