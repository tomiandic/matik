"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import croatianIcon from "@/assets/icons/languages/croatian.svg";
import englishIcon from "@/assets/icons/languages/english.svg";
import germanIcon from "@/assets/icons/languages/german.svg";
import italianIcon from "@/assets/icons/languages/italian.svg";
import slovenianIcon from "@/assets/icons/languages/slovenian.svg";
import Image from "next/image";

const LanguagePicker = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("hr");
  const [isLanguagePickerOpen, setIsLanguagePickerOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", icon: englishIcon },
    { code: "de", name: "German", icon: germanIcon },
    { code: "it", name: "Italian", icon: italianIcon },
    { code: "si", name: "Slovenian", icon: slovenianIcon },
    { code: "hr", name: "Croatian", icon: croatianIcon },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    if (onLanguageChange) onLanguageChange(code);
    setIsLanguagePickerOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="flex items-center gap-2 px-3 pl-1 py-1 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
        type="button"
        onClick={() => setIsLanguagePickerOpen(!isLanguagePickerOpen)}
      >
        <MdKeyboardArrowDown className="text-xl" />
        <span className="hidden sm:inline">
          <Image
            width={20}
            style={{ borderRadius: 3 }}
            src={languages.find((lang) => lang.code === selectedLanguage)?.icon}
            alt="Language flag"
          />
        </span>
      </button>

      {isLanguagePickerOpen && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-3 text-xl">
                  <Image
                    style={{ borderRadius: 3 }}
                    width={20}
                    src={lang.icon}
                    alt={`${lang.name} language flag`}
                  />
                </span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
