"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageGenerator = () => {
  const images = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "image10.png",
    "image11.png",
    "image12.png",
    "image13.png",
    "image14.png",
    "image15.png",
    "image16.png",
  ];

  const [randomImage, setRandomImage] = useState(images[0]);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newRandomImage = images[randomIndex];
    setRandomImage(newRandomImage);
  };

  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
      <Image src={`/images/${randomImage}`} alt='Random Image' width={180} height={270} />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'
        onClick={handleButtonClick}>
        Gerar Imagem Aleatória
      </button>
    </div>
  );
};

export default ImageGenerator;
