import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Next from "@/components/Next";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="snap-center m-0 p-0">
        <Hero />
      </section>
      <section className="snap-center m-0 p-0 ">
        <Next />
      </section>
    </main>
  );
}

