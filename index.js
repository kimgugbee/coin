function marketAll() {
  fetch("https://api.upbit.com/v1/market/all")
    .then(resp => resp.json())
    .then(data => {
      const coinListTable = document.querySelector("#coin-list");
      let str = "";
      for (const info of data) {
        str += "<tr>";
        str += "<td>"
        str += info.market
        str += "</td>"
        str += "<td>"
        str += info.korean_name
        str += "</td>"
        str += "<td>"
        str += info.english_name
        str += "</td>"
        str += "</tr>";
      }

      coinListTable.innerHTML = str;

    })
    ;
}

function marketKRW() {
  fetch("https://api.upbit.com/v1/market/all")
    .then(resp => resp.json())
    .then(data => {
      const coinListTable = document.querySelector("#coin-list");
      let str = "";
      for (const info of data) {
        if (!info.market.startsWith("KRW")) {
          continue;
        }
        str += "<tr>";
        str += "<td>"
        str += info.market
        str += "</td>"
        str += "<td>"
        str += info.korean_name
        str += "</td>"
        str += "<td>"
        str += info.english_name
        str += "</td>"
        str += "</tr>";
      }

      coinListTable.innerHTML = str;

    })
    ;
}
