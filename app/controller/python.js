'use strict';
/**
 * Created by liyang on 2017-08-06.
 */
var makeController = require('../utils/makeController');

const viewDir = 'python';
const actions = [
    {name:'index',hasAction:'',dir:''},
    {name:'grammar',hasAction:'grammar',dir:'grammar'},
    {name:'dataType',hasAction:'dataType',dir:'grammar'},
    {name:'operator',hasAction:'operator',dir:'grammar'},
    {name:'builtinFn',hasAction:'builtinFn',dir:'grammar'},
    {name:'number',hasAction:'number',dir:'grammar'},
    {name:'string',hasAction:'string',dir:'grammar'},
    {name:'stringFn',hasAction:'stringFn',dir:'grammar'}
];

module.exports = app => {
    class pythonController extends app.Controller {}
    makeController.makeActions(pythonController,viewDir,actions);
    return pythonController;
};