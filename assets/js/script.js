const nav= document.querySelector('.menu-navegacao')
window.addEventListener('scroll',()=>{
    if(window.scrollY>10){
        nav.style.opacity=0.8
    } else {
        nav.style.opacity=1
    }
});  //scroll

//cards página ações
const acoes=[
{centro:'⚡ Eficiência Energética ⚡',texto:'Utilizar equipamentos inteligentes e sistemas automatizados para reduzir o consumo de energia nas operações industriais.'},
{centro:'💧 Reutilização da Água 💧',texto:'Implementar sistemas de tratamento e reaproveitamento da água utilizada nos processos produtivos.'},
{centro:'♻️ Gestão de Resíduos ♻️',texto:'Separar, reciclar e destinar corretamente os resíduos industriais para minimizar impactos ambientais.'},
{centro:'🌞 Energias Renováveis 🌞',texto:'Investir em fontes de energia limpa, como solar e eólica, reduzindo a dependência de combustíveis fósseis.'},
{centro:'🤖 Automação Inteligente 🤖',texto:'Automatizar processos para aumentar a eficiência produtiva e diminuir o desperdício de matéria-prima.'},
{centro:'📡 Monitoramento Ambiental 📡',texto:'Utilizar sensores e tecnologias IoT para acompanhar em tempo real indicadores ambientais da indústria.'}
];

const container= document.querySelector('#container-acoes')

if(container){
        for (let i=0; i <acoes.length; i++){
            const item = acoes[i]
            const div=document.createElement('div');
            div.className= 'acao-item'
            div.innerHTML=   `
            <div class="acao-icone">${item.centro}</div>
            <p class="acao-texto">${item.texto}</p> `
            container.appendChild(div)
        }
}
//formulário
const form = document.getElementById("formulario-adesao");
const msg = document.getElementById("mensagem-retorno");

if (form) {

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");
        const telefoneInput = document.getElementById("telefone");

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();
//validar
        const nomeValido = nome.split(" ").length >= 2;

        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        const telefoneValido =
             telefone.replace(/\D/g, "").length === 11;

//limpar classes
        [nomeInput, emailInput, telefoneInput].forEach(campo => {
            campo.classList.remove("erro", "sucesso");
        });

        if (nomeValido) {
            nomeInput.classList.add("sucesso");
        } else {
            nomeInput.classList.add("erro");
        }
        if (emailValido) {
            emailInput.classList.add("sucesso");
        } else {
            emailInput.classList.add("erro");
        }
        if (telefoneValido) {
            telefoneInput.classList.add("sucesso");
        } else {
            telefoneInput.classList.add("erro");
        }
        if (nomeValido && emailValido && telefoneValido) {

            msg.textContent =
                `Parabéns, ${nome}! Sua adesão foi registrada com sucesso.`;

            msg.className = "mensagem-retorno sucesso";
            form.reset();
            [nomeInput, emailInput, telefoneInput].forEach(campo => {
                campo.classList.remove("sucesso"); });
        } else {

            msg.textContent =
                "Favor preencher os campos corretamente.";

            msg.className = "mensagem-retorno erro";
        }});
}
//minicards página inical e página cards
const problemas=[
    {centro:'Aumento do consumo de energia',texto:'A operação contínua de servidores, robôs e data centers exige grande quantidade de energia, muitas vezes dependente de fontes não renováveis.'},
    {centro:'Geração de resíduos eletrônicos',texto:'A rápida obsolescência de sensores, placas e dispositivos IoT (Internet das Coisas) gera montanhas de lixo tóxico e de descarte complexo.'},
    {centro:'Emissão de poluentes',texto:'Apesar da otimização, o aumento na escala de produção e a cadeia de suprimentos globalizada ainda resultam em altas emissões de carbono.'}
]

const desafios=[
    {centro:'Emissão de Poluentes',texto:'Liberação de gases que prejudicam o meio ambiente e a saúde.'},
    {centro:'Consumo Excessivo de Energia',texto:'Uso excessivo de recursos energéticos nos processos industriais.'},
    {centro:'Desperdício de Água',texto:'Consumo inadequado de um recurso essencial para a vida.'},
    {centro:'Geração de Resíduos',texto:'Produção de materiais descartados que podem causar poluição.'},
    {centro:'Mudanças Climáticas',texto:'Impactos ambientais causados pelo aumento dos gases de efeito estufa.'},

]

