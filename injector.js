/* global hexo */
const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.injector.register('body_end', () => {
    return js('/js/coze-integration.js');
});