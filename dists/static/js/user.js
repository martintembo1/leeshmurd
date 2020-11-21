var loader = document.querySelector('.loading');
var statusText = document.querySelector('.statusText');
/*async function resume(){
    alert(1)
    if(localStorage['soundHistory']){
        
        let page = localStorage['soundHistory'];
        show(page);
        alert('page: '+page)
        
    }
}*/
//resume();
window.artist = {}
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

async function register(){
    let ar_form = document.querySelector('.regi');
    let form_data = new FormData(ar_form);
    
    await request('post','',data=form_data)
    .then(c =>{
         view = JSON.parse(c);
        
        /*let img = document.createElement('img');
        alert(view.picture)
        let url = "/static/mobile/.temp/rFWVCjkZkIfVIjkGIxjxoSoYvqHBmfBXaqsjOjVvrPJXfJoGuJ.png"
    imageP.src = '/static/'+view.picture
    alert(imageP.src)
    root.style.backgroundImage =  `url('/static/${view.picture}')`
    root.style.backgroundSize = 'cover'
    root.style.backgroundRepeat = 'no-repeat'
    exp.style.display = 'none'
    //img.width = '50px'
    //alert(img.src)
    //imageHolder.innerHTML = '';
    //imageHolder.appendChild(img);*/
    })
    .catch(e =>{
        alert(e)
    });
    
    for(let p in ar_form){
        if(ar_form[p].value && ar_form[p].name){
            
            if(ar_form[p].name != 'picture'){
                
                //form_data.set(ar_form[p].name,ar_form[p].value)
            }
            form_data.set(ar_form[p].name,ar_form[p].value)
          
        }
    }
    
}
picture.oninput = async ()=>{
    
     let ar_form = document.querySelector('.regi');
    let form_data = new FormData(ar_form);
    
    await request('post','',data=form_data)
    .then(c =>{
         view = JSON.parse(c);
        
        let img = document.createElement('img');
        
    //let url = "/static/mobile/.temp/rFWVCjkZkIfVIjkGIxjxoSoYvqHBmfBXaqsjOjVvrPJXfJoGuJ.png"
        imageP.src = '/static/'+view.picture;
        //imageP.style.display = 'block'
    //alert(imageP.src)
        root.style.backgroundImage =  `url('/static/${view.picture}')`
        root.style.backgroundSize = 'cover'
        root.style.backgroundRepeat = 'no-repeat'
        exp.style.display = 'none'
    //img.width = '50px'
    //alert(img.src)
    //imageHolder.innerHTML = '';
    //imageHolder.appendChild(img);
    })
    .catch(e =>{
        alert(e)
    });
}

country.onchange = ()=>{if(country.value === 'zambia'){phoneNumber.type = 'number';phoneNumber.placeholder = '+260 999721134875';phoneNumber.name = 'phone';warning.innerHTML = 'Zambian Numbers only <i class="la la-warning c-green"></i>'}else{phoneNumber.type = 'email';phoneNumber.placeholder = 'Enter Your Email Address';phoneNumber.name = 'email';warning.innerHTML = '';}}