const data = window.COURSE_DATA;
let activeFilter = "all";
let query = "";

const moduleGrid = document.querySelector("#moduleGrid");
const sectionGrid = document.querySelector("#sectionGrid");
const fileList = document.querySelector("#fileList");
const gradingList = document.querySelector("#gradingList");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");

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

function render() {
  renderModules();
  renderSections();
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
