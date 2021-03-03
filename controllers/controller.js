const axios = require("axios");
const JokeModel = require('../models/jokeModels')

exports.test = (req, res, next) => {

  JokeModel.find({ jokeType: 'Dark' }).then(d => {
    console.log(d)
    const randomNo = (Math.floor(Math.random(0, 1) * d.length))
    res.status(200).json({ joke: d[randomNo].joke, success: true });
  })
}

exports.yomamma = (req, res, next) => {
  const randomNo = (Math.floor(Math.random(0, 1) * 3))
  if (randomNo === 0) {
    axios.get("https://api.yomomma.info/").then((data) => {
      res.status(200).json({ joke: data.data.joke, success: true });
    });
  } else if (randomNo === 1) {
    axios.get("https://www.reddit.com/r/YoMamaJokes.json?limit=100").then(({ data }) => {
      const randomPost = (Math.floor(Math.random(0, 1) * 100) + 1)
      res.status(200).json({ joke: `${data.data.children[randomPost].data.title} ${data.data.children[randomPost].data.selftext}`, success: true });
    });
  } else {
    JokeModel.find({ jokeType: 'Yomama' }).then(d => {
      const randomNo = (Math.floor(Math.random(0, 1) * d.length))
      res.status(200).json({ joke: d[randomNo].joke, success: true });
    })
  }
};

exports.postJoke = (req, res, next) => {
  const { joke, jokeType } = req.body
  JokeModel.create({ joke, jokeType }).then(() => {
    res.json({ success: true })
  }).catch(err => {
    res.json({ error: err.message, success: true })
  })
};

exports.dadjoke = (req, res, next) => {
  //Reddit joke
  const randomNo = (Math.floor(Math.random(0, 1) * 3))
  if (randomNo === 0) {
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
  } else if (randomNo === 1) {
    axios.get("https://www.reddit.com/r/dadjokes.json?limit=100").then(({ data }) => {
      const randomPost = (Math.floor(Math.random(0, 1) * 100) + 1)
      res.status(200).json({ joke: `${data.data.children[randomPost].data.title} ${data.data.children[randomPost].data.selftext}`, success: true });
    }).catch((err) => {
      res.status(400).json({ msg: "Error Getting ", success: false });
    });
  } else {
    JokeModel.find({ jokeType: 'DadJoke' }).then(d => {
      const randomNo = (Math.floor(Math.random(0, 1) * d.length))
      res.status(200).json({ joke: d[randomNo].joke, success: true });
    })
  }
};

exports.programming = (req, res, next) => {
  domNo = (Math.floor(Math.random(0, 1) * 2))
  if (randomNo === 0) {
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
  } else {
    JokeModel.find({ jokeType: 'Programming' }).then(d => {
      const randomNo = (Math.floor(Math.random(0, 1) * d.length))
      res.status(200).json({ joke: d[randomNo].joke, success: true });
    })
  }
};

exports.dark = (req, res, next) => {

  //Reddit joke
  const randomNo = (Math.floor(Math.random(0, 1) * 3))
  if (randomNo === 0) {
    axios
      .get("https://v2.jokeapi.dev/joke/dark")
      .then(({ data }) => {
        console.log(data);
        if (data.type === "twopart") {
          res
            .status(200)
            .json({ joke: `${data.setup} ${data.delivery}`, success: true });
        } else {
          res.status(200).json({ joke: data.joke, success: true });
        }
      })
      .catch((err) => {
        res.status(400).json({ msg: "Error Getting ", success: false });
      });
  } else if (randomNo === 1) {

    axios.get("https://www.reddit.com/r/darkJokes.json?limit=100").then(({ data }) => {
      const randomPost = (Math.floor(Math.random(0, 1) * 100) + 1)
      res.status(200).json({ joke: `${data.data.children[randomPost].data.title} ${data.data.children[randomPost].data.selftext}`, success: true });
    }).catch((err) => {
      res.status(400).json({ msg: "Error Getting ", success: false });
    });
  } else {
    JokeModel.find({ jokeType: 'Dark' }).then(d => {
      const randomNo = (Math.floor(Math.random(0, 1) * d.length))
      res.status(200).json({ joke: d[randomNo].joke, success: true });
    })
  }
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
