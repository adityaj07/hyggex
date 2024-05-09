import { FC, useState } from "react";
import Breadcrumbs from "../components/BreadCrumb";
import { GoHome } from "react-icons/go";
import Tab from "../components/Tab";
import { faqItems, flashCardLinks } from "../data";
import StudyCard from "../components/StudyCard";
import reloadIcon from "../assets/reload.svg";
import leftArrowIcon from "../assets/buttonLef.svg";
import rightArrowIcon from "../assets/buttonRight.svg";
import windowIcon from "../assets/window.svg";
import logoName from "../assets/logo-name.svg";
import logo from "../assets/logo.svg";
import addIcon from "../assets/addIcon.svg";
import FAQitem from "../components/FAQitem";

const Flashcard: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="min-h-screen">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "GoHome",
            labelIcon: <GoHome className="w-6 h-6" />,
            href: "/",
          },
          {
            label: "Flashcard",
            href: "/flashcard",
          },
          {
            label: "Mathematics",
            href: "/flashcard",
          },
          {
            label: "Relation and Function",
            href: "/flashcard",
            active: true,
          },
        ]}
      />

      <h1
        className="text-start font-montserrat
       bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] font-bold relative z-20  py-2 md:py-5 w-[90%] text-[32px]"
      >
        Relations and Functions ( Mathematics )
      </h1>

      <div className="flex justify-center items-center mb-8">
        {flashCardLinks.map((link) => (
          <Tab
            label={link.label}
            isActive={activeTab === link.index}
            onClick={() => handleTabChange(link.index)}
          />
        ))}
      </div>

      <div>
        <div
          className={`flex flex-col justify-center items-center gap-4 ${
            activeTab === 0 ? "block" : "hidden"
          }`}
        >
          <StudyCard content="9 + 6 + 7x - 2x - 3" />
          <div className="flex justify-between items-center w-[50%] mx-auto">
            <img src={reloadIcon} alt="Reload" className="cursor-pointer" />
            <div className="flex justify-between items-center gap-8">
              <img
                src={leftArrowIcon}
                alt="left arrow"
                className="cursor-pointer"
              />
              <span className="font-inter font-bold text-[24px]">01/10</span>
              <img
                src={rightArrowIcon}
                alt="right arrow"
                className="cursor-pointer"
              />
            </div>
            <img
              src={windowIcon}
              alt="Full screen"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div
          className={`min-h-[480px] ${activeTab === 1 ? "block" : "hidden"}`}
        >
          <p>No content.</p>
        </div>
        <div
          className={`min-h-[480px] ${activeTab === 2 ? "block" : "hidden"}`}
        >
          <p>No content.</p>
        </div>
        <div
          className={`min-h-[480px] ${activeTab === 3 ? "block" : "hidden"}`}
        >
          <p>No content.</p>
        </div>
        <div
          className={`min-h-[480px] ${activeTab === 4 ? "block" : "hidden"}`}
        >
          <p>No content.</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-14">
        <div className="flex justify-center items-center gap-4">
          <div className="rounded-full p-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <small className="text-[#696671]">Published by</small>
            <img src={logoName} alt="Logo" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src={addIcon} alt="Add logo" />
          <span
            className="text-start font-inter
       bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] font-bold relative z-20 py-2 md:py-5 w-[90%] text-[28px]"
          >
            Create a Flashcard
          </span>
        </div>
      </div>

      <h2
        className="text-start font-inter
       bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] font-bold relative z-20  py-2 md:py-5 w-[90%] text-[48px] mt-12"
      >
        FAQ
      </h2>
      <div>
        {faqItems.map((item) => (
          <FAQitem question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Flashcard;
