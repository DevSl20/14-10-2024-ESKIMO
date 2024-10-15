import Option from "./components/Option";
// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL = `https://dog.ceo/api/`;

const imageEl = document.querySelector("img");
const breedListEl = document.querySelector("#data-breed-list");

// MARK: Fetch Functions

function getDogsList() {
  return fetch(`${BASE_URL}breeds/list/all`)
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((err) => console.error("error aali", err));
}

getDogsList();

// TODO Implement this
function getDogImage("Husky") {}

// MARK: Render
function renderSelect() {
  getDogsList().then((breedList) => {
    for (let breed in breedList) {
      const option = document.createElement("option");
      option.textContent = breed;
      breedListEl.appendChild(option);
    }
  });
}

renderSelect();
//get the dogs list
// create multiple options tags on this list
// const option = document.createElement("option");
// option.textcontent = "some data";
// option.value = "some value";
//     // then append this option list to the select
// breedList.appendChild(option);
//  }

function renderImage() {}

// async function getImage() {
//   const res = await fetch(
//     `https://dog.ceo/api/breed/affenpinscher/images/random`
//   );
//   const data = await res.json();
//   console.log(data.message);

//   imageEl.src = data.message;
// }

// getImage();
