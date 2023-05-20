let searchLeft = document.getElementById("search__input");
let searchRight = document.getElementById("search__input2");
let repores1;
let repores2;
let button = document.getElementById("button")



searchLeft.addEventListener("input", () => {
  var username = document.querySelector("#search__input").value;
  console.log(username);
  const URL = `https://api.github.com/users/${username}`;
  console.log(URL);
  fetch(URL, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let leftSide = document.getElementById("inner1");
      leftSide.innerHTML = `
      <h2 style="color: white;" id="result1"></h2>
      <h3 style="color: white;">Name: "${data.login}"</h3>
      <h3 style="color: white;">Repos: "${data.public_repos}"</h3>
      <img src="${data.avatar_url}" width="100%" alt="">
                      `;
      repores1 = data.public_repos;
    });
});




searchRight.addEventListener("input", () => {
  let username2 = document.querySelector("#search__input2").value;
  console.log(username2);
  const URL2 = `https://api.github.com/users/${username2}`;
  console.log(URL2);
  fetch(URL2, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let leftSide2 = document.getElementById("inner2");
      leftSide2.innerHTML = `
      <h2 style="color: white;" id="result2"></h2>
      <h3 style="color: white;">Name: "${data.login}"</h3>
      <h3 style="color: white;">Repos: "${data.public_repos}"</h3>
      <img src="${data.avatar_url}" width="100%" alt="">
      `;
      repores2 = data.public_repos;
    });
});




button.addEventListener(
  "click" ,()=>{
    let result1 = document.getElementById("result1")
    let result2 = document.getElementById("result2")
    if (repores1 > repores2) {
      result1.textContent = "Khawa"
      result2.textContent = "Mesh Khawa"
    }
    else if (repores2 > repores1) {
      result2.textContent = "Khawa"
      result1.textContent = "Mesh Khawa"
    }
    else if(repores1 = repores2){
      repores1.textContent = "Still brothers"
      repores2.textContent = "Still brothers"
    }
  }
)