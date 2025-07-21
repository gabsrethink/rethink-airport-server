import { factories } from '@strapi/strapi';

/**
 * promotion controller
 */

export default factories.createCoreController('api::promotion.promotion', ({ strapi }) => ({
  async find(ctx) {
    const defaultQuery = {
      populate: {
        image: true,
      },
      pagination: {
        pageSize: 4,
      },
      sort: 'publishedAt:desc',
    };

    ctx.query = { ...defaultQuery, ...ctx.query };

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));