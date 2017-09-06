class Result {

  constructor() {
    this.key = 'results';
    this.arr = [];
  }

  remove(imageId) {
    this.arr = this.arr.filter(x => x.image_id !== imageId);
    this.save();
  }


  add(data) {
    this.arr.push(data);
    this.save();
  }

  save() {
    if (localStorage) {
      localStorage.setItem(this.key, JSON.stringify(this.arr));
    }
  }

  getStatus(imageId) {
    for (let x of this.arr) {
      if (x.image_id === imageId) return x.status;
    }
    return null;
  }

  setStatus(imageId, status) {
    for (let x of this.arr) {
      if (x.image_id === imageId) {
        x.status = status;
      }
    }
  }

  setResultByImageId(imageId, x) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].image_id === imageId) {
        this.arr[i].result = x;
        this.arr[i].status = 'done';
      }
    }
  }

  validate(arr) {
    return Array.isArray(arr);
  }

  toList() {
    // todo: deep clone ??
    return this.arr;
  }

  pendingResults() {
    return this.arr.filter(x => ['pending', 'processing'].indexOf(x.status) >= 0);
  }


  load() {
    if (localStorage) {
      try {
        let x = JSON.parse(localStorage.getItem(this.key));
        if (!x) x = [{
          "status": "done",
          "image_url": "https://flower.jackhftang.com/storage/img/6KrKc8seTolJBLFC0sW6mPwkP6n4qbVwORICJvdy.jpeg",
          "image_id": "1ddUxMvsouic3bVwDn9h8Cxd0OLIqJcFzQVSvou8ptEJxV5l0CrcnwDqHjkY",
          "result": [{"class": "carnation", "score": 0.697746753692627}, {
            "class": "pincushion flower",
            "score": 0.08501219004392624
          }, {"class": "globe thistle", "score": 0.0532408133149147}, {
            "class": "common dandelion",
            "score": 0.04121533781290054
          }, {"class": "sweet william", "score": 0.03613519296050072}]
        }, {
          "status": "done",
          "image_url": "https://flower.jackhftang.com/storage/img/6S69ZAKei6AKaIAWV6z6gZaws1UBx4by5eZ2VaWX.jpeg",
          "image_id": "zUFqsr2K74n6EV9zZEyWJdZ2ukangpjorIDpBiWfocBF2yearO7LapQEsS41",
          "result": [{"class": "tree mallow", "score": 0.9667922854423523}, {
            "class": "osteospermum",
            "score": 0.019802046939730644
          }, {"class": "garden phlox", "score": 0.005472611635923386}, {
            "class": "barbeton daisy",
            "score": 0.0019478568574413657
          }, {"class": "hibiscus", "score": 0.0013803195906803012}]
        }, {
          "status": "done",
          "image_url": "https://flower.jackhftang.com/storage/img/OuitCFw8BQ6IwrtwjlMnymWsxXm3nZDko0jDPDHn.jpeg",
          "image_id": "S2id1XeDoaa6fdsRucRuAL0eODeLu4dmd0HyXlY6T210okIj4NZBl3JjSJIm",
          "result": [{"class": "frangipani", "score": 0.97694331407547}, {
            "class": "bromelia",
            "score": 0.0028470498509705067
          }, {"class": "ruby-lipped cattleya", "score": 0.0013494621962308884}, {
            "class": "oxeye daisy",
            "score": 0.0012980286264792085
          }, {"class": "columbine", "score": 0.0012799542164430022}]
        }, {
          "status": "done",
          "image_url": "https://flower.jackhftang.com/storage/img/XbeEn7Nu2OZNvhizn9Fc2ZN3P6EG4pSV0XybkWrb.jpeg",
          "image_id": "PnAPFKSS6SqUPri2EOGRUpfBXPjbpXcZqll2KxDve8pp4pjfwfKGDDVsObqs",
          "result": [{"class": "mexican aster", "score": 0.0013491434510797262}, {
            "class": "black-eyed susan",
            "score": 0.0015574544668197632
          }, {"class": "tree mallow", "score": 0.0016085893148556352}, {
            "class": "bolero deep blue",
            "score": 0.0020466253627091646
          }, {"class": "osteospermum", "score": 0.9887164831161499}]
        }, {
          "status": "done",
          "image_url": "https://flower.jackhftang.com/storage/img/L5UgLRlpweO2640te2H1O82TQQraCFD2RUnbeMrT.jpeg",
          "image_id": "XJPNM6wm8MxS58U6I463Vx5EtvdPxXGn4zThS0Njtf1S2CllndVH8eefAPUl",
          "result": [
            {"class": "barbeton daisy", "score": 0.00028989833663217723},
            {"class": "sweet william", "score": 0.00033965110196731985},
            {"class": "king protea", "score": 0.0008190097287297249},
            {"class": "gazania", "score": 0.0022952156141400337},
            {"class": "passion flower", "score": 0.993553638458252}
          ]
        }];
        if (this.validate(x)) this.arr = x;
      } catch (ex) {
        console.error(ex);
      }
    }
  }
}

