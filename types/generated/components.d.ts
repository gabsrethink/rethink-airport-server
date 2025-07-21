import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCarReservationBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_car_reservation_banners';
  info: {
    displayName: 'Car Reservation Banner';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.car-reservation-banner': ElementsCarReservationBanner;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
    }
  }
}
