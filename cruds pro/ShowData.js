//read
function ShowData() {
  let table = "";
  for (let i = 0; i < datapro.length; i++) {
    table += `
<tr>
<td>${i}</td>
<td>${datapro[i].title}</td>
<td>${datapro[i].price}</td>
<td>${datapro[i].taxes}</td>
<td>${datapro[i].ads}</td>
<td>${datapro[i].ads}</td>
<td>${datapro[i].total}</td>
<td>${datapro[i].category}</td>
<td>${datapro[i].category}</td>
<td><button  onclick="updateData(${i})"id="update">update</button>
</td>
<td><button onclick="deleteData(${i})"id="delete">delete</button></td>





</tr>






`;
  }
  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (datapro.length > 0) {
    btnDelete.innerHTML = `
   
   <button onclick="deleteAll()">delete_ ALL</button>
   
   `;
  } else {
    btnDelete.innerHTML = "";
  }
}
