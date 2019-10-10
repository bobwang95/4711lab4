/*addArtist(
  "Ken Smith",
  "BCIT Student",
  "https://randomuser.me/api/portraits/med/men/1.jpg"
);
addArtist(
  "Jenny",
  "Amazon SDE",
  "https://randomuser.me/api/portraits/med/women/1.jpg"
);*/

let len = localStorage.length;
if (len > 0) {
  let pairs = Object.entries(localStorage);
  for (let i = 0; i < len; i++) {
    let person = JSON.parse(pairs[i][1]);
    addArtist(person["name"], person["description"], person["picture"]);
  }
}

function myFunction() {
  var x = document.getElementById("newform");
  if (x.style.display !== "block") {
    x.style.display = "block";
  } else {
    let name = document.getElementById("name");
    let description = document.getElementById("description");
    let picture = document.getElementById("picture");

    name.value = "";
    description.value = "";
    picture.value = "";

    x.style.display = "none";
  }
}
function add() {
  let name = document.getElementById("name");
  let description = document.getElementById("description");
  let picture = document.getElementById("picture");
  if (name.value != "" && description.value != "" && picture.value != "") {
    addArtist(name.value, description.value, picture.value);
    name.value = "";
    description.value = "";
    picture.value = "";

    let hideform = document.getElementById("newform");

    if (hideform.style.display == "none") {
      hideform.style.display = "block";
    } else {
      hideform.style.display = "none";
    }
  }
}

function addArtist(name, description, picture) {
  let form = document.getElementById("list");

  let mydiv = document.createElement("div");
  mydiv.className = "people";

  let myimg = document.createElement("img");
  myimg.className = "pic1";
  myimg.src = picture;

  let myname = document.createElement("p");
  myname.className = "name";
  let namenode = document.createTextNode(name);
  myname.appendChild(namenode);

  let mydetail = document.createElement("p");
  mydetail.className = "detial";
  let detailnode = document.createTextNode(description);
  mydetail.appendChild(detailnode);
  let myTextdiv = document.createElement("div");
  myTextdiv.className = "info";
  myTextdiv.appendChild(myname);
  myTextdiv.appendChild(mydetail);
  let delBtn = document.createElement("Button");
  delBtn.textContent = "Delete";
  delBtn.className = "delButton";
  delBtn.addEventListener("click", function() {
    this.parentNode.remove();
    localStorage.removeItem(name);
  });
  mydiv.appendChild(myimg);
  mydiv.appendChild(myTextdiv);
  mydiv.appendChild(delBtn);
  form.appendChild(mydiv);

  myArtiList = window.localStorage;
  const people = {
    name: name,
    description: description,
    picture: picture
  };
  //let nameList = myArtiList.getItem(0)
  myArtiList.setItem(name, JSON.stringify(people));
}

function mySearchFunction() {
  let searchname = document.getElementById("searchletter").value;
  console.log(searchname);
  // removing children of list
  let e = document.getElementById("list");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  // Adding search result to the list
  let len = localStorage.length;
  if (len > 0) {
    let keys = Object.entries(localStorage);
    for (let i = 0; i < len; i++) {
      let person = JSON.parse(keys[i][1]);
      if (
        person["name"].toLowerCase().indexOf(searchname.toLowerCase()) != -1
      ) {
        addArtist(person["name"], person["description"], person["picture"]);
      }
    }
  }
  document.getElementById("searchletter").value = "";
}
