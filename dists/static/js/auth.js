async function auth(){
    let resp = new Promise( async (resolve,reject)=>{
        await request('get','home/')
        .then(content => {
            options = {
                "page":request,
                "content":content
            }
            resolve(options)
            
            root.innerHTML = content;
        })
        .catch( error => {
            alert(error)
            
        });
    });
    return resp;
    
}
auth()
.then(async c => {
    let content = options.page('get','register/');
    content.then(y =>{
        
        root.innerHTML = y;
    }).catch( x => alert('6'));
})
.catch(e =>{
    
})