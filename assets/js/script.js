const acoes=[{texto:'Utilizar equipamentos inteligentes e sistemas automatizados para reduzir o consumo de energia nas operações industriais.'},{texto:'Implementar sistemas de tratamento e reaproveitamento da água utilizada nos processos produtivos.'},
 {texto:'Separar, reciclar e destinar corretamente os resíduos industriais para minimizar impactos ambientais.'},{texto:'Investir em fontes de energia limpa, como solar e eólica, reduzindo a dependência de combustíveis fósseis.'},
{texto:'Automatizar processos para aumentar a eficiência produtiva e diminuir o desperdício de matéria-prima.'},{texto:'Utilizar sensores e tecnologias IoT para acompanhar em tempo real indicadores ambientais da indústria.'}]

const container= document.querySelector('#container-acoes')
for (let i=0; i <acoes.length; i++){
    const item = acoes[i]
    const div=document.createElement('div');
    div.className= 'acao-item'
    div.innerHTML=   `
    <div class="acao-texto">${item.texto}</div>
    `
    container.appendChild(div)
}

const nav= document.querySelector('.menu-navegacao')
window.addEventListener('scroll',()=>{
    if(window.scrollY>10){
        nav.style.opacity=0.8
    } else {
        nav.style.opacity=1
    }
});