interface FooterColumnProps {
  title: string;
  links: string[];
  badge?: string;
  badgeIndex?: number;
}

export const FooterColumn = ({
  title,
  links,
  badge,
  badgeIndex,
}: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h6 className="font-medium">{title}</h6>
      {links.map((link, index) => (
        <p
          key={index}
          className="flex cursor-pointer items-center gap-x-2 hover:underline"
        >
          {link}
          {badge && badgeIndex === index && (
            <span className="rounded bg-neutral-50 p-1 text-xs uppercase text-neutral-900">
              {badge}
            </span>
          )}
        </p>
      ))}
    </div>
  );
};
