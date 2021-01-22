const localStorageKeyName = 'tagList';
const tagListModel = {
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
export  {tagListModel}