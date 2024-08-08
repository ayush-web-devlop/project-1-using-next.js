import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-x-14 relative top-24">
      <div className="w-96 flex flex-col gap-5 items-start">
        <h1 className="font-bold text-4xl ">Better design for your digital product</h1>
        <p className="text-wrap text-2xl">
          Turning your ideas into reality. We bring together the team from the global tech industry
        </p>
        <button className="p-3 bg-green-400 rounded-lg">See our works</button>
      </div>
      <div>
      <Image src="/hero.png" height={200} width={400} alt="hero image" 
      className="animate-bounce"
      />
      </div>
    </div>
  );
}
