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

vm.net_java_html_BrwsrCtx$1 = function net_java_html_BrwsrCtx$1() {
  var m;
  var CLS = net_java_html_BrwsrCtx$1;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_context_impl_CtxAccssr(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_context_impl_CtxAccssr || (refs_org_netbeans_html_context_impl_CtxAccssr = vm.org_netbeans_html_context_impl_CtxAccssr(false))).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.net_java_html_BrwsrCtx;
(refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false))).constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx$1_2.call(stA0, lcA1, null);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false))).access$100__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2(lcA1);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtx$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtx$1fillInstOf });
    net_java_html_BrwsrCtx$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_context_impl_CtxAccssr;
    var refs_net_java_html_BrwsrCtx;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.net_java_html_BrwsrCtx = function net_java_html_BrwsrCtx() {
  var m;
  var CLS = net_java_html_BrwsrCtx;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_LOG = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS.fld_LOG = v; return CLS.fld_LOG; };
  m = c._impl = function (v) {  if (arguments.length == 1) this.fld_net_java_html_BrwsrCtx_impl = v; return this.fld_net_java_html_BrwsrCtx_impl; };
  CLS.fld_EMPTY = null;
  m = c._EMPTY = function (v) {  if (arguments.length == 1) CLS.fld_EMPTY = v; return CLS.fld_EMPTY; };
