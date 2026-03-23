type Props = { title: string; subtitle?: string };
export const EmptyState = ({ title, subtitle }: Props) => (
  <div className="text-center py-16">
    <h3 className="text-lg font-semibold">{title}</h3>
    {subtitle && <p className="opacity-75 mt-1">{subtitle}</p>}
  </div>
);
