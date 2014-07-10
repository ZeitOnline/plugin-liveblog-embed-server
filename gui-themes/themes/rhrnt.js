'use strict';

define([
    'plugins/wrappup-toggle',
    'plugins/post-hash',
    'plugins/permanent-link',
    'plugins/user-comments',
    'plugins/twitter-widgets',
    'plugins/social-share',
    'plugins/button-pagination',
    'tmpl!theme/container',
    'tmpl!theme/item/base',
    'css!theme/liveblog'
], function() {
    return {
        plugins: [
            'wrappup-toggle',
            'post-hash',
            'permanent-link',
            'user-comments',
            'twitter-widgets',
            'social-share',
            'button-pagination'
        ]
    };
});
