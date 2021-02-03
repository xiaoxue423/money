const localStorageKeyName = 'recordList';
const recordListModel = {
    // const deepClone = JSON.parse(JSON.stringify(this.record)); 深拷贝
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data));
    },
    fetch(){ //获取数据
        // const x: RecordItem[] = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        // return x;
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    save(data: RecordItem[]){ //保存数据
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    }
};

// export default Model
export  {recordListModel}