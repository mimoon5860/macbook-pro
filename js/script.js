// Gets All Element By ID --------
const memoryCost = document.getElementById('memory-cost');
const ssdCost = document.getElementById('ssd-cost');
const deliveryCost = document.getElementById('delivery-cost')
const totalCost = document.getElementById('total-cost');
const promoTotal = document.getElementById('total-after-promo');

// Function for all zero cost -----------
function NoExtraCost(option) {
    if (option == 'memory') {
        memoryCost.innerText = 0;
    }
    else if (option == 'ssd') {
        ssdCost.innerText = 0;
    }
    else if (option == 'free-delivery') {
        deliveryCost.innerText = 0;
    }
    total()
}


// function for all extra section -----------
function extraCost(cost) {
    if (cost == '16gb') {
        memoryCost.innerText = 180;
    }
    else if (cost == '512gb') {
        ssdCost.innerText = 100;
    }
    else if (cost == '1tb') {
        ssdCost.innerText = 180;
    }
    else if (cost == 'paid-delivery') {
        deliveryCost.innerText = 20;
    }
    total()
}

// function for total Cost--------
function total() {
    const extraTotal = parseInt(memoryCost.innerText) + parseInt(ssdCost.innerText) + parseInt(deliveryCost.innerText);

    totalCost.innerText = 1299 + extraTotal;
    promoTotal.innerText = 1299 + extraTotal;
}

//  Promo code added function---------
document.getElementById('promo-apply').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoInt = parseInt(totalCost.innerText);
    if (promoInput.value == 'stevekaku') {
        promoTotal.innerText = promoInt - (promoInt * 20 / 100);
    }
    promoInput.value = '';
})