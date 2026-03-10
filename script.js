const projetosPadrao = [
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
];

const habilidadesPadrao = [
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

const cursosPadrao = [
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



function carregar(chave, padrao) {
    const salvo = localStorage.getItem(chave);
    return salvo ? JSON.parse(salvo) : padrao;
}

function salvar(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}


function renderizarProjetos() {
    const secao = document.querySelector(".projetos");
    secao.innerHTML = "";

    const titulo = document.createElement("h1");
    titulo.textContent = "Projetos";
    secao.appendChild(titulo);

    const container = document.createElement("div");
    container.classList.add("projetos_container");
    secao.appendChild(container);

    const projetos = carregar("projetos", projetosPadrao);

    projetos.forEach((projeto, index) => {
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
    });
}

function renderizarHabilidades() {
    const container = document.querySelector(".habilidades_icones");
    container.innerHTML = "";

    const habilidades = carregar("habilidades", habilidadesPadrao);

    habilidades.forEach(habilidade => {
        const card = document.createElement("div");
        card.classList.add("habilidades_cards");
        card.innerHTML = `
            <p>${habilidade.nome}</p>
            <img src="${habilidade.icone}" alt="${habilidade.nome}">
        `;
        container.appendChild(card);
    });
}

function renderizarCursos() {
    const secao = document.querySelector(".cursos");
    secao.innerHTML = "";

    const titulo = document.createElement("h1");
    titulo.textContent = "Cursos";
    secao.appendChild(titulo);

    const container = document.createElement("div");
    container.classList.add("cursos_container");
    secao.appendChild(container);

    const cursos = carregar("cursos", cursosPadrao);

    cursos.forEach(curso => {
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
    });
}

function saudacao() {
    const hora = new Date().getHours();
    let mensagem;
    if (hora >= 6 && hora < 12) mensagem = "Bom dia";
    else if (hora >= 12 && hora < 18) mensagem = "Boa tarde";
    else mensagem = "Boa noite";

    const h1 = document.querySelector(".apresentacao_textos h1");
    if (h1) h1.textContent = mensagem + ", eu sou o";
}



function criarPainelAdmin() {
    const style = document.createElement("style");
    style.textContent = `
        #admin-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, hsla(162, 41%, 32%, 1) 23%, hsla(188, 80%, 26%, 1) 100%);
            color: white;
            font-size: 22px;
            border: none;
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: transform 0.2s ease;
            opacity: 0.4;
        }
        #admin-btn:hover { transform: scale(1.1); opacity: 1; }

        #admin-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            z-index: 10000;
            justify-content: center;
            align-items: center;
        }
        #admin-overlay.ativo { display: flex; }

        #admin-modal {
            background: #FFFAF1;
            border-radius: 16px;
            padding: 30px;
            width: 90%;
            max-width: 600px;
            max-height: 85vh;
            overflow-y: auto;
            font-family: "Space Grotesk", sans-serif;
        }

        #admin-modal h2 {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(135deg, hsla(162, 41%, 32%, 1) 23%, hsla(188, 80%, 26%, 1) 100%);
            -webkit-background-clip: text;
            color: transparent;
            margin-bottom: 20px;
        }

        .admin-tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .admin-tab {
            padding: 8px 18px;
            border-radius: 30px;
            border: 2px solid #298d62;
            background: transparent;
            font-family: "Space Grotesk", sans-serif;
            font-weight: 700;
            cursor: pointer;
            color: #298d62;
            transition: all 0.2s;
        }

        .admin-tab.ativo {
            background: linear-gradient(135deg, hsla(162, 41%, 32%, 1) 23%, hsla(188, 80%, 26%, 1) 100%);
            color: white;
            border-color: transparent;
        }

        .admin-form { display: none; flex-direction: column; gap: 12px; }
        .admin-form.ativo { display: flex; }

        .admin-form input, .admin-form textarea {
            padding: 10px 14px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 15px;
            font-family: "Space Grotesk", sans-serif;
            background: #F5EFE6;
        }

        .admin-form textarea { resize: vertical; min-height: 80px; }

        .admin-form label {
            font-size: 13px;
            font-weight: 700;
            color: #444;
            margin-bottom: -6px;
        }

        .admin-salvar {
            padding: 12px;
            border-radius: 40px;
            border: none;
            background: linear-gradient(135deg, hsla(162, 41%, 32%, 1) 23%, hsla(188, 80%, 26%, 1) 100%);
            color: white;
            font-size: 15px;
            font-weight: 700;
            font-family: "Space Grotesk", sans-serif;
            cursor: pointer;
            transition: transform 0.2s;
        }
        .admin-salvar:hover { transform: scale(1.03); }

        .admin-lista { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }

        .admin-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #F5EFE6;
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
        }

        .admin-item button {
            background: none;
            border: none;
            color: #c0392b;
            cursor: pointer;
            font-size: 18px;
        }

        #admin-fechar {
            margin-top: 20px;
            padding: 10px;
            border-radius: 40px;
            border: 2px solid #298d62;
            background: transparent;
            color: #298d62;
            font-size: 14px;
            font-weight: 700;
            font-family: "Space Grotesk", sans-serif;
            cursor: pointer;
            width: 100%;
            transition: all 0.2s;
        }
        #admin-fechar:hover { background: #f0f0f0; }
    `;
    document.head.appendChild(style);

    const btn = document.createElement("button");
    btn.id = "admin-btn";
    btn.title = "Gerenciar Portfólio";
    btn.textContent = "";
    document.body.appendChild(btn);

    const overlay = document.createElement("div");
    overlay.id = "admin-overlay";
    overlay.innerHTML = `
        <div id="admin-modal">
            <h2>Gerenciar Portfólio</h2>

            <div class="admin-tabs">
                <button class="admin-tab ativo" data-aba="projetos">Projetos</button>
                <button class="admin-tab" data-aba="habilidades">Habilidades</button>
                <button class="admin-tab" data-aba="cursos">Cursos</button>
            </div>

            <!-- FORM PROJETOS -->
            <div class="admin-form ativo" id="form-projetos">
                <label>Nome</label>
                <input type="text" id="p-nome">
                <label>Descrição</label>
                <textarea id="p-descricao"></textarea>
                <label>Tecnologias</label>
                <input type="text" id="p-tecnologias">
                <label>Imagem</label>
                <input type="file" id="p-imagem" accept="image/*">
                <label>GitHub</label>
                <input type="text" id="p-github">
                <label>Site</label>
                <input type="text" id="p-site">
                <button class="admin-salvar" id="salvar-projeto">Adicionar Projeto</button>
                <div class="admin-lista" id="lista-projetos"></div>
            </div>

            <!-- FORM HABILIDADES -->
            <div class="admin-form" id="form-habilidades">
                <label>Nome da tecnologia</label>
                <input type="text" id="h-nome">
                <label>URL do ícone (devicon)</label>
                <input type="text" id="h-icone">
                <button class="admin-salvar" id="salvar-habilidade">Adicionar Habilidade</button>
                <div class="admin-lista" id="lista-habilidades"></div>
            </div>

            <!-- FORM CURSOS -->
            <div class="admin-form" id="form-cursos">
                <label>Nome</label>
                <input type="text" id="c-nome">
                <label>Subtítulo</label>
                <input type="text" id="c-subtitulo">
                <label>Descrição</label>
                <textarea id="c-descricao"></textarea>
                <label>Imagem</label>
                <input type="file" id="c-imagem" accept="image/*">
                <label>PDF do certificado</label>
                <input type="file" id="c-pdf" accept="application/pdf">
                <button class="admin-salvar" id="salvar-curso">Adicionar Curso</button>
                <div class="admin-lista" id="lista-cursos"></div>
            </div>

            <button id="admin-fechar">Fechar</button>
        </div>
    `;
    document.body.appendChild(overlay);

    const tabs = overlay.querySelectorAll(".admin-tab");
    const forms = overlay.querySelectorAll(".admin-form");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("ativo"));
            forms.forEach(f => f.classList.remove("ativo"));
            tab.classList.add("ativo");
            overlay.querySelector(`#form-${tab.dataset.aba}`).classList.add("ativo");
            atualizarListas();
        });
    });

    btn.addEventListener("click", () => {
        overlay.classList.add("ativo");
        atualizarListas();
    });

    overlay.querySelector("#admin-fechar").addEventListener("click", () => {
        overlay.classList.remove("ativo");
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.classList.remove("ativo");
    });

    // ── Salvar Projeto ──
    overlay.querySelector("#salvar-projeto").addEventListener("click", () => {
        const nome = overlay.querySelector("#p-nome").value.trim();
        if (!nome) return alert("Preencha pelo menos o nome!");

        const fileInput = overlay.querySelector("#p-imagem");
        const arquivo = fileInput.files[0];

        function finalizarSalvarProjeto(imagemSrc) {
            const projetos = carregar("projetos", projetosPadrao);
            projetos.push({
                nome,
                descricao: overlay.querySelector("#p-descricao").value.trim(),
                tecnologias: overlay.querySelector("#p-tecnologias").value.trim(),
                imagem: imagemSrc,
                github: overlay.querySelector("#p-github").value.trim(),
                site: overlay.querySelector("#p-site").value.trim()
            });
            salvar("projetos", projetos);
            ["#p-nome","#p-descricao","#p-tecnologias","#p-github","#p-site"]
                .forEach(s => overlay.querySelector(s).value = "");
            fileInput.value = "";
            renderizarProjetos();
            atualizarListas();
        }

        if (arquivo) {
            const reader = new FileReader();
            reader.onload = (e) => finalizarSalvarProjeto(e.target.result);
            reader.readAsDataURL(arquivo);
        } else {
            finalizarSalvarProjeto("");
        }
    });

    overlay.querySelector("#salvar-habilidade").addEventListener("click", () => {
        const nome = overlay.querySelector("#h-nome").value.trim();
        const icone = overlay.querySelector("#h-icone").value.trim();
        if (!nome || !icone) return alert("Preencha nome e ícone!");

        const habilidades = carregar("habilidades", habilidadesPadrao);
        habilidades.push({ nome, icone });
        salvar("habilidades", habilidades);

        overlay.querySelector("#h-nome").value = "";
        overlay.querySelector("#h-icone").value = "";

        renderizarHabilidades();
        atualizarListas();
    });

    overlay.querySelector("#salvar-curso").addEventListener("click", () => {
        const nome = overlay.querySelector("#c-nome").value.trim();
        if (!nome) return alert("Preencha pelo menos o nome!");

        const imgInput = overlay.querySelector("#c-imagem");
        const pdfInput = overlay.querySelector("#c-pdf");
        const imgArquivo = imgInput.files[0];
        const pdfArquivo = pdfInput.files[0];

        function finalizarSalvarCurso(imagemSrc, pdfSrc) {
            const cursos = carregar("cursos", cursosPadrao);
            cursos.push({
                nome,
                subtitulo: overlay.querySelector("#c-subtitulo").value.trim(),
                descricao: overlay.querySelector("#c-descricao").value.trim(),
                imagem: imagemSrc,
                pdf: pdfSrc
            });
            salvar("cursos", cursos);
            ["#c-nome","#c-subtitulo","#c-descricao"]
                .forEach(s => overlay.querySelector(s).value = "");
            imgInput.value = "";
            pdfInput.value = "";
            renderizarCursos();
            atualizarListas();
        }

        function lerArquivo(arquivo) {
            return new Promise((resolve) => {
                if (!arquivo) return resolve("");
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(arquivo);
            });
        }

        Promise.all([lerArquivo(imgArquivo), lerArquivo(pdfArquivo)])
            .then(([imgSrc, pdfSrc]) => finalizarSalvarCurso(imgSrc, pdfSrc));
    });

    function atualizarListas() {
        atualizarLista("projetos", projetosPadrao, "lista-projetos", renderizarProjetos);
        atualizarLista("habilidades", habilidadesPadrao, "lista-habilidades", renderizarHabilidades);
        atualizarLista("cursos", cursosPadrao, "lista-cursos", renderizarCursos);
    }

    function atualizarLista(chave, padrao, listaId, renderFn) {
        const lista = overlay.querySelector(`#${listaId}`);
        const dados = carregar(chave, padrao);
        lista.innerHTML = dados.length ? "<strong style='font-size:13px;color:#555'>Itens salvos:</strong>" : "";

        dados.forEach((item, i) => {
            const div = document.createElement("div");
            div.classList.add("admin-item");
            div.innerHTML = `
                <span>${item.nome}</span>
                <button title="Remover">✕</button>
            `;
            div.querySelector("button").addEventListener("click", () => {
                if (!confirm(`Remover "${item.nome}"?`)) return;
                dados.splice(i, 1);
                salvar(chave, dados);
                renderFn();
                atualizarListas();
            });
            lista.appendChild(div);
        });
    }
}
 
saudacao();
renderizarProjetos();
renderizarHabilidades();
renderizarCursos();
criarPainelAdmin();