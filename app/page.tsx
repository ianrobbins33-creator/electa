import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 px-4 text-zinc-900 dark:from-black dark:to-zinc-900 dark:text-zinc-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-16 py-12 md:py-20">
        {/* HERO SECTION */}
        <section className="grid items-center gap-10 md:grid-cols-[3fr,2fr]">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-zinc-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600 dark:bg-zinc-50/10 dark:text-zinc-300">
              A Legacy of Faith &amp; Service
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Electa Louisa Lowder Walton
            </h1>
            <p className="text-lg font-medium text-zinc-600 dark:text-zinc-300">
              1859 – 1939 · West Jordan, Utah → Star Valley &amp; Afton, Wyoming
            </p>
            <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Electa grew up in a home of faith, crossed state lines to stand by her
              convictions, helped build new communities in the rugged valleys of
              western Wyoming, and quietly blessed nearly every family she met.
            </p>
            <p className="border-l-2 border-zinc-300 pl-4 text-sm italic text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
              “Researching Electa’s life has taught me the importance of service and
              staying steadfast to your testimony of Jesus Christ.”
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl bg-zinc-200 shadow-xl ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-zinc-50/10">
              <Image
                src="/electa-portrait.jpg"
                alt="Portrait of Electa Louisa Lowder Walton"
                fill
                className="object-cover"
                sizes="256px"
                priority
              />
            </div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="space-y-8">
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Her Story</h2>
            <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              Drawn from family records, local histories, and temple work, this
              biography traces Electa’s journey from a young girl in West Jordan to a
              beloved Relief Society president in Star Valley and Afton, Wyoming.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Early Life */}
            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/70 dark:bg-zinc-900/60 dark:ring-zinc-700/80">
              <h3 className="text-lg font-semibold">Early Life in Utah</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Electa Louisa Lowder was born on January 20, 1859, in West Jordan,
                Utah, to Richmond and Emily Lowder, the middle of eight children.
                In a home centered on faith, work, and cooperation, she learned early
                to be steady, dependable, and kind. She was baptized on November 2,
                1877, choosing for herself the path she had watched her parents walk.
              </p>
            </article>

            {/* Pioneer Faith */}
            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/70 dark:bg-zinc-900/60 dark:ring-zinc-700/80">
              <h3 className="text-lg font-semibold">Pioneer Faith &amp; Polygamy</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                In 1880, Electa became the second wife of Thomas Walton. Just two
                years later, the Edmunds Act made plural marriage illegal, placing
                faithful families like theirs under intense pressure. To protect
                their family and live their beliefs, they left Utah and journeyed
                north to the wild Star Valley of western Wyoming, where they helped
                build the first home in what would become Smoot.
              </p>
            </article>

            {/* Service in Smoot */}
            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/70 dark:bg-zinc-900/60 dark:ring-zinc-700/80">
              <h3 className="text-lg font-semibold">Relief Society President</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Star Valley life was demanding—long winters, scarce supplies, and
                hard farm work. Electa met it all with quiet courage. She served as
                a midwife and caregiver, opened her home to those in need, and for
                twenty years led the sisters of Smoot as Relief Society president.
                Her leadership was gentle but firm, rooted in testimony and love.
              </p>
            </article>

            {/* Afton & Temple Work */}
            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/70 dark:bg-zinc-900/60 dark:ring-zinc-700/80">
              <h3 className="text-lg font-semibold">Afton &amp; Temple Service</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                After twenty-six years in Smoot, Electa and Thomas moved to Afton in
                1918. There she served as a counselor in the Relief Society
                presidency and devoted much of her time to temple and genealogy work,
                traveling often to the Logan Temple. Even as her health declined, she
                remained cheerful, patient, and full of faith until her passing on
                August 7, 1939, at age eighty.
              </p>
            </article>
          </div>
        </section>

        {/* SISTERS PHOTO SECTION */}
        <section className="grid gap-8 md:grid-cols-[2fr,3fr] md:items-center">
          <div className="relative h-72 overflow-hidden rounded-3xl bg-zinc-200 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-zinc-50/10">
            <Image
              src="/electa-and-sisters.jpg"
              alt="Electa with her sisters Esther Ann and Harriet Adelia Lowder"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Sisters in Life &amp; in Faith
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Electa (center) is pictured here with her sisters Esther Ann and
              Harriet Adelia Lowder. Together they weathered loss, hardship, and
              the demands of pioneer life.
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              These sisters would have shared more than chores and quilting frames:
              they shared testimonies, family stories, and the quiet strength that
              comes from enduring trials together.
            </p>
          </div>
        </section>

        {/* POEM SECTION */}
        <section className="space-y-6">
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              “Sentiments of the Sisters to Their President Electa Walton”
            </h2>
            <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              In 1909, Maria Lucinda Jensen of Smoot, Wyoming, wrote this poem to
              honor Electa’s tireless service as Relief Society president.
            </p>
          </header>

          <div className="max-h-[28rem] overflow-y-auto rounded-3xl bg-white/90 p-6 text-sm leading-relaxed shadow-sm ring-1 ring-zinc-200/80 backdrop-blur-sm dark:bg-zinc-900/80 dark:text-zinc-100 dark:ring-zinc-700/80">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
              By Maria Lucinda Jensen · Smoot, Wyoming · January 20, 1909
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
        </section>

        {/* LEGACY / PERSONAL CONNECTION */}
        <section className="space-y-4 border-t border-dashed border-zinc-300 pt-8 dark:border-zinc-700">
          <h2 className="text-xl font-semibold tracking-tight">Her Legacy</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Electa&apos;s life was not dramatic in the way history books often tell
            stories—no famous speeches or grand monuments. Instead, her legacy lives
            in quilts stitched late at night, meals carried to neighbors, babies
            safely delivered, and testimonies strengthened in tiny frontier
            meetinghouses.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            This page is one small way of saying thank you—for the faith she held
            onto, the work she did quietly, and the example she left of what it means
            to follow Jesus Christ by serving His children one by one.
          </p>
        </section>
      </main>
    </div>
  );
}
