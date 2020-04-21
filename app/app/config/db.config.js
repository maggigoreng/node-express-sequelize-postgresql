module.exports = {
  HOST: "dtone-rds.cvbsqgm2tnmf.ap-southeast-1.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "ekqd3n10gkh74tkx",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
