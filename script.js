//adding inputs
let arr = [];

const adding = (e) => {
    e.preventDefault()
    let todoAdd = document.getElementById("Todo__items_input").value;
    arr.push({
        addData:todoAdd
    })
    //storing localstorage
    localStorage.setItem("todoData",JSON.stringify(arr))
    // console.log(localStorage.getItem("todoData"));
    let pages  = JSON.parse(localStorage.getItem('todoData'));
    todoPage(pages);
}


const todoPage = (pages) => {
    let htmlCode = "";
    let Todo__modify = document.getElementById("Todo__modify");
    // console.log(page)
    pages.forEach( (addData,index)=> {
        console.log(addData,index);
        htmlCode += `<div key=${index} class='flex mb-4 items-center'>
        <p class='w-full text-grey-darkest'>${addData[index]}</p>`
    });
    Todo__modify.innerHTML = htmlCode; 
}

//load listener
window.addEventListener("load",function() {
    document.getElementById("add").addEventListener("click",adding)
})



// pages.forEach( (addData,index)=> {
//     for (x in addData){
//         console.log(addData[x]);
//     }
// });



// pages.forEach( (element)=> {
//     html += `<div> 
//         for (let index = 0; index < addData.length; index++) {
//             var element = addData[index];
//         }
//         </div>`
//         Todo__modify.innerHTML = element["addData"]
// });




// pages.forEach( (element)=> {
//     // html += `<div> 
//     //     for (let index = 0; index < addData.length; index++) {
//     //         var element = addData[index];
//     //     }
//     //     </div>`
//     Todo__modify.innerHTML += element["addData"]
// });