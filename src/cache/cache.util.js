const Memcached = require('memcached');
const memcached = new Memcached('127.0.0.1:11211', { timeout: 200, maxTimeout: 200, failures: 1 });

const cache = (duration) => {
    return (req, res, next) => {
        const templateKey = '_medtechnika_' + req.originalUrl || req.url
        memcached.get(templateKey, (err, cachedBody) => {
            if (cachedBody) {
                res.send(cachedBody)
            } else {
                if (err) console.error(err);
                res.sendResponse = res.send;
                res.send = (body) => {
                    memcached.set(templateKey, body, duration, (err) => {
                        if (err) console.error(err)
                        res.sendResponse(body)
                    })
                }
                next()
            }
        })
    }
}

module.exports = { cache };