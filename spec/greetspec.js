'use strict';

var greet = require('../src/greet');

describe('greet', function() {
  // 希望greet('joe')返回‘Hello Joe’
  it('should greet the given name', function() {
    expect(greet('Joe')).toEqual('Hello Joe!');
  });
  // 提取出参数，代入执行了程序？
  it('should greet no-one special if no name is given', function() {
    expect(greet()).toEqual('Hello world!');
  });

});
