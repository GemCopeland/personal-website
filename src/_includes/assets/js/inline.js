// Add class so that we can style skip links
const handleFirstTab = e => {
  if (e.key === 'Tab') {
    document.documentElement.classList.add("is-tabbing");
    document.documentElement.classList.remove("is-not-tabbing");
    window.removeEventListener("keydown", handleFirstTab);
  }
};

// Get cookies
const getCookie = name => {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
};

// Set cookies
const setCookie = (name, value, days) => {
  var d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toUTCString();
};

// Delete cookies
const deleteCookie = name => {
  setCookie(name, "", -1);
};

// Toggle the contrast; see button onclick
const toggleContrast = () => {
  if (document.documentElement.classList.contains("greyscale")) {
    document.documentElement.classList.remove("greyscale");
    deleteCookie("gc-contrast");
  } else {
    document.documentElement.classList.add("greyscale");
    setCookie("gc-contrast", 1, 365);
  }
};

// Set the tab index
const setTabbing = (matches, mainElems, panelElems) => {
  const badLinks = matches ? mainElems : panelElems;
  const goodLinks = matches ? panelElems : mainElems;
  badLinks.forEach(link => {
    link.setAttribute("tabindex", "-1");
  });
  goodLinks.forEach(link => {
    link.removeAttribute("tabindex");
  });
};

// Switch the contrast ID for the skip link
const idContrast = (matches, mainContrast, panelContrast) => {
  const badButton = matches ? mainContrast : panelContrast;
  const goodButton = matches ? panelContrast : mainContrast;
  if (badButton) badButton.removeAttribute("id");
  if (goodButton) goodButton.setAttribute("id", "contrast");
};

// Manage dual-footer pages (thinking layout): hide the body footer from AT on
// desktop (where the panel footer is visible) and swap it back on mobile.
const hideFooter = () => {
  const mainFooter = document.querySelector("body > .footer--site");
  const panelFooter = document.querySelector(".panel .footer--site");
  if (!mainFooter || !panelFooter) return;

  const mainElems = mainFooter.querySelectorAll("a, button");
  const mainContrast = mainFooter.querySelector(".js-contrast");
  const panelElems = panelFooter.querySelectorAll("a, button");
  const panelContrast = panelFooter.querySelector(".js-contrast");

  const update = isDesktop => {
    setTabbing(isDesktop, mainElems, panelElems);
    idContrast(isDesktop, mainContrast, panelContrast);
    mainFooter.setAttribute("aria-hidden", isDesktop ? "true" : "false");
  };

  const mql = window.matchMedia("(min-width: 40em)");
  update(mql.matches);
  mql.addEventListener("change", e => update(e.matches));
};

const contrast = getCookie("gc-contrast");

window.addEventListener("keydown", handleFirstTab);

if (contrast) {
  document.documentElement.classList.add("greyscale");
}

document.addEventListener("DOMContentLoaded", hideFooter);
