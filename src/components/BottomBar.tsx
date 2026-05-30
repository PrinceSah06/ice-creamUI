import React from 'react';
import { FaArrowRight, FaHeart } from 'react-icons/fa'
import { GiCupcake, GiLeafSwirl } from 'react-icons/gi'
import { IoTimeOutline } from 'react-icons/io5'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

export const BottomBar: React.FC = () => {
  return (
    <section className="bottom-bar bg-[#fffaf2] px-4 pb-8 sm:px-6 lg:px-7">
      <div className="mx-auto grid max-w-[1370px] gap-4 rounded-[22px] bg-white p-4 shadow-[0_8px_30px_rgba(20,32,60,0.08)] ring-1 ring-[#efe7db] lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex items-center gap-4 rounded-[18px] bg-[#eef8ff] px-5 py-4">
          <div className="grid size-14 shrink-0 place-items-center rounded-full bg-blue text-2xl text-white">
            <GiCupcake />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-dark">Can't decide?</h3>
            <p className="text-sm font-bold text-[#50607b]">Create your own custom concrete!</p>
          </div>
          <FaArrowRight className="ml-auto text-blue" />
        </div>

        <button className="flex items-center justify-center gap-3 rounded-full bg-pink px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-pink/20">
          <MdOutlineRestaurantMenu />
          View full menu
        </button>

        <div className="flex items-center gap-3 rounded-[18px] px-4 py-3 font-extrabold text-dark">
          <IoTimeOutline className="text-3xl text-dark" />
          <span>Made Fresh<br />Every Hour</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex items-center gap-3 rounded-[18px] px-4 py-3 font-extrabold text-dark">
            <GiLeafSwirl className="text-3xl text-green-500" />
            <span>Premium<br />Ingredients</span>
          </div>
          <div className="flex items-center gap-3 rounded-[18px] px-4 py-3 font-extrabold text-dark">
            <FaHeart className="text-3xl text-pink" />
            <span>Hand-Mixed<br />With Love</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BottomBar
