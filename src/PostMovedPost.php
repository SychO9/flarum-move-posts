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

use Carbon\Carbon;
use Flarum\Discussion\Discussion;
use Flarum\Post\Post;
use Flarum\Post\AbstractEventPost;
use Flarum\Post\MergeableInterface;

class PostMovedPost extends AbstractEventPost implements MergeableInterface
{
    public static $type = 'postMoved';

    public function saveAfter(Post $previous = null)
    {
        return $this;
    }

    public static function reply(int $discussionId, int $userId, Discussion $targetDiscussion, Post $movedPost, Post $oldPost, int $count = 1)
    {
        $post = new static;

        $post->content = static::buildContent($targetDiscussion->id, $targetDiscussion->title, $count, $movedPost);
        $post->created_at = $movedPost->created_at;
        $post->discussion_id = $discussionId;
        $post->user_id = $userId;
        $post->number = $oldPost->number;
        $post->type = static::$type;

        return $post;
    }

    protected static function buildContent(int $targetDiscussionId, string $targetDiscussionTitle, int $count, Post $post)
    {
        $number = $post->number;
        $originalPostId = $post->id;

        return compact('targetDiscussionId', 'targetDiscussionTitle', 'count', 'number', 'originalPostId');
    }
}
