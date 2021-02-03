// var record = {
//   tags:['1','2'],
//   notes:'xxxx'
//   type:'-'
//   amount:100
// }

// 声明一个类型
type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; //数据类型
    createdAt?: Date; //类 构造函数  ?表示这个字段可以没有
}