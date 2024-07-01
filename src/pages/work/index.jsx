import Hero from "@/components/hero";

export default function Work() {
  return (
    <main>
      <Hero
        intro={
          "Nous créons des interactions harmonieuses entre les humains et le monde digital."
        }
        split={"Work"}
      />
      <div className="h-screen grid place-items-center">
        <h1 className="text-5xl font-black text-white">Projects</h1>
      </div>
    </main>
  );
}
