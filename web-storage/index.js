(function () {
    // object
    let revenue = {
        title: 'Omelet',
        amount: 5,
        ingredients: [
            '2 eggs',
            '1 tablespoon of butter',
            '1 tablespoon of milk',
            'sal'
        ],
    };

    console.log(revenue.title);
    console.log(`Serves: ${revenue.amount} persons`);
    console.log(`Ingredients: `);
    for(let e of revenue.ingredients){
        console.log(e);
    }

    // to send to local storage
    // It needs to be converteds to JSON
    let json = JSON.stringify(revenue);
    localStorage['favorite-revenue'] = json;
    // localstorage.setItem['Favorite-revenue', revenue];

    let revenues = [];
    revenues.push(revenue);
    localStorage.revenues = JSON.stringify(revenues);

    json = localStorage.getItem('favorite-revenue');
    revenue = JSON.parse(json);

    alert(revenue.title);

})();