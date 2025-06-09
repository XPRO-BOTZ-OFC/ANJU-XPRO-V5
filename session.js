//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlIdWdQUTBGSDBYT3JCdStxZTgvY3ROZDRsM2l0SXJWdEpPd2NTYmgyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2JlSUtpcFJHaFVRT2RxaitFT1lPOURibTYyMHYzcndjQTRUdE80Q1duaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQ1RuYmpET0hLUUlYaWFMbllBc3RrMXc4azJUUjUzeHFnZ21GYUxBb0dRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVXArYVNwQmliNnhUTGFISXJxZHkvZXJSUHdQZUErclhES0VrNkV3YVc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9EVkFzU2JudTh5TExIWnlDRG5iUXc2aGg1L1ZhQzgrMUlMRkhpa0ZPa2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im54NVNoWjR3TWdQSVhGeWxaTnk4ejZpTCtFRnJwSkNyOUJSZTdhQUpyQXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNmTUk4S3BJbFFBQUordXZDeUxDVFN6QUhZNWk2QWVGTWdEVld3TjQyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVdXTHhxeCtNdllmS2hRbVdYcXhWTDlxNk9JZVFtblNpanhWUWU4Tklndz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik01NUVabm43Yk1UeXUyVlU1SENZUzRsd1dUK0JvU3cvUCt4aU03VnRTeUdSTWpQalVEblA4UVBQellMdFc2VG1WcWkzRVZGaklpc0dvaXg1R2JxakRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IkdrUVlwbFozZEZ1dzFiQ2NyUUZkemFHWmlYdUdNczNZWFNaUlg3Y3FVUFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJhSm8tdnN2VHBlTVUtU2J6aWs1YVEiLCJwaG9uZUlkIjoiOGJjMzU5NmEtNzMzNS00ZTE0LWE4YjMtZDY4MmVkZDI3MmUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl4L2pGZG9YaWJGckhKNVNieGFBNStRN29kQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjM0F6WHNaS3NhZ2ExQm15eStrbWo0UVdXbWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUDJZRFM2NEUiLCJtZSI6eyJpZCI6Ijk0NzY0NzY2OTczOjcxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzYxMDM1MTE4NzE1Mjk6NzFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNQ09vY0FDRVB6MW1NSUdHRk1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwM1M3YmJ4QmpPeUpHNVoxaHJta2Y0WnNRMHEzRTY5WlgydTh3NXlqekFBPSIsImFjY291bnRTaWduYXR1cmUiOiJOd3RuNmFkRkc1UmlHdzBuamo4NUFUQlMzMTlpRC9XWmQwSnJkV040d0xWNFdidlVyNjlXTkVGVWtkdEtqcWl6QTFEN0U0cVE3cTluNmhWNWJVNWpDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVHR6N1dmL2VjbDErVDA5OXdlTDkxamx1RUZJZk5NdW5Lb0ExZkhvbmRPNHVtbFBCQzd0bVNoZzJSV3pKYjFQRTl1ditxOFlLU1FEOFVCVFJqMHZwREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDc2Njk3Mzo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZDB1MjI4UVl6c2lSdVdkWWE1cEgrR2JFTkt0eE92V1Y5cnZNT2NvOHdBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk0MzMwOTcsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94764766973",
  PASSWORD: 
    process.env.PASSWORD || "*86iresha86*",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94764766973", "94764766973"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
