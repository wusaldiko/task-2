async function getUsers() {
  let spinner = document.querySelector(".spinner");
  spinner.classList.add("show");
  let result = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
  spinner.classList.remove("show");
  return result;
}

async function renderUsers() {
  let users = await getUsers()
  
  users.forEach(user => {
    let el = document.createElement("user-card")
    el.setAttribute("user-data", JSON.stringify(user))
    document.body.firstElementChild.firstElementChild.append(el)
  });
}
