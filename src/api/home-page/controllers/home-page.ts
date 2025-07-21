// src/api/home-page/controllers/home-page.ts

import { factories } from '@strapi/strapi';

/**
 * home-page controller
 */

export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
 
  async find(ctx) {
    const populate = {
      imageSlider: {
        populate: '*',
      },
      pageContent: {
        populate: '*', 
      },
    };

    ctx.query = { ...ctx.query, populate };

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));