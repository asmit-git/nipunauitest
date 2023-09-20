import React, { useEffect, useState, useRef } from "react";
// import data from "../../data/data.json";
import columndata from "../../data/columndata.json";
import HiddenColumnModal from "./HiddenColumnModal";
import AddNewClientModal from "./AddNewClientModal";

const data = [
  {
    id: 1,
    name: "Nisha Giri",
    email: "example@example.com",
    addedfrom: "system",
    tags: "-",
    internalid: "ID296",
    clientid: "-",
    phone: "+977981234568",
    clientportal: "Deactivated",
    assignee: "Justin",
    followers: "Allison",
    status: "completed",
    applications: 8,
    lastupdated: "24-09-023",
  },
  {
    id: 2,
    name: "Nisha Giri",
    email: "example@example.com",
    addedfrom: "system",
    tags: "-",
    internalid: "ID296",
    clientid: "-",
    phone: "+977981234568",
    clientportal: "Deactivated",
    assignee: "Justin",
    followers: "Allison",
    status: "in Progress",
    applications: 8,
    lastupdated: "24-09-023",
  },
  {
    id: 3,
    name: "Nisha Giri",
    email: "example@example.com",
    addedfrom: "system",
    tags: "-",
    internalid: "ID296",
    clientid: "-",
    phone: "+977981234568",
    clientportal: "Deactivated",
    assignee: "Justin",
    followers: "Allison",
    status: "completed",
    applications: 8,
    lastupdated: "24-09-023",
  },
  {
    id: 4,
    name: "Nisha Giri",
    email: "example@example.com",
    addedfrom: "system",
    tags: "-",
    internalid: "ID296",
    clientid: "-",
    phone: "+977981234568",
    clientportal: "Deactivated",
    assignee: "Justin",
    followers: "Allison",
    status: "in Progress",
    applications: 8,
    lastupdated: "24-09-023",
  },
];

