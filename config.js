GI//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "nixjin92@gmail.com";
global.location = "Lahore,Pakistan‚Gujranwala.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923001276464@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan/Gujranwala";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://wa.me/923001276464";
global.website = process.env.GURL || "https://wa.me/923001276464";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923001276464";
global.owner = process.env.OWNER_NUMBER || "923001276464";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUMxejg1UGtDenpMZWxYcC9iNHhZRVY0MkdRbVpJZDVwVm9lWkl1cDhFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmltOWVTbGFxRnZnUXhRY1RWU0UvU0NGSURZZFNmbFNKR3R2UkZCSElFQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRkplVkJ2SkNENXlBOXArWnFqM1J1TnpkYVZrbmVIWHRhV0RTalBldjFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoWjNOUjFUTktrNWRNbDBjdWZkdmVITFJobVdWSjIvMUlKOTV3SkZFV2k4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNNDBCMS9BYXBmU1JuaGNMa3hLSWQ0OCt3SHVKakRnUStDTFRzbjRkMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc2L3k3eVJlTnF2NHZ5M3lRcVJHZ1VsUGJWM3FiYUR5cHBZWG91WHZwR3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia016SW1KN09qYUdQQVpTNlhrRW1XRmlxTGxEOVRSdm42VldZUnREUUFWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU01aFdvTU55emt2SEY5aXhxNU9FSDRmdEtXSXJTeGRkQXp5VW1JUG1Tdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhyUnVTSGJpRGU4ZFdGeWxjYjVJTCtlZi9xd0JsSkNDT3kyM3pxRTd0L1lOZjA0WFRNUkJLb2JybHRZYkFhd1I5LzlzTHViYzVISys4bFRLVHhaQkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6Ik96WkpXM3NRQndWejdXZVR0U0NBNWRtWWJNT0ZRYkNIYTRMbTZXVkhoY289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDc0MDQ3NzA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJCNzcxOTE0NURERUM5OUQyQUNERjI5MTNBRjFCNjhGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzNDY2MTd9XSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZKMlNTQUUzUWJHWGp3ektuNnlvZlEiLCJwaG9uZUlkIjoiMGNjNTVmNjktNDIyZS00MzQ0LWI4MWItZGNmNjczNzA1MmE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRldEZNUDRKRVJUYkViSDNRb2NsdVczWk9icz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUSmNSd1cwZ3NXZXYzWmltck5XQnF5anhETmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVhWOUxBVkMiLCJtZSI6eyJpZCI6IjkyMzA3NDA0NzcwNzo4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQNjQwSUVHRU9iUHFiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzaHppY1B1TUZQY0pod2JPWmlzK0xmNkJSSGgzWEYzQkxHZ21PK3FFeHg0PSIsImFjY291bnRTaWduYXR1cmUiOiJ2cmdMMXpsVDlTazVWdCtYdjJiOHM0Vk5lTHRWZ2o1dzF3TFd1MEpQRkZORjBkc0p0OEVTWEdOLzFETWNWL1BxRzAraml1bXgvKy9ianNHVFdSeklCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZnZJcFF6Ym9yeVp4VTZqVW10bndzOVd0eU1OWnQ4SmZuMnhxTmpYSWo5QnF3b3A1M0xOeGVKWGdSN285emRIZjhvWjdrdml2Sy9LNStSNDVPNE5CQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzQwNDc3MDc6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiSWM0bkQ3akJUM0NZY0d6bVlyUGkzK2dVUjRkMXhkd1N4b0pqdnFoTWNlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzQ2NjEyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg4aSJ9 |
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐹𝛪𝐿𝛯 𝐺𝛯𝛮𝛯𝑅𝛥𝑇𝛯𝐷 𝐵𝑌 𝛪𝐿-𝐶𝛥𝛲𝛪𝑇𝛥𝛮𝛩-𝛻2",
  author: process.env.PACK_AUTHER || "𝛪𝐿-𝐶𝛥𝛲𝛪𝑇𝛥𝛮𝛩",
  packname: process.env.PACK_NAME || "☠️",
  botname: process.env.BOT_NAME || "𝛪𝐿-𝐶𝛥𝛲𝛪𝑇𝛥𝛮𝛩-𝛻2",
  ownername: process.env.OWNER_NAME || "𝛪𝐿-𝐶𝛥𝛲𝛪𝑇𝛥𝛮𝛩",
  errorChat: process.env.ERROR_CHAT || "923001276464",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝛪𝐿-𝐶𝛥𝛲𝛪𝑇𝛥𝛮𝛩-𝛻2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
