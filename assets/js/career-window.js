// Sliding window over the study/work timeline: hover (or tap) to move a
// half-year window; activities overlapping it stay lit, the head shows the month.
(function () {
  var root = document.querySelector(".cw");
  if (!root) return;

  var top = parseFloat(root.dataset.top);
  var bottom = parseFloat(root.dataset.bottom);
  var now = parseFloat(root.dataset.now);
  var win = parseFloat(root.dataset.win);
  var plot = root.querySelector(".cw-plot");
  var band = root.querySelector(".cw-window");
  var readout = root.querySelector(".cw-when");
  var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

  var items = Array.prototype.map.call(root.querySelectorAll(".cw-item"), function (el) {
    return {
      el: el,
      s: parseFloat(el.dataset.s),
      e: el.dataset.e === "now" ? now : parseFloat(el.dataset.e)
    };
  });

  function place(hi) {
    var lo = hi - win;
    var ppy = plot.clientHeight / (top - bottom);
    band.style.height = win * ppy + "px";
    band.style.transform = "translateY(" + (top - hi) * ppy + "px)";
    var mid = hi - win / 2;
    var y = Math.floor(mid);
    readout.textContent = hi >= now ? "now" : months[Math.min(11, Math.floor((mid - y) * 12))] + " " + y;
    root.classList.toggle("is-scrubbing", hi < now);
    items.forEach(function (it) {
      it.el.classList.toggle("is-on", it.s < hi && it.e > lo);
    });
  }

  function fromPointer(ev) {
    var r = plot.getBoundingClientRect();
    var t = top - (ev.clientY - r.top) / (r.height / (top - bottom));
    place(Math.max(bottom + win, Math.min(now, t + win / 2)));
  }

  plot.addEventListener("pointermove", fromPointer);
  plot.addEventListener("pointerdown", fromPointer);
  plot.addEventListener("pointerleave", function () { place(now); });
  window.addEventListener("resize", function () { place(now); });

  place(now);
})();
