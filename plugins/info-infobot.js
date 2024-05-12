import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
┌───────────────────┐   
│
│➼🍭𝗢𝘄𝗻𝗲𝗿:Karim 
│➼🍪𝗣𝗿𝗲𝗳𝗶𝘅: ${usedPrefix}
│➼🍸𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁𝘀:${chats.length - groups.length}
│➼🍹𝗧𝗼𝘁𝗮𝗹 𝗴𝗿𝘂𝗽𝗼𝘀:${groups.length}
│➼🍷𝗧𝗼𝘁𝗮𝗹 𝗰𝗵𝗮𝘁𝘀:${chats.length} 
│➼🍬𝗧𝗶𝗺𝗲:${uptime}
│➼🍧𝗨𝘀𝗲𝗿𝘀:${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜
│➼🍨𝗔𝘂𝘁𝗼𝗯𝗶𝗼:${autoread ? "𝑶𝒏√" : "𝑶𝒇𝒇√"}
│➼🍥𝗥𝗲𝘀𝘁𝗿𝗶𝗰𝘁:${restrict ? "𝑶𝒏√" : "𝑶𝒇𝒇√"} 
│➼🍰𝗣𝗰𝗼𝗻𝗹𝘆:${pconly ? "𝑶𝒏√" : "𝑶𝒇𝒇√"}
│➼🎂𝗚𝗰𝗼𝗻𝗹𝘆:${gconly ? "𝑶𝒏√" : "𝑶𝒇𝒇√"}
│➼🥧𝗠𝗼𝗱𝗼:${self ? "𝑷𝒓𝒊𝒗𝒂𝒕𝒆√" : "𝑷𝒖𝒃𝒍𝒊𝒄√"}
│➼🍵𝗽𝗿𝗶𝘃𝗮𝘁𝗲:${antiprivado ? "𝑶𝒏√" : "𝑶𝒇𝒇√"}
│➼🍦𝗦𝘂𝗯 𝗯𝗼𝘁𝘀:${modejadibot ? "𝑶𝒏√" : "𝑶𝒇𝒇√"}
│➼🥠𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹:${antiCall ? "𝑶𝒏√" : "𝑶𝒇𝒇√"}
│➼🍿𝗣𝗶𝗻𝗴: ↓
│${speed} ms
└───────────────────┘
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/Karim-off/DylanBot1` },
    mimetype: `application/${document}`,
    fileName: `[𝑫𝒚𝒍𝒂𝒏 𝑩𝒐𝒕]`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/Karim-off/DylanBot1",
        mediaType: 2,
        previewType: "pdf",
        title: "ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://github.com/Karim-off/DylanBot1",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}