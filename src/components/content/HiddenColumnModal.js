import React from "react";

const HiddenColumnModal = ({
  columndata,
  hiddencols,
  setHiddenCols,
  setHidden,
  hidden,
}) => {
  const unhideColumn = (e, id) => {
    e.preventDefault();
    let newarr = hiddencols.filter(function (item) {
      return item !== id;
    });
    setHiddenCols(newarr);
  };
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  {hiddencols && hiddencols.length !== 0 ? (
                    <h3 className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                      Click to Unhide Columns
                    </h3>
                  ) : (
                    <h3 className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                      No Hidden Columns
                    </h3>
                  )}
                  <div className="mt-2">
                    {columndata
                      .filter((item) => hiddencols.includes(item.id))
                      .map((single) => (
                        <div
                          key={single.id}
                          className={"block top-[15px] min-w-[150px] bg-white"}
                        >
                          <div className="relative leading-[140%] text-sidebartext text-[12px]">
                            <div
                              onClick={(e) => unhideColumn(e, single.id)}
                              className={
                                "cursor-pointer self-stretch box-border h-[32px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[500px] hover:bg-sidebarhover"
                              }
                            >
                              {single.column}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={() => setHidden(!hidden)}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 font-semibold leading-[140%] text-clientactionclr text-[12px] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenColumnModal;
