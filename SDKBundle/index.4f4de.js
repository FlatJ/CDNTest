window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  SdkPopCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95258ZAni1Nh7aG2pzuFsYq", "SdkPopCtrl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SdkPopCtrl = function(_super) {
      __extends(SdkPopCtrl, _super);
      function SdkPopCtrl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SdkPopCtrl.prototype.onCloseBtnClick = function() {
        this.node.removeFromParent();
        this.node.destroy();
        cc.assetManager.releaseUnusedAssets();
      };
      SdkPopCtrl = __decorate([ ccclass ], SdkPopCtrl);
      return SdkPopCtrl;
    }(cc.Component);
    exports.default = SdkPopCtrl;
    cc._RF.pop();
  }, {} ],
  SdkUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef7a8OHwNBHMYAtxLNsjor1", "SdkUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SdkUtils = void 0;
    var SdkUtils = function() {
      function SdkUtils() {}
      SdkUtils.instance = function() {
        var r = Math.random();
        console.log(r);
        return r > .5 ? SdkUtils : null;
      };
      SdkUtils.openPop = function() {
        cc.assetManager.loadBundle("SDKBundle", function(err, bundle) {
          if (err) {
            console.error(err);
            return;
          }
          bundle.load("Prefabs/SdkPop", cc.Prefab, function(err, prefab) {
            if (err) {
              console.error(err);
              return;
            }
            var node = cc.instantiate(prefab);
            node.parent = cc.director.getScene().getChildByName("Canvas");
            node.setPosition(0, 0);
          });
        });
      };
      return SdkUtils;
    }();
    exports.SdkUtils = SdkUtils;
    cc["SdkUtils"] = SdkUtils.instance;
    cc._RF.pop();
  }, {} ]
}, {}, [ "SdkPopCtrl", "SdkUtils" ]);
//# sourceMappingURL=index.js.map
