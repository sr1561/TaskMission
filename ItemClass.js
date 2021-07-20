var MyItem = /** @class */ (function () {
    function MyItem(ID, TITLE, DESC, DATE, TIME) {
        this.Id = ID;
        this.Title = TITLE;
        this.Description = DESC;
        this.DueDate = DATE;
        this.DueTime = TIME;
    }
    return MyItem;
}());
var ItemCollection = /** @class */ (function () {
    function ItemCollection() {
        this.items = [];
    }
    ItemCollection.prototype.DeleteItem = function (taskId) {
        for (var index = 0; index < this.items.length; index++) {
            var item = this.items[index];
            if (item.Id == taskId) {
                localStorage.removeItem("item" + item.Id);
                this.items.splice(index, 1);
            }
        }
    };
    ItemCollection.prototype.AddItem = function (item) {
        this.items.unshift(item);
        // Put the object into storage
        localStorage.setItem("item" + item.Id, JSON.stringify(item));
    };
    return ItemCollection;
}());
