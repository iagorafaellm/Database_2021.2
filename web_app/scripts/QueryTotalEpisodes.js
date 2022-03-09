//Query 9: Total amount of episodes in the table

$.get("http://localhost:3000/totalepisodes", (result) => {
        var context = document.getElementsByClassName('data9');
        const text = document.createElement("h2");
        text.innerText = "All Episodes: " + result[0];
        context[0].appendChild(text)
});