"use client";
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";

const ImageTarot = () => {
  const images = [
    {
      id: 0,
      name: "O Louco",
      image: "cartas/louco.png",
      description:
        "O Louco simboliza novos começos, novas experiências, simboliza o início da jornada. Quando aparece em uma consulta, geralmente indica que está na hora de deixar para trás tudo que empata nossos objetivos, como medos, dúvidas e preocupações, para trilhar novos rumos. A carta sugere que esse novo começo seja empreendido de braços abertos e com alegria.",
    },
    {
      id: 1,
      name: "O Mago",
      image: "cartas/omago.png",
      description:
        "A carta O Mago traz a mensagem de que seus talentos e seus próprios dons são as chaves para o seu sucesso em qualquer situação questionada. É como se você tivesse todas as ferramentas que precisa bem na sua frente para garantir que o sucesso potencial se manifeste. É uma carta que está diretamente ligada ao instinto e a intuição. Quando você está sentindo um impulso ou uma vontade grande de fazer alguma coisa e O Mago aparece em sua leitura, siga essa intuição e as coisas podem acontecer. Pode indicar também uma pessoa dominadora ou que a situação deve ser resolvida com inteligência, praticidade e racionalidade, além de anunciar o começo de uma relação amorosa, mas que pode conter traços de impulsividade.",
    },
    {
      id: 2,
      name: "A Sacerdotisa",
      image: "cartas/asacerdotisa.png",
      description:
        "A Sacerdotisa é um lembrete de que não temos como saber de tudo acerca de uma situação. Indica que ou não recebemos todos os fatos, ou não enxergamos todos os fatos ou outras pessoas podem estar retendo informações importantes. Quando esta carta aparece, indica segredos e que é melhor procurar pelas respostas. Você deve ponderar sobre a situação e saber que pode haver alguns acontecimentos ocorrendo nos bastidores dos quais você não tem total conhecimento. A carta mostra que para sabermos toda a verdade sobre algo, temos que usar todos os recursos disponíveis, como nossa intuição, nosso poder de convencimento e a reflexão.A Sacerdotisa é um arcano altamente espiritual, mas não é limitada a isso. Ela lida com fatos e sugere que não temos acesso a todos eles no momento. Por isso ela não é uma carta que nos convida para a ação mas sim, de maneira sutil, nos convida para a reflexão. Quanto mais ponderamos sobre uma situação, mais temos chance de obter as respostas que buscamos.",
    },
    {
      id: 3,
      name: "A Imperatriz",
      image: "cartas/aimperatriz.png",
      description:
        "Quando a Imperatriz aparece em uma consulta, geralmente indica que as coisas vão bem na situação questionada, como se cada coisa estivesse em seu devido lugar, exatamente como desejado. Também pode trazer informações sobre o tema Mãe, seja sobre você no papel de mãe, sobre uma figura materna em sua vida ou na situação em questão. A Imperatriz é uma figura poderosa e muito segura de si. Sugere proteção e não questiona as decisões. Com a certeza de uma mãe cria bem seus filhos, ela não sugere dúvidas. Esta carta geralmente indica um bom presságio, assim como realização e sucesso.",
    },
    {
      id: 4,
      name: "O Imperador",
      image: "cartas/oimperador.png",
      description:
        "Quando o imperador aparece em uma consulta, sugere que você está prestes a alcançar seus objetivos ou está no caminho certo. A conexão com Áries também tem a ver com liderança, controle e realização, ou seja, às vezes sugere que você assumirá um papel de líder ou controlará um problema. Pode indicar que este é um bom momento para iniciar um grande projeto, fazer orçamentos ou que novas oportunidades também podem surgir. De qualquer forma, pode ser importante procurar conselhos com uma figura de autoridade, como seu pai ou outra figura paterna antes de tomar decisões importantes.",
    },
    {
      id: 5,
      name: "O Papa",
      image: "cartas/opapa.png",
      description: "",
    },
    {
      id: 6,
      name: "Os Enamorados",
      image: "cartas/osenamorados.png",
      description: "",
    },

    {
      id: 7,
      name: "O Carro",
      image: "cartas/ocarro.png",
      description: "",
    },
    {
      id: 8,
      name: "A Força",
      image: "cartas/aforca.png",
      description: "",
    },
    {
      id: 9,
      name: "O Eremita",
      image: "cartas/oeremita.png",
      description: "",
    },
    {
      id: 10,
      name: "A Roda da Fortuna",
      image: "cartas/rodadafortuna.png",
      description: "",
    },
    {
      id: 11,
      name: "A Justiça",
      image: "cartas/ajustica.png",
      description: "",
    },
    {
      id: 12,
      name: "O Enforcado",
      image: "cartas/oenforcado.png",
      description: "",
    },
    {
      id: 13,
      name: "A Morte",
      image: "cartas/amorte.png",
      description: "",
    },
    {
      id: 14,
      name: "A Temperança",
      image: "cartas/atemperanca.png",
      description: "",
    },
    {
      id: 15,
      name: "O Diabo",
      image: "cartas/odiabo.png",
      description: "",
    },
    {
      id: 16,
      name: "A Torre",
      image: "cartas/atorre.png",
      description: "",
    },
    {
      id: 17,
      name: "A Estrela",
      image: "cartas/aestrela.png",
      description: "",
    },
    {
      id: 18,
      name: "A Lua",
      image: "cartas/alua.png",
      description: "",
    },
    {
      id: 19,
      name: "O Sol",
      image: "cartas/osol.png",
      description: "",
    },
    {
      id: 20,
      name: "O Julgamento",
      image: "cartas/ojulgamento.png",
      description: "",
    },
    {
      id: 21,
      name: "O Mundo",
      image: "cartas/omundo.png",
      description: "",
    },
  ];

  const [randomImage, setRandomImage] = useState(images[0]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newRandomImage = images[randomIndex];
    setRandomImage((prevState) => {
      return newRandomImage;
    });
  };

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [randomImage.image]);

  const handleShowAll = () => {
    setShowAll((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center justify-center mx-auto mb-20'>
        <h1 className='text-xl text-black font-bold'>{`${randomImage.name}`}</h1>
        {isLoading ? (
          <div className='text-black font-bold my-auto flex'>Carregando</div>
        ) : (
          <div className='w-80 flex flex-col items-center justify-center'>
            <Image
              src={"/images/" + `${randomImage.image}`}
              alt={`${randomImage.name}`}
              width={180}
              height={270}
            />
            <p className='text-gray-500 text-sm mt-4 w-full'>{randomImage.description}</p>
          </div>
        )}
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'
          onClick={handleButtonClick}>
          Gerar Imagem Aleatória
        </button>
      </div>
      {isOpen ? (
        <button
          className='bg-amber-400 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-10 flex mx-auto mb-10'
          onClick={() => {
            handleShowAll();
            toggleIsOpen();
          }}>
          Ocultar todas as imagens
        </button>
      ) : (
        <button
          className='bg-amber-400 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-10 flex mx-auto mb-10'
          onClick={() => {
            handleShowAll();
            toggleIsOpen();
          }}>
          Mostrar todas as imagens
        </button>
      )}

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
