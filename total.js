var selectedRow = null;

 

function onFormSubmit(){

  var formData = readFormData();

  if(selectedRow == null)

    insertNewRecord(formData);

  else

    updateRecord(formData);

 

    resetForm();  

}

 

function readFormData() {

  var formData = {};

  formData["date"] = document.getElementById("date").value;

  formData["time"] = document.getElementById("time").value;

  formData["agree"] = document.getElementById("agree").value;

  formData["place"] = document.getElementById("place").value;

  formData["number"] = document.getElementById("number").value;

    

  return formData;

}

 

function insertNewRecord(data) {

  var table = document.getElementById("listAll").getElementsByTagName('tbody')[0];

  var newRow = table.insertRow(table.length);

  cell1 = newRow.insertCell(0);

  cell1.innerHTML = data.date;

  cell2 = newRow.insertCell(1);

  cell2.innerHTML = data.time;

  cell3 = newRow.insertCell(2);

  cell3.innerHTML = data.agree;

  cell4 = newRow.insertCell(3);

  cell4.innerHTML = data.place;

  cell5 = newRow.insertCell(4);

  cell5.innerHTML = data.number;

  cell5 = newRow.insertCell(5);

  cell5.innerHTML = `<a onClick="onEdit(this)">수정</a>
                       <a onClick="onDelete(this)">삭제</a>`;

    

}

 

function resetForm() {

  document.getElementById("date").value = "";

  document.getElementById("time").value = "";

  document.getElementById("agree").value = "";

  document.getElementById("place").value = "";

  document.getElementById("number").value = "";

  selectedRow = null;

}

 

function onEdit(td) {

  selectedRow = td.parentElement.parentElement;

  document.getElementById("date").value = selectedRow.cells[0].innerHTML;

  document.getElementById("time").value = selectedRow.cells[1].innerHTML;

  document.getElementById("agree").value = selectedRow.cells[2].innerHTML;

  document.getElementById("place").value = selectedRow.cells[3].innerHTML;

  document.getElementById("number").value = selectedRow.cells[4].innerHTML;

}

 

function updateRecord(formData){

    selectedRow.cells[0].innerHTML = formData.date;

    selectedRow.cells[1].innerHTML = formData.time;

    selectedRow.cells[2].innerHTML = formData.agree;

    selectedRow.cells[3].innerHTML = formData.place;

    selectedRow.cells[4].innerHTML = formData.number;

}

 

function onDelete(td){

  if(confirm('정말 삭제하시겠습니까?')){

    row = td.parentElement.parentElement;

    document.getElementById("listAll").deleteRow(row.rowIndex);

    resetForm();

  }

}