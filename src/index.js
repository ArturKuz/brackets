module.exports = function check(str, bracketsConfig) {
 
  let stack = [];

   for (var i = 0; i < str.length; i++) {
    if (isParanthesis(str[i])) {
      if (isOpenParenthesis(str[i])) {
        stack.push(str[i]);
      } else {
        if (stack.length === 0) {
          return false;
        }
        var top = stack.pop(); // pop off the top element from stack
        if (!matches(top, str[i])) {
          return false;
        }
      }
    }

    function isParanthesis(char) {
      let examp = '{}[]()||1234567788';
      if (examp.indexOf(char) > -1) {
        return true;
      } else {
        return false;
      }
    }

    function isOpenParenthesis(parenthesisChar) {
      for (var j = 0; j < bracketsConfig.length; j++) {
        if (bracketsConfig[j][0] === parenthesisChar) {
          return true;
        }
      }
      return false;
    }

    function matches(topOfStack, closedParenthesis) {
      for (var k = 0; k < bracketsConfig.length; k++) {
        if (bracketsConfig[k][0] === topOfStack && bracketsConfig[k][1] === closedParenthesis) {
          return true;
        }
      }
      return false;
    }

  }
  var result = stack.length === 0 ? true : false;
  return result 
}
