/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgNavBar: "#060606",
        borderColor: "#393939",
        onlineStatusColor: "#818181",
        profileDivColor: "#2D2D2D",
        inputBgColor: "#111111",
        inputBorderColor: "#4A4A4A",
        
      },
      height: {
        screenMargin: "calc(100vh - 1rem)",
        formHeight: "430px",
      },
      width: {
        formWidth: "350px",
      },
      boxShadow: {
        custom: "0px 0px 0px 3px #3e3e3e",
      },
      top:{
        menuTop: "70px",
      }
    },
  },
  plugins: [],
};
