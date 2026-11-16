// Live station clock (Central European Time). The page works without it.
(function () {
  var clock = document.querySelector("[data-clock]");
  if (!clock) return;

  var format = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  function tick() {
    var parts = format.formatToParts(new Date());
    var h = parts.find(function (p) { return p.type === "hour"; }).value;
    var m = parts.find(function (p) { return p.type === "minute"; }).value;
    clock.innerHTML = h + '<span class="colon">:</span>' + m;
    clock.setAttribute("datetime", h + ":" + m);
  }

  tick();
  clock.hidden = false;
  setInterval(tick, 10000);
})();
