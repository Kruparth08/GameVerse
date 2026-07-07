import { ArrowRight, Download, Gamepad2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-purple-500/10 p-10 md:p-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10">
            <Gamepad2 size={40} className="text-cyan-400" />
          </div>

          <h2 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Ready to Level Up Your Gaming Experience?
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Join millions of players, discover amazing games, compete in tournaments,
            follow creators, and become part of the GameVerse community.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300">
              Get Started
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:border-cyan-400/40">
              <Download size={20} />
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;