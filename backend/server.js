const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PrettyError = require('pretty-error');
const pe = new PrettyError();

process.on('uncaughtException', (err) => {
  console.log('UNHANDLED EXCEPTION! Shutting down...');
  console.log(pe.render(err));
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

async function dbConnect() {
  await mongoose.connect(DB).then(() => {
    console.log('DB connection successful');
  });
}

dbConnect();

// Start server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(pe.render(err));
  server.close(() => {
    process.exit(1);
  });
});
