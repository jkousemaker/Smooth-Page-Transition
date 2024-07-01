import Hero from "@/components/hero";

export default function Journal() {
  return (
    <main>
      <Hero split={"Journal"} />
      <div className="h-screen grid place-items-center">
        <h1 className="text-5xl font-black text-white">Projects</h1>
      </div>
    </main>
  );
}
