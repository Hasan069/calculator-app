import React from "react";
import { ModeToggle } from "@/components/themeSwitcher";

const navbar = () => {
  return (
    <div className="flex justify-center m-3">
      <ModeToggle />
    </div>
  );
};

export default navbar;
