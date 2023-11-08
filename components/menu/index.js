import React, { useState } from "react";
import Link from 'next/link';
import { MENUS_CONFIG } from "./config";

const MenuTop = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <header>
      <div className="flex text-gray-normal text-font-normal leading-[16px] gap-8 py-[20px]">
        {MENUS_CONFIG.map((item) => (
          <Link href={item.link} className="text-primary-p1" key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default MenuTop;
