// import { MenuPropsLinks } from '../components/Menu';
// import { StrapiImage } from './strapi-image';

export type SettingsStrapi = {
  id: string;
  attributes: {
    blogName: string;
    blogDescription: string;
    logo: {
      id: string;
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
    menuLink: {
      id: string;
      link: string;
      newTab?: boolean;
      text: string;
    }[];
    text: string;
  };
};
