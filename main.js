// main.js (Updated to handle Render backend)

document.getElementById("infoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://bangbros-backend.onrender.com/submit-form", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message && data.message.includes("success")) {
        document.getElementById("modalBox").style.display = "flex";
      } else {
        alert("⚠️ Something went wrong. Please try again.");
        console.log("Response:", data);
      }
    })
    .catch((err) => {
      alert("❌ Failed to submit form. Backend may be offline.");
      console.error("Fetch error:", err);
    });
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modalBox").style.display = "none";
});
