const registerform = document.getElementById("registerform")

//_______________REGISTRO USUARIO____________________

registerform?.addEventListener("submit", function (e) {
    e.preventDefault()
    //_______________CAPTURAR DATOS DEL FORMULARIO REGISTRO____________
    const name = document.getElementById("name").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    //crear objeto de usuario
    const userNew = {
        name,
        correo,
        password,
    };

    let users = JSON.parse(localStorage.getItem("usuarios")) || [];

    //validar si correo existe

    const userAct = users.some((userNew) => userNew.correo === correo);

    if (!userAct) {
        users.push(userNew);
        //_____________GUARDAR EN LOCAL STORAGE

        localStorage.setItem("usuarios", JSON.stringify(users));
        alert("Registro Completo");
        registerform.reset();
        window.location.href = "../index.html"
    }

    else {
        alert("Este correo ya está registrado");
    }

})

//___________________INICIAR SESION______________________________________

const loginform = document.getElementById("loginform");

loginform?.addEventListener("submit", function (e) {
    e.preventDefault();

    const correo = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // ___________________TRAER LO QUE ESTA EN EL LOCAL STORAGE__________________

    let users = JSON.parse(localStorage.getItem("usuarios"))

    //____________________BUSCAR LO INGRESADO EN EL LOGIN___________________

    const buscarUser = users.find(userNew => userNew.correo === correo && userNew.password === password);

    //
    if (buscarUser) {
        localStorage.setItem("perfilActual", JSON.stringify(buscarUser));
        window.location.href = "./pages/home.html";

    } else {
        alert("Correo o Contraseña Incorrectos")
    }
});


//_____________________________________________________________________________________________________________________________________

const products = [

{
    id: "1",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "2",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "3",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "4",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "5",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "6",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "7",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "8",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "9",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},
{
    id: "10",
    image: "../img01.png",
    name: "producto 1",
    typo: "calzado",
    description: "Describir",
    valor: "valor",
},


];

document.addEventListener("DOMContentLoaded", () => {


localStorage.setItem("products", JSON.stringify(products));
})