var headerHeight = parseFloat(getComputedStyle(document.getElementById('header_bottom')).height);

function quemSomosAncora() {

    const scrollQuemSomos = document.getElementById("scrollQuemSomos")

    var targetPosition = scrollQuemSomos.offsetTop - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });

}

function trabalhoAncora() {

    const scrollTrabalhoAncora = document.getElementById("scrollTrabalhoAncora")

    var targetPosition = scrollTrabalhoAncora.offsetTop - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });

}

function localAncora() {

    const scrollLocalAncora = document.getElementById("scrollLocalAncora")

    var targetPosition = scrollLocalAncora.offsetTop - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });

}
