let cardFactory = (()=>{
    const createFoodCard = (img_url, description = '') => {
        let card = document.createElement('div');
            card.classList = 'food-card';
        let img_card = document.createElement('div');
            img_card.classList = 'food-card-picture';
        let img = document.createElement('img');
            img.alt = 'broken';
            img.src = img_url;
            img_card.appendChild(img);
            card.appendChild(img_card);
        let description_card = document.createElement('div');
            description_card.classList = 'food-card-description';
            description_card.textContent = description;
            card.appendChild(description_card);
        return card;
    };
    return {createFoodCard};
})();
export default cardFactory;
/*
<div class="food-card">
    <div class="food-card-picture">
        <img alt="broken" src="https://www.w3schools.com/images/w3schools_green.jpg">
    </div>
    <div class="food-card-description">
        Wow food.
    </div>
</div>
*/