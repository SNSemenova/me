export default function SectionName({ name = "Experience" }) {
  return (
    <div className="pt-2 px-3">
      <div className="relative">
        <h2 className="whitespace-pre-wrap border-b-2 border-b-solid border-foreground text-lg uppercase">
          {name}
        </h2>
      </div>
    </div>
  );
}
