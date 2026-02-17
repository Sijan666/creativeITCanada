import Image from "next/image";
import Banner from "./layouts/Banner";
import Achievement from "./layouts/Achievement";
import About from "./layouts/About";
import Service from "./layouts/Service";

export default function Home() {
  return (
    <>
    <Banner/>
    <Achievement/>
    <About/>
    <Service/>
    </>
  );
}
