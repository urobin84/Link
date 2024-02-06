"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ListBtnProgram from "@/components/ListBtnProgram";
import SekilasInfo from "@/components/SekilasInfo";
import React, { useEffect, useState } from "react";
import { dataLink } from "../types/dataLink";
import ModalShareProgram from "@/components/ModalShareProgram";

const Program = () => {
  const [linkContent, setLinkContent] = useState<dataLink | undefined>();

  const handleLinkContent = (link: dataLink) => {
    setLinkContent(link);
  };

  useEffect(() => {
    var head = document.getElementsByTagName("head").item(0);
    head?.childNodes.forEach((item) => {
      if (item.nodeName != "STYLE") {
      } else {
        console.log("Item => ", item.textContent);
        item.textContent = "";
      }
    });
  });

  return (
    <div className=" h-screen bg-gradient-to-b from-green-500 to-green-900">
      <SekilasInfo />
      <Hero />
      {/* <Banner /> */}
      <ListBtnProgram
        linkContent={linkContent}
        handleLinkContent={handleLinkContent}
      />
      <ModalShareProgram
        linkContent={linkContent}
        handleLinkContent={handleLinkContent}
      />
      <Footer />
    </div>
  );
};

export default Program;
