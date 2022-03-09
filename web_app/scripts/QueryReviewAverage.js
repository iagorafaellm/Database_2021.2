//Query 8: Average scores of all reviewed animes based on reviews

$.get("http://localhost:3000/reviewaverage", (result) => {
        var context = document.getElementsByClassName('data8');
        const table = document.createElement("table");
        table.className = "review-averages";
        const tableHeader = document.createElement("tr");
        tableHeader.className = "averageHeader";
        tableHeader.innerHTML = "<td>Ids</td><td>Averages</td>";
        table.appendChild(tableHeader);
        context[0].appendChild(table);
        
        context = document.getElementsByClassName('review-averages');
        for(var i = 0; i < result[0].length; i++){
            const tablerow = document.createElement("tr");

            tablerow.innerHTML = "<td>" + result[0][i] + "</td>" + "<td>" + result[1][i] + "</td>";

            context[0].appendChild(tablerow)
        }
});