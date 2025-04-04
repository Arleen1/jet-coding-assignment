const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/restaurants/:postcode', async (req, res) => {
    try {
        const response = await fetch(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${req.params.postcode}?limit=10`);
        const data = await response.json();
        const restaurants = get_restaurant_data(data.restaurants)
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

function get_restaurant_data(restaurantsData) {
    const restaurants = []
    for (restaurantObj of restaurantsData) {
        let restaurant = {
            name: restaurantObj.name,
            rating: {
                starRating: restaurantObj.rating.starRating,
                count: restaurantObj.rating.count
            },
            cuisines: restaurantObj.cuisines,
            address: {
                firstLine: restaurantObj.address.firstLine,
                city: restaurantObj.address.city
            },
            logoUrl: restaurantObj.logoUrl
        };
        restaurants.push(restaurant)
    }
    return restaurants
}

app.listen(5000, () => console.log('Server running on port 5000'));