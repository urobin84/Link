import SekilasInfo from "@/components/SekilasInfo";
import React from "react";
import Image from "next/image";

const Sarpras = () => {
  const env = process.env.NODE_ENV === "production";
  const link = env ? "/Link" : "";

  return (
    <div className=" h-screen overflow-scroll">
      <SekilasInfo />

      {/* Gamber Program */}
      <div className="max-container">
        <div className="flex p-2 justify-center ">
          <div className="box-content rounded-md">
            <Image
              priority
              width={500}
              height={500}
              className=" h-full p-2"
              src={link + "/sarpras-img.jpeg"}
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="max-container">
        <div className="flex p-2 justify-start">
          <div className="box-content rounded-md">
            <div className=" text-2xl text-lime-900 font-semibold mb-6">
              Wakaf Sarana dan Prasarana
            </div>
            <div className=" text-sm text-gray-500 mb-1">Donasi Terkumpul</div>
            <div className="flex gap-2">
              <div className=" text-xl text-lime-500 font-semibold mb-2">
                Rp 18.735.000
              </div>
              <span className="text-md text-gray-500"> dari target</span>
              <div className=" text-lg text-lime-700 font-semibold mb-2">
                Rp 20.500.000
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden py-1">
              <div className="relative h-6 flex items-center justify-center">
                <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[98%] bg-blue-200"></div>
                <div className="relative text-blue-900 font-medium text-sm">
                  98%
                </div>
              </div>
            </div>
            <div className="py-3">
              ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
              <br />
              <p>
                &quot;Perumpamaan orang-orang yang menginfakkan hartanya dijalan
                Allah adalah seperti (orang-orang yang menabur) sebutir biji
                (benih) yang menumbuhkan tujuh tangkai, pada setiap tangkai,
                pada setiap tangkai ada seratus biji. Allah melipatgandakan
                (pahala) bagi siapa yang Dia kehendaki. Allah Maha luas lagi
                Maha mengetahui.&quot; (QS. Al baqarah: 261)
              </p>
              <br />
              <p>
                Assalamualaikum wr wb, Dalam rangka menunjang kegiatan Musholla,
                dan hasil evaluasi kebutuhan sarana prasana Musholla, serta
                pemeliharaannya. Kami bermaksud mengadakan Program Waqaf
                Pengadaan Sarana Prasarana.{" "}
              </p>
              <br />
              <p>
                Berikut terlampir ~¤•°🪑💻📌°•¤~ Dana Waqaf dapat ditranfer ke
                🔁 Mandiri 102.000.5964.165 A.n Putut Mahardika 🗣️ Konfirmasi ke
                om Putut (0811-8458-787)
              </p>
              <br />
              Jazakumullah Khairan Katsiran. <br />
              Wassalamualaikum Wr Wb. <br />
              <br />
              #SholehBerjamaah #DKMDarussalam #SaranaPrasaranaMusollah
            </div>
            <a
              className="w-full inline-block px-12 py-3 mx-2 my-6 text-sm text-center font-medium text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
              href="/download"
            >
              Donasi
            </a>
            <div className="pb-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sarpras;
