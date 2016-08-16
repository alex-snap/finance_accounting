import { objectAssign } from 'helpers/immutable';

export default function root(state = {}, action = {}) {
    return objectAssign(state);
}