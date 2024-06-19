import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import HomeComponent from "@/components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header/>
      <HomeComponent/>
    </main>
  );
}
