function sendMessage(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;
  const status = document.getElementById("status");

  if(name === "" || email === "" || msg === ""){
    status.style.color = "red";
    status.innerText = "⚠ Please fill all fields";
    return;
  }

  status.style.color = "green";
  status.innerText = "✅ Message sent successfully. We will contact you soon!";
}
