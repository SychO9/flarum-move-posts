<?php

namespace SychO\MovePosts\Event;

use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Collection;

class PostsMoved
{
    public function __construct(
        public Collection $posts,
        public Discussion $targetDiscussion,
        public Discussion $sourceDiscussion,
        public User $actor
    ) {
    }
}
