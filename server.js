const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if ('character' in params){
      if (params['character'] == 'ricky'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let stealSmokesOrDapsResult = Math.ceil(Math.random() * 2) === 1 ? 'Steals your smokes!' : 'Daps you up.'
        const objToJson = {
          name: "Ricky",
          status: "Dumber than a calculator",
          currentOccupation: "Dope grower",
          stealSmokesOrDaps: stealSmokesOrDapsResult
        }
        res.end(JSON.stringify(objToJson));
      } // character = ricky
      else if (params['character'] == 'julian'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let stealSmokesOrDapsResult = Math.ceil(Math.random() * 2) === 1 ? 'Steals your smokes!' : 'Daps you up.'
        const objToJson = {
          name: "Julian",
          status: "Mrs. Peterson's grandson",
          currentOccupation: "Bootlegger",
          stealSmokesOrDaps: stealSmokesOrDapsResult
        }
        res.end(JSON.stringify(objToJson));
      }// character = julian
      else if (params['character'] == 'bubbles') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let stealSmokesOrDapsResult = Math.ceil(Math.random() * 2) === 1 ? 'Steals your smokes!' : 'Daps you up.'
        const objToJson = {
          name: "Bubbles",
          status: "Rockin' with his kitties",
          currentOccupation: "Cart Thief",
          stealSmokesOrDaps: stealSmokesOrDapsResult
        }
        res.end(JSON.stringify(objToJson))
      } // character = bubbles
    }// character if
  }// else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
