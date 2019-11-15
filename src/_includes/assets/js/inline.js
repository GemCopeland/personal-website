// Add class so that we can style skip links
const handleFirstTab = e => {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
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
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
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
  let badLinks = matches ? mainElems : panelElems;
  let goodLinks = matches ? panelElems : mainElems;
  badLinks.forEach(link => {
    link.setAttribute("tabindex", "-1");
  });
  goodLinks.forEach(link => {
    link.removeAttribute("tabindex");
  });
};

// Switch the contrast ID for the skip link
const idContrast = (matches, mainContrast, panelContrast) => {
  let badButton = matches ? mainContrast : panelContrast;
  let goodButton = matches ? panelContrast : mainContrast;
  badButton.removeAttribute("id");
  goodButton.setAttribute("id", "contrast");
};

// Hide the footer elements if necessary
const hideFooter = () => {
  const mql = window.matchMedia("(min-width: 40em)");
  const mainFooter = document.querySelector("body > .footer--site");
  const mainElems = mainFooter.querySelectorAll("a, button");
  const mainContrast = mainFooter.querySelector(".js-contrast");
  const panelFooter = document.querySelector(".panel .footer--site");
  const panelElems = panelFooter.querySelectorAll("a, button");
  const panelContrast = panelFooter.querySelector(".js-contrast");
  setTabbing(mql.matches, mainElems, panelElems);
  idContrast(mql.matches, mainContrast, panelContrast);
  mql.addListener(e => {
    setTabbing(e.matches, mainElems, panelElems);
    idContrast(e.matches, mainContrast, panelContrast);
  });
};

const contrast = getCookie("gc-contrast");

window.addEventListener("keydown", handleFirstTab);

if (contrast) {
  document.documentElement.classList.add("greyscale");
}
