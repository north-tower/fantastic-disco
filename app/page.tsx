import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Next from "@/components/Next";
import Image from "next/image";

export default function Home() {
  return (
    <main >
 
   <section className="snap-center">

   <Hero />

   </section>
   <section className="snap-center">

   <Next />

   </section>
    </main>
  );
}
