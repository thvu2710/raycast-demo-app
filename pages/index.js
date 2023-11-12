import Image from "next/image";
import MenuTop from "@components/menu";
import Footer from "@components/footer";
import Link from "next/link";
import {
  ProductivityBannerWrapper,
  RaycastForTeamBannerWrapper,
  MainBannerWrapper,
  BigTitle,
  BlendWrapper,
  HLBigTitle,
  AdditionInfo2Wrapper,
} from "@components/styled";
import homeBanner from "@assets/home-banner.png";
import productivityBanner from "@assets/productivity-banner.png";
import team from "@assets/team.png";
import additionalBanner1 from "@assets/additional_banner1.png";
import vector from "@assets/glow.svg";

import hi1 from "@assets/h1.png";
import hi2 from "@assets/h2.png";
import hi3 from "@assets/h3.png";
import hi4 from "@assets/h4.png";

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
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            One up your productivity
          </p>

          <p className="mt-[18px] max-w-[429px] text-[16px] font-normal leading-[24px] text-light-white-normal">
            On top of the core Raycast Extensions already built in, you can
            install Extensions built by Developers from the community.
            Everything you've asked for, in one place. Search and browse
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

      <div className="mx-auto mt-[32px] max-w-7xl">
        <div className="flex min-h-[699px] flex-col  justify-center lg:grid lg:grid-cols-10 lg:gap-[32px]">
          <div className=" bg-light-dark lg:col-span-4">
            <div className="m-auto mt-[64px] px-[64px]">
              <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M18.5 3.5L5.5 16.5H13.5V28.5L26.5 15.5H18.5V3.5Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
                Lightweight and snappy
              </p>
              <div className="mt-[18px] max-w-[308px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
                Designed to be seamless and instant. View an Extension and hit
                <span className="m-[5px] rounded bg-light-dark1 p-[6px]">
                  ↵
                </span>
                to simply install it in milliseconds.
              </div>
              <div className="mt-[72px]">
                <Image
                  src={additionalBanner1}
                  height={278}
                  width={332}
                  alt="raycat"
                />
              </div>
            </div>
          </div>
          <AdditionInfo2Wrapper className="justify-center bg-light-dark lg:col-span-6">
            <div className="relative m-auto mt-[64px] px-[64px]">
              <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M11.5 7.5H9.5C8.96957 7.5 8.46086 7.71071 8.08579 8.08579C7.71071 8.46086 7.5 8.96957 7.5 9.5V11.5M11.5 7.5V3.5M11.5 7.5H20.5M20.5 7.5H22.5C23.0304 7.5 23.5391 7.71071 23.9142 8.08579C24.2893 8.46086 24.5 8.96957 24.5 9.5V11.5M20.5 7.5V3.5M11.5 28.5V24.5M20.5 28.5V24.5M24.5 11.5H28.5M24.5 11.5V20.5M24.5 20.5V22.5C24.5 23.0304 24.2893 23.5391 23.9142 23.9142C23.5391 24.2893 23.0304 24.5 22.5 24.5H9.5C8.96957 24.5 8.46086 24.2893 8.08579 23.9142C7.71071 23.5391 7.5 23.0304 7.5 22.5V20.5M24.5 20.5H28.5M7.5 20.5H3.5M7.5 20.5V11.5M7.5 11.5H3.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
                An evergrowing collection
              </p>
              <div className="mt-[18px] max-w-[594px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
                Control Spotify or Apple Music with a hit of a button. Search
                through Figma, Notion, and Xcode. Check your internet speed and
                the weather without needing the browser, or even play a game of
                Snake.
              </div>
            </div>
          </AdditionInfo2Wrapper>
        </div>
      </div>
      <div className="mt-[32px] text-center text-[16px] ">
        Explore the store
      </div>
      <div className="m-auto max-w-7xl">
        <p className="mt-[144px] text-center text-[52px] font-medium leading-[58px]	text-white-normal">
          Raycast for Teams
        </p>
        <p className="my-[26px] text-center text-[20px] font-normal leading-7 text-gray-normal">
          Keep your team communicating efficiently and building faster with a
          shared space in Raycast.
        </p>
      </div>

      <RaycastForTeamBannerWrapper className="m-auto max-w-7xl">
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
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            Save time on everyday tasks
          </p>

          <p className="mt-[18px] max-w-[429px] text-[16px] font-normal leading-[24px] text-light-white-normal">
            Raycast isn't just a tool for individuals. It's also a tool,
            designed for sharing. From custom extensions, to Quicklinks and
            Snippets.
          </p>
          <p className="mt-[18px] max-w-[429px] text-[16px] font-normal leading-[24px] text-light-white-normal">
            What your team needs to get done, we offer an fabulously rich
            toolkit to do it swiftly, and at ease with your whole organization
            in harmony.
          </p>

          <div className="mt-[24px] flex h-[38px] w-[168px] items-center justify-center rounded-lg bg-light-gray text-[14px]">
            Learn more
          </div>
        </div>

        <div className="absolute right-[-110px] top-[80px]">
          <Image src={team} height={517} width={780} alt="raycat" />
        </div>
      </RaycastForTeamBannerWrapper>
      <div className="m-auto mt-[32px] flex max-w-7xl gap-[32px]">
        <div className="bg-light-dark p-[64px]">
          <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M6.5 5.5L3.5 8L6.5 10.5M13.5 5.5L16.5 8L13.5 10.5M3.5 17.5V24.5C3.5 25.5609 3.92143 26.5783 4.67157 27.3284C5.42172 28.0786 6.43913 28.5 7.5 28.5H24.5C25.5609 28.5 26.5783 28.0786 27.3284 27.3284C28.0786 26.5783 28.5 25.5609 28.5 24.5V7.5C28.5 6.43913 28.0786 5.42172 27.3284 4.67157C26.5783 3.92143 25.5609 3.5 24.5 3.5H23.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            Shared Commands
          </p>
          <div className="mt-[18px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
            Use React and TypeScript to build custom tooling that unlocks teams
            within your oganization to do their best work, at speed. Share them
            in your private extension store.
          </div>
        </div>
        <div className="bg-light-dark p-[64px]">
          <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M6.5 5.5L3.5 8L6.5 10.5M13.5 5.5L16.5 8L13.5 10.5M3.5 17.5V24.5C3.5 25.5609 3.92143 26.5783 4.67157 27.3284C5.42172 28.0786 6.43913 28.5 7.5 28.5H24.5C25.5609 28.5 26.5783 28.0786 27.3284 27.3284C28.0786 26.5783 28.5 25.5609 28.5 24.5V7.5C28.5 6.43913 28.0786 5.42172 27.3284 4.67157C26.5783 3.92143 25.5609 3.5 24.5 3.5H23.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            Shared Commands
          </p>
          <div className="mt-[18px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
            Use React and TypeScript to build custom tooling that unlocks teams
            within your oganization to do their best work, at speed. Share them
            in your private extension store.
          </div>
        </div>

        <div className="bg-light-dark p-[64px]">
          <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M6.5 5.5L3.5 8L6.5 10.5M13.5 5.5L16.5 8L13.5 10.5M3.5 17.5V24.5C3.5 25.5609 3.92143 26.5783 4.67157 27.3284C5.42172 28.0786 6.43913 28.5 7.5 28.5H24.5C25.5609 28.5 26.5783 28.0786 27.3284 27.3284C28.0786 26.5783 28.5 25.5609 28.5 24.5V7.5C28.5 6.43913 28.0786 5.42172 27.3284 4.67157C26.5783 3.92143 25.5609 3.5 24.5 3.5H23.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            Shared Commands
          </p>
          <div className="mt-[18px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
            Use React and TypeScript to build custom tooling that unlocks teams
            within your oganization to do their best work, at speed. Share them
            in your private extension store.
          </div>
        </div>
      </div>
      <div className="mt-[64px] text-center">
        Learn about developing for teams
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M9.75 4.75L13.25 8M13.25 8L9.75 11.25M13.25 8H2.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="mt-[164px] text-center	text-[52px] font-semibold">
        More focus, <span className="text-gray-dark">less clutter.</span>
      </div>
      <p className="mt-[28px] text-center text-[20px] font-normal leading-7 text-gray-normal">
        Raycast is a blazingly fast, totally extendable launcher. It lets you
        complete tasks, calculate, share common links, and much more.
      </p>

      <div className="m-auto mt-[94px] flex max-w-7xl gap-[8px]">
        <div className="bg-light-dark p-[32px]">
          <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
            <Image src={hi1} height={64} width={64} alt="home banner raycat" />
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            Security by default, always
          </p>
          <div className="mt-[18px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
            Enable the built-in extensions for an initial productivity boost.
            Use script commands and our API to build custom extensions to
            optimize your workflow.
          </div>
        </div>
        <div className="bg-light-dark p-[32px]">
          <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
            <Image src={hi2} height={64} width={64} alt="home banner raycat" />
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            Make it your own, tailor it to you
          </p>
          <div className="mt-[18px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
            Everything is stored encrypted on your local disk, and nothing
            sensetive is tracked. You and your personal data stay anonymous.
          </div>
        </div>
        <div className="bg-light-dark p-[32px]">
          <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
            <Image src={hi3} height={64} width={64} alt="home banner raycat" />
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            Learn once, remember forever
          </p>
          <div className="mt-[18px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
            Inspired by the command line interface, your tools are unified as
            commands, and follow the same structure to make you more productive.
          </div>
        </div>
        <div className="bg-light-dark p-[32px]">
          <div className="h-[64px] w-[64px] rounded-2xl bg-light-dark p-[16px]">
            <Image src={hi4} height={64} width={64} alt="home banner raycat" />
          </div>
          <p className="mt-[24px] text-[20px] font-normal leading-[27px] text-white-normal">
            Perform tasks in a matter of seconds
          </p>
          <div className="mt-[18px] items-center text-[16px] font-normal leading-[24px] text-light-white-normal">
            Raycast is built natively to be faster, lightweight, and efficient.
            Every action is optimized for speed and accessibility.
          </div>
        </div>
      </div>

      <div className="mt-[180px] text-center text-[36px] font-medium leading-[40px]	text-white-normal">
        Ready for take-off?
      </div>
      <p className="mt-[28px] text-center text-[20px] font-normal leading-7 text-gray-normal">
        Download the Raycast app and start taking your productivity to new
        heights.
      </p>
      <div className="text-center">
        <button className="mt-[29px] cursor-pointer	rounded-lg bg-light-white px-[70px] py-[15px] text-[16px] font-normal leading-5 text-[#0D0D0D]">
          Download for Mac
        </button>
      </div>

      <div className="my-[24px] text-center text-gray-dark">or</div>
      <div className="flex justify-center">
        <div className="rounded border border-[#fff] p-[12px]  text-gray-dark">
          $ brew install --cask raycast
        </div>
      </div>

      <div className="mt-[46px] text-center text-[12px] text-gray-dark">
        macOS 10.15+
      </div>

      <Footer />
    </>
  );
}
