module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!***********************************************************************************************************!*\
  !*** /home/samilyas/www/flarum/packages/core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../../core/js/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../core/js/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!************************************************************************************************************!*\
  !*** /home/samilyas/www/flarum/packages/core/js/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/components/MovePostsModal.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/MovePostsModal.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovePostsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_uikit_forum_DiscussionSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/uikit/forum/DiscussionSearch */ "flarum/uikit/forum/DiscussionSearch");
/* harmony import */ var flarum_uikit_forum_DiscussionSearch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_uikit_forum_DiscussionSearch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/states/GlobalSearchState */ "flarum/forum/states/GlobalSearchState");
/* harmony import */ var flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_5__);







var MovePostsModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MovePostsModal, _Modal);

  function MovePostsModal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.isLoading = false;
    _this.newDiscussion = false;
    _this.newDiscussionTitle = '';
    _this.targetDiscussionId = null;
    _this.search = new flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_5___default.a();
    return _this;
  }

  var _proto = MovePostsModal.prototype;

  _proto.className = function className() {
    return 'Modal--small MovePostsModal';
  };

  _proto.title = function title() {
    return app.translator.trans('sycho-move-posts.forum.modal.title');
  };

  _proto.content = function content() {
    var _this2 = this;

    return m("div", {
      className: "Modal-body"
    }, m("form", {
      className: "Form",
      onsubmit: this.onsubmit.bind(this)
    }, m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('sycho-move-posts.forum.modal.selected_posts', {
      count: this.attrs.postIds.length
    })), m("input", {
      className: "FormControl",
      readonly: true,
      value: this.attrs.postIds.join(', ')
    })), m("div", {
      className: "Form-group"
    }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
      state: this.newDiscussion,
      onchange: function onchange() {
        return _this2.newDiscussion = !_this2.newDiscussion;
      }
    }, app.translator.trans('sycho-move-posts.forum.modal.new_discussion'))), this.newDiscussion ? m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "discussion_name"
    }, app.translator.trans('sycho-move-posts.forum.modal.discussion_name')), m("p", {
      className: "helptext"
    }, app.translator.trans('sycho-move-posts.forum.modal.discussion_help')), m("input", {
      id: "discussion_name",
      className: "FormControl",
      required: true,
      oninput: function oninput(e) {
        return _this2.newDiscussionTitle = e.target.value;
      }
    })) : m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "destination"
    }, app.translator.trans('sycho-move-posts.forum.modal.destination')), m(flarum_uikit_forum_DiscussionSearch__WEBPACK_IMPORTED_MODULE_4___default.a, {
      state: this.search,
      ignore: this.attrs.discussion.id(),
      onSelect: function onSelect(discussion) {
        return _this2.targetDiscussionId = discussion.id();
      }
    })), m("div", {
      className: "Form-group Form-controls"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "Button Button--primary",
      type: "submit",
      loading: this.isLoading === 'submit',
      disabled: this.isLoading === 'check' || !this.targetDiscussionId && !this.newDiscussionTitle
    }, app.translator.trans('sycho-move-posts.forum.modal.submit')), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "Button",
      onclick: this.emulate.bind(this),
      loading: this.isLoading === 'check',
      disabled: this.isLoading === 'submit' || !this.targetDiscussionId && !this.newDiscussionTitle
    }, app.translator.trans('sycho-move-posts.forum.modal.check')))));
  };

  _proto.data = function data() {
    var data = {
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
  };

  _proto.emulate = function emulate() {
    var _this3 = this;

    this.onsubmit(null, true).then(function (response) {
      switch (response.data.attributes.status) {
        case 'old_to_new_move':
          _this3.alertAttrs = {
            type: 'error',
            content: app.translator.trans('sycho-move-posts.forum.modal.status.old_to_new_move')
          };
          break;

        case 'simple_move':
          _this3.alertAttrs = {
            type: 'success',
            content: app.translator.trans('sycho-move-posts.forum.modal.status.simple_move')
          };
          break;

        case 'complex_move':
          _this3.alertAttrs = {
            type: 'warning',
            content: app.translator.trans('sycho-move-posts.forum.modal.status.complex_move')
          };
          break;

        default:
          break;
      }

      m.redraw();
    });
  };

  _proto.onsubmit = function onsubmit(e, emulate) {
    var _this4 = this;

    if (e) e.preventDefault();
    this.isLoading = emulate ? 'check' : 'submit';
    var url = '/api/posts/move';
    if (emulate) url += '/check';
    return app.request({
      method: 'POST',
      url: "" + app.forum.attribute('baseUrl') + url,
      body: {
        data: this.data()
      },
      errorHandler: function errorHandler(e) {
        var error = e.response.errors[0];
        _this4.isLoading = false;

        if (error.code !== 'move_old_post_to_newer_discussion') {
          throw e;
        }

        _this4.alertAttrs = {
          type: 'error',
          content: app.translator.trans('sycho-move-posts.forum.error.move_old_post_to_newer_discussion')
        };
        m.redraw();
      }
    }).then(function (response) {
      _this4.isLoading = false;

      if (!emulate) {
        m.redraw();
        window.location.reload();
        app.modal.close();
      }

      return response;
    });
  };

  return MovePostsModal;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/PostMovedNotification.tsx":
/*!********************************************************!*\
  !*** ./src/forum/components/PostMovedNotification.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostMovedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);



var PostMovedNotification = /*#__PURE__*/function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostMovedNotification, _Notification);

  function PostMovedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = PostMovedNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-exchange-alt';
  };

  _proto.href = function href() {
    return app.route('discussion', {
      id: this.attrs.notification.content().targetDiscussionId
    });
  };

  _proto.content = function content() {
    return app.translator.trans('sycho-move-posts.forum.notifications.post_moved_text', {
      targetDiscussionTitle: m("span", {
        className: "MovePosts-Notification-targetDiscussion"
      }, this.attrs.notification.content().targetDiscussionTitle)
    });
  };

  return PostMovedNotification;
}(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PostMovedPost.tsx":
/*!************************************************!*\
  !*** ./src/forum/components/PostMovedPost.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostMovedPost; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/EventPost */ "flarum/forum/components/EventPost");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);




