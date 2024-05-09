// import { FC } from 'react'
// import { GrHomeRounded } from "react-icons/gr";
// import { FaAngleRight } from "react-icons/fa";

// const BreadCrumb: FC = () => {
//   return <div className='flex justify-start items-center gap-2'>
//     <GrHomeRounded className='w-4 h-4'/>
//     <FaAngleRight className='w-4 h-4 text-[#06286E]'/>
//     <span>Flashcard</span>
//     <FaAngleRight className='w-4 h-4 text-[#06286E]'/>
//     <span>Mathematics</span>
//     <FaAngleRight className='w-4 h-4 text-[#06286E]'/>
//     <span>Relation and Function</span>

//   </div>
// }

// export default BreadCrumb

import { clsx } from "clsx";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Breadcrumb {
  label: string;
  labelIcon?: React.ReactElement;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="my-6 block">
      <ol className={clsx("flex items-center text-[16px] md:text-[18px] flex-wrap")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active
                ? "text-[#06286E] font-semibold"
                : "text-gray-500",
              "text-[16px] md:text-[18px] flex justify-center items-center"
            )}
          >
            <Link to={breadcrumb.href}>
              {breadcrumb.labelIcon ? breadcrumb.labelIcon : breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-2 md:mx-3 inline-block">
                <FaAngleRight className="w-4 h-4" />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
