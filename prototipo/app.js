/* Protótipo independente: dados inventados, apenas em memória, sem APIs ou armazenamento. */
"use strict";
const students = [
  {
    id: 1,
    name: "Ana Exemplo",
    level: "Iniciante",
    goal: "Aprender os fundamentos",
    remaining: 6,
    total: 8,
  },
  {
    id: 2,
    name: "Bruno Modelo",
    level: "Intermediário",
    goal: "Melhorar o saque",
    remaining: 3,
    total: 8,
  },
  {
    id: 3,
    name: "Carla Demonstração",
    level: "Iniciante",
    goal: "Praticar atividade física",
    remaining: 7,
    total: 8,
  },
  {
    id: 4,
    name: "Diego Fictício",
    level: "Avançado",
    goal: "Treinar para torneios",
    remaining: 2,
    total: 4,
  },
];
const courts = [
  { name: "Quadra 1", floor: "Saibro", available: true },
  { name: "Quadra 2", floor: "Cimento", available: true },
  { name: "Quadra 3", floor: "Sintético", available: false },
];
const days = [
  "Segunda · 26/10",
  "Terça · 27/10",
  "Quarta · 28/10",
  "Quinta · 29/10",
  "Sexta · 30/10",
];
const lessons = [
  { student: 1, day: 0, time: "08:00", court: "Quadra 1", type: "Individual" },
  { student: 2, day: 0, time: "10:00", court: "Quadra 2", type: "Individual" },
  {
    student: 3,
    day: 1,
    time: "09:00",
    court: "Quadra 1",
    type: "Reposição por chuva",
  },
  { student: 4, day: 2, time: "16:00", court: "Quadra 2", type: "Individual" },
];
const charges = [
  {
    student: 1,
    description: "Pacote de 8 aulas",
    amount: 640,
    paid: true,
    due: "2026-10-20",
  },
  {
    student: 2,
    description: "Mensalidade",
    amount: 400,
    paid: false,
    due: "2026-10-30",
  },
  {
    student: 3,
    description: "Pacote de 8 aulas",
    amount: 640,
    paid: false,
    due: "2026-10-20",
  },
];
const trainings = [
  {
    student: 1,
    date: "2026-10-23",
    attendance: "Presente",
    content: "Forehand e deslocamento",
    notes: "Trabalhar a preparação da raquete na próxima aula.",
  },
];
const referenceDate = "2026-10-26"; // Semana fixa para apresentação reproduzível.
const money = (n) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    n,
  );
const date = (value) =>
  new Intl.DateTimeFormat("pt-BR").format(new Date(value + "T12:00:00"));
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const name = (id) =>
  students.find((s) => s.id === id)?.name ?? "Aluno não encontrado";
const initials = (n) =>
  n
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
const $ = (selector) => document.querySelector(selector);
const status = (charge) =>
  charge.paid ? "Pago" : charge.due < referenceDate ? "Atrasado" : "Pendente";
const badge = (text, pending = false) =>
  `<span class="badge${pending ? " pending" : ""}">${escape(text)}</span>`;
const row = (lesson) =>
  `<div class="list-row"><span class="time">${escape(lesson.time)}</span><div><strong>${escape(name(lesson.student))}</strong><small>${escape(lesson.court)} · ${escape(lesson.type)}</small></div>${badge("Agendada")}</div>`;
const stat = (label, value, detail, target) =>
  `<a class="stat" href="#${target}"><small>${label}</small><strong>${value}</strong><em>${detail} →</em></a>`;
