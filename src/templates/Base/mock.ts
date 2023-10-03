// import { BaseTemplateProps } from '.';
import { data } from '../../api/dados.json';

const settingData = data.setting.data;
const { id } = settingData;
const { blogName, blogDescription, menuLink, text } = settingData.attributes;
const logo = settingData.attributes.logo.data;

const setting = {
  id,
  attributes: {
    blogName,
    blogDescription,
    logo,
    menuLink,
    text,
  },
};

console.log('SETTING POST TEMPLATE: ', setting);

export default { setting, children: 'Olá mundo' };
