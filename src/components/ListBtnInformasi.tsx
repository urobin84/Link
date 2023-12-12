import React from "react";

type LinkBtn = {
  label: string;
  url: string;
};

const dataLinkBtn: Array<LinkBtn> = [
  {
    label: "Struktur Organisasi DKM",
    url: "#StrukturOrganisasiDKM",
  },
  {
    label: "Jadwal Kegiatan",
    url: "#JadwalKegiatan",
  },
  {
    label: "Donasi",
    url: "#Donasi",
  },
  {
    label: "Laporan Keuangan",
    url: "#LaporanKeuangan",
  },
  {
    label: "Media Sosial",
    url: "#MediaSosial",
  },
];

type listBtnInformasiProps = {
  linkContent: string;
  handleLinkContent: (link:string) => void;
};

const ListBtnInformasi = (props: listBtnInformasiProps) => {
  const { linkContent, handleLinkContent } = props;

  return (
    <div className="flexCenter pb-16">
      <div className="padding-container max-container flex w-full flex-col justify-center gap-1">
        <div className="flex-1 text-white font-bold flex mb-2 justify-center items-center align-middle text-xl text-center">
          @musholladarussalam.id
        </div>
        <div className="flex-1 text-white font-bold flex mb-2 justify-center items-center align-middle text-xl text-center">
          Informasi DKM :
        </div>

        {dataLinkBtn.map((item: LinkBtn, index: number) => (
          <div
            key={index}
            className="w-full flex justify-between px-4 bg-transparent font-normal text-lg text-white overflow-hidden rounded-full hover:rounded-full ring-1 ring-white py-3 my-2"
          >
            <div className="flex w-full h-full">{item.label}</div>
            <button
              type="button"
              className=" rounded-full ring-1 p-1 ring-white bg-white bg-opacity-20 ring-opacity-20 flex justify-center items-center center"
              data-hs-overlay="#hs-overlay-bottom"
              onClick={() => handleLinkContent(item.url)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBtnInformasi;
