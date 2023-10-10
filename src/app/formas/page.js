import Link from "next/link";
import ImageGenerator from "../components/ImageGenerator";
const Formas = () => {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-between p-24 bg-white'>
      <div className='flex flex-col items-center justify-center'>
        <ImageGenerator />
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        <Link href='/'>Voltar</Link>
      </button>
    </main>
  );
};

export default Formas;
