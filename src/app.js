const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD PoC Application is running successfully on Feature App.');
});

// Start server ONLY when running app directly
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app;
