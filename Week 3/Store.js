CB.CloudApp.init('njoumzczehoq', 'b883f979-5a5f-4d5f-8283-d9f4f657d91d');
let store = new CB.CloudObject("Store");

class Store {
    constructor(name, place, status, store_id, bool){
        this._store_id = store_id;
        this._name = name;
        this._place = place;
        this._status = status;
		if(bool){
			store.set("name", name);
			store.set("place", place);
			store.set("status", status);
			store.set("store_id", store_id);
			store.save({
				success : (obj) => {
					console.log(obj);
				}	
			});
		}
	}
	get name() {
		return this._name;
	}
	get id(){
		return this._store_id;
	}
    static get cloudobject (){
        return store;
    }
}