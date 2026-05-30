import React from 'react';
import { IoLocationSharp, IoCallSharp } from 'react-icons/io5'
import { FaCar, FaFacebookF, FaGoogle, FaYoutube } from 'react-icons/fa'
import { FaInstagram, FaTiktok } from 'react-icons/fa6'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

export const VisitBox: React.FC = () => {
  return (
    <article className="visit-box flex min-h-[330px] flex-col justify-between rounded-[22px] bg-white p-5">
      <div>
        <h1 className="font-fredoka text-3xl text-pink sm:text-4xl">VISIT US!</h1>

        <div className="mt-5 space-y-3 text-sm font-bold leading-snug text-dark">
          <p className="flex gap-3">
            <IoLocationSharp className="mt-1 shrink-0 text-2xl text-dark" />
            <span>2301 Kaliste Saloom Road, Lafayette, LA 70508</span>
          </p>
          <p className="flex items-center gap-3">
            <IoCallSharp className="shrink-0 text-xl text-dark" />
            <span>(337) 270-7454</span>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-extrabold tracking-wide text-pink">LOVE US? FOLLOW US!</h2>

        <div className="mt-3 flex flex-wrap gap-2">
          {[FaFacebookF, FaInstagram, FaTiktok, FaGoogle, FaYoutube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              aria-label="Social media link"
              className="grid size-9 place-items-center rounded-full bg-pink text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          <button className="flex items-center justify-center gap-2 rounded-full bg-pink px-4 py-3 text-sm font-extrabold uppercase text-white shadow-lg shadow-pink/20 transition-all hover:-translate-y-0.5 hover:shadow-xl">
            <FaCar />
            Get directions
          </button>
          <button className="flex items-center justify-center gap-2 rounded-full border-2 border-blue bg-white px-4 py-3 text-sm font-extrabold uppercase text-blue transition-colors hover:bg-blue hover:text-white">
            <MdOutlineRestaurantMenu />
            View menu
          </button>
        </div>
      </div>
    </article>
  );
};

export default  VisitBox
