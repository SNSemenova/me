import ExternalLink from "@/components/ExternalLink";

const projects = [
  {
    title: "Personal Projects",
    items: [
      {
        title: "Pipes puzzle",
        description: `A puzzle game built with React and TypeScript.
                      It features a grid of pipes that need to be rotated to create a connected path.
                      The backend is built with Elixir and Phoenix.`,
        link: "https://pipes-flame.vercel.app/"
      },
    ],
  },
  {
    title: "Work Projects",
    items: [
      {
        title: "Online casino",
        description: `A casino site built with Next.js and Tailwind CSS.
                      It features a gaming platform with user management, events and rewards.`,
        link: "https://bitcasino.io/"
      },
      {
        title: "Showcase of a bank assets",
        description: `A web application built with Nuxt.js.
                      It features a dashboard with a list of assets and their info.
                      Last time I worked on it was in 2021 and it's still the same after all these years.`,
        link: "https://komission.ru/"
      },
      {
        title: "Crypto exchange",
        description: `A cryptocurrency exchange built with Vue.js.
                      It features real-time data visualisation and trading.
                      It's not in production anymore.`,
      }
    ],
  }
];

export default function ProjectsPage() {
  return (
    <div className="h-full row-start-2 max-w-2xl m-auto pt-4 px-3 mb-4 sm:mb-0 sm:pt-12 print:px-0">
      <h1 className="text-3xl font-bold text-sky-500">Projects</h1>
      <div className="mt-4">
        <div className="flex flex-col gap-4">
          {projects.map((category) => (
            <div key={category.title} className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-sky-500">{category.title}</h2>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1">
                    <ExternalLink link={item.link}>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </ExternalLink>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
