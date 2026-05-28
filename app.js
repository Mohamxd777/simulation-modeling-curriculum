const data = window.COURSE_DATA;
let activeFilter = "all";
let query = "";

const moduleGrid = document.querySelector("#moduleGrid");
const sectionGrid = document.querySelector("#sectionGrid");
const practiceGrid = document.querySelector("#practiceGrid");
const fileList = document.querySelector("#fileList");
const gradingList = document.querySelector("#gradingList");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");

const practicalAnalyses = [
  {
    section: "Section 1",
    title: "Simulation Foundations",
    model: "Use simulation when direct experimentation is risky, expensive, too slow, or not possible.",
    steps: [
      "Define the real system and the boundary of the model.",
      "List state variables, inputs, outputs, assumptions, and constraints.",
      "Separate verification from validation before trusting results.",
      "Use experiments on the model to compare what-if scenarios.",
    ],
    examUse: "Good for theory questions asking why simulation is selected and how a modelling study is planned.",
    mistake: "Do not say a verified program is automatically a valid model; verification checks logic, validation checks real-system representation.",
  },
  {
    section: "Section 2",
    title: "Manual Random-Number Simulation",
    model: "Convert random numbers into system outcomes using probability intervals.",
    steps: [
      "Build a cumulative probability table.",
      "Map each probability range to random-number intervals.",
      "Read random numbers in order and translate them into outcomes.",
      "Record each trial in a table, then compute averages or totals.",
    ],
    examUse: "Use this pattern for coin, die, demand, color, and simple discrete outcome problems.",
    mistake: "The interval width must match the number system: two-digit random numbers usually mean 00 to 99.",
  },
  {
    section: "Section 3",
    title: "Newsboy Demand and Profit",
    model: "Profit depends on the day type, simulated demand, purchase quantity, unit cost, and selling price.",
    steps: [
      "Use the first random number to classify the news day as good, typical, or poor.",
      "Use the second random number inside that day's demand distribution.",
      "Cap sold units at the smaller of demand and purchased papers.",
      "Profit = sold units x selling price - purchased units x cost.",
    ],
    examUse: "This is the main template for demand simulation and profit-risk questions.",
    mistake: "When demand is higher than the purchased quantity, calculate revenue using the purchased quantity, not the demand.",
  },
  {
    section: "Section 4A",
    title: "Accident Penalty Simulation",
    model: "Daily penalty is a compound simulation: accident occurrence, number of accidents, and cost per accident.",
    steps: [
      "Decide whether accidents occur on the day using the occurrence probability.",
      "If accidents occur, map a random number to the number of accidents.",
      "For each accident, map another random number to the penalty amount.",
      "Sum the penalties per day and identify the minimum cash reserve needed.",
    ],
    examUse: "Use this for compound random processes where one random outcome controls whether more random draws are needed.",
    mistake: "Do not consume penalty random numbers on days with no accidents unless the problem explicitly says to.",
  },
  {
    section: "Section 4B",
    title: "Football Injury Stock",
    model: "Player stock changes as major injuries permanently remove players and minor injuries temporarily affect availability.",
    steps: [
      "Start each game with the current available stock.",
      "Use one random number to test for a major injury.",
      "Use another random number to generate the number of minor injuries.",
      "Update next-game availability while respecting the initial squad size.",
    ],
    examUse: "Good for state-tracking tables where each row depends on the previous row.",
    mistake: "Keep major injuries separate from minor injuries; they have different durations.",
  },
  {
    section: "Section 5",
    title: "Mean, Variance, CDF, and Random Observations",
    model: "Distribution analysis connects formulas to simulated observations.",
    steps: [
      "For discrete variables, compute E(X) from sum x p(x).",
      "Compute variance from E(X squared) - E(X) squared.",
      "For continuous variables, integrate the PDF to get the CDF.",
      "Set R = F(x), then solve for x to generate a random observation.",
    ],
    examUse: "Use this for formula derivations and inverse-transform questions.",
    mistake: "Always check the valid range of x after solving the inverse equation.",
  },
  {
    section: "Section 6",
    title: "Uniform and Exponential Random Observation",
    model: "Inverse-transform sampling turns uniform random numbers into target-distribution observations.",
    steps: [
      "Uniform U(a,b): use x = a + R(b - a).",
      "Exponential with rate mu: use x = -ln(1 - R) / mu.",
      "For mixed distributions, use one random number to choose the branch.",
      "Use the next random number to sample inside the selected branch.",
    ],
    examUse: "This is the fastest method for continuous random-observation generation.",
    mistake: "Do not reuse the same random number for branch selection and value generation unless the question instructs it.",
  },
  {
    section: "Section 7",
    title: "Discrete-Event Simulation Tables",
    model: "Event-driven simulation advances the clock to the next arrival or departure instead of scanning every time unit.",
    steps: [
      "Create columns for clock time, event type, customer count, random numbers, and next event time.",
      "Generate time until next arrival and departure using the proper distribution.",
      "Advance to the smallest scheduled event time.",
      "Update the state, schedule the next event, and record waiting/system measures.",
    ],
    examUse: "Use this for M/M/1, manufacturing, repair, and assembly-line simulation tables.",
    mistake: "In event scan, the next row time is the next event time, not the next integer time.",
  },
];

