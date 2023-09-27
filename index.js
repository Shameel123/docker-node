const express = require('express');

const app = express();

app.get('/', (_, res) => {
    res.send('Hello Shameel! How are you?');
    }
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(` Listening on port ${port}...`);
    }
);
