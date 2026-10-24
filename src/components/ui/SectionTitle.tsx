type SectionTitleProps = {
  id: string;
  title: string;
  description?: string;
};

export function SectionTitle({ id, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2
        id={id}
        className="text-[28px] font-bold leading-9 tracking-[-0.02em] text-fg sm:text-[40px] sm:leading-[48px] sm:tracking-[-0.025em]"
      >
        {title}
      </h2>
      <div
        className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary"
        aria-hidden="true"
      />
      {description ? <p className="mt-4 text-muted">{description}</p> : null}
    </div>
  );
}
