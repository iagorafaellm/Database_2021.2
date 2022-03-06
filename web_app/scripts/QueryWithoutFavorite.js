//Query 2: Profiles without any favorite animes

$.get("http://localhost:3000/withoutfavorites", (result) => {
        var context = document.getElementsByClassName('data2');
        for(var i = 0; i < 10; i++){
            const para = document.createElement("p");
            para.innerText = result[0][i];
            context[0].appendChild(para);
            const link = document.createElement("a")
            link.href = result[1][i];
            link.innerText = result[1][i];
            context[0].appendChild(link)
        }
});