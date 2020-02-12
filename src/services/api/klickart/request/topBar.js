import i18n from '@/i18n';
import Klickart from './index';

export default class TopBar extends Klickart {
  constructor(config = {}) {
    config.path = `${i18n.locale}/partials/top_bar`;
    super(config);
  }
}
