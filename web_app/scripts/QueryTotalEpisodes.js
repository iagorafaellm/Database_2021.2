//Query 9: Total amount of episodes in the table

$.get("http://localhost:3000/totalepisodes", (result) => {
        var context = document.getElementsByClassName('data9');
        const total = document.createElement("p");
        total.innerText = result[0];
        const text = document.createElement("h3");
        text.innerText = "All episodes:"
        context[0].appendChild(text);
        context[0].appendChild(total)
});