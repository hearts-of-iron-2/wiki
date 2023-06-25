(function () {
  function isInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  if (isInIframe()) {
    document.documentElement.style.color = "azure";
  }
})();
