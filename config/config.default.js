'use strict';

const path = require('path');

module.exports = appInfo => {

  const config = {
      keys : appInfo.name + '_1501591955777_4743',
      view:{
          root:[
              path.join(appInfo.baseDir,'app/view')
          ].join(','),
          cache:false,//生产环境需要开启缓存
          defaultViewEngine: 'nunjucks',
          defaultExtension: '.nj',
          mapping: {
              '.nj': 'nunjucks',
          },
      }
  };

  return config;
};
