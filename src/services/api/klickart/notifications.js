import i18n from '../../../i18n';
import Klickart from './index';

export default class Notifications extends Klickart {
  constructor(config = {}) {
    config.path = `${i18n.locale}/notifications`;
    super(config);
  }
}
