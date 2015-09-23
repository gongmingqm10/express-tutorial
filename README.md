# Express tutorial
Demo project to learn [Express](http://expressjs.com) which is a popular nodejs web framework. We try to use a simple end-to-end
project together with [React](http://facebook.github.io/react/).

## Generate express scaffold

As Rails web project, you need to install express framework before you want to use it. Please refer to this [instruction](http://expressjs.com/starter/installing.html).

Install express using node
```
npm install express --save
```

Install express-generator

```
npm install express-generator -g
```

Go to your destination folder

```
express .
```

This will generate the scaffold which contains all the necessary directory and the configuration files.

Go to the project root folder

```
npm install & npm start
```

Then you should successfully visit the `http://localhost:3000`

[![Express page][1]][1]
[1](http://github.com/gongmingqm10/express-tutorial/raw/master/public/images/express-home.png)

## Know Express Routes

Get to know your express routing. Plese refer to the [document](http://www.expressjs.com.cn/guide/routing.html).

We can find:

```
var express = require('express');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use('/', routes);
app.use('/users', users);
```

In the `routes/index.js`, we defined:

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

This will handle the get request `localhost:3000`.

In the `routes/users.js`, we defined:

```
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```

The request `localhost:3000/users` will be handled by this one.

## Config in app.js

All the configurations are declared in `app.js`. 

```
app.use(express.static(path.join(__dirname, 'public')));
```
Express set the `public` directory as the static resource. So the App got access to the static files in `public` folder.
Basically, from the scaffold, we could find the `images`, `javascripts` and `stylesheets`. We could refer the js, css and images
in the html template.

```
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
```

This part is aimed at view engine setup. Files under `views` could be rendered and back to browser. And the `jade` is the view engine.
That's why the files type is jade. [Learn more about Jade](http://jade-lang.com/).


## Reference

* [Express 中文资源](http://www.expressjs.com.cn/)
* [Express Official](http://www.expressjs.com)
* [Nodejs](https://nodejs.org)
* [NPM modules](https://www.npmjs.com/)
 



