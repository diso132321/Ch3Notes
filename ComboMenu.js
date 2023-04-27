const readLine = require('readline-sync');

let order = [];
let writtenorder = [];
let drinksize = '';
let ordercost = 0;
let frysize = '';
let ketchuppacket = 0;
let mustardpacket = 0;
let ranchpacket = 0;

let chickenSandwich = 5.25;
let beefSandwich = 6.25;
let tofuSandwich = 5.75;
let beveragesmall = 1;
let beveragemedium = 1.5;
let beveragelarge = 2;
let smallfriesmega = 2;
let smallfries = 1;
let mediumfries = 1.5;
let largefries = 2;

let sandwich = readLine.question('Would you like a Chicken Sandwich($5.25), a Beef Sandwich(6.25), or a Tofu Sandwich($5.75)?: ');

if (sandwich == 'Chicken' || sandwich == 'chicken') {
    console.log('Chicken Sandwich');
    order.push(chickenSandwich);
    writtenorder.push('Chicken Sandwich');
} else if (sandwich == 'beef' || sandwich == 'Beef') {
    console.log('Beef Sandwich!');
    order.push(beefSandwich);
    writtenorder.push('Beef Sandwich');
} else if (sandwich == 'tofu' || sandwich == 'Tofu') {
    console.log('Tofu Sandwich!');
    order.push(tofuSandwich);
    writtenorder.push('Tofu Sandwich');
}

let beverageboolean = readLine.question('Would you like a beverage?: ');

if (beverageboolean == 'Yes' || beverageboolean == 'yes' || beverageboolean == 'y') {
    drinksize = readLine.question('Would you like a small($1.00), medium($1.50), or large soda($2.00)?: ');
    console.log(`${drinksize} size`);
    if (drinksize == 'small') {
        order.push(beveragesmall);
        writtenorder.push('small beverage');
    } else if (drinksize == 'medium') {
        order.push(beveragemedium);
        writtenorder.push('medium beverage');
    } else if (drinksize == 'large') {
        order.push(beveragelarge);
        writtenorder.push('Large beverage');
    }
}
if (beverageboolean == 'No' || beverageboolean == 'no' || beverageboolean == 'n') {
    console.log(`No drink chosen.`)
}

let fryselection = readLine.question('Would you like fries?: ');
if (fryselection == 'yes' || fryselection == 'Yes' || fryselection == 'y') {
    frysize = readLine.question('Would you like small ($1.00), medium ($1.50), or large ($2.00)?: ');
    if (frysize == 'small' || frysize == 'Small' || frysize == 's' || frysize == 'S') {
        let smallfriesmegasize = readLine.question('Would you like to mega size?: ');
        if (smallfriesmegasize == 'yes' || smallfriesmegasize == 'Yes' || smallfriesmegasize == 'Y' || smallfriesmegasize == 'y') {
            order.push(smallfriesmega);
            writtenorder.push('Mega-size small fries');
            console.log('You mega-sized your fries and now their price is $2.00 dollars!');
        } else if (smallfriesmegasize == 'no' || smallfriesmegasize == 'No' || smallfriesmegasize == 'N' || smallfriesmegasize == 'n') {
            order.push(smallfries);
            writtenorder.push('Small fries');
            console.log(`You didn't mega-size your fries and their price is $1.00 dollar!`);
        }
    }
    if (frysize == 'medium' || frysize == 'Medium' || frysize == 'm' || frysize == 'M') {
        order.push(mediumfries);
        writtenorder.push('Medium fries');
        console.log(`You ordered medium fries and their price is $1.50 dollars!`);
    }    if (frysize == 'large' || frysize == 'Large' || frysize == 'l' || frysize == 'L') {
        order.push(largefries);
        writtenorder.push('Large fries');
        console.log(`You ordered large fries and their price is $2.00 dollars!`);
    }

} else if (fryselection == 'no' || fryselection == 'No' || fryselection == 'n') {
    console.log('Fries not selected.');
}

ketchuppacket = readLine.question('How many ketchup packets would you like?: ');
if (ketchuppacket < 0) {
    ketchuppacket = readLine.question('How many ketchup packets do you want?: ');
}
if (ketchuppacket != 0) {
    let ketchupcost = ketchuppacket*0.25;
    order.push(ketchupcost);
    writtenorder.push(`${ketchuppacket} ketchup packets`);
}

mustardpacket = readLine.question('How many mustard packets would you like?: ');
if (mustardpacket < 0) {
    mustardpacket = readLine.question('How many mustard packets do you want?: ');
}

if (mustardpacket != 0) {
    let mustardcost = mustardpacket*0.20;
    order.push(mustardcost);
    writtenorder.push(`${mustardpacket} mustard packets`);
}

ranchpacket = readLine.question('How many ranch packets would you like?: ');
if (ranchpacket < 0) {
    ranchpacket = readLine.question('How many ranch packets do you want?: ');
}

if (ranchpacket != 0) {
    let ranchcost = ranchpacket*0.15;
    order.push(ranchcost);
    writtenorder.push(`${ranchpacket} ranch packets`);
}

if (fryselection != '' && beverageboolean != '' && sandwich != '') {
    for (let i = 0; i < order.length; i++) {
        ordercost += order[i];
    }
}

if (sandwich == 'y' || sandwich == 'yes' || sandwich == 'Y' || sandwich == 'Yes') {
    if (beverageboolean != 'y' || beverageboolean != 'yes' || beverageboolean != 'Y' || beverageboolean != 'Yes') {
        if (fryselection != 'y' || fryselection != 'yes' || fryselection != 'Y' || fryselection != 'Yes') {
            let coupon = -1;
            order.push(coupon);
        }
    }
}
if (fryselection != '' && beverageboolean != '' && sandwich != '') {
    let tax = ordercost*.07;
    tax = Number(tax.toFixed(2));
    order.push(tax);
    console.log(ordercost+tax);
}

console.log(order);
console.log(writtenorder);