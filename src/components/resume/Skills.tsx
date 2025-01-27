export default function Skills() {
  const skills: Record<string, string[]> = {
    Core: ["HTML", "CSS", "JavaScript", "TypeScript"],
    Frameworks: ["React", "Vue.js", "Next.js", "Nuxt.js"],
    "State Management": ["Redux", "Vuex"],
    Styling: ["Tailwind CSS", "Styled Components"],
    Testing: ["Jest", "Cypress"],
    API: ["GraphQL", "REST"],
    Backend: ["Node.js", "Java", "Elixir"],
    Tools: ["CI/CD", "Webpack", "Git"],
    "Soft Skills": [
      "Problem-solving",
      "Collaboration",
      "Time management",
      "Self-driven",
    ],
  };

  return Object.keys(skills).map((category) => (
    <div className="w-full" key={category}>
      <div key={category} className="text-sky-500">
        {category}:{" "}
      </div>
      {skills[category].map((skill) => (
        <span
          key={skill}
          className="text-sm inline-flex font-bold border-b border-solid border-slate-300 mr-2"
        >
          {skill}
        </span>
      ))}
    </div>
  ));
}
