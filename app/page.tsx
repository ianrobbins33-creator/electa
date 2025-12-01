"use client";

import { useState } from "react";
import Image from "next/image";

const timeline = [
  {
    id: "early",
    label: "Early Life in Utah (1859-1880)",
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
    src: "/electa-and-sisters.jpg",
    alt: "Portrait of Electa Walton in later life",
    caption:
      "Electa Walton in later life, seated with a calm and thoughtful expression.",
  },
  {
    src: "/electa-seated.jpg",
    alt: "Electa with her sisters Esther Ann and Harriet Adelia Lowder",
    caption:
      "Electa with her sisters Esther Ann and Harriet Adelia outside a simple wooden home.",
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
    <div className="min-h-screen bg-gradient-to-b from-[#F5EFFF] via-[#E5D9F2] to-[#CDC1FF] px-4 text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 py-10 md:py-16">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-[#7371FC] via-[#A594F9] to-[#CDC1FF] px-6 py-10 text-[#F5EFFF] shadow-2xl md:px-10">
          {/* soft blobs */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#F5EFFF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-[-6rem] h-80 w-80 rounded-full bg-[#E5D9F2]/25 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[3fr,2.5fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F5EFFF]/80">
                Family History · Pioneer Heritage
              </p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Electa Louisa Lowder Walton
              </h1>
              <p className="text-sm text-[#F5EFFF]/90">
                1859-1939 · West Jordan, Utah → Star Valley and Afton, Wyoming
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F5EFFF]">
                This website shares the life of my ancestor, Electa, her journey
                from a young girl in Utah to a beloved Relief Society president
                in the mountain valleys of Wyoming.
              </p>
              <p className="mt-4 max-w-xl rounded-2xl bg-[#F5EFFF]/15 px-4 py-3 text-sm italic text-[#F5EFFF]">
                “Researching Electa&apos;s life has taught me the importance of
                service and staying steadfast to your testimony of Jesus Christ.”
              </p>
            </div>

            {/* hero photo with floating card */}
            <div className="relative flex justify-center">
              <div className="relative h-72 w-72 overflow-hidden rounded-[3rem] bg-[#F5EFFF]/20 shadow-[0_30px_60px_rgba(0,0,0,0.35)] ring-2 ring-[#F5EFFF]/40">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-contain"
                  sizes="288px"
                  priority
                />
              </div>

              {/* floating label */}
              <div className="absolute -bottom-6 left-1/2 w-64 -translate-x-1/2 rounded-2xl bg-[#F5EFFF]/80 px-4 py-3 text-xs font-medium text-[#4B4B6A] shadow-lg backdrop-blur">
                Portrait of Electa Walton in later life, the calm center of a very
                busy life of service.
              </div>
            </div>
          </div>
        </section>

        {/* STORY + TIMELINE */}
        <section className="grid gap-10 md:grid-cols-[2.1fr,1.7fr] md:items-start">
          {/* text side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7371FC] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7371FC]" />
              Her Story Through Time
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-800">
              Move along the timeline to see how Electa&apos;s life unfolded,
              from a childhood in West Jordan, Utah, to a life of quiet leadership
              and temple work in Wyoming.
            </p>

            {/* active timeline text in a soft panel */}
            <div className="rounded-[2rem] bg-white/70 p-6 text-sm leading-relaxed text-slate-900 shadow-md shadow-[#CDC1FF]/60 backdrop-blur">
              {activeTimelineItem.text.split("\n").map((p, i) => (
                <p key={i} className={i > 0 ? "mt-3" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* timeline controls in a pill row */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7371FC]">
              Timeline
            </p>
            <div className="flex flex-col gap-3">
              {timeline.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTimeline(item.id)}
                  className={`group flex items-center gap-3 rounded-[999px] px-4 py-3 text-left text-xs sm:text-sm transition-transform ${
                    activeTimeline === item.id
                      ? "bg-gradient-to-r from-[#A594F9] to-[#7371FC] text-white shadow-lg shadow-[#A594F9]/60"
                      : "bg-white/70 text-slate-800 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                      activeTimeline === item.id
                        ? "bg-white/20 text-white"
                        : "bg-[#E5D9F2] text-[#7371FC]"
                    }`}
                  >
                    {item.id === "early"
                      ? "1"
                      : item.id === "marriage"
                      ? "2"
                      : item.id === "service"
                      ? "3"
                      : "4"}
                  </span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7371FC]">
                Photo Gallery
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Faces and Places
              </h2>
            </div>
            <p className="max-w-xl text-xs md:text-sm text-slate-700">
              Tap a thumbnail to bring that scene to the front. Try imagining the
              colors, sounds, and stories behind each image.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[3fr,2fr] md:items-start">
            {/* big image */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/70 p-3 shadow-lg shadow-[#CDC1FF]/70 backdrop-blur">
              <div className="relative h-80 overflow-hidden rounded-[2rem] bg-[#E5D9F2]">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 32rem, 100vw"
                />
              </div>
              <p className="mt-3 text-xs text-slate-700">{activePhoto.caption}</p>
            </div>

            {/* thumbnails in a more playful layout */}
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
              {photos.map((photo) => (
                <button
                  key={photo.src}
                  onClick={() => setActivePhoto(photo)}
                  className={`relative flex h-24 items-end overflow-hidden rounded-[1.75rem] bg-[#F5EFFF] text-left shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg ${
                    activePhoto.src === photo.src
                      ? "ring-2 ring-[#7371FC]"
                      : "ring-1 ring-[#E5D9F2]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="relative z-10 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-[11px] font-medium text-white">
                    {photo.alt}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* POEM */}
        <PoemSection />

        {/* REFLECTION */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#A594F9] to-[#7371FC] p-8 text-[#F5EFFF] shadow-2xl md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-[#F5EFFF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-[-4rem] h-72 w-72 rounded-full bg-[#E5D9F2]/25 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[2fr,1.6fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                Her Legacy and My Takeaways
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-[#F5EFFF]/95">
                Electa&apos;s story is not about fame or dramatic events. It is
                about showing up, quilting for others, visiting the sick,
                answering calls to serve, and quietly strengthening her community.
                Mountains and long winters were the backdrop, but her discipleship
                was the real journey.
              </p>
            </div>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-[#F5EFFF]/12 p-4 shadow-sm ring-1 ring-[#F5EFFF]/25">
                <h3 className="text-sm font-semibold">Service</h3>
                <p className="mt-1 text-xs text-[#F5EFFF]/90">
                  How did Electa&apos;s constant service, especially as Relief
                  Society president, shape the people around her?
                </p>
              </div>
              <div className="rounded-2xl bg-[#F5EFFF]/12 p-4 shadow-sm ring-1 ring-[#F5EFFF]/25">
                <h3 className="text-sm font-semibold">Courage</h3>
                <p className="mt-1 text-xs text-[#F5EFFF]/90">
                  What did it take to leave Utah and start again in Star Valley
                  to live the laws she believed in?
                </p>
              </div>
              <div className="rounded-2xl bg-[#F5EFFF]/12 p-4 shadow-sm ring-1 ring-[#F5EFFF]/25 md:col-span-2">
                <h3 className="text-sm font-semibold">Connection</h3>
                <p className="mt-1 text-xs text-[#F5EFFF]/90">
                  How does her temple and genealogy work connect you to her
                  today, and how might you continue that work for your own
                  family?
                </p>
              </div>
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
    <section className="space-y-4 rounded-[2.5rem] bg-white/70 p-6 shadow-md shadow-[#CDC1FF]/70 backdrop-blur md:p-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Sentiments of the Sisters
          </h2>
          <p className="max-w-xl text-sm text-slate-700">
            In 1909, Maria Lucinda Jensen of Smoot, Wyoming, wrote a poem to
            honor Electa&apos;s tireless service as Relief Society president. Click
            below to read it.
          </p>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#7371FC] px-5 py-2 text-xs font-semibold text-[#F5EFFF] shadow-sm transition hover:bg-[#A594F9]"
        >
          {open ? "Hide Poem" : "Read the Poem"}
        </button>
      </header>

      {open && (
        <div className="max-h-[28rem] overflow-y-auto rounded-[2rem] bg-[#E5D9F2]/70 p-4 text-sm leading-relaxed text-slate-900 ring-1 ring-[#CDC1FF]/80">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#7371FC]">
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
