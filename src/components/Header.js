import React from "react";
import facebook from "../assets/facebook.svg";
import avatar from "../assets/avatar.svg";

function Header() {
  return (
    <header>
      <nav>
        <img src={facebook} alt="Facebook" />
        <div>
          <a href="">
            <strong>Meu perfil</strong>
            <img class="avatar" src={avatar} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
