const btn = document.querySelector("button");
let toastContainer= document.querySelector(".task-bar")


const success = "Submitted Successully";
const error = " Fix The Error !";
const invalid = " Invalid Input";

function ShowToast(msg) {
    const toast=document.createElement('div')
    toast.className='toast';

    toastContainer.appendChild(toast)
    toast.innerHTML=msg;

    setTimeout(function(){
        toast.remove();
    },5000)
}
