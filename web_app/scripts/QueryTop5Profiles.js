//Query 5: Profiles that have at least one of the top 5 animes as favorite

$.get("http://localhost:3000/top5profiles", (result) => {
        var context = document.getElementsByClassName('data5');
        const table = document.createElement("table");
        table.className = "top5Profiles";
        const tableHeader = document.createElement("tr");
        tableHeader.innerHTML = "<td>Profile</td><td>Rank</td><td>Anime ID</td>";
        table.appendChild(tableHeader);
        context[0].appendChild(table);
        
        context = document.getElementsByClassName('top5Profiles');
        for(var i = 0; i < result[0].length; i++){
            const tablerow = document.createElement("tr");

            tablerow.innerHTML = "<td>" + result[0][i] + "</td>" + "<td>" + result[1][i] + "</td>" + "<td>" + result[2][i] + "</td>";

            context[0].appendChild(tablerow)
        }
});