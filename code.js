$(document).ready(function () {
  // Drag with title

  new jBox("Modal", {
    attach: "#modal-drag-on-title",
    width: 220,
    title: "SuperStudying Version:",
    overlay: false,
    content: "<h1>3.24</h1><p>Support Code: 993284204</p>",
    draggable: "title",
    repositionOnOpen: false,
    repositionOnContent: false
  });
  new jBox("Modal", {
    attach: "#modal-drag-on-title2",
    width: 220,
    title: "Error Info:",
    overlay: false,
    content: "<p>An Error Has Occured!</p><p>Error Type: 404</p>",
    draggable: "title",
    repositionOnOpen: false,
    repositionOnContent: false
  });
});
