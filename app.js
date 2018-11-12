const container = document.querySelector('.container');
const numberInput = document.querySelector('#number');
const getJokesBtn = document.querySelector('.get-jokes');
const ol = document.querySelector('.jokes');
//<!-- http://www.icndb.com/api/ -->

getJokesBtn.addEventListener('click', getAllJokes);
const xhr = new XMLHttpRequest();
function getAllJokes(e) {
    e.preventDefault();
    let numberSet = numberInput.value;
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numberSet}`, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const jokes = JSON.parse(xhr.responseText);
            if (numberSet === '' || numberSet <= 0 || numberSet > 558) {
                alert('set a number between 1 and 558');
            } else {
                let output = '';
                if (jokes.type = 'success') {
                    jokes.value.forEach(o => {
                        output += `<li>${o.joke}</li>`;
                    });
                } else {
                    output = '<li>Something Went wrong</li>'
                }
                ol.innerHTML = output;
                numberInput.value = '';
            }
        } else {
            console.log(xhr.status);
        }
    };
    xhr.send();
};