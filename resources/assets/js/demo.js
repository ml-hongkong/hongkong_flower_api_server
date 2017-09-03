class Result {

  constructor() {
    this.key = 'results';
    this.arr = [];
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

  getStatus(imageId){
    for(let x of this.arr){
      if( x.image_id === imageId ) return x.status;
    }
    return null;
  }

  setStatus(imageId, status){
    for(let x of this.arr){
      if( x.image_id === imageId ){
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
  // this = div.result
  if (d.status === 'pending') {
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
      .selectAll('div.rank').data(d.result.slice(0,4).sort((a,b) => b-a));
    row.enter()
      .append('div').classed('rank', true)
      .append('span').text(d => d.class)
      .select(parentNode)
      .append('span').text(d => d.score.toFixed(2))
  }
}

function renderResults(res) {
  let lis = res.toList();
  let x = d3.select('.list-section').selectAll('div.item').data(lis);

  x.each(function(d){
    // this = div.item
    if( ['pending', 'processing'].indexOf(d.status) >= 0 ){
      $(this).find('div.status').text(d.status);
    } else if( d.status === 'done' ){
      let n = d3.select(this).select('div.result');
      n.selectAll('*').remove();
      renderResult.bind(n.node(), d)();
    }
  });

  x.enter()
    .append('div').classed('item', true)
    .append('div').classed('image', true)
    .attr('style', d => `background-image: url(${d.image_url})`)
    .select(parentNode)
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
        // console.log(res.data);
        // result.update(i, res.data);

        let lastStatus = results.getStatus(x.image_id);
        if( lastStatus !== data.status){
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


