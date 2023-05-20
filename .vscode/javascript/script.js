// var ages = [20,18,19,25]

// var isAll = ages.every(function (userAge) {
//     return userAge > 17
// })

// console.log(isAll)

////////////////////////////////////////////////

// فرض کنید پلتفرمی مثل تلگرام ساخته اید و چند نفر در آن یک گروه ایجاد کردند
// و قصد ایجاد تماس کنفرانسی دارند

// اما شرط لازم برای ایجاد تماس کنفرانسی بالای 18 سال بودن اعضای گروه است
// اگر تمامی اعضا بالای 18 سال نبودند، اجازه ایجاد تماس کنفرانسی را ندهید

var telegeram_group = [
    {id:1,name:"mahasa",age:22},
    {id:2,name:"reza",age:15},
    {id:3,name:"sanaz",age:32},
    {id:4,name:"mersad",age:21}
]

var isAll = telegeram_group.every(function (ages) {
    return ages.age > 18
})

if (isAll === true) {
    console.log("You can call")
} else {
    console.log("You can not call")
}