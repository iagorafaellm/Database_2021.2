//Query 4: All reviews

$.get("http://localhost:3000/reviews", (result) => {
        var context = document.getElementsByClassName('data4');
        
        for(var i = 0; i < result[0].length; i++){
            const card = document.createElement("div");
            card.className = "review-card";

            const animename = document.createElement("h4");
            animename.className = "review-card-anime-name";
            animename.innerText = result[0][i];
            card.appendChild(animename);

            const profilename = document.createElement("h4");
            profilename.className = "review-card-profile-name";
            profilename.innerText = result[1][i];
            card.appendChild(profilename);
            
            const reviewtext = document.createElement("p");
            reviewtext.innerText = result[3][1];
            card.appendChild(reviewtext);

            const link = document.createElement("a");
            link.href = result[2][1]
            link.innerText = result[2][i];
            card.appendChild(link);


            context[0].appendChild(card)
        }
});