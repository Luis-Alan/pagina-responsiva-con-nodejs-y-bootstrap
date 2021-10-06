const express = require('express');
const app = express();
const path = require('path');

//configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares


//rutas
app.use(require('./rutas/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//escuchando al servidor
app.listen(3000, () => {
     console.log('Server on port', 3000);
}); 