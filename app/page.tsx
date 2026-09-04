import Image from "next/image";

const tjanster = [
  {
    titel: "[Tjänst 1]",
    beskrivning: "[Ersätt med en kort beskrivning av er första tjänst.]",
  },
  {
    titel: "[Tjänst 2]",
    beskrivning: "[Ersätt med en kort beskrivning av er andra tjänst.]",
  },
  {
    titel: "[Tjänst 3]",
    beskrivning: "[Ersätt med en kort beskrivning av er tredje tjänst.]",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <nav className="sticky top-0 z-10 w-full border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <Image
            src="/logo.png"
            alt="Sannaudio AB"
            width={1374}
            height={504}
            priority
            className="h-9 w-auto dark:invert"
          />
          <div className="flex gap-6 text-sm">
            <a href="#om-oss" className="hover:underline">
              Om oss
            </a>
            <a href="#tjanster" className="hover:underline">
              Tjänster
            </a>
            <a href="#kontakt" className="hover:underline">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center">
          <h1>
            <Image
              src="/logo.png"
              alt="Sannaudio AB"
              width={1374}
              height={504}
              priority
              className="h-32 w-auto dark:invert sm:h-48 md:h-64 lg:h-80"
            />
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            [Ersätt med en kort och tydlig beskrivning av vad ni gör och för
            vem.]
          </p>
          <a
            href="#kontakt"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Kontakta oss
          </a>
        </section>

        {/* Om oss */}
        <section
          id="om-oss"
          className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
        >
          <h2 className="text-2xl font-semibold">Om oss</h2>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
            [Ersätt med text om företaget: vilka ni är, er bakgrund och vad som
            gör er unika.]
          </p>
        </section>

        {/* Tjänster */}
        <section
          id="tjanster"
          className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
        >
          <h2 className="text-2xl font-semibold">Tjänster</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {tjanster.map((tjanst) => (
              <div
                key={tjanst.titel}
                className="rounded-xl border border-black/10 p-6 dark:border-white/10"
              >
                <h3 className="font-medium">{tjanst.titel}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {tjanst.beskrivning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Kontakt */}
        <section
          id="kontakt"
          className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
        >
          <h2 className="text-2xl font-semibold">Kontakt</h2>
          <div className="mt-4 flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
            <a href="mailto:info@sannaudio.se" className="hover:underline">
              info@sannaudio.se
            </a>
            <span>[Ersätt med telefonnummer]</span>
            <span>[Ersätt med adress, om relevant]</span>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        © {new Date().getFullYear()} Sannaudio AB. Alla rättigheter förbehållna.
      </footer>
    </div>
  );
}
