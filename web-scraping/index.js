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
    $("XXXX", html).each(function () {
      const title = $(this).children("tr").text(); //tr, a, div, etc text ise eleman içindeki text
      // Ne aramak istiyorsan yukarıdaki gibi tanımla
      array.push({
        title,
      });
    });
    console.log(array);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log("server running on PORT ", PORT));