c['_EMPTY'] = m;

  CLS.fld_CURRENT = null;
  m = c._CURRENT = function (v) {  if (arguments.length == 1) CLS.fld_CURRENT = v; return CLS.fld_CURRENT; };
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
c._impl.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.get__Ljava_lang_Object_2(c._CURRENT());
if (stA0 !== null && !stA0['$instOf_net_java_html_BrwsrCtx']) vm.java_lang_Class(false).castEx();
var lcA1 = stA0;
if ((lcA1) === null) { gt = 16; break IF; }
return lcA1;
    }
    X_16: for (;;) { IF: if (gt <= 16) {
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false))).newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2();
var lcA2 = stA0;
var stI0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false))).fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2(lcA0, lcA2);
var lcI3 = stI0;
if ((lcI3) != 0) { gt = 42; break IF; }
invoker.warning__VLjava_lang_String_2(c._LOG(),"No browser context found. Returning empty technology!");
return c._EMPTY();
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stA0 = lcA2.build__Lnet_java_html_BrwsrCtx_2();
return stA0;

    }
}}}
};
c['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.execute__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.net_java_html_BrwsrCtx$1Wrap;
(refs_net_java_html_BrwsrCtx$1Wrap || (refs_net_java_html_BrwsrCtx$1Wrap = vm.net_java_html_BrwsrCtx$1Wrap(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA1);
var lcA2 = stA0;
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false))).find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2(lcA0, (refs_java_util_concurrent_Executor || (refs_java_util_concurrent_Executor = vm.java_util_concurrent_Executor(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_java_util_concurrent_Executor']) vm.java_lang_Class(false).castEx();
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 32; break IF; }
invoker.run__V(lcA2);
{ gt = 39; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

invoker.execute__VLjava_lang_Runnable_2(lcA3,lcA2);
    }
    X_39: for (;;) { IF: if (gt <= 39) {
return;

    }
}}}
};
c['execute__VLjava_lang_Runnable_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$100__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {
return c._impl.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljava_lang_ThreadLocal_2 = function() {
return c._CURRENT();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = (refs_java_util_logging_Logger || (refs_java_util_logging_Logger = vm.java_util_logging_Logger(false)))['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
c._LOG(stA0);
var stA0 = new vm.net_java_html_BrwsrCtx$1;
(refs_net_java_html_BrwsrCtx$1 || (refs_net_java_html_BrwsrCtx$1 = vm.net_java_html_BrwsrCtx$1(false))).constructor.cons__V.call(stA0);
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false))).newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2();
var stA0 = stA0.build__Lnet_java_html_BrwsrCtx_2();
c._EMPTY(stA0);
var stA0 = new vm.java_lang_ThreadLocal;
(refs_java_lang_ThreadLocal || (refs_java_lang_ThreadLocal = vm.java_lang_ThreadLocal(false))).constructor['cons__V'].call(stA0);
c._CURRENT(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtxfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx', { value : true });
      vm.java_util_concurrent_Executor(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtxfillInstOf });
    net_java_html_BrwsrCtxfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_util_concurrent_Executor(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_org_netbeans_html_context_spi_Contexts;
    var refs_net_java_html_BrwsrCtx$1Wrap;
    var refs_java_util_concurrent_Executor;
    var refs_java_util_logging_Logger;
    var refs_net_java_html_BrwsrCtx$1;
    var refs_java_lang_ThreadLocal;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_BrwsrCtx_impl = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['net_java_html_BrwsrCtx'] = vm.net_java_html_BrwsrCtx;

vm.java_lang_ThreadLocal = link('java/lang/ThreadLocal', function(f) { vm.java_lang_ThreadLocal =  f; });
vm.java_util_logging_Logger = link('java/util/logging/Logger', function(f) { vm.java_util_logging_Logger =  f; });
vm.java_util_concurrent_Executor = link('java/util/concurrent/Executor', function(f) { vm.java_util_concurrent_Executor =  f; });

vm.net_java_html_BrwsrCtx$1Wrap = function net_java_html_BrwsrCtx$1Wrap() {
  var m;
  var CLS = net_java_html_BrwsrCtx$1Wrap;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$exec = function (v) {  if (arguments.length == 1) this.fld_net_java_html_BrwsrCtx$1Wrap_val$exec = v; return this.fld_net_java_html_BrwsrCtx$1Wrap_val$exec; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_net_java_html_BrwsrCtx$1Wrap_this$0 = v; return this.fld_net_java_html_BrwsrCtx$1Wrap_this$0; };
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c._this$0.call(lcA0, lcA1);
c._val$exec.call(lcA0, lcA2);
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false))).access$200__Ljava_lang_ThreadLocal_2();
var stA0 = invoker.get__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_net_java_html_BrwsrCtx']) vm.java_lang_Class(false).castEx();
var lcA1 = stA0;
try {var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false))).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,c._this$0.call(lcA0));
invoker.run__V(c._val$exec.call(lcA0));
} catch (e) {
var stA0 = e;{ gt = 39; break IF; }
}var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false))).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,lcA1);
{ gt = 49; break IF; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {
try {var lcA2 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_39; }
}var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false))).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,lcA1);
{ var stA0 = lcA2; throw lcA2; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {
return;

    }
}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtx$1WrapfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx$1Wrap', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtx$1WrapfillInstOf });
    net_java_html_BrwsrCtx$1WrapfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx$1Wrap';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_BrwsrCtx$1Wrap_val$exec = null;
    this.fld_net_java_html_BrwsrCtx$1Wrap_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });

