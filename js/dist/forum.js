/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/MovePostsModal.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/MovePostsModal.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovePostsModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/FormModal */ "flarum/common/components/FormModal");
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ext_sycho_flarum_uikit_forum_components_DiscussionSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ext:sycho/flarum-uikit/forum/components/DiscussionSearch */ "ext:sycho/flarum-uikit/forum/components/DiscussionSearch");
/* harmony import */ var ext_sycho_flarum_uikit_forum_components_DiscussionSearch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ext_sycho_flarum_uikit_forum_components_DiscussionSearch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/states/GlobalSearchState */ "flarum/forum/states/GlobalSearchState");
/* harmony import */ var flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_6__);







class MovePostsModal extends (flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3___default()) {
  constructor() {
    super(...arguments);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isLoading", false);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "newDiscussion", false);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "newDiscussionTitle", '');
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "targetDiscussionId", null);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "search", new (flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_6___default())());
  }
  className() {
    return 'MovePostsModal';
  }
  title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.title');
  }
  content() {
    return m("div", {
      className: "Modal-body"
    }, m("form", {
      className: "Form",
      onsubmit: this.onsubmit.bind(this)
    }, m("div", {
      className: "Form-group"
    }, m("label", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.selected_posts', {
      count: this.attrs.postIds.length
    })), m("input", {
      className: "FormControl",
      readonly: true,
      value: this.attrs.postIds.join(', ')
    })), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
      state: this.newDiscussion,
      onchange: () => this.newDiscussion = !this.newDiscussion
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.new_discussion'))), this.newDiscussion ? m("div", {
      className: "Form-group"
    }, m("label", {
      for: "discussion_name"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.discussion_name')), m("p", {
      className: "helptext"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.discussion_help')), m("input", {
      id: "discussion_name",
      className: "FormControl",
      required: true,
      oninput: e => this.newDiscussionTitle = e.target.value
    })) : m("div", {
      className: "Form-group"
    }, m("label", {
      for: "destination"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.destination')), m((ext_sycho_flarum_uikit_forum_components_DiscussionSearch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: this.search,
      ignore: this.attrs.discussion.id(),
      onSelect: discussion => this.targetDiscussionId = discussion.id()
    })), m("div", {
      className: "Form-group Form-controls"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--primary",
      type: "submit",
      loading: this.isLoading === 'submit',
      disabled: this.isLoading === 'check' || !this.targetDiscussionId && !this.newDiscussionTitle
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.submit')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button",
      onclick: this.emulate.bind(this),
      loading: this.isLoading === 'check',
      disabled: this.isLoading === 'submit' || !this.targetDiscussionId && !this.newDiscussionTitle
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.check')))));
  }
  data() {
    const data = {
      sourceDiscussionId: this.attrs.discussion.id(),
      postIds: this.attrs.postIds
    };
    if (this.newDiscussion) {
      data.newDiscussion = true;
      data.newDiscussionTitle = this.newDiscussionTitle;
    } else {
      data.targetDiscussionId = this.targetDiscussionId;
    }
    return data;
  }
  emulate() {
    this.onsubmit(null, true).then(response => {
      switch (response.status) {
        case 'old_to_new_move':
          this.alertAttrs = {
            type: 'error',
            content: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.status.old_to_new_move')
          };
          break;
        case 'simple_move':
          this.alertAttrs = {
            type: 'success',
            content: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.status.simple_move')
          };
          break;
        case 'complex_move':
          this.alertAttrs = {
            type: 'warning',
            content: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.modal.status.complex_move')
          };
          break;
        default:
          break;
      }
      m.redraw();
    });
  }
  onsubmit(e, emulate) {
    if (e) e.preventDefault();
    this.isLoading = emulate ? 'check' : 'submit';
    let url = '/api/posts/move';
    if (emulate) url += '/check';
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: "".concat(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl')).concat(url),
      body: {
        data: this.data()
      },
      errorHandler: e => {
        const error = e.response.errors[0];
        this.isLoading = false;
        if (error.code !== 'move_old_post_to_newer_discussion') {
          throw e;
        }
        this.alertAttrs = {
          type: 'error',
          content: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.error.move_old_post_to_newer_discussion')
        };
        m.redraw();
      }
    }).then(response => {
      this.isLoading = false;
      if (!emulate) {
        m.redraw();
        window.location.reload();
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.close();
      }
      return response;
    });
  }
}
flarum.reg.add('sycho-move-posts', 'forum/components/MovePostsModal', MovePostsModal);

