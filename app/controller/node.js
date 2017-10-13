/**
 * Created by liyang on 2017-08-06.
 */

var makeController = require('../utils/makeController');

const viewDir = 'node';
const actions = [
    {name:'index',hasAction:'',dir:''},
    {name:'quickStart',hasAction:'quickStart',dir:''},
    {name:'packageJson',hasAction:'packageJson',dir:''},
    {name:'module',hasAction:'module',dir:''},
    {name:'npmPublish',hasAction:'npmPublish',dir:''},

    {name:'global',hasAction:'global',dir:'coreModules'},
    {name:'process',hasAction:'process',dir:'coreModules'},
    {name:'child_process',hasAction:'child_process',dir:'coreModules'},
    {name:'Buffer',hasAction:'Buffer',dir:'coreModules'},
    {name:'querystring',hasAction:'querystring',dir:'coreModules'},
    {name:'url',hasAction:'url',dir:'coreModules'},
    {name:'dns',hasAction:'dns',dir:'coreModules'},
    {name:'path',hasAction:'path',dir:'coreModules'},
    {name:'http',hasAction:'http',dir:'coreModules'},
    {name:'https',hasAction:'https',dir:'coreModules'},
    {name:'fs',hasAction:'fs',dir:'coreModules'},

    {name:'useful',hasAction:'useful',dir:'thirdModules'},
    {name:'commander',hasAction:'commander',dir:'thirdModules'},

    {name:'copyFile',hasAction:'copyFile',dir:'fs'},
    {name:'iterateDir',hasAction:'iterateDir',dir:'fs'},

    {name:'createServer',hasAction:'createServer',dir:'http'},
    {name:'sendRequest',hasAction:'sendRequest',dir:'http'},

    {name:'massage',hasAction:'massage',dir:'process'},
    {name:'guardProcess',hasAction:'guardProcess',dir:'process'}

];

module.exports = app => {
    class NodeController extends app.Controller {}
    makeController.makeActions(NodeController,viewDir,actions);
    return NodeController;
};