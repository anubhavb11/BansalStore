"use strict";

function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("name").value;

  // Displaying the value
  // window.location.href = "http://programminghead.com";
  // location.replace("https://www.w3schools.com");
  // window.location = "http://www.yoururl.com";
  // document.getElementById("myForm").action = "index.html";
  //   const markup = `<h1>MY CODE ${genreateCode()} </h1>`;
  //   const val = document.querySelector(".display");
  //   val.insertAdjacentHTML("afterend", markup);

  //   console.log(inputVal, "dws");
  //   document.getElementById("myForm").action = "scratchAndWin.html";
  if (inputVal == "BANSAL100") {
    console.log("HI");
    document.getElementById("myForm").action = "scratchAndWin.html";
    // window.location.href = "http://programminghead.com";
  } else {
    document.getElementById("myForm").action = "notvalid.html";
  }
}
var btn = document.querySelector(".btn-enter");

btn.addEventListener("click", getInputValue);
