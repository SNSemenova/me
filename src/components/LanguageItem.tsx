export default function LanguageItem({language = 'English', levelNumber = 3, levelName = 'Upper-intermediate'}) {
  const levels = 5;
  const getLevelBg = (level: number) => levelNumber - level > 0 ? 'bg-sky-500' : 'bg-slate-300';

  return <div className="px-3 py-2">
    <div className="flex justify-between items-center">
      <div className="mr-2">
        <div className="text-sm pr-2 font-bold">
          {language}
        </div>
        <div className="text-xs">
          {levelName}
        </div>
      </div>
      <div className="flex justify-end text-end">
        {[...Array(levels)].map((_, level) => 
          <div key={level} className={`rounded-full size-3 mr-1 ${getLevelBg(level)}`} />
        )}
      </div>
    </div>
  </div>;
}
