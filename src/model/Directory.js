import DirectoryItem from "./DirectoryItem";
class Directory {

    constructor() {
        this.contacts = this.loadFromLocalStorage();
    }

    add(contact) {
        if(contact.name === "" || contact.phone === ""){
            return
        }
        if(contact.phone.length >10){
            return
        }
        this.contacts.push(contact);
        this.saveToLocalStorage();
    }

    delete(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();
    }

    changeState() {
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('contact-data', JSON.stringify(this.contacts));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('contact-data');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
            if (key === "date") {
                value = new Date(value);
            }
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let directoryItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            directoryItems.push(DirectoryItem.fromJSON(jsonParsed[i]));
        }

        return directoryItems;
    }

}
export default Directory;