/***/ }),

/***/ "./src/forum/components/PostMovedNotification.tsx":
/*!********************************************************!*\
  !*** ./src/forum/components/PostMovedNotification.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostMovedNotification)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_0__);

class PostMovedNotification extends (flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_0___default()) {
  icon() {
    return 'fas fa-exchange-alt';
  }
  href() {
    return app.route('discussion', {
      id: this.attrs.notification.content().targetDiscussionId
    });
  }
  content() {
    return app.translator.trans('sycho-move-posts.forum.notifications.post_moved_text', {
      targetDiscussionTitle: m("span", {
        className: "MovePosts-Notification-targetDiscussion"
      }, this.attrs.notification.content().targetDiscussionTitle)
    });
  }
}
flarum.reg.add('sycho-move-posts', 'forum/components/PostMovedNotification', PostMovedNotification);

/***/ }),

/***/ "./src/forum/components/PostMovedPost.tsx":
/*!************************************************!*\
  !*** ./src/forum/components/PostMovedPost.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostMovedPost)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/EventPost */ "flarum/forum/components/EventPost");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_1__);


class PostMovedPost extends (flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_0___default()) {
  icon() {
    return 'fas fa-exchange-alt';
  }
  descriptionKey() {
    return 'sycho-move-posts.forum.post_stream.post_moved';
  }
  descriptionData() {
    const post = this.attrs.post;
    const data = post.content();
    return {
      target_discussion: m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "EventPost-PostMoved-target",
        href: app.route('discussion.near', {
          id: data.targetDiscussionId,
          near: data.number
        })
      }, data.targetDiscussionTitle),
      count: data.count
    };
  }
}
flarum.reg.add('sycho-move-posts', 'forum/components/PostMovedPost', PostMovedPost);

/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Badge */ "flarum/common/components/Badge");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/Post */ "flarum/forum/components/Post");
/* harmony import */ var flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/utils/PostControls */ "flarum/forum/utils/PostControls");
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _states_DiscussionPageState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./states/DiscussionPageState */ "./src/forum/states/DiscussionPageState.ts");
/* harmony import */ var _components_MovePostsModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/MovePostsModal */ "./src/forum/components/MovePostsModal.tsx");
/* harmony import */ var _components_PostMovedPost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/PostMovedPost */ "./src/forum/components/PostMovedPost.tsx");
/* harmony import */ var _components_PostMovedNotification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PostMovedNotification */ "./src/forum/components/PostMovedNotification.tsx");















flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('sycho/flarum-move-posts', () => {
  // @ts-ignore
  (flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9___default().prototype).isFirstMoved = flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default().attribute('isFirstMoved');
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9___default().prototype), 'badges', function (badges) {
    if (this.isFirstMoved()) {
      badges.add('firstMoved', m((flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default()), {
        type: "firstPostMoved",
        label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.badge.first_moved_tooltip'),
        icon: "fas fa-exchange-alt"
      }), -20);
    }
  });

  // @ts-ignore
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().postComponents).postMoved = _components_PostMovedPost__WEBPACK_IMPORTED_MODULE_13__["default"];

  // @ts-ignore
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().notificationComponents).postMoved = _components_PostMovedNotification__WEBPACK_IMPORTED_MODULE_14__["default"];
  if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().data).resources[0].attributes.canMovePosts) {
    return;
  }
  const state = new _states_DiscussionPageState__WEBPACK_IMPORTED_MODULE_11__["default"]();
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'oninit', function () {
    this.subtree.check(() => state.selectedPostsToMove());
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'classes', function (classes) {
    if (this.attrs.post.contentType() === 'comment' && state.has(this.attrs.post.id())) {
      classes.push('Post--moving');
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'headerItems', function (items) {
    if (state.has(this.attrs.post.id())) {
      items.add('moving', m("span", {
        className: "PostMoving"
      }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_8___default()), {
        name: "fas fa-exchange-alt"
      }), " ", flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.post.moving')));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'oncreate', () => {
    state.selectedPostsToMove([]);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'sidebarItems', function (items) {
    if (state.selectedPostsToMove().length) {
      items.add('movePosts', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        icon: "fas fa-exchange-alt",
        className: "Button",
        onclick: () => flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_MovePostsModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
          postIds: state.selectedPostsToMove(),
          discussion: this.discussion
        })
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-move-posts.forum.discussion.move_posts'), m("span", {
        className: "Bubble MovePosts-Button-count"
      }, state.selectedPostsToMove().length)));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7___default()), 'moderationControls', function (items, post) {
    if (post.contentType() !== 'comment') return;
    const operation = state.has(post.id()) ? 'unmove' : 'move';
    items.add('movePost', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      icon: "fas fa-arrow-right",
      onclick: () => {
        if (operation === 'move') {
          state.push(post.id());
        } else {
          state.remove(post.id());
        }
        m.redraw();
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("sycho-move-posts.forum.post.".concat(operation))));
  });
});

/***/ }),

/***/ "./src/forum/states/DiscussionPageState.ts":
/*!*************************************************!*\
  !*** ./src/forum/states/DiscussionPageState.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionPageState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_1__);


class DiscussionPageState {
  constructor() {
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedPostsToMove", void 0);
    this.selectedPostsToMove = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_1___default()([]);
  }
  push(postId) {
    this.selectedPostsToMove([...this.selectedPostsToMove(), postId]);
  }
  remove(postId) {
    this.selectedPostsToMove(this.selectedPostsToMove().filter(id => id !== postId));
  }
  has(postId) {
    return this.selectedPostsToMove().includes(postId);
  }
}
flarum.reg.add('sycho-move-posts', 'forum/states/DiscussionPageState', DiscussionPageState);

/***/ }),

/***/ "flarum/common/Model":
/*!*********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Model')" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/Model');

/***/ }),

/***/ "flarum/common/components/Badge":
/*!********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Badge')" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Badge');

/***/ }),

/***/ "flarum/common/components/Button":
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Button')" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Button');

/***/ }),

/***/ "flarum/common/components/FormModal":
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/FormModal')" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/FormModal');

/***/ }),

/***/ "flarum/common/components/Icon":
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Icon')" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Icon');

/***/ }),

/***/ "flarum/common/components/Link":
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Link')" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Link');

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Switch')" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Switch');

/***/ }),

/***/ "flarum/common/extend":
/*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/extend');

/***/ }),

/***/ "flarum/common/models/Discussion":
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/models/Discussion')" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/models/Discussion');

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!****************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/Stream')" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/Stream');

/***/ }),

/***/ "flarum/forum/app":
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/app');

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/CommentPost')" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/CommentPost');

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/DiscussionPage')" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/DiscussionPage');

/***/ }),

/***/ "flarum/forum/components/EventPost":
/*!***********************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/EventPost')" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/EventPost');

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/Notification')" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/Notification');

/***/ }),

/***/ "flarum/forum/components/Post":
/*!******************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/Post')" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/Post');

/***/ }),

/***/ "flarum/forum/states/GlobalSearchState":
/*!***************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/states/GlobalSearchState')" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/states/GlobalSearchState');

/***/ }),

/***/ "flarum/forum/utils/PostControls":
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/utils/PostControls')" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/utils/PostControls');

/***/ }),

/***/ "ext:sycho/flarum-uikit/forum/components/DiscussionSearch":
/*!*************************************************************************************!*\
  !*** external "flarum.reg.get('sycho-uikit', 'forum/components/DiscussionSearch')" ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('sycho-uikit', 'forum/components/DiscussionSearch');

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		flarum.reg._webpack_runtimes["sycho-move-posts"] ||= __webpack_require__;// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map