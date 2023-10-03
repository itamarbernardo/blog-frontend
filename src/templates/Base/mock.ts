// import { BaseTemplateProps } from '.';
import { data } from '../../api/dados.json';

const setting = data.setting.data;
const { id } = setting;
const { blogName, blogDescription, menuLink, text } = setting.attributes;
const logo = setting.attributes.logo.data;

const settings = {
  id,
  attributes: {
    blogName,
    blogDescription,
    logo,
    menuLink,
    text,
  },
};

export default { settings, children: 'Olá mundo' };
