
function selectType(el){
  document.querySelectorAll(".closet div")
    .forEach(d=>d.classList.remove("selected"));
  el.classList.add("selected");
}

const condition = document.getElementById("condition");
const text = document.getElementById("conditionText");

condition.oninput = ()=>{
  if(condition.value==1) text.innerText="Needs repair";
  if(condition.value==2) text.innerText="Good condition";
  if(condition.value==3) text.innerText="Almost new";
};

function previewImage(e){
  const img=document.getElementById("preview");
  img.src=URL.createObjectURL(e.target.files[0]);
  img.style.display="block";

class ThankYouDonation {
  constructor(buttonId, thankBoxId) {
    this.button = document.querySelector(buttonId);
    this.thankBox = document.querySelector(thankBoxId);
  }

  showMessage() {
    this.thankBox.style.display = "block";
    this.thankBox.scrollIntoView({ behavior: "smooth" });
  }
}

/* OBJECT CREATION */
const thankYou = new ThankYouDonation(".donate-btn", "#thankYouBox");

/* BUTTON CLICK */
document.querySelector(".donate-btn").addEventListener("click", () => {
  thankYou.showMessage();
});
}
