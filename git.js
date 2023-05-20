var input = document.getElementById("search__input");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    var username = document.querySelector("#search__input").value;
    console.log(username)
    const URL = `https://api.github.com/users/${username}`;
 console.log(URL);
fetch(URL, {
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    var img_ctn = document.getElementById("img-ctn");
    img_ctn.innerHTML = `
                    <img src="${data.avatar_url}" alt="" id="imag">
                    <h2 style="color: #fff;">${data.login}</h2>
                    <button>Edit profile</button>
                    `;
    const URL2 = `https://api.github.com/users/${data.login}/repos`;
    fetch(URL2, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((response) => response.json()) //Converting the response to a JSON object
      .then((repositories) => {
        var repos = []
        for (i= 0;i<6;i++){
            repos[i]=repositories[i]
        }
        let cards_ctn = document.getElementById("cards_ctn")
        cards_ctn.innerHTML =""
        repos.forEach((repo)=>{
            let language = ""
            let color = ""
            if(repo.language == null ){
                language=""
                color= "display : none;"
            }
            else if(repo.language == "HTML" ){
                language="HTML"
                color= "background-color: #e34c26;"
            }
            else if(repo.language == "CSS" ){
                language="CSS"
                color= "background-color: #563d7c;"
            }
            else if(repo.language == "JavaScript" ){
                language="JavaScript"
                color= "background-color: #f1e05a;"
            }
            cards_ctn.innerHTML +=`
            <div class="repo">
            <div class="repo-info">
                <a class="repo-info-name" href="">${repo.name}</a>
                <span class="repo-info-fork">
                  forked from AyhamZaid/HTML-Tasks
                </span>
                <span></span>
                <div class="repo-info-language">
                  <div class="repo-info-language-color" style = "${color}"></div>
                  <span class="repo-info-language-name">${language}</span>
                  </div>
                </div>
              <div class="repo-status">public</div>
            </div>
            `
        })
      })
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));
  }
});

