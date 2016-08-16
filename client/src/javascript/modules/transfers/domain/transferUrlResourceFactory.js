import UrlResourceFactoryClass from 'infrastructure/classes/UrlResourceFactory';
import BaseResource from 'resources/BaseResource';

const route = `transfers`;

export default new UrlResourceFactoryClass(BaseResource, route);