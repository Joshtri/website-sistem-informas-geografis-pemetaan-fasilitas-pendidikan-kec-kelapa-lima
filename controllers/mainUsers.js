const db = require('../utils/database');


exports.mainUserPage = (req, res) => {
  // Define pagination parameters
  const page = req.query.page || 1; // Default page is 1
  const limit = 10; // Number of items per page

  // Calculate offset based on page and limit
  const offset = (page - 1) * limit;

  // Fetch location data from the database with pagination
  const queryRead = `SELECT * FROM locations LIMIT ${limit} OFFSET ${offset}`;

  db.query(queryRead, (error, results, fields) => {
      if (error) {
          console.error('Error fetching location data:', error);
          // Handle error, render an error page or send an error response
          return res.status(500).send('Internal Server Error');
      }

      // Count total number of items for pagination
      const totalCountQuery = 'SELECT COUNT(*) AS totalCount FROM locations';
      db.query(totalCountQuery, (error, countResults) => {
          if (error) {
              console.error('Error counting total location data:', error);
              // Handle error, render an error page or send an error response
              return res.status(500).send('Internal Server Error');
          }

          // Calculate total number of pages
          const totalCount = countResults[0].totalCount;
          const totalPages = Math.ceil(totalCount / limit);

          // Data fetched successfully, render the view with the fetched data and pagination info
          const locals = {
              title: 'SIG Fasilitas Pendidikan',
              locations: results, // Pass fetched data to the view
              currentPage: parseInt(page), // Current page number
              totalPages: totalPages, // Total number of pages
              limit: limit // Number of items per page
          };

          res.render('index', locals); // Sending locals object directly
      });
  });
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