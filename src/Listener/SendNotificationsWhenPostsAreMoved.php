<?php

namespace SychO\MovePosts\Listener;

use Flarum\Notification\NotificationSyncer;
use Flarum\Post\CommentPost;
use SychO\MovePosts\Event\PostsMoved;
use SychO\MovePosts\Notification\PostMovedBlueprint;

class SendNotificationsWhenPostsAreMoved
{
    public function __construct(
        protected NotificationSyncer $notifications
    ) {
    }

    public function handle(PostsMoved $event)
    {
        $actor = $event->actor;
        $posts = $event->posts
            ->unique('user_id')
            ->filter(function (CommentPost $post) use ($actor) {
                return $post->user_id !== $actor->id;
            });

        $this->notifications->sync(
            new PostMovedBlueprint($event->targetDiscussion, $event->sourceDiscussion),
            $posts->pluck('user')->all()
        );
    }
}
