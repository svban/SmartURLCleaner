// ==UserScript==
// @name         Smart URL Cleaner
// @namespace    https://github.com/svban/SmartURLCleaner
// @version      1.0
// @description  Remove only useless query parameters from URLs (like utm_source, fbclid, variant, etc.)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  const USELESS_PARAMS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "fbclid",
    "gclid",
    "mc_cid",
    "mc_eid",
    "variant",
    "ref",
    "yclid",
    "igshid",
    "sr_share",
    "feature",
    "app",
    "mibextid",
  ];

  const url = new URL(location.href);
  let changed = false;

  for (const param of USELESS_PARAMS) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      changed = true;
    }
  }

  if (changed) {
    history.replaceState(null, "", url.toString());
  }
})();
