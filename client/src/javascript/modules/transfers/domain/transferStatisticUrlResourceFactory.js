import UrlResourceFactoryClass from 'infrastructure/classes/UrlResourceFactory';
import BaseResource from 'resources/BaseResource';

const route = `transfers/statistic`;

export default new UrlResourceFactoryClass(BaseResource, route);