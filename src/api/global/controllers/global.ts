// src/api/global/controllers/global.ts

import { factories } from '@strapi/strapi';

/**
 * global controller
 */

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
  async find(ctx) {
    const populate = {
      footerLinks: {     
        populate: '*',   
      },
    };

    ctx.query = { ...ctx.query, populate };

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));