function parentNode() {
  return this.parentNode;
}

function renderResult(d) {
  // this == div.result
  if (['pending', 'processing'].indexOf(d.status) >= 0) {
    d3.select(this)
      .append('div').classed('svg-wrapper', true)
      .append('svg').attr('width', 40).attr('height', 40).attr('viewBox', '10 10 80 80')
      .append('use').attr('xlink:href', '#loading')
      .select(parentNode).select(parentNode)
      .append('div').classed('status', true).text(d.status);
  }
  if (d.status === 'done') {
    // console.log('d', d.result);
    let row = d3.select(this)
      .append('div').classed('rank-wrapper', true)
      .selectAll('div.rank').data(d.result.sort((a, b) => b.score - a.score).slice(0, 4));
    row.enter()
      .append('div').classed('rank', true)
      .append('span').text(d => d.class)
      .select(parentNode)
      .append('span').text(d => d.score.toFixed(2))
  }
}

function renderResults(res) {
  let lis = res.toList();

  // for simplicity, for re-render all
  // d3.select('.list-section').selectAll('div.item').remove();

  let x = d3.select('.list-section').selectAll('div.item').data(lis);

  x.each(function (d) {
    // this = div.item
    if (['pending', 'processing'].indexOf(d.status) >= 0) {
      $(this).find('div.status').text(d.status);
    } else if (d.status === 'done') {
      let n = d3.select(this).select('div.result');
      n.selectAll('*').remove();
      renderResult.bind(n.node(), d)();
    }
  });

  x.enter()
    .append('div').classed('item', true).attr('data-id', d => d.image_id)
    .append('div').classed('image', true)
    .attr('style', d => `background-image: url(${d.image_url})`)
    .append('span').classed('cross', true).text('✕')
    .on('click', function (d, i) {
      res.remove(d.image_id);
      // manually remove dom element to preserve (dom, data) pair
      $(this).closest('.item').remove();
      renderResults(res);
    })
    .select(parentNode).select(parentNode)
    .append('div').classed('result', true)
    .each(renderResult);
  x.exit().remove();
}
window.renderResults = renderResults;

let results = new Result();
results.load();
renderResults(results);

function pollResults(results) {
  const intl = 2 * 1000;
  Rx.Observable.zip(
    Rx.Observable.from(results.pendingResults()),
    Rx.Observable.interval(intl),
  ).subscribe({
    next: ([x]) => {
      axios.get(`/api/v0/result/${x.image_id}`).then(res => {
        let data = res.data;

        let lastStatus = results.getStatus(x.image_id);
        if (lastStatus !== data.status) {
          results.setStatus(x.image_id, data.status);

          if (data.status === 'done') {
            results.setResultByImageId(x.image_id, data.result);
            results.save();
          }
          renderResults(results);
        }

      })
    },
    error: err => console.error(err),
    complete: () => {
      // prevent immediate end if pending is empty
      setTimeout(() => pollResults(results), intl);
    }
  })
}
pollResults(results);

// add listener
$('input[type="file"]').on('change', function (event) {
  let file = this.files[0];
  if (!file) return;

  let form = new FormData();
  form.append('image', file.slice(), file.name);
  axios.post('/api/v0/request', form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  }).then(result => {
    results.add(result.data);
    renderResults(results);
  });

  // clear form
  this.form.reset();
});