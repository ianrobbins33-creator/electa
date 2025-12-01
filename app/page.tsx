"use client";

import { useState } from "react";
import Image from "next/image";

const timeline = [
  {
    id: "early",
    label: "Early Life in Utah (1859–1880)",
    text: `Electa Louisa Lowder was born January 20, 1859, in West Jordan, Utah, to Richmond and Emily Lowder.
She grew up in a large, close-knit family where faith, work, and cooperation were daily lessons.
In 1877 she chose to be baptized, following the example of her parents and committing herself to the gospel.`,
  },
  {
    id: "marriage",
    label: "Marriage and Moving North (1880s)",
    text: `In 1880, Electa became the second wife of Thomas Walton.
New federal laws soon made plural marriage illegal, putting heavy pressure on families like theirs.
With courage and conviction, they left Utah and traveled to the rugged Star Valley of western Wyoming, helping build one of the first homes in Smoot.`,
  },
  {
    id: "service",
    label: "Relief Society and Service (Smoot Years)",
    text: `Life in Star Valley was harsh, with long winters, hard work, and limited supplies.
Electa met it all with quiet strength. She served as a midwife, tended the sick, and opened her home to anyone in need.
For about twenty years she led the Relief Society sisters in Smoot, organizing quilting bees, providing clothing, and strengthening testimonies.`,
  },
  {
    id: "afton",
    label: "Afton and Temple Work (Later Years)",
    text: `After decades in Smoot, Electa and Thomas moved to Afton, Wyoming.
There she continued to serve in Relief Society and devoted much of her time to genealogy and temple work, traveling often to the Logan Temple.
Even as age and illness slowed her body, her faith stayed steady. She passed away August 7, 1939, leaving a legacy of quiet discipleship.`,
  },
];

const photos = [
  {
    src: "/electa-seated.jpg",
    alt: "Electa with her sisters Esther Ann and Harriet Adelia Lowder",
    caption:
      "Electa with her sisters Esther Ann and Harriet Adelia outside a simple wooden home.",
  },
  {
    src: "/electa-and-sisters.jpg",
    alt: "Electa seated with a book in her hands",
    caption: "Electa in later life, calm and composed, holding a book.",
  },
  {
    src: "/electa-portrait.jpg",
    alt: "Close portrait of Electa Louisa Lowder Walton",
    caption: "A closer portrait of Electa, the face her family remembers.",
  },
];