document.querySelector("#moduleCount").textContent = data.modules.length;
document.querySelector("#sectionCount").textContent = data.sections.length;
document.querySelector("#pageCount").textContent = data.course.pageCount;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text) {
  if (!query) return text;
  return text.replace(new RegExp(`(${escapeRegExp(query)})`, "gi"), "<mark>$1</mark>");
}

function compact(text, limit = 260) {
  if (!text) return "This source is included as an original file. Text extraction was not available for this scanned material.";
  const normalized = text.replace(/\s+/g, " ").trim();
  return normalized.length > limit ? `${normalized.slice(0, limit).trim()}...` : normalized;
}

function matchesText(text) {
  return !query || text.toLowerCase().includes(query.toLowerCase());
}

function moduleMatches(module) {
  const haystack = [
    module.title,
    module.summary,
    ...module.topics,
    ...module.pageRefs.map((page) => page.text),
  ].join(" ");
  return matchesText(haystack);
}

function sectionMatches(section) {
  const haystack = [
    section.title,
    section.theme,
    section.summary,
    ...section.entries.map((entry) => entry.text),
  ].join(" ");
  return matchesText(haystack);
}

function practiceMatches(item) {
  const haystack = [item.section, item.title, item.model, item.examUse, item.mistake, ...item.steps].join(" ");
  return matchesText(haystack);
}

function renderPageList(items, itemName) {
  return `
    <ul class="page-list">
      ${items
        .map((item) => {
          const number = item.page || item.slide;
          return `
            <li>
              <strong>${itemName} ${number}</strong>
              <p>${highlight(compact(item.text, 520))}</p>
            </li>
          `;
        })
        .join("")}
    </ul>
  `;
}

function renderModules() {
  const shouldShow = activeFilter === "all" || activeFilter === "lectures";
  moduleGrid.classList.toggle("hidden", !shouldShow);
  if (!shouldShow) return;

  const modules = data.modules.filter(moduleMatches);
  moduleGrid.innerHTML = modules
    .map(
      (module) => `
        <article class="module-card" data-searchable="lectures">
          <div class="card-main">
            <span class="card-kicker">Pages ${module.pages[0]}-${module.pages[1]}</span>
            <h3>${highlight(module.title)}</h3>
            <p>${highlight(compact(module.summary))}</p>
            <ul class="topic-list">
              ${module.topics.map((topic) => `<li>${highlight(topic)}</li>`).join("")}
            </ul>
          </div>
          <div class="module-actions">
            <a class="text-link" href="${data.course.lectureMaterial}" target="_blank" rel="noreferrer">Open source PDF</a>
            <button class="button secondary text-toggle" type="button">Show page notes</button>
          </div>
          ${renderPageList(module.pageRefs, "Page")}
        </article>
      `,
    )
    .join("");
}

function renderSections() {
  const shouldShow = activeFilter === "all" || activeFilter === "sections";
  sectionGrid.classList.toggle("hidden", !shouldShow);
  if (!shouldShow) return;

  const sections = data.sections.filter(sectionMatches);
  sectionGrid.innerHTML = sections
    .map(
      (section) => `
        <article class="section-card" data-searchable="sections">
          <div class="card-main">
            <span class="card-kicker">${section.kind.toUpperCase()} · ${section.itemCount} ${section.contentLabel}</span>
            <h3>${highlight(section.title)}</h3>
            <p>${highlight(compact(section.summary))}</p>
            <ul class="topic-list">
              <li>${section.searchableCount ? `${section.searchableCount} searchable ${section.contentLabel}` : "Original scanned file preserved"}</li>
              <li>${highlight(section.theme)}</li>
            </ul>
          </div>
          <div class="module-actions">
            <a class="text-link" href="${section.material}" target="_blank" rel="noreferrer">Open material</a>
            <a class="text-link" href="${section.material}" download>Download</a>
            <button class="button secondary text-toggle" type="button">Show extracted notes</button>
          </div>
          ${renderPageList(section.entries, section.kind === "pptx" ? "Slide" : "Page")}
        </article>
      `,
    )
    .join("");
}

