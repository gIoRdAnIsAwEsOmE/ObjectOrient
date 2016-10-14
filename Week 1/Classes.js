// public Main(){} :)

class Store {
    constructor(name, place, specialty, audience, listofitems){
        this.name = name;
        this.place = place;
        this.specialty = specialty;
        this.audience = audience;
        this.items = listofitems;
        console.log(`Store Initiated:
                     Name: ${this.name}
                     Place: ${this.place}
                     Specialty: ${this.specialty}
                     Audience: ${this.audience}
                     Items: ${this.items}!
                     `);
    }
    set addItem(item){ // Another class.
        this.items.push(item);
        console.log(`Pushed an item!`);
    }
    
    get getItems(){
        return this.items;
    
    }
    
}

class Item {
     constructor(name, specialty){
        this.name = name;
        this.specialty = specialty;
        console.log(`New Product arrived! Name: ${this.name} Specialty: ${this.specialty}`);
     }
}