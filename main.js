const form = document.getElementById("infoform")
    form.addEventListener("submit", (e)=> {
    e.preventDefault()
    // alert("account was created successfully");
    if(confirm("form submitted successfully! click ok to continue")) {
      window.location.href = "https://t.me.theagencies01"
    } else {
      window.location.href = "https://t.me.theagencies01"
    }
  })
