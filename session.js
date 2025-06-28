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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEgvQWpqR1dsa012UGZMc3FLV1hyUnU2NzY3TEVKNGNIUXpjL3ZDTWxYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzA3czNaZVdQU1Vwd3ZDMVpzYTREckR3TVU0VklqM0RHSGdOSkpFYVl4Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUGFXNmhjeVVURkhoeC9LN2lOdDY5bXlXaHFpMk4yYk5SK2NmMlphdVZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCQ1hDQjBIdWl6akc5WW4wU1JjWVZaUVhLZ1pKVWplNUZGVm1MSWxyQWg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOaWdOVVpXQXBoc0NJdVRTVU4xZ0JDRGRDZFVMK3RzL09odVlFTXBpWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitvOFZMQk5SVDdIWVp4bTRWUUxESkxYR3VjUnVTK2g4KzllWTFtdWhablU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURhUTNpME5UVkF3dUtKOVV3cWpQTUZib3d2U2dKSEgya2pLVWg3SHdrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWNHanM3MW9HQmRtV2ZFU3hEQXdHVFJ6Rk8zWEJBWlZZRmJCYm53T29XUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9pK0hGTEJTSWRXTVI0SXlmTDh2MENPdEdYN3kvdjZ2ZytXRkFZSFV4SU1PNlUvaGFvUWtWdlFHV2Z5Mk5lSVhNZ1RaU2FjNGw0RHZ4U25PLzlPSUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJEc01oakpkWERqTUpLeHE0R28yU2czUlBZTUc5cGwvb2ZlM1lSRHJqZDZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkS0FrRktCcVFHS0lrWElFbkhrbE9RIiwicGhvbmVJZCI6IjRkOTYwYjdmLTQ3NjAtNDcwZi04NTE4LWQzOTE5ZmNkNmRkZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5aFROdTJreGVhaWd5Q01aUzNRczJ2VWtqdDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1pVUVQ4M2h2VGRwS2V0ZmVLcVNXVDlEVnJvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5SRVZFSzk4IiwibWUiOnsiaWQiOiI5MjMxMzkzOTQyMTA6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT25saW5lIiwibGlkIjoiNjA3NDAwODE4NTY2ODQ6MTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQMnhqUHdERUluY2dNTUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFajFiN09mWko1ZTdTVkFYcUR6ak1TamFRRCtsdU5jMWFHUFlrZy9DaDM4PSIsImFjY291bnRTaWduYXR1cmUiOiJkVHpzWlFBbXJhaDlnN1poS1hZUFduUjRyOFJhZ2NzMmpVV3NxV1VpL2NzWmJqend4cnk0MUkwQTR0UWFMWWNkSytvVnZPZ3RUUG12OXlyTTVKVUdEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRXh4YVhWVWpPWERRY2t2ZXBQOXZqRURlNlpGSmtjZlpZSExjSWYzZDJyQ25mei9MNjh5MVYva0p4R0FHSzZuclF5SmtCVmwyWExXMVZueEM4ZXh2Q1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzkzOTQyMTA6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkk5Vyt6bjJTZVh1MGxRRjZnODR6RW8ya0EvcGJqWE5XaGoySklQd29kLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMTMzNzE4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
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