vm.org_netbeans_html_context_spi_Contexts = function org_netbeans_html_context_spi_Contexts() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts;
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
    m = c.newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2_3Ljava_lang_Object_2 = function(lcA0) {
var stA0 = new vm.org_netbeans_html_context_spi_Contexts$Builder;
(refs_org_netbeans_html_context_spi_Contexts$Builder || (refs_org_netbeans_html_context_spi_Contexts$Builder = vm.org_netbeans_html_context_spi_Contexts$Builder(false))).constructor.cons__V_3Ljava_lang_Object_2.call(stA0, lcA0);
return stA0;

};
c['newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2_3Ljava_lang_Object_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2 = function() {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = c.newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2_3Ljava_lang_Object_2(stA0);
return stA0;

};
c['newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0, lcA1) {
var stA0 = (refs_org_netbeans_html_context_impl_CtxImpl || (refs_org_netbeans_html_context_impl_CtxImpl = vm.org_netbeans_html_context_impl_CtxImpl(false))).find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2(lcA0, lcA1);
return stA0;

};
c['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
try {
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA0);
var lcA3 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}{ gt = 14; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA4 = stA0;
var lcA3 = null;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2Ljava_lang_ClassLoader_2']((refs_org_netbeans_html_context_spi_Contexts$Provider || (refs_org_netbeans_html_context_spi_Contexts$Provider = vm.org_netbeans_html_context_spi_Contexts$Provider(false))).constructor.$class, lcA3);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 62; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) vm.java_lang_Class(false).castEx();
var lcA5 = stA0;
invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA5,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_26; }
    }
    X_62: for (;;) { IF: if (gt <= 62) {
try {
var stA0 = (refs_org_netbeans_html_context_spi_Contexts$Provider || (refs_org_netbeans_html_context_spi_Contexts$Provider = vm.org_netbeans_html_context_spi_Contexts$Provider(false))).constructor.$class;var stA1 = invoker.getClassLoader__Ljava_lang_ClassLoader_2((refs_org_netbeans_html_context_spi_Contexts$Provider || (refs_org_netbeans_html_context_spi_Contexts$Provider = vm.org_netbeans_html_context_spi_Contexts$Provider(false))).constructor.$class);
var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2Ljava_lang_ClassLoader_2'](stA0, stA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 118; break IF; }}
throw e;
}    }
    X_79: for (;;) { IF: if (gt <= 79) {
try {
var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 115; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) vm.java_lang_Class(false).castEx();
var lcA5 = stA0;
invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA5,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_79; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 118; break IF; }}
throw e;
}    }
    X_115: for (;;) { IF: if (gt <= 115) {
{ gt = 127; break IF; }
    }
    X_118: for (;;) { IF: if (gt <= 118) {
var lcA4 = stA0;
if ((lcI2) != 0) { gt = 127; break IF; }
{ var stA0 = lcA4; throw lcA4; }
    }
    X_127: for (;;) { IF: if (gt <= 127) {

if ((lcI2) != 0) { gt = 178; break IF; }
var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2']((refs_org_netbeans_html_context_spi_Contexts$Provider || (refs_org_netbeans_html_context_spi_Contexts$Provider = vm.org_netbeans_html_context_spi_Contexts$Provider(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 178; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) vm.java_lang_Class(false).castEx();
var lcA5 = stA0;
invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA5,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_142; }
    }
    X_178: for (;;) { IF: if (gt <= 178) {

return lcI2;

    }
}}}}}}}}}}}
};
c['fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_ContextsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_ContextsfillInstOf });
    org_netbeans_html_context_spi_ContextsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_context_spi_Contexts$Builder;
    var refs_org_netbeans_html_context_impl_CtxImpl;
    var refs_org_netbeans_html_context_spi_Contexts$Provider;
    var refs_java_util_ServiceLoader;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_context_spi_Contexts'] = vm.org_netbeans_html_context_spi_Contexts;

vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });

vm.org_netbeans_html_context_spi_Contexts$Provider = function org_netbeans_html_context_spi_Contexts$Provider() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$Provider;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/context/spi/Contexts$Provider.fillContext';
};
c['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$ProviderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$Provider', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$ProviderfillInstOf });
    org_netbeans_html_context_spi_Contexts$ProviderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$Provider';
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
exports['org_netbeans_html_context_spi_Contexts$Provider'] = vm.org_netbeans_html_context_spi_Contexts$Provider;

vm.java_lang_SecurityException = link('java/lang/SecurityException', function(f) { vm.java_lang_SecurityException =  f; });

vm.org_netbeans_html_context_impl_CtxImpl = function org_netbeans_html_context_impl_CtxImpl() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._techs = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl_techs = v; return this.fld_org_netbeans_html_context_impl_CtxImpl_techs; };
  m = c._context = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl_context = v; return this.fld_org_netbeans_html_context_impl_CtxImpl_context; };
    m = CLS.cons__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA2);
