type Props = {
  points: string[];
};

export default function Points({ points }: Props) {
  if (!points.length) return null;

  return (
    <ul className="mt-3">
      {points.map((point) => (
        <li key={point} className="flex flex-nowrap text-xs gap-1">
          <span className="text-xs">•</span>
          <div className="text-xs">{point}</div>
        </li>
      ))}
    </ul>
  );
}
