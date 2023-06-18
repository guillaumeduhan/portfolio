"use client";
export default function Home() {
  const openURL = (url: string, target = "_blank") => {
    window.open(url, target);
  };
  return (
    <main className="container w-full mx-auto">
      <header className="flex flex-col items-center justify-center my-8">
        <h1 className="mb-1 text-xl font-medium text-center">
          Guillaume Duhan
        </h1>
        <p className="text-sm font-normal text-center text-slate-400">
          CTO @ Allocations.com, tech advisor & youtuber
        </p>
      </header>
      <div className="text-center">
        <h3 className="font-bold leading-[1.2] text-8xl mb-6">
          Building the #1
          <br />
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-300">
            fund admin platform
          </span>
        </h3>
        <button onClick={() => openURL("https://allocations.com")}>
          Go to Allocations.com
        </button>
      </div>
    </main>
  );
}
