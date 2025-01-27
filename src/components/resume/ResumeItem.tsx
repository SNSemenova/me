import CalendarIcon from "./icons/CalendarIcon";
import LocationIcon from "./icons/LocationIcon";
import Points from "./Points";

type Props = {
  title?: string;
  name?: string;
  dates?: string;
  location?: string;
  link?: string;
  points?: string[];
};

export default function ResumeItem({
  title,
  name,
  dates,
  location,
  link,
  points = [],
}: Props) {
  return (
    <div className="flex flex-col justify-between group">
      <div>
        <div className="py-2 px-3">
          <div>
            <div>
              <div>
                <div>
                  <div className="work-container">
                    <div>
                      <div className="text-base">{title}</div>
                    </div>
                  </div>
                  <a href={link} target="_blank">
                    <h3 className="text-sky-500 text-sm font-bold mt-1 hover:underline hover:underline-offset-4">
                      {name}
                    </h3>
                  </a>
                  <div className="flex mt-1">
                    <span className="text-xs flex flex-align-center flex-row flex-wrap gap-1">
                      <CalendarIcon />
                      <span className="text-xs pr-2">
                        <span>{dates}</span>
                        <span className="w-2 inline-block">&nbsp;</span>
                      </span>
                    </span>
                    <div className="with-icon flex flex-align-center flex-nowrap undefined">
                      <LocationIcon />
                      <div>
                        <div className="text-xs text-nowrap">{location}</div>
                      </div>
                    </div>
                  </div>
                  <Points points={points} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 group-last:invisible">
        <div className="h-px border-b border-dashed border-slate-300" />
      </div>
    </div>
  );
}
