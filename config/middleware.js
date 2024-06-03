module.exports = {
  settings: {
    cors: {
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "Cache-Control",
      ],
    },
    parser: {
      jsonLimit: "10mb",
      // formLimit: 5242880000,
      // textLimit: 5242880000,
    },
  },
};
