import Image from "next/image";
import { ThreeDCardDemo } from "./components/Card";
import { DotBackgroundDemo } from "./components/Background";
import CardThreeJS from "./components/CardThreejs";

export default function Home() {
  return (
    <main>
      {/* <DotBackgroundDemo />
      <ThreeDCardDemo /> */}
      <CardThreeJS />
    </main>
  );
}
