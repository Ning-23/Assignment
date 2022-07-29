const mainContent = document.querySelector("main");


fetch(
    'https://jsonplaceholder.typicode.com/posts'
)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((json) => {
        console.log(json);
        for(let i=0; i< json.length; i++){
            const card = document.createElement('div');
            card.className += "card";
            console.log(i%2);
            if (i % 2 === 0) {
                const category = document.createElement('span');
                category.className += "card__category";
                category.textContent = "World";
                card.appendChild(category);
            } else {
                const category1 = document.createElement('span');
                category1.className += "card__category-1";
                category1.textContent = "Design";
                card.appendChild(category1);
            }
            // card title
            const title = document.createElement('span');
            title.className += "card__title";
            title.textContent = json[i].title;
            card.appendChild(title);

            // card date
            const date = document.createElement('span');
            date.className += "card__date";
            date.textContent = "July 29";
            card.appendChild(date);

            // card content
            const content = document.createElement('p');
            content.className += "card__content";
            content.textContent = json[i].body;
            card.appendChild(content);

            // continue reading
            const link = document.createElement('a');
            link.className += "card__link";
            link.textContent = "Continue reading";
            link.href = "#";
            card.appendChild(link);
            mainContent.appendChild(card);

        }
        
    });