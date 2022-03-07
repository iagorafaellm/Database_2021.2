//Query 3: Animes with genre "Seinen"

$.get("http://localhost:3000/seinenanime", (result) => {
        var context = document.getElementsByClassName('data3');
        const table = document.createElement("table");
        table.className = "seinenAnimes";
        const tableHeader = document.createElement("tr");
        tableHeader.innerHTML = "<td>Image</td><td>Anime ID</td><td>Title</td>";
        table.appendChild(tableHeader);
        context[0].appendChild(table);
        
        context = document.getElementsByClassName('seinenAnimes');
        for(var i = 0; i < result[0].length; i++){
            const tablerow = document.createElement("tr");
            const animeImage = document.createElement("img");

            tablerow.innerHTML = "<td></td>" + "<td>" + result[0][i] + "</td>" + "<td>" + result[1][i] + "</td>";
            tablerow.firstChild.innerHTML = "<img src=" + result[2][i] + ">";

            context[0].appendChild(tablerow)
        }
});