c.constructor.cons__V_3Ljava_lang_Object_2Ljava_util_List_2.call(stA0, stA1, stA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__V_3Ljava_lang_Object_2Ljava_util_List_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
c._techs.call(lcA0, lcA2);
c._context.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_org_netbeans_html_context_impl_CtxAccssr || (refs_org_netbeans_html_context_impl_CtxAccssr = vm.org_netbeans_html_context_impl_CtxAccssr(false))).getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2();
var stA0 = stA0.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(c._techs.call(lcA2));
var lcA3 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 60; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_impl_CtxImpl$Bind']) vm.java_lang_Class(false).castEx();
var lcA4 = stA0;
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA4);
if ((stA0) !== (stA1)) { gt = 57; break IF; }
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA4);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {
{ gt = 0; continue X_18; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

return null;

    }
}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.build__Lnet_java_html_BrwsrCtx_2 = function() {
  var  lcA0 = this;
var stA0 = c._techs.call(lcA0);var stA1 = new vm.org_netbeans_html_context_impl_CtxImpl$BindCompare;
(refs_org_netbeans_html_context_impl_CtxImpl$BindCompare || (refs_org_netbeans_html_context_impl_CtxImpl$BindCompare = vm.org_netbeans_html_context_impl_CtxImpl$BindCompare(false))).constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lorg_netbeans_html_context_impl_CtxImpl$1_2.call(stA1, lcA0, null);
(refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['sort__VLjava_util_List_2Ljava_util_Comparator_2'](stA0, stA1);
var stA0 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['unmodifiableList__Ljava_util_List_2Ljava_util_List_2'](c._techs.call(lcA0));
var lcA1 = stA0;
var stA0 = new vm.org_netbeans_html_context_impl_CtxImpl;
c.constructor.cons__V_3Ljava_lang_Object_2Ljava_util_List_2.call(stA0, c._context.call(lcA0), lcA1);
var lcA2 = stA0;
var stA0 = (refs_org_netbeans_html_context_impl_CtxAccssr || (refs_org_netbeans_html_context_impl_CtxAccssr = vm.org_netbeans_html_context_impl_CtxAccssr(false))).getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2();
var stA0 = stA0.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2(lcA2);
var lcA3 = stA0;
return lcA3;

};
    m.access = 1;
    m.cls = CLS;
    m = c.register__VLjava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
var stA0 = c._techs.call(lcA0);var stA1 = new vm.org_netbeans_html_context_impl_CtxImpl$Bind;
(refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).constructor.cons__VLjava_lang_Class_2Ljava_lang_Object_2I.call(stA1, lcA1, lcA2, lcI3);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.access$300___3Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA0) {
return c._context.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImplfillInstOf });
    org_netbeans_html_context_impl_CtxImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_util_ArrayList;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_context_impl_CtxAccssr;
    var refs_org_netbeans_html_context_impl_CtxImpl$Bind;
    var refs_org_netbeans_html_context_impl_CtxImpl$BindCompare;
    var refs_java_util_Collections;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_context_impl_CtxImpl_techs = null;
    this.fld_org_netbeans_html_context_impl_CtxImpl_context = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_Collections = link('java/util/Collections', function(f) { vm.java_util_Collections =  f; });

