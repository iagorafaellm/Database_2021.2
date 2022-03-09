//Query 6: Animes with "Drama" or "Action" genres

$.get("http://localhost:3000/dramaoractionanime", (result) => {
        var context = document.getElementsByClassName('data6');
        const table = document.createElement("table");
        table.className = "drama-action-anime";
        const tableHeader = document.createElement("tr");
        tableHeader.className = "dractionHeader";
        tableHeader.innerHTML = "<td>ids</td>";
        table.appendChild(tableHeader);
        context[0].appendChild(table);
        
        context = document.getElementsByClassName('drama-action-anime');
        for(var i = 0; i < result[0].length; i++){
            const tablerow = document.createElement("tr");
            tablerow.innerHTML = "<td>" + result[0][i] + "</td>";

            context[0].appendChild(tablerow)
        }
});