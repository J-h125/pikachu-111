import  string from './css.js'

const player = {
    id:undefined,
    n:1,
    time:100,
    ui:{
        demo : document.querySelector('#demo'),
        demo2 : document.querySelector('#demo2')
    },
    init:()=>{
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.play()
       player.bindEvents()
    },
    bindEvents:()=>{
        const events = {
            '#btnPause' : player.pause,
            '#btnPlay' : player.play,
            '#btnSlow' : player.slow,
            '#btnNormal' : player.normal,
            '#btnFast' : player.fast,
        }
        for(let key in events){
            document.querySelector(key).onclick = events[key]
        }

    },
     run :()=>{
         player.n += 1
        if(player.n > string.length){
            window.clearInterval(player.id)
            return
        }
         player.ui.demo.innerText = string.substr(0,player.n)
         player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
     play : ()=>{
        player.id =  setInterval(player.run,player.time)
    },
     pause : ()=>{
        window.clearInterval(player.id)
    },
    slow : ()=>{
        player.pause()
        player.time = 300
         player.play()
    },
    normal : () =>{
        player.pause()
        player.time = 100
        player.id = player.play()
    },
     fast : () =>{
        player.pause()
         player.time = 0
       player.play()
    }
}
player.init()





