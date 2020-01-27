import Cors from 'micro-cors';

const offers = require('../../data/offers');
const getData = require('../../utils/getData');

const cors = Cors({
	allowMethods: ['GET', 'HEAD'],
});

module.exports = cors(getData(offers));
