"use client";

import SekilasInfo from "@/components/SekilasInfo";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ModalDonasi from "@/components/ModalDonasi";
import { dataLink } from "@/app/types/dataLink";
import { dataDetailProgram } from "@/app/types/dataDetailProgram";
import axios from "axios";
import clsx from "clsx";

const Maulid = () => {
  const [linkContent, setLinkContent] = useState<
    dataDetailProgram | undefined
  >();
  const env = process.env.NODE_ENV === "production";
  const base_url = env ? "/Link" : "";
  const [shimmerLoad, setShimmerLoad] = useState<boolean>(true);
  const [descriptionContent, setDescriptionContent] = useState("");
  const [prosentase, setProsentase] = useState<number>(0.0);
  const [totalDonasi, setTotalDonasi] = useState(0);
  const [targetDonasi, setTargetDonasi] = useState(0);
  const [prosentaseValue, setProsentaseValue] = useState("0");

  const handleLinkContent = (link: dataDetailProgram) => {
    setLinkContent(link);
  };

  useEffect(() => {
    if (totalDonasi != 0 && targetDonasi != 0) {
      const p = (totalDonasi / targetDonasi) * 100;
      setProsentase(parseFloat(p.toFixed(2)));
      if (prosentase != undefined && prosentase > 0) {
        setProsentaseValue(
          Math.round(parseFloat(prosentase.toString())).toString()
        );
      }
    }
  }, [totalDonasi, targetDonasi, prosentase]);

  useEffect(() => {
    if (linkContent != undefined) {
      setTargetDonasi(
        parseInt(linkContent?.donation_target.replace(/[^,\d]/g, ""))
      );
    }
  }, [linkContent]);

  useEffect(() => {
    const link = env ? "/Link" : "";
    const urlDataLink = link + "/data_link.json";

    if (totalDonasi == 0) {
      getTotalDonasi();
    }
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

  const getTotalDonasi = () => {
    const link = env ? "/Link" : "";
    const urlDataLink =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVddjPbCnfSb8QlZZlnH0hETVjyOMYBHicJhCBgSBGkvAe2sfDtubGiPU3rIIckDOgz0LnvgtVQ4Mo/pubhtml?gid=1301111666&single=true";

    axios
      .get(urlDataLink, {
        headers: {
          "Content-Type": "text/html",
        },
      })
      .then((response) => {
        var totalData = parseInt(
          response.data
            .split("<td class=")[1]
            .split("</td></tr>")[0]
            .replace(/[^\d.]/g, "")
        );
        if (totalData) {
          setTotalDonasi(totalData);
        }
      });
  };

  useEffect(() => {
    const interval = setInterval(getTotalDonasi, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (linkContent?.description && linkContent?.description != undefined) {
      setDescriptionContent(linkContent?.description);
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

  const formatRupiah = (angka: any) => {
    var number_string = angka.toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah;
  };

  const styleProgress = clsx({
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[0%]"]: true,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[5%]"]:
      prosentase >= 5,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[10%]"]:
      prosentase >= 10,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[15%]"]:
      prosentase >= 15,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[20%]"]:
      prosentase >= 20,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[25%]"]:
      prosentase >= 25,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[30%]"]:
      prosentase >= 30,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[35%]"]:
      prosentase >= 35,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[40%]"]:
      prosentase >= 40,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[45%]"]:
      prosentase >= 45,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[50%]"]:
      prosentase >= 50,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[55%]"]:
      prosentase >= 55,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[60%]"]:
      prosentase >= 60,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[65%]"]:
      prosentase >= 65,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[70%]"]:
      prosentase >= 70,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[75%]"]:
      prosentase >= 75,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[80%]"]:
      prosentase >= 80,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[85%]"]:
      prosentase >= 85,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[90%]"]:
      prosentase >= 90,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-[95%]"]:
      prosentase >= 95,
    ["absolute top-0 bottom-0 left-0 rounded-lg bg-blue-200 w-full"]:
      prosentase >= 100,
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
              src={
                linkContent != undefined ? base_url + linkContent.image : "#"
              }
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
            <div className=" text-2xl text-lime-900 font-semibold mb-2">
              {linkContent?.caption}
            </div>

            <button
              className="w-full inline-block px-12 py-2 my-2 mb-4 text-sm text-center font-medium text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
              data-hs-overlay="#hs-overlay-bottom-program-donasi"
              onClick={() => handleLinkContent(linkContent!!)}
            >
              Donasi
            </button>

            <div className=" text-sm text-gray-500 mb-1">Donasi Terkumpul</div>

            {/* Capaian Info */}
            <div className="flex gap-2">
              <div className=" text-xl text-lime-500 font-semibold mb-2">
                Rp {formatRupiah(totalDonasi)}
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
                <div className="relative h-6 flex items-center justify-center bg-slate-100">
                  <div className={styleProgress} />
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

export default Maulid;
