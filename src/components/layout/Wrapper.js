import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Table from "../content/Table";

const Wrapper = () => {
  return (
    <div className="wrapper mx-auto bg-gray-100">
      <div className="container mx-auto px-[2px]">
        {/* header section  */}
        <Header />
        <div className="flex flex-row items-start min-h-screen">
          {/* sidebar menu  */}
          <Sidebar />
          {/* Table content  */}
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
