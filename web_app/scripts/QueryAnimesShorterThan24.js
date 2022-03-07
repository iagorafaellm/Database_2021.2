//Query 10: Title and episode amount for animes with 24 episodes or less (Steins:Gate episode count == 24)

$.get("http://localhost:3000/animesshorterthan24", (result) => {
        var context = document.getElementsByClassName('data10');
        const table = document.createElement("table");
        table.className = "short-animes";
        const tableHeader = document.createElement("tr");
        tableHeader.innerHTML = "<td>Title</td><td>Episode Count</td>";
        table.appendChild(tableHeader);
        context[0].appendChild(table);
        
        context = document.getElementsByClassName('short-animes');
        for(var i = 0; i < result[0].length; i++){
            const tablerow = document.createElement("tr");
            tablerow.innerHTML = "<td>" + result[0][i] + "</td>" + "<td>" + result[1][i] + "</td>";

            context[0].appendChild(tablerow)
        }
});