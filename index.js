const express = require('express');
// const mysql = require('mysql');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// const db = require('./utils/database');
const mainRoute = require('./routes/mainUser');

const PORT = process.env.PORT || 3000;
// const db = require('./utils/database');



// Middleware untuk menangani request body berformat JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRoute)
// Menentukan path folder views
app.set('views', path.join(__dirname, 'views'));

// Menggunakan EJS sebagai view engine
app.set('view engine', 'ejs');


// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
  