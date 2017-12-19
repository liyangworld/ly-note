
var makeController = require('../utils/makeController');

const viewDir = 'mock';
const actions = [
    {name:'index',hasAction:'',dir:''},

    {name:'dataTemplate',hasAction:'dataTemplate',dir:'summary'},
    {name:'dataPlaceholder',hasAction:'dataPlaceholder',dir:'summary'},
    {name:'random',hasAction:'random',dir:'summary'},
    {name:'mock',hasAction:'mock',dir:'summary'},
    {name:'setup',hasAction:'setup',dir:'summary'},
    {name:'valid',hasAction:'valid',dir:'summary'},
    {name:'toJSONSchema',hasAction:'toJSONSchema',dir:'summary'}

];

module.exports = app => {
    class MockController extends app.Controller {}
    makeController.makeActions(MockController,viewDir,actions);
    return MockController;
};