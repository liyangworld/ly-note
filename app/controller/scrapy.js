
var makeController = require('../utils/makeController');

const viewDir = 'scrapy';
const actions = [
    {name:'index',hasAction:'',dir:''}

];

module.exports = app => {
    class ScrapyController extends app.Controller {}
    makeController.makeActions(ScrapyController,viewDir,actions);
    return ScrapyController;
};