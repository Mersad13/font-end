// var users = [
//     {id:1,name:"ali",age:22},
//     {id:2,name:"mohammad",age:23},
//     {id:3,name:"reza",age:24}
// ]

// var isIn_user = users.some(function(user) {
//     return user.name === "reza"
// })

// console.log(isIn_user)

////////////////////////////////////////////////////

// یک فروشگاه آنلاین پیاده سازی کنید

// به این شکل که محصولات فروشگاه خود را در دیتابیسی ذخیره کرده (آرایه) و آرایه ای برای سبد خرید کاربر داشته باشید
// و از کاربر اسم محصولی را که قصد اضافه کردن به سبد خرید دارد ، دریافت کنید

// اگر محصول درخواستی ک	اربر در انبار فروشگاه شما موجود بود، آن را به سبد خرید کاربر اضافه کنید
// و سپس مبلغ کل سبد خرید را محاسبه کرده و به کاربر نمایش دهید
// و در غیر این صورت به کاربر پیغام اتمام موجودی نمایش دهید

// :نکات قابل توجه
// بعد از اضافه محصول به سبد خرید کاربر، سبد را در کنسول نمایش دهید
// به طور دیفالت 3 محصول با قیمت های مختلف در سبد خرید کاربر موجود باشد

// var prouduts = [
//     {id:1,product_name:"tshirt",price:250},
//     {id:2,product_name:"shose",price:100},
//     {id:3,product_name:"cloths",price:300},
//     {id:4,product_name:"shawl",price:50},
//     {id:5,product_name:"jens",price:120},
//     {id:6,product_name:"kanani",price:80}
// ]

// var cart = [
//     {id:1,product_name:"tshirt",price:250},
//     {id:2,product_name:"shose",price:100},
//     {id:3,product_name:"cloths",price:300}
// ]

// var userProducts = prompt("Please add your product you want: ")

// var userRequesr;

// var isIn_produts = prouduts.some(function(prd) {
//     if (prd.product_name === userProducts){
//         userRequesr = prd
//         return true
//     }
// })

// if (isIn_produts === true) {
//     var newPruduct = {
//         id:userRequesr.id,
//         product_name:userRequesr.product_name,
//         price:userRequesr.price
//     }
//     cart.push(newPruduct)

//     var sum = 0
//     cart.forEach(function (sumProduct) {
//         sum+=sumProduct.price
//     })
// } else {
//     alert("That product dosen't exict")
// }
// console.log("All your product is = " , cart)
// console.log("All your produts price is = " , sum)

////////////////////////////////////////////////////////////