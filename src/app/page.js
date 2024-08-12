import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full mb-24">
        <div className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-center rounded-lg shadow-lg space-y-8"
          style={{ backgroundImage: `url(/gradient-bg.png)` }}>
          <h1 className="font-bold text-6xl leading-snug">Crafting Exceptional Websites for Your Unique Vision</h1>
          <p className="text-xl">Transforming ideas into stunning, functional websites. Let's create something extraordinary together.</p>
          <div>
            <button className="bg-neutral-950 hover:bg-neutral-900 text-white py-4 px-12 rounded-lg"><Link href="/contact">Let's go !</Link></button>
          </div>
        </div>
      </section>

      <section className="flex justify-around  w-full py-6 px-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">My skills</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum eu metus eu rhoncus.<br/>Suspendisse potenti. Duis at nibh ipsum.</p>
          <div className="flex gap-6 font-medium mt-6 text-slate-700">
            <span className="bg-green-300 py-1 px-2 rounded-md">MongoDB</span>
            <span className="bg-slate-300 py-1 px-2 rounded-md">Express</span>
            <span className="bg-blue-300 py-1 px-2 rounded-md">React JS</span>
            <span className="bg-green-300 py-1 px-2 rounded-md">Node JS</span>
            <span className="bg-neutral-300 py-1 px-2 rounded-md">Next JS</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2 text-xl font-medium">
          <h3>MongoDB</h3>
          <progress className="border-[1px] " value={0.5} />
          <h3>Express</h3>
          <progress value={0.5} />
          <h3>React JS</h3>
          <progress value={0.5} />
          <h3>Node JS</h3>
          <progress value={0.5} />
          <h3>Next JS</h3>
          <progress value={0.5} />
        </div>
      </section>
    </main>
  );
}
