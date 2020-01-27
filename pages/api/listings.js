import Cors from 'micro-cors';

const listings = require('../../data/listings');
const getData = require('../../utils/getData');

const cors = Cors({
	allowMethods: ['GET', 'HEAD'],
});

module.exports = cors(getData(listings));
