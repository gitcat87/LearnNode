const { Sequelize } = require('sequelize'); //1.시퀄라이즈 생성
const { Model, DataTypes } = require('sequelize'); //2. 모델과 Datatype정의 //define에는 이걸 안씀.. 일단 그런줄만 알으셈  DataTypes만 사용을 한다

const sequelize = new Sequelize('nodelearn', 'root', 'root123', {
    host: "localhost",
    dialect: "mysql",
}) //1. 시퀄라이즈 DB접속 정보 생성

const User = sequelize.define('user', { //define 함수로 데이터테이블 명을 정해주고 들어갈 데이터 정보를 입력해준다
    username: {
        type: DataTypes.STRING, //객체로써 datatype을 정해주고 null 허용여부 체크
        allowNull:false
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
    },
    married: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}) //const User안에는 user테이블을 명명하고 만드는 sequilize.define함수가 들어있다.


const Comment = sequelize.define('comment', {
    userid: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

User.hasMany(Comment, { foreignKey: "commenter", sourceKey: "id" }) //User가 Comment의 데이터를 많이 가지고 있다
                        //외부키로 commenter를 만들었고 기존 참조키는 usertable의 id 컬럼이다.
Comment.belongsTo(User,{foreignKey:"commenter",targetKey:"id"}); //관계가 어떻게 되어있는지 잘?? 모르겠네
                        
sequelize.sync({ force: true }) //테이블이 있든 없든 무조건 위의 User테이블을  새로 만듬
    .then((result) => { console.log("데이터베이스가 생성됨"+result); }) //정상적이면 받은 파라미터 결과값을 보여주고
    .catch((e) => { console.log("데이터베이스 생성실패" + e) }) //아니라면 에러를 보여줌
    
module.exports  =  {User,Comment}