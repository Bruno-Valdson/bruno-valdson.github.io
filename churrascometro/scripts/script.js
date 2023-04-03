// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Vinagrete - 0,035g por pessoa
// Farofa - 0,030g por pessoa
// Pratos - 2 UN porpessoa
// Copos - 3 UN por pessoa
// Carvão - 1,5kg por cada quilo de carne
// Pão de Alho - 1 UN por pessoa

// Crianças valem por 0,5

window.onload = function () {
    var el = document.getElementById("qtdConvidados");
    var el2 = document.getElementById("qtdBebidas");
    var el3 = document.getElementById("qtd-acompanhamentos");
    var el4 = document.getElementById("qtd-suprimentos");

    var qtdDuracao = parseInt(document.getElementById("qtdDuracao").innerText);
    var duracao = document.getElementById("qtdDuracao");

    var resConvidados = document.getElementById("conv-qtd");
    var resCarnes = document.getElementById("qtd-carnes");


    var qtdTotalCarne;
    var qtdCrianca = parseInt(document.getElementById("qtdCrianca").innerText);
    var qtdAdultos = parseInt(document.getElementById("qtdAdulto").innerText);
    var criancas = document.getElementById("qtdCrianca");
    var adulto = document.getElementById("qtdAdulto");

    var clickCerveja;
    var clickCervejaLata;
    var clickRefri;

    // funcão clicar qtd convidados
    el.addEventListener('click', function (e) {
        var element = e.target.id;


        // console.log(element);
        switch (element) {
            case "btnPlus-adulto":
                qtdAdultos++;
                adulto.innerText = qtdAdultos;
                break;
            case "btnSub-adulto":
                if (qtdAdultos > 0) {
                    qtdAdultos--;
                    adulto.innerText = qtdAdultos;
                }
                break;
            case "btnPlus-crianca":
                qtdCrianca++;
                criancas.innerText = qtdCrianca;
                break;
            case "btnSub-crianca":
                if (qtdCrianca > 0) {
                    qtdCrianca--;
                    criancas.innerText = qtdCrianca;
                }
                break;
            case "btnPlus-duracao":
                qtdDuracao++;
                duracao.innerText = qtdDuracao;
                break;
            case "btnSub-duracao":
                if (qtdDuracao > 0) {
                    qtdDuracao--;
                    duracao.innerText = qtdDuracao;
                }
                break;
            default:
                break;
        }

        qtdTotalCarne = carnePP(qtdDuracao) * qtdAdultos + (carnePP(qtdDuracao) / 2 * qtdCrianca);

        // Qunatidade de convidados
        resConvidados.innerHTML = `<p>${qtdAdultos}</p>`;
        resConvidados.innerHTML += `<p>${qtdCrianca}</p>`;

        // Quantidade de carnes
        resCarnes.innerHTML = `<p>${qtdTotalCarne / 1000} Kg</p>`
        resCarnes.innerHTML += `<p>${(qtdTotalCarne / 1000) / 2} Kg</p>`
    });

    // Selecionar em Bebidas
    el2.addEventListener('click', function (e) {
        var ident = e.target.id;

        let cerveja = document.getElementById("resulCer");
        let cervejaLata = document.getElementById("resulCerLata");
        let refri = document.getElementById("resulRefri");

        switch (ident) {
            case "tp-cerveja":
            case "bb-cerveja":
            case "cerveja":
            case "icon-cerveja":
                if (cerveja.innerText != "-") {
                    clickCerveja = 0;
                    resultadoBebidas(clickCerveja, "cerveja");
                } else {
                    cerveja.innerText = 0;
                    clickCerveja = 1;
                    resultadoBebidas(clickCerveja, "cerveja");
                }
                break;
            case "tp-cerveja-lata":
            case "bb-cerveja-lata":
            case "cerveja-lata":
            case "icon-cerveja-lata":
                if (cervejaLata.innerText != "-") {
                    clickCervejaLata = 0;
                    resultadoBebidas(clickCervejaLata, "cervejaLata");
                } else {
                    cervejaLata.innerText = 0;
                    clickCervejaLata = 1;
                    resultadoBebidas(clickCervejaLata, "cervejaLata");
                }
                break
            case "tp-refrigerante":
            case "bb-refrigerante":
            case "refrigerante":
            case "icon-refrigerante":
                if (refri.innerText != "-") {
                    clickRefri = 0;
                    resultadoBebidas(clickRefri, "refrigerante");
                } else {
                    refri.innerText = 0;
                    clickRefri = 1;
                    resultadoBebidas(clickRefri, "refrigerante");
                }
                break
            default:
                break;
        }
        // console.log(qtd);
    });

    // Selecionar Acompanhamentos
    el3.addEventListener('click', function (e) {
        var ident = e.target.id;

        let vinagrete = document.getElementById("resulVina");
        let paoAlho = document.getElementById("resulPaoAlho");
        let farofa = document.getElementById("resulFarrofa");

        switch (ident) {
            case "check-vinagrete":
            case "label-vinagrete":
                if (vinagrete.innerText != "-") {
                    clickVinagrete = 0;
                    resulAcompanhamentos(clickVinagrete, "vinagrete");
                } else {
                    vinagrete.innerText = 0;
                    clickVinagrete = 1;
                    resulAcompanhamentos(clickVinagrete, "vinagrete");
                }
                break;
            case "check-paoAlho":
            case "label-paoAlho":
                if (paoAlho.innerText != "-") {
                    clickPaoAlho = 0;
                    resulAcompanhamentos(clickPaoAlho, "paoAlho");
                } else {
                    paoAlho.innerText = 0;
                    clickPaoAlho = 1;
                    resulAcompanhamentos(clickPaoAlho, "paoAlho");
                }
                break
            case "check-farofa":
            case "label-farofa":
                if (farofa.innerText != "-") {
                    clickFarofa = 0;
                    resulAcompanhamentos(clickFarofa, "farofa");
                } else {
                    farofa.innerText = 0;
                    clickFarofa = 1;
                    resulAcompanhamentos(clickFarofa, "farofa");
                }
                break
            default:
                break;
        }
    });

    //Slecionar Suprimentos
    el4.addEventListener('click', function (e) {
        var ident = e.target.id;

        let carvao = document.getElementById("resulCarvao");
        let copos = document.getElementById("resulCopos");
        let pratos = document.getElementById("resulPratos");

        switch (ident) {
            case "check-carvao":
            case "label-carvao":
                if (carvao.innerText != "-") {
                    clickCarvao = 0;
                    resulSuprimentos(clickCarvao, "carvao");
                } else {
                    carvao.innerText = 0;
                    clickCarvao = 1;
                    resulSuprimentos(clickCarvao, "carvao");
                }
                break;
            case "check-copos":
            case "label-copos":
                if (copos.innerText != "-") {
                    clickCopos = 0;
                    resulSuprimentos(clickCopos, "copos");
                } else {
                    copos.innerText = 0;
                    clickCopos = 1;
                    resulSuprimentos(clickCopos, "copos");
                }
                break
            case "check-pratos":
            case "label-pratos":
                if (pratos.innerText != "-") {
                    clickPratos = 0;
                    resulSuprimentos(clickPratos, "pratos");
                } else {
                    pratos.innerText = 0;
                    clickPratos = 1;
                    resulSuprimentos(clickPratos, "pratos");
                }
                break
            default:
                break;
        }
    });

    // Resultado Bebidas
    function resultadoBebidas(clickBtn, tpBebida) {
        let resCerveja = document.getElementById("resulCer");
        let resCerveLata = document.getElementById("resulCerLata");
        let resRefri = document.getElementById("resulRefri");

        let qtdTotalCerveja = cerveja(qtdDuracao) * qtdAdultos;
        let qtdTotalCervejaLata = lataCerveja(qtdDuracao) * qtdAdultos;
        let qtdRefri = bebidasPP(qtdDuracao) * qtdAdultos + (bebidasPP(qtdDuracao) / 2 * qtdCrianca);

        if (tpBebida == "cerveja") {
            if (clickBtn > 0) {
                resCerveja.innerHTML = `<p>${Math.ceil(qtdTotalCerveja / 600)} Garrafas</p>`
            } else {
                resCerveja.innerHTML = "-";
            }
        } else if (tpBebida == "cervejaLata") {
            if (clickBtn > 0) {
                resCerveLata.innerHTML = `<p>${Math.ceil(qtdTotalCervejaLata / 355)} Latas</p>`
            } else {
                resCerveLata.innerHTML = "-";
            }

        } else if (tpBebida == "refrigerante") {
            if (clickBtn > 0) {
                resRefri.innerHTML = `<p>${Math.ceil(qtdRefri / 2000)} Garrafas</p>`
            } else {
                resRefri.innerHTML = "-";
            }
        }
    }

    // Resultado Acompanhamentos
    function resulAcompanhamentos(clickBtn, tpComida) {
        let resVinagrete = document.getElementById("resulVina");
        let resPaoAlho = document.getElementById("resulPaoAlho");
        let resFarofa = document.getElementById("resulFarrofa");

        let qtdVinagrete = (qtdAdultos + qtdCrianca) * 0.035;
        let qtdFarofa = (qtdAdultos + qtdCrianca) * 0.030;
        let qtdPaoAlho = (qtdAdultos + qtdCrianca);

        if (tpComida == "vinagrete") {
            if (clickBtn > 0) {
                resVinagrete.innerHTML = `<p>${qtdVinagrete.toFixed(3)}g</p>`
            } else {
                resVinagrete.innerHTML = "-";
            }
        } else if (tpComida == "paoAlho") {

            if (clickBtn > 0) {
                resPaoAlho.innerHTML = `<p>${qtdPaoAlho} UN</p>`
            } else {
                resPaoAlho.innerHTML = "-";
            }

        } else if (tpComida == "farofa") {
            if (clickBtn > 0) {
                resFarofa.innerHTML = `<p>${qtdFarofa.toFixed(3)}g</p>`
            } else {
                resFarofa.innerHTML = "-";
            }
        }
    }

    // Resultado Suprimentos
    function resulSuprimentos(clickBtn, tpSuprimentos) {
        let resulCarvao = document.getElementById("resulCarvao");
        let resulCopos = document.getElementById("resulCopos");
        let resulPratos = document.getElementById("resulPratos");

        let qtdCarvao = (qtdTotalCarne/1000) * 1.5;
        let qtdCopos = (qtdAdultos + qtdCrianca) * 3;
        let qtdPratos = (qtdAdultos + qtdCrianca) * 2;

        if (tpSuprimentos == "carvao") {
            if (clickBtn > 0) {
                resulCarvao.innerHTML = `<p>${Math.ceil(qtdCarvao)} Kg</p>`
            } else {
                resulCarvao.innerHTML = "-";
            }
        } else if (tpSuprimentos == "copos") {

            if (clickBtn > 0) {
                resulCopos.innerHTML = `<p>${qtdCopos} UN</p>`
            } else {
                resulCopos.innerHTML = "-";
            }

        } else if (tpSuprimentos == "pratos") {
            if (clickBtn > 0) {
                resulPratos.innerHTML = `<p>${qtdPratos} UN</p>`
            } else {
                resulPratos.innerHTML = "-";
            }
        }
    }

    // Calcular quantidades
    function carnePP(qtdDuracao) {
        if (qtdDuracao > 4) {
            return 650;
        } else {
            return 400
        }
    }

    function cerveja(qtdDuracao) {
        if (qtdDuracao > 4) {
            return 5500;
        } else {
            return 3000
        }
    }

    function lataCerveja(qtdDuracao) {
        if (qtdDuracao > 4) {
            return 5500;
        } else {
            return 3000
        }
    }

    function bebidasPP(qtdDuracao) {
        if (qtdDuracao > 4) {
            return 1500;
        } else {
            return 1000
        }
    }
}



// mudar cor background

// const cor1 = "#ce1818";
// const cor2 = "#ffffff";
// let cor3 = document.getElementById("tp-cerveja").style.backgroundColor;

                // if (cor3 == "rgb(255, 255, 255)") {
                //     document.getElementById("tp-cerveja").style.backgroundColor = cor1;
                //     document.getElementById("tp-cerveja").style.borderRadius = "20px";
                //     document.getElementById("tp-cerveja").style.color = "WHITE";
                // } else {
                //     document.getElementById("tp-cerveja").style.backgroundColor = cor2;
                //     document.getElementById("tp-cerveja").style.borderRadius = "20px";
                //     document.getElementById("tp-cerveja").style.color = "BLACK";
                // }