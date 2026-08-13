import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary">
          Note Mind
        </p>
        <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
          Capture ideas before they disappear.
        </h1>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A focused space for collecting, organizing, and returning to the notes
          that matter.
        </p>
        <Link
          href="/login"
          className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