function renderFileList() {
  const files = [
    {
      title: "Lecture: Simulation and Modeling",
      detail: `${data.course.pageCount} pages · PDF`,
      href: data.course.lectureMaterial,
    },
    ...data.sections.map((section) => ({
      title: section.title,
      detail: `${section.itemCount} ${section.contentLabel} · ${section.kind.toUpperCase()}`,
      href: section.material,
    })),
  ];

  fileList.innerHTML = files
    .map(
      (file) => `
        <div class="file-row">
          <div>
            <strong>${file.title}</strong>
            <span>${file.detail}</span>
          </div>
          <a href="${file.href}" target="_blank" rel="noreferrer">Open</a>
        </div>
      `,
    )
    .join("");
}

function renderGrading() {
  gradingList.innerHTML = data.course.grading.map((item) => `<li>${item}</li>`).join("");
}

function renderPractice() {
  const shouldShow = activeFilter === "all" || activeFilter === "practice";
  practiceGrid.classList.toggle("hidden", !shouldShow);
  if (!shouldShow) return;

  const items = practicalAnalyses.filter(practiceMatches);
  practiceGrid.innerHTML = items
    .map(
      (item) => `
        <article class="practice-card">
          <div class="practice-header">
            <span class="card-kicker">${highlight(item.section)}</span>
            <h3>${highlight(item.title)}</h3>
          </div>
          <p>${highlight(item.model)}</p>
          <ol class="step-list">
            ${item.steps.map((step) => `<li>${highlight(step)}</li>`).join("")}
          </ol>
          <div class="analysis-notes">
            <p><strong>Exam use:</strong> ${highlight(item.examUse)}</p>
            <p><strong>Watch out:</strong> ${highlight(item.mistake)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function render() {
  renderModules();
  renderSections();
  renderPractice();
}

document.body.addEventListener("click", (event) => {
  const button = event.target.closest(".text-toggle");
  if (!button) return;
  const card = button.closest("article");
  const list = card.querySelector(".page-list");
  list.classList.toggle("open");
  button.textContent = list.classList.contains("open") ? "Hide notes" : "Show extracted notes";
});

searchInput.addEventListener("input", (event) => {
  query = event.target.value.trim();
  render();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

renderFileList();
renderGrading();
render();

function updateNewsboyCalc() {
  const form = document.querySelector("#newsboyCalc");
  const values = Object.fromEntries(new FormData(form).entries());
  const quantity = Number(values.quantity);
  const demand = Number(values.demand);
  const sell = Number(values.sell);
  const cost = Number(values.cost);
  const sold = Math.min(quantity, demand);
  const profit = sold * sell - quantity * cost;
  document.querySelector("#newsboyResult").textContent = `Sold units: ${sold}. Profit: ${profit.toFixed(2)}.`;
}

function updateQueueCalc() {
  const form = document.querySelector("#queueCalc");
  const values = Object.fromEntries(new FormData(form).entries());
  const lambda = Number(values.lambda);
  const mu = Number(values.mu);
  const output = document.querySelector("#queueResult");
  if (!lambda || !mu || lambda >= mu) {
    output.textContent = "System is unstable unless lambda is smaller than mu.";
    return;
  }
  const rho = lambda / mu;
  const l = lambda / (mu - lambda);
  const lq = (lambda * lambda) / (mu * (mu - lambda));
  const w = 1 / (mu - lambda);
  const wq = lambda / (mu * (mu - lambda));
  output.textContent = `rho=${rho.toFixed(3)}, L=${l.toFixed(3)}, Lq=${lq.toFixed(3)}, W=${w.toFixed(3)}, Wq=${wq.toFixed(3)}.`;
}

document.querySelector("#newsboyCalc").addEventListener("input", updateNewsboyCalc);
document.querySelector("#queueCalc").addEventListener("input", updateQueueCalc);
updateNewsboyCalc();
updateQueueCalc();
