import React from "react";
import Image from "next/image";

const UserMenu: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <Image alt="user icon" src="/user.png" width={40} height={40} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Perfil
            <span className="badge">Novo</span>
          </a>
        </li>
        <li>
          <a>Configurações</a>
        </li>
        <li>
          <a>Sair</a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
