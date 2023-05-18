const texto = document.getElementById("texto");
texto.focus();
const imageTxt = document.getElementById("image");

const encriptar = () => {
  const texto = document.getElementById("texto").value;
  const parrafo = document.getElementById("parrafo");
  const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  const condicionDeMayusculas =
    texto === texto.toUpperCase() || texto.length === 0;

  if (condicionDeMayusculas || texto.match(letras) !== null) {
    alert("No se admiten mayusculas o tildes");
    limpiar();
  } else {
    alert("Texto cifrado con éxito");
    parrafo.innerHTML = textoCifrado;
    parrafo.style.color = "red";
    parrafo.style.fontSize = "20px";
    deleteTextEncriptado();
    imageTxt.style.backgroundImage = "none";
  }
};

const deleteText = () => {
  parrafo.innerHTML = "";
  texto.value = "";
};

const deleteTextEncriptado = () => {
  texto.style.color = "#801ee3";
};

const limpiar = () => {
  texto.value = "";
  texto.focus();
  parrafo.innerHTML = "";
};

const descencriptar = () => {
  const texto = document.getElementById("texto").value;
  let parrafo = document.getElementById("parrafo");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (textoCifrado.length !== 0) {
    textoCifrado = textoCifrado.toLowerCase();
    parrafo.innerHTML = texto;
  } else {
    alert("No hay texto para descencriptar");
    limpiar();
  }
  console.log(texto);
};

const copiar = () => {
  const texto = document.getElementById("texto").value;
  const btnClose = document.getElementById("btn-close");
  const elemento = document.getElementsByName("textCopy");

  elemento[0].select();

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  document.execCommand("copy");

  if (textoCifrado == "") {
    alert("No hay texto para copiar");
  } else {
    alert(`Texto copiado con éxito tu texto cifrado es: ${textoCifrado}`);
  }

  console.log(btnClose);
};
