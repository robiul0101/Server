var searchVal= document.querySelector(".searchVal");
var showResult = document.querySelector(".showResult");
var division = document.querySelector(".division");
var table=document.getElementById("table");
var brash=document.getElementById("brash");
var podobi=document.getElementById("podobi");
var name=document.getElementById("name");
var mobile=document.getElementById("mobile");
var mobile=document.getElementById("mobile");
var tR=document.getElementById("tR");
var footer=document.querySelector(".footer");
//.....variable call end from page.....
//......search button start..........
  var hideShow=0;
function findBrash(){
  if(hideShow==1){
  footer.style.display="block";
  searchVal.style.display="none";
  showResult.style.display="none"
  division.style.display="block"
    hideShow=0;
  }else{
  searchVal.style.display="block";
  showResult.style.display="block";
  footer.style.display="none";
  division.style.display="none";
  hideShow=1;
  
  }
}
//.......search button end........
//.........search feild start.........
function searchRslt() {
  
 var filter = searchVal.value;
var ntR = document.getElementsByTagName("tr");
  for (var i = 0; i < ntR.length; i++) {
   var td = ntR[i].getElementsByTagName("td")[0];
    if (td) {
    var txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
    ntR[i].style.display = "";
      } else {
       ntR[i].style.display = "none";
      }
    }       
  }
}
//.......search feild end............



let SHEET_ID = '1pp6Hwtkx88WyxGo7_KZ3nGnRy4_ZgFmfIosM0muKLmU'
let SHEET_TITLE = 'pom';
let SHEET_RANGE = 'Q1:Z1000'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
  
  
    let length = data.table.rows.length;
    
    for(let i = 0;i<length;i++){
      var newTr= document.createElement("tr");
 //.....................................
 var newPodobi = document.createElement("td");
  newTr.appendChild(newPodobi)
  newPodobi.innerHTML = data.table.rows[i].c[0].v;
         table.appendChild(newTr);
//.........................................
var newBrash = document.createElement("td");
  newTr.appendChild(newBrash)
  newBrash.innerHTML = data.table.rows[i].c[1].v;
         table.appendChild(newTr);
//...................................
//.........................................
var newName = document.createElement("td");
  newTr.appendChild(newName)
  newName.innerHTML = data.table.rows[i].c[2].v;
         table.appendChild(newTr);
//...................................
//.........................................
//data.table.rows[i].c[3].v;
var newMobile =document.createElement("td");
newTr.appendChild(newMobile);
newMobile.innerHTML="<a  class='nmbr' href='tel:>"+data.table.rows[i].c[3].v+"'/a>"+'<i class="fa-solid fa-phone-flip"></i>';
table.appendChild(newTr);
//...................................

    }
 
})


