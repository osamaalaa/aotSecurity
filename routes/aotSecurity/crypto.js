var crypto = require('crypto');
        var iv = new Buffer('0000000000000000');
        var key = 'A@TSecurity24360';

        var encrypt = function(data) {
            var cc = crypto.createCipher('aes-128-ecb', new Buffer(key));
            return Buffer.concat([cc.update(data, 'utf8'), cc.final()]).toString('base64');
        };

        var decrypt = function(data) {
            var cc = crypto.createDecipher('aes-128-ecb', new Buffer(key));
            return Buffer.concat([cc.update(data, 'base64'), cc.final()]).toString('utf8');
        };


        var data = '123'
        var cipher = encrypt(data);
        var decipher = decrypt('Zogrkzms0TltgjRJADpjWA==');
        
        console.log("see");
        console.log(cipher);
        console.log(decipher);
