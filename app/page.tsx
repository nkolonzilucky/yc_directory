import Image from "next/image";

export default function Home() {
  return (
    <h1 className="text-4xl">Hello World <span className="hover:motion-preset-bounce hover:motion-duration-2000 hover:cursor-pointer active:motion-preset-fade">👋🏿</span></h1>
  );
}
