/// <reference types="mithril" />
import FormModal from 'flarum/common/components/FormModal';
import { ComponentAttrs } from 'flarum/common/Component';
import type Discussion from 'flarum/common/models/Discussion';
import GlobalSearchState from 'flarum/forum/states/GlobalSearchState';
export interface MovePostsModalAttrs extends ComponentAttrs {
    discussion: Discussion;
    postIds: number[];
}
export default class MovePostsModal<T extends MovePostsModalAttrs> extends FormModal<T> {
    isLoading: string | boolean;
    newDiscussion: boolean;
    newDiscussionTitle: string;
    targetDiscussionId: number | null;
    search: GlobalSearchState;
    className(): string;
    title(): string | any[];
    content(): JSX.Element;
    data(): Record<string, unknown>;
    emulate(): void;
    onsubmit(e: any, emulate: boolean): Promise<any>;
}
