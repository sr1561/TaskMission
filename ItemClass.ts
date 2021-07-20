
class MyItem{
    public Id : number;
    public Title :string;
    public Description : string;
    public DueDate : string;
    public DueTime : string;
    
    constructor(ID:number,TITLE: string,DESC: string,DATE: string,TIME: string){
        this.Id=ID
        this.Title=TITLE
        this.Description=DESC
        this.DueDate=DATE 
        this.DueTime=TIME
      }
}

class ItemCollection {
    public items : MyItem[]=[]
    
    DeleteItem(taskId:number){
    for (let index = 0; index < this.items.length; index++ ) {
        const item= this.items[index];
        if (item.Id == taskId) {
            localStorage.removeItem(`item${item.Id}`)
            this.items.splice(index,1)
        }
    }
    }
    AddItem(item :MyItem){
        this.items.unshift(item)
        // Put the object into storage
        localStorage.setItem(`item${item.Id}`, JSON.stringify(item));

    }  
}