function criaCards(lista,idContainer){

    const container=document.getElementById(idContainer); 

    if (!container) return;
    lista.forEach(item=>{
        container.innerHTML +=`
            <div class="minicard">
                <h3>${item.centro}</h3>
                <div class="texto-hover"> ${item.texto}</div>
            </div>
 ` ;
    });
}

criaCards(problemas, "fazer-card");
criaCards(desafios, "fazer-card2");

//Cards seção tecnologias que fazem a diferença
const tecnologias=[
    {
        titulo: "Inteligência Artificial",
        subtitulo: "IA",
        descricao: "👨‍💻Auxilia na análise de dados e na otimização de processos industriais.",
        imagem: "assets/img/Ia.jfif",
        link: "https://www.ibm.com/br-pt/topics/artificial-intelligence"
    },

    {
        titulo: "Internet das Coisas",
        subtitulo: "IoT",
        descricao: "📡Sensores inteligentes monitoram equipamentos e recursos em tempo real.",
        imagem: "assets/img/iot.jpeg",
        link: "https://aws.amasensorm/pt/what-is/iot/"
    },

    {
        titulo: "Automação Industrial",
        subtitulo: "Aut. Ind.",
        descricao: "🛠🛠 Melhora a produtividade e reduz erros, evitando desperdícios.",
        imagem: "assets/img/automacao.jpg",
        link: "https://www.produttivo.com.br/blog/automacao-industrial/"
    },

    {
        titulo: "Computação em Nuvem",
        subtitulo: "Cloud",
        descricao: "Facilita o gerenciamento de dados e reduz infraestrutura física 🖥",
        imagem: "assets/img/nuvem.jpg",
        link: "https://azure.microsoft.com/pt-br/resources/cloud-computing-dictionary/what-is-cloud-computing"
    }
];

if(tecnologias){

const container=document.getElementById("container-cards");

tecnologias.forEach(item => {

    const card=document.createElement("div");

    card.className= "capsula";

    card.innerHTML = `
        <div class="card">

            <div class="frente"
                 style="background-image:url('${item.imagem}')">
                <div class="informacao">
                    <h2 class="titulo">${item.titulo}</h2>
                    <p class="subtitulo">${item.subtitulo}</p>
                </div>

            </div>
            <div class="verso">
                <div class="conteiner-card">
                    <h3>${item.titulo}</h3>
                    <p class="descricao"> ${item.descricao}</p>
                    <a href="${item.link}" target="_blank"> <button class="botao-card"> Explore mais</button></a>
                </div>
            </div>
        </div>
    `;
     container.appendChild(card);
});
}
// página Cards seção empresas---diferença
const empresas=[
{
    nome: "WEG",
    descricao: "Investe em automação e eficiência energética para tornar os processos industriais mais sustentáveis.",
    logo: "assets/img/weg.jfif",
    site: "https://www.weg.net"
},

{
    nome: "Siemens",
    descricao: "Utiliza inteligência artificial e automação para otimizar processos e reduzir desperdícios.",
    logo: "assets/img/siemens.jfif",
    site: "https://www.siemens.com"
},

{
    nome: "Schneider Electric",
    descricao: "Desenvolve soluções inteligentes para monitoramento e gestão de energia.",
    logo: "assets/img/schineider.jfif",
    site: "https://www.se.com/br"
},

{
    nome: "Bosch",
    descricao: "Emprega IoT e análise de dados para aumentar a eficiência produtiva.",
    logo: "assets/img/bosch.jfif",
    site: "https://www.bosch.com"
}
];

if(empresas){
const container=document.getElementById("container-empresas");

if(container){

    empresas.forEach(empresa=>{

        const div = document.createElement("div");

        div.className = "empresa";

        div.innerHTML = `
            <img src="${empresa.logo}" alt="Logo ${empresa.nome}">

            <div class="empresa-info">

                <h3>${empresa.nome}</h3>
                <p>${empresa.descricao}</p>
                <a href="${empresa.site}" target="_blank"> Conheça a empresa →</a>

            </div>
        `;
        container.appendChild(div);
    });
}
}