vm.org_netbeans_html_context_impl_CtxImpl$BindCompare = function org_netbeans_html_context_impl_CtxImpl$BindCompare() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl$BindCompare;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl$BindCompare_this$0 = v; return this.fld_org_netbeans_html_context_impl_CtxImpl$BindCompare_this$0; };
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  var  lcA0 = this;
c._this$0.call(lcA0, lcA1);
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.isPrefered__ZLorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var stA0 = invoker.getClass__Ljava_lang_Class_2(stA0);
var lcA2 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA2,(refs_org_netbeans_html_context_spi_Contexts$Id || (refs_org_netbeans_html_context_spi_Contexts$Id = vm.org_netbeans_html_context_spi_Contexts$Id(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Id']) vm.java_lang_Class(false).castEx();
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 25; break IF; }
return 0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = invoker.value___3Ljava_lang_String_2(lcA3);
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

if ((lcI6) >= (lcI5)) { gt = 110; break IF; }
var lcA7 = Array.at(lcA4, lcI6);
var stA0 = (refs_org_netbeans_html_context_impl_CtxImpl || (refs_org_netbeans_html_context_impl_CtxImpl = vm.org_netbeans_html_context_impl_CtxImpl(false))).access$300___3Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl_2(c._this$0.call(lcA0));
var lcA8 = stA0;
var lcI9 = (lcA8).length;
var lcI10 = 0;
    }
    X_72: for (;;) { IF: if (gt <= 72) {

if ((lcI10) >= (lcI9)) { gt = 104; break IF; }
var lcA11 = Array.at(lcA8, lcI10);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,lcA11);
if ((stI0) == 0) { gt = 98; break IF; }
return 1;
    }
    X_98: for (;;) { IF: if (gt <= 98) {
lcI10++;
{ gt = 0; continue X_72; }
    }
    X_104: for (;;) { IF: if (gt <= 104) {
lcI6++;
{ gt = 0; continue X_41; }
    }
    X_110: for (;;) { IF: if (gt <= 110) {

return 0;

    }
}}}}}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.compare__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isPrefered__ZLorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var lcI3 = stI0;
var stI0 = lcA0.isPrefered__ZLorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA2);
var lcI4 = stI0;
if ((lcI3) == (lcI4)) { gt = 29; break IF; }
if ((lcI3) == 0) { gt = 27; break IF; }
var stI0 = -1;{ gt = 28; break IF; }
    }
    X_27: for (;;) { IF: if (gt <= 27) {

var stI0 = 1;    }
    X_28: for (;;) { IF: if (gt <= 28) {
return stI0;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

var stI0 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$400__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var stI1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$400__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA2);
if ((stI0) == (stI1)) { gt = 50; break IF; }
var stI0 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$400__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var stI1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$400__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA2);
return (stI0).sub32(stI1);
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
var stA0 = invoker.getName__Ljava_lang_String_2(stA0);
var stA1 = (refs_org_netbeans_html_context_impl_CtxImpl$Bind || (refs_org_netbeans_html_context_impl_CtxImpl$Bind = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false))).access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA2);
var stA1 = invoker.getName__Ljava_lang_String_2(stA1);
var stI0 = invoker.compareTo__ILjava_lang_String_2(stA0,stA1);
return stI0;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.compare__ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_context_impl_CtxImpl$Bind']) vm.java_lang_Class(false).castEx();
if (lcA2 !== null && !lcA2['$instOf_org_netbeans_html_context_impl_CtxImpl$Bind']) vm.java_lang_Class(false).castEx();
var stI0 = lcA0.compare__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1, lcA2);
return stI0;

};
c['compare__ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lorg_netbeans_html_context_impl_CtxImpl$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImpl$BindComparefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl$BindCompare', { value : true });
      vm.java_util_Comparator(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImpl$BindComparefillInstOf });
    org_netbeans_html_context_impl_CtxImpl$BindComparefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl$BindCompare';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_util_Comparator(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_context_impl_CtxImpl$Bind;
    var refs_org_netbeans_html_context_spi_Contexts$Id;
    var refs_org_netbeans_html_context_impl_CtxImpl;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_context_impl_CtxImpl$BindCompare_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_Comparator = link('java/util/Comparator', function(f) { vm.java_util_Comparator =  f; });

vm.org_netbeans_html_context_spi_Contexts$Id = function org_netbeans_html_context_spi_Contexts$Id() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$Id;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.value___3Ljava_lang_String_2 = function() {
  throw 'no code found for org/netbeans/html/context/spi/Contexts$Id.value';
};
c['value___3Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$IdfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$Id', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$IdfillInstOf });
    org_netbeans_html_context_spi_Contexts$IdfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$Id';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('RUNTIME')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('TYPE')]
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_context_spi_Contexts$Id'] = vm.org_netbeans_html_context_spi_Contexts$Id;

