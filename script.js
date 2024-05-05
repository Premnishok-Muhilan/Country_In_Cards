var data = fetch("https://restcountries.com/v3.1/all");

data.then((res) => res.json()).then((res1) => foo(res1));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(res1) {
  //console.log(res1.length);
  for (var i = 0; i < res1.length; i++) {
    var col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header text-center">${res1[i].name.common}</div>
        <div class="card-body">
            <img src="${res1[i].flags.png}" height=100px width=200px  class="mx-auto d-block"  alt="Responsive image"/>
          
            <h5 class="card-title" style="margin-top:10px">Capital : ${res1[i].capital[0]}</h5>
            <p class="card-text">Capital Info : <br/>lat ${res1[i].capitalInfo.latlng[0]} long lat ${res1[i].capitalInfo.latlng[1]}
            <br/> Region: ${res1[i].region}
            <br/> Area: ${res1[i].area}</p>
        </div>
      </div>
      `;
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}
