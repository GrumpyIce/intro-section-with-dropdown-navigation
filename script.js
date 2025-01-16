const featuresLink = document.getElementById("featuresLink");
const companyLink = document.getElementById("companyLink");
const featuresDropdown = document.getElementById("featuresDropdown");
const companyDropdown = document.getElementById("companyDropdown");

function toggleDropdown(link, dropdown){
    const isVisible = dropdown.style.display === "block"
    document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    dropdown.style.display = isVisible ? "none" : "block";
}

featuresLink.addEventListener("click", (e) =>{
    e.preventDefault();
    toggleDropdown(featuresLink, featuresDropdown);
});

companyLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDropdown(companyLink, companyDropdown);
});

document.addEventListener("click", (e) =>{
    if (!e.target.closest(".nav-list")){
        document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    }
});
