// Animated counters
let meals = 0, clothes = 0, areas = 0;

const mealInterval = setInterval(() => {
    if (meals < 1200) {
        meals += 20;
        document.getElementById("meals").textContent = meals;
    } else clearInterval(mealInterval);
}, 30);

const clothesInterval = setInterval(() => {
    if (clothes < 850) {
        clothes += 10;
        document.getElementById("clothes").textContent = clothes;
    } else clearInterval(clothesInterval);
}, 40);

const areaInterval = setInterval(() => {
    if (areas < 15) {
        areas += 1;
        document.getElementById("areas").textContent = areas;
    } else clearInterval(areaInterval);
}, 200);

// Volunteer add
function addVolunteer() {
    const names = ["Kiran", "Pooja", "Amit", "Divya", "Suresh"];
    const roles = ["Distribution", "Logistics", "Packing", "Coordination"];
    const li = document.createElement("li");

    li.textContent =
        names[Math.floor(Math.random() * names.length)] +
        " – " +
        roles[Math.floor(Math.random() * roles.length)];

    document.getElementById("volunteerList").appendChild(li);
}