vm.java_lang_annotation_ElementType = link('java/lang/annotation/ElementType', function(f) { vm.java_lang_annotation_ElementType =  f; });
vm.java_lang_annotation_Target = link('java/lang/annotation/Target', function(f) { vm.java_lang_annotation_Target =  f; });
vm.java_lang_annotation_RetentionPolicy = link('java/lang/annotation/RetentionPolicy', function(f) { vm.java_lang_annotation_RetentionPolicy =  f; });
vm.java_lang_annotation_Retention = link('java/lang/annotation/Retention', function(f) { vm.java_lang_annotation_Retention =  f; });
vm.java_lang_annotation_Annotation = link('java/lang/annotation/Annotation', function(f) { vm.java_lang_annotation_Annotation =  f; });

vm.org_netbeans_html_context_impl_CtxImpl$Bind = function org_netbeans_html_context_impl_CtxImpl$Bind() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl$Bind;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._clazz = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz = v; return this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz; };
  m = c._impl = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl = v; return this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl; };
  m = c._priority = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority = v; return this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority; };
    m = CLS.cons__VLjava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
c._clazz.call(lcA0, lcA1);
c._impl.call(lcA0, lcA2);
c._priority.call(lcA0, lcI3);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Bind{clazz=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,c._clazz.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"@");
var stA1 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(c._clazz.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", impl=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,c._impl.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", priority=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,c._priority.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0) {
return c._clazz.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0) {
return c._impl.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$400__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0) {
return c._priority.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImpl$BindfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl$Bind', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImpl$BindfillInstOf });
    org_netbeans_html_context_impl_CtxImpl$BindfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl$Bind';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz = null;
    this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl = null;
    this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });

vm.org_netbeans_html_context_spi_Contexts$Builder = function org_netbeans_html_context_spi_Contexts$Builder() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$Builder;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._impl = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_spi_Contexts$Builder_impl = v; return this.fld_org_netbeans_html_context_spi_Contexts$Builder_impl; };
    m = CLS.cons__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.org_netbeans_html_context_impl_CtxImpl;
(refs_org_netbeans_html_context_impl_CtxImpl || (refs_org_netbeans_html_context_impl_CtxImpl = vm.org_netbeans_html_context_impl_CtxImpl(false))).constructor.cons__V_3Ljava_lang_Object_2.call(stA1, lcA1);
c._impl.call(stA0, stA1);
return;

};
CLS['cons__V_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA2) !== null) { gt = 6; break IF; }
return lcA0;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

if ((lcI3) > 0) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

c._impl.call(lcA0).register__VLjava_lang_Class_2Ljava_lang_Object_2I(lcA1, lcA2, lcI3);
return lcA0;

    }
}}}
};
c['register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.build__Lnet_java_html_BrwsrCtx_2 = function() {
  var  lcA0 = this;
var stA0 = c._impl.call(lcA0).build__Lnet_java_html_BrwsrCtx_2();
return stA0;

};
c['build__Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$BuilderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$Builder', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$BuilderfillInstOf });
    org_netbeans_html_context_spi_Contexts$BuilderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$Builder';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_org_netbeans_html_context_impl_CtxImpl;
    var refs_java_lang_IllegalStateException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_context_spi_Contexts$Builder_impl = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_context_spi_Contexts$Builder'] = vm.org_netbeans_html_context_spi_Contexts$Builder;

vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });

