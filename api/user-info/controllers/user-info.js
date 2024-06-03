"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

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
      entity = await strapi.services["user-info"].create(data, { files });
    } else {
      ctx.request.body.user = ctx.state.user.id;
      entity = await strapi.services["user-info"].create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models["user-info"] });
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
    const [entity] = await strapi.services["user-info"].find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!entity) {
      return ctx.unauthorized(
        `You're not allowed to find this entity or it doesn't exist`
      );
    }

    return sanitizeEntity(entity, { model: strapi.models["user-info"] });
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
    let [userInfo] = await strapi.services["user-info"].find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!userInfo) {
      return ctx.unauthorized(
        `You're not allowed to update this entity or it doesn't exist`
      );
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services["user-info"].update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services["user-info"].update(
        { id },
        ctx.request.body
      );
    }

    return sanitizeEntity(entity, { model: strapi.models["user-info"] });
  },
};
