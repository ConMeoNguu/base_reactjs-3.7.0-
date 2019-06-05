/**
 *
 * Asynchronously loads the component for Qbcd
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
