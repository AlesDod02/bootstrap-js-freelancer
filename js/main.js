
function bookService(event) {
    event.preventDefault();
    let typeOfService = document.getElementById("typeOfService");
    let optionService = typeOfService.options[typeOfService.selectedIndex].value;

    let timeRequested = document.getElementById("hours").value;
    timeRequested = parseInt(timeRequested);
    let discountCode = document.getElementById("discount").value;
    console.log(optionService);
    console.log(timeRequested);
    console.log(discountCode);
    
}

