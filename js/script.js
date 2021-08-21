// Gets All Element By ID --------
const memoryCost = document.getElementById('memory-cost');
const ssdCost = document.getElementById('ssd-cost');
const deliveryCost = document.getElementById('delivery-cost')
const totalCost = document.getElementById('total-cost');
const promoTotal = document.getElementById('total-after-promo');

// Function for all extra cost-----------
function extraCost(option) {
    if (option == 'memory') {
        memoryCost.innerText = 0;
    }
    else if (option == 'ssd') {
        ssdCost.innerText = 0;
    }
    else if (option == 'free-delivery') {
        deliveryCost.innerText = 0;
    }
    else if (option == '16gb') {
        memoryCost.innerText = 180;
    }
    else if (option == '512gb') {
        ssdCost.innerText = 100;
    }
    else if (option == '1tb') {
        ssdCost.innerText = 180;
    }
    else if (option == 'paid-delivery') {
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
    const totalInt = parseInt(totalCost.innerText);
    if (promoInput.value == 'stevekaku') {
        promoTotal.innerText = totalInt - (totalInt * 20 / 100);
    }
    promoInput.value = '';
})