let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
function bookService(event) {
    event.preventDefault();
    let typeOfService = document.getElementById("typeOfService");
    let optionService = typeOfService.options[typeOfService.selectedIndex].value;

    let timeRequested = document.getElementById("hours").value;
    timeRequested = parseInt(timeRequested);
    let discountCode = document.getElementById("discount").value;
    let discountValid = false;
    for (let i = 0; i < discountCodes.length; i++) {
        if (discountCode === discountCodes[i]) {
            discountValid = true;
            break;
        }
    }
    if (discountValid) {


        if (optionService == "Backend") {
            let price = timeRequested * 20.50 
            price= price % 75
            console.log(price);

        }
        else if (optionService == "Frontend") {
            let price = timeRequested * 15.3 
            price= price % 75
            console.log(price)
        }


        else if (optionService == "Projectanalysis") {
            let price = timeRequested * 33.60 
            price= price % 75
            console.log(price)
        }
        ;
    } else  {
        alert("Codice Sconto non valido")
        if (optionService == "Backend") {
            let price = timeRequested * 20.50
            console.log(price);

        }
        else if (optionService == "Frontend") {
            let price = timeRequested * 15.3
            console.log(price)
        }


        else if (optionService == "Projectanalysis") {
            let price = timeRequested * 33.60
            console.log(price)
        }
        ;

    }
}