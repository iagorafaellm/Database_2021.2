//Query 1: Top 10 animes

$.get("http://localhost:3000/top10", (result) => {
        var main = document.getElementsByTagName("main");
        var rownum;
        
        for(var i = 0; i < result[0].length; i++){

            const animeCard = document.createElement("div");
            animeCard.className = "animeCard";

            const container = document.createElement("div");
            container.className = "container";

            const animeImg = document.createElement("img");
            animeImg.className = "animeImg";
            animeImg.src = result[4][i];

            const info = document.createElement("div");
            info.className = "info";

            const id = document.createElement("h4");
            id.innerText = result[1][i];

            const title = document.createElement("h3");
            title.innerText = result[2][i];

            const rating = document.createElement("div");
            rating.className = "rating";

            const icon = document.createElement("img");
            icon.className = "icon";
            icon.src = "../assets/fi_smile.png";

            const score = document.createElement("h4");
            score.innerText = result[3][i];

            const ranking = document.createElement("h4");
            ranking.innerText = result[0][i];

            rating.appendChild(icon);
            rating.appendChild(score);
            info.appendChild(id);
            info.appendChild(title);
            info.appendChild(rating);
            container.append(animeImg);
            container.appendChild(info);
            container.appendChild(ranking);
            animeCard.appendChild(container);

            if(i%2 == 0){
                rownum = document.createElement("div");
                rownum.className = "line";
            }

            rownum.appendChild(animeCard)
            main[0].appendChild(rownum);
        }
});