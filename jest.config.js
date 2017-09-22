module.exports = require('@beisen/talent-ui-jest-utils')({
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