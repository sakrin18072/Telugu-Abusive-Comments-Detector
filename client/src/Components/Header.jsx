import React from "react";

const Header = () => {
  return (
    <header className="m-auto sticky top-0 z-10 filter backdrop-blur-xl text-white">
      <div className="flex justify-around align-middle p-2">
        <div className="hidden md:flex">
          <img
            src={require("../static/VNRVJIETLogo.png")}
            alt="vnrlogo"
            className="my-auto h-12"
          />
          &nbsp;<span className="my-auto">|</span>&nbsp;
          <b className="m-auto text-base font-extrabold italic ">
            Course Based Project
          </b>
        </div>
        <div className="m-auto">
          <p className=" font-extrabold text-4xl ">Data Engineering</p>
          <b className="md:hidden xs:flex m-auto text-base font-extrabold italic">
            Course Based Project
          </b>
        </div>
        <div className="flex flex-col my-auto">
          <div className=" ">
            <b>Team:</b>&nbsp;{" "}
            <span className=" text-base font-extralight italic">
              Airanevanchalaenti
            </span>
          </div>
          <div>
            with <span className="font-bold">K.N.D. Saile</span>
          </div>
          <div>
            <span className=" text-sm font-extralight italic">
              Assistant Professor
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
