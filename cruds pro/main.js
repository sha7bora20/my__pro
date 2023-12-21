let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let datee = document.getElementById('date');
let time = document.getElementById('time');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

let span = document.getElementById("validation");

let mood = 'create';
let tmp;


window.onload = function(){
    title.focus();
};


// get total
function getTotal()
{
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.value = result;
        total.style.background = '#040';
    }else
    {
        total.value = '';
        total.style.background = '#111';

    }
}



// create product

let datapro = [];
if(localStorage.product != null)
{
    datapro = JSON.parse(localStorage.product)
}else
{
    datapro = [];
}


// function showErorr(){
//     if(title.value == ''){
//         validation.style.display = "block";
//     }else{
//         validation.style.display = "none";
//     }
// }


submit.onclick = ()=>{
    let newpro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.value,
        datee: datee.value,
        time: time.value,
        count: count.value,
        category: category.value.toLowerCase(),

    }

    //clean data
    if( title.value != '' && price.value != '' 
        && count.value <= 50 && category.value != '')
    {
        if(mood === 'create'){
            // count
            if(newpro.count >= 1){
                for(let i=0 ; i< newpro.count ; i++)
                {
                    datapro.push(newpro);
                }
            }else{
                
            }
        }else{
            datapro[tmp]= newpro;
            mood = 'create';
            submit.innerHTML = 'Create';
            count.style.display = 'block';
            submit.style.background = " #1a348c";
            submit.style.color = "#fff";
        }
    }
    
    else if(title.value == '')
    {


        alert("Enter Title");
        title.focus();

        price.value = datapro[i].price;
        taxes.value = datapro[i].taxes;
        ads.value = datapro[i].ads;
        discount.value = datapro[i].discount;
        total.value = datapro[i].total;
        datee.value = datapro[i].datee;
        time.value = datapro[i].time;
        category.value = datapro[i].category;
    }


    else if(price.value == '')
    {
        alert("Enter price");
        price.focus();
        title.value = datapro[i].title;
        taxes.value = datapro[i].taxes;
        ads.value = datapro[i].ads;
        discount.value = datapro[i].discount;
        total.value = datapro[i].total;
        datee.value = datapro[i].datee;
        time.value = datapro[i].time;
        category.value = datapro[i].category;
    }


    else if(category.value == '')
    {
        alert("Enter category");
        category.focus();
        price.title = datapro[i].title;
        price.value = datapro[i].price;
        taxes.value = datapro[i].taxes;
        ads.value = datapro[i].ads;
        discount.value = datapro[i].discount;
        total.value = datapro[i].total;
        datee.value = datapro[i].datee;
        time.value = datapro[i].time;
    }
    
    
    // save localStorage
    localStorage.setItem('product' , JSON.stringify(datapro ));

    
    showdata();
}





    




// clear inputs 

function clearData()
{
    title.value = '';
    price.value= '';
    taxes.value= '';
    ads.value= '';
    discount.value= '';
    total.value= '';
    datee.value= '';
    time.value= '';
    count.value= '';
    category.value= '';
}



{/*
<td>${datapro[i].price}</td>
 <td>${datapro[i].taxes}</td>
<td>${datapro[i].ads}</td>
<td>${datapro[i].discount}</td>
<td>${datapro[i].total}</td>
<td>${datapro[i].datee}</td>
<td>${datapro[i].time}</td> */}

{/* <td><button onclick="openmodal(${i})"> Show</button></td> */}




// read
function showdata()
{
    getTotal();
    let table = '';
    for(let i= 0 ; i < datapro.length ; i++)
    {
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].datee}</td>
            <td>${datapro[i].time}</td>
            <td>${datapro[i].category}</td>

            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
           
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(datapro.length > 0)
    {
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">delete All (${datapro.length})</button>
        `
    }else{
        btnDelete.innerHTML = '';
    }

    clearData();
}
showdata()

// let model_body =document.querySelector(".modal-body");

// let showmodal = () =>{
//     model.classList.toggle("none");
// }

// let openmodel = (i) =>{
//     // showmodal();
//     // model_body.innerHTML = `
//     // 
//     //     
//     //        ${datapro[i].price}
//     //        ${datapro[i].taxes}
//     //        ${datapro[i].ads}
//     //        ${datapro[i].discount}
//     //        ${datapro[i].total}
//     //        ${datapro[i].datee}
//     //        ${datapro[i].time} 
//     // 
    
//     // `
//     console.log(i);
// }


// delete

function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showdata()
}

function deleteAll(){
    if(confirm("Are you sure")){
        localStorage.clear();
        datapro.splice(0);
        showdata()
        clearData()
    }
}




// update
function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    total.value = datapro[i].total;
    datee.value = datapro[i].datee;
    time.value = datapro[i].time;
    count.style.display = 'none';
    category.value = datapro[i].category;
    submit.innerHTML = 'update';
    mood = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior: 'smooth',
    })
    submit.style.background = " #d2d21a";
    submit.style.color = "black";
    onload();
    

}




// search 
let searchMood = 'title';

function getSearchMood(id)
{  
    let search = document.getElementById('search');
    if(id == 'searchtitle')
    {
        searchMood = 'title';
    }
    else
    {
        searchMood = 'category';
    }

    search.Placeholder = "Search By " + searchMood;
    search.focus();
    search.value = '';
    showdata();
    
}


function searchData(value)
{
    let table = '';
    for(let i = 0 ; i < datapro.length; i++){
    if(searchMood == 'title'){
        if(datapro[i].title.includes(value.toLowerCase())){
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].discount}</td>
                    <td>${datapro[i].total}</td>
                    <td>${datapro[i].datee}</td>  
                    <td>${datapro[i].time}</td>  
                    <td>${datapro[i].category}</td>  
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                `
        }    
    }

    else
    {    
        if(datapro[i].category.includes(value.toLowerCase())){
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].discount}</td>
                    <td>${datapro[i].total}</td>
                    <td>${datapro[i].datee}</td>
                    <td>${datapro[i].time}</td>
                    <td>${datapro[i].category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                `
        }
    }

}
    document.getElementById('tbody').innerHTML = table;

    clearData();
}


// Date

let date = new Date();

console.log(date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear());

console.log("========================");

console.log(date.getHours() + ":" + date.getMinutes());

console.log(date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear());

console.log("========================");

console.log(date.getHours() + ":" + date.getMinutes());



