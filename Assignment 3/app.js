const jokeElement = document.getElementById('joke');
const getjoke = document.getElementById('getjoke');

// Add Event Listner to the Button


getjoke.addEventListener('click', generataJoke);
generataJoke();

 async function generataJoke (){
    const Jokes = await fetch('https://icanhazdadjoke.com/',
    {
        headers:{
            accept: 'application/json'
        }
    });

    const joke = await Jokes.json();
    console.log(joke);

    jokeElement.innerHTML=joke.joke;

}