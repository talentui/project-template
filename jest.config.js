module.exports = require('@talentui/tools/jest')({
    globals: {
        BSGlobal: {
            loginUserInfo: {
                Id:''
            }
        },
        iTalentSDK: {
            register: () => undefined
        },
        __webpack_public_path__: ""
    }
    
});