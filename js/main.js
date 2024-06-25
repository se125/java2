var sitenameinput = document.getElementById("site Name")
var siteurlinput = document.getElementById("site URL")
var siteBtns;
var site = []
if (localStorage.getItem("sites")) {
  site = JSON.parse(localStorage.getItem("sites"))
  diplay()
}

function add() {

  if (siteurlinput.value.startsWith("https://")) {
    window.alert("not valid")
  } else {
    var info = {
      name: sitenameinput.value,
      url: siteurlinput.value,
    }

    site.push(info)

    localStorage.setItem("sites", JSON.stringify(site))
    clearinput()
    diplay()
  }

}
function diplay() {
  var sitess = ""
  for (var i = 0; i < site.length; i++) {
    sitess += `
  <tr>
  <th >`+ [i] + `</th>
  <td>`+ site[i].name + `</td>
 <td > <a href="https://`+ site[i].url + `" target="_blank" data-link='${site[i].url}'>
 <button class=" btn-visit">
 visit
 </button>
 
</a>
 </td>
    <td><button onclick="removename(`+ i + `) "  class=" btn-delete " >
      <i class="fa-solid fa-trash-can  pe-1"></i>
      Delete
    </button>
  </td>
</tr>`
  }
  document.getElementById("myData").innerHTML = sitess
}



function removename(index) {
  site.splice(index, 1)
  localStorage.setItem("sites", JSON.stringify(site))
  diplay()
}
function visit(index) {


}
function clearinput() {
  sitenameinput.value = ""
  siteurlinput.value = ""
}