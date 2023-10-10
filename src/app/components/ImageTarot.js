"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ImageTarot = () => {
  const images = [
    {
      id: 0,
      name: "O Louco",
      image: "cartas/louco.png",
    },
    {
      id: 1,
      name: "O Mago",
      image: "cartas/omago.png",
    },
    {
      id: 2,
      name: "A Sacerdotisa",
      image: "cartas/asacerdotisa.png",
    },
    {
      id: 3,
      name: "A Imperatriz",
      image: "cartas/aimperatriz.png",
    },
    {
      id: 4,
      name: "O Imperador",
      image: "cartas/oimperador.png",
    },
    {
      id: 5,
      name: "O Papa",
      image: "cartas/opapa.png",
    },
    {
      id: 6,
      name: "Os Enamorados",
      image: "cartas/osenamorados.png",
    },

    {
      id: 7,
      name: "O Carro",
      image: "cartas/ocarro.png",
    },
    {
      id: 8,
      name: "A Força",
      image: "cartas/aforca.png",
    },
    {
      id: 9,
      name: "O Eremita",
      image: "cartas/oeremita.png",
    },
    {
      id: 10,
      name: "A Roda da Fortuna",
      image: "cartas/rodadafortuna.png",
    },
    {
      id: 11,
      name: "A Justiça",
      image: "cartas/ajustica.png",
    },
    {
      id: 12,
      name: "O Enforcado",
      image: "cartas/oenforcado.png",
    },
    {
      id: 13,
      name: "A Morte",
      image: "cartas/amorte.png",
    },
    {
      id: 14,
      name: "A Temperança",
      image: "cartas/atemperanca.png",
    },
    {
      id: 15,
      name: "O Diabo",
      image: "cartas/odiabo.png",
    },
    {
      id: 16,
      name: "A Torre",
      image: "cartas/atorre.png",
    },
    {
      id: 17,
      name: "A Estrela",
      image: "cartas/aestrela.png",
    },
    {
      id: 18,
      name: "A Lua",
      image: "cartas/alua.png",
    },
    {
      id: 19,
      name: "O Sol",
      image: "cartas/osol.png",
    },
    {
      id: 20,
      name: "O Julgamento",
      image: "cartas/ojulgamento.png",
    },
    {
      id: 21,
      name: "O Mundo",
      image: "cartas/omundo.png",
    },
  ];

  const [randomImage, setRandomImage] = useState(images[0]);
  const [showAll, setShowAll] = useState(false);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newRandomImage = images[randomIndex];
    setRandomImage((prevState) => {
      return newRandomImage;
    });
  };

  const handleShowAll = () => {
    setShowAll((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center justify-center mx-auto mb-20'>
        <h1 className='text-xl text-black font-bold'>{`${randomImage.name}`}</h1>
        <Image
          src={"/images/" + `${randomImage.image}`}
          alt={`${randomImage.name}`}
          width={180}
          height={270}
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'
          onClick={handleButtonClick}>
          Gerar Imagem Aleatória
        </button>
      </div>
      <button
        className='bg-amber-400 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-10 flex mx-auto mb-10'
        onClick={handleShowAll}>
        Mostrar todas as imagens
      </button>
      {showAll && (
        <div className='flex items-center justify-around flex-wrap mb-10'>
          {images.map((image) => (
            <div className='flex flex-col items-center justify-center' key={image.id}>
              <h1 className='text-xl text-black font-bold'>{`${image.name}`}</h1>
              <Image
                src={"/images/" + `${image.image}`}
                alt={`${image.name}`}
                width={200}
                height={270}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageTarot;
