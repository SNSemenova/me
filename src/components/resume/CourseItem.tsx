type CourseItemProps = {
  institution?: string;
  institutionLink?: string;
};

const courses = [
  "Web Interfaces development",
  "Programming language Java",
  "Project management and soft skills",
];

export default function CourseItem({
  institution,
  institutionLink,
}: CourseItemProps) {
  return (
    <div className="flex flex-col justify-between group">
      <div>
        <div className="py-2 px-3">
          {courses.map((course) => (
            <h3 key={course} className="text-sky-500 text-sm font-bold">
              {course}
            </h3>
          ))}
          <a
            href={institutionLink}
            target="_blank"
            className={`text-xs mt-2 hover:underline hover:underline-offset-4 ${institution ? "block" : "hidden"}`}
          >
            {institution}
          </a>
        </div>
      </div>
      <div className="mx-2 relative top-1/2 group-last:invisible">
        <div className="h-px border-b border-dashed border-slate-300" />
      </div>
    </div>
  );
}
