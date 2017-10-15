/**
 * Created by liyang on 2017-08-06.
 */
var makeController = require('../utils/makeController');

const viewDir = 'os';
const actions = [
    {name:'index',hasAction:'',dir:''},
    {name:'winHotKey',hasAction:'winHotKey',dir:'windows'},
    {name:'winCli',hasAction:'winCli',dir:'windows'},
    {name:'lixHotKey',hasAction:'lixHotKey',dir:'linux'},
    {name:'lixCli',hasAction:'lixCli',dir:'linux'},
    {name:'lixFs',hasAction:'lixFs',dir:'linux'}
];

module.exports = app => {
    class OsController extends app.Controller {}
    makeController.makeActions(OsController,viewDir,actions);
    return OsController;
};