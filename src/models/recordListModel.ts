const localStorageKeyName = 'recordList';
const Model = {
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data));
    },
    fetch(){
        // const x: RecordItem[] = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        // return x;
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    save(data: RecordItem[]){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    }
};

// export default Model
export  {Model}