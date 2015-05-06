bck2brwsr.register({
  'magic' : 'kafíčko'
}, function(exports) {
  var vm = {};
  function link(n, assign) {
    return function() {
      var cls = n['replace__Ljava_lang_String_2CC']('/', '_').toString();
      var dot = n['replace__Ljava_lang_String_2CC']('/', '.').toString();
      exports.loadClass(dot);
      assign(exports[cls]);
      return exports[cls](arguments);
    };
  };

  var invoker = {};
vm.java_lang_Object = link('java/lang/Object', function(f) { vm.java_lang_Object =  f; });
vm.java_lang_Class = link('java/lang/Class', function(f) { vm.java_lang_Class =  f; });
vm.java_lang_ArithmeticException = link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException =  f; });
vm.org_apidesign_vm4brwsr_VM = link('org/apidesign/vm4brwsr/VM', function(f) { vm.org_apidesign_vm4brwsr_VM =  f; });

vm.net_java_html_sound_AudioClip$1 = function net_java_html_sound_AudioClip$1() {
  var m;
  var CLS = net_java_html_sound_AudioClip$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_sound_AudioClip$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$1fillInstOf });
    net_java_html_sound_AudioClip$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 4128;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.net_java_html_sound_AudioClip$DummyClip = function net_java_html_sound_AudioClip$DummyClip() {
  var m;
  var CLS = net_java_html_sound_AudioClip$DummyClip;
  if (!CLS.$class) {
    var pp = vm.net_java_html_sound_AudioClip(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_INSTANCE = null;
  m = c._INSTANCE = function (v) {  if (arguments.length == 1) CLS.fld_INSTANCE = v; return CLS.fld_INSTANCE; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_net_java_html_sound_AudioClip || (refs_net_java_html_sound_AudioClip = vm.net_java_html_sound_AudioClip(false))).constructor.cons__VLnet_java_html_sound_AudioClip$1_2.call(lcA0, null);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.play__V = function() {
  var  lcA0 = this;
return;

};
c['play__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.pause__V = function() {
  var  lcA0 = this;
return;

};
c['pause__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
  var  lcA0 = this;
return;

};
c['setVolume__VD'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
  var  lcA0 = this;
return 0;

};
c['isSupported__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.net_java_html_sound_AudioClip$DummyClip;
c.constructor.cons__V.call(stA0);
c._INSTANCE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_sound_AudioClip$DummyClipfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$DummyClip', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$DummyClipfillInstOf });
    net_java_html_sound_AudioClip$DummyClipfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$DummyClip';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_net_java_html_sound_AudioClip;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.net_java_html_sound_AudioClip = function net_java_html_sound_AudioClip() {
  var m;
  var CLS = net_java_html_sound_AudioClip;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_sound_AudioClip_2Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
var lcA1 = stA0;
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false)))['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA1, (refs_org_netbeans_html_sound_spi_AudioEnvironment || (refs_org_netbeans_html_sound_spi_AudioEnvironment = vm.org_netbeans_html_sound_spi_AudioEnvironment(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_sound_spi_AudioEnvironment']) vm.java_lang_Class(false).castEx();
var lcA2 = stA0;
if ((lcA2) === null) { gt = 39; break IF; }
var stA0 = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2(lcA2, lcA0);
var lcA3 = stA0;
if ((lcA3) === null) { gt = 39; break IF; }
return lcA3;
    }
    X_39: for (;;) { IF: if (gt <= 39) {

var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2']((refs_org_netbeans_html_sound_spi_AudioEnvironment || (refs_org_netbeans_html_sound_spi_AudioEnvironment = vm.org_netbeans_html_sound_spi_AudioEnvironment(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 88; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_sound_spi_AudioEnvironment']) vm.java_lang_Class(false).castEx();
var lcA4 = stA0;
var stA0 = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2(lcA4, lcA0);
var lcA5 = stA0;
if ((lcA5) === null) { gt = 85; break IF; }
return lcA5;
    }
    X_85: for (;;) { IF: if (gt <= 85) {
{ gt = 0; continue X_49; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA0 = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2((refs_org_netbeans_html_sound_impl_BrowserAudioEnv || (refs_org_netbeans_html_sound_impl_BrowserAudioEnv = vm.org_netbeans_html_sound_impl_BrowserAudioEnv(false)))._DEFAULT(), lcA0);
var lcA3 = stA0;
if ((lcA3) === null) { gt = 104; break IF; }
var stA0 = lcA3;{ gt = 107; break IF; }
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = (refs_net_java_html_sound_AudioClip$DummyClip || (refs_net_java_html_sound_AudioClip$DummyClip = vm.net_java_html_sound_AudioClip$DummyClip(false)))._INSTANCE();    }
    X_107: for (;;) { IF: if (gt <= 107) {
return stA0;

    }
}}}}}}}
};
c['create__Lnet_java_html_sound_AudioClip_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.play__V = function() {
  throw 'no code found for net/java/html/sound/AudioClip.play';
};
c['play__V'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.pause__V = function() {
  throw 'no code found for net/java/html/sound/AudioClip.pause';
};
c['pause__V'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
  throw 'no code found for net/java/html/sound/AudioClip.setVolume';
};
c['setVolume__VD'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
  throw 'no code found for net/java/html/sound/AudioClip.isSupported';
};
c['isSupported__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.create__Ljava_lang_Object_2Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
if ((lcA2) === null) { gt = 23; break IF; }
var stA0 = new vm.net_java_html_sound_AudioClip$Impl;
(refs_net_java_html_sound_AudioClip$Impl || (refs_net_java_html_sound_AudioClip$Impl = vm.net_java_html_sound_AudioClip$Impl(false))).constructor.cons__VLorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2Ljava_lang_Object_2.call(stA0, lcA0, lcA1, lcA2);
return stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

return null;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_sound_AudioClip$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_sound_AudioClipfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClipfillInstOf });
    net_java_html_sound_AudioClipfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_org_netbeans_html_sound_spi_AudioEnvironment;
    var refs_org_netbeans_html_context_spi_Contexts;
    var refs_java_util_ServiceLoader;
    var refs_org_netbeans_html_sound_impl_BrowserAudioEnv;
    var refs_net_java_html_sound_AudioClip$DummyClip;
    var refs_net_java_html_sound_AudioClip$Impl;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['net_java_html_sound_AudioClip'] = vm.net_java_html_sound_AudioClip;


