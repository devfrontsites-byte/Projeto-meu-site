const formu = document.querySelector(".form-contato")
const masca = document.querySelector(".mascara2")


function contato() {

    formu.style.visibility = "visible"
    formu.style.transform = "50%"
    masca.style.visibility = "visible"
}

function sumir(){
     formu.style.visibility = "hidden"
    formu.style.transform = "50%"
    masca.style.visibility = "hidden"
}