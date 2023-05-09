const express = require("express"); // web 라이브러리
const path = require("path"); // 현재경로
const morgan = require("morgan"); // 개발시에 로그 확인 하는 라이브러리
const nunjcks = require("nunjucks");

const indexRouter = require("./route");
const usersRouter = require("./route/users");
const commentsRouter = require("./route/users");

const app = express();
app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");
nunjcks.configure("view", {
  express: app,
  watch: true,
});

app.use(morgan("dev")); // 개발시에 로그 확인 하는 라이브러리

app.use(express.static(path.join(__dirname, "public"))); //url주소에 파일 이름으로 추가. <- public 폴더 안에 있는 파일들을 url주소에 추가? 
app.use(express.static(path.join(__dirname, "img")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/comments', commentsRouter);

const {User,Comment} = require('./model/db')

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 서버 시작");
});

// const express = require('express'); //web 라이브러리
// const path = require('path'); //public
// const morgan = require('morgan');
// const nunjucks = require('nunjucks');

// const IndexRouter = require('./route');
// const UserRouter = require('./route/users');
// const CommentsRouter = require('./route/comments');

// const app = express();
// app.set('port', process.env.Port || 3001);
// app.set('view engine', 'html');
// nunjucks.configure('view', {
//     express: app,
//     watch: true
// }); //nunjucks에서 여기 view적힌곳이 폴더 이름임.. 여기에 있는 html을 사용하겠다 그런?

// app.use(morgan('dev')); //개발시 로그 확인하는 라이브러리 morgan
// app.use(express.static(path.join(__dirname, 'public'))); //ulr경로로 지정해줄 수 있다. public 폴더 아래 있는 파일들을 /파일이름 으로..
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use('/', IndexRouter);
// app.use("/users", UserRouter);
// // app.use("/", CommentsRouter);

// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 서버 시작');
// })
