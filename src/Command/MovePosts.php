<?php

/*
 * This file is part of sycho/flarum-move-posts.
 *
 * Copyright (c) 2021 Sami Mazouz.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace SychO\MovePosts\Command;

use Flarum\User\User;

class MovePosts
{
    public function __construct(
        public User $actor,
        public array $data,
        public bool $emulate
    ) {
    }
}
