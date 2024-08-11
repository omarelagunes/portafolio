const showDetail = employeeItem =>{
    const itemDetail = employeeItem.nextElementSibling
    if(itemDetail && itemDetail.classList.contains("item-detail")){
        if(itemDetail.style.display === 'block'){
            itemDetail.style.display = 'none'
            employeeItem.lastElementChild.innerHTML = '&#9654;';
        }else{
            itemDetail.style.display = 'block'
            employeeItem.lastElementChild.innerHTML = '&#9660;';
        }
    }
}
const employeeProfile = document.getElementsByClassName("container-detail")
Array.from(employeeProfile).forEach(employeeItem => {
    employeeItem.addEventListener('click', () => showDetail(employeeItem))
});

const randomMessages = () => {
    const unfunnyJokes = [
        'What do you call fake spaghetti? An impasta!', 
        'Why did the scarecrow win an award? Because he was outstanding in his field!',
        'What do you call cheese that isn\'t yours? Nacho cheese!',
        'Why can\'t you give Elsa a balloon? Because she will let it go!',
        'What did one wall say to the other wall? I\'ll meet you at the corner!',
        'Why did the bicycle fall over? Because it was two-tired!',
        'How does a penguin build its house? Igloos it together!',
        'What did the zero say to the eight? Nice belt!',
        'Why don\'t skeletons fight each other? They don’t have the guts!',
        'What do you call a factory that makes good products? A satisfactory!'
    ];
    const indexRandom = Math.floor(Math.random() * unfunnyJokes.length);
    return unfunnyJokes[indexRandom];
}

const dadJoke = () => {
    const jokeElement = document.getElementById('dadJoke');
        jokeElement.innerHTML = randomMessages();
        jokeElement.style.display = 'block';

        const jokeButton = document.getElementById('jokeBotton');
        jokeButton.innerHTML = 'Want to hear another joke?';
}


const jokeButton = document.getElementById('jokeBotton');
jokeButton.addEventListener('click', dadJoke);
