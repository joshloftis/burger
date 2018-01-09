const express = require('express');

const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    res.render('index', hbsObject);
  });
});

router.post('/api/burger', (req, res) => {
  burger.insert(['burger_name', 'devoured'], [req.body.name, req.body.devoured], (data) => {
    res.json({ id: data.insertId });
  });
});

router.put('/api/burger/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.update({ devoured: req.body.devoured }, condition, (data) => {
    if (data.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete('/api/burger/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.delete(condition, (data) => {
    if (data.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
