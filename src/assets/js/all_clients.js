function filterClients() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let clientRows = document.querySelectorAll("#clientsTable .client-row");

    clientRows.forEach(row => {
        let id = row.querySelector(".client-id").textContent.toLowerCase();
        let name = row.querySelector(".client-name").textContent.toLowerCase();
        let cellphone = row.querySelector(".client-cellphone").textContent.toLowerCase();

        if (id.includes(input) || name.includes(input) || cellphone.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
