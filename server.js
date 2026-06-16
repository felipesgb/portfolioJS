const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ─── BANCO FAKE (em memória) ───────────────────────────────────────────────

let projetos = [
  {
    id: 1,
    nome: "Censo SJC",
    descricao:
      "Plataforma para análise gráfica dos dados do último censo de São José dos Campos.",
    tecnologias: "HTML, CSS, Python",
    imagem: "./img/codewave_projeto.jpeg",
    github: "https://github.com/guilhermefpo/CodeWave",
    site: "",
  },
  {
    id: 2,
    nome: "Site Universidade",
    descricao:
      "Projeto acadêmico de criação de um site para uma universidade utilizando HTML e CSS.",
    tecnologias: "HTML, CSS",
    imagem: "./img/universidade_projeto.jpeg",
    github: "https://github.com/felipesgb/desafio1-designDigital",
    site: "https://desafio1-design-digital.vercel.app/",
  }
];

let habilidades = [
  {
    id: 1,
    nome: "HTML",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    nome: "CSS",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    nome: "Python",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 4,
    nome: "JavaScript",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    id: 5,
    nome: "TypeScript",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 6,
    nome: "MySQL",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    id: 7,
    nome: "Git",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
  },
];

let cursos = [
  {
    id: 1,
    nome: "Curso Escola Inovadores - CPS",
    subtitulo: "Desenvolvimento de competências em Empreendedorismo e Inovação",
    descricao:
      "Formação voltada ao desenvolvimento de habilidades empreendedoras.",
    imagem: "./img/certificado_escola.jpeg",
    pdf: "./pdfs/certificado_CPS.pdf",
  },
  {
    id: 2,
    nome: "Curso Scrum - FGV",
    subtitulo:
      "Formação introdutória sobre métodos ágeis com foco no framework Scrum.",
    descricao:
      "Formação voltada à compreensão dos papéis, eventos e artefatos do Scrum.",
    imagem: "./img/certificado_scrum.jpeg",
    pdf: "./pdfs/certificado_FGV.pdf",
  },
];

let nextId = { projetos: 3, habilidades: 8, cursos: 3 };

app.get("/projetos", (req, res) => {
  res.json(projetos);
});

app.get("/projetos/:id", (req, res) => {
  const projeto = projetos.find((p) => p.id === parseInt(req.params.id));
  if (!projeto) return res.status(404).json({ erro: "Projeto não encontrado" });
  res.json(projeto);
});

app.post("/projetos", (req, res) => {
  const { nome, descricao, tecnologias, imagem, github, site } = req.body;
  if (!nome) return res.status(400).json({ erro: "Nome é obrigatório" });

  const novo = {
    id: nextId.projetos++,
    nome,
    descricao,
    tecnologias,
    imagem,
    github,
    site,
  };
  projetos.push(novo);
  res.status(201).json(novo);
});

app.put("/projetos/:id", (req, res) => {
  const index = projetos.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ erro: "Projeto não encontrado" });

  projetos[index] = { ...projetos[index], ...req.body };
  res.json(projetos[index]);
});

app.delete("/projetos/:id", (req, res) => {
  const index = projetos.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ erro: "Projeto não encontrado" });

  const removido = projetos.splice(index, 1)[0];
  res.json({ mensagem: "Projeto removido com sucesso", removido });
});

app.get("/habilidades", (req, res) => {
  res.json(habilidades);
});

app.get("/habilidades/:id", (req, res) => {
  const habilidade = habilidades.find((h) => h.id === parseInt(req.params.id));
  if (!habilidade)
    return res.status(404).json({ erro: "Habilidade não encontrada" });
  res.json(habilidade);
});

app.post("/habilidades", (req, res) => {
  const { nome, icone } = req.body;
  if (!nome || !icone)
    return res.status(400).json({ erro: "Nome e ícone são obrigatórios" });

  const nova = { id: nextId.habilidades++, nome, icone };
  habilidades.push(nova);
  res.status(201).json(nova);
});

app.put("/habilidades/:id", (req, res) => {
  const index = habilidades.findIndex((h) => h.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ erro: "Habilidade não encontrada" });

  habilidades[index] = { ...habilidades[index], ...req.body };
  res.json(habilidades[index]);
});

app.delete("/habilidades/:id", (req, res) => {
  const index = habilidades.findIndex((h) => h.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ erro: "Habilidade não encontrada" });

  const removida = habilidades.splice(index, 1)[0];
  res.json({ mensagem: "Habilidade removida com sucesso", removida });
});

app.get("/cursos", (req, res) => {
  res.json(cursos);
});

app.get("/cursos/:id", (req, res) => {
  const curso = cursos.find((c) => c.id === parseInt(req.params.id));
  if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
  res.json(curso);
});

app.post("/cursos", (req, res) => {
  const { nome, subtitulo, descricao, imagem, pdf } = req.body;
  if (!nome) return res.status(400).json({ erro: "Nome é obrigatório" });

  const novo = { id: nextId.cursos++, nome, subtitulo, descricao, imagem, pdf };
  cursos.push(novo);
  res.status(201).json(novo);
});

app.put("/cursos/:id", (req, res) => {
  const index = cursos.findIndex((c) => c.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ erro: "Curso não encontrado" });

  cursos[index] = { ...cursos[index], ...req.body };
  res.json(cursos[index]);
});

app.delete("/cursos/:id", (req, res) => {
  const index = cursos.findIndex((c) => c.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ erro: "Curso não encontrado" });

  const removido = cursos.splice(index, 1)[0];
  res.json({ mensagem: "Curso removido com sucesso", removido });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`\nRotas disponíveis:`);
  console.log(`  GET    /projetos`);
  console.log(`  GET    /projetos/:id`);
  console.log(`  POST   /projetos`);
  console.log(`  PUT    /projetos/:id`);
  console.log(`  DELETE /projetos/:id`);
  console.log(`\n  GET    /habilidades`);
  console.log(`  GET    /habilidades/:id`);
  console.log(`  POST   /habilidades`);
  console.log(`  PUT    /habilidades/:id`);
  console.log(`  DELETE /habilidades/:id`);
  console.log(`\n  GET    /cursos`);
  console.log(`  GET    /cursos/:id`);
  console.log(`  POST   /cursos`);
  console.log(`  PUT    /cursos/:id`);
  console.log(`  DELETE /cursos/:id`);
});
