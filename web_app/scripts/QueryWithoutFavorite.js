//Query 2: Profiles without any favorite animes

$.get("http://localhost:3000/withoutfavorites", (result) => {
        var context = document.getElementsByClassName('data2');
        const list = document.createElement("ul");
        list.className = "profilesWithoutFavorite"
        context[0].appendChild(list);
        
        context = document.getElementsByClassName('profilesWithoutFavorite')
        for(var i = 0; i < result[0].length; i++){
            const listItem = document.createElement("li");
            const link = document.createElement("a")
            link.href = result[1][i];
            link.innerText = result[0][i];
            listItem.appendChild(link);

            context[0].appendChild(listItem)
        }
});