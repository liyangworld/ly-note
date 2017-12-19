
var makeController = require('../utils/makeController');

const viewDir = 'sql';
const actions = [
    {name:'index',hasAction:'',dir:''},
    {name:'guide',hasAction:'guide',dir:'summary'},
    {name:'sqlfn',hasAction:'sqlfn',dir:'summary'},
    {name:'mysqltype',hasAction:'mysqltype',dir:'summary'},
    {name:'sqlservertype',hasAction:'sqlservertype',dir:'summary'},

    {name:'select',hasAction:'select',dir:'basic'},
    {name:'join',hasAction:'join',dir:'basic'},
    {name:'union',hasAction:'union',dir:'basic'},
    {name:'where',hasAction:'where',dir:'basic'},
    {name:'orderBy',hasAction:'orderBy',dir:'basic'},
    {name:'groupBy',hasAction:'groupBy',dir:'basic'},
    {name:'having',hasAction:'having',dir:'basic'},
    {name:'insertInto',hasAction:'insertInto',dir:'basic'},
    {name:'update',hasAction:'update',dir:'basic'},
    {name:'delete',hasAction:'delete',dir:'basic'},
    {name:'constraints',hasAction:'constraints',dir:'basic'},
    {name:'indexes',hasAction:'indexes',dir:'basic'},
    {name:'autoIncrement',hasAction:'autoIncrement',dir:'basic'},
    {name:'view',hasAction:'view',dir:'basic'},
    {name:'date',hasAction:'date',dir:'basic'},
    {name:'nullValue',hasAction:'nullValue',dir:'basic'}

];

module.exports = app => {
    class SqlController extends app.Controller {}
    makeController.makeActions(SqlController,viewDir,actions);
    return SqlController;
};