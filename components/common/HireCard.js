import Link from "next/link";
import { TitleSm } from "./Title";

export const HireCard = () => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src="../images/t8.jpg" alt="apply to job" />
      </div>
      <div className='card-details'>
        <Link href="/" className='title-link'>
          <TitleSm title="Apply to Job" />
        </Link>
      </div>
    </div>
  );
};
