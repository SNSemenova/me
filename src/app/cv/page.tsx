import AtSymbolIcon from "@/components/resume/icons/AtSymbolIcon";
import CourseItem from "@/components/resume/CourseItem";
import LanguageItem from "@/components/resume/LanguageItem";
import LocationIcon from "@/components/resume/icons/LocationIcon";
import PhoneIcon from "@/components/resume/icons/PhoneIcon";
import ResumeItem from "@/components/resume/ResumeItem";
import SectionName from "@/components/resume/SectionName";
import Skills from "@/components/resume/Skills";

const jobs = [
  {
    title: "Software Engineer",
    name: "Yolo Group",
    link: "https://yolo.com/",
    dates: "01/2022 - 12/2024",
    location: "Tallinn, Estonia",
    points: [
      "Collaborated with 5+ cross-functional teams, including QA, design, DevOps, and adjacent development teams, to deliver seamless and performant solutions",
      "Developed a Web3 authentication module, integrating MetaMask and WalletConnect to streamline user login and ensure decentralised access",
      "Optimised page load times by 20% through migrating from styled-components to Tailwind",
      "Contributed to creating and enhancing an open-source UI library with reusable components",
    ],
  },
  {
    title: "Lead Frontend Developer",
    name: "T1 Consulting",
    link: "https://www.t1-consulting.ru/",
    dates: "07/2019 - 11/2021",
    location: "Remote",
    points: [
      "Led the development of a web application from scratch, including architecture design, implementation, and deployment",
      "Built a scalable and reusable UI kit using Storybook, improving development efficiency and ensuring consistent design across projects",
      "Optimised application performance by migrating from Vue.js to Nuxt.js, utilising server-side rendering to reduce initial load times by 30% and improve SEO",
    ],
  },
  {
    title: "Front-end developer",
    name: "Tabtrader",
    link: "https://tabtrader.com/",
    dates: "09/2017 - 06/2019",
    location: "St. Petersburg, Russia",
    points: [
      "Developed a cryptocurrency exchange, providing real-time data visualisation",
      "Implemented a Progressive Web App (PWA) with Service Worker integration to enable offline capabilities",
    ],
  },
];

export default function MyCV() {
  return (
    <div className="font-medium font-[family-name:var(--font-geist-sans)] whitespace-pre-wrap max-w-2xl m-auto pt-4 px-3 mb-4 sm:mb-0 sm:pt-12 print:px-0">
      <div className="relative z-2">
        <div className="flex flex-nowrap justify-between my-2 mx-3">
          <div className="w-full pr-3">
            <div className="pb-1 font-medium uppercase text-2xl">
              SVETLANA SEMENOVA
            </div>
            <h1 className="w-full pb-1 font-medium text-sky-500 text-lg">
              Frontend Engineer
            </h1>
            <div className="flex flex-col sm:flex-row mt-2 gap-1">
              <div className="flex flex-col gap-1 justify-between">
                <div className="flex items-center flex-nowrap pb-1/2 text-xs h-3 gap-1">
                  <PhoneIcon />
                  <div className="inline-flex relative">
                    <a
                      href="tel:+37253913081"
                      className="whitespace-pre-wrap font-sans text-xs pr-3 flex font-bold"
                    >
                      +372&nbsp;5391&nbsp;3081
                    </a>
                  </div>
                </div>
                <div className="flex items-center flex-nowrap pb-1/2 gap-1">
                  <LocationIcon />
                  <div className="relative inline-flex">
                    <div className="whitespace-pre-wrap font-sans text-xs pr-3 flex font-bold">
                      Tallinn, Estonia
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-between">
                <div className="flex items-center flex-nowrap pb-1/2 gap-1">
                  <AtSymbolIcon />
                  <div className="relative inline-flex">
                    <a
                      className="text-xs pr-3 font-bold"
                      href="mailto:semenova.svetlana.nikolaevna@gmail.com"
                    >
                      semenova.svetlana.nikolaevna@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center flex-nowrap pb-1/2 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-sky-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  <div className="relative inline-flex">
                    <a
                      className="text-xs pr-3 font-bold"
                      href="https://www.linkedin.com/in/svetlana-sem"
                    >
                      https://www.linkedin.com/in/svetlana-sem
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-flow-row auto-cols-[1fr_40%] gap-3 sm:grid-flow-col grid">
        <div>
          <div className="mb-3">
            <SectionName name="Summary" />
            <div className="text-xs pt-2 px-3">
              A passionate full-stack developer with over 6 years of experience,
              specialising in front-end development.
            </div>
          </div>
          <div className="mb-3">
            <SectionName />
            <div className="grid grid-cols-1">
              {jobs.map((job) => (
                <ResumeItem key={job.dates} {...job} />
              ))}
            </div>
          </div>
          <div className="mb-3">
            <SectionName name="Education" />
            <div className="grid grid-cols-1">
              <ResumeItem
                title="Bachelor of Mathematics and Computer Science"
                name="Dostoevsky Omsk State University"
                link="https://omsu.ru/"
                dates="01/2013 - 01/2017"
                location="Omsk, Russia"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <SectionName name="Skills" />
            <div className="px-3 py-2">
              <div className="flex flex-wrap flex-row gap-2">
                <Skills />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <SectionName name="Training / Courses" />
            <CourseItem
              institution="7bits | IT-lift by 7bits"
              institutionLink="https://courses.itlft.ru/development"
            />
          </div>
          <div className="mb-3">
            <SectionName name="Languages" />
            <LanguageItem />
            <LanguageItem
              language="Russian"
              levelName="Native"
              levelNumber={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
