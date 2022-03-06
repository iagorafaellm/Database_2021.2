//Query 1: Top 10 animes

$.get("http://localhost:3000/top10", (result) => {
        var context = document.getElementsByClassName('data');
        const table = document.createElement("table");
        table.className = "topAnimes";
        const tableHeader = document.createElement("tr");
        tableHeader.innerHTML = "<td>Image</td><td>Rank</td><td>Anime ID</td><td>Title</td><td>Rating</td>";
        table.appendChild(tableHeader);
        context[0].appendChild(table);
        
        context = document.getElementsByClassName('topAnimes');
        for(var i = 0; i < result[0].length; i++){
            const tablerow = document.createElement("tr");
            const animeImage = document.createElement("img");

            tablerow.innerHTML = "<td></td>" + "<td>" + result[0][i] + "</td>" + "<td>" + result[1][i] + "</td>" + "<td>" + result[2][i] + "</td>" + "<td>" + result[3][i] + "</td>";
            tablerow.firstChild.innerHTML = "<img src=" + result[4][i] + ">";

            context[0].appendChild(tablerow)
        }
});