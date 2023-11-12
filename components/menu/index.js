import React, { useState } from "react";
import Link from "next/link";
import { MENUS_CONFIG } from "./config";

const MenuTop = () => {
  return (
    <header>
      <div className="flex gap-8 px-[20px] py-[20px] text-font-normal leading-[16px] text-gray-normal md:px-[0px]">
        {MENUS_CONFIG.map((item) => (
          <div className="flex items-center gap-[5px] " key={item.id}>
            <Link href={item.link} className="text-primary-p1" key={item.id}>
              {item.title}
            </Link>
            {item.isNew && (
              <span className="rounded border border-blue-normal p-[2px] text-[10px] text-blue-normal">
                New
              </span>
            )}{" "}
          </div>
        ))}
      </div>
    </header>
  );
};

export default MenuTop;
