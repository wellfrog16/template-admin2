import utils from '@/utils/utils';
import config from '@/config';
import { _ } from '@/utils/cdn';

/**
 * 存放header等信息
 *
 * @returns json
 */
function site() {
    return {
        username: utils.localStorage.get('username'),
        destory() {
            utils.localStorage.clear('username');
        },
        isActive() {
            return !utils.isEmpty(this.username);
        },
    };
}

function mergeParam(state, srcValue) {
    Object.keys(state).forEach((key) => {
        // 如果还是对象
        if (_.isPlainObject(state[key]) && srcValue[key]) { mergeParam(state[key], srcValue[key]); }

        state[key] = srcValue[key] || '';
        if (key === 'p') { state[key] = srcValue[key] || config.page.p; }
        if (key === 'ps') { state[key] = srcValue[key] || config.page.ps; }
    });
}

export default {
    site,
    mergeParam,
};
