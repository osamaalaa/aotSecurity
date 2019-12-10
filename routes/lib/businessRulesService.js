
const myconnection = require('@conn/oracleConnector');

function Connect(req, res, _statement, _bindings, requirecommit, next) {
    return new Promise((resolve, reject) => {
    myconnection(_statement,
        _bindings,
        requirecommit)
        .then(result => {
            let mresult = {
                status: 200,
                rows: result,
                message: 'successed'
            };
            resolve (mresult); 
            
        })
        .catch(err => {
            let error = {
                message: err
            };
            reject (error);
            
        }
        
        );
        
    });

}

module.exports = Connect;
