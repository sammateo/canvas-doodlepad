let canvas = document.querySelector('canvas');
let colorPicker = document.querySelector('#colorPicker')
canvas.width = window.innerWidth * .8;
canvas.height = window.innerHeight * .8;
canvas.style.display ='block'
canvas.style.margin = 'auto'

let c = canvas.getContext('2d');
let check = false
c.beginPath();
canvas.addEventListener('mousedown',function(e){
    check = true;
    let x = e.offsetX
    let y = e.offsetY
    c.moveTo(x,y);
    canvas.addEventListener('mousemove',function(e){
        c.strokeStyle = colorPicker.value

        if(!check){
            return;
        }
        let x = e.offsetX
        let y = e.offsetY
        c.lineTo(x,y);
        c.stroke();
    }) 

    canvas.addEventListener('mouseup',function(e){
        check =false;
        c.beginPath()
    })

})


canvas.addEventListener('touchstart',function(e){
    check = true;
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    c.moveTo(x,y);
    canvas.addEventListener('touchmove',function(e){
        c.strokeStyle = colorPicker.value

        if(!check){
            return;
        }
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        c.lineTo(x,y);
        c.stroke();
    }) 

    canvas.addEventListener('touchend',function(e){
        check =false;
        c.beginPath()
    })

})
