const axios = require("axios");

exports.yomamma = (req, res, next) => {
  axios.get("https://api.yomomma.info/").then((data) => {
    res.status(200).json({ joke: data.data.joke, success: true });
  });
};

exports.dadjoke = (req, res, next) => {
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
    .then((data) => {
      res.status(200).json({ joke: data.data.joke, success: true });
    })
    .catch((err) => {
      res.status(400).json({ msg: "Error Getting ", success: false });
    });
};

exports.programming = (req, res, next) => {
  axios
    .get("https://v2.jokeapi.dev/joke/programming")
    .then(({ data }) => {
      console.log(data);
      if (data.type === "twopart") {
        res
          .status(200)
          .json({ joke: `${data.setup} ,${data.delivery}`, success: true });
      } else {
        res.status(200).json({ joke: data.joke, success: true });
      }
    })
    .catch((err) => {
      res.status(400).json({ msg: "Error Getting ", success: false });
    });
};

exports.dark = (req, res, next) => {
  axios
    .get("https://v2.jokeapi.dev/joke/dark")
    .then(({ data }) => {
      console.log(data);
      if (data.type === "twopart") {
        res
          .status(200)
          .json({ joke: `${data.setup} ,${data.delivery}`, success: true });
      } else {
        res.status(200).json({ joke: data.joke, success: true });
      }
    })
    .catch((err) => {
      res.status(400).json({ msg: "Error Getting ", success: false });
    });
};

exports.doland = (req, res, next) => {
  axios
    .get("https://www.tronalddump.io/random/quote")
    .then(({ data }) => {
      console.log(data);
      res.status(200).json({ joke: data.value, success: true });
    })
    .catch((err) => {
      res.status(400).json({ msg: "Error Getting ", success: false });
    });
};
