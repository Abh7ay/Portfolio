export default function ProfileShowcaseCard() {
  const card = {
    title: 'Scalable Systems',
    badge: 'Abhishek Mathur',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop',
  };

  return (
    <div
      className="relative aspect-[4/5] w-[min(80vw,460px)] lg:w-[min(36vw,460px)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[24px] border border-white/10 bg-[var(--card-bg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backface-hidden">
        <div className="group relative h-full w-full">
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:-translate-y-2"
            loading="lazy"
            draggable="false"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.02)_0%,rgba(15,15,15,0.16)_42%,rgba(6,6,6,0.84)_100%)]" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[23px] border border-white/7" />
          <div className="absolute top-5 right-5 left-5 flex items-center justify-between text-white">
            <div className="inline-flex items-center rounded-full bg-black/28 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] backdrop-blur">
              {card.badge}
            </div>
            <div className="rounded-full border border-white/16 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black">
              Build
            </div>
          </div>
          <div className="absolute right-0 bottom-0 left-0 p-6 text-white sm:p-7">
            <div className="mb-2 text-[11px] uppercase tracking-[0.32em] text-white/58">
              Portfolio Snapshot
            </div>
            <div className="text-2xl tracking-tight">{card.title}</div>
            <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/70">
              Frontend engineering, intelligent systems, and scalable product
              thinking for modern digital experiences.
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,#2B0D3E_0%,#4D2165_52%,#7A3F91_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backface-hidden"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div className="relative flex h-full w-full flex-col justify-between p-6 text-white sm:p-7">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center rounded-full border border-white/16 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] backdrop-blur">
              Abhishek Mathur
            </div>
            <div className="rounded-full border border-white/16 bg-black/18 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
              Back
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.32em] text-white/55">
              Software Developer
            </div>
            <div className="text-3xl leading-[0.95] tracking-tight sm:text-4xl">
              React, AI
              <br />
              and System Design
            </div>
            <p className="max-w-[18rem] text-sm leading-6 text-white/76">
              Building scalable web apps and intelligent interfaces with modern
              frontend tooling, Python, and machine learning.
            </p>
          </div>

          <div className="flex items-end justify-between text-sm text-white/72">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/48">
                Based In
              </div>
              <div className="mt-1 font-medium text-white">Delhi, India</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/48">
                GitHub
              </div>
              <div className="mt-1 font-medium text-white">@Abh7ay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
