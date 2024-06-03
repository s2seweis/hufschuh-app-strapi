"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const confirmationHtml =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>Neue Nachricht</title> <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]--> <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><style type="text/css">#outlook a {\tpadding:0;}.es-button {\tmso-style-priority:100!important;\ttext-decoration:none!important;}a[x-apple-data-detectors] {\tcolor:inherit!important;\ttext-decoration:none!important;\tfont-size:inherit!important;\tfont-family:inherit!important;\tfont-weight:inherit!important;\tline-height:inherit!important;}.es-desk-hidden {\tdisplay:none;\tfloat:left;\toverflow:hidden;\twidth:0;\tmax-height:0;\tline-height:0;\tmso-hide:all;}[data-ogsb] .es-button {\tborder-width:0!important;\tpadding:10px 20px 10px 20px!important;}@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:10px 0px 10px 0px!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }</style></head>\n' +
  '<body style="width:100%;font-family:arial, \'helvetica neue\', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><div class="es-wrapper-color" style="background-color:#F6F6F6"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#f6f6f6"></v:fill> </v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"><tr><td valign="top" style="padding:0;Margin:0"><table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"><tr><td align="center" style="padding:0;Margin:0"><table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"><tr><td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td style="padding:0;Margin:0;font-size:0px" align="center"><img class="adapt-img" src="https://pjbcph.stripocdn.email/content/guids/CABINET_f9c5d374c437d521ed4d4d7c3add1779/images/40111625589480267.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="560" height="203"></td>\n' +
  '</tr></table></td></tr></table></td></tr><tr><td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td valign="top" align="center" style="padding:0;Margin:0;width:560px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">Liebe/r Pferdefreund/in,</p></td></tr><tr><td style="padding:0;Margin:0"><div style="height:8px"></div></td>\n' +
  '</tr><tr><td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">Wir bedanken uns für Ihr Vertrauen und für das Ausfüllen unserer App!</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">Sie haben sich offensichtlich auseinandergesetzt mit den Fragen:&nbsp;</p>\n' +
  "<ul><li style=\"-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;color:#333333;font-size:14px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px\">Was kann ich für die Gesundheit meines Schützlings tun</p></li>\n" +
  "<li style=\"-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;color:#333333;font-size:14px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px\">Beschlag, oder Barhuf</p></li><li style=\"-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;color:#333333;font-size:14px\"><p style=\"Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px\">Alternativer Hufschutz - Hufschuhe</p></li></ul>\n" +
  '<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">Damit haben Sie schon bewiesen, dass Ihnen das Wohl Ihres Pferdes/Ponys wirklich am Herzen liegt.</p></td></tr><tr><td style="padding:0;Margin:0"><div style="height:8px"></div></td></tr><tr><td style="padding:0;Margin:0"><div 12px}></div></td></tr><tr><td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">Für uns sind Hufschuhe mehr als nur das Mittel zum Broterwerb. Wir brennen für das Thema Pferdegesundheit, als Barhufbearbeiter, Hufschuhfachberater und Schmiede natürlich besonders im Bezug auf gesunde Hufe.</p></td>\n' +
  '</tr><tr><td style="padding:0;Margin:0"><div style="height:8px"></div></td></tr><tr><td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">Aus all unseren Erfahrungen in den 50 Jahren, seit es Hufschuhe gibt, machen wir nun ein „Flipbook“. Ein Nachschlagewerk mit Texten, Geschichten, Empfehlungen, Tipps, Bildern und Videos zu ganz vielen Themen rund um´s Pferd/Pony.&nbsp;</p></td></tr><tr><td style="padding:0;Margin:0"><div style="height:8px"></div></td>\n' +
  '</tr><tr><td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">Viele Beiträge sind gar nicht „auf unserem Mist“ gewachsen. Sie wurden uns von zufriedenen Kunden zugetragen. So möchten wir das auch beibehalten. Ihre guten Ideen sollen mithelfen, Reitern und Pferdehaltern in vielen Situationen Möglichkeiten an die Hand zu geben, auf die man vielleicht alleine einfach nicht kommt! <a href="mailto:info@hufschuh.app" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#2CB543;font-size:16px">Werden Sie Mitredakteur, wir freuen uns drauf.</a>&nbsp;<br></p></td></tr><tr><td style="padding:0;Margin:0"><div style="height:8px"></div></td>\n' +
  '</tr><tr><td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">Vielen Dank! Ihr Hufschuhfachberaterteam</p></td></tr><tr><td style="padding:20px;Margin:0;font-size:0" align="center"><table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td></tr></table></td>\n' +
  '</tr><tr><td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Verantwortlich für die deutsche Website<br>Die Saupe Holding LLC<br>Vertreten durch: Günter Weißenborn (Chief Executive Officer)</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, \'helvetica neue\', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Bei Fragen und Anregungen rund um unsere hufschuh.app und unserem Angebot erreichen Sie <a target="_blank" href="mailto:info@hufschuh.app" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#2CB543;font-size:14px">hier</a> unser Team</p></td></tr></table></td>\n' +
  "</tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>\n";

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      entity = await strapi.services["horse"].create(data, { files });
    } else {
      ctx.request.body.user = ctx.state.user.id;
      ctx.request.body["user_info"] = ctx.state.user.userInfo;
      // console.log(ctx.state.user);
      entity = await strapi.services["horse"].create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models["horse"] });
  },

  /**
   * find a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;

    // only return the entity if the requesting users id matches
    // the one of the entity
    const [entity] = await strapi.services["horse"].find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!entity) {
      return ctx.unauthorized(
        `You're not allowed to find this entity or it doesn't exist`
      );
    }

    return sanitizeEntity(entity, { model: strapi.models["horse"] });
  },

  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    // only return the entity if the requesting users id matches
    // the one of the entity
    let [horse] = await strapi.services["horse"].find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!horse) {
      return ctx.unauthorized(
        `You're not allowed to update this entity or it doesn't exist`
      );
    }

    // send confirmation mail if "inquiry_at" is set
    let [oldHorse] = await strapi.services["horse"].find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    console.log(oldHorse.inquiry_at, ctx.request.body.inquiry_at);
    if (!oldHorse.inquiry_at && ctx.request.body.inquiry_at) {
      await strapi.plugins["email"].services.email.send({
        to: horse.user.email,
        from: "Hufschuh.app <noreply@hufschuh.app>",
        replyTo: "info@hufschuh.app",
        subject: "Anfrage erhalten",
        html: confirmationHtml,
      });
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services["horse"].update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services["horse"].update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models["horse"] });
  },

  /**
   * Delete a record.
   *
   * @return {Object}
   */

  async delete(ctx) {
    const { id } = ctx.params;

    let entity;

    // only return the entity if the requesting users id matches
    // the one of the entity
    let [horse] = await strapi.services["horse"].find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    console.log("horse id", id);
    console.log("user id", ctx.state.user.id);

    console.log(horse);

    if (!horse) {
      return ctx.unauthorized(
        `You're not allowed to update this entity or it doesn't exist`
      );
    }

    entity = await strapi.services["horse"].delete({ id }, ctx.request.body);

    return sanitizeEntity(entity, { model: strapi.models["horse"] });
  },
};
