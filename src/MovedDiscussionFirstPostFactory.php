<?php

namespace SychO\MovePosts;

use Flarum\Discussion\Discussion;
use Flarum\Http\UrlGenerator;
use Flarum\Post\CommentPost;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class MovedDiscussionFirstPostFactory
{
    public function __construct(
        protected SettingsRepositoryInterface $settings,
        protected TranslatorInterface $translator,
        protected UrlGenerator $url
    ) {
    }

    public function create(Discussion $sourceDiscussion, Discussion $targetDiscussion, CommentPost $oldFirstPost, CommentPost $movedPost): CommentPost
    {
        $newFirstPost = new CommentPost();

        $newFirstPost->discussion_id = $sourceDiscussion->id;
        $newFirstPost->created_at = $oldFirstPost->created_at;
        $newFirstPost->number = $oldFirstPost->number;
        $newFirstPost->user_id = $oldFirstPost->user_id;
        $newFirstPost->type = CommentPost::$type;
        $newFirstPost->ip_address = '';

        $content = trim($this->settings->get('sycho-move-posts.moved_first_post_content'));

        if (empty($content)) {
            $content = $this->translator->trans('sycho-move-posts.lib.discussion.first_post.default_content');
        }

        $newFirstPost->content = str_replace(
            ['%DISCUSSION_NAME%', '%POST_LINK%'],
            [$targetDiscussion->title, $this->url->to('forum')->route('discussion', ['id' => $targetDiscussion->id, 'near' => $movedPost->number])],
            $content
        );

        $newFirstPost->saveQuietly();

        return $newFirstPost;
    }
}
