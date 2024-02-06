export type dataDetailProgram = {
  lable: string;
  url: string;
  image?: string;
  donation_target: string;
  donation_target_date: string;
  donation_achievement: string;
  donation_achievement_date: string;
  caption: string;
  description:string;
  hashtag: string;
  rekening: rekeningPenerima
}

export type rekeningPenerima = {
  bank: string;
  rekening:string;
  atas_nama: string;
  kode_unik: number;
}