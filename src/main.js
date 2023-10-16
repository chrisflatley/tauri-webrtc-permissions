const { invoke } = window.__TAURI__.tauri;

window.addEventListener("DOMContentLoaded", () => {
  let connectButton = document.querySelector("#connect");
  let output = document.querySelector("#output")

  function addOutput(message) {
    const li = document.createElement("li");
    li.textContent = message
    output.appendChild(li)
  }

  connectButton.addEventListener("click", (e) => {
    addOutput("Start of connect click handler")
    openMicrophone()
    addOutput("End of connect click handler")
  });

  function openMicrophone() {
    navigator.mediaDevices.getUserMedia({
      audio: true
    }).then(
      (mediaStream) => {
        addOutput("GotUserMedia: media stream")
        mediaStream.getTracks().forEach(x => x.stop())
      }
    ).catch((err) => addOutput(`Error getting user media: ${JSON.stringify(err)}`))
  }
});
