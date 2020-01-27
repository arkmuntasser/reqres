import Cors from 'micro-cors';

const events = require('../../data/events');
const getData = require('../../utils/getData');

const cors = Cors({
	allowMethods: ['GET', 'HEAD'],
});

module.exports = cors(getData(events));
