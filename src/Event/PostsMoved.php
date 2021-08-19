<?php

namespace SychO\MovePosts\Event;

use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Collection;

class PostsMoved
{
    /**
     * @var Collection<CommentPost>
     */
    public $posts;

    /**
     * @var Discussion
     */
    public $sourceDiscussion;

    /**
     * @var User
     */
    public $actor;

    public function __construct(Collection $posts, Discussion $sourceDiscussion, User $actor)
    {
        $this->posts = $posts;
        $this->sourceDiscussion = $sourceDiscussion;
        $this->actor = $actor;
    }
}
