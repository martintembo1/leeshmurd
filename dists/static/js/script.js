var loader = document.querySelector('.loading');
var statusText = document.querySelector('.statusText');
async function resume(){
    alert(1)
    if(localStorage['soundHistory']){
        
        let page = localStorage['soundHistory'];
        show(page);
        alert('page: '+page)
        
    }
}
//resume();
async function req(method,url,data=null){
    if(data){
        let retry;
    retry = setInterval(function(){
    request(method,url)
    .then((c)=>{
        loader.classList.add('none');
        root.innerHTML = c;
        clearInterval(retry);
    })
    .catch((e)=>{
        root.innerHTML = ""
        loader.classList.remove('none');
    });
    
    },0);
    }else{
        let retry;
    retry = setInterval(function(){
    request(method,url)
    .then((c)=>{
        loader.classList.add('none');
        root.innerHTML = c;
        clearInterval(retry);
    })
    .catch((e)=>{
        root.innerHTML = ""
        loader.classList.remove('none');
    });
    
    },0);
    }
}

function show(url){
  let retry;
    retry = setInterval(async function(){
    await request('get',url)
    .then((c)=>{
        loader.classList.add('none');
        root.innerHTML = c;
        clearInterval(retry);
    })
    .catch((e)=>{
        root.innerHTML = ""
        
        statusText.textContent = 'Something went wrong';
        loader.classList.remove('none');
    });
    
    },0);
}




const aside = ()=>{
    header.classList.toggle('flx-r');
    header.classList.toggle('flx-rv');
    asideNav.classList.toggle('active');
}

window.onoffline= function(event){
    netState.style.backgroundColor = 'crimson';
    netState.classList.remove('none');
    validate.textContent = 'Please check your internet connection.'
}
window.ononline = function(event){
    netState.style.backgroundColor = '#0E9E00';
    validate.textContent = 'Your connection is back.'
    setTimeout(e =>{netState.classList.add('none');},2000);
}

root.onclick = () =>{
    
    asideNav.classList.add('inactive');
}

window.onclick = (ev) =>{
    if(ev.target.dataset.link){
        asideNav.classList.add('inactive')
        asideNav.classList.remove('active')
        header.classList.remove('flx-rv')
        header.classList.add('flx-r')
        show(ev.target.dataset.link)
    }
}

async function search(){
    mysearch.classList.toggle('w90');
   /* setTimeout(function() {
        mysearch.classList.toggle('w80')
    }, 1000);*/

}

async function play(url){
    let song = url.dataset.song;
    let audioFile = new Audio(song);
    /*if(audioFile.paused){
        audioFile.play()
    }else{
        audioFile.pause()
    }
    */
    (audioFile.play()) ? audioFile.play() : audioFile.pause();
    setInterval(e => {
        seconds.textContent = Math.floor(audioFile.currentTime);
        if(audioFile.currentTime == 60){
            minutes.textContent = eval(minutes.textContent+'+'+1)
        }
    },0)
    /*
    for(let p in audioFile){
        alert(p)
        alert(audioFile[p])
    }*/
}

function showColor(img){
    
    var myCover = document.createElement('img');
    myCover.setAttribute('src',img.src);
    
    
    var vibrant = new Vibrant(img);
    
    
    let swatches = vibrant.swatches();
    
    let color = swatches.DarkVibrant.getHex();
    header.style.backgroundColor = color;
    /*
    alert(swatches.getHex())
    */
}

