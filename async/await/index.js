let fetchApi = document.getElementById("fetchApi");
let search = document.getElementById("search");
let sort = document.getElementById("sort");
fetchApi.addEventListener("click", datafetch);

let searchValue = search.value;

function datafetch() {
  async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    return users;
  }

  fetchData().then((value) => {
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

  fetchData().catch((error) => {
    let para = document.createElement("h3");
    let node = document.createTextNode(error);
    para.appendChild(node);
    info.insertBefore(para, search);
  });
}

function dataSearch() {
  async function searchData() {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${searchValue}`
    );
    let users = await response.json();
    return users;
  }
  searchData().then((value) => {
    let tab = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Website<th>
   </tr>`;

    tab += `<tr> 
    <td>${value.name}</td>
    <td>${value.email}</td> 
    <td>${value.phone}</td> 
    <td>${value.website}</td>
    </tr>`;

    document.getElementById("table").innerHTML = tab;
  });

  searchData().catch((error) => {
    let para = document.createElement("h3");
    let node = document.createTextNode(error);
    para.appendChild(node);
    info.insertBefore(para, search);
  });
}

function dataSort() {
  async function sortData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    return users;
  }
  sortData().then((value) => {
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

  sortData().catch((error) => {
    let para = document.createElement("h3");
    let node = document.createTextNode(error);
    para.appendChild(node);
    info.insertBefore(para, search);
  });
}
