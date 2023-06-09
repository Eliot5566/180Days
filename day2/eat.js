function enableOptionsB(radio) {
    var po3 = document.getElementsByName("po3");
    for (var i = 0; i < po3.length; i++) {
        po3[i].disabled = !radio.checked;
    }
}

function disableOptionsB(radio) {
    var po3 = document.getElementsByName("po3");
    for (var i = 0; i < po3.length; i++) {
        po3[i].disabled = radio.checked;
        if (radio.checked) {
            po3[i].checked = false;
        }
    }
}

var ResetButton = document.getElementById("ResetButton");
ResetButton.addEventListener("click", function () {
    var radios = document.getElementsByName("po3");
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
});

// 計算用

// function calculateTotalPrice() {
//     var selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
//     var totalPrice = 0;

//     for (var i = 0; i < selectedOptions.length; i++) {
//         var price = parseFloat(selectedOptions[i].getAttribute('data-price'));
//         totalPrice += price;
//     }

//     var totalPriceElement = document.getElementById('totalPrice');
//     totalPriceElement.textContent = '總價錢：$' + totalPrice.toFixed(2);
// }



// ---------------------
function calculateTotalPrice() {
    var selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
    var selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var totalPrice = 0;

    for (var i = 0; i < selectedOptions.length; i++) {
        var price = parseFloat(selectedOptions[i].getAttribute('data-price'));
        totalPrice += price;
    }

    for (var i = 0; i < selectedCheckboxes.length; i++) {
        var price = parseFloat(selectedCheckboxes[i].getAttribute('data-price'));
        totalPrice += price;
    }

    var totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = '總價錢：$' + totalPrice.toFixed(2);
}