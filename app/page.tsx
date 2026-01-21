export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-16 py-20 max-w-5xl mx-auto">
      {/* Hero */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Software Developer
        </h1>
        <p className="mt-6 text-muted-foreground max-w-xl text-lg">
          Computer Engineering student focused on building clean, reliable
          software systems.
        </p>
      </section>

      {/* Experience placeholder */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-10">Experience</h2>
        <p className="text-muted-foreground">Timeline coming online…</p>
      </section>

      {/* Projects placeholder */}
      <section>
        <h2 className="text-2xl font-semibold mb-10">Projects</h2>
        <p className="text-muted-foreground">
          Projects loading from deep space…
        </p>
      </section>
    </main>
  );
}
