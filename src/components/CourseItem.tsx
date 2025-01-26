export default function CourseItem({
  courseTitle = "Web Interface Layout",
  institution = "7bits",
}) {
  return (
    <div className="flex flex-col justify-between group">
      <div>
        <div className="py-2 px-3">
          <h3 className="text-sky-500 text-sm font-bold mt-1">{courseTitle}</h3>
          <div>
            <span className="text-xs">{institution}</span>
          </div>
        </div>
      </div>
      <div className="mx-2 relative top-1/2 group-last:invisible">
        <div className="h-px border-b border-dashed border-slate-300" />
      </div>
    </div>
  );
}
