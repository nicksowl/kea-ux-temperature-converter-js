// Could rewrite it using loop with certain conditions to make it more efficent?;

// This is just for personal process marging
// 🚧 
// ⛳
// 🚨 

function temp_converter() {
    // Values Insterted
    // Input can be converted from sting to integer here; or just define with var lol
    let input = document.querySelector("#input").value;
    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;

    // Display result values; could be removed since not userd
    // let result_input = document.querySelector("#result-input").innerHTML;
    // let result_from = document.querySelector("#result-from").innerHTML;

    // let result_output = document.querySelector("#result-output").innerHTML;
    // let result_to = document.querySelector("#result-to").innerHTML;
    
    function celsius_to_fahrenheit(input) { 
        // (0°C × 9/5) + 32 = 32°F
        let result = (input * 9 / 5) + 32;
        return result.toFixed(2);
    }
    function celsius_to_kelvin(input) {
        // 0°C + 273.15 = 273,15K
        // converts string int intiger
        let result = parseInt(input);
        result = result + 273.15;
        return result;
    }
    function fahrenheit_to_celsius(input) { 
        // (1°F − 32) × 5/9 = -17,22°C
        let result = (input - 32) * 5/9;
        return result.toFixed(2);
    }
    function fahrenheit_to_kelvin(input) {
        // (1°F − 32) × 5/9 + 273.15 = 255,928K
        let result = ((input - 32) * 5/9 + 273.15).toFixed(2);
        return result;
    }
    function kelvin_to_celsius(input) { 
        let result = parseInt(input);
        // 1K − 273.15 = -272,1°C
        result = result - 273.15;
        return result;
    }
    function kelvin_to_fahrenheit(input) {
        // (1K − 273.15) × 9/5 + 32 = -457,9°F
        let result = ((input - 273.15) * 9/5 + 32).toFixed(2);
        return result;
    }

    // Value check and any other check goes here
    // !!! ⛳ IT CAN BE MINUS it's not money calculationn
    if (input > 9999 || input < -9999) {
        alert('Your value has more than 4 digits! Slow down Sir!');

    }   else if (from == 'Celsius') {
        console.log('Celsius!');

        // 🚨 !!! Define locations of element on the page here or not

        switch(to) {
            case 'Celsius': 
                console.log('x Celcius!'); 
                document.querySelector("#result-input").innerHTML = input; 
                document.querySelector("#result-from").innerHTML = '°C';
                document.querySelector("#result-output").innerHTML = input;
                document.querySelector("#result-to").innerHTML = '°C';
                // Genious Message
                break;
            case 'Fahrenheit': 
                console.log('x Fahrenheit!'); 
                document.querySelector("#result-input").innerHTML = input; 
                document.querySelector("#result-from").innerHTML = '°C';
                document.querySelector("#result-output").innerHTML = celsius_to_fahrenheit(input);
                document.querySelector("#result-to").innerHTML = '°F';
                break;
            case 'Kelvin': 
                console.log('x Kelvin!'); 
                document.querySelector("#result-input").innerHTML = input; 
                document.querySelector("#result-from").innerHTML = '°C';
                document.querySelector("#result-output").innerHTML = celsius_to_kelvin(input);
                document.querySelector("#result-to").innerHTML = '°K';
                break;
        }

    } else if (from == 'Fahrenheit') {
        console.log('Fahrenheit!');

        switch(to) {
            case 'Celsius': 
                console.log('x Celcius!'); 
                document.querySelector("#result-input").innerHTML = input; 
                document.querySelector("#result-from").innerHTML = '°F';
                document.querySelector("#result-output").innerHTML = fahrenheit_to_celsius(input);
                document.querySelector("#result-to").innerHTML = '°C';
                break;
            case 'Fahrenheit': 
                console.log('x Fahrenheit!'); 
                document.querySelector("#result-input").innerHTML = input; 
                document.querySelector("#result-from").innerHTML = '°F';
                document.querySelector("#result-output").innerHTML = input;
                document.querySelector("#result-to").innerHTML = '°F';
                break;  
            case 'Kelvin': 
                console.log('x Kelvin!'); 
                document.querySelector("#result-input").innerHTML = input; 
                document.querySelector("#result-from").innerHTML = '°F';
                document.querySelector("#result-output").innerHTML = fahrenheit_to_kelvin(input);
                document.querySelector("#result-to").innerHTML = '°K';
                break;
            }

        } else if (from == 'Kelvin') {
            console.log('Kelvin!');
            switch(to) {
                case 'Celsius': 
                    console.log('x Celcius!'); 
                    document.querySelector("#result-input").innerHTML = input; 
                    document.querySelector("#result-from").innerHTML = '°K';
                    document.querySelector("#result-output").innerHTML = kelvin_to_celsius(input);
                    document.querySelector("#result-to").innerHTML = '°C';
                    break;
                case 'Fahrenheit': 
                    console.log('x Fahrenheit!'); 
                    document.querySelector("#result-input").innerHTML = input; 
                    document.querySelector("#result-from").innerHTML = '°K';
                    document.querySelector("#result-output").innerHTML = kelvin_to_fahrenheit(input);
                    document.querySelector("#result-to").innerHTML = '°F';
                    break;
                case 'Kelvin': 
                    console.log('x Kelvin!'); 
                    document.querySelector("#result-input").innerHTML = input; 
                    document.querySelector("#result-from").innerHTML = '°K';
                    document.querySelector("#result-output").innerHTML = input;
                    document.querySelector("#result-to").innerHTML = '°K';
                    break;
            }
    }
};

function showResult() {
    document.querySelector('#result').style.display= 'inline-flex';
};