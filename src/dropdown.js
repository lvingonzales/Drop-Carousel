const dropdownIcon = document.getElementById("dropdown-icon");
const dropdownList = document.getElementById("dropdown-list");

function initializeDropdown() {
    console.log(dropdownIcon);
    console.log(dropdownList);

    dropdownIcon.addEventListener("mouseover", () => {
        console.log (`show dropdown`);
        dropdownList.classList.remove ('hidden');
    });

    dropdownIcon.addEventListener("mouseout", () => {
        console.log (`hide dropdown`);
        dropdownList.classList.add ('hidden');
    });

    dropdownList.addEventListener("mouseover", () => {
        console.log (`show dropdown`);
        dropdownList.classList.remove ('hidden');
    });

    dropdownList.addEventListener("mouseout", () => {
        console.log (`hide dropdown`);
        dropdownList.classList.add ('hidden');
    });

    dropdownList.classList.add ('hidden');
}

export {initializeDropdown};
