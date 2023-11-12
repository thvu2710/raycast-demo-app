import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import {
  PRODUCT_CONFIG,
  COMPANY_CONFIG,
  COMMUNITY_CONFIG,
  BY_RAYCAST_CONFIG,
} from "./config";

const Footer = () => {
  return (
    <footer className="m-auto mt-[180px] flex max-w-5xl justify-between py-[144px]">
      <div className="flex flex-col gap-8 py-[20px] text-font-normal leading-[16px] text-gray-normal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.05453 14.88V16.9455L2.10303 11.9925L3.13953 10.9635L7.05453 14.88ZM9.12003 16.9455H7.05453L12.006 21.897L13.041 20.865L9.12003 16.9455ZM20.865 13.0305L21.897 12L12.003 2.1015L10.971 3.1335L14.88 7.05H12.516L9.78603 4.323L8.75403 5.355L10.4535 7.0545H9.27003V14.7345H16.95V13.545L18.6495 15.2445L19.683 14.2125L16.95 11.481V9.117L20.865 13.032V13.0305ZM7.57053 6.534L6.53853 7.566L7.64703 8.6745L8.67903 7.6395L7.57053 6.534ZM16.3605 15.321L15.33 16.353L16.4385 17.4615L17.4705 16.4265L16.3605 15.321ZM5.35503 8.7495L4.32003 9.783L7.05303 12.513V10.449L5.35653 8.7495H5.35503ZM13.551 16.9455H11.4855L14.217 19.677L15.2505 18.6435L13.5525 16.9455H13.551Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-8 py-[20px] text-font-normal leading-[16px] text-gray-normal">
        <div className="text-[13px] font-medium text-white-normal">Product</div>
        {PRODUCT_CONFIG.map((item) => (
          <div className="flex items-center gap-[5px]" key={item.id}>
            <Link href={item.link} className="text-primary-p1">
              {`${item.title}`}
            </Link>
            {item.isNew && (
              <span className="rounded border border-blue-normal p-[2px] text-[10px] text-blue-normal">
                New
              </span>
            )}
            {item.icon && item.icon}
            {item.number && (
              <div className="rounded bg-dark-red p-[4px] text-[11px] text-[#FF6363]">
                {item.number}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 py-[20px] text-font-normal leading-[16px] text-gray-normal">
        <div className="text-[13px] font-medium text-white-normal">Company</div>
        {COMPANY_CONFIG.map((item) => (
          <div className="flex items-center gap-[5px]" key={item.id}>
            <Link href={item.link} className="text-primary-p1">
              {`${item.title}`}
            </Link>
            {item.isNew && (
              <span className="rounded border border-blue-normal p-[2px] text-[10px] text-blue-normal">
                New
              </span>
            )}
            {item.icon && item.icon}
            {item.number && (
              <div className="rounded bg-dark-red p-[4px] text-[11px] text-[#FF6363]">
                {item.number}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 py-[20px] text-font-normal leading-[16px] text-gray-normal">
        <div className="text-[13px] font-medium text-white-normal">
          Community
        </div>
        {COMMUNITY_CONFIG.map((item) => (
          <div className="flex items-center gap-[5px]" key={item.id}>
            <Link href={item.link} className="text-primary-p1">
              {`${item.title}`}
            </Link>
            {item.isNew && (
              <span className="rounded border border-blue-normal p-[2px] text-[10px] text-blue-normal">
                New
              </span>
            )}
            {item.icon && item.icon}
            {item.number && (
              <div className="rounded bg-dark-red p-[4px] text-[11px] text-[#FF6363]">
                {item.number}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 py-[20px] text-font-normal leading-[16px] text-gray-normal">
        <div className="text-[13px] font-medium text-white-normal">
          By Raycast
        </div>
        {BY_RAYCAST_CONFIG.map((item) => (
          <div className="flex items-center gap-[5px]" key={item.id}>
            <Link href={item.link} className="text-primary-p1">
              {`${item.title}`}
            </Link>
            {item.isNew && (
              <span className="rounded border border-blue-normal p-[2px] text-[10px] text-blue-normal">
                New
              </span>
            )}
            {item.icon && item.icon}
            {item.number && (
              <div className="rounded bg-dark-red p-[4px] text-[11px] text-[#FF6363]">
                {item.number}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
