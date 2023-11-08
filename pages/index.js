import Head from "next/head";
import Image from "next/image";
import MenuTop from "@components/menu";
import Link from "next/link";
import { RootWrapper, BigTitle, BlendWrapper, HLBigTitle } from "./styled";
import homeBanner from "@assets/home-banner.png";
import vector from "@assets/glow.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <RootWrapper className="relative flex flex-col items-center justify-between">
        <div
          className={`text-sm flex h-full w-full max-w-5xl items-center justify-between`}
        >
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
      </RootWrapper>
    </div>
  );
}
