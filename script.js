




function convertSens(){

    const fromGameSelect = document.getElementById('from-game');
    const toGameSelect = document.getElementById('to-game');
    const inputValue = parseFloat(document.querySelector('.input-sens').value);

    if(fromGameSelect.value === 'Call of Duty' && toGameSelect.value === "Combat Master"){
        if(!isNaN(inputValue)){
            const result = inputValue * 4.75;

            document.querySelector('.js-result').innerHTML = result;
        }
        else {
            alert('enter a valid number');
        }
    }
    else if(fromGameSelect.value === 'Combat Master' && toGameSelect.value === 'Call of Duty'){
        if(!isNaN(inputValue)){
            result = inputValue / 4.75;

            document.querySelector('.js-result').innerHTML = result;
        }
    }
}