vm.net_java_html_sound_AudioClip$Impl = function net_java_html_sound_AudioClip$Impl() {
  var m;
  var CLS = net_java_html_sound_AudioClip$Impl;
  if (!CLS.$class) {
    var pp = vm.net_java_html_sound_AudioClip(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._src = function (v) {  if (arguments.length == 1) this.fld_net_java_html_sound_AudioClip$Impl_src = v; return this.fld_net_java_html_sound_AudioClip$Impl_src; };
  m = c._clip = function (v) {  if (arguments.length == 1) this.fld_net_java_html_sound_AudioClip$Impl_clip = v; return this.fld_net_java_html_sound_AudioClip$Impl_clip; };
  m = c._env = function (v) {  if (arguments.length == 1) this.fld_net_java_html_sound_AudioClip$Impl_env = v; return this.fld_net_java_html_sound_AudioClip$Impl_env; };
    m = CLS.cons__VLorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
(refs_net_java_html_sound_AudioClip || (refs_net_java_html_sound_AudioClip = vm.net_java_html_sound_AudioClip(false))).constructor.cons__VLnet_java_html_sound_AudioClip$1_2.call(lcA0, null);
c._clip.call(lcA0, lcA3);
c._env.call(lcA0, lcA1);
c._src.call(lcA0, lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.play__V = function() {
  var  lcA0 = this;
c._env.call(lcA0).play__VLjava_lang_Object_2(c._clip.call(lcA0));
return;

};
c['play__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.pause__V = function() {
  var  lcA0 = this;
c._env.call(lcA0).pause__VLjava_lang_Object_2(c._clip.call(lcA0));
return;

};
c['pause__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
  var  lcA0 = this;
c._env.call(lcA0).setVolume__VLjava_lang_Object_2D(c._clip.call(lcA0), lcD1);
return;

};
c['setVolume__VD'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
  var  lcA0 = this;
var stI0 = c._env.call(lcA0).isSupported__ZLjava_lang_Object_2(c._clip.call(lcA0));
return stI0;

};
c['isSupported__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stI0 = (59);var stI1 = invoker.hashCode__I(c._src.call(lcA0));
return (stI0).mul32(stI1);

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA1 != null && lcA1['$instOf_net_java_html_sound_AudioClip$Impl'] ? 1 : 0;
if ((stI0) == 0) { gt = 22; break IF; }
if (lcA1 !== null && !lcA1['$instOf_net_java_html_sound_AudioClip$Impl']) vm.java_lang_Class(false).castEx();
var stI0 = invoker.equals__ZLjava_lang_Object_2(c._src.call(lcA0),c._src.call(lcA1));
return stI0;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

return 0;

    }
}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_sound_AudioClip$ImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$Impl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$ImplfillInstOf });
    net_java_html_sound_AudioClip$ImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$Impl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_sound_AudioClip;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_sound_AudioClip$Impl_src = null;
    this.fld_net_java_html_sound_AudioClip$Impl_clip = null;
    this.fld_net_java_html_sound_AudioClip$Impl_env = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_sound_impl_BrowserAudioEnv = function org_netbeans_html_sound_impl_BrowserAudioEnv() {
  var m;
  var CLS = org_netbeans_html_sound_impl_BrowserAudioEnv;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_DEFAULT = null;
  m = c._DEFAULT = function (v) {  if (arguments.length == 1) CLS.fld_DEFAULT = v; return CLS.fld_DEFAULT; };
  CLS.fld_$$fn$$create_1 = null;
  m = c._$$fn$$create_1 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$create_1 = v; return CLS.fld_$$fn$$create_1; };
  CLS.fld_$$fn$$play_2 = null;
  m = c._$$fn$$play_2 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$play_2 = v; return CLS.fld_$$fn$$play_2; };
  CLS.fld_$$fn$$pause_3 = null;
  m = c._$$fn$$pause_3 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$pause_3 = v; return CLS.fld_$$fn$$pause_3; };
  CLS.fld_$$fn$$setVolume_4 = null;
  m = c._$$fn$$setVolume_4 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$setVolume_4 = v; return CLS.fld_$$fn$$setVolume_4; };
  CLS.fld_$$fn$$isSupported_5 = null;
  m = c._$$fn$$isSupported_5 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$isSupported_5 = v; return CLS.fld_$$fn$$isSupported_5; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Ljava_lang_Object_2Ljava_lang_String_2 = function(src) {

  src = vm.java_lang_Class(false).toJS(src);if (!Audio) return null;return new Audio(src);
}

    m.access = 1;
    m.cls = CLS;
    m = c.play__VLjava_lang_Object_2 = function(a) {

  a = vm.java_lang_Class(false).toJS(a);a.play();
}

    m.access = 1;
    m.cls = CLS;
    m = c.pause__VLjava_lang_Object_2 = function(a) {

  a = vm.java_lang_Class(false).toJS(a);a.pause();
}

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VLjava_lang_Object_2D = function(a,volume) {

  a = vm.java_lang_Class(false).toJS(a);
  volume = vm.java_lang_Class(false).toJS(volume);a.setVolume(volume);
}

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__ZLjava_lang_Object_2 = function(a) {

  a = vm.java_lang_Class(false).toJS(a);return true;
}

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.org_netbeans_html_sound_impl_BrowserAudioEnv;
c.constructor.cons__V.call(stA0);
c._DEFAULT(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_sound_impl_BrowserAudioEnv', { value : true });
      vm.org_netbeans_html_sound_spi_AudioEnvironment(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf });
    org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/sound/impl/BrowserAudioEnv';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_sound_spi_AudioEnvironment(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });
