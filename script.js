const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button change
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Selected category
        const filter = button.getAttribute("data-filter");

        // Show / hide menu items
        menuItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});