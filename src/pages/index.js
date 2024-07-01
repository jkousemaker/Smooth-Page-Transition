import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="">
      <Hero intro={"We build lovable products & experiences."} split={"Home"} />
      <div className="h-screen grid place-items-center">
        <h1 className="text-5xl font-black text-white">Projects</h1>
      </div>
    </main>
  );
}
