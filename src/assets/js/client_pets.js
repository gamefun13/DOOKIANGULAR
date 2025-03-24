function filterPets() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let petRows = document.querySelectorAll("#petsTable .pet-row");

    petRows.forEach(row => {
        let name = row.querySelector(".pet-name").textContent.toLowerCase();
        let breed = row.querySelector(".pet-breed").textContent.toLowerCase();
        let age = row.querySelector(".pet-age").textContent.toLowerCase();
        let state = row.querySelector(".pet-state").textContent.toLowerCase();
        let disease = row.querySelector(".pet-disease").textContent.toLowerCase();

        if (name.includes(input) || breed.includes(input) || age.includes(input) || state.includes(input) || disease.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
