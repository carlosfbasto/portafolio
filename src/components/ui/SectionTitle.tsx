type SectionTitleProps = {
  id: string;
  title: string;
  description?: string;
};

export function SectionTitle({ id, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-blue-600" aria-hidden="true" />
      {description ? <p className="mt-4 text-slate-600">{description}</p> : null}
    </div>
  );
}
