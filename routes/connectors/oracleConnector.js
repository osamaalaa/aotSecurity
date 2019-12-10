let oracledb = require('oracledb');
let response = [];
function myconnection(_string, _id , commitrequired) {

    return new Promise((resolve, reject) => {
        oracledb.getConnection(
            {
                user: "aot_security",
                password: "aotsec",
                connectString: "Dev"
            },
            function (err, connection) {
                if (err) {
                    reject(err.message);
                    return;
                }
                connection.execute(
                    _string,
                    _id,
                    {outFormat: oracledb.OBJECT, extendedMetaData: false},
                    function (err, result) {
                        if (err) {
                                connection.rollback(
                                    function (err) {
                                        if (err)
                                        reject(err.message);
                                    });

                            reject(err.message);
                            closeconnection(connection);
                            return;
                        }
                        if (commitrequired){
                            connection.commit(
                                function (err) {
                                    if (err){
                                    reject(err.message);
                                    }else{
                                        response = result.outBinds;
                                        for (let key in result.outBinds) {
                                            if (result.outBinds.hasOwnProperty(key)) {
                                                response[key] = result.outBinds[key][0];
                                            }
                                        }
                                        resolve(response);
                                    }
                                });
                           }else{
                            resolve(result.rows);
                           }
                        closeconnection(connection);
                        return result.rows;
                    });

            });

        function closeconnection(connection) {
            connection.close(
                function (err) {
                    if (err)
                    reject(err.message);
                });
        }

    });

}

module.exports = myconnection;
