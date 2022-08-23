var text= document.getElementById("add-text")
var title= document.getElementById("advice_t")

axios.get("https://api.adviceslip.com/advice")
    
.then(function (res) {

        var info = res.data.slip
        text.innerHTML= '" ' + info.advice + ' "'
        title.innerHTML='ADVICE #'+ info.id
    })