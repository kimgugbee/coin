function getCandle(type) {
  let ticker = document.querySelector("input[name='ticker']").value;
  if (!ticker) {
    ticker = 'KRW-BTC';
  }

  const tickerTitle = document.querySelector("#ticker-title");
  tickerTitle.innerHTML = `${ticker}(${type})(단위:천원)`;

  fetch(`https://api.upbit.com/v1/candles/${type}?count=10&market=${ticker}`)
    .then(resp => resp.json())
    .then(data => {
      const candleTable = document.querySelector("#candle-table");
      let trHigh = "<tr><td>HIGH</td>";
      let trLow = "<tr><td>LOW</td>";
      let trOpen = "<tr><td>OPEN</td>";
      let trClose = "<tr><td>CLOSE</td>";
      for (const candle of data) {
        trHigh += `<td>${(candle.high_price / 1000).toLocaleString()}</td>`;
        trLow += `<td>${(candle.low_price / 1000).toLocaleString()}</td>`;
        trOpen += `<td>${(candle.opening_price / 1000).toLocaleString()}</td>`;
        trClose += `<td>${(candle.trade_price / 1000).toLocaleString()}</td>`;
      }
      trHigh += "</tr>";
      trLow += "</tr>";
      trOpen += "</tr>";
      trClose += "</tr>";
      candleTable.innerHTML = trOpen + trHigh + trLow + trClose;
    })
    ;


}

window.onload = function () {
  fetch("https://api.upbit.com/v1/market/all")
    .then(resp => resp.json())
    .then(data => {
      const coinList = document.querySelector("#coin-list");
      let str = "";

      for (const info of data) {
        const ticker = info.market;
        if (!ticker.startsWith("KRW")) {
          continue;
        }
        const coinList = document.querySelector("#coin-list");
        str += `<option value="${ticker}">${info.korean_name}</option>`;
      }
      coinList.innerHTML = str;
    })
    ;
}
