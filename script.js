




function convertSens(){

    const fromGameSelect = document.getElementById('from-game');
    const toGameSelect = document.getElementById('to-game');
    const inputValue = parseFloat(document.querySelector('.input-sens').value);


    // FROM CALL OF DUTY CONVERSION

    if(fromGameSelect.value === 'Call of Duty' && toGameSelect.value === "Combat Master"){
        if(!isNaN(inputValue)){
            const result = inputValue * 4.75;

            document.querySelector('.js-result').innerHTML = result;
        }
    }

    if(fromGameSelect.value === 'Call of Duty' && toGameSelect.value === 'PUBG MOBILE'){
        result = inputValue * 2.25;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }
    

    if(fromGameSelect.value === 'Call of Duty' && toGameSelect.value === 'Farlight 84'){
        result = inputValue * 1.5;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }
    

    // FROM COMBAT MASTER CONVERSION

    if(fromGameSelect.value === 'Combat Master' && toGameSelect.value === 'Farlight 84'){
        result = inputValue / 3.17;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }

    else if(fromGameSelect.value === 'Combat Master' && toGameSelect.value === 'Call of Duty'){
        result = inputValue / 4.75;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }

    else if(fromGameSelect.value === 'Combat Master' && toGameSelect.value === 'PUBG MOBILE'){
        result = inputValue / 2.111;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }



    // FROM PUBG MOBILE CONVERSION

    if(fromGameSelect.value === 'PUBG MOBILE' && toGameSelect.value === 'Combat Master'){
        result = inputValue * 2.111;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }

    else if(fromGameSelect.value === 'PUBG MOBILE' && toGameSelect.value === 'Call of Duty'){
        result = inputValue / 2.25;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }

    else if(fromGameSelect.value === 'PUBG MOBILE' && toGameSelect.value === 'Farlight 84'){
        result = inputValue / 1.5;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }
    



    // FROM FARLIGHT CONVERSION

    if(fromGameSelect.value === 'Farlight 84' && toGameSelect.value === 'Combat Master'){
        result = inputValue * 3.17;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }

    else if(fromGameSelect.value === 'Farlight 84' && toGameSelect.value === 'PUBG MOBILE'){
        result = inputValue * 1.5;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }

    else if(fromGameSelect.value === 'Farlight 84' && toGameSelect.value === 'Call of Duty'){
        result = inputValue / 1.5;
        result = Math.trunc(result);
        document.querySelector('.js-result').innerHTML = result;
    }



}
