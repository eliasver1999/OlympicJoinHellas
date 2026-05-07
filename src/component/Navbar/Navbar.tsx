import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ModernNav from "./ModernNav";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex lg:justify-center items-center py-2">
      <div>
        <img
          src="./logo.png"
          width={300}
          alt="OlympicJoinHellas"
          className=""
        />
      </div>
      <div>
        <ModernNav />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
