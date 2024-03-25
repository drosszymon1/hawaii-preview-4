"use client"

import { PrimaryButton } from "@/components/Button";
import HeadBackground from "../components/HeadBackground";
import { BannerCarousel } from "@/components/BannerCarousel/BannerCarousel";
import { SponsorCircle } from "@/components/SponsorsCircle/SponsorsCircle";
import Logo from "@/assets/logo.svg";
import LogoText from "@/assets/logo-text.svg";
import ShellLogo from "@/assets/shell-footer-logo.svg";
import Arrow from "@/assets/arrow.svg";
import "./sponsors.css";
import "./apply.css";
import { SponsorsBackground } from "@/components/SponsorsBackground/SponsorsBackground";
import { ApplyBackground } from "@/components/ApplyBackground/ApplyBackground";
import Image from "next/image";
import Discord from "@/components/icons/discord";
import TwitterX from "@/components/icons/twitter-x";
import Telegram from "@/components/icons/telegram";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { ButtonArrow } from "@/components/icons/ButtonArrow";
import applyText from "@/assets/apply-text.svg";
import smallSubtitleIcon from "@/assets/small-subtitle-icon.svg";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandleOpenModal = () => {
    console.log("open modal");
    setIsModalOpen(true);
  };

  const onHandleCloseModal = () => {
    const modal = document.getElementById("modal");
    const modalBg = document.getElementById("modal-bg");
    modal?.classList.remove("open");
    modal?.classList.add("close");
    modalBg?.classList.remove("open");
    modalBg?.classList.add("close");

    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  return (
    <main>
      <div id="first-section">
        <section className="container mx-auto h-fit">
          <div className="head-section lg:w-min">
            <div className="pin-banner">
              <div className="mb-6 lg:w-min custom-container">
                <div className="mt-24 md:mt-36 flex justify-start items-center gap-3 pb-2">
                  <Image className="hidden md:block" src={smallSubtitleIcon} alt="Logo" width={24} height={24} />
                  <p className="title2">The most fun ETH event & Hackathon</p>
                </div>
                <h1 className="heading1 mt-4 md:mt-5 ">
                  ETH
                  <br />
                  HAWAII
                </h1>
                <div className="flex flex-col xl:flex-row justify-between items-center gap-8 lg:gap-36 max-w-fit mt-1">
                  <p className="bannerDesc text-wrap body1">
                    Conference no one wants to miss. ETH event in paradise. Suits are forbidden. Necktie free event.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="w-full lg:hidden">
                      <PrimaryButton className="w-full" variant="primary" onClick={onHandleOpenModal}>Buy ticket</PrimaryButton>
                    </div>
                    <div className="flex justify-end items-center gap-4 banner-button">
                      <PrimaryButton variant="secondary">
                        Apply as speaker
                        <div className="button-mark rounded-[50%]">
                          <ButtonArrow />
                        </div>
                      </PrimaryButton>
                      <PrimaryButton variant="secondary">
                        Apply as sponsor
                        <div className="button-mark rounded-[50%]">
                          <ButtonArrow />
                        </div>
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
              <BannerCarousel />
            </div>
            <div id="spacer" />
          </div>
        </section>
        <HeadBackground />
      </div>
      <section id="sponsors" className="sponsors relative">
        <SponsorsBackground />
        <div className="container mx-auto">
          <div className="flex flex-col w-full justify-between items-center sponsors-wrapper">
            <h2 className="heading2 light-text">Sponsors</h2>
            <div className="flex lg:flex-col justify-center items-center">
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <SponsorCircle active />
                <SponsorCircle />
                <SponsorCircle />
                <SponsorCircle className="hidden lg:flex" />
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <SponsorCircle />
                <SponsorCircle />
                <SponsorCircle />
                <SponsorCircle className="hidden lg:flex" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="apply" className="apply relative">
        <div className="mobile-circle ball flex absolute justify-center items-center flex-4 bottom-6">
          <div className="insideText">
            <Image src={applyText} alt="Apply" width={66} height={63} />
          </div>
        </div>
        <ApplyBackground />
        <div className="w-full h-[calc(100dvh +100px)]">
          <div className="flex flex-col justify-start items-start container custom-container mx-auto apply-text">
            <h1 className="heading2 ml-0 px-0">APPLY AS SPONSOR</h1>
            <h2 className="heading2 apply-text-light ml-0 px-0">AND HELP US RENT</h2>
            <h2 className="heading2 apply-text-light ml-0 px-0">MORE SURFBOARDS!</h2>
            <p className="title1 apply-text-light mt-4 ml-0 px-0">PS. Your own palm tree is waiting for you!</p>
          </div>
        </div>
        <div id="spacer2" />
      </section>
      <footer id="footer" className="footer relative">
        <div className="h-full w-full flex flex-col justify-start items-start custom-container container mx-auto gap-10 md:gap-24">
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
            <div className="flex justify-end flex-col items-start gap-6 max-w-[310px]">
              <div className="flex justify-start items-center gap-2">
                <figure>
                  <Image src={Logo} alt="Logo" width={18} height={40} />
                </figure>
                <figure>
                  <Image src={LogoText} alt="Logo" width={170} height={18.52} />
                </figure>
              </div>
              <p className="caption1">Grab your surfboard and come to the most fun ETH event & Hackathon ever.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-5 md:gap-24">
              <div id="ticket-button" className="cursor-pointer" onClick={onHandleOpenModal}>
                <p className="body1">Get tickets</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex justify-start items-center gap-2 cursor-pointer">
                  <p className="body1">Apply to speak</p>
                  <figure>
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                  </figure>
                </div>
                <div className="flex justify-start items-center gap-2 cursor-pointer">
                  <p className="body1">Apply to sponsor</p>
                  <figure>
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                  </figure>
                </div>
              </div>
              <div>
                <div className="flex justify-start items-center gap-2 cursor-pointer">
                  <p className="body1">
                    Contact us
                  </p>
                  <figure>
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-0">
            <div className="flex justify-start items-center gap-2">
              <p className="caption1">Powered by</p>
              <figure>
                <Image src={ShellLogo} alt="Shell Logo" width={113.86} height={24} />
              </figure>
            </div>
            <div className="flex justify-end items-center gap-5">
              <PrimaryButton variant="secondary" onlyIcon>
                <Discord />
              </PrimaryButton>
              <PrimaryButton variant="secondary" onlyIcon>
                <TwitterX />
              </PrimaryButton>
              <PrimaryButton variant="secondary" onlyIcon>
                <Telegram />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </footer>
      <div id="spacer3" />
      <Modal isOpen={isModalOpen} closeModal={onHandleCloseModal} />
    </main>

  );
}
