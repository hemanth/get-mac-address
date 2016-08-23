'use strict';

const interfaces = require('os').networkInterfaces();

module.exports = Object
                .keys(interfaces)
                .reduce((p, c, i) => {
                    p[c] = interfaces[c][0].mac; 
                    return p;
                }, {});
