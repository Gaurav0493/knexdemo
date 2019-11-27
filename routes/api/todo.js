var express = require('express');
var router = express.Router();
var db = require('../../database');

router.get('/', function(req,res){
    db.select().from('todo').orderBy('id').then(function(data){
        res.send(data);
    }); 
});

router.post('/', function(req,res){
    // console.log(req.body);
    // res.send('hello');
    db.insert(req.body).returning('*').into('todo').then(function(data){
        console.log(req.body);
        console.log(data);
        res.send(data);
    }); 
});

router.put('/:id', function(req,res){
    // console.log(req.params.id);
    // res.send('update request');
    db('todo').where({ id: req.params.id }).update({
        description: req.body.description || null,
        completed: req.body.completed || null
    }).returning('*').then(function(data){
        res.send(data);
    })
});

router.patch('/:id', function(req,res){
    // console.log(req.params.id);
    // res.send('update request');
    db('todo').where({ id: req.params.id }).update(req.body).returning('*').then(function(data){
        res.send(data);
    })
});

router.delete('/:id', function(req,res){
    // console.log(req.params.id);
    // res.send('update request');
    db('todo').where({ id: req.params.id }).delete().returning('*').then(function(data){
        res.json({sucess: true});
    })
});

router.get('/:id', function(req,res){
    // console.log(req.params.id);
    // res.send('update request');
    db('todo').where({ id: req.params.id }).first().then(function(data){
        res.send(data);
    })
});
module.exports = router;