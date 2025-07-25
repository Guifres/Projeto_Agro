function calcular(){
    let PesoLeite = document.getElementById("PesoLeite").value
    let QuantidadeRacao = document.getElementById("QuantidadeRacao").value
    let PrecoLeite = document.getElementById("PrecoLeite").value
    let PrecoRacao = document.getElementById('PrecoRacao').value
    let ValorEmReaisLeite = PesoLeite * PrecoLeite
    let ValorEmReaisRacao = QuantidadeRacao * PrecoRacao
    let LucroDia = ValorEmReaisLeite - ValorEmReaisRacao
    let LucroMes = LucroDia * 30
    let PorcentagemLucro = LucroDia * 100 / ValorEmReaisLeite
    let PorcetagemGasto = ValorEmReaisRacao * 100 / ValorEmReaisLeite
    return res.innerHTML =`<p>Leite bruto em Reais/Mês: R$${ValorEmReaisLeite.toFixed(2)*30}<br>
    Produção leite em Reais: R$${PesoLeite*PrecoLeite}<br>
    Custo ração dia: R$${QuantidadeRacao*PrecoRacao}<br>
    Lucro Dia: R$${LucroDia.toFixed(2)}<br>
    Lucro Mês: R$${LucroMes.toFixed(2)}<br>
    Porcentagem de Lucro: ${PorcentagemLucro.toFixed(2)} % <br>
    Porcentagem de Gasto esta de: R$${PorcetagemGasto.toFixed(2)} % <br> 
    <p/>`

}





