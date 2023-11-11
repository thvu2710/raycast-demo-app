import Head from "next/head";
import Image from "next/image";
import MenuTop from "@components/menu";
import Link from "next/link";
import {
  ProductivityBannerWrapper,
  MainBannerWrapper,
  BigTitle,
  BlendWrapper,
  HLBigTitle,
} from "./styled";
import homeBanner from "@assets/home-banner.png";
import productivityBanner from "@assets/productivity-banner.png";
import card from "@assets/card.png";
import vector from "@assets/glow.svg";

export default function Home() {
  return (
    <>
      <MainBannerWrapper className="flex flex-col items-center">
        <div className="mb-[100px] flex w-full max-w-3xl justify-between">
          <MenuTop />
          <div className="flex gap-8 py-[20px] text-font-normal leading-[16px] text-gray-normal">
            <Link href="#">Login</Link>
            <Link href="#">Download</Link>
          </div>
        </div>
        <Image
          src={homeBanner}
          height={447}
          width={860}
          alt="home banner raycat"
        />

        <BlendWrapper>
          <Image
            src={vector}
            height={1000}
            width={640}
            alt="raycat"
            style={{ mixBlendMode: "overlay", position: "absolute" }}
          />
        </BlendWrapper>

        <HLBigTitle>Supercharged</HLBigTitle>
        <BigTitle>productivity</BigTitle>

        <p className="my-[26px] max-w-[645px] text-center text-[20px] font-normal leading-7 text-gray-normal">
          Raycast is a blazingly fast, totally extendable launcher. It lets you
          complete tasks, calculate, share common links, and much more.
        </p>

        <button className="cursor-pointer	rounded-lg bg-light-white px-[70px] py-[15px] text-[16px] font-normal leading-5 text-[#0D0D0D]">
          Download for Mac
        </button>
        <div className="mt-[19px] flex gap-[21px] text-[13px] font-normal leading-4 text-gray-dark">
          <span>v1.39.1</span>
          <span>macOS 10.15+</span>
          <span>Install via Homebrew</span>
        </div>

        <p className="mt-[100px] flex items-center text-[52px]	font-semibold">
          It's as easy as{" "}
          <span className="text-green-normal">&nbsp;installed&nbsp;</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="45"
            viewBox="0 0 47 48"
            fill="none"
          >
            <path
              d="M30.1094 17.3906C30.1094 17.3906 23.1034 24.8519 21.2969 30.6094L16.8906 26.2031M41.8594 24C41.8594 28.8692 39.9251 33.539 36.482 36.982C33.039 40.4251 28.3692 42.3594 23.5 42.3594C18.6308 42.3594 13.961 40.4251 10.518 36.982C7.07491 33.539 5.14063 28.8692 5.14062 24C5.14063 19.1308 7.07491 14.461 10.518 11.018C13.961 7.57491 18.6308 5.64063 23.5 5.64062C28.3692 5.64063 33.039 7.57491 36.482 11.018C39.9251 14.461 41.8594 19.1308 41.8594 24V24Z"
              stroke="#59D499"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
        <p className="my-[26px] max-w-[770px] text-center text-[20px] font-normal leading-7 text-gray-normal">
          Say hello to the Store. A home for Extensions published by our
          community of Developers using our API. Find extensions to the tools
          you use in your day-to-day.
        </p>
      </MainBannerWrapper>
      <ProductivityBannerWrapper className="m-auto max-w-7xl">
        <div className="ml-[64px] flex min-h-[660px] flex-col justify-center">
          <div className="h-[64px]	w-[64px] rounded-2xl bg-light-gray p-[16px]">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 15L16 10M16 10L20.5 15M16 10V23M16 4C19.3152 4 22.4946 5.31696 24.8388 7.66117C27.183 10.0054 28.5 13.1848 28.5 16.5C28.5 19.8152 27.183 22.9946 24.8388 25.3388C22.4946 27.683 19.3152 29 16 29C12.6848 29 9.50537 27.683 7.16117 25.3388C4.81696 22.9946 3.5 19.8152 3.5 16.5C3.5 13.1848 4.81696 10.0054 7.16117 7.66117C9.50537 5.31696 12.6848 4 16 4V4Z"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            One up your productivity
          </p>

          <p className="mt-[18px] max-w-[429px] text-[16px] font-normal leading-[24px] text-light-white-normal">
            On top of the core Raycast Extensions already built in, you can
            install Extensions built by Developers from the community.
            Everything you’ve asked for, in one place. Search and browse
            Extensions for your tools, actions and more.
          </p>

          <div className="mt-[24px] flex h-[38px] w-[168px] items-center justify-center rounded-lg bg-light-gray text-[14px]">
            Browse Extensions
          </div>
        </div>

        <div className="absolute right-[-110px] top-[80px]">
          <Image
            src={productivityBanner}
            height={517}
            width={780}
            alt="raycat"
          />
        </div>
      </ProductivityBannerWrapper>
    </>
  );
}
