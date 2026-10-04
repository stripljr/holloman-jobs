type PageHeaderProps = {
  kicker: string;
  title: string;
  lede: string;
};

export function PageHeader({ kicker, title, lede }: PageHeaderProps) {
  return (
    <header className="border-b border-line bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-turquoise uppercase">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.08] text-ink md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{lede}</p>
      </div>
    </header>
  );
}
