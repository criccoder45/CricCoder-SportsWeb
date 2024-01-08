var playerInstance = jwplayer("jwplayerDiv");

// Function to switch to DRM 1
function switchToDRM1() {
  playerInstance.setup({
    file: "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_252/output/manifest.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "6a9e4204f3f8577ebf6e79b3b18573f8",
        "key": "537f3bebea2eb2ed32af574990124817"
      }
    }
  });
}

// Function to switch to DRM 2
function switchToDRM2() {
  playerInstance.setup({
    file: "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_250/output/manifest.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "06341bf3dd635e6ca5c71188d0210373",
        "key": "74f20cd516dd395513c4c75285d4265b"
      }
    }
  });
}

// Function to switch to DRM 1
function switchToDRM3() {
  playerInstance.setup({
    file: "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_251/output/manifest.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "bc5ea952698553daaba85787001d6093",
        "key": "b248519efbde52fe5f8ef9c56356c9a3"
      }
    }
  });
}

// Function to switch to another stream with M3U8 URL and no DRM
function switchToOtherStream() {
  playerInstance.setup({
    file: "https://linearjitp02-playback.astro.com.my/dash-wv/linear/2504/default.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "03c2e0af2f8159f9f0ce9b5dbc865f10",
        "key": "cd84ed136b0cc71f8ab8cd4d4f6a2e4c"
      }
    }
  });
}
// Function to switch to another stream with M3U8 URL and no DRM
function switchToOtherStream2() {
  playerInstance.setup({
    file: "https://linear003-gb-dash1-prd-cf.cdn.skycdp.com/016a/Content/DASH_003_sd/Live/channel(skysportscricket)/manifest_sd.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "0003f2a72d21efd159d45a3a74decd84",
        "key": "df0ec40586d641f3d4728ab5fd62adc3"
      }
    }
  });
}
// Function to switch to another stream with M3U8 URL and no DRM
function switchToOtherStream3() {
  playerInstance.setup({
    file: "https://linear007-gb-dash1-prd-ak.cdn.skycdp.com/100e/Content/DASH_003_sm/Live/channel(skysportsmainevent)/manifest_hd.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "00053cbaa4301cc9993e68fd4b6ce671",
        "key": "2a8e008597a45602dc4f39f06e119630"
      }
    }
  });
}
// Function to switch to another stream with M3U8 URL and no DRM
function switchToOtherStream4() {
  playerInstance.setup({
    file: "https://linear032-gb-dash1-prd-ll.cdn.skycdp.com/016a/Content/DASH_003_hd/Live/channel(sportsmix50)/manifest_hd.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "0003a6c61c2b2f7f0a9d760ac83c06d8",
        "key": "7305fa96d356316f2d544bfc78a6922c"
      }
    }
  });
}

function switchToOtherStream5() {
  playerInstance.setup({
    file: "https://linear-novi.stvacdn.spectrum.com/LIVE/1131/dash/cenc/WLLOHD_10364/manifest.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "6653c05e42fc4fac8f49d7cbf99498fe",
        "key": "3b88f2cff3affef20b265c840bafc0cc"
      }
    }
  });
}
function switchToOtherStreamtnt1() {
  playerInstance.setup({
    file: "http://linear036-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_hd/Live/channel(tnt1sport50)/manifest_hd.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "0005f5067d785a42dc5167ba06126ca8",
        "key": "8f9987d3153d003a23f34994501141d9"
      }
    }
  });
}

function switchToOtherStreamtnt2() {
  playerInstance.setup({
    file: "http://linear037-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_hd/Live/channel(tnt2sport50)/manifest_hd.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "00034ab4ec2fbf01848ac5157a314d43",
        "key": "92d1b98a91f3f39285e4b6315608b3ee"
      }
    }
  });
}

function switchToOtherStreamtnt3() {
  playerInstance.setup({
    file: "http://linear036-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_hd/Live/channel(tnt3sport50)/manifest_hd.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "0005d81e9c8dd58b72ebd87d54a78009",
        "key": "01924a06ecbe6296e756e35acdd7c30e"
      }
    }
  });
}

function switchToOtherStreamtnt4() {
  playerInstance.setup({
    file: "http://linear037-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_hd/Live/channel(tnt4sport50)/manifest_hd.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "00032335f1860c8cf0f5e4510c9619d9",
        "key": "fa0830e62a308d00d09a916df66ccd1a"
      }
    }
  });
}

function switchToOtherStream5() {
  playerInstance.setup({
    file: "https://olam.telka.uk/premiersport_JnD4eF8ALBI4HWrUOpDMUj9sqakB/playlist.mpd",
    type: "dash",
    drm: {
      "clearkey": {
        "keyId": "429857d76d3026b160d1c707e98cb6d4",
        "key": "a0c7cc8d78d42082af325149dbdd1aab"
      }


// Function to switch to another stream with M3U8 URL and no DRM
function switchToOtherStream555() {
  playerInstance.setup({
    file: "https://donelfantastic.github.io/live/skysportsNz1.m3u8",
    type: "hls",  // Set the type to HLS for M3U8 URLs
  });
}

function switchToDRM() {
  playerInstance.setup({
    file: "#",
    type: "hls",  // Set the type to HLS for M3U8 URLs
  });
}
function switchToDRM() {
  playerInstance.setup({
    file: "https://isp.sananda.online/Star/video.m3u8",
    type: "hls",  // Set the type to HLS for M3U8 URLs
  });
}
// Display a pop-up message when the page starts

  <script> alert("This Site Can Be Deleted Anytime So Join Our Telegram Channel @CRICCODER")
</script>