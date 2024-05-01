import { useRef, useState } from "react";

const LANGUAGE_VERSIONS = { /* language versions */ };

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (lang) => {
    onSelect(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector ml-4 mb-4"> {/* Main container */}
     
      <button
        className={`text-left focus:outline-none px-3 py-2 rounded-md ${
          isOpen ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {language}
      </button>
      {isOpen && (
        <ul className="dropdown absolute top-full left-0 w-full bg-gray-700 text-white rounded-md shadow-md mt-1">
          {languages.map(([lang, version]) => (
            <li
              key={lang}
              className={`hover:bg-gray-800 p-2 cursor-pointer ${
                lang === language ? "text-gray-200 font-bold" : ""
              }`}
              onClick={() => handleClick(lang)}
            >
              {lang}
              <span className="text-gray-400 ml-2 text-sm">({version})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
