class DirectoryItem{

    constructor(name, phone, date) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.phone = phone;
        this.date = date;
    }

    static fromJSON(json){
        let directoryItem = new DirectoryItem();
        directoryItem.id = json.id;
        directoryItem.name = json.name;
        directoryItem.phone = json.phone;
        directoryItem.date = json.date;

        return directoryItem;
    }
}
export default DirectoryItem;