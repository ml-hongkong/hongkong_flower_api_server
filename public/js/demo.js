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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function () {
    console.log('Service Worker Registered');
  });
}

var Result = function () {
  function Result() {
    _classCallCheck(this, Result);

    this.key = 'results';
    this.arr = [];
  }

  _createClass(Result, [{
    key: 'remove',
    value: function remove(imageId) {
      this.arr = this.arr.filter(function (x) {
        return x.image_id !== imageId;
      });
      this.save();
    }
  }, {
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
          if (!x) x = [{
            "status": "done",
            "image_url": "https://flower.jackhftang.com/storage/img/6KrKc8seTolJBLFC0sW6mPwkP6n4qbVwORICJvdy.jpeg",
            "image_id": "1ddUxMvsouic3bVwDn9h8Cxd0OLIqJcFzQVSvou8ptEJxV5l0CrcnwDqHjkY",
            "result": [{ "class": "carnation", "score": 0.697746753692627 }, {
              "class": "pincushion flower",
              "score": 0.08501219004392624
            }, { "class": "globe thistle", "score": 0.0532408133149147 }, {
              "class": "common dandelion",
              "score": 0.04121533781290054
            }, { "class": "sweet william", "score": 0.03613519296050072 }]
          }, {
            "status": "done",
            "image_url": "https://flower.jackhftang.com/storage/img/6S69ZAKei6AKaIAWV6z6gZaws1UBx4by5eZ2VaWX.jpeg",
            "image_id": "zUFqsr2K74n6EV9zZEyWJdZ2ukangpjorIDpBiWfocBF2yearO7LapQEsS41",
            "result": [{ "class": "tree mallow", "score": 0.9667922854423523 }, {
              "class": "osteospermum",
              "score": 0.019802046939730644
            }, { "class": "garden phlox", "score": 0.005472611635923386 }, {
              "class": "barbeton daisy",
              "score": 0.0019478568574413657
            }, { "class": "hibiscus", "score": 0.0013803195906803012 }]
          }, {
            "status": "done",
            "image_url": "https://flower.jackhftang.com/storage/img/OuitCFw8BQ6IwrtwjlMnymWsxXm3nZDko0jDPDHn.jpeg",
            "image_id": "S2id1XeDoaa6fdsRucRuAL0eODeLu4dmd0HyXlY6T210okIj4NZBl3JjSJIm",
            "result": [{ "class": "frangipani", "score": 0.97694331407547 }, {
              "class": "bromelia",
              "score": 0.0028470498509705067
            }, { "class": "ruby-lipped cattleya", "score": 0.0013494621962308884 }, {
              "class": "oxeye daisy",
              "score": 0.0012980286264792085
            }, { "class": "columbine", "score": 0.0012799542164430022 }]
          }, {
            "status": "done",
            "image_url": "https://flower.jackhftang.com/storage/img/XbeEn7Nu2OZNvhizn9Fc2ZN3P6EG4pSV0XybkWrb.jpeg",
            "image_id": "PnAPFKSS6SqUPri2EOGRUpfBXPjbpXcZqll2KxDve8pp4pjfwfKGDDVsObqs",
            "result": [{ "class": "mexican aster", "score": 0.0013491434510797262 }, {
              "class": "black-eyed susan",
              "score": 0.0015574544668197632
            }, { "class": "tree mallow", "score": 0.0016085893148556352 }, {
              "class": "bolero deep blue",
              "score": 0.0020466253627091646
            }, { "class": "osteospermum", "score": 0.9887164831161499 }]
          }, {
            "status": "done",
            "image_url": "https://flower.jackhftang.com/storage/img/L5UgLRlpweO2640te2H1O82TQQraCFD2RUnbeMrT.jpeg",
            "image_id": "XJPNM6wm8MxS58U6I463Vx5EtvdPxXGn4zThS0Njtf1S2CllndVH8eefAPUl",
            "result": [{ "class": "barbeton daisy", "score": 0.00028989833663217723 }, { "class": "sweet william", "score": 0.00033965110196731985 }, { "class": "king protea", "score": 0.0008190097287297249 }, { "class": "gazania", "score": 0.0022952156141400337 }, { "class": "passion flower", "score": 0.993553638458252 }]
          }];
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
  // this == div.result
  if (['pending', 'processing'].indexOf(d.status) >= 0) {
    d3.select(this).append('div').classed('svg-wrapper', true).append('svg').attr('width', 40).attr('height', 40).attr('viewBox', '10 10 80 80').append('use').attr('xlink:href', '#loading').select(parentNode).select(parentNode).append('div').classed('status', true).text(d.status);
  }
  if (d.status === 'done') {
    // console.log('d', d.result);
    var row = d3.select(this).append('div').classed('rank-wrapper', true).selectAll('div.rank').data(d.result.sort(function (a, b) {
      return b.score - a.score;
    }).slice(0, 4));
    row.enter().append('div').classed('rank', true).append('span').text(function (d) {
      return d.class;
    }).select(parentNode).append('span').text(function (d) {
      return (100 * d.score).toFixed(1) + '%';
    });
  }
}

function renderResults(res) {
  var lis = res.toList();

  // for simplicity, for re-render all
  // d3.select('.list-section').selectAll('div.item').remove();

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

  x.enter().append('div').classed('item', true).attr('data-id', function (d) {
    return d.image_id;
  }).append('div').classed('image', true).attr('style', function (d) {
    return 'background-image: url(' + d.image_url + ')';
  }).append('span').classed('cross', true).text('✕').on('click', function (d, i) {
    res.remove(d.image_id);
    // manually remove dom element to preserve (dom, data) pair
    $(this).closest('.item').remove();
    renderResults(res);
  }).select(parentNode).select(parentNode).append('div').classed('result', true).each(renderResult);
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
$('input[name="image"]').on('change', function (event) {
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

$('.upload-button').on('click', function (event) {
  $('input[name="image"]').click();
});

/***/ })

/******/ });