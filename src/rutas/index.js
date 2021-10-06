const express = require('express');
const pool = require('../mysql_connector');
const router = express.Router();



router.get('/',(req, res) =>{
    res.render('index',{title:"first website"});
});

router.get('/contact',(req, res) =>{
    res.render('contact',{title:"Pagina de contacto"});
});

router.post('/contact',async(req, res) =>{
    const { correo, comentario} = req.body;
    const newLink={
      correo,
      comentario,
    };
    await pool.query('INSERT INTO contactos set ?',[newLink]);
    res.send('recibido');
});
module.exports=router;