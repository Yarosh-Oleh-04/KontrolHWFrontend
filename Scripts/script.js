// Helper slider:

function helper_slider(n){
    var slider = document.getElementById('helper-slides')
    var size = 80
    var r = 0
    for (i = 0; i < document.getElementsByClassName('others-dot').length; i++){
        if (document.getElementsByClassName('others-dot')[i].classList[1] == 'active'){
            document.getElementsByClassName('others-dot')[i].classList.remove('active')
            r = i
        }
    }
        document.getElementsByClassName('others-dot')[n].classList.add('active')
        slider.style.left = -n * size + 'vw'
    
}

//Face slider: cloneNode

var clone1 = document.getElementsByClassName('face-slide')[0].cloneNode(true)
var clone2 = document.getElementsByClassName('face-slide')[1].cloneNode(true)
var clone3 = document.getElementsByClassName('face-slide')[2].cloneNode(true)
var clone4 = document.getElementsByClassName('face-slide')[0].cloneNode(true)
var clone5 = document.getElementsByClassName('face-slide')[2].cloneNode(true)

clone4.classList.add('clone')
clone5.classList.add('clone')

document.getElementsByClassName('face-slides')[0].innerHTML = ''
document.getElementsByClassName('face-slides')[0].appendChild(clone5)
document.getElementsByClassName('face-slides')[0].appendChild(clone1)
document.getElementsByClassName('face-slides')[0].appendChild(clone2)
document.getElementsByClassName('face-slides')[0].appendChild(clone3)
document.getElementsByClassName('face-slides')[0].appendChild(clone4)

var left = -200
function face_slider(n){
    slider = document.getElementsByClassName('face-slides')[0]
    slider.style.transition = 'all .5s ease'
    if (n == 0){left += 100}
    if (n == 1){left -= 100}

    if (left == -400){
        slider.style.transition = ''
        slider.style.left = '0vw'
        setTimeout(function(){
            slider.style.transition = 'all .5s ease'
            left = -100
            slider.style.left = left + 'vw'
        },10)
    } else if(left == 0){
        slider.style.transition = ''
        slider.style.left = '-400vw'
        setTimeout(function(){
            slider.style.transition = 'all .5s ease'
            left = -300
            slider.style.left = left + 'vw'
        },10)
    } else {
        slider.style.left = left + 'vw'
    }
}