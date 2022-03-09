//Query 5: Profiles that have a Shounen anime as favorite and where born in 1996

$.get("http://localhost:3000/shounen1996", (result) => {
        var context = document.getElementsByClassName('data5');
        const table = document.createElement("table");
        table.className = "shounen1996";
        const tableHeader = document.createElement("tr");
        tableHeader.innerHTML = "<td>Profile</td><td>Gender</td><td>Birthday</td>";
        table.appendChild(tableHeader);
        context[0].appendChild(table);
        
        context = document.getElementsByClassName('shounen1996');
        for(var i = 0; i < result[0].length; i++){
            const tablerow = document.createElement("tr");

            tablerow.innerHTML = "<td>" + result[0][i] + "</td>" + "<td>" + result[1][i] + "</td>" + "<td>" + result[2][i] + "</td>";

            context[0].appendChild(tablerow)
        }
});