import { FC, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface FAQitemProps {
  question: string;
  answer: string;
}

const FAQitem: FC<FAQitemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[#051a91] rounded-lg mb-4 w-[90%] md:w-[80%] lg:w-[60%] ">
      <div
        className="flex justify-between items-center p-[24px] cursor-pointer"
        onClick={toggleFAQItem}
      >
        <h3 className="text-[16px] font-inter font-semibold">{question}</h3>
        <RiArrowDownSLine
          className={`h-6 w-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="px-4 py-2 border-t border-[#06286E] text-start">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQitem;
