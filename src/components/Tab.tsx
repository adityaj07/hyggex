import { FC } from "react";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium ${
        isActive
          ? "text-[#06286E] border-b border-b-[#06286E] font-bold"
          : "text-[#696671]"
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
