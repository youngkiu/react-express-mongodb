const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 27017;

module.exports = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/bezkoder_db`
};
