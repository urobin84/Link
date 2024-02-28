"use client";

import SekilasInfo from "@/components/SekilasInfo";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ModalDonasi from "@/components/ModalDonasi";
import { dataLink } from "@/app/types/dataLink";
import { dataDetailProgram } from "@/app/types/dataDetailProgram";

const Ramadan = () => {
  const [linkContent, setLinkContent] = useState<
    dataDetailProgram | undefined
  >();
  const env = process.env.NODE_ENV === "production";
  const base_url = env ? "/Link" : "";
  const [shimmerLoad, setShimmerLoad] = useState<boolean>(true);
  const [descriptionContent, setDescriptionContent] = useState("");
  const [prosentase, setProsentase] = useState(0);

  const handleLinkContent = (link: dataDetailProgram) => {
    setLinkContent(link);
  };

  useEffect(() => {
    const link = env ? "/Link" : "";
    const urlDataLink = link + "/data_link.json";

    fetch(urlDataLink)
      .then((response) => response.json())
      .then((json) => {
        if (json.dataLinkProgram) {
          const detailProgramSarpras = json.dataLinkProgram[3];
          setLinkContent(detailProgramSarpras);
          setShimmerLoad(!shimmerLoad);
        }
      });
  }, []);

  useEffect(() => {
    if (linkContent?.description && linkContent?.description != undefined) {
      setDescriptionContent(linkContent?.description);
    }

    if (
      linkContent?.donation_achievement &&
      linkContent?.donation_achievement != undefined
    ) {
      setProsentase(
        (parseFloat(linkContent?.donation_achievement) /
          parseFloat(linkContent.donation_target)) *
          100
      );
    }
  }, [linkContent]);

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        "": Math.floor(difference / (1000 * 60 * 60 * 24)),
        // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof typeof timeLeft]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className=" h-screen overflow-scroll">
      <SekilasInfo />

      {/* Gamber Program */}
      <div className="max-container">
        <div className="flex p-2 justify-center ">
          <div className="box-content rounded-md relative">
            <Image
              priority
              width={500}
              height={500}
              className=" h-full p-2"
              src={base_url + linkContent?.image}
              alt="logo"
            />
            {/* <div
              className={`absolute text-[#63A537] top-[8px] xs:top-[12px] md:top-[5px] z-10 pl-[26px] xs:pl-[35px] sm:pl-[10px] md:pl-[30px] text-[28px] xs:text-[30px] sm:text-[30px] md:text-[44px] text-center hover:scale-110 transform transition-transform duration-500 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
            >
              {timerComponents.length ? timerComponents : <span>NOW</span>}
            </div> */}
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="max-container">
        <div className="flex p-4 justify-start">
          <div className="box-content rounded-md">
            <div className=" text-2xl text-lime-900 font-semibold mb-6">
              {linkContent?.caption}
            </div>
            <div className=" text-sm text-gray-500 mb-1">Donasi Terkumpul</div>

            {/* Capaian Info */}
            <div className="flex gap-2">
              <div className=" text-xl text-lime-500 font-semibold mb-2">
                Rp {linkContent?.donation_achievement}
              </div>
              {linkContent?.donation_target != "" ? (
                <>
                  <span className="text-md text-gray-500"> dari target</span>
                  <div className=" text-lg text-lime-700 font-semibold mb-2">
                    Rp {linkContent?.donation_target}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            {/* Prosentase */}
            {linkContent?.donation_target != "" ? (
              <div className="bg-white rounded-xl overflow-hidden py-1">
                <div className="relative h-6 flex items-center justify-center">
                  <div
                    className={
                      prosentase
                        ? `absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[${prosentase}%]`
                        : `absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200`
                    }
                  ></div>
                  <div className="relative text-blue-900 font-medium text-sm">
                    {prosentase}%
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* Description */}
            <div className="py-3">
              <div
                className=" teg"
                dangerouslySetInnerHTML={{
                  __html: decodeURIComponent(descriptionContent),
                }}
              />
              {linkContent?.hashtag}
            </div>
            <button
              className="w-full inline-block px-12 py-3 my-2 text-sm text-center font-medium text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
              data-hs-overlay="#hs-overlay-bottom-program-donasi"
              onClick={() => handleLinkContent(linkContent!!)}
            >
              Donasi
            </button>
          </div>
        </div>
      </div>

      <ModalDonasi
        linkContent={linkContent}
        handleLinkContent={handleLinkContent}
      />
    </div>
  );
};

export default Ramadan;
