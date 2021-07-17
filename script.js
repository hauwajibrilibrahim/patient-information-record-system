var selectedRow = null;

// Form Submit Function
function onFormSubmit() {
  // check validity
  if (validate()) {
    // store user data
    var formData = readFormData();
    // check empty row
    if (selectedRow == null) {
      // Insert New User Record
      insertNewRecord(formData);
    } else {
      // Update New User Record
      updateRecord(formData);
    }
    // Reset Input Values
    resetForm();
  }
}
// Get Values From Form
function readFormData() {
  var formData = {};
  // Get Values From  Input
  formData["userName"] = document.getElementById("userName").value;
  formData["idNo"] = document.getElementById("idNo").value;
  formData["age"] = document.getElementById("age").value;
  formData["bloodGroup"] = document.getElementById("bloodGroup").value;
  formData["medRecord"] = document.getElementById("medRecord").value;
  formData["contactInfo"] = document.getElementById("contactInfo").value;
  // return Form Data
  return formData;
}
// Insert New User Record
function insertNewRecord(data) {
  var table = document
    .getElementById("patientlist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.userName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.age;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.idNo;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.bloodGroup;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.medRecord;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.contactInfo;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
  document.getElementById("userName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("idNo").value = "";
  document.getElementById("bloodGroup").value = "";
  document.getElementById("medRecord").value = "";
  document.getElementById("contactInfo").value = "";
  selectedRow = null;
}
// Edit Function
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("age").value = selectedRow.cells[1].innerHTML;
  document.getElementById("idNo").value = selectedRow.cells[2].innerHTML;
  document.getElementById("bloodGroup").value = selectedRow.cells[3].innerHTML;
  document.getElementById("medRecord").value = selectedRow.cells[4].innerHTML;
  document.getElementById("contactInfo").value = selectedRow.cells[5].innerHTML;
}
// Update Record
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.userName;
  selectedRow.cells[1].innerHTML = formData.age;
  selectedRow.cells[2].innerHTML = formData.idNo;
  selectedRow.cells[3].innerHTML = formData.bloodGroup;
  selectedRow.cells[4].innerHTML = formData.medRecord;
  selectedRow.cells[5].innerHTML = formData.contactInfo;
}
// Delete Function
function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("patientlist").deleteRow(row.rowIndex);
    resetForm();
  }
}
// Check User validation
function validate() {
  isValid = true;
  // userName validation
  if (document.getElementById("userName").value == "") {
    isValid = false;
    document.getElementById("userNamevalidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("userNamevalidationError")
        .classList.contains("hide")
    ) {
      document.getElementById("userNamevalidationError").classList.add("hide");
    }
  }
  // Age validation
  if (document.getElementById("age").value == "") {
    isValid = false;
    document.getElementById("agevalidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document.getElementById("agevalidationError").classList.contains("hide")
    ) {
      document.getElementById("agevalidationError").classList.add("hide");
    }
  }
  // ID No validation
  if (document.getElementById("idNo").value == "") {
    isValid = false;
    document.getElementById("idNovalidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document.getElementById("idNovalidationError").classList.contains("hide")
    ) {
      document.getElementById("idNovalidationError").classList.add("hide");
    }
  }
  // Blood Group validation
  if (document.getElementById("bloodGroup").value == "") {
    isValid = false;
    document
      .getElementById("bloodGroupvalidationError")
      .classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("bloodGroupvalidationError")
        .classList.contains("hide")
    ) {
      document
        .getElementById("bloodGroupvalidationError")
        .classList.add("hide");
    }
  }
  // Medical Record validation
  if (document.getElementById("medRecord").value == "") {
    isValid = false;
    document
      .getElementById("medRecordvalidationError")
      .classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("medRecordvalidationError")
        .classList.contains("hide")
    ) {
      document.getElementById("medRecordvalidationError").classList.add("hide");
    }
  }
  // Guardian contact info validation
  if (document.getElementById("contactInfo").value == "") {
    isValid = false;
    document
      .getElementById("contactInfovalidationError")
      .classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("contactInfovalidationError")
        .classList.contains("hide")
    ) {
      document
        .getElementById("contactInfovalidationError")
        .classList.add("hide");
    }
  }
  return isValid;
}
