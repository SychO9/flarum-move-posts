import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

export default [
  new Extend.Admin()
    .setting(() => ({
      setting: 'sycho-move-posts.moved_first_post_content',
      label: app.translator.trans('sycho-move-posts.admin.settings.moved_first_post_content', {}, true),
      help: app.translator.trans('sycho-move-posts.admin.settings.moved_first_post_content_help', {}, true),
      default: app.translator.trans('sycho-move-posts.lib.discussion.first_post.default_content', {}, true),
      type: 'textarea',
      rows: 6,
    }))
    .setting(() => ({
      setting: 'sycho-move-posts.group_sequential_event_posts',
      label: app.translator.trans('sycho-move-posts.admin.settings.group_sequential_posts', {}, true),
      type: 'boolean',
    }))
    .permission(
      () => ({
        icon: 'fas fa-exchange-alt',
        label: app.translator.trans('sycho-move-posts.admin.permissions.move_posts', {}, true),
        permission: 'sycho-move-posts:movePosts',
      }),
      'moderate'
    ),
];