const views = {
  painel: [
    "Painel do professor",
    "Sua rotina em quadra, organizada. Semana demonstrativa de 26 a 30 de outubro de 2026.",
    "Nova aula",
  ],
  agenda: [
    "Agenda da semana",
    "Consulte os horários e simule uma nova aula. Todas as aulas demonstrativas duram 1 hora.",
    "Nova aula",
  ],
  alunos: [
    "Seus alunos",
    "Cadastros, objetivos e pacotes em um só lugar.",
    "Novo aluno",
  ],
  treinos: [
    "Registro de treinos",
    "Acompanhe o que foi trabalhado em cada aula.",
    "Registrar treino",
  ],
  quadras: [
    "Suas quadras",
    "Consulte o piso e a disponibilidade dos espaços.",
    null,
  ],
  financeiro: [
    "Controle financeiro",
    "Cobranças fictícias de outubro de 2026. A baixa apenas altera a demonstração.",
    null,
  ],
};
let currentView = "painel";
let activeForm = null;
function render() {
  currentView = Object.hasOwn(views, location.hash.slice(1))
    ? location.hash.slice(1)
    : "painel";
  const [title, subtitle, action] = views[currentView];
  $("#titulo").textContent = title;
  $("#subtitulo").textContent = subtitle;
  document.title = `${title} · TênisGest acadêmico`;
  $("#acao-principal").hidden = !action;
  $("#acao-principal").textContent = action ?? "";
  document.querySelectorAll("nav a").forEach((a) => {
    if (a.hash === "#" + currentView) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  const received = charges
    .filter((c) => c.paid)
    .reduce((sum, c) => sum + c.amount, 0);
  if (currentView === "painel")
    $("#tela").innerHTML =
      `<div class="stats">${stat("Alunos ativos", students.length, "Consultar alunos", "alunos")}${stat("Aulas na semana", lessons.length, "Ver agenda", "agenda")}${stat("Recebido em outubro", money(received), "Conferir financeiro", "financeiro")}</div><div class="split"><section class="panel"><div class="panel-heading"><h2>Aulas de segunda-feira</h2><a href="#agenda">Abrir agenda</a></div>${
        lessons
          .filter((l) => l.day === 0)
          .map(row)
          .join("") || '<p class="empty">Nenhuma aula neste dia.</p>'
      }</section><section class="panel"><h2>Para acompanhar</h2><div class="alert">${charges.filter((c) => !c.paid).length} cobranças aguardam registro de pagamento.<a href="#financeiro">Consultar cobranças →</a></div><div class="alert">Consulte as aulas de reposição por chuva e seus horários.<a href="#agenda">Ver reposições →</a></div></section></div><section class="panel"><h2>Do planejamento ao acompanhamento</h2><p class="muted">Consulte os alunos, organize os horários e registre o conteúdo dos treinos. Os atalhos do painel levam às telas correspondentes.</p><a href="#treinos">Consultar histórico de treinos →</a></section>`;
  if (currentView === "agenda")
    $("#tela").innerHTML =
      `<section class="panel"><div class="panel-heading"><h2>26 a 30 de outubro de 2026</h2>${badge("Semana de demonstração")}</div><div class="week">${days
        .map(
          (day, index) =>
            `<section class="day"><h3>${day}</h3>${
              lessons
                .filter((l) => l.day === index)
                .sort((a, b) => a.time.localeCompare(b.time))
                .map(
                  (l) =>
                    `<div class="lesson"><span>${escape(l.time)}–${String(Number(l.time.slice(0, 2)) + 1).padStart(2, "0")}:00</span><strong>${escape(name(l.student))}</strong><small>${escape(l.court)}<br>${escape(l.type)}</small></div>`,
                )
                .join("") || '<p class="muted">Sem aulas agendadas</p>'
            }</section>`,
        )
        .join(
          "",
        )}</div></section><p class="muted">Agendamento individual ou reposição em memória. Recorrência, grupos e remarcação estão documentados para uma etapa futura.</p>`;
  if (currentView === "alunos")
    $("#tela").innerHTML =
      '<div class="toolbar"><label>Buscar aluno<input id="busca" name="busca" type="search" maxlength="80" placeholder="Ex.: Ana…" autocomplete="off"></label><p class="muted">Cadastros fictícios · sem acesso do aluno</p></div><div class="grid" id="lista-alunos"></div>';
  if (currentView === "alunos") {
    renderStudents("");
    $("#busca").addEventListener("input", (e) =>
      renderStudents(e.target.value),
    );
  }
  if (currentView === "treinos")
    $("#tela").innerHTML =
      `<section class="panel"><h2>Últimos registros</h2>${trainings
        .slice()
        .reverse()
        .map(
          (t) =>
            `<article class="list-row"><span class="avatar" aria-hidden="true">${escape(initials(name(t.student)))}</span><div><strong>${escape(name(t.student))} · ${date(t.date)}</strong><small>${escape(t.content)} · ${escape(t.attendance)}</small><p class="muted">${escape(t.notes)}</p></div></article>`,
        )
        .join("")}</section>`;
  if (currentView === "quadras")
    $("#tela").innerHTML =
      `<div class="grid">${courts.map((c) => `<article class="student"><div class="court" aria-hidden="true"></div><h2>${c.name}</h2><p>Piso: ${c.floor}</p>${badge(c.available ? "Disponível" : "Em manutenção", !c.available)}<p>${c.available ? "Disponível para os agendamentos de demonstração." : "Não aparece no formulário de nova aula."}</p></article>`).join("")}</div><p class="muted">Cadastro, edição e períodos de manutenção são requisitos futuros; esta tela demonstra a consulta.</p>`;
  if (currentView === "financeiro")
    $("#tela").innerHTML =
      `<div class="stats">${stat("Recebido", money(received), "Pagamentos registrados", "financeiro")}${stat("Pendente", money(charges.filter((c) => status(c) === "Pendente").reduce((s, c) => s + c.amount, 0)), "Ainda no prazo", "financeiro")}${stat("Atrasado", money(charges.filter((c) => status(c) === "Atrasado").reduce((s, c) => s + c.amount, 0)), "Vencido na data de referência", "financeiro")}</div><section class="panel"><h2>Lançamentos de outubro</h2><div class="table-wrap"><table><thead><tr><th scope="col">Aluno</th><th scope="col">Descrição</th><th scope="col">Vencimento</th><th scope="col">Valor</th><th scope="col">Situação</th><th scope="col">Ação</th></tr></thead><tbody>${charges.map((c, i) => `<tr><td>${escape(name(c.student))}</td><td>${c.description}</td><td>${date(c.due)}</td><td>${money(c.amount)}</td><td>${badge(status(c), !c.paid)}</td><td>${c.paid ? "Pagamento registrado" : `<button data-payment="${i}" aria-label="Registrar pagamento de ${escape(name(c.student))}">Registrar</button>`}</td></tr>`).join("")}</tbody></table></div></section>`;
}
function renderStudents(query) {
  const filtered = students.filter((s) =>
    s.name
      .toLocaleLowerCase("pt-BR")
      .includes(query.toLocaleLowerCase("pt-BR")),
  );
  $("#lista-alunos").innerHTML =
    filtered
      .map(
        (s) =>
          `<article class="student"><span class="avatar" aria-hidden="true">${escape(initials(s.name))}</span><h3>${escape(s.name)}</h3>${badge(s.level)}<p>${escape(s.goal)}</p><progress value="${s.remaining}" max="${s.total}" aria-label="Aulas restantes de ${escape(s.name)}"></progress><p>${s.remaining} de ${s.total} aulas restantes no pacote</p><button data-student="${s.id}">Ver detalhes de ${escape(s.name)}</button></article>`,
      )
      .join("") ||
    '<p class="empty">Nenhum aluno encontrado. Tente outro nome.</p>';
}
const options = (items) =>
  items
    .map(
      ([value, label]) =>
        `<option value="${escape(value)}">${escape(label)}</option>`,
    )
    .join("");
const studentField = () =>
  `<label>Aluno<select aria-label="Aluno" name="student" required>${options(students.map((s) => [s.id, s.name]))}</select></label>`;
const input = (label, field, type = "text", extra = "") =>
  `<label>${label}<input name="${field}" type="${type}" required autocomplete="off" ${extra}></label>`;
function openForm(type, id) {
  activeForm = { type, id };
  $("#erro").textContent = "";
  let title = "",
    fields = "";
  if (type === "lesson") {
    title = "Nova aula";
    fields =
      studentField() +
      `<label>Tipo<select aria-label="Tipo" name="type"><option>Individual</option><option>Reposição por chuva</option></select></label><label>Dia<select aria-label="Dia" name="day">${options(days.map((d, i) => [i, d]))}</select></label><label>Horário<select aria-label="Horário" name="time">${options(["07", "08", "09", "10", "11", "14", "15", "16", "17", "18"].map((h) => [h + ":00", h + ":00"]))}</select></label><label>Quadra<select aria-label="Quadra" name="court">${options(courts.filter((c) => c.available).map((c) => [c.name, c.name]))}</select></label>`;
  }
  if (type === "student") {
    title = "Novo aluno";
    fields =
      input("Nome fictício", "name", "text", 'maxlength="60"') +
      `<label>Nível<select aria-label="Nível" name="level"><option>Iniciante</option><option>Intermediário</option><option>Avançado</option></select></label>` +
      input("Objetivo", "goal", "text", 'maxlength="120"') +
      '<p class="muted">O exemplo inicia com um pacote demonstrativo de 8 aulas. Não há cobrança real.</p>';
  }
  if (type === "training") {
    title = "Registrar treino";
    fields =
      studentField() +
      input(
        "Data",
        "date",
        "date",
        'min="2020-01-01" max="2030-12-31" value="2026-10-26"',
      ) +
      `<label>Presença<select aria-label="Presença" name="attendance"><option>Presente</option><option>Falta</option><option>Reposição</option></select></label>` +
      input("Conteúdo trabalhado", "content", "text", 'maxlength="100"') +
      '<label>Observações<textarea name="notes" maxlength="300"></textarea></label>';
  }
  if (type === "payment") {
    title = "Registrar pagamento";
    fields =
      `<p><strong>${escape(name(charges[id].student))}</strong> · ${money(charges[id].amount)}</p><label>Forma de pagamento<select aria-label="Forma de pagamento" name="method"><option>PIX</option><option>Transferência</option><option>Dinheiro</option><option>Cartão</option></select></label>` +
      input(
        "Data do pagamento",
        "date",
        "date",
        'min="2020-01-01" max="2030-12-31" value="2026-10-26"',
      );
  }
  if (type === "details") {
    const s = students.find((s) => s.id === id);
    title = "Detalhes do aluno";
    fields = `<h3>${escape(s.name)}</h3><p class="muted">${escape(s.level)} · ${escape(s.goal)}</p><p>Pacote: ${s.remaining} de ${s.total} aulas restantes.</p><p class="muted">Sem dados de contato ou acesso próprio. Cadastro inteiramente fictício.</p>`;
  }
  $("#modal-titulo").textContent = title;
  $("#campos").innerHTML = fields;
  $("#formulario [type=submit]").hidden = type === "details";
  $("#modal").showModal();
}
function closeForm() {
  const fields = [...$("#campos").querySelectorAll("input,textarea,select")];
  const dirty = fields.some((el) =>
    el.tagName === "SELECT"
      ? el.selectedIndex !== 0
      : el.value !== el.defaultValue,
  );
  if (dirty && !confirm("Descartar as alterações deste formulário?")) return;
  $("#modal").close();
  activeForm = null;
}
$("#fechar").addEventListener("click", closeForm);
$("#cancelar").addEventListener("click", closeForm);
$("#modal").addEventListener("cancel", (e) => {
  e.preventDefault();
  closeForm();
});
$("#acao-principal").addEventListener("click", () =>
  openForm(
    currentView === "alunos"
      ? "student"
      : currentView === "treinos"
        ? "training"
        : "lesson",
  ),
);
$("#tela").addEventListener("click", (e) => {
  const payment = e.target.closest("[data-payment]");
  const detail = e.target.closest("[data-student]");
  if (payment) openForm("payment", Number(payment.dataset.payment));
  if (detail) openForm("details", Number(detail.dataset.student));
});
$("#formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!activeForm || !$("#formulario").reportValidity()) return;
  const data = Object.fromEntries(new FormData(e.target));
  const type = activeForm.type;
  if (type === "lesson") {
    if (
      !students.some((s) => s.id === Number(data.student)) ||
      !courts.some((c) => c.available && c.name === data.court) ||
      !days[Number(data.day)] ||
      !["Individual", "Reposição por chuva"].includes(data.type) ||
      !/^(07|08|09|10|11|14|15|16|17|18):00$/.test(data.time)
    )
      return;
    if (
      lessons.some((l) => l.day === Number(data.day) && l.time === data.time)
    ) {
      $("#erro").textContent =
        "O professor já tem uma aula nesse horário. Escolha outro horário.";
      return;
    }
    lessons.push({
      student: Number(data.student),
      day: Number(data.day),
      time: data.time,
      court: data.court,
      type: data.type,
    });
  }
  if (type === "student") {
    if (!data.name.trim() || !data.goal.trim()) {
      $("#erro").textContent = "Preencha o nome e o objetivo com texto.";
      return;
    }
    students.push({
      id: students.length + 1,
      name: data.name.trim(),
      level: data.level,
      goal: data.goal.trim(),
      remaining: 8,
      total: 8,
    });
  }
  if (type === "training") {
    if (!data.content.trim()) {
      $("#erro").textContent = "Informe o conteúdo trabalhado.";
      return;
    }
    trainings.push({
      student: Number(data.student),
      date: data.date,
      attendance: data.attendance,
      content: data.content.trim(),
      notes: data.notes.trim(),
    });
  }
  if (type === "payment") {
    const charge = charges[activeForm.id];
    if (charge.paid) return;
    charge.paid = true;
    charge.method = data.method;
    charge.paymentDate = data.date;
  }
  $("#modal").close();
  activeForm = null;
  render();
  $("#aviso").textContent =
    "Registro simulado. Recarregue a página para restaurar os exemplos.";
  $("#acao-principal").hidden
    ? $("#titulo").setAttribute("tabindex", "-1")
    : null;
  ($("#acao-principal").hidden ? $("#titulo") : $("#acao-principal")).focus();
});
window.addEventListener("hashchange", () => {
  render();
  $("#conteudo").focus();
});
window.addEventListener("beforeunload", (e) => {
  if ($("#modal").open && activeForm?.type !== "details") {
    e.preventDefault();
    e.returnValue = "";
  }
});
render();
