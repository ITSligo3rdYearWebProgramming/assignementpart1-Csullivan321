const cars = [
    {"make":"VW","model":"Golf","year":"2003","fuel":"Diesel", "id":"C1"},
    {"make":"Nissan","model":"Micra","year":"2007","fuel":"Petrol", "id":"C2"},
    {"make":"VW","model":"Passat","year":"2009","fuel":"Diesel", "id":"C3"},
    {"make":"Toyota","model":"Starlet","year":"1998","fuel":"Petrol", "id":"C4"},
    {"make":"Toyota","model":"Chaser","year":"1999","fuel":"Petrol", "id":"C5"},

]

function deleteCar (id){
    console.log(`Removing ${cars[id].make}`)

    if(id < cars.length){
        cars.splice(id, 1);
        return cars;
    }
    else{
        return false;
    }
};

export default deleteCar;