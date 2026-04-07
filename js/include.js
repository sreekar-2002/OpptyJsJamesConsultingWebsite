// Header & Footer loading component


function loadComponent(id, file) {

    fetch(file)

    .then(response => response.text())

    .then(data => {

        document.getElementById(id).innerHTML = data;

    });

}

loadComponent("header", "layout/header.html");

loadComponent("footer", "layout/footer.html");