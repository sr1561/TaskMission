# TaskMission
this site implements tasks add\remove and present

Per requirments, it supports specififc style refer Images/mockup

Adding note can be found in form.html, it is added to main window as iFrame

function ProcessInput() - responsible for data validation
function PrintMsg() - provide feedback to customer, print msg as alert
function cleanInput() - clean all input fields

JS was written with TS, refer ItemClass.ts
class MyItem - this is to support generic item, used here for note(title is empty)
    public Id : number;
    public Title :string;
    public Description : string;
    public DueDate : string;
    public DueTime : string;

class ItemCollection - holds an array of items
    public items : MyItem[]=[]
function DeleteItem(taskId:number) - gets task Id and removes it from items array. Also, removes from local DB  using JSON as it was required to implement by John Bryce - might be used later but currently only manages Local DB is in sync with items array

function AddItem(item :MyItem)  - gets task(after data was validated) and adds it from items array. Also, adds to local DB using JSON as it was required to implement by John Bryce - might be used later but currently only manages Local DB is in sync with items array

index.HTML
function AddTask(task) - calls adding task supplied by class(refer above - AddItem) and then request to Print on scrren , see below

function DeleteTask(id) - calls removing task supplied by class(refer above - DeleteItem) and then request to Print on scrren , see below

function PrintToScreen() - print tasks array , each object as different card


