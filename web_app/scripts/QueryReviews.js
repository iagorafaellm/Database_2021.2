//Query 4: All reviews

$.get("http://localhost:3000/reviews", (result) => {
    var data = document.getElementsByClassName("data4");
    
    for(var i = 0; i < result[0].length; i++){

        const reviewCard = document.createElement("div");
        reviewCard.className = "reviewCard";

        const info = document.createElement("div");
        info.className = "info";

        const title = document.createElement("h2");
        title.innerText = result[0][i];
        title.style = "font-size: 1.75em; color: #2E529D";

        const profile = document.createElement("h4");
        profile.innerText = result[1][i];
        profile.style = "color: rgba(20, 34, 49, 0.72);";

        const score = document.createElement("h4");
        score.innerText = result[3][i];
        score.style = "color:black;";
        
        const link = document.createElement("a");
        link.href = result[2][i];

        const buttonReview = document.createElement("div");
        buttonReview.className = "buttonReview";

        const buttonText = document.createElement("h2");
        buttonText.innerText = "Read This Review";

        buttonReview.appendChild(buttonText);
        link.appendChild(buttonReview);
        info.appendChild(title);
        info.appendChild(profile);
        info.appendChild(score);
        info.appendChild(link);
        reviewCard.appendChild(info);

        data[0].appendChild(reviewCard);
    }
});