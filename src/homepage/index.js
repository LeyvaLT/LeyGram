var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/', header, 

/*  function loadPictures (ctx,nxt){
    request
    .get('/api/pictures')
    .end(function(err, res){
        if (err)  return console.log(err);
       ctx.pictures = res.body;
       nxt();
      });
  }, */
/*  function loadPictures (ctx,nxt){
    axios
    .get('/api/pictures')
    .then(function(res){
       res.pictures = res.data;
       nxt();
      })
    .catch(function(err){
      console.log(err);
    })
  },*/

/*  function loadPictures (ctx,nxt){
    fetch('./api/pictures')
      .then(function(res){
        return res.json()
      })
      .then(function(pictures){
        ctx.pictures = pictures;
        nxt();
      })
      .catch(function(err){
        console.log(err);
      });
    },*/

async function loadPictures (ctx,nxt){
    try{
      ctx.pictures = await fetch('/api/pictures').then(res => res.json());
      nxt();
    }catch(err){
      console.log(err);
    }
  },
    
  function (ctx,nxt) {
    title('LeyGram');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template(ctx.pictures));
  }
)

