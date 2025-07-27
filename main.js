
document.getElementById("infoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  document.getElementById("modalBox").style.display = "flex";
})

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modalBox").style.display = "none";
});
