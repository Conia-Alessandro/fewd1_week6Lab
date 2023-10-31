const express = require('express');
const app = express();

// no direction found
app.use(function (req, res) {
    res.status(404);
    res.send("uh oh! couldn't find what you were looking for, check URL");
})
app.listen(3001, () => {
    console.log("Server started on port 3001. Ctrl^c to quit.");
});  
  