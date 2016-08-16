import UrlResourceFactoryClass from 'infrastructure/classes/UrlResourceFactory';
import BaseResource from 'resources/BaseResource';

const route = `account`;

export default new UrlResourceFactoryClass(BaseResource, route);