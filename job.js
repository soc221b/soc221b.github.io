// ==UserScript==
// @name         104
// @license      MIT
// @namespace    104
// @version      0.1.0
// @description  hide specific jobs
// @author       Ernest
// @match        https://*.104.com.tw/*
// @grant        GM_addElement
// ==/UserScript==
console.log('qweqwe')
const cookieName = "data-104";
const anchorSelector = [
  "a.info-job__text",
  "a.info-company__text",
  'a[data-gtm-head="公司名稱"]',
].join(",");
const anyAttributeName = "data-104";
const hideAttributeName = "data-104-hide";
const showText = "＋";
const hideText = "－";
let pathnames;
main();

async function main() {
  attachStylesheet();
  syncPathnamesFromStorage();
  updateAll();
}

function attachStylesheet() {
  const style = document.createElement("style");
  style.textContent = `
    .header__nav__container.rounded-bottom:has([${anyAttributeName}][${hideAttributeName}]),
    .job-header__area:has([${anyAttributeName}][${hideAttributeName}]),
    .save-list__item:has([${anyAttributeName}][${hideAttributeName}]),
    .job-list-container:has([${anyAttributeName}][${hideAttributeName}]),
    .job-summery-desktop:has([${anyAttributeName}][${hideAttributeName}]) {
      opacity: 0.2;
      overflow: hidden;
    }
    *:has(> [${anyAttributeName}]) {
      display: flex !important;
      align-items: center;
    }
    [${anyAttributeName}] {
      cursor: pointer;
      width: 24px;
    }
    [${anyAttributeName}][${hideAttributeName}]::after {
      content: '${showText}';
    }
    [${anyAttributeName}]:not([${hideAttributeName}])::after {
      content: '${hideText}';
    }
  `;
  document.body.appendChild(style);
}

async function syncPathnamesFromStorage() {
  pathnames = await getPathnamesFromStorage();
  updateToggleElements();
  cookieStore.addEventListener("change", async ({ changed }) => {
    for (const { name } of changed) {
      if (name === cookieName) {
        pathnames = await getPathnamesFromStorage();
        updateToggleElements();
      }
    }
  });
}

async function getPathnamesFromStorage() {
  return JSON.parse(
    (
      await cookieStore.get({
        name: cookieName,
      })
    )?.value ?? "[]"
  );
}

function updateAll() {
  const callback = () => {
    insertAnchorElement();
    insertToggleElements();
    updateToggleElements();
  };
  const throttled = throttle(callback, 1000);
  window.addEventListener("click", callback);
  window.addEventListener("mouseover", throttled);
  window.addEventListener("scroll", throttled);
}

function throttle(callback, ms, options) {
  let id;
  return () => {
    if (id) {
      return;
    }

    callback();

    id = setTimeout(() => {
      id = null;
    }, ms);
  };
}

function insertToggleElements() {
  [...document.querySelectorAll(anchorSelector)]
    .filter(
      (el) => el.parentElement.querySelector(`[${anyAttributeName}]`) === null
    )
    .forEach(insertToggleElement());
}

function insertToggleElement() {
  return (anchorElement) => {
    const pathname = new URL(anchorElement.href).pathname;
    const toggleButton = document.createElement("div");
    toggleButton.toggleAttribute(anyAttributeName, true);
    toggleButton.addEventListener("click", () => {
      updatePathnames(
        isHide(pathname)
          ? pathnames.filter((v) => v !== pathname)
          : pathnames.concat(pathname)
      );
    });
    anchorElement.parentElement.prepend(toggleButton);
  };
}

async function updatePathnames(value) {
  pathnames = value;
  await cookieStore.set({
    name: cookieName,
    value: JSON.stringify(value),
    domain: "104.com.tw",
  });
}

function updateToggleElements() {
  console.log("execute");
  [...document.querySelectorAll(`[${anyAttributeName}]`)]
    .map((el) => el.parentElement)
    .forEach((el) => {
      const pathname = new URL(el.querySelector("a").href).pathname;
      const toggleButton = el.querySelector(`[${anyAttributeName}]`);
      toggleButton.toggleAttribute(hideAttributeName, isHide(pathname));
    });
}

function insertAnchorElement() {
  const h1 = document.querySelector("h1");
  if (h1 === null) return;
  if (h1.querySelector("a")) return;
  const a = document.createElement("a");
  a.textContent = h1.textContent;
  a.href = location.href;
  a.classList = `info-${location.href.split("/")[3]}__text`;
  h1.textContent = "";
  h1.appendChild(a);
}

function isHide(pathname) {
  return pathnames.includes(pathname);
}
