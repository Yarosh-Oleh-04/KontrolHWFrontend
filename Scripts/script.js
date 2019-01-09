// Helper slider: create cloneNode

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