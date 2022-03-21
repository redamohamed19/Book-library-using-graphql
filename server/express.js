import express from 'express';
const App = express();
App.listen(4000, () => {
  console.log('now listining for request on port 4000');
});
