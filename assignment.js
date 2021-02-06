
//This is Kilometer to Meter calculation function.
function kilometerToMeter(km) {
    if (km < 0) {                      //Negative value checking condition
        return "Negative Value is not allowed";
    }
    else {
        var meter = km * 1000;         //Kilometer to meter calculation
        return meter;
    }
}

//This is Budget calculation function.
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {       //Negative value checking condition
        return "Negative Value is not allowed";
    }
    else {
        var watch = watch * 50;
        var phone = phone * 100;
        var laptop = laptop * 500;
        var total = watch + phone + laptop;
        return total;
    }
}

//This is Hotel Cost calculation function.
function hotelCost(days) {
    var cost = 0;
    if (days < 0) {                           //Negative value checking condition
        return "Negative Value is not allowed";
    }
    else if (days <= 10) {
        var cost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        var cost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var thirdTenDays = remaining * 50;
        var cost = firstTenDays + secondTenDays + thirdTenDays;
    }
    return cost;
}

//This is long string finding function.
function megaFriend(names) {
    var longName = 0;
    var longest;
    for (var i = 0; i < names.length; i++) {
        if (names[i].length > longName) {
            var longName = names[i].length;
            longest = names[i];
        }

    }
    return longest;
}

