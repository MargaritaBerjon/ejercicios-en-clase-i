"use strict";

const options = [
  {
    name: "Julia",
    surname: "Martín",
    phone: 676360056
  },
  {
    name: "Lucía",
    surname: "Ruiz",
    phone: 654890684
  },
  {
    name: "Sofía",
    surname: "Lopez",
    phone: 666666666
  }
];

const select = document.querySelector(".js-select");
const name = document.querySelector(".js-name");
const surname = document.querySelector(".js-surname");
const telephone = document.querySelector(".js-telephone");

function fillForm(event) {
  const nameSelected = event.target;
  for (let i = 0; i < options.length; i++) {
    if (nameSelected.value === options[i].name) {
      name.value = options[i].name;
      surname.value = options[i].surname;
      telephone.value = options[i].phone;
    }
  }
}

select.addEventListener("change", fillForm);
