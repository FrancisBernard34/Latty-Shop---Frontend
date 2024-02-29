import React from "react";

import { League_Spartan } from "next/font/google";
 
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-10 bg-yellow-500 laptop:block hidden">
      <ul className={`menu menu-horizontal bg-transparent h-10 m-0 p-0 text-[#222222] text-lg font-bold flex justify-center items-center ${leagueSpartan.className}`}>
        <li className="hover:bg-[#ffcb59]">
          <a className="rounded-none">RAÇÕES</a>
        </li>
        <li className="hover:bg-[#ffcb59]">
          <a className="rounded-none">PETISCOS</a>
        </li>
        <li className="hover:bg-[#ffcb59]">
          <a className="rounded-none">SHAMPOO E CONDICIONADOR</a>
        </li>
        <li className="hover:bg-[#ffcb59]">
          <a className="rounded-none">ESCOVAS E PENTES</a>
        </li>
        <li className="hover:bg-[#ffcb59]">
          <a className="rounded-none">ACESSÓRIOS PARA BANHO E TOSA</a>
        </li>
        <li className="hover:bg-[#ffcb59]">
          <a className="rounded-none">MEDICAMENTOS</a>
        </li>
        <li className="hover:bg-[#ffcb59]">
          <a className="rounded-none">ROUPAS E ACESSÓRIOS</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
