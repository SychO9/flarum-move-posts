<?php

/*
 * This file is part of sycho/flarum-move-posts.
 *
 * Copyright (c) 2021 Sami Mazouz.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace SychO\MovePosts;

use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Extend;
use Flarum\Api\Context;
use Flarum\Api\Endpoint;
use Flarum\Api\Resource;
use Flarum\Api\Schema;

return [
    (new \SychO\UiKit\Extend\Register),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\ApiResource(Resource\DiscussionResource::class))
        ->fields(fn () => [
            Schema\Boolean::make('isFirstMoved'),
        ]),

    (new Extend\ApiResource(Resource\ForumResource::class))
        ->fields(fn () => [
            Schema\Boolean::make('canMovePosts')
                ->get(fn (object $forum, Context $context) => $context->getActor()->can('movePosts'))
        ]),

    (new Extend\Formatter)
        ->render(Formatter\FormatPostMentions::class)
        ->unparse(Formatter\UnparsePostMentions::class),

    (new Extend\Routes('api'))
        ->post('/posts/move', 'move-posts.move', Api\Controller\MovePostsController::class)
        ->post('/posts/move/check', 'move-posts.check', Api\Controller\ShowMovePostsStatusController::class),

    (new Extend\Policy())
        ->globalPolicy(Access\GlobalPolicy::class),

    (new Extend\ErrorHandling())
        ->status('move_old_post_to_newer_discussion', 409)
        ->status('move_posts_from_different_discussions', 409),

    (new Extend\Post)
        ->type(PostMovedPost::class),

    (new Extend\Notification)
        ->type(Notification\PostMovedBlueprint::class, ['alert']),

    (new Extend\Event)
        ->listen(Event\PostsMoved::class, Listener\SendNotificationsWhenPostsAreMoved::class),
];
