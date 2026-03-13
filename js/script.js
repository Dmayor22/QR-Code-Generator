// variables
const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");
const inputUrl = document.getElementById("url");
const inputSize = document.getElementById("size");
const spinner = document.getElementById("spinner");
const generatedDiv = document.getElementById("generated");

// event handlers
form.addEventListener("submit", handleGenerateSubmit);

// functions
function handleGenerateSubmit(e) {
  e.preventDefault();
  clearUI();

  const url = inputUrl.value;
  const size = inputSize.value;

  if (url === "") {
    alert("Url input can't be empty. Insert a url ");
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);

      setTimeout(() => {
        const saveUrl = qr.querySelector("img").src;
        createSaveBtn(saveUrl);
      }, 50);
    }, 2000);
  }
}

// function to generate qr code
const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

// dunction to clear UI
const clearUI = () => {
  qr.innerHTML = "";
  const saveLink = document.getElementById("save-url");
  if (saveLink) saveLink.remove();
};

// function to show and hide spinner - start
const showSpinner = () => {
  spinner.style.display = "block";
};
const hideSpinner = () => {
  spinner.style.display = "none";
};

// function to save/download QR Image
const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-url";
  link.classList =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  generatedDiv.appendChild(link);
};
// Init hdie spinner from at start of app
hideSpinner();
