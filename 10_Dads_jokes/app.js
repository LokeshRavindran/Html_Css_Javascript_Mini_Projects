async function getJokes() {
  const url =
    "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes";

  const res = await fetch(url);
  const resData = await res.json();
  let currentJoke = resData.setup + " " + resData.punchline;
  document.querySelector("#joke").innerText = currentJoke;
}

getJokes();

document.querySelector(".btn").addEventListener("click", getJokes);
