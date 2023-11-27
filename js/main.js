let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
let projectCards = [{
    name: "Cabin",
    Image: "cabin",
},
{
    name: "Cake",
    Image: "cake",
},
{
    name: "Circus",
    Image: "circus",
},
{
    name: "Game",
    Image: "game",
},
{
    name: "Safe",
    Image: "safe",
},
{
    name: "Submarine",
    Image: "submarine",
}]
for(let i=0; i <= discountCodes.length; i++) {
    addCard(projectCards[i])

};


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
            discountCodes.splice(i, 1);
            break;
        }
    }
    if (discountValid) {


        if (optionService == "Backend") {
            let price = timeRequested * 20.50 * 0.75;
            price = price.toFixed(2);
            console.log(price);
            document.getElementById("finalPrice").innerHTML = `Il costo è di ${price} €`

        }
        else if (optionService == "Frontend") {
            let price = (timeRequested * 15.3 * 0.75);
            price = price.toFixed(2);
            console.log(price);
            document.getElementById("finalPrice").innerHTML = `Il costo è di ${price} €`
        }


        else if (optionService == "Projectanalysis") {
            let price = timeRequested * 33.60 * 0.75;
            price = price.toFixed(2);
            console.log(price);
            document.getElementById("finalPrice").innerHTML = `Il costo è di ${price} €`
        }
        ;
    } else {
        document.getElementById("nonValido").innerHTML = `non valido(sconto non applicato)`;
        if (optionService == "Backend") {
            let price = timeRequested * 20.50
            console.log(price);
            document.getElementById("finalPrice").innerHTML = `Il costo è di ${price} €`

        }
        else if (optionService == "Frontend") {
            let price = timeRequested * 15.3
            console.log(price)
            document.getElementById("finalPrice").innerHTML = `Il costo è di ${price} €`
        }


        else if (optionService == "Projectanalysis") {
            let price = timeRequested * 33.60
            console.log(price)
            document.getElementById("finalPrice").innerHTML = `Il costo è di ${price} €`

        }
        ;

    }


}
function addCard(nameOfArray) {
    document.getElementById("cardList").innerHTML += `
    <div class="col-md-6 col-lg-4 mb-5">
    <div class="card">
    <img class="card-img-top" src="img/portfolio/${nameOfArray.Image}.png" alt="cabin">
    <div class="card-body text-center">
      <h5>${nameOfArray.name} Website</h5>
      <a href="#" class="card-link btn btn-info">Preview</a>
      <a href="#" class="card-link btn btn-outline-info">Visit site</a>
    </div>
  </div>
  </div>
    `;
}
