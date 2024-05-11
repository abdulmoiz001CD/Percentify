
const formInputEl = document.getElementById("formInput");
const resultEl =document.getElementById("result")

const calculateMarks =(event)=>{
event.preventDefault();

const maxMarks = 800;
const formData = new FormData(formInputEl);

const data ={};

formData.forEach((value,key)=>{
    data[key] = +value;
})


const obtainMarks = data.math + data.science + data.urdu + data.islamiyat;
const perCentage = Math.floor((obtainMarks/maxMarks)*100);
resultEl.innerText= `You Got ${obtainMarks} Marks Out of Your ${maxMarks} and Your Percentage is ${perCentage}%`;

}


formInputEl.addEventListener("submit",calculateMarks)






