import { FC } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import speakerLogo from "../assets/speaker.svg";

interface StudyCardProps {
  content: string;
}

const StudyCard: FC<StudyCardProps> = ({ content }) => {
  return (
    <div className="w-full mx-auto bg-gradient rounded-3xl min-h-[400px] max-w-[700px] px-[40px] py-[36px] relative">
      <div className="flex justify-between items-center">
        <MdLightbulbOutline className="w-6 h-6 filter invert" />
        <img src={speakerLogo} alt="speaker logo" className="w-6 h-6" />
      </div>
      <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 text-white font-lato font-bold text-[38px]">
        {content}
      </div>
    </div>
  );
};

export default StudyCard;
