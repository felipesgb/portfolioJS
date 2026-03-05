const projetos = [
    {
        nome: "Censo SJC",
        descricao: "Plataforma para análise gráfica dos dados do último censo de São José dos Campos. Contribuí no desenvolvimento do front-end, utilizando HTML e CSS na estrutura e estilização do site, junto ao back-end na criação de gráficos em Python.",
        tecnologias: "HTML, CSS, Python",
        imagem: "./img/codewave_projeto.jpeg",  
        github: "https://github.com/guilhermefpo/CodeWave",
        site: "https://censo-sjc.vercel.app"
    },
    {
        nome: "Site Universidade",
        descricao: "Projeto acadêmico de criação de um site para uma universidade utilizando HTML e CSS. Desenvolvi todo o site, criando sua estrutura completa e cuidando da estilização para garantir um visual organizado, funcional e agradável.",
        tecnologias: "HTML, CSS",
        imagem: "./img/universidade_projeto.jpeg", 
        github: "https://github.com/felipesgb/desafio1-designDigital",
        site: "https://desafio1-design-digital.vercel.app/"
    }
]

function renderizarProjetos() {
    const secao = document.querySelector(".projetos");

    const titulo = document.createElement("h1");
    titulo.textContent = "Projetos";
    secao.appendChild(titulo);

    const container = document.createElement("div");
    container.classList.add("projetos_container");
    secao.appendChild(container);

    for (let i = 0; i < projetos.length; i++) {
        const projeto = projetos[i];

        const card = document.createElement("div");
        card.classList.add("projeto_card");

        card.innerHTML = `
            <img src="${projeto.imagem}" alt="${projeto.nome}">
            <h2>${projeto.nome}</h2>
            <p class="projeto_descricao">${projeto.descricao}</p>
            <p class="projeto_tecnologias"><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
            <div class="projeto_botoes">
                <a href="${projeto.github}" target="_blank">GitHub</a>
                <a href="${projeto.site}" target="_blank">Site</a>
            </div>
        `;

        container.appendChild(card);
    }
}





const habilidades = [
    { nome: "HTML",       icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { nome: "CSS",        icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { nome: "Python",     icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { nome: "JavaScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
    { nome: "TypeScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { nome: "MySQL",      icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
    { nome: "AWS",        icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { nome: "Git",        icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" },
    { nome: "Figma",      icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { nome: "Docker",     icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" },
];

function renderizarHabilidades() {
    const container = document.querySelector(".habilidades_icones");

    for (let i = 0; i < habilidades.length; i++) {
        const habilidade = habilidades[i];

        const card = document.createElement("div");
        card.classList.add("habilidades_cards");

        card.innerHTML = `
            <p>${habilidade.nome}</p>
            <img src="${habilidade.icone}" alt="${habilidade.nome}">
        `;

        container.appendChild(card);
    }
}





const cursos = [
    {
        nome: "Curso Escola Inovadores - CPS",
        subtitulo: "Desenvolvimento de competências em Empreendedorismo e Inovação",
        descricao: "Formação voltada ao desenvolvimento de habilidades empreendedoras e à aplicação de ferramentas básicas para criação e estruturação de projetos inovadores.",
        imagem: "./img/certificado_escola.jpeg",
        pdf: "./pdfs/certificado_CPS.pdf"
    },
    {
        nome: "Curso Scrum - FGV",
        subtitulo: "Formação introdutória sobre métodos ágeis com foco no framework Scrum.",
        descricao: "Formação voltada à compreensão dos papéis, eventos e artefatos do Scrum, seus princípios e aplicações práticas em processos de desenvolvimento ágil.",
        imagem: "./img/certificado_scrum.jpeg",
        pdf: "./pdfs/certificado_FGV.pdf"
    }
];

function renderizarCursos() {
    const secao = document.querySelector(".cursos");

    const titulo = document.createElement("h1");
    titulo.textContent = "Cursos";
    secao.appendChild(titulo);

    const container = document.createElement("div");
    container.classList.add("cursos_container");
    secao.appendChild(container);

    for (let i = 0; i < cursos.length; i++) {
        const curso = cursos[i];

        const card = document.createElement("div");
        card.classList.add("curso_card");

        card.innerHTML = `
            <img src="${curso.imagem}" alt="${curso.nome}">
            <h2>${curso.nome}</h2>
            <p class="curso_subtitulo">${curso.subtitulo}</p>
            <p class="curso_descricao">${curso.descricao}</p>
            <a href="${curso.pdf}" target="_blank" download>Download</a>
        `;

        container.appendChild(card);
    }
}





function saudacao() {
    const hora = new Date().getHours();
    let mensagem;

    if (hora >= 6 && hora < 12) {
        mensagem = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde";
    } else {
        mensagem = "Boa noite";
    }

    const h1 = document.querySelector(".apresentacao_textos h1");
    if (h1) {
        h1.textContent = mensagem + ", eu sou o";
    }
}


saudacao();
renderizarProjetos();
renderizarHabilidades();
renderizarCursos();