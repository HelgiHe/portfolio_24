import { Hero } from "@/components/home/Hero";
import { MoreWork } from "@/components/home/MoreWork";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <MoreWork />
      </main>
    </>
  );
}
