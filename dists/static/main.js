(async function(){
    await request('get','/home')
    .then((content)=>{
        //alert(content)
        root.innerHTML = content;
    })
    .catch((error)=>{
        alert(error)
    });
    
        
    await request('get','/header')
    .then((header)=>{
        headerUI.innerHTML = header;
    })
    .catch((error)=>{
        alert(error)
    });
    await request('get','/free')
    .then(async c =>{
        freeUI.innerHTML = c;
        let videoTag = document.querySelector('#videos');
    await queryVideos()
    .then(videoObject =>{
        for(let p in videoObject){
            let vid = document.createElement('video');
            let title = document.createElement('span');
            let videoTitle = document.createElement('span');
            videoTitle.setAttribute('class','bg-white c-black gfont pd5 ');
            
            title.setAttribute('class','bg-white c-black  pd5');
            
            title.textContent = p;
            videoTitle.textContent = videoObject[p]['title']
            vid.setAttribute('controls','');
            vid.setAttribute('class','w100')
            for(let i in videoObject[p]){
                vid.setAttribute(`data-${i}`,videoObject[p][i]);
                vid.src = videoObject[p]['url'];
            }
            videoTag.appendChild(title);
            videoTag.appendChild(videoTitle)
            videoTag.appendChild(vid);
        }
    })
    .catch(error =>{
        videoTag.innerHTML = error;
    })
    })
    .catch(e =>{
        alert(e);
    });
})();

async function page(url) {
    await request('get',url)
    .then(c =>{
        
        root.innerHTML = c;
    })
}



function asideBarA() {
    asidebar.classList.toggle('active');
    if(asidebar.classList.contains('active')){
        
        headerBar.classList.add('flx-rv');
        //.classList.toggle('flx-r');
        
    } else {
        headerBar.classList.remove('flx-rv')
    }
}

window.onclick = async (ev) => {
    let data_url = ev.target
    if(data_url.dataset.link) {
        let url = data_url.dataset.link;
        await page(url);
    }
}

const queryVideos = async () =>{
    let videosObject = new Promise(async (resolve,reject) => {
        await request('get','/videos/object')
        .then( objects => {
            
            resolve(JSON.parse(objects))
        })
        .catch( error =>{
            reject(error)
        });
    });
    return videosObject;
    
}
const expandNextChild = async (el) =>{
    el.nextElementSibling.classList.toggle('none');
    el.nextElementSibling.classList.toggle('p20');
    
    //alert(videoTag)
}
var audio = new Audio();
const latest = async (el) =>{
    await request('get','/mp3/latest')
    .then( song =>{
        
        let songI = JSON.parse(song);
        
        //audio.play()
        /*for(let p in audio){
            alert(p)
        }*/
        //alert(audio.currentSrc)
        if(audio.paused == true){
            audio.src = songI.url;
            audio.play();
            
            el.innerHTML = '<i class="icofont-pause c-white pt20"></i>'
        } else {
            audio.pause();
            el.innerHTML = '<i class="icofont-play-alt-2 c-white pt20"></i>';
        }
    })
    .catch( error =>{
        alert(error)
    });
    
    
}

/*const closeNextChild = (el) => {
    el.nextElementSibling.classList.
}*/