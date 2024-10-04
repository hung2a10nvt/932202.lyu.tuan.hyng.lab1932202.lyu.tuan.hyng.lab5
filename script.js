document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function () {
    var popupId;

    if (button.classList.contains("button1")) {
      popupId = "popup1";
    } else if (button.classList.contains("button2")) {
      popupId = "popup2";
    } else if (button.classList.contains("button3")) {
      popupId = "popup3";
    }

    var popup = document.getElementById(popupId);
    var overlay = document.getElementById("overlay");

    document.querySelectorAll(".popup-box").forEach(function (popupBox) {
      popupBox.style.display = "none";
    });

    popup.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("mainContent").classList.add("blur");

    /* Return to normal page if click outside popup box */
    overlay.addEventListener("click", function () {
      popup.style.display = "none";
      overlay.style.display = "none";
      document.getElementById("mainContent").classList.remove("blur");
    });
  });
});
