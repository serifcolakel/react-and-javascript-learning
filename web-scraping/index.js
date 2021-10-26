const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express");

const app = express();
const array = [];
const url = "URL";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    //XXXX : class(.className) or id(#idName)
    $("#gs_res_ccl_mid", html).each(function () {
      const title =
        $(this)
          .children("div")
          .next()
          .children("div")
          .children("h3")
          .children("a")
          .text() + " ---- "; //tr, a, div, etc text ise eleman içindeki text
      // Ne aramak istiyorsan yukarıdaki gibi tanımla
      const url = $(this)
        .children("div")
        .next()
        .children("div")
        .children("h3")
        .children("a")
        .attr("href");
      array.push({
        title,
        url,
      });
    });
    console.log(array);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log("server running on PORT ", PORT));