var PostMovedPost = /*#__PURE__*/function (_EventPost) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostMovedPost, _EventPost);

  function PostMovedPost() {
    return _EventPost.apply(this, arguments) || this;
  }

  var _proto = PostMovedPost.prototype;

  _proto.icon = function icon() {
    return 'fas fa-exchange-alt';
  };

  _proto.descriptionKey = function descriptionKey() {
    return 'sycho-move-posts.forum.post_stream.post_moved';
  };

  _proto.descriptionData = function descriptionData() {
    var post = this.attrs.post;
    var data = post.content();
    return {
      target_discussion: m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "EventPost-PostMoved-target",
        href: app.route('discussion.near', {
          id: data.targetDiscussionId,
          near: data.number
        })
      }, data.targetDiscussionTitle),
      count: data.count
    };
  };

  return PostMovedPost;
}(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _states_DiscussionPageState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./states/DiscussionPageState */ "./src/forum/states/DiscussionPageState.ts");
/* harmony import */ var _components_MovePostsModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/MovePostsModal */ "./src/forum/components/MovePostsModal.tsx");
/* harmony import */ var _components_PostMovedPost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/PostMovedPost */ "./src/forum/components/PostMovedPost.tsx");
/* harmony import */ var _components_PostMovedNotification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PostMovedNotification */ "./src/forum/components/PostMovedNotification.tsx");















flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('sycho/flarum-move-posts', function () {
  // @ts-ignore
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.isFirstMoved = flarum_common_Model__WEBPACK_IMPORTED_MODULE_10___default.a.attribute('isFirstMoved');
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'badges', function (badges) {
    if (this.isFirstMoved()) {
      badges.add('firstMoved', m(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "firstPostMoved",
        label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('sycho-move-posts.forum.badge.first_moved_tooltip'),
        icon: "fas fa-exchange-alt"
      }), -20);
    }
  }); // @ts-ignore

  flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.postComponents.postMoved = _components_PostMovedPost__WEBPACK_IMPORTED_MODULE_13__["default"]; // @ts-ignore

  flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.notificationComponents.postMoved = _components_PostMovedNotification__WEBPACK_IMPORTED_MODULE_14__["default"];

  if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.resources[0].attributes.canMovePosts) {
    return;
  }

  var state = new _states_DiscussionPageState__WEBPACK_IMPORTED_MODULE_11__["default"]();
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'oninit', function () {
    this.subtree.check(function () {
      return state.selectedPostsToMove();
    });
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'classes', function (classes) {
    if (this.attrs.post.contentType() === 'comment' && state.has(this.attrs.post.id())) {
      classes.push('Post--moving');
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'headerItems', function (items) {
    if (state.has(this.attrs.post.id())) {
      items.add('moving', m("span", {
        className: "PostMoving"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8___default()('fas fa-exchange-alt'), " ", flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('sycho-move-posts.forum.post.moving')));
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'oncreate', function () {
    state.selectedPostsToMove([]);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'sidebarItems', function (items) {
    var _this = this;

    if (state.selectedPostsToMove().length) {
      items.add('movePosts', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        icon: "fas fa-exchange-alt",
        className: "Button",
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_components_MovePostsModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
            postIds: state.selectedPostsToMove(),
            discussion: _this.discussion
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('sycho-move-posts.forum.discussion.move_posts'), m("span", {
        className: "MovePosts-Button-count"
      }, state.selectedPostsToMove().length)));
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7___default.a, 'moderationControls', function (items, post) {
    if (post.contentType() !== 'comment') return;
    var operation = state.has(post.id()) ? 'unmove' : 'move';
    items.add('movePost', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      icon: "fas fa-arrow-right",
      onclick: function onclick() {
        if (operation === 'move') {
          state.push(post.id());
        } else {
          state.remove(post.id());
        }

        m.redraw();
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("sycho-move-posts.forum.post." + operation)));
  });
});

/***/ }),

/***/ "./src/forum/states/DiscussionPageState.ts":
/*!*************************************************!*\
  !*** ./src/forum/states/DiscussionPageState.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiscussionPageState; });
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_0__);


var DiscussionPageState = /*#__PURE__*/function () {
  function DiscussionPageState() {
    this.selectedPostsToMove = void 0;
    this.selectedPostsToMove = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_0___default()([]);
  }

  var _proto = DiscussionPageState.prototype;

  _proto.push = function push(postId) {
    this.selectedPostsToMove([].concat(this.selectedPostsToMove(), [postId]));
  };

  _proto.remove = function remove(postId) {
    this.selectedPostsToMove(this.selectedPostsToMove().filter(function (id) {
      return id !== postId;
    }));
  };

  _proto.has = function has(postId) {
    return this.selectedPostsToMove().includes(postId);
  };

  return DiscussionPageState;
}();



/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Badge":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Badge']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Badge'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/models/Discussion":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/models/Discussion']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/Discussion'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ }),

/***/ "flarum/forum/components/EventPost":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/EventPost']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/EventPost'];

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Notification']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/Notification'];

/***/ }),

/***/ "flarum/forum/components/Post":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Post']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/Post'];

/***/ }),

/***/ "flarum/forum/states/GlobalSearchState":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/states/GlobalSearchState']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/states/GlobalSearchState'];

/***/ }),

/***/ "flarum/forum/utils/PostControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/PostControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/utils/PostControls'];

/***/ }),

/***/ "flarum/uikit/forum/DiscussionSearch":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['uikit/forum/DiscussionSearch']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['uikit/forum/DiscussionSearch'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map