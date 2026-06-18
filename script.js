const cInput = document.querySelector(".C");
const fInput = document.querySelector(".F");
const kInput = document.querySelector(".K");

function celsius(){
    const celsius =  Number(cInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    fInput.value = fahrenheit;
    kInput.value = kelvin;
}

function fahrenheit(){
    const fahrenheit = Number(fInput.value);
    const celsius = (fahrenheit -32) * 5/9;
    const kelvin = celsius + 273.15;
    cInput.value = celsius;
    kInput.value = kelvin;
}

function kelvin(){
    const kelvin = Number(kInput.value);
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    cInput.value = celsius;
    fInput.value = fahrenheit;
}

cInput.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        celsius();
    }
})
fInput.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        fahrenheit();
    }
})
kInput.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        kelvin();
    }
})


