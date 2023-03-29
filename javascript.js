var dropDownValue = document.getElementById("DDLang");

dropDownValue.onchange = function() {
  if (this.selectedIndex !== 0) {
    window.location.href = this.value;
  }
};
var dropDownValue = document.getElementById("DDCur");

dropDownValue.onchange = function() {
  if (this.selectedIndex !== 0) {
    window.location.href = this.value;
  }
};