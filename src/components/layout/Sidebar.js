import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white h-[1000px] flex flex-col items-end justify-start">
      <div className="self-stretch flex flex-row py-0 pr-0 pl-6 items-start justify-between">
        <div className="flex flex-row py-3 px-0 items-center justify-start gap-[8px]">
          <div className="relative leading-[22.4px] font-medium text-sidebartext text-[16px]">
            CRM
          </div>
          <div className="text-[#667085]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/downarrow.svg"
            />
          </div>
        </div>
        <div className="bg-[#9696a6a8] w-7 h-7 flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/chevronleft.svg"
          />
        </div>
      </div>
      <div className="flex flex-row pt-2 px-6 pb-6 items-start justify-start text-sm text-h4-and-textcta-and-captions">
        <div className="w-48 flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch rounded overflow-hidden flex flex-row py-2 px-3 items-center justify-between border-[0.5px] border-solid border-boardercta">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/searchlg.svg"
              />
              <div className="relative leading-[140%]">Search</div>
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/dotshorizontal.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-xs text-sidebartext text-[12px] font-[400px] leading-[16.8px]">
            <div className="self-stretch rounded-sm hover:bg-sidebarhover overflow-hidden flex flex-row py-2 px-3 items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/vuesaxlinearelement11.svg"
                />
                <div className="relative leading-[140%] font-medium">
                  Dashboard
                </div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
            <div className="self-stretch rounded-sm overflow-hidden hover:bg-sidebarhover flex flex-row py-2 px-3 items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/homeline.svg"
                />
                <div className="relative leading-[140%] font-medium">
                  Office Check-in
                </div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
            <div className="self-stretch rounded-sm overflow-hidden flex flex-row py-2 px-3 items-center justify-between hover:bg-sidebarhover">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/checkdone01.svg"
                />
                <div className="relative leading-[140%] font-medium">
                  Enquiries
                </div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
            <div className="self-stretch rounded-sm overflow-hidden flex flex-row py-2 px-3 items-center justify-between hover:bg-sidebarhover">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/vuesaxlinearuseroctagon.svg"
                />
                <div className="relative leading-[140%] font-medium">
                  Clients
                </div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
            <div className="self-stretch rounded-sm overflow-hidden flex flex-row py-2 px-3 items-center justify-between hover:bg-sidebarhover">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/vuesaxlinearverify.svg"
                />
                <div className="relative leading-[140%] font-medium">
                  Services
                </div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
            <div className="self-stretch rounded-sm overflow-hidden flex flex-row py-2 px-3 items-center justify-between hover:bg-sidebarhover">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/fileattachment.svg"
                />
                <div className="relative leading-[140%] font-medium">
                  Quotation
                </div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
            <div className="self-stretch rounded-sm overflow-hidden flex flex-row py-2 px-3 items-center justify-between hover:bg-sidebarhover">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/vuesaxlineartasksquare.svg"
                />
                <div className="relative leading-[140%] font-medium">Tasks</div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
