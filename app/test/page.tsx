export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="group relative flex h-[200px] w-[300px] items-center justify-center overflow-hidden rounded-[15px] bg-[#111] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
          <h2 className="relative z-10 text-2xl text-[#0ff]">Holographic</h2>

          <div className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] rotate-[-45deg] bg-gradient-to-b from-transparent via-transparent to-[rgba(0,255,255,0.3)] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-full group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
}
