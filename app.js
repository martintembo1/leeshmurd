const moult = require('moult');
const process = require('process');
const cool = require('cool-ascii-faces');
var app = moult.app('leeshmurd');

app.use(moult.static({ host :'dists'}))

app.get('/',(req,res,rep) => {
	console.log(res)
	
	//res.json({'hi':'Hello World'});
	res.render('main',{})
});

app.get('/home',(req,res,rep) => {
    let song = {
        'title':'SÆD',
        'duration':'2:31',
        'release':'1 month ago',
        'cover':{'small':'link','big':'link'},
        'url':'static/mp3/trial.mp3'
    }
    res.render('home',song);
});

app.get('/header',(req,res,rep) => {
    let content = {
        "eventImage":"static/img/pic-3.jpg"
    }
    res.render('header',content)
});
app.get('/free',(req,res,rep) =>{
    let fs = {
        'main':[223,87,983]
    }
    
    res.render('free',fs);
});
app.get('/content',(req,res,rep) =>{
    let demo_post = `decore quaerendum offendit patrioque dicant dolores ius fames quis mucius`
    let content = {
        'one':{
            "title":"Lee Shmurd",
            "photo":null,
            "url":"/content/25",
            "date":"12/08/1998",
            "body":demo_post,
            "location":"Lusaka"
        },
        'two':{
            'title':'Releases new hit "SAD"',
            "photo":'cover',
            'url': 'static/mp3/trial.mp3',
            'date':'20-10-2020',
            "body":demo_post,
            'location':'Lusaka',
            
        }
    }
    
    res.render('content',content);
});
app.get('/videos/object',(req,res,rep)=>{
    let videos = {
        'taylor':{'title':'Calm Down','year':'2019','artist':'Taylor Swift','genre':'R&B','url':'static/vidz/trial.mp4'},
        'sia':{'title':'Alive','year':'2014','artist':'Sia Furler','genre':'pop','url':'static/vidz/trial-2.mp4'}
    }
    res.json(videos)
});
app.get('/mp3/object',(req,res,rep)=>{
    let videos = {
        'leeshmurd':{'title':'SÆD','year':'2020','artist':'leeshmurd','genre':'RAP','url':'static/mp3/trial.mp3'}
    }
});
app.get('/mp3/latest',(req,res,rep)=>{
     let song = {
        'title':'SÆD',
        'duration':'2:31',
        'release':'1 month ago',
        'cover':{'small':'link','big':'link'},
        'url':'static/mp3/trial.mp3'
    }
    res.json(song);
})
app.get('/cool',(res,req,rep)=>{
    res.send(cool())
})
var PORT = process.env.PORT;
app.listen(PORT);