export default function Home() {
  const [activeTimeline, setActiveTimeline] = useState(timeline[0].id);
  const [activePhoto, setActivePhoto] = useState(photos[0]);

  const activeTimelineItem = timeline.find((t) => t.id === activeTimeline)!;

  return (
    <div className="min-h-screen bg-[#DDD8C4] px-4 text-slate-900">
      <main className="mx-auto flex max-w-5xl flex-col gap-14 py-10 md:py-16">
        {/* HERO */}
        <section className="rounded-3xl bg-[#50808E] px-6 py-8 text-[#DDD8C4] shadow-lg md:px-8">
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#DDD8C4]/90">
                Family History · Pioneer Heritage
              </p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Electa Louisa Lowder Walton
              </h1>
              <p className="text-sm text-[#DDD8C4]/90">
                1859–1939 · West Jordan, Utah → Star Valley and Afton, Wyoming
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#DDD8C4]">
                This interactive page shares the life of my ancestor, Electa, her
                journey from a young girl in Utah to a beloved Relief Society
                president in the mountains of Wyoming.
              </p>
              <p className="mt-3 max-w-xl rounded-2xl bg-[#A3C9A8]/20 px-4 py-3 text-sm italic text-[#DDD8C4]">
                “Researching Electa’s life has taught me the importance of service
                and staying steadfast to your testimony of Jesus Christ.”
              </p>
            </div>

            {/* Main Photo (interactive selection controls which one) */}
            <div className="flex justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] bg-[#A3C9A8] shadow-xl ring-4 ring-[#84B59F]">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  className="object-contain"
                  sizes="256px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE / STORY */}
        <section className="space-y-6 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Her Story Through Time
            </h2>
            <p className="max-w-2xl text-sm text-slate-700">
              Click through the moments below to see how Electa&apos;s life moved
              from Utah to the mountain valleys of Wyoming.
            </p>
          </header>

          {/* Timeline buttons */}
          <div className="flex flex-wrap gap-3">
            {timeline.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTimeline(item.id)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  activeTimeline === item.id
                    ? "border-transparent bg-[#69A297] text-white shadow-sm"
                    : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Active timeline content */}
          <div className="rounded-2xl bg-[#A3C9A8]/20 p-5 text-sm leading-relaxed text-slate-800">
            {activeTimelineItem.text.split("\n").map((p, i) => (
              <p key={i} className={i > 0 ? "mt-3" : ""}>
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="space-y-6 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Faces and Places
            </h2>
            <p className="max-w-2xl text-sm text-slate-700">
              Use the thumbnails to change the main photo. Imagine these scenes
              against mountain backdrops, dirt roads, and simple pioneer homes.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-[3fr,2fr] md:items-start">
            <div className="space-y-3">
              <div className="relative h-72 overflow-hidden rounded-3xl bg-[#A3C9A8]/40 shadow-lg ring-1 ring-slate-300">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 32rem, 100vw"
                />
              </div>
              <p className="text-xs text-slate-700">{activePhoto.caption}</p>
            </div>

            {/* Thumbnails */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#50808E]">
                Photo Gallery
              </p>
              <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                {photos.map((photo) => (
                  <button
                    key={photo.src}
                    onClick={() => setActivePhoto(photo)}
                    className={`relative flex h-24 items-center overflow-hidden rounded-2xl border text-left shadow-sm transition ${
                      activePhoto.src === photo.src
                        ? "border-[#50808E] ring-2 ring-[#50808E]"
                        : "border-slate-200 hover:border-[#84B59F]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                    <div className="relative z-10 bg-gradient-to-r from-black/60 to-transparent px-3 py-2 text-[11px] font-medium text-slate-50">
                      {photo.alt}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* POEM (COLLAPSIBLE) */}
        <PoemSection />

        {/* REFLECTION / ASSIGNMENT HELP */}
        <section className="space-y-4 rounded-3xl bg-[#84B59F]/40 p-6 shadow-sm ring-1 ring-[#84B59F]/60 md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-[#243B4A]">
            Her Legacy and My Takeaways
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#243B4A]">
            Electa&apos;s story is not about fame or dramatic events. It is about
            showing up, quilting for others, visiting the sick, answering calls to
            serve, and quietly strengthening her community. Mountain valleys and
            pioneer roads were the backdrop, but her discipleship was the real
            journey.
          </p>
          <div className="grid gap-3 text-sm text-[#243B4A] md:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
              <h3 className="text-sm font-semibold">Service</h3>
              <p className="mt-1 text-xs">
                How did Electa&apos;s constant service, especially as Relief Society
                president, shape the people around her?
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
              <h3 className="text-sm font-semibold">Courage</h3>
              <p className="mt-1 text-xs">
                What did it take to leave Utah and start again in Star Valley to
                live the laws she believed in?
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
              <h3 className="text-sm font-semibold">Connection</h3>
              <p className="mt-1 text-xs">
                How does her temple and genealogy work connect you to her today, and
                how might you continue that work?
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/** Collapsible Poem Section */
function PoemSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="space-y-4 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Sentiments of the Sisters
          </h2>
          <p className="max-w-xl text-sm text-slate-700">
            In 1909, Maria Lucinda Jensen of Smoot, Wyoming, wrote a poem to honor
            Electa&apos;s tireless service as Relief Society president. Click below
            to read it.
          </p>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#50808E] px-5 py-2 text-xs font-semibold text-[#DDD8C4] shadow-sm transition hover:bg-[#69A297]"
        >
          {open ? "Hide Poem" : "Read the Poem"}
        </button>
      </header>

      {open && (
        <div className="max-h-[28rem] overflow-y-auto rounded-2xl bg-[#A3C9A8]/20 p-4 text-sm leading-relaxed text-slate-900 ring-1 ring-slate-200">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#50808E]">
            “Sentiments of the Sisters to Their President Electa Walton”
          </p>
          <p className="whitespace-pre-line">
            Brother Walton may think he don&apos;t need her,
            {"\n"}But I tell you what! We Sisters do.
            {"\n"}For without her at our quilting and rag bees,
            {"\n"}I&apos;m afraid we&apos;d never get thru.
            {"\n\n"}When she comes and finds things are not ready
            {"\n"}To start with our work meeting day,
            {"\n"}She pitches right in then to help us,
            {"\n"}And how she does things is no play.
            {"\n\n"}She hurries off to get everything needful.
            {"\n"}If it&apos;s quilting she&apos;ll go get the frame out.
            {"\n"}The things that she does to help us all
            {"\n"}Would make anyone else but her lame.
            {"\n\n"}She&apos;ll go carry machines to the church house,
            {"\n"}And then she&apos;ll go carry them back.
            {"\n"}&quot;Oh dear&quot;, how tired a man&apos;s feet would be
            {"\n"}If he once tried to follow her track.
            {"\n\n"}Then she russels the cloth and the cotton,
            {"\n"}And she russels the hammer &amp; nails.
            {"\n"}And she hurries around with such clatter,
            {"\n"}She makes all the rest seem like snails.
            {"\n\n"}Then while we all stand round and wonder
            {"\n"}And talk about what&apos;s best do do,
            {"\n"}She quietly gets our her tacks and her thread,
            {"\n"}And before we all know it, she&apos;s thru.
            {"\n\n"}When we don&apos;t know just what kind of a pattern
            {"\n"}Would look best on this kind of a quilt,
            {"\n"}Whether a fan or a star or a diamond
            {"\n"}Or a flower that never would wilt,
            {"\n\n"}We stand there and talk over the puzzle,
            {"\n"}And get our thread and our needles and thimble,
            {"\n"}And then someone is sent to find Lecty.
            {"\n"}It&apos;s generally the one that&apos;s most nimble.
            {"\n\n"}Then quickly she comes and with motion quite steady,
            {"\n"}She marks off a figure with chalk and a string.
            {"\n"}Then very soon she has everything ready,
            {"\n"}But you see folks, without her we can&apos;t do a thing.
            {"\n\n"}If we&apos;re sick she&apos;s right on hand to help,
            {"\n"}Or no matter what may be our needs.
            {"\n"}She&apos;s always quite ready and willing
            {"\n"}To help us with kind words and good deeds.
            {"\n\n"}So we&apos;ve come here to show you how grateful
            {"\n"}We all are, dear Friend, for your aid.
            {"\n"}But we know for your kindness toward us
            {"\n"}By us you can never be paid.
            {"\n\n"}So we&apos;ll ask the kind Father to bless you
            {"\n"}With wealth, health, and strength to be able
            {"\n"}To bear needful trials and burdens,
            {"\n"}And still keep strong as our love, and our token, this table.
          </p>
        </div>
      )}
    </section>
  );
}
