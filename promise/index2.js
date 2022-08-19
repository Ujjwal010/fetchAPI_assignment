let fetchApi = document.getElementById("fetchApi");
let search = document.getElementById("search");
let sort = document.getElementById("sort");
fetchApi.addEventListener("click", datafetch);

let searchValue = search.value;

function datafetch() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      let tab = `<tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website<th>
       </tr>`;

      for (let i of json) {
        tab += `<tr> 
        <td>${i.name}</td>
        <td>${i.email}</td> 
        <td>${i.phone}</td> 
        <td>${i.website}</td>
        </tr>`;
      }
      document.getElementById("table").innerHTML = tab;
    })
    .catch((error) => {
      let para = document.createElement("h3");
      let node = document.createTextNode(error);
      para.appendChild(node);
      info.insertBefore(para, search);
    });
}

function dataSearch() {
  fetch(`https://jsonplaceholder.typicode.com/users/${searchValue}`)
    .then((response) => response.json())
    .then((json) => {
      let tab = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Website<th>
   </tr>`;

      tab += `<tr> 
    <td>${json.name}</td>
    <td>${json.email}</td> 
    <td>${json.phone}</td> 
    <td>${json.website}</td>
    </tr>`;

      document.getElementById("table").innerHTML = tab;
    })
    .catch((error) => {
      let para = document.createElement("h3");
      let node = document.createTextNode(error);
      para.appendChild(node);
      info.insertBefore(para, search);
    });
}

function dataSort() {
  let promises = new Promise((resolve, reject) => {
    let a = fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });

    if (a != "undefined") {
      resolve(a);
    } else {
      reject("sorry unable to proceed further");
    }
  });

  promises.then((value) => {
    function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }

    value.sort(compare);
    let tab = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Website<th>
   </tr>`;

    for (let i of value) {
      tab += `<tr> 
    <td>${i.name}</td>
    <td>${i.email}</td> 
    <td>${i.phone}</td> 
    <td>${i.website}</td>
    </tr>`;
    }
    document.getElementById("table").innerHTML = tab;
  });
  promises.catch((error) => {
    let para = document.createElement("h3");
    let node = document.createTextNode(error);
    para.appendChild(node);
    info.insertBefore(para, search);
  });
}
