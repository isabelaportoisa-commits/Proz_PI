const nav= document.querySelector('.menu-navegacao')
window.addEventListener('scroll',()=>{
    if(window.scrollY>10){
        nav.style.opacity=0.8
    } else {
        nav.style.opacity=1
    }
});


const acoes=[
{centro:'⚡ Eficiência Energética ⚡',texto:'Utilizar equipamentos inteligentes e sistemas automatizados para reduzir o consumo de energia nas operações industriais.'},
{centro:'💧 Reutilização da Água 💧',texto:'Implementar sistemas de tratamento e reaproveitamento da água utilizada nos processos produtivos.'},
{centro:'♻️ Gestão de Resíduos ♻️',texto:'Separar, reciclar e destinar corretamente os resíduos industriais para minimizar impactos ambientais.'},
{centro:'🌞 Energias Renováveis 🌞',texto:'Investir em fontes de energia limpa, como solar e eólica, reduzindo a dependência de combustíveis fósseis.'},
{centro:'🤖 Automação Inteligente 🤖',texto:'Automatizar processos para aumentar a eficiência produtiva e diminuir o desperdício de matéria-prima.'},
{centro:'📡 Monitoramento Ambiental 📡',texto:'Utilizar sensores e tecnologias IoT para acompanhar em tempo real indicadores ambientais da indústria.'}
]

const container= document.querySelector('#container-acoes')
for (let i=0; i <acoes.length; i++){
    const item = acoes[i]
    const div=document.createElement('div');
    div.className= 'acao-item'
    div.innerHTML=   `
    <div class="acao-icone">${item.centro}</div>
    <p class="acao-texto">${item.texto}</p> `

    container.appendChild(div)
}

const form = document.getElementById("formulario-adesao");
const msg = document.getElementById("mensagem-retorno");

console.log(msg)

form.addEventListener("submit", (e) => {

        e.preventDefault();
        
        if(form.checkValidity()) {
            const nome = document.getElementById("nome").value
            msg.textContent = ` Parabéns,${nome}! Sua adesão registrada com sucesso.`
            msg.className = 'mensagem-retorno sucesso'
            form.reset()
        }else{
            msg.textContent = 'Favor preencha os campos corretamente.';
            msg.className = 'mensagem-retorno erro';
            msg.style.display = 'block';
        }    
    }
)

