import Image from "next/image";
import ImageGenerator from "./components/Image";

export default function Home() {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-between p-24 bg-white'>
      <div className='flex flex-col items-center justify-center'>
        <ImageGenerator />
      </div>
    </main>
  );
}
