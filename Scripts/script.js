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

//Phone menu:

function open_menu() {
    document.getElementById('phone-menu').style.top = '0';
}

document.getElementById('phone-menu').onclick = function (event){
    if (event.target.tagName == 'A' || event.target.id === "close"){
        document.getElementById('phone-menu').style.top = "-100vh";
    }
}

//Featured products:

var xml = new XMLHttpRequest
xml.open('GET', 'http://77.120.115.215:5000/api/get_products')
xml.send()
xml.onreadystatechange = function (){
    if (xml.readyState == 4 && xml.status == 200){
        let data = JSON.parse(this.responseText)
        console.log(data)
        for (i = 0; i < 8; i++){
            var div = document.createElement('div')
            div.className = 'product'
            document.getElementById('products').appendChild(div)
            div.innerHTML += '<img src=' + data.products[i].image + '>'
            var l = 0
            var t = []
            for (o = 0; o < data.products[i].title.split(' ').length; o++){
                l += data.products[i].title.split(' ')[o].length
                if (l > 13){break}
                t.push(data.products[i].title.split(' ')[o])
            }
            console.log(t)
            div.innerHTML += '<p class="pr_name">' + t.join(' ') + '...' + '</p>'
            div.innerHTML += '<p class="pr_price">$' + data.products[i].price + '</p>'
        }
    }
}

