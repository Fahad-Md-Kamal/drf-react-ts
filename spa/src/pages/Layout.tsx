import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="h-screen w-full bg-cyan-600">
      <div className="bg-fuchsia-300">
        <ul className="flex py-3 justify-end gap-4 mr-10">
          <li className="items-center border boreder-3 p-3 w-30 rounded-md">
            <a href="#">One</a>
          </li>
          <li className="items-center border boreder-3 p-3 w-30 rounded-md">
            <a href="#2">Two</a>
          </li>
          <li className="items-center border boreder-3 p-3 w-30 rounded-md">
            <a href="#3">Three</a>
          </li>
        </ul>
      </div>
      <div className="gird grid-col-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
