//Query 1: Top 10 animes

$.get("http://localhost:3000/top10", (result) => {
        var context = document.getElementsByClassName('data');
        for(var i = 0; i < result[0].length; i++){
            const para = document.createElement("p");
            para.innerText = result[0][i] + " | " + result[1][i] + " | " + result[2][i] + " | " + result[3][i];
            context[0].appendChild(para)
        }
});