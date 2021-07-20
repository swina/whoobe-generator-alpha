const middleware = {}

middleware['load-initial-data'] = require('..\\middleware\\load-initial-data.js')
middleware['load-initial-data'] = middleware['load-initial-data'].default || middleware['load-initial-data']

middleware['product.id'] = require('..\\middleware\\product.id.js')
middleware['product.id'] = middleware['product.id'].default || middleware['product.id']

export default middleware
