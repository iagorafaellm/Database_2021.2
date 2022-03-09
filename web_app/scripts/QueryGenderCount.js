//Query 7: Show count of all genders in database

$.get("http://localhost:3000/gendercount", (result) => {
        var context = document.getElementsByClassName('data7');
        const table = document.createElement("table");
        table.className = "gender-count";
        const tableHeader = document.createElement("tr");
        tableHeader.className = "genderHeader";
        tableHeader.innerHTML = "<td>Gender</td><td>Count</td>";
        table.appendChild(tableHeader);
        context[0].appendChild(table);
        
        context = document.getElementsByClassName('gender-count');
        for(var i = 0; i < result[0].length; i++){
            const tablerow = document.createElement("tr");
            tablerow.innerHTML = "<td>" + result[0][i] + "</td>" + "<td>" + result[1][i] + "</td>";

            context[0].appendChild(tablerow)
        }
});