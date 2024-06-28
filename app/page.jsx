import Image from "next/image";
import Slider from "./componenets/Slider";
import NewsSection from "./componenets/NewsSection";

export default function Home() {
  return (
    <div>
      <Slider/>
      <NewsSection/>
    </div>
  );
}
