# Description

This web application will display 10 restaurants, with their four data points (name, cuisines, rating number and address), based on the entered postcode. To find the restaurant data it will use the provided API.

## Getting started

### Dependencies

Personally used:
- Visual Studio Code
- JavaScript (ES6) code snippets [VSCode extension]
- Vue.js [VSCode extension]

Needed:
- Node and npm
- Vue.js

### Installing

Install [Vue.js](https://vuejs.org/).

Install Node.js and npm on Mac with Homebrew or [here](https://nodejs.org/en).
```
brew install node
```

Install dependencies for server.
```
cd jet-backend
npm install
```

Install dependencies for frontend.
```
cd jet-frontend
npm install
```

### Executing program

To run the server.
```
cd jet-backend
node server.js
```

To run the frontend.

```
npm run dev
```

## Assumptions

- The rating consists of the `starRating` and the `count`, because the rating alone provides no useful information.
- Because the user is interested in the best restaurant in the postcode area that they searched for, the address is only of interest if the user actually wants to go there. Therefore the address is positioned below the other data points.
- Address consists of the `city` and `firstLine`, the `firstLine` contains the street name.

## Decisions

- A backend is needed to access the API data, [due to CORS, calls directly from the browser will fail](https://github.com/justeat/JustEat.RecruitmentTest).
- The backend limits the returned number of restaurants to 10 by adding `?limit=10` to the `fetch()` function. This reduces data traffic and therefore performance.
- The backend also filters out the four data points, this way the frontend will stay light and reduces traffic between the server and client.
- Although displaying the logo is not necessary, it will improve the user interface. It looks nice, but most importantly the user can quickly see what the restaurant is.

## Improvements

- Sorting the ten restaurants based on rating would be an improvement. The one with the highest rating will be on top so the user doesn't have to go through all the restaurants.
