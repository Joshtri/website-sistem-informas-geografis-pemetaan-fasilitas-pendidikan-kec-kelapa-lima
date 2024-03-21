const db = require('../utils/database');


exports.mainUserPage = (req,res)=>{
    const locals = {
        title: 'SIG Fasilitas Pendidikan'
    }
    res.render('index',{
        locals
    })
}

// Rute untuk halaman utama
// app.get('/', (req, res) => {
//     res.render('index'); // Render file index.ejs di dalam folder views
//   });
  
  // Endpoint untuk mendapatkan data lokasi dari database
exports.getLocationData = (req, res) => {
    const readQuery = 'SELECT * FROM locations';
  
    db.query(readQuery, (err, results) => {
      if (err) {
        throw err;
      }
      res.json(results);
    });
};