const all = Array.from($$(".bg-white")).filter((b) => b.classList.length == 1);

let divToChange = all[1]; // Update this
let listItems = Array.from(divToChange.querySelectorAll("[role=listitem]"));

listItems.forEach(
  (e) => (e.children[0].innerText = parseInt(e.children[0].innerText) + 58)
);
