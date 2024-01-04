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

// Function to switch to DRM 3
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

// Function to switch to another stream with M3U8 URL and no DRM
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

// Function to switch to another stream with M3U8 URL and no DRM
function switchToOtherStream555() {
  playerInstance.setup({
    file: "https://donelfantastic.github.io/live/skysportsNz1.m3u8",
    type: "hls",  // Set the type to HLS for M3U8 URLs
  });
}

// Function to switch to DRM with HLS URL
function switchToDRMWithHLS() {
  playerInstance.setup({
    file: "https://isp.sananda.online/Star/video.m3u8",
    type: "hls",  // Set the type to HLS for M3U8 URLs
  });
}

// Display a pop-up message when the page starts
alert("This Site Can Be Deleted Anytime So Join Our Telegram Channel @criccoder");