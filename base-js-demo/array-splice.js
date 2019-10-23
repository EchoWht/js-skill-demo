// 在数组的某个位置插入数据
var arr=[
   0,1,2,3,4
]
console.log(arr)

arr.splice(0, 0, "在数组开头插入的数据");
arr.splice(2, 0, "在数组索引为1后插入的数据");
console.log(arr)

// 在数组的某个位置删除数据
arr.splice(0, 1); //删除第一个数据
arr.splice(1, 1);//删除索引为1的数据
console.log(arr)
