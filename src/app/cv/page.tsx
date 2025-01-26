import AtSymbolIcon from "@/components/AtSymbolIcon";
import CourseItem from "@/components/CourseItem"
import LanguageItem from "@/components/LanguageItem";
import LocationIcon from "@/components/LocationIcon";
import PhoneIcon from "@/components/PhoneIcon";
import ResumeItem from "@/components/ResumeItem"
import SectionName from "@/components/SectionName"

export default function MyCV() {
  return <div className="font-medium font-sans whitespace-pre-wrap max-w-xl m-auto">
    <div className="relative z-2">
      <div className="flex flex-nowrap justify-between my-2 mx-3">
        <div className="w-full pr-3">
          <div className="whitespace-pre-wrap pb-1 font-medium font-sans uppercase text-4xl">
            SVETLANA SEMENOVA
          </div>
          <h1 className="w-full whitespace-pre-wrap pb-1 font-medium font-sans text-sky-500 text-lg">
            Senior Frontend Engineer
          </h1>
          <div className="flex mt-2 gap-1">
            <div className="flex flex-col gap-1 justify-between">
              <div className="flex items-center flex-nowrap pb-1/2 text-xs h-3 gap-1">
                <PhoneIcon />
                <div className="inline-flex relative">
                  <a href="tel:+37253913081" className="whitespace-pre-wrap font-sans text-xs pr-3 flex font-bold">
                    +372 5391 3081
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
                  <a className="text-xs pr-3 font-bold" href="mailto:semenova.svetlana.nikolaevna@gmail.com">
                    semenova.svetlana.nikolaevna@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center flex-nowrap pb-1/2 gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-sky-500" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                <div className="relative inline-flex">
                  <a className="text-xs pr-3 font-bold" href="https://www.linkedin.com/in/svetlana-sem">
                    https://www.linkedin.com/in/svetlana-sem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="auto-cols-[1fr_40%] gap-3 grid-flow-col grid">
      <div>
        <div className="mb-3">
          <SectionName />
          <div className="grid grid-cols-1">
            <ResumeItem>
              <ul className="mt-3">
                <li className="flex flex-nowrap text-xs gap-1">
                  <span className="text-xs">•</span>
                  <div>
                    <div className="text-xs">
                      Collaborated with the team to develop new features and improve the user experience
                    </div>
                  </div>
                </li>
                <li className="flex flex-nowrap text-xs gap-1">
                  <span className="text-xs">•</span>
                  <div>
                    <div className="text-xs">
                      Developed a Web3 authentication module, integrating MetaMask and WalletConnect to streamline user login and ensure decentralised access
                    </div>
                  </div>
                </li>
              </ul>
            </ResumeItem>
            <ResumeItem title="Lead Frontend Developer" name="Technoserv Consulting" dates="07/2019 - 11/2021" location="Remote">
              <ul className="mt-3">
                <li className="flex flex-nowrap text-xs gap-1">
                  <span className="text-xs">•</span>
                  <div>
                    <div className="text-xs">
                      Collaborated with the team to develop new features and improve the user experience
                    </div>
                  </div>
                </li>
                <li className="flex flex-nowrap text-xs gap-1">
                  <span className="text-xs">•</span>
                  <div>
                    <div className="text-xs">
                      Developed a Web3 authentication module, integrating MetaMask and WalletConnect to streamline user login and ensure decentralised access
                    </div>
                  </div>
                </li>
              </ul>
            </ResumeItem>
          </div>
        </div>
        <div className="mb-3">
          <SectionName name="Education" />
          <div className="grid grid-cols-1">
            <ResumeItem title="Bachelor of Mathematics and Computer Science" name="Dostoevsky Omsk State University" dates="01/2013 - 01/2017" location="Omsk, Russia" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-3">
          <SectionName name="Summary" />
          <div className="text-xs pt-2 px-3">
            A passionate full-stack developer with 6+ years of experience, specialising in front-end development.
          </div>
        </div>
        <div className="mb-3">
          <SectionName name="Training / Courses" />
          <CourseItem />
          <CourseItem courseTitle="JavaScript development of web-interfaces" />
        </div>
        <div className="mb-3">
          <SectionName name="Languages" />
          <LanguageItem />
          <LanguageItem language="Russian" levelName="Native" levelNumber={5} />
        </div>
        <div className="mb-3">
          <SectionName name="Skills" />
          <div className="px-3 py-2">
            <div className="flex flex-wrap flex-row gap-2">
              <span className="text-sm inline-flex font-bold border-b border-solid border-slate-300 px-2 py-1">CSS</span>
              <span className="text-sm inline-flex font-bold border-b border-solid border-slate-300 px-2 py-1">HTML</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
