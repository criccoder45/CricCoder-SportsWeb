// script.js
const mpdKey = "49d1acc1dc6426331da6d0a0ff4e67a7";
const mpdKeyId = "6a9e4204f3f8577ebf6e79b3b18573f8";
const telegramLink = "https://t.me/+vi_UBdhOsN5jYzY1";
const videoFile = "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_252/output/manifest.mpd";

function executeJWPlayerSetup() {
  jwplayer("video").setup({
    width: "100%",
    height: "100%",
    autostart: true,
    mute: false,
    file: videoFile,
    drm: {
      clearkey: {
        key: mpdKey,
        keyId: mpdKeyId
      }
    }
  });
}

function executeTelegramCommand() {
  if (confirm("Join Our Telegram Channel? Click OK, otherwise Click Cancel")) {
    window.location.href = "https://telegram.me/criccoder";
  }
}

function executeTelegramButtonCommand() {
  const telegramButton = document.getElementById("joinTelegramButton");
  if (telegramButton) {
    telegramButton.addEventListener("click", function () {
      window.open(telegramLink, "_blank");
    });
  }
}
