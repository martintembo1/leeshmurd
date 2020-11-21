async function post(url,data){
    let retry;
    retry = setInterval(function(){
    request('post',url,data)
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
async function show(url){
  let retry;
    retry = setInterval(async function(){
    await request('get',url)
    .then((c)=>{
        //loader.classList.add('none');
        root.innerHTML = c;
        clearInterval(retry);
    })
    .catch((e)=>{
        root.innerHTML = ""
        //loader.classList.remove('none');
    });
    
    },0);
}
async function req(method,url,data=null){
    if(data){
        let retry;
    retry = setInterval(function(){
    request(method,url)
    .then((c)=>{
        //loader.classList.add('none');
        root.innerHTML = c;
        clearInterval(retry);
    })
    .catch((e)=>{
        root.innerHTML = ""
        //loader.classList.remove('none');
    });
    
    },0);
    }else{
        let retry;
    retry = setInterval(function(){
    request(method,url)
    .then((c)=>{
        //loader.classList.add('none');
        root.innerHTML = c;
        clearInterval(retry);
    })
    .catch((e)=>{
        root.innerHTML = ""
        //loader.classList.remove('none');
    });
    
    },0);
    }
}

window.onclick = function(ev){
    if(ev.target.dataset.link){
        
        show(ev.target.dataset.link);
    }
}
async function login(){
    
    let myForm = document.querySelector('.myForm');
    let formdata = new FormData(myForm);
    request('post','login/',formdata)
        .then((c)=>{
        alert(c)
    
    })
    .catch((e)=>{
        alert(e)
    })

}

async function register(){
    let inputs = document.querySelectorAll('input');
    //window.instaForms = sp;
    
    window.register = {}
    for(let i=0; i<inputs.length;i++){
        window.register[inputs[i].name] = inputs[i].value
    }
    
    await request('get','register/next/')
    .then(c =>{
        
        root[0].innerHTML = c;
    })
    .catch(e =>{
        alert('not')
    })
}
async function register2(el){
    let fs = document.querySelector('.myForm')
    //let formData = new FormData()
    el.classList.add('none')
    let user = window.register;
    alert(user)
    
    for(let p in user){
        let input = document.createElement('input');
        input.name = p;
        input.value = user[p];
        fs.appendChild(input);
    }
    let formData = new FormData(fs)
    //formData.set('test','ok')
    //formData.set('country',country.value)
    
    await request('post','register/next/',formData)
    .then(c =>{
        user = JSON.parse(c)
        if(user.state){
            alert(user.username)
        }else{
            fs.classList.add('none')
            netState.classList.remove('none');
        }
    })
    .catch(e =>{
        alert(e)
    });
}
function back(url){
    request('get',url)
    .then(c =>{
        root.innerHTML = c;
    })
    .catch(e =>{
        alert(e)
    })
}
async function back2(){
    await request('get','login/')
    .then(c =>{
        
        root[0].innerHTML = c;
    })
    .catch(e =>{
        alert(e)
    })
}
/*
window.ononline = function(event){
    netState.style.backgroundColor = '#0E9E00';
    validate.textContent = 'Your connection is back.'
    setTimeout(e =>{netState.classList.add('none');},2000);
}
*/
