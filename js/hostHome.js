let slider = document.querySelector("#mySlider");
let nightsNumber = document.querySelector(".underline-number");
let bnbIncome = document.querySelector(".bnb-income");

const calculateEarnings = (nights) => {
    let basePrice = 4421;
    return nights * basePrice;
}


slider.oninput = function (e) {
    let showNights = e.target.value;
    let earnings = calculateEarnings(showNights)
    if (showNights === "" || showNights === 0) {
        bnbIncome.innerText = `Rs.${earnings}`
    }
    else {
        bnbIncome.innerText = `Rs.${earnings}`;
    }
    nightsNumber.innerText = `${showNights} nights`;


}


const showBnbPortal = (e) => {
    e.target.parentElement.classList.toggle("show");
}
