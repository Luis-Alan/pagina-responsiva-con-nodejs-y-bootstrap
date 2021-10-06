


const mysql      = require('mysql');
const {promisify} = require('util');

const conexion = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'prueba1conneccionbd'
});
 
const pool = mysql.createPool(database);

pool.getConnection((err,connection) => {
    if (err){
        if(err.code === 'PROTOCOL_CONNECTION:LOST'){
            console.error('LA CONEXION A LA BASE DE DATOS A FALLADO');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('LA CONEXION A LA BASE DE DATOS FUE RECHAZADA');
        }
    }
    if(connection) connection.release();
    console.log('BASE DE DATOS CONECTADA');
       return;
});
pool.query= promisify(pool.query);
module.exports = pool;







    conexion.connect(function(error){
        if(err){ 
           throw err;
        }else{
        console.log('conectado');
        }
    });

    conexion.query('SELECT * FROM contactos', function(error,results, fields){
        if(error)
        throw error;

        results.forEach(result => {
           console.log(result); 
        });
    })
 
conexion.end();