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
//  * @project_name : © SIPRA MODS 
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : 
//  * @description  : © 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +923404894695
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝗑ᴾᴿᴼ-V4.
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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0MzOG40My9QSGpDNjBFOGdZWEhwaEtQZXEyMkhvQmttd0F2QUpFSXNHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmllQmVJNGVsdy9lOVdZc3FwWjhpWFU2VlZlbDV4bm1EMFFqNEs4ek5rZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQWpRdUJaM2VMZ3ROa1JMZDFTM1J3dE1JamFlYXpQNnM3UVlpZkhvYldnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmTURDUkZzaGNEd0dpUVZGbkZqcWdoSTEwTzMyaDlmTXlHS0M3T0V0S3dRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMTlBCcXF4RXIzRDc2MXVjaWIrU09ldnBQUkw3bjdlZ3JGcVhWb3F2VTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAyamFBKzB2dEVFN1dCbGY3OXBYWkpFQU1UT2lxbis3dWlXUW5zNG9VQkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09ocWFIWVNRejlUY2J2Wmh1WDJrZWZDTFFOSUZIamlDNnE3N1BsemRGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidERzMUZPWmRISk11MTRoR3VsL3ZxNXNJRmdJVDdkakttQmRaWjVIQS8wVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FeE1KK1ExbDlNQ0JlUnBqR2JKbW05dGdGRTY3YzQ3SUYwQStyODdqL1BDcTZFK0t3NG9ONmhBR0FXWkNrWk01ZndWdmZQYk5LTk5WYURZaUd4U0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiI1QUI3ZllOdWdwTjBGZCt2Qnl0aXpaK3lZWlhMeHNacFQzVEo1OFZjSTZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5YjZjS1A3WVJmNmhDRGcydFhJU1d3IiwicGhvbmVJZCI6Ijg1NWMzZGRiLTNiN2UtNDg1Ni04ZTIwLTc2ZDM2ZmQxNWVlNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSFQrUzExM1UxR0VPd1ErTXhmQ1YvQ2RiVGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0hDWXYrOUtiTHZRc2EwbFgzcldNZk0rNzdnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpBRTg2U1MxIiwibWUiOnsiaWQiOiI5MjMyNzQxNzgzMTY6NTRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjEyODkxMzM3NzMwNDU6NTRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNSG41d2NRcTZ5Y3dnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYK2hybjVKaGZXVmJ0SjNDYXpvUG11TG9vbnRiMTBmU2g5QlJpVjJHUnk0PSIsImFjY291bnRTaWduYXR1cmUiOiJ5NFBQME1XT1FNdThtQjI0R1ZGOWlBNE93YU1DcTJtUjhIQ0t4Q1F5QXoycEp1bkJoaGdxcExydjRXY3RBU1dZNlBvL2pPOG16MXhKemhMSFBEUWNCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoialdZb2RrcW1uREZnV3pRSUdXemZEK1BhMFRKdloxQlhVdXVVVzZxd1llM2tod2JCNXRGVTBSNGplQ3ZpOVorTGxVMGVOR1RUSGFTM3ZBOEpKV2ViRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNzQxNzgzMTY6NTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVi9vYTUrU1lYMWxXN1Nkd21zNkQ1cmk2S0o3VzlkSDBvZlFVWWxkaGtjdSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NDg5MjA4LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNsWiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
