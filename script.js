var bill = document.querySelector('.inp') ,
people = document.querySelector('.ppo'),
custom = document.querySelector('.custom') ,
cant = document.querySelector('.cant') ,
tap = document.querySelector('.tap') ,
ttp = document.querySelector('.ttp') ,
spans = document.querySelectorAll('.span');


custom.addEventListener('blur', ()=>{
    checkInps(parseInt(custom.value))
})


custom.addEventListener('keydown', (e)=>{

    if(e.keyCode === 13) {
        checkInps(parseInt(custom.value))
    }
})
calculateTip = (percent) =>{

    
    let initialTip = parseInt(bill.value) * (percent / 100);
    let perPerson = initialTip / parseInt(people.value);

    tap.innerText = '$' + parseInt(perPerson);
    ttp.innerText = '$' + parseInt(initialTip);

    // console.log(initialTip);
    // console.log(perPerson);

}

checkInps = (ff) => {
    if (bill.value == '') {
        bill.style.border = "2px solid red";
    } else if ( people.value == '' || people.value == 0) {
        people.style.border = "2px solid red";
        cant.style.display = "inline-block";
    } else {
        cant.style.display = "none";
        calculateTip(ff);
    }
}

spans.forEach(span=> {
    span.addEventListener('click', ()=>{
        let gg = span.innerText,
        ff = gg.replace(/%$/ , '');
        checkInps(parseInt(ff))
    })
})