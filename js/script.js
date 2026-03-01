// variables
const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");
const inputUrl = document.getElementById("url");

// event handlers
form.addEventListener("submit", handleGenerateSubmit);

// functions
function handleGenerateSubmit(e) {
  e.preventDefault();

  const url = inputUrl.value;

  console.log(`testing ${url}`);
}
