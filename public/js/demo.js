/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Result = function () {
  function Result() {
    _classCallCheck(this, Result);

    this.key = 'results';
    this.arr = [];
  }

  _createClass(Result, [{
    key: 'add',
    value: function add(data) {
      this.arr.push(data);
      this.save();
    }
  }, {
    key: 'save',
    value: function save() {
      if (localStorage) {
        localStorage.setItem(this.key, JSON.stringify(this.arr));
      }
    }
  }, {
    key: 'getStatus',
    value: function getStatus(imageId) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var x = _step.value;

          if (x.image_id === imageId) return x.status;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
  }, {
    key: 'setStatus',
    value: function setStatus(imageId, status) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var x = _step2.value;

          if (x.image_id === imageId) {
            x.status = status;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'setResultByImageId',
    value: function setResultByImageId(imageId, x) {
      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].image_id === imageId) {
          this.arr[i].result = x;
          this.arr[i].status = 'done';
        }
      }
    }
  }, {
    key: 'validate',
    value: function validate(arr) {
      return Array.isArray(arr);
    }
  }, {
    key: 'toList',
    value: function toList() {
      // todo: deep clone ??
      return this.arr;
    }
  }, {
    key: 'pendingResults',
    value: function pendingResults() {
      return this.arr.filter(function (x) {
        return ['pending', 'processing'].indexOf(x.status) >= 0;
      });
    }
  }, {
    key: 'load',
    value: function load() {
      if (localStorage) {
        try {
          var x = JSON.parse(localStorage.getItem(this.key));
          if (this.validate(x)) this.arr = x;
        } catch (ex) {
          console.error(ex);
        }
      }
    }
  }]);

  return Result;
}();

function parentNode() {
  return this.parentNode;
}

function renderResult(d) {
  // this = div.result
  if (['pending', 'processing'].indexOf(d.status) >= 0) {
    d3.select(this).append('div').classed('svg-wrapper', true).append('svg').attr('width', 40).attr('height', 40).attr('viewBox', '10 10 80 80').append('use').attr('xlink:href', '#loading').select(parentNode).select(parentNode).append('div').classed('status', true).text(d.status);
  }
  if (d.status === 'done') {
    // console.log('d', d.result);
    var row = d3.select(this).append('div').classed('rank-wrapper', true).selectAll('div.rank').data(d.result.slice(0, 4).sort(function (a, b) {
      return b - a;
    }));
    row.enter().append('div').classed('rank', true).append('span').text(function (d) {
      return d.class;
    }).select(parentNode).append('span').text(function (d) {
      return d.score.toFixed(2);
    });
  }
}

function renderResults(res) {
  var lis = res.toList();
  var x = d3.select('.list-section').selectAll('div.item').data(lis);

  x.each(function (d) {
    // this = div.item
    if (['pending', 'processing'].indexOf(d.status) >= 0) {
      $(this).find('div.status').text(d.status);
    } else if (d.status === 'done') {
      var n = d3.select(this).select('div.result');
      n.selectAll('*').remove();
      renderResult.bind(n.node(), d)();
    }
  });

  x.enter().append('div').classed('item', true).append('div').classed('image', true).attr('style', function (d) {
    return 'background-image: url(' + d.image_url + ')';
  }).select(parentNode).append('div').classed('result', true).each(renderResult);

  x.exit().remove();
}
window.renderResults = renderResults;

var results = new Result();
results.load();
renderResults(results);

function pollResults(results) {
  var intl = 2 * 1000;
  Rx.Observable.zip(Rx.Observable.from(results.pendingResults()), Rx.Observable.interval(intl)).subscribe({
    next: function next(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          x = _ref2[0];

      axios.get('/api/v0/result/' + x.image_id).then(function (res) {
        var data = res.data;
        // console.log(res.data);
        // result.update(i, res.data);

        var lastStatus = results.getStatus(x.image_id);
        if (lastStatus !== data.status) {
          results.setStatus(x.image_id, data.status);

          if (data.status === 'done') {
            results.setResultByImageId(x.image_id, data.result);
            results.save();
          }
          renderResults(results);
        }
      });
    },
    error: function error(err) {
      return console.error(err);
    },
    complete: function complete() {
      // prevent immediate end if pending is empty
      setTimeout(function () {
        return pollResults(results);
      }, intl);
    }
  });
}
pollResults(results);

// add listener
$('input[type="file"]').on('change', function (event) {
  var file = this.files[0];
  if (!file) return;

  var form = new FormData();
  form.append('image', file.slice(), file.name);
  axios.post('/api/v0/request', form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(function (result) {
    results.add(result.data);
    renderResults(results);
  });

  // clear form
  this.form.reset();
});

/***/ })

/******/ });