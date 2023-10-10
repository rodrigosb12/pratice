import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-between p-24 bg-white'>
      <ul className='flex gap-11 items-center justify-center'>
        <Link
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          href='/formas'>
          Formas
        </Link>
        <Link
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          href='/cartas'>
          Cartas
        </Link>
      </ul>
    </main>
  );
}
