const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));


// Routes
app.use('/api/users' , require('./routes/users.routes'));
app.use('/api/transactions', require('./routes/transactions.routes'));
// app.use(require('./routes/index.routes'));
// app.use(require('./routes/authentication.routes'));

// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});