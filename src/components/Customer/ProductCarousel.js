import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CardMedia } from "@mui/material";
import { useEffect, useState } from "react";

const responsive = {
  0: { items: 1 },
  // 568: { items: 2 },
  // 1024: { items: 3 },
};

const triHardImages = [
  <CardMedia component="img" image="/images/tri-hard/trihard_1.jpeg" alt="" />,
  <CardMedia component="img" image="/images/tri-hard/trihard_2.jpeg" alt="" />,
  <CardMedia component="img" image="/images/tri-hard/trihard_3.jpeg" alt="" />,
  <CardMedia component="img" image="/images/tri-hard/trihard_4.jpeg" alt="" />,
  <CardMedia component="img" image="/images/tri-hard/trihard_6.jpeg" alt="" />,
  <CardMedia component="img" image="/images/tri-hard/trihard_7.jpeg" alt="" />,
  <CardMedia component="img" image="/images/tri-hard/trihard_8.jpeg" alt="" />,
];

const miniHangboardImages = [
  <CardMedia
    component="img"
    image="/images/mini-hangboard/mini_1.jpeg"
    alt=""
  />,
  <CardMedia
    component="img"
    image="/images/mini-hangboard/mini_2.jpeg"
    alt=""
  />,
  <CardMedia
    component="img"
    image="/images/mini-hangboard/mini_3.jpeg"
    alt=""
  />,
  <CardMedia
    component="img"
    image="/images/mini-hangboard/mini_4.jpeg"
    alt=""
  />,
  <CardMedia
    component="img"
    image="/images/mini-hangboard/mini_5.jpeg"
    alt=""
  />,
];

export default function ProductCarousel({ product }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    switch (product.name) {
      case "Tri-hard": {
        setImages(triHardImages);
        break;
      }
      case "Mini-hangboard": {
        setImages(miniHangboardImages);
        break;
      }
      default: {
        break;
      }
    }
  }, [product.name]);

  return (
    <AliceCarousel
      autoHeight
      mouseTracking
      items={images}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
}
