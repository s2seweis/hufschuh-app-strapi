module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST'),
      port: 25,
	    secure: false,
	    ignoreTLS: true,
      auth: {
	type: "login",
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
      tls: { rejectUnauthorized: false },
	    debug: true,
	    logger: true,
    },
    settings: {
      defaultFrom:  env('SMTP_ORIGIN_MAIL'),
    },
  },
});
