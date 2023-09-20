import React from "react";

const Header = () => {
  return (
    <div className="bg-white w-full h-[72px] flex flex-row py-0 px-[30px] box-border items-center justify-between mb-2">
      {/* logo section  */}
      <div className="w-[635.75px] flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/dotsgrid.svg"
        />
        <div className="relative leading-[140%] font-semibold text-maintext text-[20px]">
          Test Project
        </div>
      </div>
      {/* user section  */}
      <div className="flex flex-row items-center justify-start gap-[24px] text-center text-[8px] text-white">
        <div className="rounded-[360px] flex flex-row items-center justify-center border-[1px] border-dashed border-h4-and-textcta-and-captions">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/plus.svg"
          />
        </div>
        <div className="relative">
          <img
            className="w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/bell02.svg"
          />
          <div className="absolute w-[12px] h-[12px] top-[0%] right-[0%] bottom-[0%] left-[10px] rounded-[50%] bg-[#4ac86e]" />
          <div className="absolute w-[12px] h-[12px] top-[0%] left-[10px] tracking-[-0.41px] leading-[22px] font-medium flex items-center justify-center">
            2
          </div>
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/mail01.svg"
        />
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/settings02.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img
              className="relative w-px h-[29px]"
              alt=""
              src="/vector-10.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/moon01.svg"
            />
            <img
              className="relative rounded-[50%] w-[40.5px] h-[40.5px] object-cover"
              alt=""
              src="/usertop.png"
            />
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/downarrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
