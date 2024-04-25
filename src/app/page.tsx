import Image from "next/image";
import { DotBackgroundDemo } from "./components/Background";
import CardThreeJS from "./components/CardThreejs";

export default function Home() {
  return (
    <main>
      <DotBackgroundDemo>
        <CardThreeJS />
      </DotBackgroundDemo>
    </main>
  );
}
