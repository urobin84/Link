 export const progressClass = (prosentase: number) => {
   if (prosentase <= 5) {
     return "w-[5%]";
   }
   if (prosentase <= 10) {
     return "w-[10%]";
   }
   if (prosentase <= 15) {
     return "w-[15%]";
   }
   if (prosentase <= 20) {
     return "w-[20%]";
   }
   if (prosentase <= 25) {
     return "w-[25%]";
   }
   if (prosentase <= 30) {
     return "w-[30%]";
   }
   if (prosentase <= 35) {
     return "w-[35%]";
   }
   if (prosentase <= 40) {
     return "w-[40%]";
   }
   if (prosentase <= 45) {
     return "w-[45%]";
   }
   if (prosentase <= 50) {
     return "w-[50%]";
   }
   if (prosentase <= 55) {
     return "w-[55%]";
   }
   if (prosentase <= 60) {
     return "w-[60%]";
   }
   if (prosentase <= 65) {
     return "w-[65%]";
   }
   if (prosentase <= 70) {
     return "w-[70%]";
   }
   if (prosentase <= 75) {
     return "w-[75%]";
   }
   if (prosentase <= 80) {
     return "w-[80%]";
   }
   if (prosentase <= 85) {
     return "w-[85%]";
   }
   if (prosentase <= 90) {
     return "w-[90%]";
   }
   if (prosentase <= 95) {
     return "w-[95%]";
   }
   if (prosentase <= 100 || prosentase >= 100) {
     return "w-[100%]";
   }

   return "w-[0%]";
 }; 