vm.org_netbeans_html_context_spi_Contexts = link('org/netbeans/html/context/spi/Contexts', function(f) { vm.org_netbeans_html_context_spi_Contexts =  f; });

vm.org_netbeans_html_sound_spi_AudioEnvironment = function org_netbeans_html_sound_spi_AudioEnvironment() {
  var m;
  var CLS = org_netbeans_html_sound_spi_AudioEnvironment;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.create__Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.create';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.play__VLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.play';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.pause__VLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.pause';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.setVolume__VLjava_lang_Object_2D = function(lcA1, lcD2) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.setVolume';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.isSupported__ZLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.isSupported';
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_sound_spi_AudioEnvironment', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf });
    org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/sound/spi/AudioEnvironment';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
  invoker.getClass__Ljava_lang_Class_2 = function(target, p0) {
    return target['getClass__Ljava_lang_Class_2'](p0);
  };
  invoker.iterator__Ljava_util_Iterator_2 = function(target, p0) {
    return target['iterator__Ljava_util_Iterator_2'](p0);
  };
  invoker.hasNext__Z = function(target, p0) {
    return target['hasNext__Z'](p0);
  };
  invoker.next__Ljava_lang_Object_2 = function(target, p0) {
    return target['next__Ljava_lang_Object_2'](p0);
  };
  invoker.hashCode__I = function(target, p0) {
    return target['hashCode__I'](p0);
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p0, p1) {
    return target['equals__ZLjava_lang_Object_2'](p0,p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNDE5MDUzOTgzMTI1DQpCdWlsZC1KZGs6IDEuNy4wXzcyDQpCdWlsdC1CeTogamFyZGENCkJ1bmRsZS1EZXNjcmlwdGlvbjogSmF2YS5uZXQgLSBUaGUgU291cmNlIGZvciBKYXZhIFRlY2hub2xvZ3kgQ29sbGFib3JhdA0KIGlvbg0KQnVuZGxlLURvY1VSTDogaHR0cDovL25ldGJlYW5zLm9yZw0KQnVuZGxlLUxpY2Vuc2U6IGh0dHA6Ly93d3cubmV0YmVhbnMub3JnL2NkZGwtZ3BsdjIuaHRtbA0KQnVuZGxlLU1hbmlmZXN0VmVyc2lvbjogMg0KQnVuZGxlLU5hbWU6IFNvdW5kIEFQSSB2aWEgSFRNTA0KQnVuZGxlLVN5bWJvbGljTmFtZTogbmV0LmphdmEuaHRtbC5zb3VuZA0KQnVuZGxlLVZlbmRvcjogTmV0QmVhbnMNCkJ1bmRsZS1WZXJzaW9uOiAxLjEuMA0KQ3JlYXRlZC1CeTogQXBhY2hlIE1hdmVuIEJ1bmRsZSBQbHVnaW4NCkV4cG9ydC1QYWNrYWdlOiBuZXQuamF2YS5odG1sLnNvdW5kO3ZlcnNpb249IjEuMS4wIg0KSW1wb3J0LVBhY2thZ2U6IG5ldC5qYXZhLmh0bWw7dmVyc2lvbj0iWzEuMSwyKSIsb3JnLm5ldGJlYW5zLmh0bWwuYm9vdC5zDQogcGk7dmVyc2lvbj0iWzEuMSwyKSIsb3JnLm5ldGJlYW5zLmh0bWwuY29udGV4dC5zcGk7dmVyc2lvbj0iWzEuMSwyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
  exports['registerResource']('META-INF/services/javax.annotation.processing.Processor', 'b3JnLm5ldGJlYW5zLmh0bWwuYm9vdC5pbXBsLkphdmFTY3JpcHRQcm9jZXNvcgo=');
});