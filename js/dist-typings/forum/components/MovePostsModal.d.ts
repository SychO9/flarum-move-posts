/// <reference types="mithril" />
import Modal from 'flarum/common/components/Modal';
import { ComponentAttrs } from 'flarum/common/Component';
import type Discussion from 'flarum/common/models/Discussion';
export interface MovePostsModalAttrs extends ComponentAttrs {
    discussion: Discussion;
    postIds: number[];
}
export default class MovePostsModal<T extends MovePostsModalAttrs> extends Modal<T> {
    isLoading: string | boolean;
    newDiscussion: boolean;
    newDiscussionTitle: string;
    targetDiscussionId: number | null;
    search: any;
    className(): string;
    title(): any;
    content(): JSX.Element;
    data(): Record<string, unknown>;
    emulate(): void;
    onsubmit(e: any, emulate: boolean): any;
}