vm.org_netbeans_html_context_impl_CtxAccssr = function org_netbeans_html_context_impl_CtxAccssr() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxAccssr;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_DEFAULT = null;
  m = c._DEFAULT = function (v) {  if (arguments.length == 1) CLS.fld_DEFAULT = v; return CLS.fld_DEFAULT; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
if ((c._DEFAULT()) === null) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

c._DEFAULT(lcA0);
return;

    }
}}
};
CLS['cons__V'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/context/impl/CtxAccssr.newContext';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/context/impl/CtxAccssr.find';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2 = function() {
return c._DEFAULT();

};
    m.access = 8;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.getClass__Ljava_lang_Class_2((refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))._EMPTY());
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NullPointerException']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}{ gt = 11; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA0 = stA0;
    }
    X_11: for (;;) { IF: if (gt <= 11) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxAccssrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxAccssr', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxAccssrfillInstOf });
    org_netbeans_html_context_impl_CtxAccssrfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxAccssr';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_java_lang_IllegalStateException;
    var refs_net_java_html_BrwsrCtx;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_NullPointerException = link('java/lang/NullPointerException', function(f) { vm.java_lang_NullPointerException =  f; });

vm.org_netbeans_html_context_impl_CtxImpl$1 = function org_netbeans_html_context_impl_CtxImpl$1() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImpl$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImpl$1fillInstOf });
    org_netbeans_html_context_impl_CtxImpl$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl$1';
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
  invoker.get__Ljava_lang_Object_2 = function(target, p0) {
    return target['get__Ljava_lang_Object_2'](p0);
  };
  invoker.warning__VLjava_lang_String_2 = function(target, p0, p1) {
    return target['warning__VLjava_lang_String_2'](p0,p1);
  };
  invoker.run__V = function(target, p0) {
    return target['run__V'](p0);
  };
  invoker.execute__VLjava_lang_Runnable_2 = function(target, p0, p1) {
    return target['execute__VLjava_lang_Runnable_2'](p0,p1);
  };
  invoker.getName__Ljava_lang_String_2 = function(target, p0) {
    return target['getName__Ljava_lang_String_2'](p0);
  };
  invoker.set__VLjava_lang_Object_2 = function(target, p0, p1) {
    return target['set__VLjava_lang_Object_2'](p0,p1);
  };
  invoker.getClassLoader__Ljava_lang_ClassLoader_2 = function(target, p0) {
    return target['getClassLoader__Ljava_lang_ClassLoader_2'](p0);
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
  invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function(target, p0, p1, p2) {
    return target['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'](p0,p1,p2);
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p0, p1) {
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'](p0,p1);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p0, p1) {
    return target['add__ZLjava_lang_Object_2'](p0,p1);
  };
  invoker.getClass__Ljava_lang_Class_2 = function(target, p0) {
    return target['getClass__Ljava_lang_Class_2'](p0);
  };
  invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2 = function(target, p0, p1) {
    return target['getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2'](p0,p1);
  };
  invoker.value___3Ljava_lang_String_2 = function(target, p0) {
    return target['value___3Ljava_lang_String_2'](p0);
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p0, p1) {
    return target['equals__ZLjava_lang_Object_2'](p0,p1);
  };
  invoker.compareTo__ILjava_lang_String_2 = function(target, p0, p1) {
    return target['compareTo__ILjava_lang_String_2'](p0,p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p0, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p0,p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p0, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p0,p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p0, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p0,p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p0, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p0,p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target, p0) {
    return target['toString__Ljava_lang_String_2'](p0);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNDE5MDUzMDU4NjUzDQpCdWlsZC1KZGs6IDEuNy4wXzcyDQpCdWlsdC1CeTogamFyZGENCkJ1bmRsZS1EZXNjcmlwdGlvbjogUmVwcmVzZW50YXRpb24gb2YgYW4gSFRNTCBwYWdlIGNvbnRleHQgYSBKYXZhIHByb2dyYQ0KIG0gb3BlcmF0ZXMgaW4uDQpCdW5kbGUtRG9jVVJMOiBodHRwOi8vbmV0YmVhbnMub3JnDQpCdW5kbGUtTGljZW5zZTogaHR0cDovL3d3dy5uZXRiZWFucy5vcmcvY2RkbC1ncGx2Mi5odG1sDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogSFRNTCBDb250ZXh0DQpCdW5kbGUtU3ltYm9saWNOYW1lOiBuZXQuamF2YS5odG1sDQpCdW5kbGUtVmVuZG9yOiBOZXRCZWFucw0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRWNsaXBzZS1CdWRkeVBvbGljeTogZGVwZW5kZW50DQpFeHBvcnQtUGFja2FnZTogbmV0LmphdmEuaHRtbDt2ZXJzaW9uPSIxLjEuMCIsb3JnLm5ldGJlYW5zLmh0bWwuY29udGV4dC4NCiBzcGk7dXNlczo9Im5ldC5qYXZhLmh0bWwiO3ZlcnNpb249IjEuMS4wIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
});