const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');

const port = process.env.PORT || 5000;

//express middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//prints that server is running on port
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => {res.send({ message: "React app is connected to Express server!" });
});
