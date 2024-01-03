var express = require('express');
var router = express.Router();
let tasks = ['task1','task1','task1'];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {tasks});
});
// POST route to handle form submission and add a new task
router.post('/addTask', function(req, res, next) {
  const newTask = req.body.newTask;
  if (newTask) {
    tasks.push(newTask);
  }
  res.redirect('/');
});
// POST route to handle form submission and delete a task
router.post('/deleteTask', function(req, res, next) {
  const taskIndex = req.body.taskIndex;
  if (taskIndex !== undefined && taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
  }
  res.redirect('/');
});



module.exports = router;
