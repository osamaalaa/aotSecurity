
const myconnection = require('@conn/oracleConnector');


function serviceConn(req, res, _statement, _bindings, returns, requirecommit) {
    myconnection(_statement,
        _bindings,
        returns,
        requirecommit)

        .then(result => {
            let mresult = {
                status: 200,
                rows: result,
                message: 'successed'
            };
            res.status(200).json(mresult);
        })

        .catch(err => {
            let error = {
                message: err
            };
            res.status(400).json(error);
        }
        );
}

module.exports = serviceConn;
