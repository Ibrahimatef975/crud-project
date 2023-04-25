// get total
// crate product
// save local storage
// clear inputs
// read
// count
// delete
// update
// search
// clean data

let title = document.getElementById( 'title')
let price = document.getElementById( 'price')
let ads = document.getElementById( 'ads')
let taxes = document.getElementById( 'taxes')
let discount = document.getElementById( 'discount')
let total = document.getElementById( 'total');
let count = document.getElementById( 'count')
let category = document.getElementById( 'category')
let submit = document.getElementById('submit')
// console.log(title, price, taxes, ads, discount, count, category, total, submit)


function getTotal() {
     // console.log('done');
     if ( price.value!= '')
     {
          let result = +price.value + +taxes.value + +ads.value - +discount.value
          total.innerHTML = result
          total.style.background='green'
     }
     else
     {
          total.innerHTML = '';
          total.style.background='red'
     }
}
// Create product
let datapro;

if ( localStorage.product!= null)
{
     datapro=JSON.parse(localStorage.product);
}
else
{
     datapro= [ ];
}
let datapro = []

submit.onclick = function () {
     let newpro = {
          title: title.value,
          price: price.value,
          taxes: taxes.value,
          ads: ads.value,
          discount: discount.value,
          total: ads.innerHTML,
          count:count.value ,
          category: category.value,
          


          
     }
     datapro.push(newpro)
     localStorage.setItem(   'product',   JSON.stringify(datapro) ) ;
     
     clear();
     showdata()

}

function clear() {
     title.value = ''
     price.value = ''
     taxes.value = ''
     ads.value = ''
     discount.value = ''
     count.value = ''
     category.value = ''
     total.innerHTML = ''


     
}
// read

function showdata() {
     let table = ''
     for ( let i=0; i<datapro.length;i++)
     {
          table += `
          <tr>
                    <td ${i}> 1</td>
                    <td> ${datapro[i].title}</td>
                    <td> ${datapro[i].price}</td>
                    <td> ${datapro[i].taxes}</td>
                    <td> ${datapro[i].ads}</td>
                    <td> ${datapro[i].discount}</td>
                    <td> ${datapro[i].total}</td>
                    <td> ${datapro[i].category}</td>
                    <td> <button id="update">update</button></td>
                    <td> <button onclick="deletedata(  ${i})"       id="delete"> del</button></td>
                    
          </tr>
         ` 
     }
     document.getElementById('tbody').innerHTML = table
     // let btn = document.getElementById('deleteAll')
     // if (datapro.length>0) 
     // {
     //      btn.innerHTML=``
     // }
     
}
showdata()

// delete
// function deletedata(i) {
//      console.log(i)
//      // datapro.splice(i, 1);
//      // localStorage.proudct = JSON.stringify(datapro);
     
// }