const Table = () => {
  const [hiddencols, setHiddenCols] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [showmodal, setShowModal] = useState(false);
  const [editmodeId, setEditModeId] = useState(0);
  const [client, setClient] = React.useState({
    id: "",
    name: "",
    email: "",
    addedfrom: "",
    tags: "",
    internalid: "",
    clientid: "",
    phone: "",
    clientportal: "",
    assignee: "",
    followers: "",
    status: "",
    applications: "",
    lastupdated: "",
  });
  const editRef = useRef();

  const handleClickOutside = (e) => {
    if (!editRef.current.contains(e.target)) {
      setEditModeId(0);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const triggerHide = (e, id) => {
    e.preventDefault();
    setHiddenCols([...hiddencols, id]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setClient({
      ...client,
      [e.target.name]: value,
    });
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    if (editmodeId !== id) {
      setEditModeId(id);
      let editData = data.filter(function (item) {
        return item.id === id;
      });
      setClient(editData[0]);
    }
  };

  return (
    <div className="ml-[10px] max-w-[1275px] flex flex-col py-0 box-border items-center justify-between mb-2">
      {/* top table section  */}
      <div className="rounded-sm bg-white shadow-[0px_5px_15px_rgba(0,_0,_0,_0.04)] w-[1280px] h-[60px] overflow-hidden shrink-0 flex flex-row py-0 px-6 box-border items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-6 h-6"
            alt=""
            src="/vuesaxlinearuseroctagon.svg"
          />
          <div className="relative leading-[140%] text-[16px] font-medium text-[#344054]">
            Clients
          </div>
        </div>
        <div className="w-[618px] flex flex-row items-center justify-end gap-[24px] text-xs text-h4-and-textcta-and-captions">
          <div className="rounded overflow-hidden flex flex-row py-1.5 px-2 items-center justify-start gap-[8px] border-[0.5px] border-solid border-[#d0d5dd]">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[140%] text-[#667085] text-[12px]">
                Branch(Kathmandu)
              </div>
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/downarrow.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[28px] text-white">
            <div className="rounded bg-darkslategray overflow-hidden hidden flex-row py-2 px-3 items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/plus1.svg"
              />
              <div className="relative leading-[24px]">Add Widget</div>
            </div>
            <div className="rounded overflow-hidden hidden flex-row py-2 px-3 items-center justify-start gap-[6px] text-s-text border-[0.5px] border-solid border-s-text">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/edit02.svg"
              />
              <div className="relative leading-[24px]">Edit Widget</div>
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/dotshorizontal.svg"
            />
          </div>
        </div>
      </div>
      {/* filter actions  */}
      <div className="bg-white mt-[10px] self-stretch box-border h-[72px] flex flex-row py-0 px-6 items-center justify-between border-b-[0.5px] border-solid border-hover">
        <div className="flex flex-row items-start justify-start gap-[20px] text-filterclr text-[12px] font-[400px] leading-[16.8px]">
          <div className="rounded box-border w-[220px] overflow-hidden shrink-0 flex flex-row py-1.5 px-2 items-center justify-start gap-[6px] border-[0.5px] border-solid border-boardercta">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/searchlg.svg"
            />
            <div className="relative leading-[140%]">Search Particular</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <div className="rounded overflow-hidden flex flex-row py-1.5 px-2 items-center justify-start gap-[8px] border-[0.5px] border-solid border-boardercta">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/filterfunnel.svg"
                />
                <div className="relative leading-[140%]">
                  Filter by assigned
                </div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/downarrow.svg"
              />
            </div>
            <div className="rounded overflow-hidden flex flex-row py-1.5 px-2 items-center justify-start gap-[8px] border-[0.5px] border-solid border-boardercta">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/calendar.svg"
                />
                <div className="relative leading-[140%]">Date</div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/downarrow.svg"
              />
            </div>
            <div className="rounded overflow-hidden flex flex-row py-1.5 px-2 items-center justify-start gap-[8px] border-[0.5px] border-solid border-boardercta">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/check.svg"
                />
                <div className="relative leading-[140%]">Status</div>
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/downarrow.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[36px]">
          <div className="flex flex-row items-center justify-start gap-[20px] text-[12px] text-filterclr leading-[16.8px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/filterfunnel.svg"
              />
              <div className="relative leading-[140%]">Filter</div>
            </div>
            <img
              className="relative w-px h-[21px]"
              alt=""
              src="/vector-101.svg"
            />
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/chevronselectorvertical.svg"
              />
              <div className="relative leading-[140%]">Sort</div>
            </div>
            <img
              className="relative w-px h-[21px]"
              alt=""
              src="/vector-101.svg"
            />
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/filterfunnel.svg"
              />
              <div className="relative leading-[140%]">Saved Filter</div>
            </div>
          </div>
          <div className="relative text-sm leading-[140%] font-medium text-[14px] text-linkclr">
            Clear
          </div>
        </div>
      </div>
      {/* Client actions section  */}
      <div className="bg-white self-stretch flex flex-col pt-0 px-6 pb-3 items-start justify-start text-white">
        <div className="w-full flex flex-row py-3 px-0 box-border items-center justify-between">
          <div className="rounded bg-primaryblue flex flex-row py-1.5 px-3 items-center justify-start gap-[6px] cursor-pointer">
            <div
              onClick={() => setShowModal(!showmodal)}
              className="relative leading-[16.8px] text-[12px] font-medium"
            >
              New Client
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/chevrondownwhite.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center text-clientactionclr text-[12px] font-normal">
            <div className="flex flex-row py-1 px-3 items-center justify-center">
              <div className="relative leading-[140%]">Prospects(18)</div>
            </div>
            <div className="flex flex-row py-1 px-3 items-center justify-center border-b-[1px] border-solid border-selected-green">
              <div className="relative leading-[140%]">Clients(10)</div>
            </div>
            <div className="flex flex-row py-1 px-3 items-center justify-center">
              <div className="relative leading-[140%]">Archived(0)</div>
            </div>
          </div>
        </div>
        {/* Adding new client member  */}
        {showmodal && (
          <AddNewClientModal
            showmodal={showmodal}
            setShowModal={setShowModal}
            data={data}
          />
        )}
        {/* Table content here  */}
        <div className="relative rounded box-border w-full h-[790px] overflow-x-auto shrink-0 text-filterclr border-[0.5px] border-solid border-divider">
          <table>
            <thead>
              <tr className="bg-white border-[0.5px] border-solid border-divider overflow-x-auto">
                <th>
                  <div className="self-stretch flex-1 flex flex-row py-1 px-2 items-center justify-center border-r-[0.5px] border-solid border-divider border-b-[0.5px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative rounded-md bg-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-divider" />
                    </div>
                  </div>
                </th>
                {columndata &&
                  columndata.map((single) => (
                    <th
                      key={single.id}
                      className={
                        hiddencols.includes(single.id)
                          ? "hidden"
                          : `self-stretch py-1 px-2 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[250px]`
                      }
                    >
                      <div className="self-stretch flex flex-row items-start justify-between">
                        <div className="self-stretch flex flex-row items start">
                          <p className="relative leading-[140%] font-medium text-[12px]">
                            {single.column}
                          </p>
                          <img
                            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                            alt=""
                            src="/chevronselectorvertical.svg"
                          />
                        </div>
                        <div className="relative group">
                          <img
                            className="relative w-[13px] h-[13px] overflow-hidden shrink-0 cursor-pointer"
                            alt=""
                            src="/dotsvertical.svg"
                          />
                          <div className="absolute -left-[56px] top-[12px] hidden group-hover:block hover:block bg-white z-10 rounded shadow w-[75px] pt-2">
                            <button
                              onClick={(e) => triggerHide(e, single.id)}
                              className="text-[12px] text-filterclr font-normal cursor-pointer"
                            >
                              Hide
                            </button>
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                <th
                  className={`self-stretch py-1 px-2 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]`}
                >
                  <div
                    onClick={() => setHidden(!hidden)}
                    className="self-stretch flex flex-row items-start justify-around cursor-pointer"
                  >
                    <img
                      className="relative w-[13px] h-[13px] overflow-hidden shrink-0 cursor-pointer"
                      alt=""
                      src="/plus.svg"
                    />
                    <p className="relative leading-[140%] font-medium text-[12px]">
                      add column
                    </p>
                  </div>
                </th>
                {!hidden && (
                  <HiddenColumnModal
                    columndata={columndata}
                    hiddencols={hiddencols}
                    setHiddenCols={setHiddenCols}
                    setHidden={setHidden}
                    hidden={hidden}
                  />
                )}
              </tr>
            </thead>
            <tbody ref={editRef} className="overflow-auto">
              {data &&
                data.map((single) => (
                  <tr
                    onClick={(e) => handleEdit(e, single.id)}
                    key={single.id}
                    className="bg-white border-[0.5px] border-solid border-divider overflow-x-auto"
                  >
                    <td className="self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px]">
                      <div className="relative rounded-md bg-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-divider" />
                    </td>
                    {/* paste here  */}
                    <>
                      {single.id === editmodeId ? (
                        <>
                          <td
                            className={
                              hiddencols.includes(1)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <img
                                className="relative rounded w-7 h-7 object-cover"
                                alt=""
                                src="/tableuser.png"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <div className="relative leading-[140%]  text-clientactionclr text-[12px] focus:none">
                                  <input
                                    className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                    name="name"
                                    value={client.name}
                                    onChange={(e) => handleChange(e)}
                                    placeholder={client.name}
                                  />
                                </div>
                                <div className="relative leading-[140%] text-filterclr text-[12px]">
                                  <input
                                    className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                    name="email"
                                    value={client.email}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(2)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="addedfrom"
                                value={client.addedfrom}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(3)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="tags"
                                value={client.tags}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(4)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="internalid"
                                value={client.internalid}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(5)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="clientid"
                                value={client.clientid}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(6)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="phone"
                                value={client.phone}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(7)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] inline-block shrink-0 text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="clientportal"
                                value={client.clientportal}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(8)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <img
                                className="relative rounded w-7 h-7 object-cover"
                                alt=""
                                src="/tableuser.png"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <div className="relative leading-[140%] text-[12px] text-clientactionclr">
                                  <input
                                    className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                    name="assignee"
                                    value={client.assignee}
                                    onChange={handleChange}
                                  />
                                </div>

                                <input
                                  className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                  name="interlance"
                                  value="Interlace Studies pty"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(9)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="applications"
                                value={client.followers}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(10)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="status"
                                value={client.status}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(11)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="applications"
                                value={client.applications}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(12)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              <input
                                className="mt-1 appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                                name="lastupdated"
                                value={client.lastupdated}
                                onChange={handleChange}
                              />
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td
                            className={
                              hiddencols.includes(1)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <img
                                className="relative rounded w-7 h-7 object-cover"
                                alt=""
                                src="/tableuser.png"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <div className="relative leading-[140%]  text-clientactionclr text-[12px] focus:none">
                                  {single.name}
                                </div>
                                <div className="relative leading-[140%] text-filterclr text-[12px]">
                                  {single.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(2)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              {single.addedfrom}
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(3)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              {single.tags}
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(4)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              {single.internalid}
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(5)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              {single.clientid}
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(6)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              {single.phone}
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(7)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] inline-block shrink-0 text-sidebartext text-[12px]">
                              {single.clientportal}
                            </div>
                          </td>

                          <td
                            className={
                              hiddencols.includes(8)
                                ? "hidden"
                                : "self-stretch h-[50px] flex flex-row px-4 items-center justify-start gap-[20px] border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <img
                                className="relative rounded w-7 h-7 object-cover"
                                alt=""
                                src="/tableuser.png"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <div className="relative leading-[140%]  text-clientactionclr text-[12px] focus:none">
                                  {single.assignee}
                                </div>
                                <div className="relative leading-[140%] text-filterclr text-[12px]">
                                  Interlace Studies pty
                                </div>
                              </div>
                            </div>
                            <img
                              className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                              alt=""
                              src="/reverseright.svg"
                            />
                          </td>
                          <td
                            className={
                              hiddencols.includes(9)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="flex flex-row items-start justify-between">
                              <div className="relative leading-[140%] text-[12px] text-clientactionclr">
                                {single.followers}
                              </div>
                              <img
                                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                                alt=""
                                src="/reverseright.svg"
                              />
                            </div>
                          </td>
                          {single.status === "completed" ? (
                            <td
                              className={
                                hiddencols.includes(10)
                                  ? "hidden"
                                  : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px] bg-statusgreen"
                              }
                            >
                              <div className="relative leading-[140%] text-sidebartext text-[12px]">
                                {single.status}
                              </div>
                            </td>
                          ) : (
                            <td
                              className={
                                hiddencols.includes(10)
                                  ? "hidden"
                                  : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px] bg-linkclr"
                              }
                            >
                              <div className="relative leading-[140%] text-sidebartext text-[12px]">
                                {single.status}
                              </div>
                            </td>
                          )}

                          <td
                            className={
                              hiddencols.includes(11)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              {single.applications}
                            </div>
                          </td>
                          <td
                            className={
                              hiddencols.includes(12)
                                ? "hidden"
                                : "self-stretch box-border h-[50px] py-2 px-4 border-r-[0.5px] border-solid border-divider border-b-[0.5px] min-w-[150px]"
                            }
                          >
                            <div className="relative leading-[140%] text-sidebartext text-[12px]">
                              {single.lastupdated}
                            </div>
                          </td>
                        </>
                      )}
                    </>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
