
const items = [
    {
        id: "1",
        image: "../img/img01.png",
        name: "Camiseta Deportiva",
        typo: "calzado",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 20.000",
        saberMas: "Saber Mas",
    },
    {
        id: 2,

        image: "../img/img02.png",
        name: "boxer",
        typo: "calzado",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 40.000",
        saberMas: "Saber Mas",
    },
    {
        id: 3,
        image: "../img/img01.png",
        name: "short",
        typo: "calzado",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 28.000",
        saberMas: "Saber Mas",
    },
    {
        id: 4,
        image: "../img/img04.png",
        name: "chaqueta Negra",
        typo: "calzado",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 78.000",
        saberMas: "Saber Mas",
    },
    {
        id: "5",
        image: "../img/img05.png",
        name: "bolso",
        typo: "calzado",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 98.000",
        saberMas: "Saber Mas",
    },
    {
        id: "6",
        image: "../img/img06.png",
        name: "producto 1",
        typo: "calzado",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 58.000",
        saberMas: "Saber Mas",
    },
    {
        id: "7",
        image: "../img/img07.png",
        name: "Camiseta Deportiva",
        typo: "calzado",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 68.000",
        saberMas: "Saber Mas",
    },
    {
        id: "8",
        image: "../img/img03.png",
        name: "Zapatillas Running",
        typo: "ropa",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 98.000",
        saberMas: "Saber Mas",
    },
    {
        id: "9",
        image: "../img/img04.png",
        name: "producto 1",
        typo: "camisa",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 78.000",
        saberMas: "Saber Mas",
    },
    {
        id: "10",
        image: "../img/img05.png",
        name: "producto 1",
        typo: "saco",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        valor: "$: 23.000",
        saberMas: "Saber Mas",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    // Guardar los productos en localStorage
    localStorage.setItem("items", JSON.stringify(items));

    // Obtener los productos de localStorage
    const servi = JSON.parse(localStorage.getItem("items"));

    // Función para mostrar los productos
    function mostrarProductos() {
        const verProductos = document.getElementById("mostrarProductos");
        verProductos.innerHTML = "";

        servi.forEach(element => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img id="imgCard" src="${element.image}" alt="${element.name}"/>
                <h2>${element.name}</h2>
                <p>${element.description}</p>
                <p>${element.valor}</p>
                <button type= "button"><a id="ver" href="../pages/details.html">Saber Más</a></button>
                
            `;
            verProductos.appendChild(card);

          


        });
    }

    //____________________________________________LLAMAR EL_____________________________



    // Ejecutar mostrarProductos si estamos en home.html
    if (window.location.pathname.endsWith("home.html")) {
        mostrarProductos();
    }
});
