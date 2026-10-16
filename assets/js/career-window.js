// Sliding window over the study/work chart: hover (or tap) to move a fixed-width
// time window; bars overlapping it stay lit, the head line reads out the window.
(function () {
  var root = document.querySelector(".cw");
  if (!root) return;

  var top = parseFloat(root.dataset.top);
  var now = parseFloat(root.dataset.now);
  var win = parseFloat(root.dataset.win);
  var plot = root.querySelector(".cw-plot");
  var band = root.querySelector(".cw-window");
  var range = root.querySelector(".cw-range");
  var active = root.querySelector(".cw-active");
  var bars = Array.prototype.slice.call(root.querySelectorAll(".cw-bar"));

  var items = bars.map(function (el) {
    var label = el.querySelector(":scope > .cw-text, :scope > span");
    return {
      el: el,
      s: parseFloat(el.dataset.s),
      e: el.dataset.e === "now" ? now : parseFloat(el.dataset.e),
      name: label.querySelector("strong").textContent + " @ " +
        label.textContent.split("@")[1].trim().split(/\d|·/)[0].trim()
    };
  });

  function fmt(t) {
    var y = Math.floor(t + 1e-9);
    var m = Math.min(12, Math.floor((t - y) * 12 + 1e-9) + 1);
    return y + "-" + (m < 10 ? "0" : "") + m;
  }

  function place(hi) {
    var lo = hi - win;
    var h = plot.clientHeight;
    var ppy = h / (top - plot.dataset.bottom);
    band.style.height = win * ppy + "px";
    band.style.transform = "translateY(" + (top - hi) * ppy + "px)";
    range.textContent = fmt(lo) + " → " + (hi >= now ? "now" : fmt(hi));
    var names = [];
    items.forEach(function (it) {
      var on = it.s < hi && it.e > lo;
      it.el.classList.toggle("is-on", on);
      if (on) names.push(it.name);
    });
    active.textContent = names.join(" · ");
  }

  plot.dataset.bottom = 2020.5;

  function fromPointer(ev) {
    var r = plot.getBoundingClientRect();
    var ppy = r.height / (top - plot.dataset.bottom);
    var t = top - (ev.clientY - r.top) / ppy;
    var hi = Math.max(plot.dataset.bottom - 0 + win, Math.min(now, t + win / 2));
    place(hi);
  }

  plot.addEventListener("pointermove", fromPointer);
  plot.addEventListener("pointerdown", fromPointer);
  plot.addEventListener("pointerleave", function () { place(now); });
  window.addEventListener("resize", function () { place(now); });

  place(now);
})();
