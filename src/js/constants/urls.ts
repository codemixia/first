import { CONFIG_TYPE } from '_models/global';

const { urls = {} } = (process.env.CONFIG as unknown as CONFIG_TYPE) || {};

export default {
    API: urls.api || '',
};
