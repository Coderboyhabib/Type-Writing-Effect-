const text = ['Web Developer', 'Freelancer', 'Youtuber', 'Vlogar'];
let count = 0;
let index = 0;
let curentText = '';
let letter = '';

(function type() {

    if (count === text.length) {
        count = 0;
    }

    curentText = text[count];
    letter = curentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;

    if (letter.length === curentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 400);
}());