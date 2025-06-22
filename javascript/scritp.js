function calcular(){
    let milho = document.getElementById("milho").value
    let soja = document.getElementById("soja").value
    let nucleo = document.getElementById("nucleo").value
    milho = milho * 70 / 100
    soja = soja * 27 / 100
    nucleo = nucleo * 3 / 100
    var proteina = Number(milho) + Number(soja) + Number(nucleo)
    return res.innerHTML =`<p>Resultado milho ${proteina} ${milho} ${soja} ${nucleo}<p/>`

}





