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

const hideLinks = matches => {
  let badLinks = false;
  const siteFooter = document.querySelectorAll("body > .footer--site a");
  const panelFooter = document.querySelectorAll(".panel .footer--site a");
  if (matches) {
    badLinks = siteFooter;
    goodLinks = panelFooter;
  } else {
    badLinks = panelFooter;
    goodLinks = siteFooter;
  }
  badLinks.forEach(link => {
    link.setAttribute("tabindex", "-1");
  });
  goodLinks.forEach(link => {
    link.removeAttribute("tabindex");
  });
};

// Hide the footer elements if necessary
const hideFooter = () => {
  const mql = window.matchMedia("(min-width: 40em)");
  hideLinks(mql.matches);
  mql.addListener(e => {
    hideLinks(e.matches);
  });
};

const contrast = getCookie("gc-contrast");

window.addEventListener("keydown", handleFirstTab);

if (contrast) {
  document.documentElement.classList.add("greyscale");
}
