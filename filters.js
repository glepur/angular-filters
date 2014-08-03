angular.module('filters', [])
  .filter('slice', function() {
    return function(arr, start, end) {
      return (arr || []).slice(start, end);
    };
  })
  .filter('range', function() {
    return function(input, start, end, leadingZero) {
      for (var i = start; i < end; i++) {
        if (leadingZero === true) {
          if (i < 10) {
            input.push('0' + i);
          } else {
            input.push('' + i);
          }
        } else {
          input.push(i);
        }
      }
      return input;
    };
  })
  .filter('truncate', function() {
    return function(text, length, suffix) {
      if (isNaN(length))
        length = 10;

      if (suffix === undefined)
        suffix = "...";

      if (text.length <= length || text.length - suffix.length <= length) {
        return text;
      } else {
        return String(text).substring(0, length - suffix.length) + suffix;
      }

    };
  })
  .filter('capitalize', function() {
    return function(input) {
      if (angular.isDefined(input) && input !== null && input.length > 0) {
        input = input.toLowerCase();
      } else {
        return '';
      }
      return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
  });
