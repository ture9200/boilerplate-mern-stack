if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');  /* deloy이후에 production  모드로 작업을 하고 있는지. 이 모드로 작업을 하게 되면 
    prod.js 에서 변수를 읽게된다. */
} else {
    module.exports = require('./dev'); /* 로컬에서 작업하고 싶으면 dev.js 에 있는 변수들을 사용하게 된다.  */ 
}