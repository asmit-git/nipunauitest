import React from "react";

const AddNewClientModal = ({ data, showmodal, setShowModal }) => {
  const [client, setClient] = React.useState({
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
  const handleChange = (e) => {
    const value = e.target.value;
    setClient({
      ...client,
      [e.target.name]: value,
    });
  };

  const handleClientData = (e) => {
    e.preventDefault();
    setShowModal(!showmodal);
    data.push(client);
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
                  <h3 className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                    Add New Client
                  </h3>
                  <div className="mt-2">
                    <form className="w-full max-w-lg">
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Client Name
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            name="name"
                            value={client.name}
                            onChange={handleChange}
                            placeholder="client name"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Email
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="email"
                            name="email"
                            value={client.email}
                            onChange={handleChange}
                            placeholder="example@example.com"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Phone
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="number"
                            name="phone"
                            value={client.phone}
                            onChange={handleChange}
                            placeholder="client Phone"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Added From
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="text"
                            name="addedfrom"
                            value={client.addedfrom}
                            onChange={handleChange}
                            placeholder="system"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Assignee
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="text"
                            name="assignee"
                            value={client.assignee}
                            onChange={handleChange}
                            placeholder="jane"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Followers
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="text"
                            name="followers"
                            value={client.followers}
                            onChange={handleChange}
                            placeholder="marcus"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-1/3 px-3 mb-6 md:mb-0">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Tags
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="text"
                            name="tags"
                            value={client.tags}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="font-semibold leading-[140%]  text-clientactionclr text-[12px]"
                            htmlFor="grid-state"
                          >
                            Status
                          </label>
                          <div className="relative">
                            <select
                              name="status"
                              onChange={handleChange}
                              value={client.status}
                              className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            >
                              <option value="">select</option>
                              <option value="completed">Completed</option>
                              <option value="in porgress">In Progress</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Internal Id
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="text"
                            placeholder="1101"
                            name="internalid"
                            value={client.internalid}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-1/3 px-3 mb-6 md:mb-0">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Applications
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="number"
                            name="applications"
                            value={client.applications}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="font-semibold leading-[140%]  text-clientactionclr text-[12px]"
                            htmlFor="grid-state"
                          >
                            Client Portal
                          </label>
                          <div className="relative">
                            <select
                              name="clientportal"
                              onChange={handleChange}
                              value={client.clientportal}
                              className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            >
                              <option value="">select</option>
                              <option value="Deactivated">Deactivated</option>
                              <option value="Active">Active</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Client Id
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="text"
                            placeholder="ID296"
                            name="clientid"
                            value={client.clientid}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                          <label className="font-semibold leading-[140%]  text-clientactionclr text-[12px]">
                            Last Updated
                          </label>
                          <input
                            className="appearance-none block w-full bg-white text-[12px] text-filterclr border border-gray-200 rounded py-2 px-2 leading-normal focus:outline-none focus:bg-white focus:border-filterclr"
                            type="text"
                            placeholder="24-09-023"
                            name="lastupdated"
                            value={client.lastupdated}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
              <button
                onClick={(e) => handleClientData(e)}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 font-semibold leading-[140%] text-clientactionclr text-[12px] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Done
              </button>
              <button
                onClick={() => setShowModal(!showmodal)}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 font-semibold leading-[140%] text-clientactionclr text-[12px] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewClientModal;
