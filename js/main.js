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
    Swal.fire({
      text: "No se admiten mayusculas o tildes",
      icon: "error",
    });
    limpiar();
  } else {
    Swal.fire({
      text: "Texto cifrado con éxito",
      icon: "success",
    });
    parrafo.innerHTML = textoCifrado;
    parrafo.style.color = "red";
    parrafo.style.fontSize = "20px";
    deleteTextEncriptado();
    imageTxt.style.opacity = "0";
  }
};

const deleteText = () => {
  if (texto.value === "") {
    parrafo.innerHTML = "";
    texto.focus();
    imageTxt.style.opacity = "1";
    imageTxt.style.transition = "all 0.5s";
    Swal.fire({
      titleText: "No hay texto para eliminar",
      icon: "warning"
    })
  } else {
    parrafo.innerHTML = "";
    texto.value = "";
    texto.focus();
    imageTxt.style.opacity = "1";
    imageTxt.style.transition = "all 0.5s";
    Swal.fire({
      titleText: "Texto elimado correctamente",
      icon: "success"
    })
  }
};

const deleteTextEncriptado = () => {
  texto.style.color = "#000";
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
    Swal.fire({
      text: "No hay texto para descencriptar",
      icon: "error",
    });
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
    Swal.fire({
      text: "No hay texto para copiar",
      icon: "error",
    });
  } else {
    Swal.fire({
      titleText: "Texto copiado con exito",
      text: `Texto copiado con éxito tu texto cifrado es: ${textoCifrado}`,
      icon: "success",
    });
  }

  console.log(btnClose);
};
