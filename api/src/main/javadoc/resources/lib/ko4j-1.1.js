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

vm.org_netbeans_html_ko4j_$JsCallbacks$ = function org_netbeans_html_ko4j_$JsCallbacks$() {
  var m;
  var CLS = org_netbeans_html_ko4j_$JsCallbacks$;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_VM = null;
  m = c._VM = function (v) {  if (arguments.length == 1) CLS.fld_VM = v; return CLS.fld_VM; };
  m = c._p = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_$JsCallbacks$_p = v; return this.fld_org_netbeans_html_ko4j_$JsCallbacks$_p; };
  m = c._last = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_$JsCallbacks$_last = v; return this.fld_org_netbeans_html_ko4j_$JsCallbacks$_last; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
c._p.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.current__Lorg_netbeans_html_ko4j_$JsCallbacks$_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2']();
var lcA1 = stA0;
if ((lcA1) !== (c._p.call(lcA0))) { gt = 14; break IF; }
return lcA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((c._last.call(lcA0)) === null) { gt = 37; break IF; }
if ((lcA1) !== (c._p.call(c._last.call(lcA0)))) { gt = 37; break IF; }
return c._last.call(lcA0);
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = lcA0;var stA1 = new vm.org_netbeans_html_ko4j_$JsCallbacks$;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA1, lcA1);
var stA2 = stA1, stA1 = stA0, stA0 = stA2;
c._last.call(stA1, stA2);
return stA0;

    }
}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
invoker.notifySuccess__VLjava_lang_Object_2(lcA1,lcA2);
var lcA4 = null;
} catch (e) {
var stA0 = e;{ gt = 49; break IF; }
}
invoker.close__V(lcA3);
return lcA4;
    }
    X_49: for (;;) { IF: if (gt <= 49) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_49; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA5; throw lcA5; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 48; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_json_spi_JSONCall']) vm.java_lang_Class(false).castEx();
invoker.notifySuccess__VLjava_lang_Object_2(lcA1,lcA2);
var lcA4 = null;
} catch (e) {
var stA0 = e;{ gt = 76; break IF; }
}
invoker.close__V(lcA3);
return lcA4;
    }
    X_76: for (;;) { IF: if (gt <= 76) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_76; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA5; throw lcA5; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA3);
var lcA3 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 50; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA4);
var lcA4 = stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA5 = stA0;
try {
lcA1.call__VILjava_lang_Object_2Ljava_lang_Object_2(lcI2, lcA3, lcA4);
var lcA6 = null;
} catch (e) {
var stA0 = e;{ gt = 80; break IF; }
}
invoker.close__V(lcA5);
return lcA6;
    }
    X_80: for (;;) { IF: if (gt <= 80) {
try {var lcA7 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_80; }
}
invoker.close__V(lcA5);
{ var stA0 = lcA7; throw lcA7; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 48; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA3);
var lcA3 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 74; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA4);
var lcA4 = stA0;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA5 = stA0;
try {
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx();
lcA1.call__VILjava_lang_Object_2Ljava_lang_Object_2(lcI2, lcA3, lcA4);
var lcA6 = null;
} catch (e) {
var stA0 = e;{ gt = 107; break IF; }
}
invoker.close__V(lcA5);
return lcA6;
    }
    X_107: for (;;) { IF: if (gt <= 107) {
try {var lcA7 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_107; }
}
invoker.close__V(lcA5);
{ var stA0 = lcA7; throw lcA7; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
var stA0 = lcA1.getValue__Ljava_lang_Object_2I(lcI2);
var lcA4 = stA0;
var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$ToJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 41; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$ToJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA4);
var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 54; break IF; }
}    }
    X_41: for (;;) { IF: if (gt <= 41) {
try {
var lcA5 = lcA4;
} catch (e) {
var stA0 = e;{ gt = 54; break IF; }
}
invoker.close__V(lcA3);
return lcA5;
    }
    X_54: for (;;) { IF: if (gt <= 54) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_54; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA6; throw lcA6; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx();
var stA0 = lcA1.getValue__Ljava_lang_Object_2I(lcI2);
var lcA4 = stA0;
var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$ToJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 68; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$ToJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA4);
var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 81; break IF; }
}    }
    X_68: for (;;) { IF: if (gt <= 68) {
try {
var lcA5 = lcA4;
} catch (e) {
var stA0 = e;{ gt = 81; break IF; }
}
invoker.close__V(lcA3);
return lcA5;
    }
    X_81: for (;;) { IF: if (gt <= 81) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_81; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA6; throw lcA6; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA3);
var lcA3 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA4 = stA0;
try {
lcA1.setValue__VILjava_lang_Object_2(lcI2, lcA3);
var lcA5 = null;
} catch (e) {
var stA0 = e;{ gt = 52; break IF; }
}
invoker.close__V(lcA4);
return lcA5;
    }
    X_52: for (;;) { IF: if (gt <= 52) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_52; }
}
invoker.close__V(lcA4);
{ var stA0 = lcA6; throw lcA6; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 48; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA3);
var lcA3 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA4 = stA0;
try {
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx();
lcA1.setValue__VILjava_lang_Object_2(lcI2, lcA3);
var lcA5 = null;
} catch (e) {
var stA0 = e;{ gt = 79; break IF; }
}
invoker.close__V(lcA4);
return lcA5;
    }
    X_79: for (;;) { IF: if (gt <= 79) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_79; }
}
invoker.close__V(lcA4);
{ var stA0 = lcA6; throw lcA6; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadJSON$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 48; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = vm.org_netbeans_html_ko4j_LoadJSON(false))).notifyError__VLjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2);
var lcA4 = null;
} catch (e) {
var stA0 = e;{ gt = 73; break IF; }
}
invoker.close__V(lcA3);
return lcA4;
    }
    X_73: for (;;) { IF: if (gt <= 73) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_73; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA5; throw lcA5; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2ZILjava_lang_String_2 = function(lcA1, lcI2, lcI3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA5 = stA0;
try {
lcA1.onClose__VZILjava_lang_String_2(lcI2, lcI3, lcA4);
var lcA6 = null;
} catch (e) {
var stA0 = e;{ gt = 30; break IF; }
}
invoker.close__V(lcA5);
return lcA6;
    }
    X_30: for (;;) { IF: if (gt <= 30) {
try {var lcA7 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_30; }
}
invoker.close__V(lcA5);
{ var stA0 = lcA7; throw lcA7; }

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2ZILjava_lang_String_2 = function(lcA1, lcI2, lcI3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA5 = stA0;
try {
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx();
lcA1.onClose__VZILjava_lang_String_2(lcI2, lcI3, lcA4);
var lcA6 = null;
} catch (e) {
var stA0 = e;{ gt = 57; break IF; }
}
invoker.close__V(lcA5);
return lcA6;
    }
    X_57: for (;;) { IF: if (gt <= 57) {
try {var lcA7 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_57; }
}
invoker.close__V(lcA5);
{ var stA0 = lcA7; throw lcA7; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
lcA1.onError__VLjava_lang_Object_2(lcA2);
var lcA4 = null;
} catch (e) {
var stA0 = e;{ gt = 49; break IF; }
}
invoker.close__V(lcA3);
return lcA4;
    }
    X_49: for (;;) { IF: if (gt <= 49) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_49; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA5; throw lcA5; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 48; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx();
lcA1.onError__VLjava_lang_Object_2(lcA2);
var lcA4 = null;
} catch (e) {
var stA0 = e;{ gt = 76; break IF; }
}
invoker.close__V(lcA3);
return lcA4;
    }
    X_76: for (;;) { IF: if (gt <= 76) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_76; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA5; throw lcA5; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA4 = stA0;
try {
lcA1.onMessage__VLjava_lang_Object_2Ljava_lang_String_2(lcA2, lcA3);
var lcA5 = null;
} catch (e) {
var stA0 = e;{ gt = 52; break IF; }
}
invoker.close__V(lcA4);
return lcA5;
    }
    X_52: for (;;) { IF: if (gt <= 52) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_52; }
}
invoker.close__V(lcA4);
{ var stA0 = lcA6; throw lcA6; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 48; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA4 = stA0;
try {
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx();
lcA1.onMessage__VLjava_lang_Object_2Ljava_lang_String_2(lcA2, lcA3);
var lcA5 = null;
} catch (e) {
var stA0 = e;{ gt = 79; break IF; }
}
invoker.close__V(lcA4);
return lcA5;
    }
    X_79: for (;;) { IF: if (gt <= 79) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_79; }
}
invoker.close__V(lcA4);
{ var stA0 = lcA6; throw lcA6; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
lcA1.onOpen__VLjava_lang_Object_2(lcA2);
var lcA4 = null;
} catch (e) {
var stA0 = e;{ gt = 49; break IF; }
}
invoker.close__V(lcA3);
return lcA4;
    }
    X_49: for (;;) { IF: if (gt <= 49) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_49; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA5; throw lcA5; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 48; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA2);
var lcA2 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA3 = stA0;
try {
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx();
lcA1.onOpen__VLjava_lang_Object_2(lcA2);
var lcA4 = null;
} catch (e) {
var stA0 = e;{ gt = 76; break IF; }
}
invoker.close__V(lcA3);
return lcA4;
    }
    X_76: for (;;) { IF: if (gt <= 76) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_76; }
}
invoker.close__V(lcA3);
{ var stA0 = lcA5; throw lcA5; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.org_netbeans_html_ko4j_$JsCallbacks$;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null);
c._VM(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_$JsCallbacks$fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_$JsCallbacks$', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_$JsCallbacks$fillInstOf });
    org_netbeans_html_ko4j_$JsCallbacks$fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/$JsCallbacks$';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_java_lang_Class;
    var refs_org_netbeans_html_ko4j_LoadJSON;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_ko4j_$JsCallbacks$_p = null;
    this.fld_org_netbeans_html_ko4j_$JsCallbacks$_last = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_ko4j_LoadJSON = function org_netbeans_html_ko4j_LoadJSON() {
  var m;
  var CLS = org_netbeans_html_ko4j_LoadJSON;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_$$fn$$getProperty_1 = null;
  m = c._$$fn$$getProperty_1 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$getProperty_1 = v; return CLS.fld_$$fn$$getProperty_1; };
  CLS.fld_$$fn$$defineIfUnused_2 = null;
  m = c._$$fn$$defineIfUnused_2 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$defineIfUnused_2 = v; return CLS.fld_$$fn$$defineIfUnused_2; };
  CLS.fld_$$fn$$parse_3 = null;
  m = c._$$fn$$parse_3 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$parse_3 = v; return CLS.fld_$$fn$$parse_3; };
  CLS.fld_$$fn$$loadJSON_4 = null;
  m = c._$$fn$$loadJSON_4 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$loadJSON_4 = v; return CLS.fld_$$fn$$loadJSON_4; };
  CLS.fld_$$fn$$loadJSONP_5 = null;
  m = c._$$fn$$loadJSONP_5 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$loadJSONP_5 = v; return CLS.fld_$$fn$$loadJSONP_5; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.extractJSON__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA1, lcA2, lcA3);
return;

};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isJSONP__Z(lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
var stA0 = c.createJSONP__Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1);
var lcA2 = stA0;
var stA0 = invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2(lcA1,lcA2);
c.loadJSONP__VLjava_lang_String_2Ljava_lang_String_2(stA0, lcA2);
{ gt = 83; break IF; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var lcA2 = null;
var stI0 = invoker.isDoOutput__Z(lcA1);
if ((stI0) == 0) { gt = 69; break IF; }
try {var stA0 = new vm.java_io_ByteArrayOutputStream;
(refs_java_io_ByteArrayOutputStream || (refs_java_io_ByteArrayOutputStream = vm.java_io_ByteArrayOutputStream(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
invoker.writeData__VLjava_io_OutputStream_2(lcA1,lcA3);
var stA0 = new vm.java_lang_String;
var stA1 = stA0;var stA2 = invoker.toByteArray___3B(lcA3);
(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor['cons__V_3BLjava_lang_String_2'].call(stA1, stA2, "UTF-8");
var lcA2 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 63; break IF; }}
throw e;
}{ gt = 69; break IF; }
    }
    X_63: for (;;) { IF: if (gt <= 63) {
var lcA3 = stA0;
invoker.notifyError__VLjava_lang_Throwable_2(lcA1,lcA3);
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2(lcA1,null);
var stA1 = lcA1;var stA2 = invoker.getMethod__Ljava_lang_String_2(lcA1);
c.loadJSON__VLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1, stA2, lcA2);
    }
    X_83: for (;;) { IF: if (gt <= 83) {
return;

    }
}}}}}
};
c['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_io_InputStreamReader;
(refs_java_io_InputStreamReader || (refs_java_io_InputStreamReader = vm.java_io_InputStreamReader(false))).constructor['cons__VLjava_io_InputStream_2'].call(stA0, lcA1);
var lcA3 = stA0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.read__I(lcA3);
var lcI4 = stI0;
if ((lcI4) != (-1)) { gt = 32; break IF; }
{ gt = 43; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA2,(lcI4).toInt16());
{ gt = 0; continue X_17; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA0 = c.parse__Ljava_lang_Object_2Ljava_lang_String_2(stA0);
return stA0;

    }
}}}}
};
c['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.open__Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new vm.org_netbeans_html_ko4j_LoadWS;
(refs_org_netbeans_html_ko4j_LoadWS || (refs_org_netbeans_html_ko4j_LoadWS = vm.org_netbeans_html_ko4j_LoadWS(false))).constructor.cons__VLorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2.call(stA0, lcA2, lcA1);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.send__VLorg_netbeans_html_ko4j_LoadWS_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA1.send__VLorg_netbeans_html_json_spi_JSONCall_2(lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.close__VLorg_netbeans_html_ko4j_LoadWS_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.close__V();
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.getProperty__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function(object,property) {

  object = vm.java_lang_Class(false).toJS(object);
  property = vm.java_lang_Class(false).toJS(property);if (property === null) return object;
if (object === null) return null;
var p = object[property]; return p ? p : null;
}

    m.access = 10;
    m.cls = CLS;
    m = c.createJSONP__Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.hashCode__I(lcA0);
var lcI1 = stI0;
    }
    X_5: for (;;) { IF: if (gt <= 5) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"jsonp");
var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['toHexString__Ljava_lang_String_2I'](lcI1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stI0 = c.defineIfUnused__ZLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA2, lcA0);
if ((stI0) == 0) { gt = 38; break IF; }
return lcA2;
    }
    X_38: for (;;) { IF: if (gt <= 38) {
lcI1++;
{ gt = 0; continue X_5; }

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.defineIfUnused__ZLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(name,done) {

  name = vm.java_lang_Class(false).toJS(name);
  done = vm.java_lang_Class(false).toJS(done);if (window[name]) return false;
 window[name] = function(data) {
   delete window[name];
  var el = window.document.getElementById(name);
  el.parentNode.removeChild(el);
  vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2(done,data);
};
return true;

}

    m.access = 10;
    m.cls = CLS;
    m = c.parse__Ljava_lang_Object_2Ljava_lang_String_2 = function(s) {

  s = vm.java_lang_Class(false).toJS(s);return eval('(' + s + ')');
}

    m.access = 8;
    m.cls = CLS;
    m = c.loadJSON__VLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2Ljava_lang_String_2 = function(url,done,method,data) {

  url = vm.java_lang_Class(false).toJS(url);
  done = vm.java_lang_Class(false).toJS(done);
  method = vm.java_lang_Class(false).toJS(method);
  data = vm.java_lang_Class(false).toJS(data);var request = new XMLHttpRequest();
if (!method) method = 'GET';
request.open(method, url, true);
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.onreadystatechange = function() {
  if (request.readyState !== 4) return;
  var r = request.response || request.responseText;
  try {
    if (request.status !== 0)
      if (request.status < 100 || request.status >= 400) throw request.status + ': ' + request.statusText;    try { r = eval('(' + r + ')'); } catch (ignore) { }    vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2(done,r);
  } catch (error) {;
    vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadJSON$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(done, error);
  }
};
request.onerror = function (e) {
  console.log('error loading :' + url + ' props: ' + Object.getOwnPropertyNames(e));
  vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadJSON$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(done, e);
}
if (data) request.send(data);else request.send();
}

    m.access = 8;
    m.cls = CLS;
    m = c.notifyError__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1) {
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_json_spi_JSONCall']) vm.java_lang_Class(false).castEx();
var stA0 = lcA0;var stA1 = new vm.java_lang_Exception;
var stA2 = stA1;var stA3 = invoker.toString__Ljava_lang_String_2(lcA1);
(refs_java_lang_Exception || (refs_java_lang_Exception = vm.java_lang_Exception(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.loadJSONP__VLjava_lang_String_2Ljava_lang_String_2 = function(url,jsonp) {

  url = vm.java_lang_Class(false).toJS(url);
  jsonp = vm.java_lang_Class(false).toJS(jsonp);var scrpt = window.document.createElement('script');
 scrpt.setAttribute('src', url);
 scrpt.setAttribute('id', jsonp);
 scrpt.setAttribute('type', 'text/javascript');
 var body = document.getElementsByTagName('body')[0];
 body.appendChild(scrpt);

}

    m.access = 8;
    m.cls = CLS;
    m = c.extractJSON__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI3) >= ((lcA1).length)) { gt = 24; break IF; }
var stA0 = lcA2;var stI1 = lcI3;var stA2 = c.getProperty__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, Array.at(lcA1, lcI3));
Array.at(stA0, stI1, stA2);
lcI3++;
{ gt = 0; continue X_2; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx();
lcA0.close__VLorg_netbeans_html_ko4j_LoadWS_2(lcA1);
return;

};
c['close__VLjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx();
lcA0.send__VLorg_netbeans_html_ko4j_LoadWS_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return;

};
c['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.open__Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return stA0;

};
c['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_LoadJSONfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_LoadJSON', { value : true });
      vm.org_netbeans_html_json_spi_Transfer(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_WSTransfer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_LoadJSONfillInstOf });
    org_netbeans_html_ko4j_LoadJSONfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/LoadJSON';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_Transfer(false).constructor.$class,
        vm.org_netbeans_html_json_spi_WSTransfer(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_java_io_ByteArrayOutputStream;
    var refs_java_lang_String;
    var refs_java_lang_StringBuilder;
    var refs_java_io_InputStreamReader;
    var refs_org_netbeans_html_ko4j_LoadWS;
    var refs_java_lang_Integer;
    var refs_java_lang_Exception;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_WSTransfer = link('org/netbeans/html/json/spi/WSTransfer', function(f) { vm.org_netbeans_html_json_spi_WSTransfer =  f; });
vm.org_netbeans_html_json_spi_Transfer = link('org/netbeans/html/json/spi/Transfer', function(f) { vm.org_netbeans_html_json_spi_Transfer =  f; });
vm.java_lang_Exception = link('java/lang/Exception', function(f) { vm.java_lang_Exception =  f; });
vm.java_lang_Integer = link('java/lang/Integer', function(f) { vm.java_lang_Integer =  f; });

vm.org_netbeans_html_ko4j_LoadWS = function org_netbeans_html_ko4j_LoadWS() {
  var m;
  var CLS = org_netbeans_html_ko4j_LoadWS;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ws = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_LoadWS_ws = v; return this.fld_org_netbeans_html_ko4j_LoadWS_ws; };
  m = c._call = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_LoadWS_call = v; return this.fld_org_netbeans_html_ko4j_LoadWS_call; };
  CLS.fld_$$fn$$toJSON_1 = null;
  m = c._$$fn$$toJSON_1 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$toJSON_1 = v; return CLS.fld_$$fn$$toJSON_1; };
  CLS.fld_$$fn$$initWebSocket_2 = null;
  m = c._$$fn$$initWebSocket_2 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$initWebSocket_2 = v; return CLS.fld_$$fn$$initWebSocket_2; };
  CLS.fld_$$fn$$send_3 = null;
  m = c._$$fn$$send_3 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$send_3 = v; return CLS.fld_$$fn$$send_3; };
  CLS.fld_$$fn$$close_4 = null;
  m = c._$$fn$$close_4 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$close_4 = v; return CLS.fld_$$fn$$close_4; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
c._call.call(lcA0, lcA1);
var stA0 = lcA0;var stA1 = c.initWebSocket__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, lcA2);
c._ws.call(stA0, stA1);
if ((c._ws.call(lcA0)) !== null) { gt = 55; break IF; }
var stA0 = lcA1;var stA1 = new vm.java_lang_IllegalArgumentException;
var stA2 = stA1;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"Wrong URL: ");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA2);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
(refs_java_lang_IllegalArgumentException || (refs_java_lang_IllegalArgumentException = vm.java_lang_IllegalArgumentException(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
    }
    X_55: for (;;) { IF: if (gt <= 55) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.send__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;
c.push__VLorg_netbeans_html_json_spi_JSONCall_2.call(lcA0, lcA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.push__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = c._ws.call(lcA0);var stA2 = invoker.getMessage__Ljava_lang_String_2(lcA1);
c.send__VLjava_lang_Object_2Ljava_lang_String_2.call(stA0, stA1, stA2);
return;

};
    m.access = 34;
    m.cls = CLS;
    m = c.onOpen__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isDoOutput__Z(c._call.call(lcA0));
if ((stI0) != 0) { gt = 18; break IF; }
invoker.notifySuccess__VLjava_lang_Object_2(c._call.call(lcA0),null);
    }
    X_18: for (;;) { IF: if (gt <= 18) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_lang_String_2 = function(data) {

  data = vm.java_lang_Class(false).toJS(data);try {
    return eval('(' + data + ')');
  } catch (error) {;
    return data;
  }

}

    m.access = 10;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = c.toJSON__Ljava_lang_Object_2Ljava_lang_String_2(lcA2);
var lcA3 = stA0;
invoker.notifySuccess__VLjava_lang_Object_2(c._call.call(lcA0),lcA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onError__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = c._call.call(lcA0);var stA1 = new vm.java_lang_Exception;
var stA2 = stA1;var stA3 = invoker.toString__Ljava_lang_String_2(lcA1);
(refs_java_lang_Exception || (refs_java_lang_Exception = vm.java_lang_Exception(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onClose__VZILjava_lang_String_2 = function(lcI1, lcI2, lcA3) {
  var  lcA0 = this;
invoker.notifyError__VLjava_lang_Throwable_2(c._call.call(lcA0),null);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.initWebSocket__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function(back,url) {

  back = vm.java_lang_Class(false).toJS(back);
  url = vm.java_lang_Class(false).toJS(url);if (window.WebSocket) {
  try {
    var ws = new window.WebSocket(url);
    ws.onopen = function(ev) {
      vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2(back,ev);
    };
    ws.onmessage = function(ev) {
      vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2Ljava_lang_String_2(back,ev, ev.data);
    };
    ws.onerror = function(ev) {
      vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2(back,ev);
    };
    ws.onclose = function(ev) {
      vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2ZILjava_lang_String_2(back,ev.wasClean, ev.code, ev.reason);
    };
    return ws;
  } catch (ex) {
    return null;
  }
} else {
  return null;
}

}

    m.access = 10;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Ljava_lang_String_2 = function(ws,msg) {

  ws = vm.java_lang_Class(false).toJS(ws);
  msg = vm.java_lang_Class(false).toJS(msg);ws.send(msg);
}

    m.access = 2;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(ws) {

  ws = vm.java_lang_Class(false).toJS(ws);ws.close();
}

    m.access = 10;
    m.cls = CLS;
    m = c.close__V = function() {
  var  lcA0 = this;
c.close__VLjava_lang_Object_2(c._ws.call(lcA0));
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_LoadWSfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_LoadWS', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_LoadWSfillInstOf });
    org_netbeans_html_ko4j_LoadWSfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/LoadWS';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalArgumentException;
    var refs_java_lang_Exception;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_ko4j_LoadWS_ws = null;
    this.fld_org_netbeans_html_ko4j_LoadWS_call = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_IllegalArgumentException = link('java/lang/IllegalArgumentException', function(f) { vm.java_lang_IllegalArgumentException =  f; });
vm.java_io_InputStreamReader = link('java/io/InputStreamReader', function(f) { vm.java_io_InputStreamReader =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.java_io_ByteArrayOutputStream = link('java/io/ByteArrayOutputStream', function(f) { vm.java_io_ByteArrayOutputStream =  f; });
vm.org_netbeans_html_boot_spi_Fn = link('org/netbeans/html/boot/spi/Fn', function(f) { vm.org_netbeans_html_boot_spi_Fn =  f; });

vm.org_netbeans_html_ko4j_KO4J = function org_netbeans_html_ko4j_KO4J() {
  var m;
  var CLS = org_netbeans_html_ko4j_KO4J;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_LOG = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS.fld_LOG = v; return CLS.fld_LOG; };
  m = c._ko4j = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_KO4J_ko4j = v; return this.fld_org_netbeans_html_ko4j_KO4J_ko4j; };
  m = c._trans = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_KO4J_trans = v; return this.fld_org_netbeans_html_ko4j_KO4J_trans; };
  m = c._socks = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_KO4J_socks = v; return this.fld_org_netbeans_html_ko4j_KO4J_socks; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, null);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.knockout__Lorg_netbeans_html_json_spi_Technology_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((c._ko4j.call(lcA0)) !== null) { gt = 18; break IF; }
var stA0 = lcA0;var stA1 = new vm.org_netbeans_html_ko4j_KOTech;
(refs_org_netbeans_html_ko4j_KOTech || (refs_org_netbeans_html_ko4j_KOTech = vm.org_netbeans_html_ko4j_KOTech(false))).constructor.cons__V.call(stA1);
c._ko4j.call(stA0, stA1);
    }
    X_18: for (;;) { IF: if (gt <= 18) {

return c._ko4j.call(lcA0);

    }
}}
};
c['knockout__Lorg_netbeans_html_json_spi_Technology_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.transfer__Lorg_netbeans_html_json_spi_Transfer_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((c._trans.call(lcA0)) !== null) { gt = 18; break IF; }
var stA0 = lcA0;var stA1 = new vm.org_netbeans_html_ko4j_KOTransfer;
(refs_org_netbeans_html_ko4j_KOTransfer || (refs_org_netbeans_html_ko4j_KOTransfer = vm.org_netbeans_html_ko4j_KOTransfer(false))).constructor.cons__V.call(stA1);
c._trans.call(stA0, stA1);
    }
    X_18: for (;;) { IF: if (gt <= 18) {

return c._trans.call(lcA0);

    }
}}
};
c['transfer__Lorg_netbeans_html_json_spi_Transfer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.websockets__Lorg_netbeans_html_json_spi_WSTransfer_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stI0 = (refs_org_netbeans_html_ko4j_KOSockets || (refs_org_netbeans_html_ko4j_KOSockets = vm.org_netbeans_html_ko4j_KOSockets(false))).areWebSocketsSupported__Z();
if ((stI0) != 0) { gt = 8; break IF; }
return null;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

if ((c._socks.call(lcA0)) !== null) { gt = 26; break IF; }
var stA0 = lcA0;var stA1 = new vm.org_netbeans_html_ko4j_KOSockets;
(refs_org_netbeans_html_ko4j_KOSockets || (refs_org_netbeans_html_ko4j_KOSockets = vm.org_netbeans_html_ko4j_KOSockets(false))).constructor.cons__V.call(stA1);
c._socks.call(stA0, stA1);
    }
    X_26: for (;;) { IF: if (gt <= 26) {

return c._socks.call(lcA0);

    }
}}}
};
c['websockets__Lorg_netbeans_html_json_spi_WSTransfer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_Technology || (refs_org_netbeans_html_json_spi_Technology = vm.org_netbeans_html_json_spi_Technology(false))).constructor.$class;var stA2 = lcA0.knockout__Lorg_netbeans_html_json_spi_Technology_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_Transfer || (refs_org_netbeans_html_json_spi_Transfer = vm.org_netbeans_html_json_spi_Transfer(false))).constructor.$class;var stA2 = lcA0.transfer__Lorg_netbeans_html_json_spi_Transfer_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_WSTransfer || (refs_org_netbeans_html_json_spi_WSTransfer = vm.org_netbeans_html_json_spi_WSTransfer(false))).constructor.$class;var stA2 = lcA0.websockets__Lorg_netbeans_html_json_spi_WSTransfer_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
return;

};
c['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = invoker.getName__Ljava_lang_String_2((refs_org_netbeans_html_ko4j_KOSockets || (refs_org_netbeans_html_ko4j_KOSockets = vm.org_netbeans_html_ko4j_KOSockets(false))).constructor.$class);
var stA0 = (refs_java_util_logging_Logger || (refs_java_util_logging_Logger = vm.java_util_logging_Logger(false)))['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
c._LOG(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KO4JfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KO4J', { value : true });
      vm.org_netbeans_html_context_spi_Contexts$Provider(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KO4JfillInstOf });
    org_netbeans_html_ko4j_KO4JfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KO4J';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_context_spi_Contexts$Provider(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_org_netbeans_html_ko4j_KOTech;
    var refs_org_netbeans_html_ko4j_KOTransfer;
    var refs_org_netbeans_html_ko4j_KOSockets;
    var refs_org_netbeans_html_json_spi_Technology;
    var refs_org_netbeans_html_json_spi_Transfer;
    var refs_org_netbeans_html_json_spi_WSTransfer;
    var refs_java_util_logging_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_ko4j_KO4J_ko4j = null;
    this.fld_org_netbeans_html_ko4j_KO4J_trans = null;
    this.fld_org_netbeans_html_ko4j_KO4J_socks = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_ko4j_KO4J'] = vm.org_netbeans_html_ko4j_KO4J;

vm.org_netbeans_html_context_spi_Contexts$Provider = link('org/netbeans/html/context/spi/Contexts$Provider', function(f) { vm.org_netbeans_html_context_spi_Contexts$Provider =  f; });
vm.java_util_logging_Logger = link('java/util/logging/Logger', function(f) { vm.java_util_logging_Logger =  f; });
vm.org_netbeans_html_json_spi_Technology = link('org/netbeans/html/json/spi/Technology', function(f) { vm.org_netbeans_html_json_spi_Technology =  f; });

vm.org_netbeans_html_ko4j_KOSockets = function org_netbeans_html_ko4j_KOSockets() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOSockets;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_$$fn$$areWebSocketsSupported_1 = null;
  m = c._$$fn$$areWebSocketsSupported_1 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$areWebSocketsSupported_1 = v; return CLS.fld_$$fn$$areWebSocketsSupported_1; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.open__Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new vm.org_netbeans_html_ko4j_LoadWS;
(refs_org_netbeans_html_ko4j_LoadWS || (refs_org_netbeans_html_ko4j_LoadWS = vm.org_netbeans_html_ko4j_LoadWS(false))).constructor.cons__VLorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2.call(stA0, lcA2, lcA1);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.send__VLorg_netbeans_html_ko4j_LoadWS_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA1.send__VLorg_netbeans_html_json_spi_JSONCall_2(lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.close__VLorg_netbeans_html_ko4j_LoadWS_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.close__V();
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.areWebSocketsSupported__Z = function() {
if (window['WebSocket']) return true; else return false;
}

    m.access = 24;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx();
lcA0.close__VLorg_netbeans_html_ko4j_LoadWS_2(lcA1);
return;

};
c['close__VLjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx();
lcA0.send__VLorg_netbeans_html_ko4j_LoadWS_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return;

};
c['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.open__Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return stA0;

};
c['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOSocketsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOSockets', { value : true });
      vm.org_netbeans_html_json_spi_WSTransfer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOSocketsfillInstOf });
    org_netbeans_html_ko4j_KOSocketsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOSockets';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_WSTransfer(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["websocket"]
}

    };
    var refs_java_lang_Object;
    var refs_org_netbeans_html_ko4j_LoadWS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_spi_Contexts$Id = link('org/netbeans/html/context/spi/Contexts$Id', function(f) { vm.org_netbeans_html_context_spi_Contexts$Id =  f; });

vm.org_netbeans_html_ko4j_KOTransfer = function org_netbeans_html_ko4j_KOTransfer() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOTransfer;
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
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = vm.org_netbeans_html_ko4j_LoadJSON(false))).extractJSON__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA1, lcA2, lcA3);
return;

};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isJSONP__Z(lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
var stA0 = (refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = vm.org_netbeans_html_ko4j_LoadJSON(false))).createJSONP__Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1);
var lcA2 = stA0;
var stA0 = invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2(lcA1,lcA2);
(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = vm.org_netbeans_html_ko4j_LoadJSON(false))).loadJSONP__VLjava_lang_String_2Ljava_lang_String_2(stA0, lcA2);
{ gt = 83; break IF; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var lcA2 = null;
var stI0 = invoker.isDoOutput__Z(lcA1);
if ((stI0) == 0) { gt = 69; break IF; }
try {var stA0 = new vm.java_io_ByteArrayOutputStream;
(refs_java_io_ByteArrayOutputStream || (refs_java_io_ByteArrayOutputStream = vm.java_io_ByteArrayOutputStream(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
invoker.writeData__VLjava_io_OutputStream_2(lcA1,lcA3);
var stA0 = new vm.java_lang_String;
var stA1 = stA0;var stA2 = invoker.toByteArray___3B(lcA3);
(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor['cons__V_3BLjava_lang_String_2'].call(stA1, stA2, "UTF-8");
var lcA2 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 63; break IF; }}
throw e;
}{ gt = 69; break IF; }
    }
    X_63: for (;;) { IF: if (gt <= 63) {
var lcA3 = stA0;
invoker.notifyError__VLjava_lang_Throwable_2(lcA1,lcA3);
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2(lcA1,null);
var stA1 = lcA1;var stA2 = invoker.getMethod__Ljava_lang_String_2(lcA1);
(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = vm.org_netbeans_html_ko4j_LoadJSON(false))).loadJSON__VLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1, stA2, lcA2);
    }
    X_83: for (;;) { IF: if (gt <= 83) {
return;

    }
}}}}}
};
c['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_io_InputStreamReader;
(refs_java_io_InputStreamReader || (refs_java_io_InputStreamReader = vm.java_io_InputStreamReader(false))).constructor['cons__VLjava_io_InputStream_2'].call(stA0, lcA1);
var lcA3 = stA0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.read__I(lcA3);
var lcI4 = stI0;
if ((lcI4) != (-1)) { gt = 32; break IF; }
{ gt = 43; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA2,(lcI4).toInt16());
{ gt = 0; continue X_17; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA0 = (refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = vm.org_netbeans_html_ko4j_LoadJSON(false))).parse__Ljava_lang_Object_2Ljava_lang_String_2(stA0);
return stA0;

    }
}}}}
};
c['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOTransferfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOTransfer', { value : true });
      vm.org_netbeans_html_json_spi_Transfer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOTransferfillInstOf });
    org_netbeans_html_ko4j_KOTransferfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOTransfer';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_Transfer(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["xhr"]
}

    };
    var refs_java_lang_Object;
    var refs_org_netbeans_html_ko4j_LoadJSON;
    var refs_java_io_ByteArrayOutputStream;
    var refs_java_lang_String;
    var refs_java_lang_StringBuilder;
    var refs_java_io_InputStreamReader;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_ko4j_KOTech = function org_netbeans_html_ko4j_KOTech() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOTech;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._jsObjects = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_KOTech_jsObjects = v; return this.fld_org_netbeans_html_ko4j_KOTech_jsObjects; };
  m = c._jsIndex = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_KOTech_jsIndex = v; return this.fld_org_netbeans_html_ko4j_KOTech_jsIndex; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (lcA2).length);
var lcA4 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, (lcA2).length);
var lcA5 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (lcA2).length);
var lcA6 = stA0;
var lcI7 = 0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

if ((lcI7) >= ((lcA4).length)) { gt = 73; break IF; }
var stA0 = lcA4;var stI1 = lcI7;var stA2 = invoker.getPropertyName__Ljava_lang_String_2(Array.at(lcA2, lcI7));
Array.at(stA0, stI1, stA2);
var stA0 = lcA5;var stI1 = lcI7;var stI2 = invoker.isReadOnly__Z(Array.at(lcA2, lcI7));
Array.at(stA0, stI1, stI2);
var stA0 = lcA6;var stI1 = lcI7;var stA2 = invoker.getValue__Ljava_lang_Object_2(Array.at(lcA2, lcI7));
Array.at(stA0, stI1, stA2);
lcI7++;
{ gt = 0; continue X_23; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (lcA3).length);
var lcA7 = stA0;
var lcI8 = 0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

if ((lcI8) >= ((lcA7).length)) { gt = 109; break IF; }
var stA0 = lcA7;var stI1 = lcI8;var stA2 = invoker.getFunctionName__Ljava_lang_String_2(Array.at(lcA3, lcI8));
Array.at(stA0, stI1, stA2);
lcI8++;
{ gt = 0; continue X_83; }
    }
    X_109: for (;;) { IF: if (gt <= 109) {

var stA0 = c.getJSObject__Ljava_lang_Object_2.call(lcA0);
var lcA8 = stA0;
var stA0 = new vm.org_netbeans_html_ko4j_Knockout;
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = vm.org_netbeans_html_ko4j_Knockout(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2.call(stA0, lcA1, lcA8, lcA2, lcA3);
stA0.wrapModel__VLjava_lang_Object_2_3Ljava_lang_String_2_3ZLjava_lang_Object_2_3Ljava_lang_String_2(lcA8, lcA4, lcA5, lcA6, lcA7);
return lcA8;

    }
}}}}}
};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getJSObject__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = (64);
if ((c._jsObjects.call(lcA0)) === null) { gt = 56; break IF; }
var stI0 = c._jsIndex.call(lcA0);var stI1 = (c._jsObjects.call(lcA0)).length;var stI2 = stI1;
var lcI1 = stI2;
if ((stI0) >= (stI1)) { gt = 56; break IF; }
var lcA2 = Array.at(c._jsObjects.call(lcA0), c._jsIndex.call(lcA0));
Array.at(c._jsObjects.call(lcA0), c._jsIndex.call(lcA0), null);
var stA0 = lcA0;var stA1 = stA0;
c._jsIndex.call(stA0, (c._jsIndex.call(stA1)).add32(1));
return lcA2;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = vm.org_netbeans_html_ko4j_Knockout(false))).allocJS___3Ljava_lang_Object_2I((lcI1).mul32(2));
c._jsObjects.call(stA0, stA1);
c._jsIndex.call(lcA0, 1);
var lcA2 = Array.at(c._jsObjects.call(lcA0), 0);
Array.at(c._jsObjects.call(lcA0), 0, null);
return lcA2;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
c['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = vm.org_netbeans_html_ko4j_Knockout(false))).cleanUp__V();
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = vm.org_netbeans_html_ko4j_Knockout(false))).valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2, null, null);
return;

};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = vm.org_netbeans_html_ko4j_Knockout(false))).cleanUp__V();
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = vm.org_netbeans_html_ko4j_Knockout(false))).valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2, lcA3, lcA4);
return;

};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
c['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.applyBindings__VLjava_lang_String_2Ljava_lang_Object_2(null, lcA1);
return;

};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = vm.org_netbeans_html_ko4j_Knockout(false))).applyBindings__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(lcA1, lcA2);
var lcA3 = stA0;
var stI0 = lcA3 != null && lcA3['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 20; break IF; }
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx();
lcA3.hold__V();
    }
    X_20: for (;;) { IF: if (gt <= 20) {
return;

    }
}}
};
c['applyBindings__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return lcA1;

};
c['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runSafe__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
invoker.warning__VLjava_lang_String_2((refs_org_netbeans_html_ko4j_KO4J || (refs_org_netbeans_html_ko4j_KO4J = vm.org_netbeans_html_ko4j_KO4J(false)))._LOG(),"Technology.runSafe has been deprecated. Use BrwsrCtx.execute!");
invoker.run__V(lcA1);
return;

};
c['runSafe__VLjava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = vm.org_netbeans_html_ko4j_Knockout(false))).toModel__Ljava_lang_Object_2Ljava_lang_Object_2(lcA2);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;

};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOTechfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOTech', { value : true });
      vm.org_netbeans_html_json_spi_Technology$BatchInit(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Technology$ValueMutated(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Technology$ApplyId(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOTechfillInstOf });
    org_netbeans_html_ko4j_KOTechfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOTech';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_Technology$BatchInit(false).constructor.$class,
        vm.org_netbeans_html_json_spi_Technology$ValueMutated(false).constructor.$class,
        vm.org_netbeans_html_json_spi_Technology$ApplyId(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["ko4j"]
}

    };
    var refs_java_lang_Object;
    var refs_org_netbeans_html_ko4j_Knockout;
    var refs_java_lang_UnsupportedOperationException;
    var refs_org_netbeans_html_ko4j_KO4J;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_ko4j_KOTech_jsObjects = null;
    this.fld_org_netbeans_html_ko4j_KOTech_jsIndex = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Technology$ApplyId = link('org/netbeans/html/json/spi/Technology$ApplyId', function(f) { vm.org_netbeans_html_json_spi_Technology$ApplyId =  f; });
vm.org_netbeans_html_json_spi_Technology$ValueMutated = link('org/netbeans/html/json/spi/Technology$ValueMutated', function(f) { vm.org_netbeans_html_json_spi_Technology$ValueMutated =  f; });
vm.org_netbeans_html_json_spi_Technology$BatchInit = link('org/netbeans/html/json/spi/Technology$BatchInit', function(f) { vm.org_netbeans_html_json_spi_Technology$BatchInit =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });

vm.org_netbeans_html_ko4j_Knockout = function org_netbeans_html_ko4j_Knockout() {
  var m;
  var CLS = org_netbeans_html_ko4j_Knockout;
  if (!CLS.$class) {
    var pp = vm.java_lang_ref_WeakReference(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_QUEUE = null;
  m = c._QUEUE = function (v) {  if (arguments.length == 1) CLS.fld_QUEUE = v; return CLS.fld_QUEUE; };
  m = c._props = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_Knockout_props = v; return this.fld_org_netbeans_html_ko4j_Knockout_props; };
  m = c._funcs = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_Knockout_funcs = v; return this.fld_org_netbeans_html_ko4j_Knockout_funcs; };
  m = c._js = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_Knockout_js = v; return this.fld_org_netbeans_html_ko4j_Knockout_js; };
  m = c._strong = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_ko4j_Knockout_strong = v; return this.fld_org_netbeans_html_ko4j_Knockout_strong; };
  CLS.fld_$$fn$$valueHasMutated_1 = null;
  m = c._$$fn$$valueHasMutated_1 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$valueHasMutated_1 = v; return CLS.fld_$$fn$$valueHasMutated_1; };
  CLS.fld_$$fn$$applyBindings_2 = null;
  m = c._$$fn$$applyBindings_2 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$applyBindings_2 = v; return CLS.fld_$$fn$$applyBindings_2; };
  CLS.fld_$$fn$$allocJS_3 = null;
  m = c._$$fn$$allocJS_3 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$allocJS_3 = v; return CLS.fld_$$fn$$allocJS_3; };
  CLS.fld_$$fn$$wrapModel_4 = null;
  m = c._$$fn$$wrapModel_4 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$wrapModel_4 = v; return CLS.fld_$$fn$$wrapModel_4; };
  CLS.fld_$$fn$$clean_5 = null;
  m = c._$$fn$$clean_5 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$clean_5 = v; return CLS.fld_$$fn$$clean_5; };
  CLS.fld_$$fn$$toModelImpl_6 = null;
  m = c._$$fn$$toModelImpl_6 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$toModelImpl_6 = v; return CLS.fld_$$fn$$toModelImpl_6; };
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_java_lang_ref_WeakReference || (refs_java_lang_ref_WeakReference = vm.java_lang_ref_WeakReference(false))).constructor['cons__VLjava_lang_Object_2Ljava_lang_ref_ReferenceQueue_2'].call(lcA0, lcA1, c._QUEUE());
c._js.call(lcA0, lcA2);
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/PropertyBinding;', vm.org_netbeans_html_json_spi_PropertyBinding, (lcA3).length);
c._props.call(stA0, stA1);
var lcI5 = 0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

if ((lcI5) >= ((lcA3).length)) { gt = 52; break IF; }
var stA0 = c._props.call(lcA0);var stI1 = lcI5;var stA2 = invoker.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2(Array.at(lcA3, lcI5));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_25; }
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/FunctionBinding;', vm.org_netbeans_html_json_spi_FunctionBinding, (lcA4).length);
c._funcs.call(stA0, stA1);
var lcI5 = 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

if ((lcI5) >= ((lcA4).length)) { gt = 94; break IF; }
var stA0 = c._funcs.call(lcA0);var stI1 = lcI5;var stA2 = invoker.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2(Array.at(lcA4, lcI5));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_65; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {
return;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.cleanUp__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.poll__Ljava_lang_ref_Reference_2(c._QUEUE());
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx();
var lcA0 = stA0;
if ((lcA0) !== null) { gt = 15; break IF; }
return;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

c.clean__VLjava_lang_Object_2(c._js.call(lcA0));
c._js.call(lcA0, null);
c._props.call(lcA0, null);
c._funcs.call(lcA0, null);
{ gt = 0; continue X_0; }

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.hold__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.get__Ljava_lang_Object_2(lcA0);
c._strong.call(stA0, stA1);
return;

};
    m.access = 16;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = invoker.getValue__Ljava_lang_Object_2(Array.at(c._props.call(lcA0), lcI1));
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.setValue__VILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA2 != null && lcA2['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 15; break IF; }
if (lcA2 !== null && !lcA2['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.get__Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

invoker.setValue__VLjava_lang_Object_2(Array.at(c._props.call(lcA0), lcI1),lcA2);
return;

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.call__VILjava_lang_Object_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3) {
  var  lcA0 = this;
invoker.call__VLjava_lang_Object_2Ljava_lang_Object_2(Array.at(c._funcs.call(lcA0), lcI1),lcA2, lcA3);
return;

};
    m.access = 16;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(model,prop,oldValue,newValue) {

  model = vm.java_lang_Class(false).toJS(model);
  prop = vm.java_lang_Class(false).toJS(prop);
  oldValue = vm.java_lang_Class(false).toJS(oldValue);
  newValue = vm.java_lang_Class(false).toJS(newValue);if (model) {
  var koProp = model[prop];
  if (koProp && koProp['valueHasMutated']) {
    if ((oldValue !== null || newValue !== null)) {
      koProp['valueHasMutated'](newValue);
    } else if (koProp['valueHasMutated']) {
      koProp['valueHasMutated']();
    }
  }
}

}

    m.access = 9;
    m.cls = CLS;
    m = c.applyBindings__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2 = function(id,bindings) {

  id = vm.java_lang_Class(false).toJS(id);
  bindings = vm.java_lang_Class(false).toJS(bindings);var d = window['document'];
var e = id ? d['getElementById'](id) : d['body'];
ko['cleanNode'](e);
ko['applyBindings'](bindings, e);
return bindings['ko4j'];

}

    m.access = 8;
    m.cls = CLS;
    m = c.allocJS___3Ljava_lang_Object_2I = function(cnt) {

  cnt = vm.java_lang_Class(false).toJS(cnt);var arr = new Array(cnt);
for (var i = 0; i < cnt; i++) arr[i] = new Object();
return arr;

}

    m.access = 8;
    m.cls = CLS;
    m = c.wrapModel__VLjava_lang_Object_2_3Ljava_lang_String_2_3ZLjava_lang_Object_2_3Ljava_lang_String_2 = function(ret,propNames,propReadOnly,propValues,funcNames) {

  ret = vm.java_lang_Class(false).toJS(ret);
  propNames = vm.java_lang_Class(false).toJS(propNames);
  propReadOnly = vm.java_lang_Class(false).toJS(propReadOnly);
  propValues = vm.java_lang_Class(false).toJS(propValues);
  funcNames = vm.java_lang_Class(false).toJS(funcNames);Object.defineProperty(ret, 'ko4j', { value : this });
function koComputed(index, name, readOnly, value) {
  var trigger = ko['observable']()['extend']({'notify':'always'});  function realGetter() {
    var self = ret['ko4j'];
    try {
      var v = self ? vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2I(self,index) : null;
      return v;
    } catch (e) {
      alert("Cannot call getValue on " + self + " prop: " + name + " error: " + e);
    }
  }
  var activeGetter = function() { return value; };
  var bnd = {
    'read': function() {
      trigger();
      var r = activeGetter();
      activeGetter = realGetter;
      if (r) try { var br = r.valueOf(); } catch (err) {}
      return br === undefined ? r: br;
    },
    'owner': ret
  };
  if (!readOnly) {
    bnd['write'] = function(val) {
      var self = ret['ko4j'];
      if (!self) return;
      var model = val['ko4j'];
      var s = ret['ko4j'];
      vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2(s,index, model ? model : val);
    };
  };
  var cmpt = ko['computed'](bnd);
  cmpt['valueHasMutated'] = function(val) {
    if (arguments.length === 1) activeGetter = function() { return val; };
    trigger['valueHasMutated']();
  };
  ret[name] = cmpt;
}
for (var i = 0; i < propNames.length; i++) {
  koComputed(i, propNames[i], propReadOnly[i], propValues[i]);
}
function koExpose(index, name) {
  ret[name] = function(data, ev) {
    var self = ret['ko4j'];
    if (!self) return;
    vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2Ljava_lang_Object_2(self,index, data, ev);
  };
}
for (var i = 0; i < funcNames.length; i++) {
  koExpose(i, funcNames[i]);
}

}

    m.access = 0;
    m.cls = CLS;
    m = c.clean__VLjava_lang_Object_2 = function(js) {

  js = vm.java_lang_Class(false).toJS(js);delete js['ko4j'];
for (var p in js) {
  delete js[p];
};


}

    m.access = 10;
    m.cls = CLS;
    m = c.toModelImpl__Ljava_lang_Object_2Ljava_lang_Object_2 = function(o) {

  o = vm.java_lang_Class(false).toJS(o);return o['ko4j'] ? o['ko4j'] : o;
}

    m.access = 10;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.toModelImpl__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0);
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 20; break IF; }
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.get__Ljava_lang_Object_2(lcA1);
return stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

return lcA1;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_lang_ref_ReferenceQueue;
(refs_java_lang_ref_ReferenceQueue || (refs_java_lang_ref_ReferenceQueue = vm.java_lang_ref_ReferenceQueue(false))).constructor['cons__V'].call(stA0);
c._QUEUE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KnockoutfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_Knockout', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KnockoutfillInstOf });
    org_netbeans_html_ko4j_KnockoutfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/Knockout';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_ref_WeakReference;
    var refs_java_lang_ref_ReferenceQueue;
// resource from org/netbeans/html/ko4j/knockout-3.2.0.debug.js
/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright 2013-2014 Oracle and/or its affiliates. All rights reserved.
 *
 * Oracle and Java are registered trademarks of Oracle and/or its affiliates.
 * Other names may be trademarks of their respective owners.
 *
 * The contents of this file are subject to the terms of either the GNU
 * General Public License Version 2 only ("GPL") or the Common
 * Development and Distribution License("CDDL") (collectively, the
 * "License"). You may not use this file except in compliance with the
 * License. You can obtain a copy of the License at
 * http://www.netbeans.org/cddl-gplv2.html
 * or nbbuild/licenses/CDDL-GPL-2-CP. See the License for the
 * specific language governing permissions and limitations under the
 * License.  When distributing the software, include this License Header
 * Notice in each file and include the License file at
 * nbbuild/licenses/CDDL-GPL-2-CP.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the GPL Version 2 section of the License file that
 * accompanied this code. If applicable, add the following below the
 * License Header, with the fields enclosed by brackets [] replaced by
 * your own identifying information:
 * "Portions Copyrighted [year] [name of copyright owner]"
 *
 * Contributor(s):
 *
 * The Original Software is NetBeans. The Initial Developer of the Original
 * Software is Oracle. Portions Copyright 2013-2014 Oracle. All Rights Reserved.
 *
 * If you wish your version of this file to be governed by only the CDDL
 * or only the GPL Version 2, indicate your decision by adding
 * "[Contributor] elects to include this software in this distribution
 * under the [CDDL or GPL Version 2] license." If you do not indicate a
 * single choice of license, a recipient has the option to distribute
 * your version of this file under either the CDDL, the GPL Version 2 or
 * to extend the choice of license to its licensees as provided above.
 * However, if you add GPL Version 2 code and therefore, elected the GPL
 * Version 2 license, then the option applies only if the new code is
 * made subject to such option by the copyright holder.
 */

/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function(){
var DEBUG=false;
(function(undefined){
    // (0, eval)('this') is a robust way of getting a reference to the global object
    // For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
    var window = this || (0, eval)('this'),
        document = window['document'],
        navigator = window['navigator'],
        jQueryInstance = window["jQuery"],
        JSON = window["JSON"];
(function(factory) {
    // Support three module loading scenarios
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // [1] CommonJS/Node.js
        var target = module['exports'] || exports; // module.exports is for Node.js
        factory(target, require);
    } else if (typeof define === 'function' && define['amd']) {
        // [2] AMD anonymous module
        define(['exports', 'require'], factory);
    } else {
        // [3] No module loader (plain <script> tag) - put directly in global namespace
        factory(window['ko'] = {});
    }
}(function(koExports, require){
// Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
// In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
var ko = typeof koExports !== 'undefined' ? koExports : {};
// Google Closure Compiler helpers (used only to make the minified file smaller)
ko.exportSymbol = function(koPath, object) {
    var tokens = koPath.split(".");

    // In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
    // At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
    var target = ko;

    for (var i = 0; i < tokens.length - 1; i++)
        target = target[tokens[i]];
    target[tokens[tokens.length - 1]] = object;
};
ko.exportProperty = function(owner, publicName, object) {
    owner[publicName] = object;
};
ko.version = "3.2.0";

ko.exportSymbol('version', ko.version);
ko.utils = (function () {
    function objectForEach(obj, action) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                action(prop, obj[prop]);
            }
        }
    }

    function extend(target, source) {
        if (source) {
            for(var prop in source) {
                if(source.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    }

    function setPrototypeOf(obj, proto) {
        obj.__proto__ = proto;
        return obj;
    }

    var canSetPrototype = ({ __proto__: [] } instanceof Array);

    // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
    var knownEvents = {}, knownEventTypesByEventName = {};
    var keyEventTypeName = (navigator && /Firefox\/2/i.test(navigator.userAgent)) ? 'KeyboardEvent' : 'UIEvents';
    knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
    knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
    objectForEach(knownEvents, function(eventType, knownEventsForType) {
        if (knownEventsForType.length) {
            for (var i = 0, j = knownEventsForType.length; i < j; i++)
                knownEventTypesByEventName[knownEventsForType[i]] = eventType;
        }
    });
    var eventsThatMustBeRegisteredUsingAttachEvent = { 'propertychange': true }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406

    // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
    // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
    // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
    // If there is a future need to detect specific versions of IE10+, we will amend this.
    var ieVersion = document && (function() {
        var version = 3, div = document.createElement('div'), iElems = div.getElementsByTagName('i');

        // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
        while (
            div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->',
            iElems[0]
        ) {}
        return version > 4 ? version : undefined;
    }());
    var isIe6 = ieVersion === 6,
        isIe7 = ieVersion === 7;

    function isClickOnCheckableElement(element, eventType) {
        if ((ko.utils.tagNameLower(element) !== "input") || !element.type) return false;
        if (eventType.toLowerCase() != "click") return false;
        var inputType = element.type;
        return (inputType == "checkbox") || (inputType == "radio");
    }

    return {
        fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],

        arrayForEach: function (array, action) {
            for (var i = 0, j = array.length; i < j; i++)
                action(array[i], i);
        },

        arrayIndexOf: function (array, item) {
            if (typeof Array.prototype.indexOf == "function")
                return Array.prototype.indexOf.call(array, item);
            for (var i = 0, j = array.length; i < j; i++)
                if (array[i] === item)
                    return i;
            return -1;
        },

        arrayFirst: function (array, predicate, predicateOwner) {
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate.call(predicateOwner, array[i], i))
                    return array[i];
            return null;
        },

        arrayRemoveItem: function (array, itemToRemove) {
            var index = ko.utils.arrayIndexOf(array, itemToRemove);
            if (index > 0) {
                array.splice(index, 1);
            }
            else if (index === 0) {
                array.shift();
            }
        },

        arrayGetDistinctValues: function (array) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++) {
                if (ko.utils.arrayIndexOf(result, array[i]) < 0)
                    result.push(array[i]);
            }
            return result;
        },

        arrayMap: function (array, mapping) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                result.push(mapping(array[i], i));
            return result;
        },

        arrayFilter: function (array, predicate) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate(array[i], i))
                    result.push(array[i]);
            return result;
        },

        arrayPushAll: function (array, valuesToPush) {
            if (valuesToPush instanceof Array)
                array.push.apply(array, valuesToPush);
            else
                for (var i = 0, j = valuesToPush.length; i < j; i++)
                    array.push(valuesToPush[i]);
            return array;
        },

        addOrRemoveItem: function(array, value, included) {
            var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);
            if (existingEntryIndex < 0) {
                if (included)
                    array.push(value);
            } else {
                if (!included)
                    array.splice(existingEntryIndex, 1);
            }
        },

        canSetPrototype: canSetPrototype,

        extend: extend,

        setPrototypeOf: setPrototypeOf,

        setPrototypeOfOrExtend: canSetPrototype ? setPrototypeOf : extend,

        objectForEach: objectForEach,

        objectMap: function(source, mapping) {
            if (!source)
                return source;
            var target = {};
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    target[prop] = mapping(source[prop], prop, source);
                }
            }
            return target;
        },

        emptyDomNode: function (domNode) {
            while (domNode.firstChild) {
                ko.removeNode(domNode.firstChild);
            }
        },

        moveCleanedNodesToContainerElement: function(nodes) {
            // Ensure it's a real array, as we're about to reparent the nodes and
            // we don't want the underlying collection to change while we're doing that.
            var nodesArray = ko.utils.makeArray(nodes);

            var container = document.createElement('div');
            for (var i = 0, j = nodesArray.length; i < j; i++) {
                container.appendChild(ko.cleanNode(nodesArray[i]));
            }
            return container;
        },

        cloneNodes: function (nodesArray, shouldCleanNodes) {
            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                var clonedNode = nodesArray[i].cloneNode(true);
                newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
            }
            return newNodesArray;
        },

        setDomNodeChildren: function (domNode, childNodes) {
            ko.utils.emptyDomNode(domNode);
            if (childNodes) {
                for (var i = 0, j = childNodes.length; i < j; i++)
                    domNode.appendChild(childNodes[i]);
            }
        },

        replaceDomNodes: function (nodeToReplaceOrNodeArray, newNodesArray) {
            var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
            if (nodesToReplaceArray.length > 0) {
                var insertionPoint = nodesToReplaceArray[0];
                var parent = insertionPoint.parentNode;
                for (var i = 0, j = newNodesArray.length; i < j; i++)
                    parent.insertBefore(newNodesArray[i], insertionPoint);
                for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
                    ko.removeNode(nodesToReplaceArray[i]);
                }
            }
        },

        fixUpContinuousNodeArray: function(continuousNodeArray, parentNode) {
            // Before acting on a set of nodes that were previously outputted by a template function, we have to reconcile
            // them against what is in the DOM right now. It may be that some of the nodes have already been removed, or that
            // new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
            // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
            // So, this function translates the old "map" output array into its best guess of the set of current DOM nodes.
            //
            // Rules:
            //   [A] Any leading nodes that have been removed should be ignored
            //       These most likely correspond to memoization nodes that were already removed during binding
            //       See https://github.com/SteveSanderson/knockout/pull/440
            //   [B] We want to output a continuous series of nodes. So, ignore any nodes that have already been removed,
            //       and include any nodes that have been inserted among the previous collection

            if (continuousNodeArray.length) {
                // The parent node can be a virtual element; so get the real parent node
                parentNode = (parentNode.nodeType === 8 && parentNode.parentNode) || parentNode;

                // Rule [A]
                while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode)
                    continuousNodeArray.shift();

                // Rule [B]
                if (continuousNodeArray.length > 1) {
                    var current = continuousNodeArray[0], last = continuousNodeArray[continuousNodeArray.length - 1];
                    // Replace with the actual new continuous node set
                    continuousNodeArray.length = 0;
                    while (current !== last) {
                        continuousNodeArray.push(current);
                        current = current.nextSibling;
                        if (!current) // Won't happen, except if the developer has manually removed some DOM elements (then we're in an undefined scenario)
                            return;
                    }
                    continuousNodeArray.push(last);
                }
            }
            return continuousNodeArray;
        },

        setOptionNodeSelectionState: function (optionNode, isSelected) {
            // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
            if (ieVersion < 7)
                optionNode.setAttribute("selected", isSelected);
            else
                optionNode.selected = isSelected;
        },

        stringTrim: function (string) {
            return string === null || string === undefined ? '' :
                string.trim ?
                    string.trim() :
                    string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
        },

        stringStartsWith: function (string, startsWith) {
            string = string || "";
            if (startsWith.length > string.length)
                return false;
            return string.substring(0, startsWith.length) === startsWith;
        },

        domNodeIsContainedBy: function (node, containedByNode) {
            if (node === containedByNode)
                return true;
            if (node.nodeType === 11)
                return false; // Fixes issue #1162 - can't use node.contains for document fragments on IE8
            if (containedByNode.contains)
                return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
            if (containedByNode.compareDocumentPosition)
                return (containedByNode.compareDocumentPosition(node) & 16) == 16;
            while (node && node != containedByNode) {
                node = node.parentNode;
            }
            return !!node;
        },

        domNodeIsAttachedToDocument: function (node) {
            return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
        },

        anyDomNodeIsAttachedToDocument: function(nodes) {
            return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
        },

        tagNameLower: function(element) {
            // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
            // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
            // we don't need to do the .toLowerCase() as it will always be lower case anyway.
            return element && element.tagName && element.tagName.toLowerCase();
        },

        registerEventHandler: function (element, eventType, handler) {
            var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
            if (!mustUseAttachEvent && jQueryInstance) {
                jQueryInstance(element)['bind'](eventType, handler);
            } else if (!mustUseAttachEvent && typeof element.addEventListener == "function")
                element.addEventListener(eventType, handler, false);
            else if (typeof element.attachEvent != "undefined") {
                var attachEventHandler = function (event) { handler.call(element, event); },
                    attachEventName = "on" + eventType;
                element.attachEvent(attachEventName, attachEventHandler);

                // IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
                // so to avoid leaks, we have to remove them manually. See bug #856
                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    element.detachEvent(attachEventName, attachEventHandler);
                });
            } else
                throw new Error("Browser doesn't support addEventListener or attachEvent");
        },

        triggerEvent: function (element, eventType) {
            if (!(element && element.nodeType))
                throw new Error("element must be a DOM node when calling triggerEvent");

            // For click events on checkboxes and radio buttons, jQuery toggles the element checked state *after* the
            // event handler runs instead of *before*. (This was fixed in 1.9 for checkboxes but not for radio buttons.)
            // IE doesn't change the checked state when you trigger the click event using "fireEvent".
            // In both cases, we'll use the click method instead.
            var useClickWorkaround = isClickOnCheckableElement(element, eventType);

            if (jQueryInstance && !useClickWorkaround) {
                jQueryInstance(element)['trigger'](eventType);
            } else if (typeof document.createEvent == "function") {
                if (typeof element.dispatchEvent == "function") {
                    var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                    var event = document.createEvent(eventCategory);
                    event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                    element.dispatchEvent(event);
                }
                else
                    throw new Error("The supplied element doesn't support dispatchEvent");
            } else if (useClickWorkaround && element.click) {
                element.click();
            } else if (typeof element.fireEvent != "undefined") {
                element.fireEvent("on" + eventType);
            } else {
                throw new Error("Browser doesn't support triggering events");
            }
        },

        unwrapObservable: function (value) {
            return ko.isObservable(value) ? value() : value;
        },

        peekObservable: function (value) {
            return ko.isObservable(value) ? value.peek() : value;
        },

        toggleDomNodeCssClass: function (node, classNames, shouldHaveClass) {
            if (classNames) {
                var cssClassNameRegex = /\S+/g,
                    currentClassNames = node.className.match(cssClassNameRegex) || [];
                ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                    ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
                });
                node.className = currentClassNames.join(" ");
            }
        },

        setTextContent: function(element, textContent) {
            var value = ko.utils.unwrapObservable(textContent);
            if ((value === null) || (value === undefined))
                value = "";

            // We need there to be exactly one child: a text node.
            // If there are no children, more than one, or if it's not a text node,
            // we'll clear everything and create a single text node.
            var innerTextNode = ko.virtualElements.firstChild(element);
            if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                ko.virtualElements.setDomNodeChildren(element, [element.ownerDocument.createTextNode(value)]);
            } else {
                innerTextNode.data = value;
            }

            ko.utils.forceRefresh(element);
        },

        setElementName: function(element, name) {
            element.name = name;

            // Workaround IE 6/7 issue
            // - https://github.com/SteveSanderson/knockout/issues/197
            // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
            if (ieVersion <= 7) {
                try {
                    element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                }
                catch(e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
            }
        },

        forceRefresh: function(node) {
            // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
            if (ieVersion >= 9) {
                // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
                var elem = node.nodeType == 1 ? node : node.parentNode;
                if (elem.style)
                    elem.style.zoom = elem.style.zoom;
            }
        },

        ensureSelectElementIsRenderedCorrectly: function(selectElement) {
            // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
            // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
            // Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
            if (ieVersion) {
                var originalWidth = selectElement.style.width;
                selectElement.style.width = 0;
                selectElement.style.width = originalWidth;
            }
        },

        range: function (min, max) {
            min = ko.utils.unwrapObservable(min);
            max = ko.utils.unwrapObservable(max);
            var result = [];
            for (var i = min; i <= max; i++)
                result.push(i);
            return result;
        },

        makeArray: function(arrayLikeObject) {
            var result = [];
            for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
                result.push(arrayLikeObject[i]);
            };
            return result;
        },

        isIe6 : isIe6,
        isIe7 : isIe7,
        ieVersion : ieVersion,

        getFormFields: function(form, fieldName) {
            var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
            var isMatchingField = (typeof fieldName == 'string')
                ? function(field) { return field.name === fieldName }
                : function(field) { return fieldName.test(field.name) }; // Treat fieldName as regex or object containing predicate
            var matches = [];
            for (var i = fields.length - 1; i >= 0; i--) {
                if (isMatchingField(fields[i]))
                    matches.push(fields[i]);
            };
            return matches;
        },

        parseJson: function (jsonString) {
            if (typeof jsonString == "string") {
                jsonString = ko.utils.stringTrim(jsonString);
                if (jsonString) {
                    if (JSON && JSON.parse) // Use native parsing where available
                        return JSON.parse(jsonString);
                    return (new Function("return " + jsonString))(); // Fallback on less safe parsing for older browsers
                }
            }
            return null;
        },

        stringifyJson: function (data, replacer, space) {   // replacer and space are optional
            if (!JSON || !JSON.stringify)
                throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
        },

        postJson: function (urlOrForm, data, options) {
            options = options || {};
            var params = options['params'] || {};
            var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
            var url = urlOrForm;

            // If we were given a form, use its 'action' URL and pick out any requested field values
            if((typeof urlOrForm == 'object') && (ko.utils.tagNameLower(urlOrForm) === "form")) {
                var originalForm = urlOrForm;
                url = originalForm.action;
                for (var i = includeFields.length - 1; i >= 0; i--) {
                    var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                    for (var j = fields.length - 1; j >= 0; j--)
                        params[fields[j].name] = fields[j].value;
                }
            }

            data = ko.utils.unwrapObservable(data);
            var form = document.createElement("form");
            form.style.display = "none";
            form.action = url;
            form.method = "post";
            for (var key in data) {
                // Since 'data' this is a model object, we include all properties including those inherited from its prototype
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                form.appendChild(input);
            }
            objectForEach(params, function(key, value) {
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = value;
                form.appendChild(input);
            });
            document.body.appendChild(form);
            options['submitter'] ? options['submitter'](form) : form.submit();
            setTimeout(function () { form.parentNode.removeChild(form); }, 0);
        }
    }
}());

ko.exportSymbol('utils', ko.utils);
ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
ko.exportSymbol('utils.extend', ko.utils.extend);
ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
ko.exportSymbol('utils.postJson', ko.utils.postJson);
ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
ko.exportSymbol('utils.range', ko.utils.range);
ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
ko.exportSymbol('unwrap', ko.utils.unwrapObservable); // Convenient shorthand, because this is used so commonly

if (!Function.prototype['bind']) {
    // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
    // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
    Function.prototype['bind'] = function (object) {
        var originalFunction = this, args = Array.prototype.slice.call(arguments), object = args.shift();
        return function () {
            return originalFunction.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
}

ko.utils.domData = new (function () {
    var uniqueId = 0;
    var dataStoreKeyExpandoPropertyName = "__ko__" + (new Date).getTime();
    var dataStore = {};

    function getAll(node, createIfNotFound) {
        var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
        var hasExistingDataStore = dataStoreKey && (dataStoreKey !== "null") && dataStore[dataStoreKey];
        if (!hasExistingDataStore) {
            if (!createIfNotFound)
                return undefined;
            dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
            dataStore[dataStoreKey] = {};
        }
        return dataStore[dataStoreKey];
    }

    return {
        get: function (node, key) {
            var allDataForNode = getAll(node, false);
            return allDataForNode === undefined ? undefined : allDataForNode[key];
        },
        set: function (node, key, value) {
            if (value === undefined) {
                // Make sure we don't actually create a new domData key if we are actually deleting a value
                if (getAll(node, false) === undefined)
                    return;
            }
            var allDataForNode = getAll(node, true);
            allDataForNode[key] = value;
        },
        clear: function (node) {
            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
            if (dataStoreKey) {
                delete dataStore[dataStoreKey];
                node[dataStoreKeyExpandoPropertyName] = null;
                return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
            }
            return false;
        },

        nextKey: function () {
            return (uniqueId++) + dataStoreKeyExpandoPropertyName;
        }
    };
})();

ko.exportSymbol('utils.domData', ko.utils.domData);
ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

ko.utils.domNodeDisposal = new (function () {
    var domDataKey = ko.utils.domData.nextKey();
    var cleanableNodeTypes = { 1: true, 8: true, 9: true };       // Element, Comment, Document
    var cleanableNodeTypesWithDescendants = { 1: true, 9: true }; // Element, Document

    function getDisposeCallbacksCollection(node, createIfNotFound) {
        var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
        if ((allDisposeCallbacks === undefined) && createIfNotFound) {
            allDisposeCallbacks = [];
            ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
        }
        return allDisposeCallbacks;
    }
    function destroyCallbacksCollection(node) {
        ko.utils.domData.set(node, domDataKey, undefined);
    }

    function cleanSingleNode(node) {
        // Run all the dispose callbacks
        var callbacks = getDisposeCallbacksCollection(node, false);
        if (callbacks) {
            callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
            for (var i = 0; i < callbacks.length; i++)
                callbacks[i](node);
        }

        // Erase the DOM data
        ko.utils.domData.clear(node);

        // Perform cleanup needed by external libraries (currently only jQuery, but can be extended)
        ko.utils.domNodeDisposal["cleanExternalData"](node);

        // Clear any immediate-child comment nodes, as these wouldn't have been found by
        // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
        if (cleanableNodeTypesWithDescendants[node.nodeType])
            cleanImmediateCommentTypeChildren(node);
    }

    function cleanImmediateCommentTypeChildren(nodeWithChildren) {
        var child, nextChild = nodeWithChildren.firstChild;
        while (child = nextChild) {
            nextChild = child.nextSibling;
            if (child.nodeType === 8)
                cleanSingleNode(child);
        }
    }

    return {
        addDisposeCallback : function(node, callback) {
            if (typeof callback != "function")
                throw new Error("Callback must be a function");
            getDisposeCallbacksCollection(node, true).push(callback);
        },

        removeDisposeCallback : function(node, callback) {
            var callbacksCollection = getDisposeCallbacksCollection(node, false);
            if (callbacksCollection) {
                ko.utils.arrayRemoveItem(callbacksCollection, callback);
                if (callbacksCollection.length == 0)
                    destroyCallbacksCollection(node);
            }
        },

        cleanNode : function(node) {
            // First clean this node, where applicable
            if (cleanableNodeTypes[node.nodeType]) {
                cleanSingleNode(node);

                // ... then its descendants, where applicable
                if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                    // Clone the descendants list in case it changes during iteration
                    var descendants = [];
                    ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                    for (var i = 0, j = descendants.length; i < j; i++)
                        cleanSingleNode(descendants[i]);
                }
            }
            return node;
        },

        removeNode : function(node) {
            ko.cleanNode(node);
            if (node.parentNode)
                node.parentNode.removeChild(node);
        },

        "cleanExternalData" : function (node) {
            // Special support for jQuery here because it's so commonly used.
            // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
            // so notify it to tear down any resources associated with the node & descendants here.
            if (jQueryInstance && (typeof jQueryInstance['cleanData'] == "function"))
                jQueryInstance['cleanData']([node]);
        }
    }
})();
ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience
ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience
ko.exportSymbol('cleanNode', ko.cleanNode);
ko.exportSymbol('removeNode', ko.removeNode);
ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
(function () {
    var leadingCommentRegex = /^(\s*)<!--(.*?)-->/;

    function simpleHtmlParse(html) {
        // Based on jQuery's "clean" function, but only accounting for table-related elements.
        // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly

        // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
        // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
        // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
        // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.

        // Trim whitespace, otherwise indexOf won't work as expected
        var tags = ko.utils.stringTrim(html).toLowerCase(), div = document.createElement("div");

        // Finds the first match from the left column, and returns the corresponding "wrap" data from the right column
        var wrap = tags.match(/^<(thead|tbody|tfoot)/)              && [1, "<table>", "</table>"] ||
                   !tags.indexOf("<tr")                             && [2, "<table><tbody>", "</tbody></table>"] ||
                   (!tags.indexOf("<td") || !tags.indexOf("<th"))   && [3, "<table><tbody><tr>", "</tr></tbody></table>"] ||
                   /* anything else */                                 [0, "", ""];

        // Go to html and back, then peel off extra wrappers
        // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
        var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
        if (typeof window['innerShiv'] == "function") {
            div.appendChild(window['innerShiv'](markup));
        } else {
            div.innerHTML = markup;
        }

        // Move to the right depth
        while (wrap[0]--)
            div = div.lastChild;

        return ko.utils.makeArray(div.lastChild.childNodes);
    }

    function jQueryHtmlParse(html) {
        // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
        if (jQueryInstance['parseHTML']) {
            return jQueryInstance['parseHTML'](html) || []; // Ensure we always return an array and never null
        } else {
            // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
            var elems = jQueryInstance['clean']([html]);

            // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
            // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
            // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
            if (elems && elems[0]) {
                // Find the top-most parent element that's a direct child of a document fragment
                var elem = elems[0];
                while (elem.parentNode && elem.parentNode.nodeType !== 11 /* i.e., DocumentFragment */)
                    elem = elem.parentNode;
                // ... then detach it
                if (elem.parentNode)
                    elem.parentNode.removeChild(elem);
            }

            return elems;
        }
    }

    ko.utils.parseHtmlFragment = function(html) {
        return jQueryInstance ? jQueryHtmlParse(html)   // As below, benefit from jQuery's optimisations where possible
                              : simpleHtmlParse(html);  // ... otherwise, this simple logic will do in most common cases.
    };

    ko.utils.setHtml = function(node, html) {
        ko.utils.emptyDomNode(node);

        // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
        html = ko.utils.unwrapObservable(html);

        if ((html !== null) && (html !== undefined)) {
            if (typeof html != 'string')
                html = html.toString();

            // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
            // for example <tr> elements which are not normally allowed to exist on their own.
            // If you've referenced jQuery we'll use that rather than duplicating its code.
            if (jQueryInstance) {
                jQueryInstance(node)['html'](html);
            } else {
                // ... otherwise, use KO's own parsing logic.
                var parsedNodes = ko.utils.parseHtmlFragment(html);
                for (var i = 0; i < parsedNodes.length; i++)
                    node.appendChild(parsedNodes[i]);
            }
        }
    };
})();

ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

ko.memoization = (function () {
    var memos = {};

    function randomMax8HexChars() {
        return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
    }
    function generateRandomId() {
        return randomMax8HexChars() + randomMax8HexChars();
    }
    function findMemoNodes(rootNode, appendToArray) {
        if (!rootNode)
            return;
        if (rootNode.nodeType == 8) {
            var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
            if (memoId != null)
                appendToArray.push({ domNode: rootNode, memoId: memoId });
        } else if (rootNode.nodeType == 1) {
            for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++)
                findMemoNodes(childNodes[i], appendToArray);
        }
    }

    return {
        memoize: function (callback) {
            if (typeof callback != "function")
                throw new Error("You can only pass a function to ko.memoization.memoize()");
            var memoId = generateRandomId();
            memos[memoId] = callback;
            return "<!--[ko_memo:" + memoId + "]-->";
        },

        unmemoize: function (memoId, callbackParams) {
            var callback = memos[memoId];
            if (callback === undefined)
                throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
            try {
                callback.apply(null, callbackParams || []);
                return true;
            }
            finally { delete memos[memoId]; }
        },

        unmemoizeDomNodeAndDescendants: function (domNode, extraCallbackParamsArray) {
            var memos = [];
            findMemoNodes(domNode, memos);
            for (var i = 0, j = memos.length; i < j; i++) {
                var node = memos[i].domNode;
                var combinedParams = [node];
                if (extraCallbackParamsArray)
                    ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again
                if (node.parentNode)
                    node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
            }
        },

        parseMemoText: function (memoText) {
            var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
            return match ? match[1] : null;
        }
    };
})();

ko.exportSymbol('memoization', ko.memoization);
ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
ko.extenders = {
    'throttle': function(target, timeout) {
        // Throttling means two things:

        // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
        //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
        target['throttleEvaluation'] = timeout;

        // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
        //     so the target cannot change value synchronously or faster than a certain rate
        var writeTimeoutInstance = null;
        return ko.dependentObservable({
            'read': target,
            'write': function(value) {
                clearTimeout(writeTimeoutInstance);
                writeTimeoutInstance = setTimeout(function() {
                    target(value);
                }, timeout);
            }
        });
    },

    'rateLimit': function(target, options) {
        var timeout, method, limitFunction;

        if (typeof options == 'number') {
            timeout = options;
        } else {
            timeout = options['timeout'];
            method = options['method'];
        }

        limitFunction = method == 'notifyWhenChangesStop' ?  debounce : throttle;
        target.limit(function(callback) {
            return limitFunction(callback, timeout);
        });
    },

    'notify': function(target, notifyWhen) {
        target["equalityComparer"] = notifyWhen == "always" ?
            null :  // null equalityComparer means to always notify
            valuesArePrimitiveAndEqual;
    }
};

var primitiveTypes = { 'undefined':1, 'boolean':1, 'number':1, 'string':1 };
function valuesArePrimitiveAndEqual(a, b) {
    var oldValueIsPrimitive = (a === null) || (typeof(a) in primitiveTypes);
    return oldValueIsPrimitive ? (a === b) : false;
}

function throttle(callback, timeout) {
    var timeoutInstance;
    return function () {
        if (!timeoutInstance) {
            timeoutInstance = setTimeout(function() {
                timeoutInstance = undefined;
                callback();
            }, timeout);
        }
    };
}

function debounce(callback, timeout) {
    var timeoutInstance;
    return function () {
        clearTimeout(timeoutInstance);
        timeoutInstance = setTimeout(callback, timeout);
    };
}

function applyExtenders(requestedExtenders) {
    var target = this;
    if (requestedExtenders) {
        ko.utils.objectForEach(requestedExtenders, function(key, value) {
            var extenderHandler = ko.extenders[key];
            if (typeof extenderHandler == 'function') {
                target = extenderHandler(target, value) || target;
            }
        });
    }
    return target;
}

ko.exportSymbol('extenders', ko.extenders);

ko.subscription = function (target, callback, disposeCallback) {
    this.target = target;
    this.callback = callback;
    this.disposeCallback = disposeCallback;
    this.isDisposed = false;
    ko.exportProperty(this, 'dispose', this.dispose);
};
ko.subscription.prototype.dispose = function () {
    this.isDisposed = true;
    this.disposeCallback();
};

ko.subscribable = function () {
    ko.utils.setPrototypeOfOrExtend(this, ko.subscribable['fn']);
    this._subscriptions = {};
}

var defaultEvent = "change";

var ko_subscribable_fn = {
    subscribe: function (callback, callbackTarget, event) {
        var self = this;

        event = event || defaultEvent;
        var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;

        var subscription = new ko.subscription(self, boundCallback, function () {
            ko.utils.arrayRemoveItem(self._subscriptions[event], subscription);
            if (self.afterSubscriptionRemove)
                self.afterSubscriptionRemove(event);
        });

        if (self.beforeSubscriptionAdd)
            self.beforeSubscriptionAdd(event);

        if (!self._subscriptions[event])
            self._subscriptions[event] = [];
        self._subscriptions[event].push(subscription);

        return subscription;
    },

    "notifySubscribers": function (valueToNotify, event) {
        event = event || defaultEvent;
        if (this.hasSubscriptionsForEvent(event)) {
            try {
                ko.dependencyDetection.begin(); // Begin suppressing dependency detection (by setting the top frame to undefined)
                for (var a = this._subscriptions[event].slice(0), i = 0, subscription; subscription = a[i]; ++i) {
                    // In case a subscription was disposed during the arrayForEach cycle, check
                    // for isDisposed on each subscription before invoking its callback
                    if (!subscription.isDisposed)
                        subscription.callback(valueToNotify);
                }
            } finally {
                ko.dependencyDetection.end(); // End suppressing dependency detection
            }
        }
    },

    limit: function(limitFunction) {
        var self = this, selfIsObservable = ko.isObservable(self),
            isPending, previousValue, pendingValue, beforeChange = 'beforeChange';

        if (!self._origNotifySubscribers) {
            self._origNotifySubscribers = self["notifySubscribers"];
            self["notifySubscribers"] = function(value, event) {
                if (!event || event === defaultEvent) {
                    self._rateLimitedChange(value);
                } else if (event === beforeChange) {
                    self._rateLimitedBeforeChange(value);
                } else {
                    self._origNotifySubscribers(value, event);
                }
            };
        }

        var finish = limitFunction(function() {
            // If an observable provided a reference to itself, access it to get the latest value.
            // This allows computed observables to delay calculating their value until needed.
            if (selfIsObservable && pendingValue === self) {
                pendingValue = self();
            }
            isPending = false;
            if (self.isDifferent(previousValue, pendingValue)) {
                self._origNotifySubscribers(previousValue = pendingValue);
            }
        });

        self._rateLimitedChange = function(value) {
            isPending = true;
            pendingValue = value;
            finish();
        };
        self._rateLimitedBeforeChange = function(value) {
            if (!isPending) {
                previousValue = value;
                self._origNotifySubscribers(value, beforeChange);
            }
        };
    },

    hasSubscriptionsForEvent: function(event) {
        return this._subscriptions[event] && this._subscriptions[event].length;
    },

    getSubscriptionsCount: function () {
        var total = 0;
        ko.utils.objectForEach(this._subscriptions, function(eventName, subscriptions) {
            total += subscriptions.length;
        });
        return total;
    },

    isDifferent: function(oldValue, newValue) {
        return !this['equalityComparer'] || !this['equalityComparer'](oldValue, newValue);
    },

    extend: applyExtenders
};

ko.exportProperty(ko_subscribable_fn, 'subscribe', ko_subscribable_fn.subscribe);
ko.exportProperty(ko_subscribable_fn, 'extend', ko_subscribable_fn.extend);
ko.exportProperty(ko_subscribable_fn, 'getSubscriptionsCount', ko_subscribable_fn.getSubscriptionsCount);

// For browsers that support proto assignment, we overwrite the prototype of each
// observable instance. Since observables are functions, we need Function.prototype
// to still be in the prototype chain.
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(ko_subscribable_fn, Function.prototype);
}

ko.subscribable['fn'] = ko_subscribable_fn;


ko.isSubscribable = function (instance) {
    return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
};

ko.exportSymbol('subscribable', ko.subscribable);
ko.exportSymbol('isSubscribable', ko.isSubscribable);

ko.computedContext = ko.dependencyDetection = (function () {
    var outerFrames = [],
        currentFrame,
        lastId = 0;

    // Return a unique ID that can be assigned to an observable for dependency tracking.
    // Theoretically, you could eventually overflow the number storage size, resulting
    // in duplicate IDs. But in JavaScript, the largest exact integral value is 2^53
    // or 9,007,199,254,740,992. If you created 1,000,000 IDs per second, it would
    // take over 285 years to reach that number.
    // Reference http://blog.vjeux.com/2010/javascript/javascript-max_int-number-limits.html
    function getId() {
        return ++lastId;
    }

    function begin(options) {
        outerFrames.push(currentFrame);
        currentFrame = options;
    }

    function end() {
        currentFrame = outerFrames.pop();
    }

    return {
        begin: begin,

        end: end,

        registerDependency: function (subscribable) {
            if (currentFrame) {
                if (!ko.isSubscribable(subscribable))
                    throw new Error("Only subscribable things can act as dependencies");
                currentFrame.callback(subscribable, subscribable._id || (subscribable._id = getId()));
            }
        },

        ignore: function (callback, callbackTarget, callbackArgs) {
            try {
                begin();
                return callback.apply(callbackTarget, callbackArgs || []);
            } finally {
                end();
            }
        },

        getDependenciesCount: function () {
            if (currentFrame)
                return currentFrame.computed.getDependenciesCount();
        },

        isInitial: function() {
            if (currentFrame)
                return currentFrame.isInitial;
        }
    };
})();

ko.exportSymbol('computedContext', ko.computedContext);
ko.exportSymbol('computedContext.getDependenciesCount', ko.computedContext.getDependenciesCount);
ko.exportSymbol('computedContext.isInitial', ko.computedContext.isInitial);
ko.exportSymbol('computedContext.isSleeping', ko.computedContext.isSleeping);
ko.observable = function (initialValue) {
    var _latestValue = initialValue;

    function observable() {
        if (arguments.length > 0) {
            // Write

            // Ignore writes if the value hasn't changed
            if (observable.isDifferent(_latestValue, arguments[0])) {
                observable.valueWillMutate();
                _latestValue = arguments[0];
                if (DEBUG) observable._latestValue = _latestValue;
                observable.valueHasMutated();
            }
            return this; // Permits chained assignments
        }
        else {
            // Read
            ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation
            return _latestValue;
        }
    }
    ko.subscribable.call(observable);
    ko.utils.setPrototypeOfOrExtend(observable, ko.observable['fn']);

    if (DEBUG) observable._latestValue = _latestValue;
    observable.peek = function() { return _latestValue };
    observable.valueHasMutated = function () { observable["notifySubscribers"](_latestValue); }
    observable.valueWillMutate = function () { observable["notifySubscribers"](_latestValue, "beforeChange"); }

    ko.exportProperty(observable, 'peek', observable.peek);
    ko.exportProperty(observable, "valueHasMutated", observable.valueHasMutated);
    ko.exportProperty(observable, "valueWillMutate", observable.valueWillMutate);

    return observable;
}

ko.observable['fn'] = {
    "equalityComparer": valuesArePrimitiveAndEqual
};

var protoProperty = ko.observable.protoProperty = "__ko_proto__";
ko.observable['fn'][protoProperty] = ko.observable;

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.observable constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(ko.observable['fn'], ko.subscribable['fn']);
}

ko.hasPrototype = function(instance, prototype) {
    if ((instance === null) || (instance === undefined) || (instance[protoProperty] === undefined)) return false;
    if (instance[protoProperty] === prototype) return true;
    return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
};

ko.isObservable = function (instance) {
    return ko.hasPrototype(instance, ko.observable);
}
ko.isWriteableObservable = function (instance) {
    // Observable
    if ((typeof instance == "function") && instance[protoProperty] === ko.observable)
        return true;
    // Writeable dependent observable
    if ((typeof instance == "function") && (instance[protoProperty] === ko.dependentObservable) && (instance.hasWriteFunction))
        return true;
    // Anything else
    return false;
}


ko.exportSymbol('observable', ko.observable);
ko.exportSymbol('isObservable', ko.isObservable);
ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
ko.exportSymbol('isWritableObservable', ko.isWriteableObservable);
ko.observableArray = function (initialValues) {
    initialValues = initialValues || [];

    if (typeof initialValues != 'object' || !('length' in initialValues))
        throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");

    var result = ko.observable(initialValues);
    ko.utils.setPrototypeOfOrExtend(result, ko.observableArray['fn']);
    return result.extend({'trackArrayChanges':true});
};

ko.observableArray['fn'] = {
    'remove': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var removedValues = [];
        var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        for (var i = 0; i < underlyingArray.length; i++) {
            var value = underlyingArray[i];
            if (predicate(value)) {
                if (removedValues.length === 0) {
                    this.valueWillMutate();
                }
                removedValues.push(value);
                underlyingArray.splice(i, 1);
                i--;
            }
        }
        if (removedValues.length) {
            this.valueHasMutated();
        }
        return removedValues;
    },

    'removeAll': function (arrayOfValues) {
        // If you passed zero args, we remove everything
        if (arrayOfValues === undefined) {
            var underlyingArray = this.peek();
            var allValues = underlyingArray.slice(0);
            this.valueWillMutate();
            underlyingArray.splice(0, underlyingArray.length);
            this.valueHasMutated();
            return allValues;
        }
        // If you passed an arg, we interpret it as an array of entries to remove
        if (!arrayOfValues)
            return [];
        return this['remove'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'destroy': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        this.valueWillMutate();
        for (var i = underlyingArray.length - 1; i >= 0; i--) {
            var value = underlyingArray[i];
            if (predicate(value))
                underlyingArray[i]["_destroy"] = true;
        }
        this.valueHasMutated();
    },

    'destroyAll': function (arrayOfValues) {
        // If you passed zero args, we destroy everything
        if (arrayOfValues === undefined)
            return this['destroy'](function() { return true });

        // If you passed an arg, we interpret it as an array of entries to destroy
        if (!arrayOfValues)
            return [];
        return this['destroy'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'indexOf': function (item) {
        var underlyingArray = this();
        return ko.utils.arrayIndexOf(underlyingArray, item);
    },

    'replace': function(oldItem, newItem) {
        var index = this['indexOf'](oldItem);
        if (index >= 0) {
            this.valueWillMutate();
            this.peek()[index] = newItem;
            this.valueHasMutated();
        }
    }
};

// Populate ko.observableArray.fn with read/write functions from native arrays
// Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
// because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
        // (for consistency with mutating regular observables)
        var underlyingArray = this.peek();
        this.valueWillMutate();
        this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
        var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
        this.valueHasMutated();
        return methodCallResult;
    };
});

// Populate ko.observableArray.fn with read-only functions from native arrays
ko.utils.arrayForEach(["slice"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        var underlyingArray = this();
        return underlyingArray[methodName].apply(underlyingArray, arguments);
    };
});

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.observableArray constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(ko.observableArray['fn'], ko.observable['fn']);
}

ko.exportSymbol('observableArray', ko.observableArray);
var arrayChangeEventName = 'arrayChange';
ko.extenders['trackArrayChanges'] = function(target) {
    // Only modify the target observable once
    if (target.cacheDiffForKnownOperation) {
        return;
    }
    var trackingChanges = false,
        cachedDiff = null,
        pendingNotifications = 0,
        underlyingSubscribeFunction = target.subscribe;

    // Intercept "subscribe" calls, and for array change events, ensure change tracking is enabled
    target.subscribe = target['subscribe'] = function(callback, callbackTarget, event) {
        if (event === arrayChangeEventName) {
            trackChanges();
        }
        return underlyingSubscribeFunction.apply(this, arguments);
    };

    function trackChanges() {
        // Calling 'trackChanges' multiple times is the same as calling it once
        if (trackingChanges) {
            return;
        }

        trackingChanges = true;

        // Intercept "notifySubscribers" to track how many times it was called.
        var underlyingNotifySubscribersFunction = target['notifySubscribers'];
        target['notifySubscribers'] = function(valueToNotify, event) {
            if (!event || event === defaultEvent) {
                ++pendingNotifications;
            }
            return underlyingNotifySubscribersFunction.apply(this, arguments);
        };

        // Each time the array changes value, capture a clone so that on the next
        // change it's possible to produce a diff
        var previousContents = [].concat(target.peek() || []);
        cachedDiff = null;
        target.subscribe(function(currentContents) {
            // Make a copy of the current contents and ensure it's an array
            currentContents = [].concat(currentContents || []);

            // Compute the diff and issue notifications, but only if someone is listening
            if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                var changes = getChanges(previousContents, currentContents);
                if (changes.length) {
                    target['notifySubscribers'](changes, arrayChangeEventName);
                }
            }

            // Eliminate references to the old, removed items, so they can be GCed
            previousContents = currentContents;
            cachedDiff = null;
            pendingNotifications = 0;
        });
    }

    function getChanges(previousContents, currentContents) {
        // We try to re-use cached diffs.
        // The scenarios where pendingNotifications > 1 are when using rate-limiting or the Deferred Updates
        // plugin, which without this check would not be compatible with arrayChange notifications. Normally,
        // notifications are issued immediately so we wouldn't be queueing up more than one.
        if (!cachedDiff || pendingNotifications > 1) {
            cachedDiff = ko.utils.compareArrays(previousContents, currentContents, { 'sparse': true });
        }

        return cachedDiff;
    }

    target.cacheDiffForKnownOperation = function(rawArray, operationName, args) {
        // Only run if we're currently tracking changes for this observable array
        // and there aren't any pending deferred notifications.
        if (!trackingChanges || pendingNotifications) {
            return;
        }
        var diff = [],
            arrayLength = rawArray.length,
            argsLength = args.length,
            offset = 0;

        function pushDiff(status, value, index) {
            return diff[diff.length] = { 'status': status, 'value': value, 'index': index };
        }
        switch (operationName) {
            case 'push':
                offset = arrayLength;
            case 'unshift':
                for (var index = 0; index < argsLength; index++) {
                    pushDiff('added', args[index], offset + index);
                }
                break;

            case 'pop':
                offset = arrayLength - 1;
            case 'shift':
                if (arrayLength) {
                    pushDiff('deleted', rawArray[offset], offset);
                }
                break;

            case 'splice':
                // Negative start index means 'from end of array'. After that we clamp to [0...arrayLength].
                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
                    endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
                    endAddIndex = startIndex + argsLength - 2,
                    endIndex = Math.max(endDeleteIndex, endAddIndex),
                    additions = [], deletions = [];
                for (var index = startIndex, argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
                    if (index < endDeleteIndex)
                        deletions.push(pushDiff('deleted', rawArray[index], index));
                    if (index < endAddIndex)
                        additions.push(pushDiff('added', args[argsIndex], index));
                }
                ko.utils.findMovesInArrayComparison(deletions, additions);
                break;

            default:
                return;
        }
        cachedDiff = diff;
    };
};
ko.computed = ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
    var _latestValue,
        _needsEvaluation = true,
        _isBeingEvaluated = false,
        _suppressDisposalUntilDisposeWhenReturnsFalse = false,
        _isDisposed = false,
        readFunction = evaluatorFunctionOrOptions,
        pure = false,
        isSleeping = false;

    if (readFunction && typeof readFunction == "object") {
        // Single-parameter syntax - everything is on this "options" param
        options = readFunction;
        readFunction = options["read"];
    } else {
        // Multi-parameter syntax - construct the options according to the params passed
        options = options || {};
        if (!readFunction)
            readFunction = options["read"];
    }
    if (typeof readFunction != "function")
        throw new Error("Pass a function that returns the value of the ko.computed");

    function addSubscriptionToDependency(subscribable, id) {
        if (!_subscriptionsToDependencies[id]) {
            _subscriptionsToDependencies[id] = subscribable.subscribe(evaluatePossiblyAsync);
            ++_dependenciesCount;
        }
    }

    function disposeAllSubscriptionsToDependencies() {
        ko.utils.objectForEach(_subscriptionsToDependencies, function (id, subscription) {
            subscription.dispose();
        });
        _subscriptionsToDependencies = {};
    }

    function disposeComputed() {
        disposeAllSubscriptionsToDependencies();
        _dependenciesCount = 0;
        _isDisposed = true;
        _needsEvaluation = false;
    }

    function evaluatePossiblyAsync() {
        var throttleEvaluationTimeout = dependentObservable['throttleEvaluation'];
        if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
            clearTimeout(evaluationTimeoutInstance);
            evaluationTimeoutInstance = setTimeout(evaluateImmediate, throttleEvaluationTimeout);
        } else if (dependentObservable._evalRateLimited) {
            dependentObservable._evalRateLimited();
        } else {
            evaluateImmediate();
        }
    }

    function evaluateImmediate(suppressChangeNotification) {
        if (_isBeingEvaluated) {
            if (pure) {
                throw Error("A 'pure' computed must not be called recursively");
            }
            // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
            // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
            // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
            // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
            return;
        }

        // Do not evaluate (and possibly capture new dependencies) if disposed
        if (_isDisposed) {
            return;
        }

        if (disposeWhen && disposeWhen()) {
            // See comment below about _suppressDisposalUntilDisposeWhenReturnsFalse
            if (!_suppressDisposalUntilDisposeWhenReturnsFalse) {
                dispose();
                return;
            }
        } else {
            // It just did return false, so we can stop suppressing now
            _suppressDisposalUntilDisposeWhenReturnsFalse = false;
        }

        _isBeingEvaluated = true;

        // When sleeping, recalculate the value and return.
        if (isSleeping) {
            try {
                var dependencyTracking = {};
                ko.dependencyDetection.begin({
                    callback: function (subscribable, id) {
                        if (!dependencyTracking[id]) {
                            dependencyTracking[id] = 1;
                            ++_dependenciesCount;
                        }
                    },
                    computed: dependentObservable,
                    isInitial: undefined
                });
                _dependenciesCount = 0;
                _latestValue = readFunction.call(evaluatorFunctionTarget);
            } finally {
                ko.dependencyDetection.end();
                _isBeingEvaluated = false;
            }
        } else {
            try {
                // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
                // Then, during evaluation, we cross off any that are in fact still being used.
                var disposalCandidates = _subscriptionsToDependencies, disposalCount = _dependenciesCount;
                ko.dependencyDetection.begin({
                    callback: function(subscribable, id) {
                        if (!_isDisposed) {
                            if (disposalCount && disposalCandidates[id]) {
                                // Don't want to dispose this subscription, as it's still being used
                                _subscriptionsToDependencies[id] = disposalCandidates[id];
                                ++_dependenciesCount;
                                delete disposalCandidates[id];
                                --disposalCount;
                            } else {
                                // Brand new subscription - add it
                                addSubscriptionToDependency(subscribable, id);
                            }
                        }
                    },
                    computed: dependentObservable,
                    isInitial: pure ? undefined : !_dependenciesCount        // If we're evaluating when there are no previous dependencies, it must be the first time
                });

                _subscriptionsToDependencies = {};
                _dependenciesCount = 0;

                try {
                    var newValue = evaluatorFunctionTarget ? readFunction.call(evaluatorFunctionTarget) : readFunction();

                } finally {
                    ko.dependencyDetection.end();

                    // For each subscription no longer being used, remove it from the active subscriptions list and dispose it
                    if (disposalCount) {
                        ko.utils.objectForEach(disposalCandidates, function(id, toDispose) {
                            toDispose.dispose();
                        });
                    }

                    _needsEvaluation = false;
                }

                if (dependentObservable.isDifferent(_latestValue, newValue)) {
                    dependentObservable["notifySubscribers"](_latestValue, "beforeChange");

                    _latestValue = newValue;
                    if (DEBUG) dependentObservable._latestValue = _latestValue;

                    if (suppressChangeNotification !== true) {  // Check for strict true value since setTimeout in Firefox passes a numeric value to the function
                        dependentObservable["notifySubscribers"](_latestValue);
                    }
                }
            } finally {
                _isBeingEvaluated = false;
            }
        }

        if (!_dependenciesCount)
            dispose();
    }

    function dependentObservable() {
        if (arguments.length > 0) {
            if (typeof writeFunction === "function") {
                // Writing a value
                writeFunction.apply(evaluatorFunctionTarget, arguments);
            } else {
                throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            }
            return this; // Permits chained assignments
        } else {
            // Reading the value
            ko.dependencyDetection.registerDependency(dependentObservable);
            if (_needsEvaluation)
                evaluateImmediate(true /* suppressChangeNotification */);
            return _latestValue;
        }
    }

    function peek() {
        // Peek won't re-evaluate, except to get the initial value when "deferEvaluation" is set, or while the computed is sleeping.
        // Those are the only times that both of these conditions will be satisfied.
        if (_needsEvaluation && !_dependenciesCount)
            evaluateImmediate(true /* suppressChangeNotification */);
        return _latestValue;
    }

    function isActive() {
        return _needsEvaluation || _dependenciesCount > 0;
    }

    // By here, "options" is always non-null
    var writeFunction = options["write"],
        disposeWhenNodeIsRemoved = options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
        disposeWhenOption = options["disposeWhen"] || options.disposeWhen,
        disposeWhen = disposeWhenOption,
        dispose = disposeComputed,
        _subscriptionsToDependencies = {},
        _dependenciesCount = 0,
        evaluationTimeoutInstance = null;

    if (!evaluatorFunctionTarget)
        evaluatorFunctionTarget = options["owner"];

    ko.subscribable.call(dependentObservable);
    ko.utils.setPrototypeOfOrExtend(dependentObservable, ko.dependentObservable['fn']);

    dependentObservable.peek = peek;
    dependentObservable.getDependenciesCount = function () { return _dependenciesCount; };
    dependentObservable.hasWriteFunction = typeof options["write"] === "function";
    dependentObservable.dispose = function () { dispose(); };
    dependentObservable.isActive = isActive;

    // Replace the limit function with one that delays evaluation as well.
    var originalLimit = dependentObservable.limit;
    dependentObservable.limit = function(limitFunction) {
        originalLimit.call(dependentObservable, limitFunction);
        dependentObservable._evalRateLimited = function() {
            dependentObservable._rateLimitedBeforeChange(_latestValue);

            _needsEvaluation = true;    // Mark as dirty

            // Pass the observable to the rate-limit code, which will access it when
            // it's time to do the notification.
            dependentObservable._rateLimitedChange(dependentObservable);
        }
    };

    if (options['pure']) {
        pure = true;
        isSleeping = true;     // Starts off sleeping; will awake on the first subscription
        dependentObservable.beforeSubscriptionAdd = function () {
            // If asleep, wake up the computed and evaluate to register any dependencies.
            if (isSleeping) {
                isSleeping = false;
                evaluateImmediate(true /* suppressChangeNotification */);
            }
        }
        dependentObservable.afterSubscriptionRemove = function () {
            if (!dependentObservable.getSubscriptionsCount()) {
                disposeAllSubscriptionsToDependencies();
                isSleeping = _needsEvaluation = true;
            }
        }
    } else if (options['deferEvaluation']) {
        // This will force a computed with deferEvaluation to evaluate when the first subscriptions is registered.
        dependentObservable.beforeSubscriptionAdd = function () {
            peek();
            delete dependentObservable.beforeSubscriptionAdd;
        }
    }

    ko.exportProperty(dependentObservable, 'peek', dependentObservable.peek);
    ko.exportProperty(dependentObservable, 'dispose', dependentObservable.dispose);
    ko.exportProperty(dependentObservable, 'isActive', dependentObservable.isActive);
    ko.exportProperty(dependentObservable, 'getDependenciesCount', dependentObservable.getDependenciesCount);

    // Add a "disposeWhen" callback that, on each evaluation, disposes if the node was removed without using ko.removeNode.
    if (disposeWhenNodeIsRemoved) {
        // Since this computed is associated with a DOM node, and we don't want to dispose the computed
        // until the DOM node is *removed* from the document (as opposed to never having been in the document),
        // we'll prevent disposal until "disposeWhen" first returns false.
        _suppressDisposalUntilDisposeWhenReturnsFalse = true;

        // Only watch for the node's disposal if the value really is a node. It might not be,
        // e.g., { disposeWhenNodeIsRemoved: true } can be used to opt into the "only dispose
        // after first false result" behaviour even if there's no specific node to watch. This
        // technique is intended for KO's internal use only and shouldn't be documented or used
        // by application code, as it's likely to change in a future version of KO.
        if (disposeWhenNodeIsRemoved.nodeType) {
            disposeWhen = function () {
                return !ko.utils.domNodeIsAttachedToDocument(disposeWhenNodeIsRemoved) || (disposeWhenOption && disposeWhenOption());
            };
        }
    }

    // Evaluate, unless sleeping or deferEvaluation is true
    if (!isSleeping && !options['deferEvaluation'])
        evaluateImmediate();

    // Attach a DOM node disposal callback so that the computed will be proactively disposed as soon as the node is
    // removed using ko.removeNode. But skip if isActive is false (there will never be any dependencies to dispose).
    if (disposeWhenNodeIsRemoved && isActive() && disposeWhenNodeIsRemoved.nodeType) {
        dispose = function() {
            ko.utils.domNodeDisposal.removeDisposeCallback(disposeWhenNodeIsRemoved, dispose);
            disposeComputed();
        };
        ko.utils.domNodeDisposal.addDisposeCallback(disposeWhenNodeIsRemoved, dispose);
    }

    return dependentObservable;
};

ko.isComputed = function(instance) {
    return ko.hasPrototype(instance, ko.dependentObservable);
};

var protoProp = ko.observable.protoProperty; // == "__ko_proto__"
ko.dependentObservable[protoProp] = ko.observable;

ko.dependentObservable['fn'] = {
    "equalityComparer": valuesArePrimitiveAndEqual
};
ko.dependentObservable['fn'][protoProp] = ko.dependentObservable;

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.dependentObservable constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(ko.dependentObservable['fn'], ko.subscribable['fn']);
}

ko.exportSymbol('dependentObservable', ko.dependentObservable);
ko.exportSymbol('computed', ko.dependentObservable); // Make "ko.computed" an alias for "ko.dependentObservable"
ko.exportSymbol('isComputed', ko.isComputed);

ko.pureComputed = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget) {
    if (typeof evaluatorFunctionOrOptions === 'function') {
        return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget, {'pure':true});
    } else {
        evaluatorFunctionOrOptions = ko.utils.extend({}, evaluatorFunctionOrOptions);   // make a copy of the parameter object
        evaluatorFunctionOrOptions['pure'] = true;
        return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget);
    }
}
ko.exportSymbol('pureComputed', ko.pureComputed);

(function() {
    var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

    ko.toJS = function(rootObject) {
        if (arguments.length == 0)
            throw new Error("When calling ko.toJS, pass the object you want to convert.");

        // We just unwrap everything at every level in the object graph
        return mapJsObjectGraph(rootObject, function(valueToMap) {
            // Loop because an observable's value might in turn be another observable wrapper
            for (var i = 0; ko.isObservable(valueToMap) && (i < maxNestedObservableDepth); i++)
                valueToMap = valueToMap();
            return valueToMap;
        });
    };

    ko.toJSON = function(rootObject, replacer, space) {     // replacer and space are optional
        var plainJavaScriptObject = ko.toJS(rootObject);
        return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
    };

    function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
        visitedObjects = visitedObjects || new objectLookup();

        rootObject = mapInputCallback(rootObject);
        var canHaveProperties = (typeof rootObject == "object") && (rootObject !== null) && (rootObject !== undefined) && (!(rootObject instanceof Date)) && (!(rootObject instanceof String)) && (!(rootObject instanceof Number)) && (!(rootObject instanceof Boolean));
        if (!canHaveProperties)
            return rootObject;

        var outputProperties = rootObject instanceof Array ? [] : {};
        visitedObjects.save(rootObject, outputProperties);

        visitPropertiesOrArrayEntries(rootObject, function(indexer) {
            var propertyValue = mapInputCallback(rootObject[indexer]);

            switch (typeof propertyValue) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    outputProperties[indexer] = propertyValue;
                    break;
                case "object":
                case "undefined":
                    var previouslyMappedValue = visitedObjects.get(propertyValue);
                    outputProperties[indexer] = (previouslyMappedValue !== undefined)
                        ? previouslyMappedValue
                        : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                    break;
            }
        });

        return outputProperties;
    }

    function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
        if (rootObject instanceof Array) {
            for (var i = 0; i < rootObject.length; i++)
                visitorCallback(i);

            // For arrays, also respect toJSON property for custom mappings (fixes #278)
            if (typeof rootObject['toJSON'] == 'function')
                visitorCallback('toJSON');
        } else {
            for (var propertyName in rootObject) {
                visitorCallback(propertyName);
            }
        }
    };

    function objectLookup() {
        this.keys = [];
        this.values = [];
    };

    objectLookup.prototype = {
        constructor: objectLookup,
        save: function(key, value) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            if (existingIndex >= 0)
                this.values[existingIndex] = value;
            else {
                this.keys.push(key);
                this.values.push(value);
            }
        },
        get: function(key) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            return (existingIndex >= 0) ? this.values[existingIndex] : undefined;
        }
    };
})();

ko.exportSymbol('toJS', ko.toJS);
ko.exportSymbol('toJSON', ko.toJSON);
(function () {
    var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';

    // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
    // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
    // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
    ko.selectExtensions = {
        readValue : function(element) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    if (element[hasDomDataExpandoProperty] === true)
                        return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                    return ko.utils.ieVersion <= 7
                        ? (element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text)
                        : element.value;
                case 'select':
                    return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                default:
                    return element.value;
            }
        },

        writeValue: function(element, value, allowUnset) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    switch(typeof value) {
                        case "string":
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                            if (hasDomDataExpandoProperty in element) { // IE <= 8 throws errors if you delete non-existent properties from a DOM node
                                delete element[hasDomDataExpandoProperty];
                            }
                            element.value = value;
                            break;
                        default:
                            // Store arbitrary object using DomData
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                            element[hasDomDataExpandoProperty] = true;

                            // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
                            element.value = typeof value === "number" ? value : "";
                            break;
                    }
                    break;
                case 'select':
                    if (value === "" || value === null)       // A blank string or null value will select the caption
                        value = undefined;
                    var selection = -1;
                    for (var i = 0, n = element.options.length, optionValue; i < n; ++i) {
                        optionValue = ko.selectExtensions.readValue(element.options[i]);
                        // Include special check to handle selecting a caption with a blank string value
                        if (optionValue == value || (optionValue == "" && value === undefined)) {
                            selection = i;
                            break;
                        }
                    }
                    if (allowUnset || selection >= 0 || (value === undefined && element.size > 1)) {
                        element.selectedIndex = selection;
                    }
                    break;
                default:
                    if ((value === null) || (value === undefined))
                        value = "";
                    element.value = value;
                    break;
            }
        }
    };
})();

ko.exportSymbol('selectExtensions', ko.selectExtensions);
ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
ko.expressionRewriting = (function () {
    var javaScriptReservedWords = ["true", "false", "null", "undefined"];

    // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
    // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
    // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
    var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

    function getWriteableValue(expression) {
        if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0)
            return false;
        var match = expression.match(javaScriptAssignmentTarget);
        return match === null ? false : match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
    }

    // The following regular expressions will be used to split an object-literal string into tokens

        // These two match strings, either with double quotes or single quotes
    var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
        stringSingle = "'(?:[^'\\\\]|\\\\.)*'",
        // Matches a regular expression (text enclosed by slashes), but will also match sets of divisions
        // as a regular expression (this is handled by the parsing loop below).
        stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',
        // These characters have special meaning to the parser and must not appear in the middle of a
        // token, except as part of a string.
        specials = ',"\'{}()/:[\\]',
        // Match text (at least two characters) that does not contain any of the above special characters,
        // although some of the special characters are allowed to start it (all but the colon and comma).
        // The text can contain spaces, but leading or trailing spaces are skipped.
        everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',
        // Match any non-space character not matched already. This will match colons and commas, since they're
        // not matched by "everyThingElse", but will also match any other single character that wasn't already
        // matched (for example: in "a: 1, b: 2", each of the non-space characters will be matched by oneNotSpace).
        oneNotSpace = '[^\\s]',

        // Create the actual regular expression by or-ing the above strings. The order is important.
        bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),

        // Match end of previous token to determine whether a slash is a division or regex.
        divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
        keywordRegexLookBehind = {'in':1,'return':1,'typeof':1};

    function parseObjectLiteral(objectLiteralString) {
        // Trim leading and trailing spaces from the string
        var str = ko.utils.stringTrim(objectLiteralString);

        // Trim braces '{' surrounding the whole object literal
        if (str.charCodeAt(0) === 123) str = str.slice(1, -1);

        // Split into tokens
        var result = [], toks = str.match(bindingToken), key, values, depth = 0;

        if (toks) {
            // Append a comma so that we don't need a separate code block to deal with the last item
            toks.push(',');

            for (var i = 0, tok; tok = toks[i]; ++i) {
                var c = tok.charCodeAt(0);
                // A comma signals the end of a key/value pair if depth is zero
                if (c === 44) { // ","
                    if (depth <= 0) {
                        if (key)
                            result.push(values ? {key: key, value: values.join('')} : {'unknown': key});
                        key = values = depth = 0;
                        continue;
                    }
                // Simply skip the colon that separates the name and value
                } else if (c === 58) { // ":"
                    if (!values)
                        continue;
                // A set of slashes is initially matched as a regular expression, but could be division
                } else if (c === 47 && i && tok.length > 1) {  // "/"
                    // Look at the end of the previous token to determine if the slash is actually division
                    var match = toks[i-1].match(divisionLookBehind);
                    if (match && !keywordRegexLookBehind[match[0]]) {
                        // The slash is actually a division punctuator; re-parse the remainder of the string (not including the slash)
                        str = str.substr(str.indexOf(tok) + 1);
                        toks = str.match(bindingToken);
                        toks.push(',');
                        i = -1;
                        // Continue with just the slash
                        tok = '/';
                    }
                // Increment depth for parentheses, braces, and brackets so that interior commas are ignored
                } else if (c === 40 || c === 123 || c === 91) { // '(', '{', '['
                    ++depth;
                } else if (c === 41 || c === 125 || c === 93) { // ')', '}', ']'
                    --depth;
                // The key must be a single token; if it's a string, trim the quotes
                } else if (!key && !values) {
                    key = (c === 34 || c === 39) /* '"', "'" */ ? tok.slice(1, -1) : tok;
                    continue;
                }
                if (values)
                    values.push(tok);
                else
                    values = [tok];
            }
        }
        return result;
    }

    // Two-way bindings include a write function that allow the handler to update the value even if it's not an observable.
    var twoWayBindings = {};

    function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
        bindingOptions = bindingOptions || {};

        function processKeyValue(key, val) {
            var writableVal;
            function callPreprocessHook(obj) {
                return (obj && obj['preprocess']) ? (val = obj['preprocess'](val, key, processKeyValue)) : true;
            }
            if (!bindingParams) {
                if (!callPreprocessHook(ko['getBindingHandler'](key)))
                    return;

                if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
                    // For two-way bindings, provide a write method in case the value
                    // isn't a writable observable.
                    propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
                }
            }
            // Values are wrapped in a function so that each value can be accessed independently
            if (makeValueAccessors) {
                val = 'function(){return ' + val + ' }';
            }
            resultStrings.push("'" + key + "':" + val);
        }

        var resultStrings = [],
            propertyAccessorResultStrings = [],
            makeValueAccessors = bindingOptions['valueAccessors'],
            bindingParams = bindingOptions['bindingParams'],
            keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ?
                parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;

        ko.utils.arrayForEach(keyValueArray, function(keyValue) {
            processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
        });

        if (propertyAccessorResultStrings.length)
            processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + " }");

        return resultStrings.join(",");
    }

    return {
        bindingRewriteValidators: [],

        twoWayBindings: twoWayBindings,

        parseObjectLiteral: parseObjectLiteral,

        preProcessBindings: preProcessBindings,

        keyValueArrayContainsKey: function(keyValueArray, key) {
            for (var i = 0; i < keyValueArray.length; i++)
                if (keyValueArray[i]['key'] == key)
                    return true;
            return false;
        },

        // Internal, private KO utility for updating model properties from within bindings
        // property:            If the property being updated is (or might be) an observable, pass it here
        //                      If it turns out to be a writable observable, it will be written to directly
        // allBindings:         An object with a get method to retrieve bindings in the current execution context.
        //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
        // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
        // value:               The value to be written
        // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
        //                      it is !== existing value on that writable observable
        writeValueToProperty: function(property, allBindings, key, value, checkIfDifferent) {
            if (!property || !ko.isObservable(property)) {
                var propWriters = allBindings.get('_ko_property_writers');
                if (propWriters && propWriters[key])
                    propWriters[key](value);
            } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
                property(value);
            }
        }
    };
})();

ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);

// Making bindings explicitly declare themselves as "two way" isn't ideal in the long term (it would be better if
// all bindings could use an official 'property writer' API without needing to declare that they might). However,
// since this is not, and has never been, a public API (_ko_property_writers was never documented), it's acceptable
// as an internal implementation detail in the short term.
// For those developers who rely on _ko_property_writers in their custom bindings, we expose _twoWayBindings as an
// undocumented feature that makes it relatively easy to upgrade to KO 3.0. However, this is still not an official
// public API, and we reserve the right to remove it at any time if we create a real public property writers API.
ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings);

// For backward compatibility, define the following aliases. (Previously, these function names were misleading because
// they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);
(function() {
    // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
    // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
    // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
    // of that virtual hierarchy
    //
    // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
    // without having to scatter special cases all over the binding and templating code.

    // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
    // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
    // So, use node.text where available, and node.nodeValue elsewhere
    var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";

    var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
    var endCommentRegex =   commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
    var htmlTagsWithOptionallyClosingChildren = { 'ul': true, 'ol': true };

    function isStartComment(node) {
        return (node.nodeType == 8) && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
    }

    function isEndComment(node) {
        return (node.nodeType == 8) && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
    }

    function getVirtualChildren(startComment, allowUnbalanced) {
        var currentNode = startComment;
        var depth = 1;
        var children = [];
        while (currentNode = currentNode.nextSibling) {
            if (isEndComment(currentNode)) {
                depth--;
                if (depth === 0)
                    return children;
            }

            children.push(currentNode);

            if (isStartComment(currentNode))
                depth++;
        }
        if (!allowUnbalanced)
            throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
        return null;
    }

    function getMatchingEndComment(startComment, allowUnbalanced) {
        var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
        if (allVirtualChildren) {
            if (allVirtualChildren.length > 0)
                return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
            return startComment.nextSibling;
        } else
            return null; // Must have no matching end comment, and allowUnbalanced is true
    }

    function getUnbalancedChildTags(node) {
        // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
        //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
        var childNode = node.firstChild, captureRemaining = null;
        if (childNode) {
            do {
                if (captureRemaining)                   // We already hit an unbalanced node and are now just scooping up all subsequent nodes
                    captureRemaining.push(childNode);
                else if (isStartComment(childNode)) {
                    var matchingEndComment = getMatchingEndComment(childNode, /* allowUnbalanced: */ true);
                    if (matchingEndComment)             // It's a balanced tag, so skip immediately to the end of this virtual set
                        childNode = matchingEndComment;
                    else
                        captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
                } else if (isEndComment(childNode)) {
                    captureRemaining = [childNode];     // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
                }
            } while (childNode = childNode.nextSibling);
        }
        return captureRemaining;
    }

    ko.virtualElements = {
        allowedBindings: {},

        childNodes: function(node) {
            return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
        },

        emptyNode: function(node) {
            if (!isStartComment(node))
                ko.utils.emptyDomNode(node);
            else {
                var virtualChildren = ko.virtualElements.childNodes(node);
                for (var i = 0, j = virtualChildren.length; i < j; i++)
                    ko.removeNode(virtualChildren[i]);
            }
        },

        setDomNodeChildren: function(node, childNodes) {
            if (!isStartComment(node))
                ko.utils.setDomNodeChildren(node, childNodes);
            else {
                ko.virtualElements.emptyNode(node);
                var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children
                for (var i = 0, j = childNodes.length; i < j; i++)
                    endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
            }
        },

        prepend: function(containerNode, nodeToPrepend) {
            if (!isStartComment(containerNode)) {
                if (containerNode.firstChild)
                    containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);
                else
                    containerNode.appendChild(nodeToPrepend);
            } else {
                // Start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
            }
        },

        insertAfter: function(containerNode, nodeToInsert, insertAfterNode) {
            if (!insertAfterNode) {
                ko.virtualElements.prepend(containerNode, nodeToInsert);
            } else if (!isStartComment(containerNode)) {
                // Insert after insertion point
                if (insertAfterNode.nextSibling)
                    containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                else
                    containerNode.appendChild(nodeToInsert);
            } else {
                // Children of start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
            }
        },

        firstChild: function(node) {
            if (!isStartComment(node))
                return node.firstChild;
            if (!node.nextSibling || isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        nextSibling: function(node) {
            if (isStartComment(node))
                node = getMatchingEndComment(node);
            if (node.nextSibling && isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        hasBindingValue: isStartComment,

        virtualNodeBindingValue: function(node) {
            var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
            return regexMatch ? regexMatch[1] : null;
        },

        normaliseVirtualElementDomStructure: function(elementVerified) {
            // Workaround for https://github.com/SteveSanderson/knockout/issues/155
            // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
            // that are direct descendants of <ul> into the preceding <li>)
            if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])
                return;

            // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
            // must be intended to appear *after* that child, so move them there.
            var childNode = elementVerified.firstChild;
            if (childNode) {
                do {
                    if (childNode.nodeType === 1) {
                        var unbalancedTags = getUnbalancedChildTags(childNode);
                        if (unbalancedTags) {
                            // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
                            var nodeToInsertBefore = childNode.nextSibling;
                            for (var i = 0; i < unbalancedTags.length; i++) {
                                if (nodeToInsertBefore)
                                    elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);
                                else
                                    elementVerified.appendChild(unbalancedTags[i]);
                            }
                        }
                    }
                } while (childNode = childNode.nextSibling);
            }
        }
    };
})();
ko.exportSymbol('virtualElements', ko.virtualElements);
ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
//ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
//ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
(function() {
    var defaultBindingAttributeName = "data-bind";

    ko.bindingProvider = function() {
        this.bindingCache = {};
    };

    ko.utils.extend(ko.bindingProvider.prototype, {
        'nodeHasBindings': function(node) {
            switch (node.nodeType) {
                case 1: // Element
                    return node.getAttribute(defaultBindingAttributeName) != null
                        || ko.components['getComponentNameForNode'](node);
                case 8: // Comment node
                    return ko.virtualElements.hasBindingValue(node);
                default: return false;
            }
        },

        'getBindings': function(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext),
                parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
            return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */ false);
        },

        'getBindingAccessors': function(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext),
                parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, { 'valueAccessors': true }) : null;
            return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */ true);
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'getBindingsString': function(node, bindingContext) {
            switch (node.nodeType) {
                case 1: return node.getAttribute(defaultBindingAttributeName);   // Element
                case 8: return ko.virtualElements.virtualNodeBindingValue(node); // Comment node
                default: return null;
            }
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'parseBindingsString': function(bindingsString, bindingContext, node, options) {
            try {
                var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
                return bindingFunction(bindingContext, node);
            } catch (ex) {
                ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
                throw ex;
            }
        }
    });

    ko.bindingProvider['instance'] = new ko.bindingProvider();

    function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
        var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
        return cache[cacheKey]
            || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
    }

    function createBindingsStringEvaluator(bindingsString, options) {
        // Build the source for a function that evaluates "expression"
        // For each scope variable, add an extra level of "with" nesting
        // Example result: with(sc1) { with(sc0) { return (expression) } }
        var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
            functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
        return new Function("$context", "$element", functionBody);
    }
})();

ko.exportSymbol('bindingProvider', ko.bindingProvider);
(function () {
    ko.bindingHandlers = {};

    // The following element types will not be recursed into during binding. In the future, we
    // may consider adding <template> to this list, because such elements' contents are always
    // intended to be bound in a different context from where they appear in the document.
    var bindingDoesNotRecurseIntoElementTypes = {
        // Don't want bindings that operate on text nodes to mutate <script> contents,
        // because it's unexpected and a potential XSS issue
        'script': true
    };

    // Use an overridable method for retrieving binding handlers so that a plugins may support dynamically created handlers
    ko['getBindingHandler'] = function(bindingKey) {
        return ko.bindingHandlers[bindingKey];
    };

    // The ko.bindingContext constructor is only called directly to create the root context. For child
    // contexts, use bindingContext.createChildContext or bindingContext.extend.
    ko.bindingContext = function(dataItemOrAccessor, parentContext, dataItemAlias, extendCallback) {

        // The binding context object includes static properties for the current, parent, and root view models.
        // If a view model is actually stored in an observable, the corresponding binding context object, and
        // any child contexts, must be updated when the view model is changed.
        function updateContext() {
            // Most of the time, the context will directly get a view model object, but if a function is given,
            // we call the function to retrieve the view model. If the function accesses any obsevables or returns
            // an observable, the dependency is tracked, and those observables can later cause the binding
            // context to be updated.
            var dataItemOrObservable = isFunc ? dataItemOrAccessor() : dataItemOrAccessor,
                dataItem = ko.utils.unwrapObservable(dataItemOrObservable);

            if (parentContext) {
                // When a "parent" context is given, register a dependency on the parent context. Thus whenever the
                // parent context is updated, this context will also be updated.
                if (parentContext._subscribable)
                    parentContext._subscribable();

                // Copy $root and any custom properties from the parent context
                ko.utils.extend(self, parentContext);

                // Because the above copy overwrites our own properties, we need to reset them.
                // During the first execution, "subscribable" isn't set, so don't bother doing the update then.
                if (subscribable) {
                    self._subscribable = subscribable;
                }
            } else {
                self['$parents'] = [];
                self['$root'] = dataItem;

                // Export 'ko' in the binding context so it will be available in bindings and templates
                // even if 'ko' isn't exported as a global, such as when using an AMD loader.
                // See https://github.com/SteveSanderson/knockout/issues/490
                self['ko'] = ko;
            }
            self['$rawData'] = dataItemOrObservable;
            self['$data'] = dataItem;
            if (dataItemAlias)
                self[dataItemAlias] = dataItem;

            // The extendCallback function is provided when creating a child context or extending a context.
            // It handles the specific actions needed to finish setting up the binding context. Actions in this
            // function could also add dependencies to this binding context.
            if (extendCallback)
                extendCallback(self, parentContext, dataItem);

            return self['$data'];
        }
        function disposeWhen() {
            return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
        }

        var self = this,
            isFunc = typeof(dataItemOrAccessor) == "function" && !ko.isObservable(dataItemOrAccessor),
            nodes,
            subscribable = ko.dependentObservable(updateContext, null, { disposeWhen: disposeWhen, disposeWhenNodeIsRemoved: true });

        // At this point, the binding context has been initialized, and the "subscribable" computed observable is
        // subscribed to any observables that were accessed in the process. If there is nothing to track, the
        // computed will be inactive, and we can safely throw it away. If it's active, the computed is stored in
        // the context object.
        if (subscribable.isActive()) {
            self._subscribable = subscribable;

            // Always notify because even if the model ($data) hasn't changed, other context properties might have changed
            subscribable['equalityComparer'] = null;

            // We need to be able to dispose of this computed observable when it's no longer needed. This would be
            // easy if we had a single node to watch, but binding contexts can be used by many different nodes, and
            // we cannot assume that those nodes have any relation to each other. So instead we track any node that
            // the context is attached to, and dispose the computed when all of those nodes have been cleaned.

            // Add properties to *subscribable* instead of *self* because any properties added to *self* may be overwritten on updates
            nodes = [];
            subscribable._addNode = function(node) {
                nodes.push(node);
                ko.utils.domNodeDisposal.addDisposeCallback(node, function(node) {
                    ko.utils.arrayRemoveItem(nodes, node);
                    if (!nodes.length) {
                        subscribable.dispose();
                        self._subscribable = subscribable = undefined;
                    }
                });
            };
        }
    }

    // Extend the binding context hierarchy with a new view model object. If the parent context is watching
    // any obsevables, the new child context will automatically get a dependency on the parent context.
    // But this does not mean that the $data value of the child context will also get updated. If the child
    // view model also depends on the parent view model, you must provide a function that returns the correct
    // view model on each update.
    ko.bindingContext.prototype['createChildContext'] = function (dataItemOrAccessor, dataItemAlias, extendCallback) {
        return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function(self, parentContext) {
            // Extend the context hierarchy by setting the appropriate pointers
            self['$parentContext'] = parentContext;
            self['$parent'] = parentContext['$data'];
            self['$parents'] = (parentContext['$parents'] || []).slice(0);
            self['$parents'].unshift(self['$parent']);
            if (extendCallback)
                extendCallback(self);
        });
    };

    // Extend the binding context with new custom properties. This doesn't change the context hierarchy.
    // Similarly to "child" contexts, provide a function here to make sure that the correct values are set
    // when an observable view model is updated.
    ko.bindingContext.prototype['extend'] = function(properties) {
        // If the parent context references an observable view model, "_subscribable" will always be the
        // latest view model object. If not, "_subscribable" isn't set, and we can use the static "$data" value.
        return new ko.bindingContext(this._subscribable || this['$data'], this, null, function(self, parentContext) {
            // This "child" context doesn't directly track a parent observable view model,
            // so we need to manually set the $rawData value to match the parent.
            self['$rawData'] = parentContext['$rawData'];
            ko.utils.extend(self, typeof(properties) == "function" ? properties() : properties);
        });
    };

    // Returns the valueAccesor function for a binding value
    function makeValueAccessor(value) {
        return function() {
            return value;
        };
    }

    // Returns the value of a valueAccessor function
    function evaluateValueAccessor(valueAccessor) {
        return valueAccessor();
    }

    // Given a function that returns bindings, create and return a new object that contains
    // binding value-accessors functions. Each accessor function calls the original function
    // so that it always gets the latest value and all dependencies are captured. This is used
    // by ko.applyBindingsToNode and getBindingsAndMakeAccessors.
    function makeAccessorsFromFunction(callback) {
        return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function(value, key) {
            return function() {
                return callback()[key];
            };
        });
    }

    // Given a bindings function or object, create and return a new object that contains
    // binding value-accessors functions. This is used by ko.applyBindingsToNode.
    function makeBindingAccessors(bindings, context, node) {
        if (typeof bindings === 'function') {
            return makeAccessorsFromFunction(bindings.bind(null, context, node));
        } else {
            return ko.utils.objectMap(bindings, makeValueAccessor);
        }
    }

    // This function is used if the binding provider doesn't include a getBindingAccessors function.
    // It must be called with 'this' set to the provider instance.
    function getBindingsAndMakeAccessors(node, context) {
        return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
    }

    function validateThatBindingIsAllowedForVirtualElements(bindingName) {
        var validator = ko.virtualElements.allowedBindings[bindingName];
        if (!validator)
            throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements")
    }

    function applyBindingsToDescendantsInternal (bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
        var currentChild,
            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
            provider = ko.bindingProvider['instance'],
            preprocessNode = provider['preprocessNode'];

        // Preprocessing allows a binding provider to mutate a node before bindings are applied to it. For example it's
        // possible to insert new siblings after it, and/or replace the node with a different one. This can be used to
        // implement custom binding syntaxes, such as {{ value }} for string interpolation, or custom element types that
        // trigger insertion of <template> contents at that point in the document.
        if (preprocessNode) {
            while (currentChild = nextInQueue) {
                nextInQueue = ko.virtualElements.nextSibling(currentChild);
                preprocessNode.call(provider, currentChild);
            }
            // Reset nextInQueue for the next loop
            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
        }

        while (currentChild = nextInQueue) {
            // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
            nextInQueue = ko.virtualElements.nextSibling(currentChild);
            applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
        }
    }

    function applyBindingsToNodeAndDescendantsInternal (bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
        var shouldBindDescendants = true;

        // Perf optimisation: Apply bindings only if...
        // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
        //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
        // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
        var isElement = (nodeVerified.nodeType === 1);
        if (isElement) // Workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);

        var shouldApplyBindings = (isElement && bindingContextMayDifferFromDomParentElement)             // Case (1)
                               || ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);       // Case (2)
        if (shouldApplyBindings)
            shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];

        if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
            // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
            //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
            //    hence bindingContextsMayDifferFromDomParentElement is false
            //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
            //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
            //    hence bindingContextsMayDifferFromDomParentElement is true
            applyBindingsToDescendantsInternal(bindingContext, nodeVerified, /* bindingContextsMayDifferFromDomParentElement: */ !isElement);
        }
    }

    var boundElementDomDataKey = ko.utils.domData.nextKey();


    function topologicalSortBindings(bindings) {
        // Depth-first sort
        var result = [],                // The list of key/handler pairs that we will return
            bindingsConsidered = {},    // A temporary record of which bindings are already in 'result'
            cyclicDependencyStack = []; // Keeps track of a depth-search so that, if there's a cycle, we know which bindings caused it
        ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
            if (!bindingsConsidered[bindingKey]) {
                var binding = ko['getBindingHandler'](bindingKey);
                if (binding) {
                    // First add dependencies (if any) of the current binding
                    if (binding['after']) {
                        cyclicDependencyStack.push(bindingKey);
                        ko.utils.arrayForEach(binding['after'], function(bindingDependencyKey) {
                            if (bindings[bindingDependencyKey]) {
                                if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
                                    throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
                                } else {
                                    pushBinding(bindingDependencyKey);
                                }
                            }
                        });
                        cyclicDependencyStack.length--;
                    }
                    // Next add the current binding
                    result.push({ key: bindingKey, handler: binding });
                }
                bindingsConsidered[bindingKey] = true;
            }
        });

        return result;
    }

    function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
        // Prevent multiple applyBindings calls for the same node, except when a binding value is specified
        var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
        if (!sourceBindings) {
            if (alreadyBound) {
                throw Error("You cannot apply bindings multiple times to the same element.");
            }
            ko.utils.domData.set(node, boundElementDomDataKey, true);
        }

        // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
        // we can easily recover it just by scanning up the node's ancestors in the DOM
        // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
        if (!alreadyBound && bindingContextMayDifferFromDomParentElement)
            ko.storedBindingContextForNode(node, bindingContext);

        // Use bindings if given, otherwise fall back on asking the bindings provider to give us some bindings
        var bindings;
        if (sourceBindings && typeof sourceBindings !== 'function') {
            bindings = sourceBindings;
        } else {
            var provider = ko.bindingProvider['instance'],
                getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;

            // Get the binding from the provider within a computed observable so that we can update the bindings whenever
            // the binding context is updated or if the binding provider accesses observables.
            var bindingsUpdater = ko.dependentObservable(
                function() {
                    bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext);
                    // Register a dependency on the binding context to support obsevable view models.
                    if (bindings && bindingContext._subscribable)
                        bindingContext._subscribable();
                    return bindings;
                },
                null, { disposeWhenNodeIsRemoved: node }
            );

            if (!bindings || !bindingsUpdater.isActive())
                bindingsUpdater = null;
        }

        var bindingHandlerThatControlsDescendantBindings;
        if (bindings) {
            // Return the value accessor for a given binding. When bindings are static (won't be updated because of a binding
            // context update), just return the value accessor from the binding. Otherwise, return a function that always gets
            // the latest binding value and registers a dependency on the binding updater.
            var getValueAccessor = bindingsUpdater
                ? function(bindingKey) {
                    return function() {
                        return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
                    };
                } : function(bindingKey) {
                    return bindings[bindingKey];
                };

            // Use of allBindings as a function is maintained for backwards compatibility, but its use is deprecated
            function allBindings() {
                return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
            }
            // The following is the 3.x allBindings API
            allBindings['get'] = function(key) {
                return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
            };
            allBindings['has'] = function(key) {
                return key in bindings;
            };

            // First put the bindings into the right order
            var orderedBindings = topologicalSortBindings(bindings);

            // Go through the sorted bindings, calling init and update for each
            ko.utils.arrayForEach(orderedBindings, function(bindingKeyAndHandler) {
                // Note that topologicalSortBindings has already filtered out any nonexistent binding handlers,
                // so bindingKeyAndHandler.handler will always be nonnull.
                var handlerInitFn = bindingKeyAndHandler.handler["init"],
                    handlerUpdateFn = bindingKeyAndHandler.handler["update"],
                    bindingKey = bindingKeyAndHandler.key;

                if (node.nodeType === 8) {
                    validateThatBindingIsAllowedForVirtualElements(bindingKey);
                }

                try {
                    // Run init, ignoring any dependencies
                    if (typeof handlerInitFn == "function") {
                        ko.dependencyDetection.ignore(function() {
                            var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);

                            // If this binding handler claims to control descendant bindings, make a note of this
                            if (initResult && initResult['controlsDescendantBindings']) {
                                if (bindingHandlerThatControlsDescendantBindings !== undefined)
                                    throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                bindingHandlerThatControlsDescendantBindings = bindingKey;
                            }
                        });
                    }

                    // Run update in its own computed wrapper
                    if (typeof handlerUpdateFn == "function") {
                        ko.dependentObservable(
                            function() {
                                handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                            },
                            null,
                            { disposeWhenNodeIsRemoved: node }
                        );
                    }
                } catch (ex) {
                    ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
                    throw ex;
                }
            });
        }

        return {
            'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined
        };
    };

    var storedBindingContextDomDataKey = ko.utils.domData.nextKey();
    ko.storedBindingContextForNode = function (node, bindingContext) {
        if (arguments.length == 2) {
            ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
            if (bindingContext._subscribable)
                bindingContext._subscribable._addNode(node);
        } else {
            return ko.utils.domData.get(node, storedBindingContextDomDataKey);
        }
    }

    function getBindingContext(viewModelOrBindingContext) {
        return viewModelOrBindingContext && (viewModelOrBindingContext instanceof ko.bindingContext)
            ? viewModelOrBindingContext
            : new ko.bindingContext(viewModelOrBindingContext);
    }

    ko.applyBindingAccessorsToNode = function (node, bindings, viewModelOrBindingContext) {
        if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(node);
        return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
    };

    ko.applyBindingsToNode = function (node, bindings, viewModelOrBindingContext) {
        var context = getBindingContext(viewModelOrBindingContext);
        return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
    };

    ko.applyBindingsToDescendants = function(viewModelOrBindingContext, rootNode) {
        if (rootNode.nodeType === 1 || rootNode.nodeType === 8)
            applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
    };

    ko.applyBindings = function (viewModelOrBindingContext, rootNode) {
        // If jQuery is loaded after Knockout, we won't initially have access to it. So save it here.
        if (!jQueryInstance && window['jQuery']) {
            jQueryInstance = window['jQuery'];
        }

        if (rootNode && (rootNode.nodeType !== 1) && (rootNode.nodeType !== 8))
            throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
        rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

        applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
    };

    // Retrieving binding context from arbitrary nodes
    ko.contextFor = function(node) {
        // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
        switch (node.nodeType) {
            case 1:
            case 8:
                var context = ko.storedBindingContextForNode(node);
                if (context) return context;
                if (node.parentNode) return ko.contextFor(node.parentNode);
                break;
        }
        return undefined;
    };
    ko.dataFor = function(node) {
        var context = ko.contextFor(node);
        return context ? context['$data'] : undefined;
    };

    ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
    ko.exportSymbol('applyBindings', ko.applyBindings);
    ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
    ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
    ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
    ko.exportSymbol('contextFor', ko.contextFor);
    ko.exportSymbol('dataFor', ko.dataFor);
})();
(function(undefined) {
    var loadingSubscribablesCache = {}, // Tracks component loads that are currently in flight
        loadedDefinitionsCache = {};    // Tracks component loads that have already completed

    ko.components = {
        get: function(componentName, callback) {
            var cachedDefinition = getObjectOwnProperty(loadedDefinitionsCache, componentName);
            if (cachedDefinition) {
                // It's already loaded and cached. Reuse the same definition object.
                // Note that for API consistency, even cache hits complete asynchronously.
                setTimeout(function() { callback(cachedDefinition) }, 0);
            } else {
                // Join the loading process that is already underway, or start a new one.
                loadComponentAndNotify(componentName, callback);
            }
        },

        clearCachedDefinition: function(componentName) {
            delete loadedDefinitionsCache[componentName];
        },

        _getFirstResultFromLoaders: getFirstResultFromLoaders
    };

    function getObjectOwnProperty(obj, propName) {
        return obj.hasOwnProperty(propName) ? obj[propName] : undefined;
    }

    function loadComponentAndNotify(componentName, callback) {
        var subscribable = getObjectOwnProperty(loadingSubscribablesCache, componentName),
            completedAsync;
        if (!subscribable) {
            // It's not started loading yet. Start loading, and when it's done, move it to loadedDefinitionsCache.
            subscribable = loadingSubscribablesCache[componentName] = new ko.subscribable();
            beginLoadingComponent(componentName, function(definition) {
                loadedDefinitionsCache[componentName] = definition;
                delete loadingSubscribablesCache[componentName];

                // For API consistency, all loads complete asynchronously. However we want to avoid
                // adding an extra setTimeout if it's unnecessary (i.e., the completion is already
                // async) since setTimeout(..., 0) still takes about 16ms or more on most browsers.
                if (completedAsync) {
                    subscribable['notifySubscribers'](definition);
                } else {
                    setTimeout(function() {
                        subscribable['notifySubscribers'](definition);
                    }, 0);
                }
            });
            completedAsync = true;
        }
        subscribable.subscribe(callback);
    }

    function beginLoadingComponent(componentName, callback) {
        getFirstResultFromLoaders('getConfig', [componentName], function(config) {
            if (config) {
                // We have a config, so now load its definition
                getFirstResultFromLoaders('loadComponent', [componentName, config], function(definition) {
                    callback(definition);
                });
            } else {
                // The component has no config - it's unknown to all the loaders.
                // Note that this is not an error (e.g., a module loading error) - that would abort the
                // process and this callback would not run. For this callback to run, all loaders must
                // have confirmed they don't know about this component.
                callback(null);
            }
        });
    }

    function getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders) {
        // On the first call in the stack, start with the full set of loaders
        if (!candidateLoaders) {
            candidateLoaders = ko.components['loaders'].slice(0); // Use a copy, because we'll be mutating this array
        }

        // Try the next candidate
        var currentCandidateLoader = candidateLoaders.shift();
        if (currentCandidateLoader) {
            var methodInstance = currentCandidateLoader[methodName];
            if (methodInstance) {
                var wasAborted = false,
                    synchronousReturnValue = methodInstance.apply(currentCandidateLoader, argsExceptCallback.concat(function(result) {
                        if (wasAborted) {
                            callback(null);
                        } else if (result !== null) {
                            // This candidate returned a value. Use it.
                            callback(result);
                        } else {
                            // Try the next candidate
                            getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                        }
                    }));

                // Currently, loaders may not return anything synchronously. This leaves open the possibility
                // that we'll extend the API to support synchronous return values in the future. It won't be
                // a breaking change, because currently no loader is allowed to return anything except undefined.
                if (synchronousReturnValue !== undefined) {
                    wasAborted = true;

                    // Method to suppress exceptions will remain undocumented. This is only to keep
                    // KO's specs running tidily, since we can observe the loading got aborted without
                    // having exceptions cluttering up the console too.
                    if (!currentCandidateLoader['suppressLoaderExceptions']) {
                        throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');
                    }
                }
            } else {
                // This candidate doesn't have the relevant handler. Synchronously move on to the next one.
                getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
            }
        } else {
            // No candidates returned a value
            callback(null);
        }
    }

    // Reference the loaders via string name so it's possible for developers
    // to replace the whole array by assigning to ko.components.loaders
    ko.components['loaders'] = [];

    ko.exportSymbol('components', ko.components);
    ko.exportSymbol('components.get', ko.components.get);
    ko.exportSymbol('components.clearCachedDefinition', ko.components.clearCachedDefinition);
})();
(function(undefined) {

    // The default loader is responsible for two things:
    // 1. Maintaining the default in-memory registry of component configuration objects
    //    (i.e., the thing you're writing to when you call ko.components.register(someName, ...))
    // 2. Answering requests for components by fetching configuration objects
    //    from that default in-memory registry and resolving them into standard
    //    component definition objects (of the form { createViewModel: ..., template: ... })
    // Custom loaders may override either of these facilities, i.e.,
    // 1. To supply configuration objects from some other source (e.g., conventions)
    // 2. Or, to resolve configuration objects by loading viewmodels/templates via arbitrary logic.

    var defaultConfigRegistry = {};

    ko.components.register = function(componentName, config) {
        if (!config) {
            throw new Error('Invalid configuration for ' + componentName);
        }

        if (ko.components.isRegistered(componentName)) {
            throw new Error('Component ' + componentName + ' is already registered');
        }

        defaultConfigRegistry[componentName] = config;
    }

    ko.components.isRegistered = function(componentName) {
        return componentName in defaultConfigRegistry;
    }

    ko.components.unregister = function(componentName) {
        delete defaultConfigRegistry[componentName];
        ko.components.clearCachedDefinition(componentName);
    }

    ko.components.defaultLoader = {
        'getConfig': function(componentName, callback) {
            var result = defaultConfigRegistry.hasOwnProperty(componentName)
                ? defaultConfigRegistry[componentName]
                : null;
            callback(result);
        },

        'loadComponent': function(componentName, config, callback) {
            var errorCallback = makeErrorCallback(componentName);
            possiblyGetConfigFromAmd(errorCallback, config, function(loadedConfig) {
                resolveConfig(componentName, errorCallback, loadedConfig, callback);
            });
        },

        'loadTemplate': function(componentName, templateConfig, callback) {
            resolveTemplate(makeErrorCallback(componentName), templateConfig, callback);
        },

        'loadViewModel': function(componentName, viewModelConfig, callback) {
            resolveViewModel(makeErrorCallback(componentName), viewModelConfig, callback);
        }
    };

    var createViewModelKey = 'createViewModel';

    // Takes a config object of the form { template: ..., viewModel: ... }, and asynchronously convert it
    // into the standard component definition format:
    //    { template: <ArrayOfDomNodes>, createViewModel: function(params, componentInfo) { ... } }.
    // Since both template and viewModel may need to be resolved asynchronously, both tasks are performed
    // in parallel, and the results joined when both are ready. We don't depend on any promises infrastructure,
    // so this is implemented manually below.
    function resolveConfig(componentName, errorCallback, config, callback) {
        var result = {},
            makeCallBackWhenZero = 2,
            tryIssueCallback = function() {
                if (--makeCallBackWhenZero === 0) {
                    callback(result);
                }
            },
            templateConfig = config['template'],
            viewModelConfig = config['viewModel'];

        if (templateConfig) {
            possiblyGetConfigFromAmd(errorCallback, templateConfig, function(loadedConfig) {
                ko.components._getFirstResultFromLoaders('loadTemplate', [componentName, loadedConfig], function(resolvedTemplate) {
                    result['template'] = resolvedTemplate;
                    tryIssueCallback();
                });
            });
        } else {
            tryIssueCallback();
        }

        if (viewModelConfig) {
            possiblyGetConfigFromAmd(errorCallback, viewModelConfig, function(loadedConfig) {
                ko.components._getFirstResultFromLoaders('loadViewModel', [componentName, loadedConfig], function(resolvedViewModel) {
                    result[createViewModelKey] = resolvedViewModel;
                    tryIssueCallback();
                });
            });
        } else {
            tryIssueCallback();
        }
    }

    function resolveTemplate(errorCallback, templateConfig, callback) {
        if (typeof templateConfig === 'string') {
            // Markup - parse it
            callback(ko.utils.parseHtmlFragment(templateConfig));
        } else if (templateConfig instanceof Array) {
            // Assume already an array of DOM nodes - pass through unchanged
            callback(templateConfig);
        } else if (isDocumentFragment(templateConfig)) {
            // Document fragment - use its child nodes
            callback(ko.utils.makeArray(templateConfig.childNodes));
        } else if (templateConfig['element']) {
            var element = templateConfig['element'];
            if (isDomElement(element)) {
                // Element instance - copy its child nodes
                callback(cloneNodesFromTemplateSourceElement(element));
            } else if (typeof element === 'string') {
                // Element ID - find it, then copy its child nodes
                var elemInstance = document.getElementById(element);
                if (elemInstance) {
                    callback(cloneNodesFromTemplateSourceElement(elemInstance));
                } else {
                    errorCallback('Cannot find element with ID ' + element);
                }
            } else {
                errorCallback('Unknown element type: ' + element);
            }
        } else {
            errorCallback('Unknown template value: ' + templateConfig);
        }
    }

    function resolveViewModel(errorCallback, viewModelConfig, callback) {
        if (typeof viewModelConfig === 'function') {
            // Constructor - convert to standard factory function format
            // By design, this does *not* supply componentInfo to the constructor, as the intent is that
            // componentInfo contains non-viewmodel data (e.g., the component's element) that should only
            // be used in factory functions, not viewmodel constructors.
            callback(function (params /*, componentInfo */) {
                return new viewModelConfig(params);
            });
        } else if (typeof viewModelConfig[createViewModelKey] === 'function') {
            // Already a factory function - use it as-is
            callback(viewModelConfig[createViewModelKey]);
        } else if ('instance' in viewModelConfig) {
            // Fixed object instance - promote to createViewModel format for API consistency
            var fixedInstance = viewModelConfig['instance'];
            callback(function (params, componentInfo) {
                return fixedInstance;
            });
        } else if ('viewModel' in viewModelConfig) {
            // Resolved AMD module whose value is of the form { viewModel: ... }
            resolveViewModel(errorCallback, viewModelConfig['viewModel'], callback);
        } else {
            errorCallback('Unknown viewModel value: ' + viewModelConfig);
        }
    }

    function cloneNodesFromTemplateSourceElement(elemInstance) {
        switch (ko.utils.tagNameLower(elemInstance)) {
            case 'script':
                return ko.utils.parseHtmlFragment(elemInstance.text);
            case 'textarea':
                return ko.utils.parseHtmlFragment(elemInstance.value);
            case 'template':
                // For browsers with proper <template> element support (i.e., where the .content property
                // gives a document fragment), use that document fragment.
                if (isDocumentFragment(elemInstance.content)) {
                    return ko.utils.cloneNodes(elemInstance.content.childNodes);
                }
        }

        // Regular elements such as <div>, and <template> elements on old browsers that don't really
        // understand <template> and just treat it as a regular container
        return ko.utils.cloneNodes(elemInstance.childNodes);
    }

    function isDomElement(obj) {
        if (window['HTMLElement']) {
            return obj instanceof HTMLElement;
        } else {
            return obj && obj.tagName && obj.nodeType === 1;
        }
    }

    function isDocumentFragment(obj) {
        if (window['DocumentFragment']) {
            return obj instanceof DocumentFragment;
        } else {
            return obj && obj.nodeType === 11;
        }
    }

    function possiblyGetConfigFromAmd(errorCallback, config, callback) {
        if (typeof config['require'] === 'string') {
            // The config is the value of an AMD module
            if (require || window['require']) {
                (require || window['require'])([config['require']], callback);
            } else {
                errorCallback('Uses require, but no AMD loader is present');
            }
        } else {
            callback(config);
        }
    }

    function makeErrorCallback(componentName) {
        return function (message) {
            throw new Error('Component \'' + componentName + '\': ' + message);
        };
    }

    ko.exportSymbol('components.register', ko.components.register);
    ko.exportSymbol('components.isRegistered', ko.components.isRegistered);
    ko.exportSymbol('components.unregister', ko.components.unregister);

    // Expose the default loader so that developers can directly ask it for configuration
    // or to resolve configuration
    ko.exportSymbol('components.defaultLoader', ko.components.defaultLoader);

    // By default, the default loader is the only registered component loader
    ko.components['loaders'].push(ko.components.defaultLoader);

    // Privately expose the underlying config registry for use in old-IE shim
    ko.components._allRegisteredComponents = defaultConfigRegistry;
})();
(function (undefined) {
    // Overridable API for determining which component name applies to a given node. By overriding this,
    // you can for example map specific tagNames to components that are not preregistered.
    ko.components['getComponentNameForNode'] = function(node) {
        var tagNameLower = ko.utils.tagNameLower(node);
        return ko.components.isRegistered(tagNameLower) && tagNameLower;
    };

    ko.components.addBindingsForCustomElement = function(allBindings, node, bindingContext, valueAccessors) {
        // Determine if it's really a custom element matching a component
        if (node.nodeType === 1) {
            var componentName = ko.components['getComponentNameForNode'](node);
            if (componentName) {
                // It does represent a component, so add a component binding for it
                allBindings = allBindings || {};

                if (allBindings['component']) {
                    // Avoid silently overwriting some other 'component' binding that may already be on the element
                    throw new Error('Cannot use the "component" binding on a custom element matching a component');
                }

                var componentBindingValue = { 'name': componentName, 'params': getComponentParamsFromCustomElement(node, bindingContext) };

                allBindings['component'] = valueAccessors
                    ? function() { return componentBindingValue; }
                    : componentBindingValue;
            }
        }

        return allBindings;
    }

    var nativeBindingProviderInstance = new ko.bindingProvider();

    function getComponentParamsFromCustomElement(elem, bindingContext) {
        var paramsAttribute = elem.getAttribute('params');

        if (paramsAttribute) {
            var params = nativeBindingProviderInstance['parseBindingsString'](paramsAttribute, bindingContext, elem, { 'valueAccessors': true, 'bindingParams': true }),
                rawParamComputedValues = ko.utils.objectMap(params, function(paramValue, paramName) {
                    return ko.computed(paramValue, null, { disposeWhenNodeIsRemoved: elem });
                }),
                result = ko.utils.objectMap(rawParamComputedValues, function(paramValueComputed, paramName) {
                    // Does the evaluation of the parameter value unwrap any observables?
                    if (!paramValueComputed.isActive()) {
                        // No it doesn't, so there's no need for any computed wrapper. Just pass through the supplied value directly.
                        // Example: "someVal: firstName, age: 123" (whether or not firstName is an observable/computed)
                        return paramValueComputed.peek();
                    } else {
                        // Yes it does. Supply a computed property that unwraps both the outer (binding expression)
                        // level of observability, and any inner (resulting model value) level of observability.
                        // This means the component doesn't have to worry about multiple unwrapping.
                        return ko.computed(function() {
                            return ko.utils.unwrapObservable(paramValueComputed());
                        }, null, { disposeWhenNodeIsRemoved: elem });
                    }
                });

            // Give access to the raw computeds, as long as that wouldn't overwrite any custom param also called '$raw'
            // This is in case the developer wants to react to outer (binding) observability separately from inner
            // (model value) observability, or in case the model value observable has subobservables.
            if (!result.hasOwnProperty('$raw')) {
                result['$raw'] = rawParamComputedValues;
            }

            return result;
        } else {
            // For consistency, absence of a "params" attribute is treated the same as the presence of
            // any empty one. Otherwise component viewmodels need special code to check whether or not
            // 'params' or 'params.$raw' is null/undefined before reading subproperties, which is annoying.
            return { '$raw': {} };
        }
    }

    // --------------------------------------------------------------------------------
    // Compatibility code for older (pre-HTML5) IE browsers

    if (ko.utils.ieVersion < 9) {
        // Whenever you preregister a component, enable it as a custom element in the current document
        ko.components['register'] = (function(originalFunction) {
            return function(componentName) {
                document.createElement(componentName); // Allows IE<9 to parse markup containing the custom element
                return originalFunction.apply(this, arguments);
            }
        })(ko.components['register']);

        // Whenever you create a document fragment, enable all preregistered component names as custom elements
        // This is needed to make innerShiv/jQuery HTML parsing correctly handle the custom elements
        document.createDocumentFragment = (function(originalFunction) {
            return function() {
                var newDocFrag = originalFunction(),
                    allComponents = ko.components._allRegisteredComponents;
                for (var componentName in allComponents) {
                    if (allComponents.hasOwnProperty(componentName)) {
                        newDocFrag.createElement(componentName);
                    }
                }
                return newDocFrag;
            };
        })(document.createDocumentFragment);
    }
})();(function(undefined) {

    var componentLoadingOperationUniqueId = 0;

    ko.bindingHandlers['component'] = {
        'init': function(element, valueAccessor, ignored1, ignored2, bindingContext) {
            var currentViewModel,
                currentLoadingOperationId,
                disposeAssociatedComponentViewModel = function () {
                    var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
                    if (typeof currentViewModelDispose === 'function') {
                        currentViewModelDispose.call(currentViewModel);
                    }

                    // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                    currentLoadingOperationId = null;
                };

            ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);

            ko.computed(function () {
                var value = ko.utils.unwrapObservable(valueAccessor()),
                    componentName, componentParams;

                if (typeof value === 'string') {
                    componentName = value;
                } else {
                    componentName = ko.utils.unwrapObservable(value['name']);
                    componentParams = ko.utils.unwrapObservable(value['params']);
                }

                if (!componentName) {
                    throw new Error('No component name specified');
                }

                var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
                ko.components.get(componentName, function(componentDefinition) {
                    // If this is not the current load operation for this element, ignore it.
                    if (currentLoadingOperationId !== loadingOperationId) {
                        return;
                    }

                    // Clean up previous state
                    disposeAssociatedComponentViewModel();

                    // Instantiate and bind new component. Implicitly this cleans any old DOM nodes.
                    if (!componentDefinition) {
                        throw new Error('Unknown component \'' + componentName + '\'');
                    }
                    cloneTemplateIntoElement(componentName, componentDefinition, element);
                    var componentViewModel = createViewModel(componentDefinition, element, componentParams),
                        childBindingContext = bindingContext['createChildContext'](componentViewModel);
                    currentViewModel = componentViewModel;
                    ko.applyBindingsToDescendants(childBindingContext, element);
                });
            }, null, { disposeWhenNodeIsRemoved: element });

            return { 'controlsDescendantBindings': true };
        }
    };

    ko.virtualElements.allowedBindings['component'] = true;

    function cloneTemplateIntoElement(componentName, componentDefinition, element) {
        var template = componentDefinition['template'];
        if (!template) {
            throw new Error('Component \'' + componentName + '\' has no template');
        }

        var clonedNodesArray = ko.utils.cloneNodes(template);
        ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
    }

    function createViewModel(componentDefinition, element, componentParams) {
        var componentViewModelFactory = componentDefinition['createViewModel'];
        return componentViewModelFactory
            ? componentViewModelFactory.call(componentDefinition, componentParams, { element: element })
            : componentParams; // Template-only component
    }

})();
var attrHtmlToJavascriptMap = { 'class': 'className', 'for': 'htmlFor' };
ko.bindingHandlers['attr'] = {
    'update': function(element, valueAccessor, allBindings) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || {};
        ko.utils.objectForEach(value, function(attrName, attrValue) {
            attrValue = ko.utils.unwrapObservable(attrValue);

            // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
            // when someProp is a "no value"-like value (strictly null, false, or undefined)
            // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
            var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
            if (toRemove)
                element.removeAttribute(attrName);

            // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
            // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
            // but instead of figuring out the mode, we'll just set the attribute through the Javascript
            // property for IE <= 8.
            if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                attrName = attrHtmlToJavascriptMap[attrName];
                if (toRemove)
                    element.removeAttribute(attrName);
                else
                    element[attrName] = attrValue;
            } else if (!toRemove) {
                element.setAttribute(attrName, attrValue.toString());
            }

            // Treat "name" specially - although you can think of it as an attribute, it also needs
            // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
            // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
            // entirely, and there's no strong reason to allow for such casing in HTML.
            if (attrName === "name") {
                ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
            }
        });
    }
};
(function() {

ko.bindingHandlers['checked'] = {
    'after': ['value', 'attr'],
    'init': function (element, valueAccessor, allBindings) {
        var checkedValue = ko.pureComputed(function() {
            // Treat "value" like "checkedValue" when it is included with "checked" binding
            if (allBindings['has']('checkedValue')) {
                return ko.utils.unwrapObservable(allBindings.get('checkedValue'));
            } else if (allBindings['has']('value')) {
                return ko.utils.unwrapObservable(allBindings.get('value'));
            }

            return element.value;
        });

        function updateModel() {
            // This updates the model value from the view value.
            // It runs in response to DOM events (click) and changes in checkedValue.
            var isChecked = element.checked,
                elemValue = useCheckedValue ? checkedValue() : isChecked;

            // When we're first setting up this computed, don't change any model state.
            if (ko.computedContext.isInitial()) {
                return;
            }

            // We can ignore unchecked radio buttons, because some other radio
            // button will be getting checked, and that one can take care of updating state.
            if (isRadio && !isChecked) {
                return;
            }

            var modelValue = ko.dependencyDetection.ignore(valueAccessor);
            if (isValueArray) {
                if (oldElemValue !== elemValue) {
                    // When we're responding to the checkedValue changing, and the element is
                    // currently checked, replace the old elem value with the new elem value
                    // in the model array.
                    if (isChecked) {
                        ko.utils.addOrRemoveItem(modelValue, elemValue, true);
                        ko.utils.addOrRemoveItem(modelValue, oldElemValue, false);
                    }

                    oldElemValue = elemValue;
                } else {
                    // When we're responding to the user having checked/unchecked a checkbox,
                    // add/remove the element value to the model array.
                    ko.utils.addOrRemoveItem(modelValue, elemValue, isChecked);
                }
            } else {
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
            }
        };

        function updateView() {
            // This updates the view value from the model value.
            // It runs in response to changes in the bound (checked) value.
            var modelValue = ko.utils.unwrapObservable(valueAccessor());

            if (isValueArray) {
                // When a checkbox is bound to an array, being checked represents its value being present in that array
                element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
            } else if (isCheckbox) {
                // When a checkbox is bound to any other value (not an array), being checked represents the value being trueish
                element.checked = modelValue;
            } else {
                // For radio buttons, being checked means that the radio button's value corresponds to the model value
                element.checked = (checkedValue() === modelValue);
            }
        };

        var isCheckbox = element.type == "checkbox",
            isRadio = element.type == "radio";

        // Only bind to check boxes and radio buttons
        if (!isCheckbox && !isRadio) {
            return;
        }

        var isValueArray = isCheckbox && (ko.utils.unwrapObservable(valueAccessor()) instanceof Array),
            oldElemValue = isValueArray ? checkedValue() : undefined,
            useCheckedValue = isRadio || isValueArray;

        // IE 6 won't allow radio buttons to be selected unless they have a name
        if (isRadio && !element.name)
            ko.bindingHandlers['uniqueName']['init'](element, function() { return true });

        // Set up two computeds to update the binding:

        // The first responds to changes in the checkedValue value and to element clicks
        ko.computed(updateModel, null, { disposeWhenNodeIsRemoved: element });
        ko.utils.registerEventHandler(element, "click", updateModel);

        // The second responds to changes in the model value (the one associated with the checked binding)
        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });
    }
};
ko.expressionRewriting.twoWayBindings['checked'] = true;

ko.bindingHandlers['checkedValue'] = {
    'update': function (element, valueAccessor) {
        element.value = ko.utils.unwrapObservable(valueAccessor());
    }
};

})();var classesWrittenByBindingKey = '__ko__cssValue';
ko.bindingHandlers['css'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (typeof value == "object") {
            ko.utils.objectForEach(value, function(className, shouldHaveClass) {
                shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
                ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
            });
        } else {
            value = String(value || ''); // Make sure we don't try to store or set a non-string value
            ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
            element[classesWrittenByBindingKey] = value;
            ko.utils.toggleDomNodeCssClass(element, value, true);
        }
    }
};
ko.bindingHandlers['enable'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (value && element.disabled)
            element.removeAttribute("disabled");
        else if ((!value) && (!element.disabled))
            element.disabled = true;
    }
};

ko.bindingHandlers['disable'] = {
    'update': function (element, valueAccessor) {
        ko.bindingHandlers['enable']['update'](element, function() { return !ko.utils.unwrapObservable(valueAccessor()) });
    }
};
// For certain common events (currently just 'click'), allow a simplified data-binding syntax
// e.g. click:handler instead of the usual full-length event:{click:handler}
function makeEventHandlerShortcut(eventName) {
    ko.bindingHandlers[eventName] = {
        'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var newValueAccessor = function () {
                var result = {};
                result[eventName] = valueAccessor();
                return result;
            };
            return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
        }
    }
}

ko.bindingHandlers['event'] = {
    'init' : function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var eventsToHandle = valueAccessor() || {};
        ko.utils.objectForEach(eventsToHandle, function(eventName) {
            if (typeof eventName == "string") {
                ko.utils.registerEventHandler(element, eventName, function (event) {
                    var handlerReturnValue;
                    var handlerFunction = valueAccessor()[eventName];
                    if (!handlerFunction)
                        return;

                    try {
                        // Take all the event args, and prefix with the viewmodel
                        var argsForHandler = ko.utils.makeArray(arguments);
                        viewModel = bindingContext['$data'];
                        argsForHandler.unshift(viewModel);
                        handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                    } finally {
                        if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                            if (event.preventDefault)
                                event.preventDefault();
                            else
                                event.returnValue = false;
                        }
                    }

                    var bubble = allBindings.get(eventName + 'Bubble') !== false;
                    if (!bubble) {
                        event.cancelBubble = true;
                        if (event.stopPropagation)
                            event.stopPropagation();
                    }
                });
            }
        });
    }
};
// "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
// "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
ko.bindingHandlers['foreach'] = {
    makeTemplateValueAccessor: function(valueAccessor) {
        return function() {
            var modelValue = valueAccessor(),
                unwrappedValue = ko.utils.peekObservable(modelValue);    // Unwrap without setting a dependency here

            // If unwrappedValue is the array, pass in the wrapped value on its own
            // The value will be unwrapped and tracked within the template binding
            // (See https://github.com/SteveSanderson/knockout/issues/523)
            if ((!unwrappedValue) || typeof unwrappedValue.length == "number")
                return { 'foreach': modelValue, 'templateEngine': ko.nativeTemplateEngine.instance };

            // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
            ko.utils.unwrapObservable(modelValue);
            return {
                'foreach': unwrappedValue['data'],
                'as': unwrappedValue['as'],
                'includeDestroyed': unwrappedValue['includeDestroyed'],
                'afterAdd': unwrappedValue['afterAdd'],
                'beforeRemove': unwrappedValue['beforeRemove'],
                'afterRender': unwrappedValue['afterRender'],
                'beforeMove': unwrappedValue['beforeMove'],
                'afterMove': unwrappedValue['afterMove'],
                'templateEngine': ko.nativeTemplateEngine.instance
            };
        };
    },
    'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
    },
    'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
    }
};
ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings
ko.virtualElements.allowedBindings['foreach'] = true;
var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
var hasfocusLastValue = '__ko_hasfocusLastValue';
ko.bindingHandlers['hasfocus'] = {
    'init': function(element, valueAccessor, allBindings) {
        var handleElementFocusChange = function(isFocused) {
            // Where possible, ignore which event was raised and determine focus state using activeElement,
            // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
            // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
            // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
            // from calling 'blur()' on the element when it loses focus.
            // Discussion at https://github.com/SteveSanderson/knockout/pull/352
            element[hasfocusUpdatingProperty] = true;
            var ownerDoc = element.ownerDocument;
            if ("activeElement" in ownerDoc) {
                var active;
                try {
                    active = ownerDoc.activeElement;
                } catch(e) {
                    // IE9 throws if you access activeElement during page load (see issue #703)
                    active = ownerDoc.body;
                }
                isFocused = (active === element);
            }
            var modelValue = valueAccessor();
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true);

            //cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function
            element[hasfocusLastValue] = isFocused;
            element[hasfocusUpdatingProperty] = false;
        };
        var handleElementFocusIn = handleElementFocusChange.bind(null, true);
        var handleElementFocusOut = handleElementFocusChange.bind(null, false);

        ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
        ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE
        ko.utils.registerEventHandler(element, "blur",  handleElementFocusOut);
        ko.utils.registerEventHandler(element, "focusout",  handleElementFocusOut); // For IE
    },
    'update': function(element, valueAccessor) {
        var value = !!ko.utils.unwrapObservable(valueAccessor()); //force boolean to compare with last value
        if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
            value ? element.focus() : element.blur();
            ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]); // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
        }
    }
};
ko.expressionRewriting.twoWayBindings['hasfocus'] = true;

ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus']; // Make "hasFocus" an alias
ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
ko.bindingHandlers['html'] = {
    'init': function() {
        // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor) {
        // setHtml will unwrap the value if needed
        ko.utils.setHtml(element, valueAccessor());
    }
};
// Makes a binding like with or if
function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
    ko.bindingHandlers[bindingKey] = {
        'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var didDisplayOnLastUpdate,
                savedNodes;
            ko.computed(function() {
                var dataValue = ko.utils.unwrapObservable(valueAccessor()),
                    shouldDisplay = !isNot !== !dataValue, // equivalent to isNot ? !dataValue : !!dataValue
                    isFirstRender = !savedNodes,
                    needsRefresh = isFirstRender || isWith || (shouldDisplay !== didDisplayOnLastUpdate);

                if (needsRefresh) {
                    // Save a copy of the inner nodes on the initial update, but only if we have dependencies.
                    if (isFirstRender && ko.computedContext.getDependenciesCount()) {
                        savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
                    }

                    if (shouldDisplay) {
                        if (!isFirstRender) {
                            ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(savedNodes));
                        }
                        ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, dataValue) : bindingContext, element);
                    } else {
                        ko.virtualElements.emptyNode(element);
                    }

                    didDisplayOnLastUpdate = shouldDisplay;
                }
            }, null, { disposeWhenNodeIsRemoved: element });
            return { 'controlsDescendantBindings': true };
        }
    };
    ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings
    ko.virtualElements.allowedBindings[bindingKey] = true;
}

// Construct the actual binding handlers
makeWithIfBinding('if');
makeWithIfBinding('ifnot', false /* isWith */, true /* isNot */);
makeWithIfBinding('with', true /* isWith */, false /* isNot */,
    function(bindingContext, dataValue) {
        return bindingContext['createChildContext'](dataValue);
    }
);
var captionPlaceholder = {};
ko.bindingHandlers['options'] = {
    'init': function(element) {
        if (ko.utils.tagNameLower(element) !== "select")
            throw new Error("options binding applies only to SELECT elements");

        // Remove all existing <option>s.
        while (element.length > 0) {
            element.remove(0);
        }

        // Ensures that the binding processor doesn't try to bind the options
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor, allBindings) {
        function selectedOptions() {
            return ko.utils.arrayFilter(element.options, function (node) { return node.selected; });
        }

        var selectWasPreviouslyEmpty = element.length == 0;
        var previousScrollTop = (!selectWasPreviouslyEmpty && element.multiple) ? element.scrollTop : null;
        var unwrappedArray = ko.utils.unwrapObservable(valueAccessor());
        var includeDestroyed = allBindings.get('optionsIncludeDestroyed');
        var arrayToDomNodeChildrenOptions = {};
        var captionValue;
        var filteredArray;
        var previousSelectedValues;

        if (element.multiple) {
            previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
        } else {
            previousSelectedValues = element.selectedIndex >= 0 ? [ ko.selectExtensions.readValue(element.options[element.selectedIndex]) ] : [];
        }

        if (unwrappedArray) {
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // If caption is included, add it to the array
            if (allBindings['has']('optionsCaption')) {
                captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption'));
                // If caption value is null or undefined, don't show a caption
                if (captionValue !== null && captionValue !== undefined) {
                    filteredArray.unshift(captionPlaceholder);
                }
            }
        } else {
            // If a falsy value is provided (e.g. null), we'll simply empty the select element
        }

        function applyToObject(object, predicate, defaultValue) {
            var predicateType = typeof predicate;
            if (predicateType == "function")    // Given a function; run it against the data value
                return predicate(object);
            else if (predicateType == "string") // Given a string; treat it as a property name on the data value
                return object[predicate];
            else                                // Given no optionsText arg; use the data value itself
                return defaultValue;
        }

        // The following functions can run at two different times:
        // The first is when the whole array is being updated directly from this binding handler.
        // The second is when an observable value for a specific array entry is updated.
        // oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.
        var itemUpdate = false;
        function optionForArrayItem(arrayEntry, index, oldOptions) {
            if (oldOptions.length) {
                previousSelectedValues = oldOptions[0].selected ? [ ko.selectExtensions.readValue(oldOptions[0]) ] : [];
                itemUpdate = true;
            }
            var option = element.ownerDocument.createElement("option");
            if (arrayEntry === captionPlaceholder) {
                ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
                ko.selectExtensions.writeValue(option, undefined);
            } else {
                // Apply a value to the option element
                var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
                ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));

                // Apply some text to the option element
                var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
                ko.utils.setTextContent(option, optionText);
            }
            return [option];
        }

        // By using a beforeRemove callback, we delay the removal until after new items are added. This fixes a selection
        // problem in IE<=8 and Firefox. See https://github.com/knockout/knockout/issues/1208
        arrayToDomNodeChildrenOptions['beforeRemove'] =
            function (option) {
                element.removeChild(option);
            };

        function setSelectionCallback(arrayEntry, newOptions) {
            // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
            // That's why we first added them without selection. Now it's time to set the selection.
            if (previousSelectedValues.length) {
                var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
                ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);

                // If this option was changed from being selected during a single-item update, notify the change
                if (itemUpdate && !isSelected)
                    ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
            }
        }

        var callback = setSelectionCallback;
        if (allBindings['has']('optionsAfterRender')) {
            callback = function(arrayEntry, newOptions) {
                setSelectionCallback(arrayEntry, newOptions);
                ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
            }
        }

        ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, arrayToDomNodeChildrenOptions, callback);

        ko.dependencyDetection.ignore(function () {
            if (allBindings.get('valueAllowUnset') && allBindings['has']('value')) {
                // The model value is authoritative, so make sure its value is the one selected
                ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
            } else {
                // Determine if the selection has changed as a result of updating the options list
                var selectionChanged;
                if (element.multiple) {
                    // For a multiple-select box, compare the new selection count to the previous one
                    // But if nothing was selected before, the selection can't have changed
                    selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
                } else {
                    // For a single-select box, compare the current value to the previous value
                    // But if nothing was selected before or nothing is selected now, just look for a change in selection
                    selectionChanged = (previousSelectedValues.length && element.selectedIndex >= 0)
                        ? (ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0])
                        : (previousSelectedValues.length || element.selectedIndex >= 0);
                }

                // Ensure consistency between model value and selected option.
                // If the dropdown was changed so that selection is no longer the same,
                // notify the value or selectedOptions binding.
                if (selectionChanged) {
                    ko.utils.triggerEvent(element, "change");
                }
            }
        });

        // Workaround for IE bug
        ko.utils.ensureSelectElementIsRenderedCorrectly(element);

        if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20)
            element.scrollTop = previousScrollTop;
    }
};
ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
ko.bindingHandlers['selectedOptions'] = {
    'after': ['options', 'foreach'],
    'init': function (element, valueAccessor, allBindings) {
        ko.utils.registerEventHandler(element, "change", function () {
            var value = valueAccessor(), valueToWrite = [];
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                if (node.selected)
                    valueToWrite.push(ko.selectExtensions.readValue(node));
            });
            ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
        });
    },
    'update': function (element, valueAccessor) {
        if (ko.utils.tagNameLower(element) != "select")
            throw new Error("values binding applies only to SELECT elements");

        var newValue = ko.utils.unwrapObservable(valueAccessor());
        if (newValue && typeof newValue.length == "number") {
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                ko.utils.setOptionNodeSelectionState(node, isSelected);
            });
        }
    }
};
ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
ko.bindingHandlers['style'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor() || {});
        ko.utils.objectForEach(value, function(styleName, styleValue) {
            styleValue = ko.utils.unwrapObservable(styleValue);

            if (styleValue === null || styleValue === undefined || styleValue === false) {
                // Empty string removes the value, whereas null/undefined have no effect
                styleValue = "";
            }

            element.style[styleName] = styleValue;
        });
    }
};
ko.bindingHandlers['submit'] = {
    'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        if (typeof valueAccessor() != "function")
            throw new Error("The value for a submit binding must be a function");
        ko.utils.registerEventHandler(element, "submit", function (event) {
            var handlerReturnValue;
            var value = valueAccessor();
            try { handlerReturnValue = value.call(bindingContext['$data'], element); }
            finally {
                if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                    if (event.preventDefault)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                }
            }
        });
    }
};
ko.bindingHandlers['text'] = {
    'init': function() {
        // Prevent binding on the dynamically-injected text node (as developers are unlikely to expect that, and it has security implications).
        // It should also make things faster, as we no longer have to consider whether the text node might be bindable.
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor) {
        ko.utils.setTextContent(element, valueAccessor());
    }
};
ko.virtualElements.allowedBindings['text'] = true;
(function () {

if (window && window.navigator) {
    var parseVersion = function (matches) {
        if (matches) {
            return parseFloat(matches[1]);
        }
    };

    // Detect various browser versions because some old versions don't fully support the 'input' event
    var operaVersion = window.opera && window.opera.version && parseInt(window.opera.version()),
        userAgent = window.navigator.userAgent,
        safariVersion = parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
        firefoxVersion = parseVersion(userAgent.match(/Firefox\/([^ ]*)/));
}

// IE 8 and 9 have bugs that prevent the normal events from firing when the value changes.
// But it does fire the 'selectionchange' event on many of those, presumably because the
// cursor is moving and that counts as the selection changing. The 'selectionchange' event is
// fired at the document level only and doesn't directly indicate which element changed. We
// set up just one event handler for the document and use 'activeElement' to determine which
// element was changed.
if (ko.utils.ieVersion < 10) {
    var selectionChangeRegisteredName = ko.utils.domData.nextKey(),
        selectionChangeHandlerName = ko.utils.domData.nextKey();
    var selectionChangeHandler = function(event) {
        var target = this.activeElement,
            handler = target && ko.utils.domData.get(target, selectionChangeHandlerName);
        if (handler) {
            handler(event);
        }
    };
    var registerForSelectionChangeEvent = function (element, handler) {
        var ownerDoc = element.ownerDocument;
        if (!ko.utils.domData.get(ownerDoc, selectionChangeRegisteredName)) {
            ko.utils.domData.set(ownerDoc, selectionChangeRegisteredName, true);
            ko.utils.registerEventHandler(ownerDoc, 'selectionchange', selectionChangeHandler);
        }
        ko.utils.domData.set(element, selectionChangeHandlerName, handler);
    };
}

ko.bindingHandlers['textInput'] = {
    'init': function (element, valueAccessor, allBindings) {

        var previousElementValue = element.value,
            timeoutHandle,
            elementValueBeforeEvent;

        var updateModel = function (event) {
            clearTimeout(timeoutHandle);
            elementValueBeforeEvent = timeoutHandle = undefined;

            var elementValue = element.value;
            if (previousElementValue !== elementValue) {
                // Provide a way for tests to know exactly which event was processed
                if (DEBUG && event) element['_ko_textInputProcessedEvent'] = event.type;
                previousElementValue = elementValue;
                ko.expressionRewriting.writeValueToProperty(valueAccessor(), allBindings, 'textInput', elementValue);
            }
        };

        var deferUpdateModel = function (event) {
            if (!timeoutHandle) {
                // The elementValueBeforeEvent variable is set *only* during the brief gap between an
                // event firing and the updateModel function running. This allows us to ignore model
                // updates that are from the previous state of the element, usually due to techniques
                // such as rateLimit. Such updates, if not ignored, can cause keystrokes to be lost.
                elementValueBeforeEvent = element.value;
                var handler = DEBUG ? updateModel.bind(element, {type: event.type}) : updateModel;
                timeoutHandle = setTimeout(handler, 4);
            }
        };

        var updateView = function () {
            var modelValue = ko.utils.unwrapObservable(valueAccessor());

            if (modelValue === null || modelValue === undefined) {
                modelValue = '';
            }

            if (elementValueBeforeEvent !== undefined && modelValue === elementValueBeforeEvent) {
                setTimeout(updateView, 4);
                return;
            }

            // Update the element only if the element and model are different. On some browsers, updating the value
            // will move the cursor to the end of the input, which would be bad while the user is typing.
            if (element.value !== modelValue) {
                previousElementValue = modelValue;  // Make sure we ignore events (propertychange) that result from updating the value
                element.value = modelValue;
            }
        };

        var onEvent = function (event, handler) {
            ko.utils.registerEventHandler(element, event, handler);
        };

        if (DEBUG && ko.bindingHandlers['textInput']['_forceUpdateOn']) {
            // Provide a way for tests to specify exactly which events are bound
            ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'], function(eventName) {
                if (eventName.slice(0,5) == 'after') {
                    onEvent(eventName.slice(5), deferUpdateModel);
                } else {
                    onEvent(eventName, updateModel);
                }
            });
        } else {
            if (ko.utils.ieVersion < 10) {
                // Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
                // any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
                // but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
                // when using autocomplete, we'll use 'propertychange' for it also.
                onEvent('propertychange', function(event) {
                    if (event.propertyName === 'value') {
                        updateModel(event);
                    }
                });

                if (ko.utils.ieVersion == 8) {
                    // IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
                    // JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
                    // events too.
                    onEvent('keyup', updateModel);      // A single keystoke
                    onEvent('keydown', updateModel);    // The first character when a key is held down
                }
                if (ko.utils.ieVersion >= 8) {
                    // Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
                    // the backspace, delete, or ctrl-x keys, clicking the 'x' to clear the input, dragging text
                    // out of the field, and cutting or deleting text using the context menu. 'selectionchange'
                    // can detect all of those except dragging text out of the field, for which we use 'dragend'.
                    // These are also needed in IE8 because of the bug described above.
                    registerForSelectionChangeEvent(element, updateModel);  // 'selectionchange' covers cut, paste, drop, delete, etc.
                    onEvent('dragend', deferUpdateModel);
                }
            } else {
                // All other supported browsers support the 'input' event, which fires whenever the content of the element is changed
                // through the user interface.
                onEvent('input', updateModel);

                if (safariVersion < 5 && ko.utils.tagNameLower(element) === "textarea") {
                    // Safari <5 doesn't fire the 'input' event for <textarea> elements (it does fire 'textInput'
                    // but only when typing). So we'll just catch as much as we can with keydown, cut, and paste.
                    onEvent('keydown', deferUpdateModel);
                    onEvent('paste', deferUpdateModel);
                    onEvent('cut', deferUpdateModel);
                } else if (operaVersion < 11) {
                    // Opera 10 doesn't always fire the 'input' event for cut, paste, undo & drop operations.
                    // We can try to catch some of those using 'keydown'.
                    onEvent('keydown', deferUpdateModel);
                } else if (firefoxVersion < 4.0) {
                    // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
                    onEvent('DOMAutoComplete', updateModel);

                    // Firefox <=3.5 doesn't fire the 'input' event when text is dropped into the input.
                    onEvent('dragdrop', updateModel);       // <3.5
                    onEvent('drop', updateModel);           // 3.5
                }
            }
        }

        // Bind to the change event so that we can catch programmatic updates of the value that fire this event.
        onEvent('change', updateModel);

        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });
    }
};
ko.expressionRewriting.twoWayBindings['textInput'] = true;

// textinput is an alias for textInput
ko.bindingHandlers['textinput'] = {
    // preprocess is the only way to set up a full alias
    'preprocess': function (value, name, addBinding) {
        addBinding('textInput', value);
    }
};

})();ko.bindingHandlers['uniqueName'] = {
    'init': function (element, valueAccessor) {
        if (valueAccessor()) {
            var name = "ko_unique_" + (++ko.bindingHandlers['uniqueName'].currentIndex);
            ko.utils.setElementName(element, name);
        }
    }
};
ko.bindingHandlers['uniqueName'].currentIndex = 0;
ko.bindingHandlers['value'] = {
    'after': ['options', 'foreach'],
    'init': function (element, valueAccessor, allBindings) {
        // If the value binding is placed on a radio/checkbox, then just pass through to checkedValue and quit
        if (element.tagName.toLowerCase() == "input" && (element.type == "checkbox" || element.type == "radio")) {
            ko.applyBindingAccessorsToNode(element, { 'checkedValue': valueAccessor });
            return;
        }

        // Always catch "change" event; possibly other events too if asked
        var eventsToCatch = ["change"];
        var requestedEventsToCatch = allBindings.get("valueUpdate");
        var propertyChangedFired = false;
        var elementValueBeforeEvent = null;

        if (requestedEventsToCatch) {
            if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
                requestedEventsToCatch = [requestedEventsToCatch];
            ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
            eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
        }

        var valueUpdateHandler = function() {
            elementValueBeforeEvent = null;
            propertyChangedFired = false;
            var modelValue = valueAccessor();
            var elementValue = ko.selectExtensions.readValue(element);
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
        }

        // Workaround for https://github.com/SteveSanderson/knockout/issues/122
        // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
        var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text"
                                       && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
        if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
            ko.utils.registerEventHandler(element, "propertychange", function () { propertyChangedFired = true });
            ko.utils.registerEventHandler(element, "focus", function () { propertyChangedFired = false });
            ko.utils.registerEventHandler(element, "blur", function() {
                if (propertyChangedFired) {
                    valueUpdateHandler();
                }
            });
        }

        ko.utils.arrayForEach(eventsToCatch, function(eventName) {
            // The syntax "after<eventname>" means "run the handler asynchronously after the event"
            // This is useful, for example, to catch "keydown" events after the browser has updated the control
            // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
            var handler = valueUpdateHandler;
            if (ko.utils.stringStartsWith(eventName, "after")) {
                handler = function() {
                    // The elementValueBeforeEvent variable is non-null *only* during the brief gap between
                    // a keyX event firing and the valueUpdateHandler running, which is scheduled to happen
                    // at the earliest asynchronous opportunity. We store this temporary information so that
                    // if, between keyX and valueUpdateHandler, the underlying model value changes separately,
                    // we can overwrite that model value change with the value the user just typed. Otherwise,
                    // techniques like rateLimit can trigger model changes at critical moments that will
                    // override the user's inputs, causing keystrokes to be lost.
                    elementValueBeforeEvent = ko.selectExtensions.readValue(element);
                    setTimeout(valueUpdateHandler, 0);
                };
                eventName = eventName.substring("after".length);
            }
            ko.utils.registerEventHandler(element, eventName, handler);
        });

        var updateFromModel = function () {
            var newValue = ko.utils.unwrapObservable(valueAccessor());
            var elementValue = ko.selectExtensions.readValue(element);

            if (elementValueBeforeEvent !== null && newValue === elementValueBeforeEvent) {
                setTimeout(updateFromModel, 0);
                return;
            }

            var valueHasChanged = (newValue !== elementValue);

            if (valueHasChanged) {
                if (ko.utils.tagNameLower(element) === "select") {
                    var allowUnset = allBindings.get('valueAllowUnset');
                    var applyValueAction = function () {
                        ko.selectExtensions.writeValue(element, newValue, allowUnset);
                    };
                    applyValueAction();

                    if (!allowUnset && newValue !== ko.selectExtensions.readValue(element)) {
                        // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
                        // because you're not allowed to have a model value that disagrees with a visible UI selection.
                        ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                    } else {
                        // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
                        // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
                        // to apply the value as well.
                        setTimeout(applyValueAction, 0);
                    }
                } else {
                    ko.selectExtensions.writeValue(element, newValue);
                }
            }
        };

        ko.computed(updateFromModel, null, { disposeWhenNodeIsRemoved: element });
    },
    'update': function() {} // Keep for backwards compatibility with code that may have wrapped value binding
};
ko.expressionRewriting.twoWayBindings['value'] = true;
ko.bindingHandlers['visible'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var isCurrentlyVisible = !(element.style.display == "none");
        if (value && !isCurrentlyVisible)
            element.style.display = "";
        else if ((!value) && isCurrentlyVisible)
            element.style.display = "none";
    }
};
// 'click' is just a shorthand for the usual full-length event:{click:handler}
makeEventHandlerShortcut('click');
// If you want to make a custom template engine,
//
// [1] Inherit from this class (like ko.nativeTemplateEngine does)
// [2] Override 'renderTemplateSource', supplying a function with this signature:
//
//        function (templateSource, bindingContext, options) {
//            // - templateSource.text() is the text of the template you should render
//            // - bindingContext.$data is the data you should pass into the template
//            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
//            //     and bindingContext.$root available in the template too
//            // - options gives you access to any other properties set on "data-bind: { template: options }"
//            //
//            // Return value: an array of DOM nodes
//        }
//
// [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
//
//        function (script) {
//            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
//            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
//        }
//
//     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
//     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
//     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

ko.templateEngine = function () { };

ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options) {
    throw new Error("Override renderTemplateSource");
};

ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
    throw new Error("Override createJavaScriptEvaluatorBlock");
};

ko.templateEngine.prototype['makeTemplateSource'] = function(template, templateDocument) {
    // Named template
    if (typeof template == "string") {
        templateDocument = templateDocument || document;
        var elem = templateDocument.getElementById(template);
        if (!elem)
            throw new Error("Cannot find template with ID " + template);
        return new ko.templateSources.domElement(elem);
    } else if ((template.nodeType == 1) || (template.nodeType == 8)) {
        // Anonymous template
        return new ko.templateSources.anonymousTemplate(template);
    } else
        throw new Error("Unknown template type: " + template);
};

ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    return this['renderTemplateSource'](templateSource, bindingContext, options);
};

ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
    // Skip rewriting if requested
    if (this['allowTemplateRewriting'] === false)
        return true;
    return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
};

ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    var rewritten = rewriterCallback(templateSource['text']());
    templateSource['text'](rewritten);
    templateSource['data']("isRewritten", true);
};

ko.exportSymbol('templateEngine', ko.templateEngine);

ko.templateRewriting = (function () {
    var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
    var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

    function validateDataBindValuesForRewriting(keyValueArray) {
        var allValidators = ko.expressionRewriting.bindingRewriteValidators;
        for (var i = 0; i < keyValueArray.length; i++) {
            var key = keyValueArray[i]['key'];
            if (allValidators.hasOwnProperty(key)) {
                var validator = allValidators[key];

                if (typeof validator === "function") {
                    var possibleErrorMessage = validator(keyValueArray[i]['value']);
                    if (possibleErrorMessage)
                        throw new Error(possibleErrorMessage);
                } else if (!validator) {
                    throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                }
            }
        }
    }

    function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
        var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
        validateDataBindValuesForRewriting(dataBindKeyValueArray);
        var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, {'valueAccessors':true});

        // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
        // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
        // extra indirection.
        var applyBindingsToNextSiblingScript =
            "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
        return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
    }

    return {
        ensureTemplateIsRewritten: function (template, templateEngine, templateDocument) {
            if (!templateEngine['isTemplateRewritten'](template, templateDocument))
                templateEngine['rewriteTemplate'](template, function (htmlString) {
                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                }, templateDocument);
        },

        memoizeBindingAttributeSyntax: function (htmlString, templateEngine) {
            return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[4], /* tagToRetain: */ arguments[1], /* nodeName: */ arguments[2], templateEngine);
            }).replace(memoizeVirtualContainerBindingSyntaxRegex, function() {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[1], /* tagToRetain: */ "<!-- ko -->", /* nodeName: */ "#comment", templateEngine);
            });
        },

        applyMemoizedBindingsToNextSibling: function (bindings, nodeName) {
            return ko.memoization.memoize(function (domNode, bindingContext) {
                var nodeToBind = domNode.nextSibling;
                if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                    ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
                }
            });
        }
    }
})();


// Exported only because it has to be referenced by string lookup from within rewritten template
ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
(function() {
    // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
    // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
    //
    // Two are provided by default:
    //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
    //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
    //                                           without reading/writing the actual element text content, since it will be overwritten
    //                                           with the rendered template output.
    // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
    // Template sources need to have the following functions:
    //   text() 			- returns the template text from your storage location
    //   text(value)		- writes the supplied template text to your storage location
    //   data(key)			- reads values stored using data(key, value) - see below
    //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
    //
    // Optionally, template sources can also have the following functions:
    //   nodes()            - returns a DOM element containing the nodes of this template, where available
    //   nodes(value)       - writes the given DOM element to your storage location
    // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
    // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
    //
    // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
    // using and overriding "makeTemplateSource" to return an instance of your custom template source.

    ko.templateSources = {};

    // ---- ko.templateSources.domElement -----

    ko.templateSources.domElement = function(element) {
        this.domElement = element;
    }

    ko.templateSources.domElement.prototype['text'] = function(/* valueToWrite */) {
        var tagNameLower = ko.utils.tagNameLower(this.domElement),
            elemContentsProperty = tagNameLower === "script" ? "text"
                                 : tagNameLower === "textarea" ? "value"
                                 : "innerHTML";

        if (arguments.length == 0) {
            return this.domElement[elemContentsProperty];
        } else {
            var valueToWrite = arguments[0];
            if (elemContentsProperty === "innerHTML")
                ko.utils.setHtml(this.domElement, valueToWrite);
            else
                this.domElement[elemContentsProperty] = valueToWrite;
        }
    };

    var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";
    ko.templateSources.domElement.prototype['data'] = function(key /*, valueToWrite */) {
        if (arguments.length === 1) {
            return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
        } else {
            ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
        }
    };

    // ---- ko.templateSources.anonymousTemplate -----
    // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
    // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
    // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.

    var anonymousTemplatesDomDataKey = ko.utils.domData.nextKey();
    ko.templateSources.anonymousTemplate = function(element) {
        this.domElement = element;
    }
    ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
    ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
    ko.templateSources.anonymousTemplate.prototype['text'] = function(/* valueToWrite */) {
        if (arguments.length == 0) {
            var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
            if (templateData.textData === undefined && templateData.containerData)
                templateData.textData = templateData.containerData.innerHTML;
            return templateData.textData;
        } else {
            var valueToWrite = arguments[0];
            ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {textData: valueToWrite});
        }
    };
    ko.templateSources.domElement.prototype['nodes'] = function(/* valueToWrite */) {
        if (arguments.length == 0) {
            var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
            return templateData.containerData;
        } else {
            var valueToWrite = arguments[0];
            ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {containerData: valueToWrite});
        }
    };

    ko.exportSymbol('templateSources', ko.templateSources);
    ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
    ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
})();
(function () {
    var _templateEngine;
    ko.setTemplateEngine = function (templateEngine) {
        if ((templateEngine != undefined) && !(templateEngine instanceof ko.templateEngine))
            throw new Error("templateEngine must inherit from ko.templateEngine");
        _templateEngine = templateEngine;
    }

    function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
        var node, nextInQueue = firstNode, firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
        while (nextInQueue && ((node = nextInQueue) !== firstOutOfRangeNode)) {
            nextInQueue = ko.virtualElements.nextSibling(node);
            action(node, nextInQueue);
        }
    }

    function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
        // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
        // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
        // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
        // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
        // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)

        if (continuousNodeArray.length) {
            var firstNode = continuousNodeArray[0],
                lastNode = continuousNodeArray[continuousNodeArray.length - 1],
                parentNode = firstNode.parentNode,
                provider = ko.bindingProvider['instance'],
                preprocessNode = provider['preprocessNode'];

            if (preprocessNode) {
                invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node, nextNodeInRange) {
                    var nodePreviousSibling = node.previousSibling;
                    var newNodes = preprocessNode.call(provider, node);
                    if (newNodes) {
                        if (node === firstNode)
                            firstNode = newNodes[0] || nextNodeInRange;
                        if (node === lastNode)
                            lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
                    }
                });

                // Because preprocessNode can change the nodes, including the first and last nodes, update continuousNodeArray to match.
                // We need the full set, including inner nodes, because the unmemoize step might remove the first node (and so the real
                // first node needs to be in the array).
                continuousNodeArray.length = 0;
                if (!firstNode) { // preprocessNode might have removed all the nodes, in which case there's nothing left to do
                    return;
                }
                if (firstNode === lastNode) {
                    continuousNodeArray.push(firstNode);
                } else {
                    continuousNodeArray.push(firstNode, lastNode);
                    ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                }
            }

            // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
            // whereas a regular applyBindings won't introduce new memoized nodes
            invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                if (node.nodeType === 1 || node.nodeType === 8)
                    ko.applyBindings(bindingContext, node);
            });
            invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                if (node.nodeType === 1 || node.nodeType === 8)
                    ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
            });

            // Make sure any changes done by applyBindings or unmemoize are reflected in the array
            ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
        }
    }

    function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
        return nodeOrNodeArray.nodeType ? nodeOrNodeArray
                                        : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0]
                                        : null;
    }

    function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
        options = options || {};
        var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
        var templateDocument = firstTargetNode && firstTargetNode.ownerDocument;
        var templateEngineToUse = (options['templateEngine'] || _templateEngine);
        ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
        var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);

        // Loosely check result is an array of DOM nodes
        if ((typeof renderedNodesArray.length != "number") || (renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number"))
            throw new Error("Template engine must return an array of DOM nodes");

        var haveAddedNodesToParent = false;
        switch (renderMode) {
            case "replaceChildren":
                ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "replaceNode":
                ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "ignoreTargetNode": break;
            default:
                throw new Error("Unknown renderMode: " + renderMode);
        }

        if (haveAddedNodesToParent) {
            activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
            if (options['afterRender'])
                ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
        }

        return renderedNodesArray;
    }

    function resolveTemplateName(template, data, context) {
        // The template can be specified as:
        if (ko.isObservable(template)) {
            // 1. An observable, with string value
            return template();
        } else if (typeof template === 'function') {
            // 2. A function of (data, context) returning a string
            return template(data, context);
        } else {
            // 3. A string
            return template;
        }
    }

    ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
        options = options || {};
        if ((options['templateEngine'] || _templateEngine) == undefined)
            throw new Error("Set a template engine before calling renderTemplate");
        renderMode = renderMode || "replaceChildren";

        if (targetNodeOrNodeArray) {
            var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

            var whenToDispose = function () { return (!firstTargetNode) || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode); }; // Passive disposal (on next evaluation)
            var activelyDisposeWhenNodeIsRemoved = (firstTargetNode && renderMode == "replaceNode") ? firstTargetNode.parentNode : firstTargetNode;

            return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
                function () {
                    // Ensure we've got a proper binding context to work with
                    var bindingContext = (dataOrBindingContext && (dataOrBindingContext instanceof ko.bindingContext))
                        ? dataOrBindingContext
                        : new ko.bindingContext(ko.utils.unwrapObservable(dataOrBindingContext));

                    var templateName = resolveTemplateName(template, bindingContext['$data'], bindingContext),
                        renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);

                    if (renderMode == "replaceNode") {
                        targetNodeOrNodeArray = renderedNodesArray;
                        firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                    }
                },
                null,
                { disposeWhen: whenToDispose, disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved }
            );
        } else {
            // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
            return ko.memoization.memoize(function (domNode) {
                ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
            });
        }
    };

    ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
        // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
        // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
        var arrayItemContext;

        // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
        var executeTemplateForArrayItem = function (arrayValue, index) {
            // Support selecting template as a function of the data being rendered
            arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function(context) {
                context['$index'] = index;
            });

            var templateName = resolveTemplateName(template, arrayValue, arrayItemContext);
            return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
        }

        // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
        var activateBindingsCallback = function(arrayValue, addedNodesArray, index) {
            activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
            if (options['afterRender'])
                options['afterRender'](addedNodesArray, arrayValue);
        };

        return ko.dependentObservable(function () {
            var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
            // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
            ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);

        }, null, { disposeWhenNodeIsRemoved: targetNode });
    };

    var templateComputedDomDataKey = ko.utils.domData.nextKey();
    function disposeOldComputedAndStoreNewOne(element, newComputed) {
        var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
        if (oldComputed && (typeof(oldComputed.dispose) == 'function'))
            oldComputed.dispose();
        ko.utils.domData.set(element, templateComputedDomDataKey, (newComputed && newComputed.isActive()) ? newComputed : undefined);
    }

    ko.bindingHandlers['template'] = {
        'init': function(element, valueAccessor) {
            // Support anonymous templates
            var bindingValue = ko.utils.unwrapObservable(valueAccessor());
            if (typeof bindingValue == "string" || bindingValue['name']) {
                // It's a named template - clear the element
                ko.virtualElements.emptyNode(element);
            } else {
                // It's an anonymous template - store the element contents, then clear the element
                var templateNodes = ko.virtualElements.childNodes(element),
                    container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent
                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
            }
            return { 'controlsDescendantBindings': true };
        },
        'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor(),
                dataValue,
                options = ko.utils.unwrapObservable(value),
                shouldDisplay = true,
                templateComputed = null,
                templateName;

            if (typeof options == "string") {
                templateName = value;
                options = {};
            } else {
                templateName = options['name'];

                // Support "if"/"ifnot" conditions
                if ('if' in options)
                    shouldDisplay = ko.utils.unwrapObservable(options['if']);
                if (shouldDisplay && 'ifnot' in options)
                    shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);

                dataValue = ko.utils.unwrapObservable(options['data']);
            }

            if ('foreach' in options) {
                // Render once for each data point (treating data set as empty if shouldDisplay==false)
                var dataArray = (shouldDisplay && options['foreach']) || [];
                templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
            } else if (!shouldDisplay) {
                ko.virtualElements.emptyNode(element);
            } else {
                // Render once for this single data point (or use the viewModel if no data was provided)
                var innerBindingContext = ('data' in options) ?
                    bindingContext['createChildContext'](dataValue, options['as']) :  // Given an explitit 'data' value, we create a child binding context for it
                    bindingContext;                                                        // Given no explicit 'data' value, we retain the same binding context
                templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
            }

            // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
            disposeOldComputedAndStoreNewOne(element, templateComputed);
        }
    };

    // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
    ko.expressionRewriting.bindingRewriteValidators['template'] = function(bindingValue) {
        var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);

        if ((parsedBindingValue.length == 1) && parsedBindingValue[0]['unknown'])
            return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

        if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name"))
            return null; // Named templates can be rewritten, so return "no error"
        return "This template engine does not support anonymous templates nested within its templates";
    };

    ko.virtualElements.allowedBindings['template'] = true;
})();

ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
ko.exportSymbol('renderTemplate', ko.renderTemplate);
// Go through the items that have been added and deleted and try to find matches between them.
ko.utils.findMovesInArrayComparison = function (left, right, limitFailedCompares) {
    if (left.length && right.length) {
        var failedCompares, l, r, leftItem, rightItem;
        for (failedCompares = l = 0; (!limitFailedCompares || failedCompares < limitFailedCompares) && (leftItem = left[l]); ++l) {
            for (r = 0; rightItem = right[r]; ++r) {
                if (leftItem['value'] === rightItem['value']) {
                    leftItem['moved'] = rightItem['index'];
                    rightItem['moved'] = leftItem['index'];
                    right.splice(r, 1);         // This item is marked as moved; so remove it from right list
                    failedCompares = r = 0;     // Reset failed compares count because we're checking for consecutive failures
                    break;
                }
            }
            failedCompares += r;
        }
    }
};

ko.utils.compareArrays = (function () {
    var statusNotInOld = 'added', statusNotInNew = 'deleted';

    // Simple calculation based on Levenshtein distance.
    function compareArrays(oldArray, newArray, options) {
        // For backward compatibility, if the third arg is actually a bool, interpret
        // it as the old parameter 'dontLimitMoves'. Newer code should use { dontLimitMoves: true }.
        options = (typeof options === 'boolean') ? { 'dontLimitMoves': options } : (options || {});
        oldArray = oldArray || [];
        newArray = newArray || [];

        if (oldArray.length <= newArray.length)
            return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);
        else
            return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
    }

    function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
        var myMin = Math.min,
            myMax = Math.max,
            editDistanceMatrix = [],
            smlIndex, smlIndexMax = smlArray.length,
            bigIndex, bigIndexMax = bigArray.length,
            compareRange = (bigIndexMax - smlIndexMax) || 1,
            maxDistance = smlIndexMax + bigIndexMax + 1,
            thisRow, lastRow,
            bigIndexMaxForRow, bigIndexMinForRow;

        for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
            lastRow = thisRow;
            editDistanceMatrix.push(thisRow = []);
            bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
            bigIndexMinForRow = myMax(0, smlIndex - 1);
            for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                if (!bigIndex)
                    thisRow[bigIndex] = smlIndex + 1;
                else if (!smlIndex)  // Top row - transform empty array into new array via additions
                    thisRow[bigIndex] = bigIndex + 1;
                else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1])
                    thisRow[bigIndex] = lastRow[bigIndex - 1];                  // copy value (no edit)
                else {
                    var northDistance = lastRow[bigIndex] || maxDistance;       // not in big (deletion)
                    var westDistance = thisRow[bigIndex - 1] || maxDistance;    // not in small (addition)
                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                }
            }
        }

        var editScript = [], meMinusOne, notInSml = [], notInBig = [];
        for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
            meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
            if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex-1]) {
                notInSml.push(editScript[editScript.length] = {     // added
                    'status': statusNotInSml,
                    'value': bigArray[--bigIndex],
                    'index': bigIndex });
            } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                notInBig.push(editScript[editScript.length] = {     // deleted
                    'status': statusNotInBig,
                    'value': smlArray[--smlIndex],
                    'index': smlIndex });
            } else {
                --bigIndex;
                --smlIndex;
                if (!options['sparse']) {
                    editScript.push({
                        'status': "retained",
                        'value': bigArray[bigIndex] });
                }
            }
        }

        // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
        // smlIndexMax keeps the time complexity of this algorithm linear.
        ko.utils.findMovesInArrayComparison(notInSml, notInBig, smlIndexMax * 10);

        return editScript.reverse();
    }

    return compareArrays;
})();

ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);
(function () {
    // Objective:
    // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
    //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
    // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
    //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
    //   previously mapped - retain those nodes, and just insert/delete other ones

    // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
    // You can use this, for example, to activate bindings on those nodes.

    function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
        // Map this array value inside a dependentObservable so we re-map when any dependency changes
        var mappedNodes = [];
        var dependentObservable = ko.dependentObservable(function() {
            var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || [];

            // On subsequent evaluations, just replace the previously-inserted DOM nodes
            if (mappedNodes.length > 0) {
                ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
                if (callbackAfterAddingNodes)
                    ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
            }

            // Replace the contents of the mappedNodes array, thereby updating the record
            // of which nodes would be deleted if valueToMap was itself later removed
            mappedNodes.length = 0;
            ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
        }, null, { disposeWhenNodeIsRemoved: containerNode, disposeWhen: function() { return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes); } });
        return { mappedNodes : mappedNodes, dependentObservable : (dependentObservable.isActive() ? dependentObservable : undefined) };
    }

    var lastMappingResultDomDataKey = ko.utils.domData.nextKey();

    ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
        // Compare the provided array against the previous one
        array = array || [];
        options = options || {};
        var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
        var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
        var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) { return x.arrayEntry; });
        var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);

        // Build the new mapping result
        var newMappingResult = [];
        var lastMappingResultIndex = 0;
        var newMappingResultIndex = 0;

        var nodesToDelete = [];
        var itemsToProcess = [];
        var itemsForBeforeRemoveCallbacks = [];
        var itemsForMoveCallbacks = [];
        var itemsForAfterAddCallbacks = [];
        var mapData;

        function itemMovedOrRetained(editScriptIndex, oldPosition) {
            mapData = lastMappingResult[oldPosition];
            if (newMappingResultIndex !== oldPosition)
                itemsForMoveCallbacks[editScriptIndex] = mapData;
            // Since updating the index might change the nodes, do so before calling fixUpContinuousNodeArray
            mapData.indexObservable(newMappingResultIndex++);
            ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
            newMappingResult.push(mapData);
            itemsToProcess.push(mapData);
        }

        function callCallback(callback, items) {
            if (callback) {
                for (var i = 0, n = items.length; i < n; i++) {
                    if (items[i]) {
                        ko.utils.arrayForEach(items[i].mappedNodes, function(node) {
                            callback(node, i, items[i].arrayEntry);
                        });
                    }
                }
            }
        }

        for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
            movedIndex = editScriptItem['moved'];
            switch (editScriptItem['status']) {
                case "deleted":
                    if (movedIndex === undefined) {
                        mapData = lastMappingResult[lastMappingResultIndex];

                        // Stop tracking changes to the mapping for these nodes
                        if (mapData.dependentObservable)
                            mapData.dependentObservable.dispose();

                        // Queue these nodes for later removal
                        nodesToDelete.push.apply(nodesToDelete, ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode));
                        if (options['beforeRemove']) {
                            itemsForBeforeRemoveCallbacks[i] = mapData;
                            itemsToProcess.push(mapData);
                        }
                    }
                    lastMappingResultIndex++;
                    break;

                case "retained":
                    itemMovedOrRetained(i, lastMappingResultIndex++);
                    break;

                case "added":
                    if (movedIndex !== undefined) {
                        itemMovedOrRetained(i, movedIndex);
                    } else {
                        mapData = { arrayEntry: editScriptItem['value'], indexObservable: ko.observable(newMappingResultIndex++) };
                        newMappingResult.push(mapData);
                        itemsToProcess.push(mapData);
                        if (!isFirstExecution)
                            itemsForAfterAddCallbacks[i] = mapData;
                    }
                    break;
            }
        }

        // Call beforeMove first before any changes have been made to the DOM
        callCallback(options['beforeMove'], itemsForMoveCallbacks);

        // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
        ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);

        // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
        for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
            // Get nodes for newly added items
            if (!mapData.mappedNodes)
                ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));

            // Put nodes in the right place if they aren't there already
            for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                if (node !== nextNode)
                    ko.virtualElements.insertAfter(domNode, node, lastNode);
            }

            // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
            if (!mapData.initialized && callbackAfterAddingNodes) {
                callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                mapData.initialized = true;
            }
        }

        // If there's a beforeRemove callback, call it after reordering.
        // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
        // some sort of animation, which is why we first reorder the nodes that will be removed. If the
        // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
        // Perhaps we'll make that change in the future if this scenario becomes more common.
        callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);

        // Finally call afterMove and afterAdd callbacks
        callCallback(options['afterMove'], itemsForMoveCallbacks);
        callCallback(options['afterAdd'], itemsForAfterAddCallbacks);

        // Store a copy of the array items we just considered so we can difference it next time
        ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);
    }
})();

ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
ko.nativeTemplateEngine = function () {
    this['allowTemplateRewriting'] = false;
}

ko.nativeTemplateEngine.prototype = new ko.templateEngine();
ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options) {
    var useNodesIfAvailable = !(ko.utils.ieVersion < 9), // IE<9 cloneNode doesn't work properly
        templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
        templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

    if (templateNodes) {
        return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
    } else {
        var templateText = templateSource['text']();
        return ko.utils.parseHtmlFragment(templateText);
    }
};

ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
ko.setTemplateEngine(ko.nativeTemplateEngine.instance);

ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
(function() {
    ko.jqueryTmplTemplateEngine = function () {
        // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
        // doesn't expose a version number, so we have to infer it.
        // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
        // which KO internally refers to as version "2", so older versions are no longer detected.
        var jQueryTmplVersion = this.jQueryTmplVersion = (function() {
            if (!jQueryInstance || !(jQueryInstance['tmpl']))
                return 0;
            // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
            try {
                if (jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                    // Since 1.0.0pre, custom tags should append markup to an array called "__"
                    return 2; // Final version of jquery.tmpl
                }
            } catch(ex) { /* Apparently not the version we were looking for */ }

            return 1; // Any older version that we don't support
        })();

        function ensureHasReferencedJQueryTemplates() {
            if (jQueryTmplVersion < 2)
                throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
        }

        function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
            return jQueryInstance['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
        }

        this['renderTemplateSource'] = function(templateSource, bindingContext, options) {
            options = options || {};
            ensureHasReferencedJQueryTemplates();

            // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
            var precompiled = templateSource['data']('precompiled');
            if (!precompiled) {
                var templateText = templateSource['text']() || "";
                // Wrap in "with($whatever.koBindingContext) { ... }"
                templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";

                precompiled = jQueryInstance['template'](null, templateText);
                templateSource['data']('precompiled', precompiled);
            }

            var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
            var jQueryTemplateOptions = jQueryInstance['extend']({ 'koBindingContext': bindingContext }, options['templateOptions']);

            var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
            resultNodes['appendTo'](document.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

            jQueryInstance['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
            return resultNodes;
        };

        this['createJavaScriptEvaluatorBlock'] = function(script) {
            return "{{ko_code ((function() { return " + script + " })()) }}";
        };

        this['addTemplate'] = function(templateName, templateMarkup) {
            document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
        };

        if (jQueryTmplVersion > 0) {
            jQueryInstance['tmpl']['tag']['ko_code'] = {
                open: "__.push($1 || '');"
            };
            jQueryInstance['tmpl']['tag']['ko_with'] = {
                open: "with($1) {",
                close: "} "
            };
        }
    };

    ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
    ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;

    // Use this one by default *only if jquery.tmpl is referenced*
    var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
    if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0)
        ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);

    ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
})();
}));
}());
})();


  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_ko4j_Knockout_props = null;
    this.fld_org_netbeans_html_ko4j_Knockout_funcs = null;
    this.fld_org_netbeans_html_ko4j_Knockout_js = null;
    this.fld_org_netbeans_html_ko4j_Knockout_strong = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_ref_ReferenceQueue = link('java/lang/ref/ReferenceQueue', function(f) { vm.java_lang_ref_ReferenceQueue =  f; });
vm.java_lang_ref_WeakReference = link('java/lang/ref/WeakReference', function(f) { vm.java_lang_ref_WeakReference =  f; });
vm.java_lang_Deprecated = link('java/lang/Deprecated', function(f) { vm.java_lang_Deprecated =  f; });
  invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p0, p1) {
    return target['toJava__Ljava_lang_Object_2Ljava_lang_Object_2'](p0,p1);
  };
  invoker.notifySuccess__VLjava_lang_Object_2 = function(target, p0, p1) {
    return target['notifySuccess__VLjava_lang_Object_2'](p0,p1);
  };
  invoker.close__V = function(target, p0) {
    return target['close__V'](p0);
  };
  invoker.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p0, p1) {
    return target['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'](p0,p1);
  };
  invoker.isJSONP__Z = function(target, p0) {
    return target['isJSONP__Z'](p0);
  };
  invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p0, p1) {
    return target['composeURL__Ljava_lang_String_2Ljava_lang_String_2'](p0,p1);
  };
  invoker.isDoOutput__Z = function(target, p0) {
    return target['isDoOutput__Z'](p0);
  };
  invoker.writeData__VLjava_io_OutputStream_2 = function(target, p0, p1) {
    return target['writeData__VLjava_io_OutputStream_2'](p0,p1);
  };
  invoker.toByteArray___3B = function(target, p0) {
    return target['toByteArray___3B'](p0);
  };
  invoker.notifyError__VLjava_lang_Throwable_2 = function(target, p0, p1) {
    return target['notifyError__VLjava_lang_Throwable_2'](p0,p1);
  };
  invoker.getMethod__Ljava_lang_String_2 = function(target, p0) {
    return target['getMethod__Ljava_lang_String_2'](p0);
  };
  invoker.read__I = function(target, p0) {
    return target['read__I'](p0);
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p0, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p0,p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target, p0) {
    return target['toString__Ljava_lang_String_2'](p0);
  };
  invoker.hashCode__I = function(target, p0) {
    return target['hashCode__I'](p0);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p0, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p0,p1);
  };
  invoker.getMessage__Ljava_lang_String_2 = function(target, p0) {
    return target['getMessage__Ljava_lang_String_2'](p0);
  };
  invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I = function(target, p0, p1, p2, p3) {
    return target['register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I'](p0,p1,p2,p3);
  };
  invoker.getName__Ljava_lang_String_2 = function(target, p0) {
    return target['getName__Ljava_lang_String_2'](p0);
  };
  invoker.getPropertyName__Ljava_lang_String_2 = function(target, p0) {
    return target['getPropertyName__Ljava_lang_String_2'](p0);
  };
  invoker.isReadOnly__Z = function(target, p0) {
    return target['isReadOnly__Z'](p0);
  };
  invoker.getValue__Ljava_lang_Object_2 = function(target, p0) {
    return target['getValue__Ljava_lang_Object_2'](p0);
  };
  invoker.getFunctionName__Ljava_lang_String_2 = function(target, p0) {
    return target['getFunctionName__Ljava_lang_String_2'](p0);
  };
  invoker.warning__VLjava_lang_String_2 = function(target, p0, p1) {
    return target['warning__VLjava_lang_String_2'](p0,p1);
  };
  invoker.run__V = function(target, p0) {
    return target['run__V'](p0);
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p0, p1) {
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'](p0,p1);
  };
  invoker.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2 = function(target, p0) {
    return target['weak__Lorg_netbeans_html_json_spi_PropertyBinding_2'](p0);
  };
  invoker.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(target, p0) {
    return target['weak__Lorg_netbeans_html_json_spi_FunctionBinding_2'](p0);
  };
  invoker.poll__Ljava_lang_ref_Reference_2 = function(target, p0) {
    return target['poll__Ljava_lang_ref_Reference_2'](p0);
  };
  invoker.get__Ljava_lang_Object_2 = function(target, p0) {
    return target['get__Ljava_lang_Object_2'](p0);
  };
  invoker.setValue__VLjava_lang_Object_2 = function(target, p0, p1) {
    return target['setValue__VLjava_lang_Object_2'](p0,p1);
  };
  invoker.call__VLjava_lang_Object_2Ljava_lang_Object_2 = function(target, p0, p1, p2) {
    return target['call__VLjava_lang_Object_2Ljava_lang_Object_2'](p0,p1,p2);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNDE5MDUzODkwMjg5DQpCdWlsZC1KZGs6IDEuNy4wXzcyDQpCdWlsdC1CeTogamFyZGENCkJ1bmRsZS1EZXNjcmlwdGlvbjogQmluZHMgbmV0LmphdmEuaHRtbC5qc29uIEFQSXMgdG9nZXRoZXIgd2l0aCBrbm9ja291dA0KIC5qcw0KQnVuZGxlLURvY1VSTDogaHR0cDovL25ldGJlYW5zLm9yZw0KQnVuZGxlLUxpY2Vuc2U6IGh0dHA6Ly93d3cubmV0YmVhbnMub3JnL2NkZGwtZ3BsdjIuaHRtbA0KQnVuZGxlLU1hbmlmZXN0VmVyc2lvbjogMg0KQnVuZGxlLU5hbWU6IEtub2Nrb3V0LmpzIGZvciBKYXZhDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBvcmcubmV0YmVhbnMuaHRtbC5rbzRqDQpCdW5kbGUtVmVuZG9yOiBOZXRCZWFucw0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KSW1wb3J0LVBhY2thZ2U6IG9yZy5uZXRiZWFucy5odG1sLmJvb3Quc3BpO3ZlcnNpb249IlsxLjEsMikiLG9yZy5uZXRiZWFuDQogcy5odG1sLmNvbnRleHQuc3BpO3ZlcnNpb249IlsxLjEsMikiLG9yZy5uZXRiZWFucy5odG1sLmpzb24uc3BpO3ZlcnNpb24NCiA9IlsxLjEsMikiDQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
  exports['registerResource']('META-INF/services/org.netbeans.html.context.spi.Contexts$Provider', 'b3JnLm5ldGJlYW5zLmh0bWwua280ai5LTzRKCg==');
  exports['registerResource']('org/netbeans/html/ko4j/knockout-3.2.0.debug.js', 'LyoKICogRE8gTk9UIEFMVEVSIE9SIFJFTU9WRSBDT1BZUklHSFQgTk9USUNFUyBPUiBUSElTIEhFQURFUi4KICoKICogQ29weXJpZ2h0IDIwMTMtMjAxNCBPcmFjbGUgYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLgogKgogKiBPcmFjbGUgYW5kIEphdmEgYXJlIHJlZ2lzdGVyZWQgdHJhZGVtYXJrcyBvZiBPcmFjbGUgYW5kL29yIGl0cyBhZmZpbGlhdGVzLgogKiBPdGhlciBuYW1lcyBtYXkgYmUgdHJhZGVtYXJrcyBvZiB0aGVpciByZXNwZWN0aXZlIG93bmVycy4KICoKICogVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgZWl0aGVyIHRoZSBHTlUKICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBWZXJzaW9uIDIgb25seSAoIkdQTCIpIG9yIHRoZSBDb21tb24KICogRGV2ZWxvcG1lbnQgYW5kIERpc3RyaWJ1dGlvbiBMaWNlbnNlKCJDRERMIikgKGNvbGxlY3RpdmVseSwgdGhlCiAqICJMaWNlbnNlIikuIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUKICogTGljZW5zZS4gWW91IGNhbiBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CiAqIGh0dHA6Ly93d3cubmV0YmVhbnMub3JnL2NkZGwtZ3BsdjIuaHRtbAogKiBvciBuYmJ1aWxkL2xpY2Vuc2VzL0NEREwtR1BMLTItQ1AuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlCiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlCiAqIExpY2Vuc2UuICBXaGVuIGRpc3RyaWJ1dGluZyB0aGUgc29mdHdhcmUsIGluY2x1ZGUgdGhpcyBMaWNlbnNlIEhlYWRlcgogKiBOb3RpY2UgaW4gZWFjaCBmaWxlIGFuZCBpbmNsdWRlIHRoZSBMaWNlbnNlIGZpbGUgYXQKICogbmJidWlsZC9saWNlbnNlcy9DRERMLUdQTC0yLUNQLiAgT3JhY2xlIGRlc2lnbmF0ZXMgdGhpcwogKiBwYXJ0aWN1bGFyIGZpbGUgYXMgc3ViamVjdCB0byB0aGUgIkNsYXNzcGF0aCIgZXhjZXB0aW9uIGFzIHByb3ZpZGVkCiAqIGJ5IE9yYWNsZSBpbiB0aGUgR1BMIFZlcnNpb24gMiBzZWN0aW9uIG9mIHRoZSBMaWNlbnNlIGZpbGUgdGhhdAogKiBhY2NvbXBhbmllZCB0aGlzIGNvZGUuIElmIGFwcGxpY2FibGUsIGFkZCB0aGUgZm9sbG93aW5nIGJlbG93IHRoZQogKiBMaWNlbnNlIEhlYWRlciwgd2l0aCB0aGUgZmllbGRzIGVuY2xvc2VkIGJ5IGJyYWNrZXRzIFtdIHJlcGxhY2VkIGJ5CiAqIHlvdXIgb3duIGlkZW50aWZ5aW5nIGluZm9ybWF0aW9uOgogKiAiUG9ydGlvbnMgQ29weXJpZ2h0ZWQgW3llYXJdIFtuYW1lIG9mIGNvcHlyaWdodCBvd25lcl0iCiAqCiAqIENvbnRyaWJ1dG9yKHMpOgogKgogKiBUaGUgT3JpZ2luYWwgU29mdHdhcmUgaXMgTmV0QmVhbnMuIFRoZSBJbml0aWFsIERldmVsb3BlciBvZiB0aGUgT3JpZ2luYWwKICogU29mdHdhcmUgaXMgT3JhY2xlLiBQb3J0aW9ucyBDb3B5cmlnaHQgMjAxMy0yMDE0IE9yYWNsZS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4KICoKICogSWYgeW91IHdpc2ggeW91ciB2ZXJzaW9uIG9mIHRoaXMgZmlsZSB0byBiZSBnb3Zlcm5lZCBieSBvbmx5IHRoZSBDRERMCiAqIG9yIG9ubHkgdGhlIEdQTCBWZXJzaW9uIDIsIGluZGljYXRlIHlvdXIgZGVjaXNpb24gYnkgYWRkaW5nCiAqICJbQ29udHJpYnV0b3JdIGVsZWN0cyB0byBpbmNsdWRlIHRoaXMgc29mdHdhcmUgaW4gdGhpcyBkaXN0cmlidXRpb24KICogdW5kZXIgdGhlIFtDRERMIG9yIEdQTCBWZXJzaW9uIDJdIGxpY2Vuc2UuIiBJZiB5b3UgZG8gbm90IGluZGljYXRlIGEKICogc2luZ2xlIGNob2ljZSBvZiBsaWNlbnNlLCBhIHJlY2lwaWVudCBoYXMgdGhlIG9wdGlvbiB0byBkaXN0cmlidXRlCiAqIHlvdXIgdmVyc2lvbiBvZiB0aGlzIGZpbGUgdW5kZXIgZWl0aGVyIHRoZSBDRERMLCB0aGUgR1BMIFZlcnNpb24gMiBvcgogKiB0byBleHRlbmQgdGhlIGNob2ljZSBvZiBsaWNlbnNlIHRvIGl0cyBsaWNlbnNlZXMgYXMgcHJvdmlkZWQgYWJvdmUuCiAqIEhvd2V2ZXIsIGlmIHlvdSBhZGQgR1BMIFZlcnNpb24gMiBjb2RlIGFuZCB0aGVyZWZvcmUsIGVsZWN0ZWQgdGhlIEdQTAogKiBWZXJzaW9uIDIgbGljZW5zZSwgdGhlbiB0aGUgb3B0aW9uIGFwcGxpZXMgb25seSBpZiB0aGUgbmV3IGNvZGUgaXMKICogbWFkZSBzdWJqZWN0IHRvIHN1Y2ggb3B0aW9uIGJ5IHRoZSBjb3B5cmlnaHQgaG9sZGVyLgogKi8KCi8qIQogKiBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjMuMi4wCiAqIChjKSBTdGV2ZW4gU2FuZGVyc29uIC0gaHR0cDovL2tub2Nrb3V0anMuY29tLwogKiBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKQogKi8KCihmdW5jdGlvbigpewp2YXIgREVCVUc9ZmFsc2U7CihmdW5jdGlvbih1bmRlZmluZWQpewogICAgLy8gKDAsIGV2YWwpKCd0aGlzJykgaXMgYSByb2J1c3Qgd2F5IG9mIGdldHRpbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QKICAgIC8vIEZvciBkZXRhaWxzLCBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNDExOTk4OC9yZXR1cm4tdGhpcy0wLWV2YWx0aGlzLzE0MTIwMDIzIzE0MTIwMDIzCiAgICB2YXIgd2luZG93ID0gdGhpcyB8fCAoMCwgZXZhbCkoJ3RoaXMnKSwKICAgICAgICBkb2N1bWVudCA9IHdpbmRvd1snZG9jdW1lbnQnXSwKICAgICAgICBuYXZpZ2F0b3IgPSB3aW5kb3dbJ25hdmlnYXRvciddLAogICAgICAgIGpRdWVyeUluc3RhbmNlID0gd2luZG93WyJqUXVlcnkiXSwKICAgICAgICBKU09OID0gd2luZG93WyJKU09OIl07CihmdW5jdGlvbihmYWN0b3J5KSB7CiAgICAvLyBTdXBwb3J0IHRocmVlIG1vZHVsZSBsb2FkaW5nIHNjZW5hcmlvcwogICAgaWYgKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JykgewogICAgICAgIC8vIFsxXSBDb21tb25KUy9Ob2RlLmpzCiAgICAgICAgdmFyIHRhcmdldCA9IG1vZHVsZVsnZXhwb3J0cyddIHx8IGV4cG9ydHM7IC8vIG1vZHVsZS5leHBvcnRzIGlzIGZvciBOb2RlLmpzCiAgICAgICAgZmFjdG9yeSh0YXJnZXQsIHJlcXVpcmUpOwogICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHsKICAgICAgICAvLyBbMl0gQU1EIGFub255bW91cyBtb2R1bGUKICAgICAgICBkZWZpbmUoWydleHBvcnRzJywgJ3JlcXVpcmUnXSwgZmFjdG9yeSk7CiAgICB9IGVsc2UgewogICAgICAgIC8vIFszXSBObyBtb2R1bGUgbG9hZGVyIChwbGFpbiA8c2NyaXB0PiB0YWcpIC0gcHV0IGRpcmVjdGx5IGluIGdsb2JhbCBuYW1lc3BhY2UKICAgICAgICBmYWN0b3J5KHdpbmRvd1sna28nXSA9IHt9KTsKICAgIH0KfShmdW5jdGlvbihrb0V4cG9ydHMsIHJlcXVpcmUpewovLyBJbnRlcm5hbGx5LCBhbGwgS08gb2JqZWN0cyBhcmUgYXR0YWNoZWQgdG8ga29FeHBvcnRzIChldmVuIHRoZSBub24tZXhwb3J0ZWQgb25lcyB3aG9zZSBuYW1lcyB3aWxsIGJlIG1pbmlmaWVkIGJ5IHRoZSBjbG9zdXJlIGNvbXBpbGVyKS4KLy8gSW4gdGhlIGZ1dHVyZSwgdGhlIGZvbGxvd2luZyAia28iIHZhcmlhYmxlIG1heSBiZSBtYWRlIGRpc3RpbmN0IGZyb20gImtvRXhwb3J0cyIgc28gdGhhdCBwcml2YXRlIG9iamVjdHMgYXJlIG5vdCBleHRlcm5hbGx5IHJlYWNoYWJsZS4KdmFyIGtvID0gdHlwZW9mIGtvRXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBrb0V4cG9ydHMgOiB7fTsKLy8gR29vZ2xlIENsb3N1cmUgQ29tcGlsZXIgaGVscGVycyAodXNlZCBvbmx5IHRvIG1ha2UgdGhlIG1pbmlmaWVkIGZpbGUgc21hbGxlcikKa28uZXhwb3J0U3ltYm9sID0gZnVuY3Rpb24oa29QYXRoLCBvYmplY3QpIHsKICAgIHZhciB0b2tlbnMgPSBrb1BhdGguc3BsaXQoIi4iKTsKCiAgICAvLyBJbiB0aGUgZnV0dXJlLCAia28iIG1heSBiZWNvbWUgZGlzdGluY3QgZnJvbSAia29FeHBvcnRzIiAoc28gdGhhdCBub24tZXhwb3J0ZWQgb2JqZWN0cyBhcmUgbm90IHJlYWNoYWJsZSkKICAgIC8vIEF0IHRoYXQgcG9pbnQsICJ0YXJnZXQiIHdvdWxkIGJlIHNldCB0bzogKHR5cGVvZiBrb0V4cG9ydHMgIT09ICJ1bmRlZmluZWQiID8ga29FeHBvcnRzIDoga28pCiAgICB2YXIgdGFyZ2V0ID0ga287CgogICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoIC0gMTsgaSsrKQogICAgICAgIHRhcmdldCA9IHRhcmdldFt0b2tlbnNbaV1dOwogICAgdGFyZ2V0W3Rva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1dID0gb2JqZWN0Owp9Owprby5leHBvcnRQcm9wZXJ0eSA9IGZ1bmN0aW9uKG93bmVyLCBwdWJsaWNOYW1lLCBvYmplY3QpIHsKICAgIG93bmVyW3B1YmxpY05hbWVdID0gb2JqZWN0Owp9Owprby52ZXJzaW9uID0gIjMuMi4wIjsKCmtvLmV4cG9ydFN5bWJvbCgndmVyc2lvbicsIGtvLnZlcnNpb24pOwprby51dGlscyA9IChmdW5jdGlvbiAoKSB7CiAgICBmdW5jdGlvbiBvYmplY3RGb3JFYWNoKG9iaiwgYWN0aW9uKSB7CiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHsKICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgewogICAgICAgICAgICAgICAgYWN0aW9uKHByb3AsIG9ialtwcm9wXSk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7CiAgICAgICAgaWYgKHNvdXJjZSkgewogICAgICAgICAgICBmb3IodmFyIHByb3AgaW4gc291cmNlKSB7CiAgICAgICAgICAgICAgICBpZihzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHsKICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihvYmosIHByb3RvKSB7CiAgICAgICAgb2JqLl9fcHJvdG9fXyA9IHByb3RvOwogICAgICAgIHJldHVybiBvYmo7CiAgICB9CgogICAgdmFyIGNhblNldFByb3RvdHlwZSA9ICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5KTsKCiAgICAvLyBSZXByZXNlbnQgdGhlIGtub3duIGV2ZW50IHR5cGVzIGluIGEgY29tcGFjdCB3YXksIHRoZW4gYXQgcnVudGltZSB0cmFuc2Zvcm0gaXQgaW50byBhIGhhc2ggd2l0aCBldmVudCBuYW1lIGFzIGtleSAoZm9yIGZhc3QgbG9va3VwKQogICAgdmFyIGtub3duRXZlbnRzID0ge30sIGtub3duRXZlbnRUeXBlc0J5RXZlbnROYW1lID0ge307CiAgICB2YXIga2V5RXZlbnRUeXBlTmFtZSA9IChuYXZpZ2F0b3IgJiYgL0ZpcmVmb3hcLzIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSA/ICdLZXlib2FyZEV2ZW50JyA6ICdVSUV2ZW50cyc7CiAgICBrbm93bkV2ZW50c1trZXlFdmVudFR5cGVOYW1lXSA9IFsna2V5dXAnLCAna2V5ZG93bicsICdrZXlwcmVzcyddOwogICAga25vd25FdmVudHNbJ01vdXNlRXZlbnRzJ10gPSBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlbW92ZScsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ107CiAgICBvYmplY3RGb3JFYWNoKGtub3duRXZlbnRzLCBmdW5jdGlvbihldmVudFR5cGUsIGtub3duRXZlbnRzRm9yVHlwZSkgewogICAgICAgIGlmIChrbm93bkV2ZW50c0ZvclR5cGUubGVuZ3RoKSB7CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0ga25vd25FdmVudHNGb3JUeXBlLmxlbmd0aDsgaSA8IGo7IGkrKykKICAgICAgICAgICAgICAgIGtub3duRXZlbnRUeXBlc0J5RXZlbnROYW1lW2tub3duRXZlbnRzRm9yVHlwZVtpXV0gPSBldmVudFR5cGU7CiAgICAgICAgfQogICAgfSk7CiAgICB2YXIgZXZlbnRzVGhhdE11c3RCZVJlZ2lzdGVyZWRVc2luZ0F0dGFjaEV2ZW50ID0geyAncHJvcGVydHljaGFuZ2UnOiB0cnVlIH07IC8vIFdvcmthcm91bmQgZm9yIGFuIElFOSBpc3N1ZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvNDA2CgogICAgLy8gRGV0ZWN0IElFIHZlcnNpb25zIGZvciBidWcgd29ya2Fyb3VuZHMgKHVzZXMgSUUgY29uZGl0aW9uYWxzLCBub3QgVUEgc3RyaW5nLCBmb3Igcm9idXN0bmVzcykKICAgIC8vIE5vdGUgdGhhdCwgc2luY2UgSUUgMTAgZG9lcyBub3Qgc3VwcG9ydCBjb25kaXRpb25hbCBjb21tZW50cywgdGhlIGZvbGxvd2luZyBsb2dpYyBvbmx5IGRldGVjdHMgSUUgPCAxMC4KICAgIC8vIEN1cnJlbnRseSB0aGlzIGlzIGJ5IGRlc2lnbiwgc2luY2UgSUUgMTArIGJlaGF2ZXMgY29ycmVjdGx5IHdoZW4gdHJlYXRlZCBhcyBhIHN0YW5kYXJkIGJyb3dzZXIuCiAgICAvLyBJZiB0aGVyZSBpcyBhIGZ1dHVyZSBuZWVkIHRvIGRldGVjdCBzcGVjaWZpYyB2ZXJzaW9ucyBvZiBJRTEwKywgd2Ugd2lsbCBhbWVuZCB0aGlzLgogICAgdmFyIGllVmVyc2lvbiA9IGRvY3VtZW50ICYmIChmdW5jdGlvbigpIHsKICAgICAgICB2YXIgdmVyc2lvbiA9IDMsIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBpRWxlbXMgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2knKTsKCiAgICAgICAgLy8gS2VlcCBjb25zdHJ1Y3RpbmcgY29uZGl0aW9uYWwgSFRNTCBibG9ja3MgdW50aWwgd2UgaGl0IG9uZSB0aGF0IHJlc29sdmVzIHRvIGFuIGVtcHR5IGZyYWdtZW50CiAgICAgICAgd2hpbGUgKAogICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgZ3QgSUUgJyArICgrK3ZlcnNpb24pICsgJ10+PGk+PC9pPjwhW2VuZGlmXS0tPicsCiAgICAgICAgICAgIGlFbGVtc1swXQogICAgICAgICkge30KICAgICAgICByZXR1cm4gdmVyc2lvbiA+IDQgPyB2ZXJzaW9uIDogdW5kZWZpbmVkOwogICAgfSgpKTsKICAgIHZhciBpc0llNiA9IGllVmVyc2lvbiA9PT0gNiwKICAgICAgICBpc0llNyA9IGllVmVyc2lvbiA9PT0gNzsKCiAgICBmdW5jdGlvbiBpc0NsaWNrT25DaGVja2FibGVFbGVtZW50KGVsZW1lbnQsIGV2ZW50VHlwZSkgewogICAgICAgIGlmICgoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpICE9PSAiaW5wdXQiKSB8fCAhZWxlbWVudC50eXBlKSByZXR1cm4gZmFsc2U7CiAgICAgICAgaWYgKGV2ZW50VHlwZS50b0xvd2VyQ2FzZSgpICE9ICJjbGljayIpIHJldHVybiBmYWxzZTsKICAgICAgICB2YXIgaW5wdXRUeXBlID0gZWxlbWVudC50eXBlOwogICAgICAgIHJldHVybiAoaW5wdXRUeXBlID09ICJjaGVja2JveCIpIHx8IChpbnB1dFR5cGUgPT0gInJhZGlvIik7CiAgICB9CgogICAgcmV0dXJuIHsKICAgICAgICBmaWVsZHNJbmNsdWRlZFdpdGhKc29uUG9zdDogWydhdXRoZW50aWNpdHlfdG9rZW4nLCAvXl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuKF8uKik/JC9dLAoKICAgICAgICBhcnJheUZvckVhY2g6IGZ1bmN0aW9uIChhcnJheSwgYWN0aW9uKSB7CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKQogICAgICAgICAgICAgICAgYWN0aW9uKGFycmF5W2ldLCBpKTsKICAgICAgICB9LAoKICAgICAgICBhcnJheUluZGV4T2Y6IGZ1bmN0aW9uIChhcnJheSwgaXRlbSkgewogICAgICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09ICJmdW5jdGlvbiIpCiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgaXRlbSk7CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKQogICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID09PSBpdGVtKQogICAgICAgICAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgICByZXR1cm4gLTE7CiAgICAgICAgfSwKCiAgICAgICAgYXJyYXlGaXJzdDogZnVuY3Rpb24gKGFycmF5LCBwcmVkaWNhdGUsIHByZWRpY2F0ZU93bmVyKSB7CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKQogICAgICAgICAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHByZWRpY2F0ZU93bmVyLCBhcnJheVtpXSwgaSkpCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W2ldOwogICAgICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgICB9LAoKICAgICAgICBhcnJheVJlbW92ZUl0ZW06IGZ1bmN0aW9uIChhcnJheSwgaXRlbVRvUmVtb3ZlKSB7CiAgICAgICAgICAgIHZhciBpbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheSwgaXRlbVRvUmVtb3ZlKTsKICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkgewogICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMCkgewogICAgICAgICAgICAgICAgYXJyYXkuc2hpZnQoKTsKICAgICAgICAgICAgfQogICAgICAgIH0sCgogICAgICAgIGFycmF5R2V0RGlzdGluY3RWYWx1ZXM6IGZ1bmN0aW9uIChhcnJheSkgewogICAgICAgICAgICBhcnJheSA9IGFycmF5IHx8IFtdOwogICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKSB7CiAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKHJlc3VsdCwgYXJyYXlbaV0pIDwgMCkKICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhcnJheVtpXSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsKICAgICAgICB9LAoKICAgICAgICBhcnJheU1hcDogZnVuY3Rpb24gKGFycmF5LCBtYXBwaW5nKSB7CiAgICAgICAgICAgIGFycmF5ID0gYXJyYXkgfHwgW107CiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTsKICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspCiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtYXBwaW5nKGFycmF5W2ldLCBpKSk7CiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7CiAgICAgICAgfSwKCiAgICAgICAgYXJyYXlGaWx0ZXI6IGZ1bmN0aW9uIChhcnJheSwgcHJlZGljYXRlKSB7CiAgICAgICAgICAgIGFycmF5ID0gYXJyYXkgfHwgW107CiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTsKICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspCiAgICAgICAgICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2ldLCBpKSkKICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhcnJheVtpXSk7CiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7CiAgICAgICAgfSwKCiAgICAgICAgYXJyYXlQdXNoQWxsOiBmdW5jdGlvbiAoYXJyYXksIHZhbHVlc1RvUHVzaCkgewogICAgICAgICAgICBpZiAodmFsdWVzVG9QdXNoIGluc3RhbmNlb2YgQXJyYXkpCiAgICAgICAgICAgICAgICBhcnJheS5wdXNoLmFwcGx5KGFycmF5LCB2YWx1ZXNUb1B1c2gpOwogICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHZhbHVlc1RvUHVzaC5sZW5ndGg7IGkgPCBqOyBpKyspCiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZXNUb1B1c2hbaV0pOwogICAgICAgICAgICByZXR1cm4gYXJyYXk7CiAgICAgICAgfSwKCiAgICAgICAgYWRkT3JSZW1vdmVJdGVtOiBmdW5jdGlvbihhcnJheSwgdmFsdWUsIGluY2x1ZGVkKSB7CiAgICAgICAgICAgIHZhciBleGlzdGluZ0VudHJ5SW5kZXggPSBrby51dGlscy5hcnJheUluZGV4T2Yoa28udXRpbHMucGVla09ic2VydmFibGUoYXJyYXkpLCB2YWx1ZSk7CiAgICAgICAgICAgIGlmIChleGlzdGluZ0VudHJ5SW5kZXggPCAwKSB7CiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZWQpCiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGVkKQogICAgICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShleGlzdGluZ0VudHJ5SW5kZXgsIDEpOwogICAgICAgICAgICB9CiAgICAgICAgfSwKCiAgICAgICAgY2FuU2V0UHJvdG90eXBlOiBjYW5TZXRQcm90b3R5cGUsCgogICAgICAgIGV4dGVuZDogZXh0ZW5kLAoKICAgICAgICBzZXRQcm90b3R5cGVPZjogc2V0UHJvdG90eXBlT2YsCgogICAgICAgIHNldFByb3RvdHlwZU9mT3JFeHRlbmQ6IGNhblNldFByb3RvdHlwZSA/IHNldFByb3RvdHlwZU9mIDogZXh0ZW5kLAoKICAgICAgICBvYmplY3RGb3JFYWNoOiBvYmplY3RGb3JFYWNoLAoKICAgICAgICBvYmplY3RNYXA6IGZ1bmN0aW9uKHNvdXJjZSwgbWFwcGluZykgewogICAgICAgICAgICBpZiAoIXNvdXJjZSkKICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7CiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB7fTsKICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHsKICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHsKICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBtYXBwaW5nKHNvdXJjZVtwcm9wXSwgcHJvcCwgc291cmNlKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gdGFyZ2V0OwogICAgICAgIH0sCgogICAgICAgIGVtcHR5RG9tTm9kZTogZnVuY3Rpb24gKGRvbU5vZGUpIHsKICAgICAgICAgICAgd2hpbGUgKGRvbU5vZGUuZmlyc3RDaGlsZCkgewogICAgICAgICAgICAgICAga28ucmVtb3ZlTm9kZShkb21Ob2RlLmZpcnN0Q2hpbGQpOwogICAgICAgICAgICB9CiAgICAgICAgfSwKCiAgICAgICAgbW92ZUNsZWFuZWROb2Rlc1RvQ29udGFpbmVyRWxlbWVudDogZnVuY3Rpb24obm9kZXMpIHsKICAgICAgICAgICAgLy8gRW5zdXJlIGl0J3MgYSByZWFsIGFycmF5LCBhcyB3ZSdyZSBhYm91dCB0byByZXBhcmVudCB0aGUgbm9kZXMgYW5kCiAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlIHVuZGVybHlpbmcgY29sbGVjdGlvbiB0byBjaGFuZ2Ugd2hpbGUgd2UncmUgZG9pbmcgdGhhdC4KICAgICAgICAgICAgdmFyIG5vZGVzQXJyYXkgPSBrby51dGlscy5tYWtlQXJyYXkobm9kZXMpOwoKICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG5vZGVzQXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKSB7CiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoa28uY2xlYW5Ob2RlKG5vZGVzQXJyYXlbaV0pKTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gY29udGFpbmVyOwogICAgICAgIH0sCgogICAgICAgIGNsb25lTm9kZXM6IGZ1bmN0aW9uIChub2Rlc0FycmF5LCBzaG91bGRDbGVhbk5vZGVzKSB7CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gbm9kZXNBcnJheS5sZW5ndGgsIG5ld05vZGVzQXJyYXkgPSBbXTsgaSA8IGo7IGkrKykgewogICAgICAgICAgICAgICAgdmFyIGNsb25lZE5vZGUgPSBub2Rlc0FycmF5W2ldLmNsb25lTm9kZSh0cnVlKTsKICAgICAgICAgICAgICAgIG5ld05vZGVzQXJyYXkucHVzaChzaG91bGRDbGVhbk5vZGVzID8ga28uY2xlYW5Ob2RlKGNsb25lZE5vZGUpIDogY2xvbmVkTm9kZSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIG5ld05vZGVzQXJyYXk7CiAgICAgICAgfSwKCiAgICAgICAgc2V0RG9tTm9kZUNoaWxkcmVuOiBmdW5jdGlvbiAoZG9tTm9kZSwgY2hpbGROb2RlcykgewogICAgICAgICAgICBrby51dGlscy5lbXB0eURvbU5vZGUoZG9tTm9kZSk7CiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzKSB7CiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgajsgaSsrKQogICAgICAgICAgICAgICAgICAgIGRvbU5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2Rlc1tpXSk7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICByZXBsYWNlRG9tTm9kZXM6IGZ1bmN0aW9uIChub2RlVG9SZXBsYWNlT3JOb2RlQXJyYXksIG5ld05vZGVzQXJyYXkpIHsKICAgICAgICAgICAgdmFyIG5vZGVzVG9SZXBsYWNlQXJyYXkgPSBub2RlVG9SZXBsYWNlT3JOb2RlQXJyYXkubm9kZVR5cGUgPyBbbm9kZVRvUmVwbGFjZU9yTm9kZUFycmF5XSA6IG5vZGVUb1JlcGxhY2VPck5vZGVBcnJheTsKICAgICAgICAgICAgaWYgKG5vZGVzVG9SZXBsYWNlQXJyYXkubGVuZ3RoID4gMCkgewogICAgICAgICAgICAgICAgdmFyIGluc2VydGlvblBvaW50ID0gbm9kZXNUb1JlcGxhY2VBcnJheVswXTsKICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBpbnNlcnRpb25Qb2ludC5wYXJlbnROb2RlOwogICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBuZXdOb2Rlc0FycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKykKICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld05vZGVzQXJyYXlbaV0sIGluc2VydGlvblBvaW50KTsKICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gbm9kZXNUb1JlcGxhY2VBcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspIHsKICAgICAgICAgICAgICAgICAgICBrby5yZW1vdmVOb2RlKG5vZGVzVG9SZXBsYWNlQXJyYXlbaV0pOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfSwKCiAgICAgICAgZml4VXBDb250aW51b3VzTm9kZUFycmF5OiBmdW5jdGlvbihjb250aW51b3VzTm9kZUFycmF5LCBwYXJlbnROb2RlKSB7CiAgICAgICAgICAgIC8vIEJlZm9yZSBhY3Rpbmcgb24gYSBzZXQgb2Ygbm9kZXMgdGhhdCB3ZXJlIHByZXZpb3VzbHkgb3V0cHV0dGVkIGJ5IGEgdGVtcGxhdGUgZnVuY3Rpb24sIHdlIGhhdmUgdG8gcmVjb25jaWxlCiAgICAgICAgICAgIC8vIHRoZW0gYWdhaW5zdCB3aGF0IGlzIGluIHRoZSBET00gcmlnaHQgbm93LiBJdCBtYXkgYmUgdGhhdCBzb21lIG9mIHRoZSBub2RlcyBoYXZlIGFscmVhZHkgYmVlbiByZW1vdmVkLCBvciB0aGF0CiAgICAgICAgICAgIC8vIG5ldyBub2RlcyBtaWdodCBoYXZlIGJlZW4gaW5zZXJ0ZWQgaW4gdGhlIG1pZGRsZSwgZm9yIGV4YW1wbGUgYnkgYSBiaW5kaW5nLiBBbHNvLCB0aGVyZSBtYXkgcHJldmlvdXNseSBoYXZlIGJlZW4KICAgICAgICAgICAgLy8gbGVhZGluZyBjb21tZW50IG5vZGVzIChjcmVhdGVkIGJ5IHJld3JpdHRlbiBzdHJpbmctYmFzZWQgdGVtcGxhdGVzKSB0aGF0IGhhdmUgc2luY2UgYmVlbiByZW1vdmVkIGR1cmluZyBiaW5kaW5nLgogICAgICAgICAgICAvLyBTbywgdGhpcyBmdW5jdGlvbiB0cmFuc2xhdGVzIHRoZSBvbGQgIm1hcCIgb3V0cHV0IGFycmF5IGludG8gaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIHNldCBvZiBjdXJyZW50IERPTSBub2Rlcy4KICAgICAgICAgICAgLy8KICAgICAgICAgICAgLy8gUnVsZXM6CiAgICAgICAgICAgIC8vICAgW0FdIEFueSBsZWFkaW5nIG5vZGVzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgc2hvdWxkIGJlIGlnbm9yZWQKICAgICAgICAgICAgLy8gICAgICAgVGhlc2UgbW9zdCBsaWtlbHkgY29ycmVzcG9uZCB0byBtZW1vaXphdGlvbiBub2RlcyB0aGF0IHdlcmUgYWxyZWFkeSByZW1vdmVkIGR1cmluZyBiaW5kaW5nCiAgICAgICAgICAgIC8vICAgICAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvcHVsbC80NDAKICAgICAgICAgICAgLy8gICBbQl0gV2Ugd2FudCB0byBvdXRwdXQgYSBjb250aW51b3VzIHNlcmllcyBvZiBub2Rlcy4gU28sIGlnbm9yZSBhbnkgbm9kZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiByZW1vdmVkLAogICAgICAgICAgICAvLyAgICAgICBhbmQgaW5jbHVkZSBhbnkgbm9kZXMgdGhhdCBoYXZlIGJlZW4gaW5zZXJ0ZWQgYW1vbmcgdGhlIHByZXZpb3VzIGNvbGxlY3Rpb24KCiAgICAgICAgICAgIGlmIChjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aCkgewogICAgICAgICAgICAgICAgLy8gVGhlIHBhcmVudCBub2RlIGNhbiBiZSBhIHZpcnR1YWwgZWxlbWVudDsgc28gZ2V0IHRoZSByZWFsIHBhcmVudCBub2RlCiAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gKHBhcmVudE5vZGUubm9kZVR5cGUgPT09IDggJiYgcGFyZW50Tm9kZS5wYXJlbnROb2RlKSB8fCBwYXJlbnROb2RlOwoKICAgICAgICAgICAgICAgIC8vIFJ1bGUgW0FdCiAgICAgICAgICAgICAgICB3aGlsZSAoY29udGludW91c05vZGVBcnJheS5sZW5ndGggJiYgY29udGludW91c05vZGVBcnJheVswXS5wYXJlbnROb2RlICE9PSBwYXJlbnROb2RlKQogICAgICAgICAgICAgICAgICAgIGNvbnRpbnVvdXNOb2RlQXJyYXkuc2hpZnQoKTsKCiAgICAgICAgICAgICAgICAvLyBSdWxlIFtCXQogICAgICAgICAgICAgICAgaWYgKGNvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoID4gMSkgewogICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gY29udGludW91c05vZGVBcnJheVswXSwgbGFzdCA9IGNvbnRpbnVvdXNOb2RlQXJyYXlbY29udGludW91c05vZGVBcnJheS5sZW5ndGggLSAxXTsKICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHdpdGggdGhlIGFjdHVhbCBuZXcgY29udGludW91cyBub2RlIHNldAogICAgICAgICAgICAgICAgICAgIGNvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoID0gMDsKICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gbGFzdCkgewogICAgICAgICAgICAgICAgICAgICAgICBjb250aW51b3VzTm9kZUFycmF5LnB1c2goY3VycmVudCk7CiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRTaWJsaW5nOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQpIC8vIFdvbid0IGhhcHBlbiwgZXhjZXB0IGlmIHRoZSBkZXZlbG9wZXIgaGFzIG1hbnVhbGx5IHJlbW92ZWQgc29tZSBET00gZWxlbWVudHMgKHRoZW4gd2UncmUgaW4gYW4gdW5kZWZpbmVkIHNjZW5hcmlvKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBjb250aW51b3VzTm9kZUFycmF5LnB1c2gobGFzdCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIGNvbnRpbnVvdXNOb2RlQXJyYXk7CiAgICAgICAgfSwKCiAgICAgICAgc2V0T3B0aW9uTm9kZVNlbGVjdGlvblN0YXRlOiBmdW5jdGlvbiAob3B0aW9uTm9kZSwgaXNTZWxlY3RlZCkgewogICAgICAgICAgICAvLyBJRTYgc29tZXRpbWVzIHRocm93cyAidW5rbm93biBlcnJvciIgaWYgeW91IHRyeSB0byB3cml0ZSB0byAuc2VsZWN0ZWQgZGlyZWN0bHksIHdoZXJlYXMgRmlyZWZveCBzdHJ1Z2dsZXMgd2l0aCBzZXRBdHRyaWJ1dGUuIFBpY2sgb25lIGJhc2VkIG9uIGJyb3dzZXIuCiAgICAgICAgICAgIGlmIChpZVZlcnNpb24gPCA3KQogICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5zZXRBdHRyaWJ1dGUoInNlbGVjdGVkIiwgaXNTZWxlY3RlZCk7CiAgICAgICAgICAgIGVsc2UKICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuc2VsZWN0ZWQgPSBpc1NlbGVjdGVkOwogICAgICAgIH0sCgogICAgICAgIHN0cmluZ1RyaW06IGZ1bmN0aW9uIChzdHJpbmcpIHsKICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcnIDoKICAgICAgICAgICAgICAgIHN0cmluZy50cmltID8KICAgICAgICAgICAgICAgICAgICBzdHJpbmcudHJpbSgpIDoKICAgICAgICAgICAgICAgICAgICBzdHJpbmcudG9TdHJpbmcoKS5yZXBsYWNlKC9eW1xzXHhhMF0rfFtcc1x4YTBdKyQvZywgJycpOwogICAgICAgIH0sCgogICAgICAgIHN0cmluZ1N0YXJ0c1dpdGg6IGZ1bmN0aW9uIChzdHJpbmcsIHN0YXJ0c1dpdGgpIHsKICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nIHx8ICIiOwogICAgICAgICAgICBpZiAoc3RhcnRzV2l0aC5sZW5ndGggPiBzdHJpbmcubGVuZ3RoKQogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzdGFydHNXaXRoLmxlbmd0aCkgPT09IHN0YXJ0c1dpdGg7CiAgICAgICAgfSwKCiAgICAgICAgZG9tTm9kZUlzQ29udGFpbmVkQnk6IGZ1bmN0aW9uIChub2RlLCBjb250YWluZWRCeU5vZGUpIHsKICAgICAgICAgICAgaWYgKG5vZGUgPT09IGNvbnRhaW5lZEJ5Tm9kZSkKICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMTEpCiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEZpeGVzIGlzc3VlICMxMTYyIC0gY2FuJ3QgdXNlIG5vZGUuY29udGFpbnMgZm9yIGRvY3VtZW50IGZyYWdtZW50cyBvbiBJRTgKICAgICAgICAgICAgaWYgKGNvbnRhaW5lZEJ5Tm9kZS5jb250YWlucykKICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZWRCeU5vZGUuY29udGFpbnMobm9kZS5ub2RlVHlwZSA9PT0gMyA/IG5vZGUucGFyZW50Tm9kZSA6IG5vZGUpOwogICAgICAgICAgICBpZiAoY29udGFpbmVkQnlOb2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKQogICAgICAgICAgICAgICAgcmV0dXJuIChjb250YWluZWRCeU5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiAxNikgPT0gMTY7CiAgICAgICAgICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT0gY29udGFpbmVkQnlOb2RlKSB7CiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiAhIW5vZGU7CiAgICAgICAgfSwKCiAgICAgICAgZG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50OiBmdW5jdGlvbiAobm9kZSkgewogICAgICAgICAgICByZXR1cm4ga28udXRpbHMuZG9tTm9kZUlzQ29udGFpbmVkQnkobm9kZSwgbm9kZS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7CiAgICAgICAgfSwKCiAgICAgICAgYW55RG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50OiBmdW5jdGlvbihub2RlcykgewogICAgICAgICAgICByZXR1cm4gISFrby51dGlscy5hcnJheUZpcnN0KG5vZGVzLCBrby51dGlscy5kb21Ob2RlSXNBdHRhY2hlZFRvRG9jdW1lbnQpOwogICAgICAgIH0sCgogICAgICAgIHRhZ05hbWVMb3dlcjogZnVuY3Rpb24oZWxlbWVudCkgewogICAgICAgICAgICAvLyBGb3IgSFRNTCBlbGVtZW50cywgdGFnTmFtZSB3aWxsIGFsd2F5cyBiZSB1cHBlciBjYXNlOyBmb3IgWEhUTUwgZWxlbWVudHMsIGl0J2xsIGJlIGxvd2VyIGNhc2UuCiAgICAgICAgICAgIC8vIFBvc3NpYmxlIGZ1dHVyZSBvcHRpbWl6YXRpb246IElmIHdlIGtub3cgaXQncyBhbiBlbGVtZW50IGZyb20gYW4gWEhUTUwgZG9jdW1lbnQgKG5vdCBIVE1MKSwKICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBkbyB0aGUgLnRvTG93ZXJDYXNlKCkgYXMgaXQgd2lsbCBhbHdheXMgYmUgbG93ZXIgY2FzZSBhbnl3YXkuCiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQudGFnTmFtZSAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTsKICAgICAgICB9LAoKICAgICAgICByZWdpc3RlckV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlcikgewogICAgICAgICAgICB2YXIgbXVzdFVzZUF0dGFjaEV2ZW50ID0gaWVWZXJzaW9uICYmIGV2ZW50c1RoYXRNdXN0QmVSZWdpc3RlcmVkVXNpbmdBdHRhY2hFdmVudFtldmVudFR5cGVdOwogICAgICAgICAgICBpZiAoIW11c3RVc2VBdHRhY2hFdmVudCAmJiBqUXVlcnlJbnN0YW5jZSkgewogICAgICAgICAgICAgICAgalF1ZXJ5SW5zdGFuY2UoZWxlbWVudClbJ2JpbmQnXShldmVudFR5cGUsIGhhbmRsZXIpOwogICAgICAgICAgICB9IGVsc2UgaWYgKCFtdXN0VXNlQXR0YWNoRXZlbnQgJiYgdHlwZW9mIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA9PSAiZnVuY3Rpb24iKQogICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZmFsc2UpOwogICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5hdHRhY2hFdmVudCAhPSAidW5kZWZpbmVkIikgewogICAgICAgICAgICAgICAgdmFyIGF0dGFjaEV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkgeyBoYW5kbGVyLmNhbGwoZWxlbWVudCwgZXZlbnQpOyB9LAogICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50TmFtZSA9ICJvbiIgKyBldmVudFR5cGU7CiAgICAgICAgICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGF0dGFjaEV2ZW50TmFtZSwgYXR0YWNoRXZlbnRIYW5kbGVyKTsKCiAgICAgICAgICAgICAgICAvLyBJRSBkb2VzIG5vdCBkaXNwb3NlIGF0dGFjaEV2ZW50IGhhbmRsZXJzIGF1dG9tYXRpY2FsbHkgKHVubGlrZSB3aXRoIGFkZEV2ZW50TGlzdGVuZXIpCiAgICAgICAgICAgICAgICAvLyBzbyB0byBhdm9pZCBsZWFrcywgd2UgaGF2ZSB0byByZW1vdmUgdGhlbSBtYW51YWxseS4gU2VlIGJ1ZyAjODU2CiAgICAgICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKGVsZW1lbnQsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoYXR0YWNoRXZlbnROYW1lLCBhdHRhY2hFdmVudEhhbmRsZXIpOwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBhZGRFdmVudExpc3RlbmVyIG9yIGF0dGFjaEV2ZW50Iik7CiAgICAgICAgfSwKCiAgICAgICAgdHJpZ2dlckV2ZW50OiBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnRUeXBlKSB7CiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSkpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoImVsZW1lbnQgbXVzdCBiZSBhIERPTSBub2RlIHdoZW4gY2FsbGluZyB0cmlnZ2VyRXZlbnQiKTsKCiAgICAgICAgICAgIC8vIEZvciBjbGljayBldmVudHMgb24gY2hlY2tib3hlcyBhbmQgcmFkaW8gYnV0dG9ucywgalF1ZXJ5IHRvZ2dsZXMgdGhlIGVsZW1lbnQgY2hlY2tlZCBzdGF0ZSAqYWZ0ZXIqIHRoZQogICAgICAgICAgICAvLyBldmVudCBoYW5kbGVyIHJ1bnMgaW5zdGVhZCBvZiAqYmVmb3JlKi4gKFRoaXMgd2FzIGZpeGVkIGluIDEuOSBmb3IgY2hlY2tib3hlcyBidXQgbm90IGZvciByYWRpbyBidXR0b25zLikKICAgICAgICAgICAgLy8gSUUgZG9lc24ndCBjaGFuZ2UgdGhlIGNoZWNrZWQgc3RhdGUgd2hlbiB5b3UgdHJpZ2dlciB0aGUgY2xpY2sgZXZlbnQgdXNpbmcgImZpcmVFdmVudCIuCiAgICAgICAgICAgIC8vIEluIGJvdGggY2FzZXMsIHdlJ2xsIHVzZSB0aGUgY2xpY2sgbWV0aG9kIGluc3RlYWQuCiAgICAgICAgICAgIHZhciB1c2VDbGlja1dvcmthcm91bmQgPSBpc0NsaWNrT25DaGVja2FibGVFbGVtZW50KGVsZW1lbnQsIGV2ZW50VHlwZSk7CgogICAgICAgICAgICBpZiAoalF1ZXJ5SW5zdGFuY2UgJiYgIXVzZUNsaWNrV29ya2Fyb3VuZCkgewogICAgICAgICAgICAgICAgalF1ZXJ5SW5zdGFuY2UoZWxlbWVudClbJ3RyaWdnZXInXShldmVudFR5cGUpOwogICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFdmVudCA9PSAiZnVuY3Rpb24iKSB7CiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCA9PSAiZnVuY3Rpb24iKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50Q2F0ZWdvcnkgPSBrbm93bkV2ZW50VHlwZXNCeUV2ZW50TmFtZVtldmVudFR5cGVdIHx8ICJIVE1MRXZlbnRzIjsKICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChldmVudENhdGVnb3J5KTsKICAgICAgICAgICAgICAgICAgICBldmVudC5pbml0RXZlbnQoZXZlbnRUeXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBlbGVtZW50KTsKICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiVGhlIHN1cHBsaWVkIGVsZW1lbnQgZG9lc24ndCBzdXBwb3J0IGRpc3BhdGNoRXZlbnQiKTsKICAgICAgICAgICAgfSBlbHNlIGlmICh1c2VDbGlja1dvcmthcm91bmQgJiYgZWxlbWVudC5jbGljaykgewogICAgICAgICAgICAgICAgZWxlbWVudC5jbGljaygpOwogICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmZpcmVFdmVudCAhPSAidW5kZWZpbmVkIikgewogICAgICAgICAgICAgICAgZWxlbWVudC5maXJlRXZlbnQoIm9uIiArIGV2ZW50VHlwZSk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRyaWdnZXJpbmcgZXZlbnRzIik7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICB1bndyYXBPYnNlcnZhYmxlOiBmdW5jdGlvbiAodmFsdWUpIHsKICAgICAgICAgICAgcmV0dXJuIGtvLmlzT2JzZXJ2YWJsZSh2YWx1ZSkgPyB2YWx1ZSgpIDogdmFsdWU7CiAgICAgICAgfSwKCiAgICAgICAgcGVla09ic2VydmFibGU6IGZ1bmN0aW9uICh2YWx1ZSkgewogICAgICAgICAgICByZXR1cm4ga28uaXNPYnNlcnZhYmxlKHZhbHVlKSA/IHZhbHVlLnBlZWsoKSA6IHZhbHVlOwogICAgICAgIH0sCgogICAgICAgIHRvZ2dsZURvbU5vZGVDc3NDbGFzczogZnVuY3Rpb24gKG5vZGUsIGNsYXNzTmFtZXMsIHNob3VsZEhhdmVDbGFzcykgewogICAgICAgICAgICBpZiAoY2xhc3NOYW1lcykgewogICAgICAgICAgICAgICAgdmFyIGNzc0NsYXNzTmFtZVJlZ2V4ID0gL1xTKy9nLAogICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDbGFzc05hbWVzID0gbm9kZS5jbGFzc05hbWUubWF0Y2goY3NzQ2xhc3NOYW1lUmVnZXgpIHx8IFtdOwogICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGNsYXNzTmFtZXMubWF0Y2goY3NzQ2xhc3NOYW1lUmVnZXgpLCBmdW5jdGlvbihjbGFzc05hbWUpIHsKICAgICAgICAgICAgICAgICAgICBrby51dGlscy5hZGRPclJlbW92ZUl0ZW0oY3VycmVudENsYXNzTmFtZXMsIGNsYXNzTmFtZSwgc2hvdWxkSGF2ZUNsYXNzKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBjdXJyZW50Q2xhc3NOYW1lcy5qb2luKCIgIik7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICBzZXRUZXh0Q29udGVudDogZnVuY3Rpb24oZWxlbWVudCwgdGV4dENvbnRlbnQpIHsKICAgICAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh0ZXh0Q29udGVudCk7CiAgICAgICAgICAgIGlmICgodmFsdWUgPT09IG51bGwpIHx8ICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSkKICAgICAgICAgICAgICAgIHZhbHVlID0gIiI7CgogICAgICAgICAgICAvLyBXZSBuZWVkIHRoZXJlIHRvIGJlIGV4YWN0bHkgb25lIGNoaWxkOiBhIHRleHQgbm9kZS4KICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGNoaWxkcmVuLCBtb3JlIHRoYW4gb25lLCBvciBpZiBpdCdzIG5vdCBhIHRleHQgbm9kZSwKICAgICAgICAgICAgLy8gd2UnbGwgY2xlYXIgZXZlcnl0aGluZyBhbmQgY3JlYXRlIGEgc2luZ2xlIHRleHQgbm9kZS4KICAgICAgICAgICAgdmFyIGlubmVyVGV4dE5vZGUgPSBrby52aXJ0dWFsRWxlbWVudHMuZmlyc3RDaGlsZChlbGVtZW50KTsKICAgICAgICAgICAgaWYgKCFpbm5lclRleHROb2RlIHx8IGlubmVyVGV4dE5vZGUubm9kZVR5cGUgIT0gMyB8fCBrby52aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcoaW5uZXJUZXh0Tm9kZSkpIHsKICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW4oZWxlbWVudCwgW2VsZW1lbnQub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSldKTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlubmVyVGV4dE5vZGUuZGF0YSA9IHZhbHVlOwogICAgICAgICAgICB9CgogICAgICAgICAgICBrby51dGlscy5mb3JjZVJlZnJlc2goZWxlbWVudCk7CiAgICAgICAgfSwKCiAgICAgICAgc2V0RWxlbWVudE5hbWU6IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUpIHsKICAgICAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZTsKCiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgSUUgNi83IGlzc3VlCiAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy8xOTcKICAgICAgICAgICAgLy8gLSBodHRwOi8vd3d3Lm1hdHRzNDExLmNvbS9wb3N0L3NldHRpbmdfdGhlX25hbWVfYXR0cmlidXRlX2luX2llX2RvbS8KICAgICAgICAgICAgaWYgKGllVmVyc2lvbiA8PSA3KSB7CiAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubWVyZ2VBdHRyaWJ1dGVzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIjxpbnB1dCBuYW1lPSciICsgZWxlbWVudC5uYW1lICsgIicvPiIpLCBmYWxzZSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBjYXRjaChlKSB7fSAvLyBGb3IgSUU5IHdpdGggZG9jIG1vZGUgIklFOSBTdGFuZGFyZHMiIGFuZCBicm93c2VyIG1vZGUgIklFOSBDb21wYXRpYmlsaXR5IFZpZXciCiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICBmb3JjZVJlZnJlc2g6IGZ1bmN0aW9uKG5vZGUpIHsKICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgYW4gSUU5IHJlbmRlcmluZyBidWcgLSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzIwOQogICAgICAgICAgICBpZiAoaWVWZXJzaW9uID49IDkpIHsKICAgICAgICAgICAgICAgIC8vIEZvciB0ZXh0IG5vZGVzIGFuZCBjb21tZW50IG5vZGVzIChtb3N0IGxpa2VseSB2aXJ0dWFsIGVsZW1lbnRzKSwgd2Ugd2lsbCBoYXZlIHRvIHJlZnJlc2ggdGhlIGNvbnRhaW5lcgogICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBub2RlLm5vZGVUeXBlID09IDEgPyBub2RlIDogbm9kZS5wYXJlbnROb2RlOwogICAgICAgICAgICAgICAgaWYgKGVsZW0uc3R5bGUpCiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS56b29tID0gZWxlbS5zdHlsZS56b29tOwogICAgICAgICAgICB9CiAgICAgICAgfSwKCiAgICAgICAgZW5zdXJlU2VsZWN0RWxlbWVudElzUmVuZGVyZWRDb3JyZWN0bHk6IGZ1bmN0aW9uKHNlbGVjdEVsZW1lbnQpIHsKICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgSUU5IHJlbmRlcmluZyBidWcgLSBpdCBkb2Vzbid0IHJlbGlhYmx5IGRpc3BsYXkgYWxsIHRoZSB0ZXh0IGluIGR5bmFtaWNhbGx5LWFkZGVkIHNlbGVjdCBib3hlcyB1bmxlc3MgeW91IGZvcmNlIGl0IHRvIHJlLXJlbmRlciBieSB1cGRhdGluZyB0aGUgd2lkdGguCiAgICAgICAgICAgIC8vIChTZWUgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy8zMTIsIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTkwODQ5NC9zZWxlY3Qtb25seS1zaG93cy1maXJzdC1jaGFyLW9mLXNlbGVjdGVkLW9wdGlvbikKICAgICAgICAgICAgLy8gQWxzbyBmaXhlcyBJRTcgYW5kIElFOCBidWcgdGhhdCBjYXVzZXMgc2VsZWN0cyB0byBiZSB6ZXJvIHdpZHRoIGlmIGVuY2xvc2VkIGJ5ICdpZicgb3IgJ3dpdGgnLiAoU2VlIGlzc3VlICM4MzkpCiAgICAgICAgICAgIGlmIChpZVZlcnNpb24pIHsKICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbFdpZHRoID0gc2VsZWN0RWxlbWVudC5zdHlsZS53aWR0aDsKICAgICAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQuc3R5bGUud2lkdGggPSAwOwogICAgICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5zdHlsZS53aWR0aCA9IG9yaWdpbmFsV2lkdGg7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICByYW5nZTogZnVuY3Rpb24gKG1pbiwgbWF4KSB7CiAgICAgICAgICAgIG1pbiA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWluKTsKICAgICAgICAgICAgbWF4ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXgpOwogICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107CiAgICAgICAgICAgIGZvciAodmFyIGkgPSBtaW47IGkgPD0gbWF4OyBpKyspCiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTsKICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsKICAgICAgICB9LAoKICAgICAgICBtYWtlQXJyYXk6IGZ1bmN0aW9uKGFycmF5TGlrZU9iamVjdCkgewogICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXlMaWtlT2JqZWN0Lmxlbmd0aDsgaSA8IGo7IGkrKykgewogICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyYXlMaWtlT2JqZWN0W2ldKTsKICAgICAgICAgICAgfTsKICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsKICAgICAgICB9LAoKICAgICAgICBpc0llNiA6IGlzSWU2LAogICAgICAgIGlzSWU3IDogaXNJZTcsCiAgICAgICAgaWVWZXJzaW9uIDogaWVWZXJzaW9uLAoKICAgICAgICBnZXRGb3JtRmllbGRzOiBmdW5jdGlvbihmb3JtLCBmaWVsZE5hbWUpIHsKICAgICAgICAgICAgdmFyIGZpZWxkcyA9IGtvLnV0aWxzLm1ha2VBcnJheShmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJpbnB1dCIpKS5jb25jYXQoa28udXRpbHMubWFrZUFycmF5KGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoInRleHRhcmVhIikpKTsKICAgICAgICAgICAgdmFyIGlzTWF0Y2hpbmdGaWVsZCA9ICh0eXBlb2YgZmllbGROYW1lID09ICdzdHJpbmcnKQogICAgICAgICAgICAgICAgPyBmdW5jdGlvbihmaWVsZCkgeyByZXR1cm4gZmllbGQubmFtZSA9PT0gZmllbGROYW1lIH0KICAgICAgICAgICAgICAgIDogZnVuY3Rpb24oZmllbGQpIHsgcmV0dXJuIGZpZWxkTmFtZS50ZXN0KGZpZWxkLm5hbWUpIH07IC8vIFRyZWF0IGZpZWxkTmFtZSBhcyByZWdleCBvciBvYmplY3QgY29udGFpbmluZyBwcmVkaWNhdGUKICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTsKICAgICAgICAgICAgZm9yICh2YXIgaSA9IGZpZWxkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgewogICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2hpbmdGaWVsZChmaWVsZHNbaV0pKQogICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChmaWVsZHNbaV0pOwogICAgICAgICAgICB9OwogICAgICAgICAgICByZXR1cm4gbWF0Y2hlczsKICAgICAgICB9LAoKICAgICAgICBwYXJzZUpzb246IGZ1bmN0aW9uIChqc29uU3RyaW5nKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YganNvblN0cmluZyA9PSAic3RyaW5nIikgewogICAgICAgICAgICAgICAganNvblN0cmluZyA9IGtvLnV0aWxzLnN0cmluZ1RyaW0oanNvblN0cmluZyk7CiAgICAgICAgICAgICAgICBpZiAoanNvblN0cmluZykgewogICAgICAgICAgICAgICAgICAgIGlmIChKU09OICYmIEpTT04ucGFyc2UpIC8vIFVzZSBuYXRpdmUgcGFyc2luZyB3aGVyZSBhdmFpbGFibGUKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblN0cmluZyk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgRnVuY3Rpb24oInJldHVybiAiICsganNvblN0cmluZykpKCk7IC8vIEZhbGxiYWNrIG9uIGxlc3Mgc2FmZSBwYXJzaW5nIGZvciBvbGRlciBicm93c2VycwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBudWxsOwogICAgICAgIH0sCgogICAgICAgIHN0cmluZ2lmeUpzb246IGZ1bmN0aW9uIChkYXRhLCByZXBsYWNlciwgc3BhY2UpIHsgICAvLyByZXBsYWNlciBhbmQgc3BhY2UgYXJlIG9wdGlvbmFsCiAgICAgICAgICAgIGlmICghSlNPTiB8fCAhSlNPTi5zdHJpbmdpZnkpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzIik7CiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGRhdGEpLCByZXBsYWNlciwgc3BhY2UpOwogICAgICAgIH0sCgogICAgICAgIHBvc3RKc29uOiBmdW5jdGlvbiAodXJsT3JGb3JtLCBkYXRhLCBvcHRpb25zKSB7CiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OwogICAgICAgICAgICB2YXIgcGFyYW1zID0gb3B0aW9uc1sncGFyYW1zJ10gfHwge307CiAgICAgICAgICAgIHZhciBpbmNsdWRlRmllbGRzID0gb3B0aW9uc1snaW5jbHVkZUZpZWxkcyddIHx8IHRoaXMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3Q7CiAgICAgICAgICAgIHZhciB1cmwgPSB1cmxPckZvcm07CgogICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIGdpdmVuIGEgZm9ybSwgdXNlIGl0cyAnYWN0aW9uJyBVUkwgYW5kIHBpY2sgb3V0IGFueSByZXF1ZXN0ZWQgZmllbGQgdmFsdWVzCiAgICAgICAgICAgIGlmKCh0eXBlb2YgdXJsT3JGb3JtID09ICdvYmplY3QnKSAmJiAoa28udXRpbHMudGFnTmFtZUxvd2VyKHVybE9yRm9ybSkgPT09ICJmb3JtIikpIHsKICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEZvcm0gPSB1cmxPckZvcm07CiAgICAgICAgICAgICAgICB1cmwgPSBvcmlnaW5hbEZvcm0uYWN0aW9uOwogICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluY2x1ZGVGaWVsZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsKICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRzID0ga28udXRpbHMuZ2V0Rm9ybUZpZWxkcyhvcmlnaW5hbEZvcm0sIGluY2x1ZGVGaWVsZHNbaV0pOwogICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBmaWVsZHMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pCiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1tmaWVsZHNbal0ubmFtZV0gPSBmaWVsZHNbal0udmFsdWU7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGRhdGEgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGRhdGEpOwogICAgICAgICAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImZvcm0iKTsKICAgICAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gIm5vbmUiOwogICAgICAgICAgICBmb3JtLmFjdGlvbiA9IHVybDsKICAgICAgICAgICAgZm9ybS5tZXRob2QgPSAicG9zdCI7CiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7CiAgICAgICAgICAgICAgICAvLyBTaW5jZSAnZGF0YScgdGhpcyBpcyBhIG1vZGVsIG9iamVjdCwgd2UgaW5jbHVkZSBhbGwgcHJvcGVydGllcyBpbmNsdWRpbmcgdGhvc2UgaW5oZXJpdGVkIGZyb20gaXRzIHByb3RvdHlwZQogICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaW5wdXQiKTsKICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSAiaGlkZGVuIjsKICAgICAgICAgICAgICAgIGlucHV0Lm5hbWUgPSBrZXk7CiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGtvLnV0aWxzLnN0cmluZ2lmeUpzb24oa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShkYXRhW2tleV0pKTsKICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIG9iamVjdEZvckVhY2gocGFyYW1zLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7CiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJpbnB1dCIpOwogICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9ICJoaWRkZW4iOwogICAgICAgICAgICAgICAgaW5wdXQubmFtZSA9IGtleTsKICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7CiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7CiAgICAgICAgICAgIG9wdGlvbnNbJ3N1Ym1pdHRlciddID8gb3B0aW9uc1snc3VibWl0dGVyJ10oZm9ybSkgOiBmb3JtLnN1Ym1pdCgpOwogICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZvcm0pOyB9LCAwKTsKICAgICAgICB9CiAgICB9Cn0oKSk7Cgprby5leHBvcnRTeW1ib2woJ3V0aWxzJywga28udXRpbHMpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5Rm9yRWFjaCcsIGtvLnV0aWxzLmFycmF5Rm9yRWFjaCk7CmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuYXJyYXlGaXJzdCcsIGtvLnV0aWxzLmFycmF5Rmlyc3QpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5RmlsdGVyJywga28udXRpbHMuYXJyYXlGaWx0ZXIpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXMnLCBrby51dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheUluZGV4T2YnLCBrby51dGlscy5hcnJheUluZGV4T2YpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5TWFwJywga28udXRpbHMuYXJyYXlNYXApOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5UHVzaEFsbCcsIGtvLnV0aWxzLmFycmF5UHVzaEFsbCk7CmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuYXJyYXlSZW1vdmVJdGVtJywga28udXRpbHMuYXJyYXlSZW1vdmVJdGVtKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5leHRlbmQnLCBrby51dGlscy5leHRlbmQpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0Jywga28udXRpbHMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3QpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLmdldEZvcm1GaWVsZHMnLCBrby51dGlscy5nZXRGb3JtRmllbGRzKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5wZWVrT2JzZXJ2YWJsZScsIGtvLnV0aWxzLnBlZWtPYnNlcnZhYmxlKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5wb3N0SnNvbicsIGtvLnV0aWxzLnBvc3RKc29uKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5wYXJzZUpzb24nLCBrby51dGlscy5wYXJzZUpzb24pOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyJywga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLnN0cmluZ2lmeUpzb24nLCBrby51dGlscy5zdHJpbmdpZnlKc29uKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5yYW5nZScsIGtvLnV0aWxzLnJhbmdlKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3MnLCBrby51dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3MpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLnRyaWdnZXJFdmVudCcsIGtvLnV0aWxzLnRyaWdnZXJFdmVudCk7CmtvLmV4cG9ydFN5bWJvbCgndXRpbHMudW53cmFwT2JzZXJ2YWJsZScsIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLm9iamVjdEZvckVhY2gnLCBrby51dGlscy5vYmplY3RGb3JFYWNoKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5hZGRPclJlbW92ZUl0ZW0nLCBrby51dGlscy5hZGRPclJlbW92ZUl0ZW0pOwprby5leHBvcnRTeW1ib2woJ3Vud3JhcCcsIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUpOyAvLyBDb252ZW5pZW50IHNob3J0aGFuZCwgYmVjYXVzZSB0aGlzIGlzIHVzZWQgc28gY29tbW9ubHkKCmlmICghRnVuY3Rpb24ucHJvdG90eXBlWydiaW5kJ10pIHsKICAgIC8vIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGlzIGEgc3RhbmRhcmQgcGFydCBvZiBFQ01BU2NyaXB0IDV0aCBFZGl0aW9uIChEZWNlbWJlciAyMDA5LCBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvcHVibGljYXRpb25zL2ZpbGVzL0VDTUEtU1QvRUNNQS0yNjIucGRmKQogICAgLy8gSW4gY2FzZSB0aGUgYnJvd3NlciBkb2Vzbid0IGltcGxlbWVudCBpdCBuYXRpdmVseSwgcHJvdmlkZSBhIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24uIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIG9uZSBpbiBwcm90b3R5cGUuanMKICAgIEZ1bmN0aW9uLnByb3RvdHlwZVsnYmluZCddID0gZnVuY3Rpb24gKG9iamVjdCkgewogICAgICAgIHZhciBvcmlnaW5hbEZ1bmN0aW9uID0gdGhpcywgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIG9iamVjdCA9IGFyZ3Muc2hpZnQoKTsKICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgewogICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvbi5hcHBseShvYmplY3QsIGFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsKICAgICAgICB9OwogICAgfTsKfQoKa28udXRpbHMuZG9tRGF0YSA9IG5ldyAoZnVuY3Rpb24gKCkgewogICAgdmFyIHVuaXF1ZUlkID0gMDsKICAgIHZhciBkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lID0gIl9fa29fXyIgKyAobmV3IERhdGUpLmdldFRpbWUoKTsKICAgIHZhciBkYXRhU3RvcmUgPSB7fTsKCiAgICBmdW5jdGlvbiBnZXRBbGwobm9kZSwgY3JlYXRlSWZOb3RGb3VuZCkgewogICAgICAgIHZhciBkYXRhU3RvcmVLZXkgPSBub2RlW2RhdGFTdG9yZUtleUV4cGFuZG9Qcm9wZXJ0eU5hbWVdOwogICAgICAgIHZhciBoYXNFeGlzdGluZ0RhdGFTdG9yZSA9IGRhdGFTdG9yZUtleSAmJiAoZGF0YVN0b3JlS2V5ICE9PSAibnVsbCIpICYmIGRhdGFTdG9yZVtkYXRhU3RvcmVLZXldOwogICAgICAgIGlmICghaGFzRXhpc3RpbmdEYXRhU3RvcmUpIHsKICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKQogICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsKICAgICAgICAgICAgZGF0YVN0b3JlS2V5ID0gbm9kZVtkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lXSA9ICJrbyIgKyB1bmlxdWVJZCsrOwogICAgICAgICAgICBkYXRhU3RvcmVbZGF0YVN0b3JlS2V5XSA9IHt9OwogICAgICAgIH0KICAgICAgICByZXR1cm4gZGF0YVN0b3JlW2RhdGFTdG9yZUtleV07CiAgICB9CgogICAgcmV0dXJuIHsKICAgICAgICBnZXQ6IGZ1bmN0aW9uIChub2RlLCBrZXkpIHsKICAgICAgICAgICAgdmFyIGFsbERhdGFGb3JOb2RlID0gZ2V0QWxsKG5vZGUsIGZhbHNlKTsKICAgICAgICAgICAgcmV0dXJuIGFsbERhdGFGb3JOb2RlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhbGxEYXRhRm9yTm9kZVtrZXldOwogICAgICAgIH0sCiAgICAgICAgc2V0OiBmdW5jdGlvbiAobm9kZSwga2V5LCB2YWx1ZSkgewogICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgewogICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBkb21EYXRhIGtleSBpZiB3ZSBhcmUgYWN0dWFsbHkgZGVsZXRpbmcgYSB2YWx1ZQogICAgICAgICAgICAgICAgaWYgKGdldEFsbChub2RlLCBmYWxzZSkgPT09IHVuZGVmaW5lZCkKICAgICAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICAgICAgdmFyIGFsbERhdGFGb3JOb2RlID0gZ2V0QWxsKG5vZGUsIHRydWUpOwogICAgICAgICAgICBhbGxEYXRhRm9yTm9kZVtrZXldID0gdmFsdWU7CiAgICAgICAgfSwKICAgICAgICBjbGVhcjogZnVuY3Rpb24gKG5vZGUpIHsKICAgICAgICAgICAgdmFyIGRhdGFTdG9yZUtleSA9IG5vZGVbZGF0YVN0b3JlS2V5RXhwYW5kb1Byb3BlcnR5TmFtZV07CiAgICAgICAgICAgIGlmIChkYXRhU3RvcmVLZXkpIHsKICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhU3RvcmVbZGF0YVN0b3JlS2V5XTsKICAgICAgICAgICAgICAgIG5vZGVbZGF0YVN0b3JlS2V5RXhwYW5kb1Byb3BlcnR5TmFtZV0gPSBudWxsOwogICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEV4cG9zaW5nICJkaWQgY2xlYW4iIGZsYWcgcHVyZWx5IHNvIHNwZWNzIGNhbiBpbmZlciB3aGV0aGVyIHRoaW5ncyBoYXZlIGJlZW4gY2xlYW5lZCB1cCBhcyBpbnRlbmRlZAogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9LAoKICAgICAgICBuZXh0S2V5OiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIHJldHVybiAodW5pcXVlSWQrKykgKyBkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lOwogICAgICAgIH0KICAgIH07Cn0pKCk7Cgprby5leHBvcnRTeW1ib2woJ3V0aWxzLmRvbURhdGEnLCBrby51dGlscy5kb21EYXRhKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5kb21EYXRhLmNsZWFyJywga28udXRpbHMuZG9tRGF0YS5jbGVhcik7IC8vIEV4cG9ydGluZyBvbmx5IHNvIHNwZWNzIGNhbiBjbGVhciB1cCBhZnRlciB0aGVtc2VsdmVzIGZ1bGx5Cgprby51dGlscy5kb21Ob2RlRGlzcG9zYWwgPSBuZXcgKGZ1bmN0aW9uICgpIHsKICAgIHZhciBkb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7CiAgICB2YXIgY2xlYW5hYmxlTm9kZVR5cGVzID0geyAxOiB0cnVlLCA4OiB0cnVlLCA5OiB0cnVlIH07ICAgICAgIC8vIEVsZW1lbnQsIENvbW1lbnQsIERvY3VtZW50CiAgICB2YXIgY2xlYW5hYmxlTm9kZVR5cGVzV2l0aERlc2NlbmRhbnRzID0geyAxOiB0cnVlLCA5OiB0cnVlIH07IC8vIEVsZW1lbnQsIERvY3VtZW50CgogICAgZnVuY3Rpb24gZ2V0RGlzcG9zZUNhbGxiYWNrc0NvbGxlY3Rpb24obm9kZSwgY3JlYXRlSWZOb3RGb3VuZCkgewogICAgICAgIHZhciBhbGxEaXNwb3NlQ2FsbGJhY2tzID0ga28udXRpbHMuZG9tRGF0YS5nZXQobm9kZSwgZG9tRGF0YUtleSk7CiAgICAgICAgaWYgKChhbGxEaXNwb3NlQ2FsbGJhY2tzID09PSB1bmRlZmluZWQpICYmIGNyZWF0ZUlmTm90Rm91bmQpIHsKICAgICAgICAgICAgYWxsRGlzcG9zZUNhbGxiYWNrcyA9IFtdOwogICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChub2RlLCBkb21EYXRhS2V5LCBhbGxEaXNwb3NlQ2FsbGJhY2tzKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGFsbERpc3Bvc2VDYWxsYmFja3M7CiAgICB9CiAgICBmdW5jdGlvbiBkZXN0cm95Q2FsbGJhY2tzQ29sbGVjdGlvbihub2RlKSB7CiAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQobm9kZSwgZG9tRGF0YUtleSwgdW5kZWZpbmVkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjbGVhblNpbmdsZU5vZGUobm9kZSkgewogICAgICAgIC8vIFJ1biBhbGwgdGhlIGRpc3Bvc2UgY2FsbGJhY2tzCiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIGZhbHNlKTsKICAgICAgICBpZiAoY2FsbGJhY2tzKSB7CiAgICAgICAgICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTsgLy8gQ2xvbmUsIGFzIHRoZSBhcnJheSBtYXkgYmUgbW9kaWZpZWQgZHVyaW5nIGl0ZXJhdGlvbiAodHlwaWNhbGx5LCBjYWxsYmFja3Mgd2lsbCByZW1vdmUgdGhlbXNlbHZlcykKICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspCiAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0obm9kZSk7CiAgICAgICAgfQoKICAgICAgICAvLyBFcmFzZSB0aGUgRE9NIGRhdGEKICAgICAgICBrby51dGlscy5kb21EYXRhLmNsZWFyKG5vZGUpOwoKICAgICAgICAvLyBQZXJmb3JtIGNsZWFudXAgbmVlZGVkIGJ5IGV4dGVybmFsIGxpYnJhcmllcyAoY3VycmVudGx5IG9ubHkgalF1ZXJ5LCBidXQgY2FuIGJlIGV4dGVuZGVkKQogICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbFsiY2xlYW5FeHRlcm5hbERhdGEiXShub2RlKTsKCiAgICAgICAgLy8gQ2xlYXIgYW55IGltbWVkaWF0ZS1jaGlsZCBjb21tZW50IG5vZGVzLCBhcyB0aGVzZSB3b3VsZG4ndCBoYXZlIGJlZW4gZm91bmQgYnkKICAgICAgICAvLyBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCIqIikgaW4gY2xlYW5Ob2RlKCkgKGNvbW1lbnQgbm9kZXMgYXJlbid0IGVsZW1lbnRzKQogICAgICAgIGlmIChjbGVhbmFibGVOb2RlVHlwZXNXaXRoRGVzY2VuZGFudHNbbm9kZS5ub2RlVHlwZV0pCiAgICAgICAgICAgIGNsZWFuSW1tZWRpYXRlQ29tbWVudFR5cGVDaGlsZHJlbihub2RlKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjbGVhbkltbWVkaWF0ZUNvbW1lbnRUeXBlQ2hpbGRyZW4obm9kZVdpdGhDaGlsZHJlbikgewogICAgICAgIHZhciBjaGlsZCwgbmV4dENoaWxkID0gbm9kZVdpdGhDaGlsZHJlbi5maXJzdENoaWxkOwogICAgICAgIHdoaWxlIChjaGlsZCA9IG5leHRDaGlsZCkgewogICAgICAgICAgICBuZXh0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZzsKICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSA4KQogICAgICAgICAgICAgICAgY2xlYW5TaW5nbGVOb2RlKGNoaWxkKTsKICAgICAgICB9CiAgICB9CgogICAgcmV0dXJuIHsKICAgICAgICBhZGREaXNwb3NlQ2FsbGJhY2sgOiBmdW5jdGlvbihub2RlLCBjYWxsYmFjaykgewogICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9ICJmdW5jdGlvbiIpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbiIpOwogICAgICAgICAgICBnZXREaXNwb3NlQ2FsbGJhY2tzQ29sbGVjdGlvbihub2RlLCB0cnVlKS5wdXNoKGNhbGxiYWNrKTsKICAgICAgICB9LAoKICAgICAgICByZW1vdmVEaXNwb3NlQ2FsbGJhY2sgOiBmdW5jdGlvbihub2RlLCBjYWxsYmFjaykgewogICAgICAgICAgICB2YXIgY2FsbGJhY2tzQ29sbGVjdGlvbiA9IGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIGZhbHNlKTsKICAgICAgICAgICAgaWYgKGNhbGxiYWNrc0NvbGxlY3Rpb24pIHsKICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UmVtb3ZlSXRlbShjYWxsYmFja3NDb2xsZWN0aW9uLCBjYWxsYmFjayk7CiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzQ29sbGVjdGlvbi5sZW5ndGggPT0gMCkKICAgICAgICAgICAgICAgICAgICBkZXN0cm95Q2FsbGJhY2tzQ29sbGVjdGlvbihub2RlKTsKICAgICAgICAgICAgfQogICAgICAgIH0sCgogICAgICAgIGNsZWFuTm9kZSA6IGZ1bmN0aW9uKG5vZGUpIHsKICAgICAgICAgICAgLy8gRmlyc3QgY2xlYW4gdGhpcyBub2RlLCB3aGVyZSBhcHBsaWNhYmxlCiAgICAgICAgICAgIGlmIChjbGVhbmFibGVOb2RlVHlwZXNbbm9kZS5ub2RlVHlwZV0pIHsKICAgICAgICAgICAgICAgIGNsZWFuU2luZ2xlTm9kZShub2RlKTsKCiAgICAgICAgICAgICAgICAvLyAuLi4gdGhlbiBpdHMgZGVzY2VuZGFudHMsIHdoZXJlIGFwcGxpY2FibGUKICAgICAgICAgICAgICAgIGlmIChjbGVhbmFibGVOb2RlVHlwZXNXaXRoRGVzY2VuZGFudHNbbm9kZS5ub2RlVHlwZV0pIHsKICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgZGVzY2VuZGFudHMgbGlzdCBpbiBjYXNlIGl0IGNoYW5nZXMgZHVyaW5nIGl0ZXJhdGlvbgogICAgICAgICAgICAgICAgICAgIHZhciBkZXNjZW5kYW50cyA9IFtdOwogICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UHVzaEFsbChkZXNjZW5kYW50cywgbm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgiKiIpKTsKICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGRlc2NlbmRhbnRzLmxlbmd0aDsgaSA8IGo7IGkrKykKICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5TaW5nbGVOb2RlKGRlc2NlbmRhbnRzW2ldKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gbm9kZTsKICAgICAgICB9LAoKICAgICAgICByZW1vdmVOb2RlIDogZnVuY3Rpb24obm9kZSkgewogICAgICAgICAgICBrby5jbGVhbk5vZGUobm9kZSk7CiAgICAgICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpCiAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7CiAgICAgICAgfSwKCiAgICAgICAgImNsZWFuRXh0ZXJuYWxEYXRhIiA6IGZ1bmN0aW9uIChub2RlKSB7CiAgICAgICAgICAgIC8vIFNwZWNpYWwgc3VwcG9ydCBmb3IgalF1ZXJ5IGhlcmUgYmVjYXVzZSBpdCdzIHNvIGNvbW1vbmx5IHVzZWQuCiAgICAgICAgICAgIC8vIE1hbnkgalF1ZXJ5IHBsdWdpbnMgKGluY2x1ZGluZyBqcXVlcnkudG1wbCkgc3RvcmUgZGF0YSB1c2luZyBqUXVlcnkncyBlcXVpdmFsZW50IG9mIGRvbURhdGEKICAgICAgICAgICAgLy8gc28gbm90aWZ5IGl0IHRvIHRlYXIgZG93biBhbnkgcmVzb3VyY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbm9kZSAmIGRlc2NlbmRhbnRzIGhlcmUuCiAgICAgICAgICAgIGlmIChqUXVlcnlJbnN0YW5jZSAmJiAodHlwZW9mIGpRdWVyeUluc3RhbmNlWydjbGVhbkRhdGEnXSA9PSAiZnVuY3Rpb24iKSkKICAgICAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlWydjbGVhbkRhdGEnXShbbm9kZV0pOwogICAgICAgIH0KICAgIH0KfSkoKTsKa28uY2xlYW5Ob2RlID0ga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmNsZWFuTm9kZTsgLy8gU2hvcnRoYW5kIG5hbWUgZm9yIGNvbnZlbmllbmNlCmtvLnJlbW92ZU5vZGUgPSBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwucmVtb3ZlTm9kZTsgLy8gU2hvcnRoYW5kIG5hbWUgZm9yIGNvbnZlbmllbmNlCmtvLmV4cG9ydFN5bWJvbCgnY2xlYW5Ob2RlJywga28uY2xlYW5Ob2RlKTsKa28uZXhwb3J0U3ltYm9sKCdyZW1vdmVOb2RlJywga28ucmVtb3ZlTm9kZSk7CmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZG9tTm9kZURpc3Bvc2FsJywga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsKTsKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrJywga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayk7CmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFjaycsIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2spOwooZnVuY3Rpb24gKCkgewogICAgdmFyIGxlYWRpbmdDb21tZW50UmVnZXggPSAvXihccyopPCEtLSguKj8pLS0+LzsKCiAgICBmdW5jdGlvbiBzaW1wbGVIdG1sUGFyc2UoaHRtbCkgewogICAgICAgIC8vIEJhc2VkIG9uIGpRdWVyeSdzICJjbGVhbiIgZnVuY3Rpb24sIGJ1dCBvbmx5IGFjY291bnRpbmcgZm9yIHRhYmxlLXJlbGF0ZWQgZWxlbWVudHMuCiAgICAgICAgLy8gSWYgeW91IGhhdmUgcmVmZXJlbmNlZCBqUXVlcnksIHRoaXMgd29uJ3QgYmUgdXNlZCBhbnl3YXkgLSBLTyB3aWxsIHVzZSBqUXVlcnkncyAiY2xlYW4iIGZ1bmN0aW9uIGRpcmVjdGx5CgogICAgICAgIC8vIE5vdGUgdGhhdCB0aGVyZSdzIHN0aWxsIGFuIGlzc3VlIGluIElFIDwgOSB3aGVyZWJ5IGl0IHdpbGwgZGlzY2FyZCBjb21tZW50IG5vZGVzIHRoYXQgYXJlIHRoZSBmaXJzdCBjaGlsZCBvZgogICAgICAgIC8vIGEgZGVzY2VuZGFudCBub2RlLiBGb3IgZXhhbXBsZTogIjxkaXY+PCEtLSBteWNvbW1lbnQgLS0+YWJjPC9kaXY+IiB3aWxsIGdldCBwYXJzZWQgYXMgIjxkaXY+YWJjPC9kaXY+IgogICAgICAgIC8vIFRoaXMgd29uJ3QgYWZmZWN0IGFueW9uZSB3aG8gaGFzIHJlZmVyZW5jZWQgalF1ZXJ5LCBhbmQgdGhlcmUncyBhbHdheXMgdGhlIHdvcmthcm91bmQgb2YgaW5zZXJ0aW5nIGEgZHVtbXkgbm9kZQogICAgICAgIC8vIChwb3NzaWJseSBhIHRleHQgbm9kZSkgaW4gZnJvbnQgb2YgdGhlIGNvbW1lbnQuIFNvLCBLTyBkb2VzIG5vdCBhdHRlbXB0IHRvIHdvcmthcm91bmQgdGhpcyBJRSBpc3N1ZSBhdXRvbWF0aWNhbGx5IGF0IHByZXNlbnQuCgogICAgICAgIC8vIFRyaW0gd2hpdGVzcGFjZSwgb3RoZXJ3aXNlIGluZGV4T2Ygd29uJ3Qgd29yayBhcyBleHBlY3RlZAogICAgICAgIHZhciB0YWdzID0ga28udXRpbHMuc3RyaW5nVHJpbShodG1sKS50b0xvd2VyQ2FzZSgpLCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsKCiAgICAgICAgLy8gRmluZHMgdGhlIGZpcnN0IG1hdGNoIGZyb20gdGhlIGxlZnQgY29sdW1uLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyAid3JhcCIgZGF0YSBmcm9tIHRoZSByaWdodCBjb2x1bW4KICAgICAgICB2YXIgd3JhcCA9IHRhZ3MubWF0Y2goL148KHRoZWFkfHRib2R5fHRmb290KS8pICAgICAgICAgICAgICAmJiBbMSwgIjx0YWJsZT4iLCAiPC90YWJsZT4iXSB8fAogICAgICAgICAgICAgICAgICAgIXRhZ3MuaW5kZXhPZigiPHRyIikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIFsyLCAiPHRhYmxlPjx0Ym9keT4iLCAiPC90Ym9keT48L3RhYmxlPiJdIHx8CiAgICAgICAgICAgICAgICAgICAoIXRhZ3MuaW5kZXhPZigiPHRkIikgfHwgIXRhZ3MuaW5kZXhPZigiPHRoIikpICAgJiYgWzMsICI8dGFibGU+PHRib2R5Pjx0cj4iLCAiPC90cj48L3Rib2R5PjwvdGFibGU+Il0gfHwKICAgICAgICAgICAgICAgICAgIC8qIGFueXRoaW5nIGVsc2UgKi8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMCwgIiIsICIiXTsKCiAgICAgICAgLy8gR28gdG8gaHRtbCBhbmQgYmFjaywgdGhlbiBwZWVsIG9mZiBleHRyYSB3cmFwcGVycwogICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBhbHdheXMgcHJlZml4IHdpdGggc29tZSBkdW1teSB0ZXh0LCBiZWNhdXNlIG90aGVyd2lzZSwgSUU8OSB3aWxsIHN0cmlwIG91dCBsZWFkaW5nIGNvbW1lbnQgbm9kZXMgaW4gZGVzY2VuZGFudHMuIFRvdGFsIG1hZG5lc3MuCiAgICAgICAgdmFyIG1hcmt1cCA9ICJpZ25vcmVkPGRpdj4iICsgd3JhcFsxXSArIGh0bWwgKyB3cmFwWzJdICsgIjwvZGl2PiI7CiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ2lubmVyU2hpdiddID09ICJmdW5jdGlvbiIpIHsKICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHdpbmRvd1snaW5uZXJTaGl2J10obWFya3VwKSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cDsKICAgICAgICB9CgogICAgICAgIC8vIE1vdmUgdG8gdGhlIHJpZ2h0IGRlcHRoCiAgICAgICAgd2hpbGUgKHdyYXBbMF0tLSkKICAgICAgICAgICAgZGl2ID0gZGl2Lmxhc3RDaGlsZDsKCiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLm1ha2VBcnJheShkaXYubGFzdENoaWxkLmNoaWxkTm9kZXMpOwogICAgfQoKICAgIGZ1bmN0aW9uIGpRdWVyeUh0bWxQYXJzZShodG1sKSB7CiAgICAgICAgLy8galF1ZXJ5J3MgInBhcnNlSFRNTCIgZnVuY3Rpb24gd2FzIGludHJvZHVjZWQgaW4galF1ZXJ5IDEuOC4wIGFuZCBpcyBhIGRvY3VtZW50ZWQgcHVibGljIEFQSS4KICAgICAgICBpZiAoalF1ZXJ5SW5zdGFuY2VbJ3BhcnNlSFRNTCddKSB7CiAgICAgICAgICAgIHJldHVybiBqUXVlcnlJbnN0YW5jZVsncGFyc2VIVE1MJ10oaHRtbCkgfHwgW107IC8vIEVuc3VyZSB3ZSBhbHdheXMgcmV0dXJuIGFuIGFycmF5IGFuZCBuZXZlciBudWxsCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gRm9yIGpRdWVyeSA8IDEuOC4wLCB3ZSBmYWxsIGJhY2sgb24gdGhlIHVuZG9jdW1lbnRlZCBpbnRlcm5hbCAiY2xlYW4iIGZ1bmN0aW9uLgogICAgICAgICAgICB2YXIgZWxlbXMgPSBqUXVlcnlJbnN0YW5jZVsnY2xlYW4nXShbaHRtbF0pOwoKICAgICAgICAgICAgLy8gQXMgb2YgalF1ZXJ5IDEuNy4xLCBqUXVlcnkgcGFyc2VzIHRoZSBIVE1MIGJ5IGFwcGVuZGluZyBpdCB0byBzb21lIGR1bW15IHBhcmVudCBub2RlcyBoZWxkIGluIGFuIGluLW1lbW9yeSBkb2N1bWVudCBmcmFnbWVudC4KICAgICAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgaXQgbmV2ZXIgY2xlYXJzIHRoZSBkdW1teSBwYXJlbnQgbm9kZXMgZnJvbSB0aGUgZG9jdW1lbnQgZnJhZ21lbnQsIHNvIGl0IGxlYWtzIG1lbW9yeSBvdmVyIHRpbWUuCiAgICAgICAgICAgIC8vIEZpeCB0aGlzIGJ5IGZpbmRpbmcgdGhlIHRvcC1tb3N0IGR1bW15IHBhcmVudCBlbGVtZW50LCBhbmQgZGV0YWNoaW5nIGl0IGZyb20gaXRzIG93bmVyIGZyYWdtZW50LgogICAgICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXNbMF0pIHsKICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIHRvcC1tb3N0IHBhcmVudCBlbGVtZW50IHRoYXQncyBhIGRpcmVjdCBjaGlsZCBvZiBhIGRvY3VtZW50IGZyYWdtZW50CiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGVsZW1zWzBdOwogICAgICAgICAgICAgICAgd2hpbGUgKGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnBhcmVudE5vZGUubm9kZVR5cGUgIT09IDExIC8qIGkuZS4sIERvY3VtZW50RnJhZ21lbnQgKi8pCiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTsKICAgICAgICAgICAgICAgIC8vIC4uLiB0aGVuIGRldGFjaCBpdAogICAgICAgICAgICAgICAgaWYgKGVsZW0ucGFyZW50Tm9kZSkKICAgICAgICAgICAgICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHJldHVybiBlbGVtczsKICAgICAgICB9CiAgICB9CgogICAga28udXRpbHMucGFyc2VIdG1sRnJhZ21lbnQgPSBmdW5jdGlvbihodG1sKSB7CiAgICAgICAgcmV0dXJuIGpRdWVyeUluc3RhbmNlID8galF1ZXJ5SHRtbFBhcnNlKGh0bWwpICAgLy8gQXMgYmVsb3csIGJlbmVmaXQgZnJvbSBqUXVlcnkncyBvcHRpbWlzYXRpb25zIHdoZXJlIHBvc3NpYmxlCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2ltcGxlSHRtbFBhcnNlKGh0bWwpOyAgLy8gLi4uIG90aGVyd2lzZSwgdGhpcyBzaW1wbGUgbG9naWMgd2lsbCBkbyBpbiBtb3N0IGNvbW1vbiBjYXNlcy4KICAgIH07CgogICAga28udXRpbHMuc2V0SHRtbCA9IGZ1bmN0aW9uKG5vZGUsIGh0bWwpIHsKICAgICAgICBrby51dGlscy5lbXB0eURvbU5vZGUobm9kZSk7CgogICAgICAgIC8vIFRoZXJlJ3Mgbm8gbGVnaXRpbWF0ZSByZWFzb24gdG8gZGlzcGxheSBhIHN0cmluZ2lmaWVkIG9ic2VydmFibGUgd2l0aG91dCB1bndyYXBwaW5nIGl0LCBzbyB3ZSdsbCB1bndyYXAgaXQKICAgICAgICBodG1sID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShodG1sKTsKCiAgICAgICAgaWYgKChodG1sICE9PSBudWxsKSAmJiAoaHRtbCAhPT0gdW5kZWZpbmVkKSkgewogICAgICAgICAgICBpZiAodHlwZW9mIGh0bWwgIT0gJ3N0cmluZycpCiAgICAgICAgICAgICAgICBodG1sID0gaHRtbC50b1N0cmluZygpOwoKICAgICAgICAgICAgLy8galF1ZXJ5IGNvbnRhaW5zIGEgbG90IG9mIHNvcGhpc3RpY2F0ZWQgY29kZSB0byBwYXJzZSBhcmJpdHJhcnkgSFRNTCBmcmFnbWVudHMsCiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIDx0cj4gZWxlbWVudHMgd2hpY2ggYXJlIG5vdCBub3JtYWxseSBhbGxvd2VkIHRvIGV4aXN0IG9uIHRoZWlyIG93bi4KICAgICAgICAgICAgLy8gSWYgeW91J3ZlIHJlZmVyZW5jZWQgalF1ZXJ5IHdlJ2xsIHVzZSB0aGF0IHJhdGhlciB0aGFuIGR1cGxpY2F0aW5nIGl0cyBjb2RlLgogICAgICAgICAgICBpZiAoalF1ZXJ5SW5zdGFuY2UpIHsKICAgICAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlKG5vZGUpWydodG1sJ10oaHRtbCk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAvLyAuLi4gb3RoZXJ3aXNlLCB1c2UgS08ncyBvd24gcGFyc2luZyBsb2dpYy4KICAgICAgICAgICAgICAgIHZhciBwYXJzZWROb2RlcyA9IGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KGh0bWwpOwogICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWROb2Rlcy5sZW5ndGg7IGkrKykKICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHBhcnNlZE5vZGVzW2ldKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH07Cn0pKCk7Cgprby5leHBvcnRTeW1ib2woJ3V0aWxzLnBhcnNlSHRtbEZyYWdtZW50Jywga28udXRpbHMucGFyc2VIdG1sRnJhZ21lbnQpOwprby5leHBvcnRTeW1ib2woJ3V0aWxzLnNldEh0bWwnLCBrby51dGlscy5zZXRIdG1sKTsKCmtvLm1lbW9pemF0aW9uID0gKGZ1bmN0aW9uICgpIHsKICAgIHZhciBtZW1vcyA9IHt9OwoKICAgIGZ1bmN0aW9uIHJhbmRvbU1heDhIZXhDaGFycygpIHsKICAgICAgICByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMDAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTsKICAgIH0KICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQoKSB7CiAgICAgICAgcmV0dXJuIHJhbmRvbU1heDhIZXhDaGFycygpICsgcmFuZG9tTWF4OEhleENoYXJzKCk7CiAgICB9CiAgICBmdW5jdGlvbiBmaW5kTWVtb05vZGVzKHJvb3ROb2RlLCBhcHBlbmRUb0FycmF5KSB7CiAgICAgICAgaWYgKCFyb290Tm9kZSkKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgIGlmIChyb290Tm9kZS5ub2RlVHlwZSA9PSA4KSB7CiAgICAgICAgICAgIHZhciBtZW1vSWQgPSBrby5tZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0KHJvb3ROb2RlLm5vZGVWYWx1ZSk7CiAgICAgICAgICAgIGlmIChtZW1vSWQgIT0gbnVsbCkKICAgICAgICAgICAgICAgIGFwcGVuZFRvQXJyYXkucHVzaCh7IGRvbU5vZGU6IHJvb3ROb2RlLCBtZW1vSWQ6IG1lbW9JZCB9KTsKICAgICAgICB9IGVsc2UgaWYgKHJvb3ROb2RlLm5vZGVUeXBlID09IDEpIHsKICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGNoaWxkTm9kZXMgPSByb290Tm9kZS5jaGlsZE5vZGVzLCBqID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBqOyBpKyspCiAgICAgICAgICAgICAgICBmaW5kTWVtb05vZGVzKGNoaWxkTm9kZXNbaV0sIGFwcGVuZFRvQXJyYXkpOwogICAgICAgIH0KICAgIH0KCiAgICByZXR1cm4gewogICAgICAgIG1lbW9pemU6IGZ1bmN0aW9uIChjYWxsYmFjaykgewogICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9ICJmdW5jdGlvbiIpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIllvdSBjYW4gb25seSBwYXNzIGEgZnVuY3Rpb24gdG8ga28ubWVtb2l6YXRpb24ubWVtb2l6ZSgpIik7CiAgICAgICAgICAgIHZhciBtZW1vSWQgPSBnZW5lcmF0ZVJhbmRvbUlkKCk7CiAgICAgICAgICAgIG1lbW9zW21lbW9JZF0gPSBjYWxsYmFjazsKICAgICAgICAgICAgcmV0dXJuICI8IS0tW2tvX21lbW86IiArIG1lbW9JZCArICJdLS0+IjsKICAgICAgICB9LAoKICAgICAgICB1bm1lbW9pemU6IGZ1bmN0aW9uIChtZW1vSWQsIGNhbGxiYWNrUGFyYW1zKSB7CiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IG1lbW9zW21lbW9JZF07CiAgICAgICAgICAgIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKQogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJDb3VsZG4ndCBmaW5kIGFueSBtZW1vIHdpdGggSUQgIiArIG1lbW9JZCArICIuIFBlcmhhcHMgaXQncyBhbHJlYWR5IGJlZW4gdW5tZW1vaXplZC4iKTsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGNhbGxiYWNrUGFyYW1zIHx8IFtdKTsKICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGZpbmFsbHkgeyBkZWxldGUgbWVtb3NbbWVtb0lkXTsgfQogICAgICAgIH0sCgogICAgICAgIHVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50czogZnVuY3Rpb24gKGRvbU5vZGUsIGV4dHJhQ2FsbGJhY2tQYXJhbXNBcnJheSkgewogICAgICAgICAgICB2YXIgbWVtb3MgPSBbXTsKICAgICAgICAgICAgZmluZE1lbW9Ob2Rlcyhkb21Ob2RlLCBtZW1vcyk7CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gbWVtb3MubGVuZ3RoOyBpIDwgajsgaSsrKSB7CiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IG1lbW9zW2ldLmRvbU5vZGU7CiAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRQYXJhbXMgPSBbbm9kZV07CiAgICAgICAgICAgICAgICBpZiAoZXh0cmFDYWxsYmFja1BhcmFtc0FycmF5KQogICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UHVzaEFsbChjb21iaW5lZFBhcmFtcywgZXh0cmFDYWxsYmFja1BhcmFtc0FycmF5KTsKICAgICAgICAgICAgICAgIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZShtZW1vc1tpXS5tZW1vSWQsIGNvbWJpbmVkUGFyYW1zKTsKICAgICAgICAgICAgICAgIG5vZGUubm9kZVZhbHVlID0gIiI7IC8vIE5ldXRlciB0aGlzIG5vZGUgc28gd2UgZG9uJ3QgdHJ5IHRvIHVubWVtb2l6ZSBpdCBhZ2FpbgogICAgICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSkKICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7IC8vIElmIHBvc3NpYmxlLCBlcmFzZSBpdCB0b3RhbGx5IChub3QgYWx3YXlzIHBvc3NpYmxlIC0gc29tZW9uZSBlbHNlIG1pZ2h0IGp1c3QgaG9sZCBhIHJlZmVyZW5jZSB0byBpdCB0aGVuIGNhbGwgdW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzIGFnYWluKQogICAgICAgICAgICB9CiAgICAgICAgfSwKCiAgICAgICAgcGFyc2VNZW1vVGV4dDogZnVuY3Rpb24gKG1lbW9UZXh0KSB7CiAgICAgICAgICAgIHZhciBtYXRjaCA9IG1lbW9UZXh0Lm1hdGNoKC9eXFtrb19tZW1vXDooLio/KVxdJC8pOwogICAgICAgICAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6IG51bGw7CiAgICAgICAgfQogICAgfTsKfSkoKTsKCmtvLmV4cG9ydFN5bWJvbCgnbWVtb2l6YXRpb24nLCBrby5tZW1vaXphdGlvbik7CmtvLmV4cG9ydFN5bWJvbCgnbWVtb2l6YXRpb24ubWVtb2l6ZScsIGtvLm1lbW9pemF0aW9uLm1lbW9pemUpOwprby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uLnVubWVtb2l6ZScsIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZSk7CmtvLmV4cG9ydFN5bWJvbCgnbWVtb2l6YXRpb24ucGFyc2VNZW1vVGV4dCcsIGtvLm1lbW9pemF0aW9uLnBhcnNlTWVtb1RleHQpOwprby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50cycsIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50cyk7CmtvLmV4dGVuZGVycyA9IHsKICAgICd0aHJvdHRsZSc6IGZ1bmN0aW9uKHRhcmdldCwgdGltZW91dCkgewogICAgICAgIC8vIFRocm90dGxpbmcgbWVhbnMgdHdvIHRoaW5nczoKCiAgICAgICAgLy8gKDEpIEZvciBkZXBlbmRlbnQgb2JzZXJ2YWJsZXMsIHdlIHRocm90dGxlICpldmFsdWF0aW9ucyogc28gdGhhdCwgbm8gbWF0dGVyIGhvdyBmYXN0IGl0cyBkZXBlbmRlbmNpZXMKICAgICAgICAvLyAgICAgbm90aWZ5IHVwZGF0ZXMsIHRoZSB0YXJnZXQgZG9lc24ndCByZS1ldmFsdWF0ZSAoYW5kIGhlbmNlIGRvZXNuJ3Qgbm90aWZ5KSBmYXN0ZXIgdGhhbiBhIGNlcnRhaW4gcmF0ZQogICAgICAgIHRhcmdldFsndGhyb3R0bGVFdmFsdWF0aW9uJ10gPSB0aW1lb3V0OwoKICAgICAgICAvLyAoMikgRm9yIHdyaXRhYmxlIHRhcmdldHMgKG9ic2VydmFibGVzLCBvciB3cml0YWJsZSBkZXBlbmRlbnQgb2JzZXJ2YWJsZXMpLCB3ZSB0aHJvdHRsZSAqd3JpdGVzKgogICAgICAgIC8vICAgICBzbyB0aGUgdGFyZ2V0IGNhbm5vdCBjaGFuZ2UgdmFsdWUgc3luY2hyb25vdXNseSBvciBmYXN0ZXIgdGhhbiBhIGNlcnRhaW4gcmF0ZQogICAgICAgIHZhciB3cml0ZVRpbWVvdXRJbnN0YW5jZSA9IG51bGw7CiAgICAgICAgcmV0dXJuIGtvLmRlcGVuZGVudE9ic2VydmFibGUoewogICAgICAgICAgICAncmVhZCc6IHRhcmdldCwKICAgICAgICAgICAgJ3dyaXRlJzogZnVuY3Rpb24odmFsdWUpIHsKICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh3cml0ZVRpbWVvdXRJbnN0YW5jZSk7CiAgICAgICAgICAgICAgICB3cml0ZVRpbWVvdXRJbnN0YW5jZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0KHZhbHVlKTsKICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpOwogICAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICB9LAoKICAgICdyYXRlTGltaXQnOiBmdW5jdGlvbih0YXJnZXQsIG9wdGlvbnMpIHsKICAgICAgICB2YXIgdGltZW91dCwgbWV0aG9kLCBsaW1pdEZ1bmN0aW9uOwoKICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ251bWJlcicpIHsKICAgICAgICAgICAgdGltZW91dCA9IG9wdGlvbnM7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdGltZW91dCA9IG9wdGlvbnNbJ3RpbWVvdXQnXTsKICAgICAgICAgICAgbWV0aG9kID0gb3B0aW9uc1snbWV0aG9kJ107CiAgICAgICAgfQoKICAgICAgICBsaW1pdEZ1bmN0aW9uID0gbWV0aG9kID09ICdub3RpZnlXaGVuQ2hhbmdlc1N0b3AnID8gIGRlYm91bmNlIDogdGhyb3R0bGU7CiAgICAgICAgdGFyZ2V0LmxpbWl0KGZ1bmN0aW9uKGNhbGxiYWNrKSB7CiAgICAgICAgICAgIHJldHVybiBsaW1pdEZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lb3V0KTsKICAgICAgICB9KTsKICAgIH0sCgogICAgJ25vdGlmeSc6IGZ1bmN0aW9uKHRhcmdldCwgbm90aWZ5V2hlbikgewogICAgICAgIHRhcmdldFsiZXF1YWxpdHlDb21wYXJlciJdID0gbm90aWZ5V2hlbiA9PSAiYWx3YXlzIiA/CiAgICAgICAgICAgIG51bGwgOiAgLy8gbnVsbCBlcXVhbGl0eUNvbXBhcmVyIG1lYW5zIHRvIGFsd2F5cyBub3RpZnkKICAgICAgICAgICAgdmFsdWVzQXJlUHJpbWl0aXZlQW5kRXF1YWw7CiAgICB9Cn07Cgp2YXIgcHJpbWl0aXZlVHlwZXMgPSB7ICd1bmRlZmluZWQnOjEsICdib29sZWFuJzoxLCAnbnVtYmVyJzoxLCAnc3RyaW5nJzoxIH07CmZ1bmN0aW9uIHZhbHVlc0FyZVByaW1pdGl2ZUFuZEVxdWFsKGEsIGIpIHsKICAgIHZhciBvbGRWYWx1ZUlzUHJpbWl0aXZlID0gKGEgPT09IG51bGwpIHx8ICh0eXBlb2YoYSkgaW4gcHJpbWl0aXZlVHlwZXMpOwogICAgcmV0dXJuIG9sZFZhbHVlSXNQcmltaXRpdmUgPyAoYSA9PT0gYikgOiBmYWxzZTsKfQoKZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIHRpbWVvdXQpIHsKICAgIHZhciB0aW1lb3V0SW5zdGFuY2U7CiAgICByZXR1cm4gZnVuY3Rpb24gKCkgewogICAgICAgIGlmICghdGltZW91dEluc3RhbmNlKSB7CiAgICAgICAgICAgIHRpbWVvdXRJbnN0YW5jZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICB0aW1lb3V0SW5zdGFuY2UgPSB1bmRlZmluZWQ7CiAgICAgICAgICAgICAgICBjYWxsYmFjaygpOwogICAgICAgICAgICB9LCB0aW1lb3V0KTsKICAgICAgICB9CiAgICB9Owp9CgpmdW5jdGlvbiBkZWJvdW5jZShjYWxsYmFjaywgdGltZW91dCkgewogICAgdmFyIHRpbWVvdXRJbnN0YW5jZTsKICAgIHJldHVybiBmdW5jdGlvbiAoKSB7CiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJbnN0YW5jZSk7CiAgICAgICAgdGltZW91dEluc3RhbmNlID0gc2V0VGltZW91dChjYWxsYmFjaywgdGltZW91dCk7CiAgICB9Owp9CgpmdW5jdGlvbiBhcHBseUV4dGVuZGVycyhyZXF1ZXN0ZWRFeHRlbmRlcnMpIHsKICAgIHZhciB0YXJnZXQgPSB0aGlzOwogICAgaWYgKHJlcXVlc3RlZEV4dGVuZGVycykgewogICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2gocmVxdWVzdGVkRXh0ZW5kZXJzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7CiAgICAgICAgICAgIHZhciBleHRlbmRlckhhbmRsZXIgPSBrby5leHRlbmRlcnNba2V5XTsKICAgICAgICAgICAgaWYgKHR5cGVvZiBleHRlbmRlckhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykgewogICAgICAgICAgICAgICAgdGFyZ2V0ID0gZXh0ZW5kZXJIYW5kbGVyKHRhcmdldCwgdmFsdWUpIHx8IHRhcmdldDsKICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgfQogICAgcmV0dXJuIHRhcmdldDsKfQoKa28uZXhwb3J0U3ltYm9sKCdleHRlbmRlcnMnLCBrby5leHRlbmRlcnMpOwoKa28uc3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKHRhcmdldCwgY2FsbGJhY2ssIGRpc3Bvc2VDYWxsYmFjaykgewogICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7CiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7CiAgICB0aGlzLmRpc3Bvc2VDYWxsYmFjayA9IGRpc3Bvc2VDYWxsYmFjazsKICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlOwogICAga28uZXhwb3J0UHJvcGVydHkodGhpcywgJ2Rpc3Bvc2UnLCB0aGlzLmRpc3Bvc2UpOwp9Owprby5zdWJzY3JpcHRpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7CiAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlOwogICAgdGhpcy5kaXNwb3NlQ2FsbGJhY2soKTsKfTsKCmtvLnN1YnNjcmliYWJsZSA9IGZ1bmN0aW9uICgpIHsKICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mT3JFeHRlbmQodGhpcywga28uc3Vic2NyaWJhYmxlWydmbiddKTsKICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB7fTsKfQoKdmFyIGRlZmF1bHRFdmVudCA9ICJjaGFuZ2UiOwoKdmFyIGtvX3N1YnNjcmliYWJsZV9mbiA9IHsKICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGNhbGxiYWNrLCBjYWxsYmFja1RhcmdldCwgZXZlbnQpIHsKICAgICAgICB2YXIgc2VsZiA9IHRoaXM7CgogICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgZGVmYXVsdEV2ZW50OwogICAgICAgIHZhciBib3VuZENhbGxiYWNrID0gY2FsbGJhY2tUYXJnZXQgPyBjYWxsYmFjay5iaW5kKGNhbGxiYWNrVGFyZ2V0KSA6IGNhbGxiYWNrOwoKICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IGtvLnN1YnNjcmlwdGlvbihzZWxmLCBib3VuZENhbGxiYWNrLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UmVtb3ZlSXRlbShzZWxmLl9zdWJzY3JpcHRpb25zW2V2ZW50XSwgc3Vic2NyaXB0aW9uKTsKICAgICAgICAgICAgaWYgKHNlbGYuYWZ0ZXJTdWJzY3JpcHRpb25SZW1vdmUpCiAgICAgICAgICAgICAgICBzZWxmLmFmdGVyU3Vic2NyaXB0aW9uUmVtb3ZlKGV2ZW50KTsKICAgICAgICB9KTsKCiAgICAgICAgaWYgKHNlbGYuYmVmb3JlU3Vic2NyaXB0aW9uQWRkKQogICAgICAgICAgICBzZWxmLmJlZm9yZVN1YnNjcmlwdGlvbkFkZChldmVudCk7CgogICAgICAgIGlmICghc2VsZi5fc3Vic2NyaXB0aW9uc1tldmVudF0pCiAgICAgICAgICAgIHNlbGYuX3N1YnNjcmlwdGlvbnNbZXZlbnRdID0gW107CiAgICAgICAgc2VsZi5fc3Vic2NyaXB0aW9uc1tldmVudF0ucHVzaChzdWJzY3JpcHRpb24pOwoKICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uOwogICAgfSwKCiAgICAibm90aWZ5U3Vic2NyaWJlcnMiOiBmdW5jdGlvbiAodmFsdWVUb05vdGlmeSwgZXZlbnQpIHsKICAgICAgICBldmVudCA9IGV2ZW50IHx8IGRlZmF1bHRFdmVudDsKICAgICAgICBpZiAodGhpcy5oYXNTdWJzY3JpcHRpb25zRm9yRXZlbnQoZXZlbnQpKSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmJlZ2luKCk7IC8vIEJlZ2luIHN1cHByZXNzaW5nIGRlcGVuZGVuY3kgZGV0ZWN0aW9uIChieSBzZXR0aW5nIHRoZSB0b3AgZnJhbWUgdG8gdW5kZWZpbmVkKQogICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IHRoaXMuX3N1YnNjcmlwdGlvbnNbZXZlbnRdLnNsaWNlKDApLCBpID0gMCwgc3Vic2NyaXB0aW9uOyBzdWJzY3JpcHRpb24gPSBhW2ldOyArK2kpIHsKICAgICAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIGEgc3Vic2NyaXB0aW9uIHdhcyBkaXNwb3NlZCBkdXJpbmcgdGhlIGFycmF5Rm9yRWFjaCBjeWNsZSwgY2hlY2sKICAgICAgICAgICAgICAgICAgICAvLyBmb3IgaXNEaXNwb3NlZCBvbiBlYWNoIHN1YnNjcmlwdGlvbiBiZWZvcmUgaW52b2tpbmcgaXRzIGNhbGxiYWNrCiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24uaXNEaXNwb3NlZCkKICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKHZhbHVlVG9Ob3RpZnkpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5lbmQoKTsgLy8gRW5kIHN1cHByZXNzaW5nIGRlcGVuZGVuY3kgZGV0ZWN0aW9uCiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9LAoKICAgIGxpbWl0OiBmdW5jdGlvbihsaW1pdEZ1bmN0aW9uKSB7CiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzZWxmSXNPYnNlcnZhYmxlID0ga28uaXNPYnNlcnZhYmxlKHNlbGYpLAogICAgICAgICAgICBpc1BlbmRpbmcsIHByZXZpb3VzVmFsdWUsIHBlbmRpbmdWYWx1ZSwgYmVmb3JlQ2hhbmdlID0gJ2JlZm9yZUNoYW5nZSc7CgogICAgICAgIGlmICghc2VsZi5fb3JpZ05vdGlmeVN1YnNjcmliZXJzKSB7CiAgICAgICAgICAgIHNlbGYuX29yaWdOb3RpZnlTdWJzY3JpYmVycyA9IHNlbGZbIm5vdGlmeVN1YnNjcmliZXJzIl07CiAgICAgICAgICAgIHNlbGZbIm5vdGlmeVN1YnNjcmliZXJzIl0gPSBmdW5jdGlvbih2YWx1ZSwgZXZlbnQpIHsKICAgICAgICAgICAgICAgIGlmICghZXZlbnQgfHwgZXZlbnQgPT09IGRlZmF1bHRFdmVudCkgewogICAgICAgICAgICAgICAgICAgIHNlbGYuX3JhdGVMaW1pdGVkQ2hhbmdlKHZhbHVlKTsKICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IGJlZm9yZUNoYW5nZSkgewogICAgICAgICAgICAgICAgICAgIHNlbGYuX3JhdGVMaW1pdGVkQmVmb3JlQ2hhbmdlKHZhbHVlKTsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgc2VsZi5fb3JpZ05vdGlmeVN1YnNjcmliZXJzKHZhbHVlLCBldmVudCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH07CiAgICAgICAgfQoKICAgICAgICB2YXIgZmluaXNoID0gbGltaXRGdW5jdGlvbihmdW5jdGlvbigpIHsKICAgICAgICAgICAgLy8gSWYgYW4gb2JzZXJ2YWJsZSBwcm92aWRlZCBhIHJlZmVyZW5jZSB0byBpdHNlbGYsIGFjY2VzcyBpdCB0byBnZXQgdGhlIGxhdGVzdCB2YWx1ZS4KICAgICAgICAgICAgLy8gVGhpcyBhbGxvd3MgY29tcHV0ZWQgb2JzZXJ2YWJsZXMgdG8gZGVsYXkgY2FsY3VsYXRpbmcgdGhlaXIgdmFsdWUgdW50aWwgbmVlZGVkLgogICAgICAgICAgICBpZiAoc2VsZklzT2JzZXJ2YWJsZSAmJiBwZW5kaW5nVmFsdWUgPT09IHNlbGYpIHsKICAgICAgICAgICAgICAgIHBlbmRpbmdWYWx1ZSA9IHNlbGYoKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpc1BlbmRpbmcgPSBmYWxzZTsKICAgICAgICAgICAgaWYgKHNlbGYuaXNEaWZmZXJlbnQocHJldmlvdXNWYWx1ZSwgcGVuZGluZ1ZhbHVlKSkgewogICAgICAgICAgICAgICAgc2VsZi5fb3JpZ05vdGlmeVN1YnNjcmliZXJzKHByZXZpb3VzVmFsdWUgPSBwZW5kaW5nVmFsdWUpOwogICAgICAgICAgICB9CiAgICAgICAgfSk7CgogICAgICAgIHNlbGYuX3JhdGVMaW1pdGVkQ2hhbmdlID0gZnVuY3Rpb24odmFsdWUpIHsKICAgICAgICAgICAgaXNQZW5kaW5nID0gdHJ1ZTsKICAgICAgICAgICAgcGVuZGluZ1ZhbHVlID0gdmFsdWU7CiAgICAgICAgICAgIGZpbmlzaCgpOwogICAgICAgIH07CiAgICAgICAgc2VsZi5fcmF0ZUxpbWl0ZWRCZWZvcmVDaGFuZ2UgPSBmdW5jdGlvbih2YWx1ZSkgewogICAgICAgICAgICBpZiAoIWlzUGVuZGluZykgewogICAgICAgICAgICAgICAgcHJldmlvdXNWYWx1ZSA9IHZhbHVlOwogICAgICAgICAgICAgICAgc2VsZi5fb3JpZ05vdGlmeVN1YnNjcmliZXJzKHZhbHVlLCBiZWZvcmVDaGFuZ2UpOwogICAgICAgICAgICB9CiAgICAgICAgfTsKICAgIH0sCgogICAgaGFzU3Vic2NyaXB0aW9uc0ZvckV2ZW50OiBmdW5jdGlvbihldmVudCkgewogICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zW2V2ZW50XSAmJiB0aGlzLl9zdWJzY3JpcHRpb25zW2V2ZW50XS5sZW5ndGg7CiAgICB9LAoKICAgIGdldFN1YnNjcmlwdGlvbnNDb3VudDogZnVuY3Rpb24gKCkgewogICAgICAgIHZhciB0b3RhbCA9IDA7CiAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaCh0aGlzLl9zdWJzY3JpcHRpb25zLCBmdW5jdGlvbihldmVudE5hbWUsIHN1YnNjcmlwdGlvbnMpIHsKICAgICAgICAgICAgdG90YWwgKz0gc3Vic2NyaXB0aW9ucy5sZW5ndGg7CiAgICAgICAgfSk7CiAgICAgICAgcmV0dXJuIHRvdGFsOwogICAgfSwKCiAgICBpc0RpZmZlcmVudDogZnVuY3Rpb24ob2xkVmFsdWUsIG5ld1ZhbHVlKSB7CiAgICAgICAgcmV0dXJuICF0aGlzWydlcXVhbGl0eUNvbXBhcmVyJ10gfHwgIXRoaXNbJ2VxdWFsaXR5Q29tcGFyZXInXShvbGRWYWx1ZSwgbmV3VmFsdWUpOwogICAgfSwKCiAgICBleHRlbmQ6IGFwcGx5RXh0ZW5kZXJzCn07Cgprby5leHBvcnRQcm9wZXJ0eShrb19zdWJzY3JpYmFibGVfZm4sICdzdWJzY3JpYmUnLCBrb19zdWJzY3JpYmFibGVfZm4uc3Vic2NyaWJlKTsKa28uZXhwb3J0UHJvcGVydHkoa29fc3Vic2NyaWJhYmxlX2ZuLCAnZXh0ZW5kJywga29fc3Vic2NyaWJhYmxlX2ZuLmV4dGVuZCk7CmtvLmV4cG9ydFByb3BlcnR5KGtvX3N1YnNjcmliYWJsZV9mbiwgJ2dldFN1YnNjcmlwdGlvbnNDb3VudCcsIGtvX3N1YnNjcmliYWJsZV9mbi5nZXRTdWJzY3JpcHRpb25zQ291bnQpOwoKLy8gRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBwcm90byBhc3NpZ25tZW50LCB3ZSBvdmVyd3JpdGUgdGhlIHByb3RvdHlwZSBvZiBlYWNoCi8vIG9ic2VydmFibGUgaW5zdGFuY2UuIFNpbmNlIG9ic2VydmFibGVzIGFyZSBmdW5jdGlvbnMsIHdlIG5lZWQgRnVuY3Rpb24ucHJvdG90eXBlCi8vIHRvIHN0aWxsIGJlIGluIHRoZSBwcm90b3R5cGUgY2hhaW4uCmlmIChrby51dGlscy5jYW5TZXRQcm90b3R5cGUpIHsKICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mKGtvX3N1YnNjcmliYWJsZV9mbiwgRnVuY3Rpb24ucHJvdG90eXBlKTsKfQoKa28uc3Vic2NyaWJhYmxlWydmbiddID0ga29fc3Vic2NyaWJhYmxlX2ZuOwoKCmtvLmlzU3Vic2NyaWJhYmxlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7CiAgICByZXR1cm4gaW5zdGFuY2UgIT0gbnVsbCAmJiB0eXBlb2YgaW5zdGFuY2Uuc3Vic2NyaWJlID09ICJmdW5jdGlvbiIgJiYgdHlwZW9mIGluc3RhbmNlWyJub3RpZnlTdWJzY3JpYmVycyJdID09ICJmdW5jdGlvbiI7Cn07Cgprby5leHBvcnRTeW1ib2woJ3N1YnNjcmliYWJsZScsIGtvLnN1YnNjcmliYWJsZSk7CmtvLmV4cG9ydFN5bWJvbCgnaXNTdWJzY3JpYmFibGUnLCBrby5pc1N1YnNjcmliYWJsZSk7Cgprby5jb21wdXRlZENvbnRleHQgPSBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uID0gKGZ1bmN0aW9uICgpIHsKICAgIHZhciBvdXRlckZyYW1lcyA9IFtdLAogICAgICAgIGN1cnJlbnRGcmFtZSwKICAgICAgICBsYXN0SWQgPSAwOwoKICAgIC8vIFJldHVybiBhIHVuaXF1ZSBJRCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byBhbiBvYnNlcnZhYmxlIGZvciBkZXBlbmRlbmN5IHRyYWNraW5nLgogICAgLy8gVGhlb3JldGljYWxseSwgeW91IGNvdWxkIGV2ZW50dWFsbHkgb3ZlcmZsb3cgdGhlIG51bWJlciBzdG9yYWdlIHNpemUsIHJlc3VsdGluZwogICAgLy8gaW4gZHVwbGljYXRlIElEcy4gQnV0IGluIEphdmFTY3JpcHQsIHRoZSBsYXJnZXN0IGV4YWN0IGludGVncmFsIHZhbHVlIGlzIDJeNTMKICAgIC8vIG9yIDksMDA3LDE5OSwyNTQsNzQwLDk5Mi4gSWYgeW91IGNyZWF0ZWQgMSwwMDAsMDAwIElEcyBwZXIgc2Vjb25kLCBpdCB3b3VsZAogICAgLy8gdGFrZSBvdmVyIDI4NSB5ZWFycyB0byByZWFjaCB0aGF0IG51bWJlci4KICAgIC8vIFJlZmVyZW5jZSBodHRwOi8vYmxvZy52amV1eC5jb20vMjAxMC9qYXZhc2NyaXB0L2phdmFzY3JpcHQtbWF4X2ludC1udW1iZXItbGltaXRzLmh0bWwKICAgIGZ1bmN0aW9uIGdldElkKCkgewogICAgICAgIHJldHVybiArK2xhc3RJZDsKICAgIH0KCiAgICBmdW5jdGlvbiBiZWdpbihvcHRpb25zKSB7CiAgICAgICAgb3V0ZXJGcmFtZXMucHVzaChjdXJyZW50RnJhbWUpOwogICAgICAgIGN1cnJlbnRGcmFtZSA9IG9wdGlvbnM7CiAgICB9CgogICAgZnVuY3Rpb24gZW5kKCkgewogICAgICAgIGN1cnJlbnRGcmFtZSA9IG91dGVyRnJhbWVzLnBvcCgpOwogICAgfQoKICAgIHJldHVybiB7CiAgICAgICAgYmVnaW46IGJlZ2luLAoKICAgICAgICBlbmQ6IGVuZCwKCiAgICAgICAgcmVnaXN0ZXJEZXBlbmRlbmN5OiBmdW5jdGlvbiAoc3Vic2NyaWJhYmxlKSB7CiAgICAgICAgICAgIGlmIChjdXJyZW50RnJhbWUpIHsKICAgICAgICAgICAgICAgIGlmICgha28uaXNTdWJzY3JpYmFibGUoc3Vic2NyaWJhYmxlKSkKICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llcyIpOwogICAgICAgICAgICAgICAgY3VycmVudEZyYW1lLmNhbGxiYWNrKHN1YnNjcmliYWJsZSwgc3Vic2NyaWJhYmxlLl9pZCB8fCAoc3Vic2NyaWJhYmxlLl9pZCA9IGdldElkKCkpKTsKICAgICAgICAgICAgfQogICAgICAgIH0sCgogICAgICAgIGlnbm9yZTogZnVuY3Rpb24gKGNhbGxiYWNrLCBjYWxsYmFja1RhcmdldCwgY2FsbGJhY2tBcmdzKSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICBiZWdpbigpOwogICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrVGFyZ2V0LCBjYWxsYmFja0FyZ3MgfHwgW10pOwogICAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICAgICAgZW5kKCk7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICBnZXREZXBlbmRlbmNpZXNDb3VudDogZnVuY3Rpb24gKCkgewogICAgICAgICAgICBpZiAoY3VycmVudEZyYW1lKQogICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRGcmFtZS5jb21wdXRlZC5nZXREZXBlbmRlbmNpZXNDb3VudCgpOwogICAgICAgIH0sCgogICAgICAgIGlzSW5pdGlhbDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChjdXJyZW50RnJhbWUpCiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEZyYW1lLmlzSW5pdGlhbDsKICAgICAgICB9CiAgICB9Owp9KSgpOwoKa28uZXhwb3J0U3ltYm9sKCdjb21wdXRlZENvbnRleHQnLCBrby5jb21wdXRlZENvbnRleHQpOwprby5leHBvcnRTeW1ib2woJ2NvbXB1dGVkQ29udGV4dC5nZXREZXBlbmRlbmNpZXNDb3VudCcsIGtvLmNvbXB1dGVkQ29udGV4dC5nZXREZXBlbmRlbmNpZXNDb3VudCk7CmtvLmV4cG9ydFN5bWJvbCgnY29tcHV0ZWRDb250ZXh0LmlzSW5pdGlhbCcsIGtvLmNvbXB1dGVkQ29udGV4dC5pc0luaXRpYWwpOwprby5leHBvcnRTeW1ib2woJ2NvbXB1dGVkQ29udGV4dC5pc1NsZWVwaW5nJywga28uY29tcHV0ZWRDb250ZXh0LmlzU2xlZXBpbmcpOwprby5vYnNlcnZhYmxlID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZSkgewogICAgdmFyIF9sYXRlc3RWYWx1ZSA9IGluaXRpYWxWYWx1ZTsKCiAgICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkgewogICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkgewogICAgICAgICAgICAvLyBXcml0ZQoKICAgICAgICAgICAgLy8gSWdub3JlIHdyaXRlcyBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQKICAgICAgICAgICAgaWYgKG9ic2VydmFibGUuaXNEaWZmZXJlbnQoX2xhdGVzdFZhbHVlLCBhcmd1bWVudHNbMF0pKSB7CiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLnZhbHVlV2lsbE11dGF0ZSgpOwogICAgICAgICAgICAgICAgX2xhdGVzdFZhbHVlID0gYXJndW1lbnRzWzBdOwogICAgICAgICAgICAgICAgaWYgKERFQlVHKSBvYnNlcnZhYmxlLl9sYXRlc3RWYWx1ZSA9IF9sYXRlc3RWYWx1ZTsKICAgICAgICAgICAgICAgIG9ic2VydmFibGUudmFsdWVIYXNNdXRhdGVkKCk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRoaXM7IC8vIFBlcm1pdHMgY2hhaW5lZCBhc3NpZ25tZW50cwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgLy8gUmVhZAogICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLnJlZ2lzdGVyRGVwZW5kZW5jeShvYnNlcnZhYmxlKTsgLy8gVGhlIGNhbGxlciBvbmx5IG5lZWRzIHRvIGJlIG5vdGlmaWVkIG9mIGNoYW5nZXMgaWYgdGhleSBkaWQgYSAicmVhZCIgb3BlcmF0aW9uCiAgICAgICAgICAgIHJldHVybiBfbGF0ZXN0VmFsdWU7CiAgICAgICAgfQogICAgfQogICAga28uc3Vic2NyaWJhYmxlLmNhbGwob2JzZXJ2YWJsZSk7CiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZk9yRXh0ZW5kKG9ic2VydmFibGUsIGtvLm9ic2VydmFibGVbJ2ZuJ10pOwoKICAgIGlmIChERUJVRykgb2JzZXJ2YWJsZS5fbGF0ZXN0VmFsdWUgPSBfbGF0ZXN0VmFsdWU7CiAgICBvYnNlcnZhYmxlLnBlZWsgPSBmdW5jdGlvbigpIHsgcmV0dXJuIF9sYXRlc3RWYWx1ZSB9OwogICAgb2JzZXJ2YWJsZS52YWx1ZUhhc011dGF0ZWQgPSBmdW5jdGlvbiAoKSB7IG9ic2VydmFibGVbIm5vdGlmeVN1YnNjcmliZXJzIl0oX2xhdGVzdFZhbHVlKTsgfQogICAgb2JzZXJ2YWJsZS52YWx1ZVdpbGxNdXRhdGUgPSBmdW5jdGlvbiAoKSB7IG9ic2VydmFibGVbIm5vdGlmeVN1YnNjcmliZXJzIl0oX2xhdGVzdFZhbHVlLCAiYmVmb3JlQ2hhbmdlIik7IH0KCiAgICBrby5leHBvcnRQcm9wZXJ0eShvYnNlcnZhYmxlLCAncGVlaycsIG9ic2VydmFibGUucGVlayk7CiAgICBrby5leHBvcnRQcm9wZXJ0eShvYnNlcnZhYmxlLCAidmFsdWVIYXNNdXRhdGVkIiwgb2JzZXJ2YWJsZS52YWx1ZUhhc011dGF0ZWQpOwogICAga28uZXhwb3J0UHJvcGVydHkob2JzZXJ2YWJsZSwgInZhbHVlV2lsbE11dGF0ZSIsIG9ic2VydmFibGUudmFsdWVXaWxsTXV0YXRlKTsKCiAgICByZXR1cm4gb2JzZXJ2YWJsZTsKfQoKa28ub2JzZXJ2YWJsZVsnZm4nXSA9IHsKICAgICJlcXVhbGl0eUNvbXBhcmVyIjogdmFsdWVzQXJlUHJpbWl0aXZlQW5kRXF1YWwKfTsKCnZhciBwcm90b1Byb3BlcnR5ID0ga28ub2JzZXJ2YWJsZS5wcm90b1Byb3BlcnR5ID0gIl9fa29fcHJvdG9fXyI7CmtvLm9ic2VydmFibGVbJ2ZuJ11bcHJvdG9Qcm9wZXJ0eV0gPSBrby5vYnNlcnZhYmxlOwoKLy8gTm90ZSB0aGF0IGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgcHJvdG8gYXNzaWdubWVudCwgdGhlCi8vIGluaGVyaXRhbmNlIGNoYWluIGlzIGNyZWF0ZWQgbWFudWFsbHkgaW4gdGhlIGtvLm9ic2VydmFibGUgY29uc3RydWN0b3IKaWYgKGtvLnV0aWxzLmNhblNldFByb3RvdHlwZSkgewogICAga28udXRpbHMuc2V0UHJvdG90eXBlT2Yoa28ub2JzZXJ2YWJsZVsnZm4nXSwga28uc3Vic2NyaWJhYmxlWydmbiddKTsKfQoKa28uaGFzUHJvdG90eXBlID0gZnVuY3Rpb24oaW5zdGFuY2UsIHByb3RvdHlwZSkgewogICAgaWYgKChpbnN0YW5jZSA9PT0gbnVsbCkgfHwgKGluc3RhbmNlID09PSB1bmRlZmluZWQpIHx8IChpbnN0YW5jZVtwcm90b1Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuIGZhbHNlOwogICAgaWYgKGluc3RhbmNlW3Byb3RvUHJvcGVydHldID09PSBwcm90b3R5cGUpIHJldHVybiB0cnVlOwogICAgcmV0dXJuIGtvLmhhc1Byb3RvdHlwZShpbnN0YW5jZVtwcm90b1Byb3BlcnR5XSwgcHJvdG90eXBlKTsgLy8gV2FsayB0aGUgcHJvdG90eXBlIGNoYWluCn07Cgprby5pc09ic2VydmFibGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHsKICAgIHJldHVybiBrby5oYXNQcm90b3R5cGUoaW5zdGFuY2UsIGtvLm9ic2VydmFibGUpOwp9CmtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkgewogICAgLy8gT2JzZXJ2YWJsZQogICAgaWYgKCh0eXBlb2YgaW5zdGFuY2UgPT0gImZ1bmN0aW9uIikgJiYgaW5zdGFuY2VbcHJvdG9Qcm9wZXJ0eV0gPT09IGtvLm9ic2VydmFibGUpCiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAvLyBXcml0ZWFibGUgZGVwZW5kZW50IG9ic2VydmFibGUKICAgIGlmICgodHlwZW9mIGluc3RhbmNlID09ICJmdW5jdGlvbiIpICYmIChpbnN0YW5jZVtwcm90b1Byb3BlcnR5XSA9PT0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSkgJiYgKGluc3RhbmNlLmhhc1dyaXRlRnVuY3Rpb24pKQogICAgICAgIHJldHVybiB0cnVlOwogICAgLy8gQW55dGhpbmcgZWxzZQogICAgcmV0dXJuIGZhbHNlOwp9CgoKa28uZXhwb3J0U3ltYm9sKCdvYnNlcnZhYmxlJywga28ub2JzZXJ2YWJsZSk7CmtvLmV4cG9ydFN5bWJvbCgnaXNPYnNlcnZhYmxlJywga28uaXNPYnNlcnZhYmxlKTsKa28uZXhwb3J0U3ltYm9sKCdpc1dyaXRlYWJsZU9ic2VydmFibGUnLCBrby5pc1dyaXRlYWJsZU9ic2VydmFibGUpOwprby5leHBvcnRTeW1ib2woJ2lzV3JpdGFibGVPYnNlcnZhYmxlJywga28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKTsKa28ub2JzZXJ2YWJsZUFycmF5ID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMpIHsKICAgIGluaXRpYWxWYWx1ZXMgPSBpbml0aWFsVmFsdWVzIHx8IFtdOwoKICAgIGlmICh0eXBlb2YgaW5pdGlhbFZhbHVlcyAhPSAnb2JqZWN0JyB8fCAhKCdsZW5ndGgnIGluIGluaXRpYWxWYWx1ZXMpKQogICAgICAgIHRocm93IG5ldyBFcnJvcigiVGhlIGFyZ3VtZW50IHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBhbiBvYnNlcnZhYmxlIGFycmF5IG11c3QgYmUgYW4gYXJyYXksIG9yIG51bGwsIG9yIHVuZGVmaW5lZC4iKTsKCiAgICB2YXIgcmVzdWx0ID0ga28ub2JzZXJ2YWJsZShpbml0aWFsVmFsdWVzKTsKICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mT3JFeHRlbmQocmVzdWx0LCBrby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ10pOwogICAgcmV0dXJuIHJlc3VsdC5leHRlbmQoeyd0cmFja0FycmF5Q2hhbmdlcyc6dHJ1ZX0pOwp9OwoKa28ub2JzZXJ2YWJsZUFycmF5WydmbiddID0gewogICAgJ3JlbW92ZSc6IGZ1bmN0aW9uICh2YWx1ZU9yUHJlZGljYXRlKSB7CiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpOwogICAgICAgIHZhciByZW1vdmVkVmFsdWVzID0gW107CiAgICAgICAgdmFyIHByZWRpY2F0ZSA9IHR5cGVvZiB2YWx1ZU9yUHJlZGljYXRlID09ICJmdW5jdGlvbiIgJiYgIWtvLmlzT2JzZXJ2YWJsZSh2YWx1ZU9yUHJlZGljYXRlKSA/IHZhbHVlT3JQcmVkaWNhdGUgOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSB2YWx1ZU9yUHJlZGljYXRlOyB9OwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5kZXJseWluZ0FycmF5Lmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVuZGVybHlpbmdBcnJheVtpXTsKICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpIHsKICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCA9PT0gMCkgewogICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVXaWxsTXV0YXRlKCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICByZW1vdmVkVmFsdWVzLnB1c2godmFsdWUpOwogICAgICAgICAgICAgICAgdW5kZXJseWluZ0FycmF5LnNwbGljZShpLCAxKTsKICAgICAgICAgICAgICAgIGktLTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpZiAocmVtb3ZlZFZhbHVlcy5sZW5ndGgpIHsKICAgICAgICAgICAgdGhpcy52YWx1ZUhhc011dGF0ZWQoKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHJlbW92ZWRWYWx1ZXM7CiAgICB9LAoKICAgICdyZW1vdmVBbGwnOiBmdW5jdGlvbiAoYXJyYXlPZlZhbHVlcykgewogICAgICAgIC8vIElmIHlvdSBwYXNzZWQgemVybyBhcmdzLCB3ZSByZW1vdmUgZXZlcnl0aGluZwogICAgICAgIGlmIChhcnJheU9mVmFsdWVzID09PSB1bmRlZmluZWQpIHsKICAgICAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpOwogICAgICAgICAgICB2YXIgYWxsVmFsdWVzID0gdW5kZXJseWluZ0FycmF5LnNsaWNlKDApOwogICAgICAgICAgICB0aGlzLnZhbHVlV2lsbE11dGF0ZSgpOwogICAgICAgICAgICB1bmRlcmx5aW5nQXJyYXkuc3BsaWNlKDAsIHVuZGVybHlpbmdBcnJheS5sZW5ndGgpOwogICAgICAgICAgICB0aGlzLnZhbHVlSGFzTXV0YXRlZCgpOwogICAgICAgICAgICByZXR1cm4gYWxsVmFsdWVzOwogICAgICAgIH0KICAgICAgICAvLyBJZiB5b3UgcGFzc2VkIGFuIGFyZywgd2UgaW50ZXJwcmV0IGl0IGFzIGFuIGFycmF5IG9mIGVudHJpZXMgdG8gcmVtb3ZlCiAgICAgICAgaWYgKCFhcnJheU9mVmFsdWVzKQogICAgICAgICAgICByZXR1cm4gW107CiAgICAgICAgcmV0dXJuIHRoaXNbJ3JlbW92ZSddKGZ1bmN0aW9uICh2YWx1ZSkgewogICAgICAgICAgICByZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGFycmF5T2ZWYWx1ZXMsIHZhbHVlKSA+PSAwOwogICAgICAgIH0pOwogICAgfSwKCiAgICAnZGVzdHJveSc6IGZ1bmN0aW9uICh2YWx1ZU9yUHJlZGljYXRlKSB7CiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpOwogICAgICAgIHZhciBwcmVkaWNhdGUgPSB0eXBlb2YgdmFsdWVPclByZWRpY2F0ZSA9PSAiZnVuY3Rpb24iICYmICFrby5pc09ic2VydmFibGUodmFsdWVPclByZWRpY2F0ZSkgPyB2YWx1ZU9yUHJlZGljYXRlIDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gdmFsdWVPclByZWRpY2F0ZTsgfTsKICAgICAgICB0aGlzLnZhbHVlV2lsbE11dGF0ZSgpOwogICAgICAgIGZvciAodmFyIGkgPSB1bmRlcmx5aW5nQXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsKICAgICAgICAgICAgdmFyIHZhbHVlID0gdW5kZXJseWluZ0FycmF5W2ldOwogICAgICAgICAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkKICAgICAgICAgICAgICAgIHVuZGVybHlpbmdBcnJheVtpXVsiX2Rlc3Ryb3kiXSA9IHRydWU7CiAgICAgICAgfQogICAgICAgIHRoaXMudmFsdWVIYXNNdXRhdGVkKCk7CiAgICB9LAoKICAgICdkZXN0cm95QWxsJzogZnVuY3Rpb24gKGFycmF5T2ZWYWx1ZXMpIHsKICAgICAgICAvLyBJZiB5b3UgcGFzc2VkIHplcm8gYXJncywgd2UgZGVzdHJveSBldmVyeXRoaW5nCiAgICAgICAgaWYgKGFycmF5T2ZWYWx1ZXMgPT09IHVuZGVmaW5lZCkKICAgICAgICAgICAgcmV0dXJuIHRoaXNbJ2Rlc3Ryb3knXShmdW5jdGlvbigpIHsgcmV0dXJuIHRydWUgfSk7CgogICAgICAgIC8vIElmIHlvdSBwYXNzZWQgYW4gYXJnLCB3ZSBpbnRlcnByZXQgaXQgYXMgYW4gYXJyYXkgb2YgZW50cmllcyB0byBkZXN0cm95CiAgICAgICAgaWYgKCFhcnJheU9mVmFsdWVzKQogICAgICAgICAgICByZXR1cm4gW107CiAgICAgICAgcmV0dXJuIHRoaXNbJ2Rlc3Ryb3knXShmdW5jdGlvbiAodmFsdWUpIHsKICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheU9mVmFsdWVzLCB2YWx1ZSkgPj0gMDsKICAgICAgICB9KTsKICAgIH0sCgogICAgJ2luZGV4T2YnOiBmdW5jdGlvbiAoaXRlbSkgewogICAgICAgIHZhciB1bmRlcmx5aW5nQXJyYXkgPSB0aGlzKCk7CiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZih1bmRlcmx5aW5nQXJyYXksIGl0ZW0pOwogICAgfSwKCiAgICAncmVwbGFjZSc6IGZ1bmN0aW9uKG9sZEl0ZW0sIG5ld0l0ZW0pIHsKICAgICAgICB2YXIgaW5kZXggPSB0aGlzWydpbmRleE9mJ10ob2xkSXRlbSk7CiAgICAgICAgaWYgKGluZGV4ID49IDApIHsKICAgICAgICAgICAgdGhpcy52YWx1ZVdpbGxNdXRhdGUoKTsKICAgICAgICAgICAgdGhpcy5wZWVrKClbaW5kZXhdID0gbmV3SXRlbTsKICAgICAgICAgICAgdGhpcy52YWx1ZUhhc011dGF0ZWQoKTsKICAgICAgICB9CiAgICB9Cn07CgovLyBQb3B1bGF0ZSBrby5vYnNlcnZhYmxlQXJyYXkuZm4gd2l0aCByZWFkL3dyaXRlIGZ1bmN0aW9ucyBmcm9tIG5hdGl2ZSBhcnJheXMKLy8gSW1wb3J0YW50OiBEbyBub3QgYWRkIGFueSBhZGRpdGlvbmFsIGZ1bmN0aW9ucyBoZXJlIHRoYXQgbWF5IHJlYXNvbmFibHkgYmUgdXNlZCB0byAqcmVhZCogZGF0YSBmcm9tIHRoZSBhcnJheQovLyBiZWNhdXNlIHdlJ2xsIGV2YWwgdGhlbSB3aXRob3V0IGNhdXNpbmcgc3Vic2NyaXB0aW9ucywgc28ga28uY29tcHV0ZWQgb3V0cHV0IGNvdWxkIGVuZCB1cCBnZXR0aW5nIHN0YWxlCmtvLnV0aWxzLmFycmF5Rm9yRWFjaChbInBvcCIsICJwdXNoIiwgInJldmVyc2UiLCAic2hpZnQiLCAic29ydCIsICJzcGxpY2UiLCAidW5zaGlmdCJdLCBmdW5jdGlvbiAobWV0aG9kTmFtZSkgewogICAga28ub2JzZXJ2YWJsZUFycmF5WydmbiddW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkgewogICAgICAgIC8vIFVzZSAicGVlayIgdG8gYXZvaWQgY3JlYXRpbmcgYSBzdWJzY3JpcHRpb24gaW4gYW55IGNvbXB1dGVkIHRoYXQgd2UncmUgZXhlY3V0aW5nIGluIHRoZSBjb250ZXh0IG9mCiAgICAgICAgLy8gKGZvciBjb25zaXN0ZW5jeSB3aXRoIG11dGF0aW5nIHJlZ3VsYXIgb2JzZXJ2YWJsZXMpCiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpOwogICAgICAgIHRoaXMudmFsdWVXaWxsTXV0YXRlKCk7CiAgICAgICAgdGhpcy5jYWNoZURpZmZGb3JLbm93bk9wZXJhdGlvbih1bmRlcmx5aW5nQXJyYXksIG1ldGhvZE5hbWUsIGFyZ3VtZW50cyk7CiAgICAgICAgdmFyIG1ldGhvZENhbGxSZXN1bHQgPSB1bmRlcmx5aW5nQXJyYXlbbWV0aG9kTmFtZV0uYXBwbHkodW5kZXJseWluZ0FycmF5LCBhcmd1bWVudHMpOwogICAgICAgIHRoaXMudmFsdWVIYXNNdXRhdGVkKCk7CiAgICAgICAgcmV0dXJuIG1ldGhvZENhbGxSZXN1bHQ7CiAgICB9Owp9KTsKCi8vIFBvcHVsYXRlIGtvLm9ic2VydmFibGVBcnJheS5mbiB3aXRoIHJlYWQtb25seSBmdW5jdGlvbnMgZnJvbSBuYXRpdmUgYXJyYXlzCmtvLnV0aWxzLmFycmF5Rm9yRWFjaChbInNsaWNlIl0sIGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7CiAgICBrby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ11bbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMoKTsKICAgICAgICByZXR1cm4gdW5kZXJseWluZ0FycmF5W21ldGhvZE5hbWVdLmFwcGx5KHVuZGVybHlpbmdBcnJheSwgYXJndW1lbnRzKTsKICAgIH07Cn0pOwoKLy8gTm90ZSB0aGF0IGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgcHJvdG8gYXNzaWdubWVudCwgdGhlCi8vIGluaGVyaXRhbmNlIGNoYWluIGlzIGNyZWF0ZWQgbWFudWFsbHkgaW4gdGhlIGtvLm9ic2VydmFibGVBcnJheSBjb25zdHJ1Y3RvcgppZiAoa28udXRpbHMuY2FuU2V0UHJvdG90eXBlKSB7CiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZihrby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ10sIGtvLm9ic2VydmFibGVbJ2ZuJ10pOwp9Cgprby5leHBvcnRTeW1ib2woJ29ic2VydmFibGVBcnJheScsIGtvLm9ic2VydmFibGVBcnJheSk7CnZhciBhcnJheUNoYW5nZUV2ZW50TmFtZSA9ICdhcnJheUNoYW5nZSc7CmtvLmV4dGVuZGVyc1sndHJhY2tBcnJheUNoYW5nZXMnXSA9IGZ1bmN0aW9uKHRhcmdldCkgewogICAgLy8gT25seSBtb2RpZnkgdGhlIHRhcmdldCBvYnNlcnZhYmxlIG9uY2UKICAgIGlmICh0YXJnZXQuY2FjaGVEaWZmRm9yS25vd25PcGVyYXRpb24pIHsKICAgICAgICByZXR1cm47CiAgICB9CiAgICB2YXIgdHJhY2tpbmdDaGFuZ2VzID0gZmFsc2UsCiAgICAgICAgY2FjaGVkRGlmZiA9IG51bGwsCiAgICAgICAgcGVuZGluZ05vdGlmaWNhdGlvbnMgPSAwLAogICAgICAgIHVuZGVybHlpbmdTdWJzY3JpYmVGdW5jdGlvbiA9IHRhcmdldC5zdWJzY3JpYmU7CgogICAgLy8gSW50ZXJjZXB0ICJzdWJzY3JpYmUiIGNhbGxzLCBhbmQgZm9yIGFycmF5IGNoYW5nZSBldmVudHMsIGVuc3VyZSBjaGFuZ2UgdHJhY2tpbmcgaXMgZW5hYmxlZAogICAgdGFyZ2V0LnN1YnNjcmliZSA9IHRhcmdldFsnc3Vic2NyaWJlJ10gPSBmdW5jdGlvbihjYWxsYmFjaywgY2FsbGJhY2tUYXJnZXQsIGV2ZW50KSB7CiAgICAgICAgaWYgKGV2ZW50ID09PSBhcnJheUNoYW5nZUV2ZW50TmFtZSkgewogICAgICAgICAgICB0cmFja0NoYW5nZXMoKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHVuZGVybHlpbmdTdWJzY3JpYmVGdW5jdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgfTsKCiAgICBmdW5jdGlvbiB0cmFja0NoYW5nZXMoKSB7CiAgICAgICAgLy8gQ2FsbGluZyAndHJhY2tDaGFuZ2VzJyBtdWx0aXBsZSB0aW1lcyBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGl0IG9uY2UKICAgICAgICBpZiAodHJhY2tpbmdDaGFuZ2VzKSB7CiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB9CgogICAgICAgIHRyYWNraW5nQ2hhbmdlcyA9IHRydWU7CgogICAgICAgIC8vIEludGVyY2VwdCAibm90aWZ5U3Vic2NyaWJlcnMiIHRvIHRyYWNrIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBjYWxsZWQuCiAgICAgICAgdmFyIHVuZGVybHlpbmdOb3RpZnlTdWJzY3JpYmVyc0Z1bmN0aW9uID0gdGFyZ2V0Wydub3RpZnlTdWJzY3JpYmVycyddOwogICAgICAgIHRhcmdldFsnbm90aWZ5U3Vic2NyaWJlcnMnXSA9IGZ1bmN0aW9uKHZhbHVlVG9Ob3RpZnksIGV2ZW50KSB7CiAgICAgICAgICAgIGlmICghZXZlbnQgfHwgZXZlbnQgPT09IGRlZmF1bHRFdmVudCkgewogICAgICAgICAgICAgICAgKytwZW5kaW5nTm90aWZpY2F0aW9uczsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gdW5kZXJseWluZ05vdGlmeVN1YnNjcmliZXJzRnVuY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9OwoKICAgICAgICAvLyBFYWNoIHRpbWUgdGhlIGFycmF5IGNoYW5nZXMgdmFsdWUsIGNhcHR1cmUgYSBjbG9uZSBzbyB0aGF0IG9uIHRoZSBuZXh0CiAgICAgICAgLy8gY2hhbmdlIGl0J3MgcG9zc2libGUgdG8gcHJvZHVjZSBhIGRpZmYKICAgICAgICB2YXIgcHJldmlvdXNDb250ZW50cyA9IFtdLmNvbmNhdCh0YXJnZXQucGVlaygpIHx8IFtdKTsKICAgICAgICBjYWNoZWREaWZmID0gbnVsbDsKICAgICAgICB0YXJnZXQuc3Vic2NyaWJlKGZ1bmN0aW9uKGN1cnJlbnRDb250ZW50cykgewogICAgICAgICAgICAvLyBNYWtlIGEgY29weSBvZiB0aGUgY3VycmVudCBjb250ZW50cyBhbmQgZW5zdXJlIGl0J3MgYW4gYXJyYXkKICAgICAgICAgICAgY3VycmVudENvbnRlbnRzID0gW10uY29uY2F0KGN1cnJlbnRDb250ZW50cyB8fCBbXSk7CgogICAgICAgICAgICAvLyBDb21wdXRlIHRoZSBkaWZmIGFuZCBpc3N1ZSBub3RpZmljYXRpb25zLCBidXQgb25seSBpZiBzb21lb25lIGlzIGxpc3RlbmluZwogICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1N1YnNjcmlwdGlvbnNGb3JFdmVudChhcnJheUNoYW5nZUV2ZW50TmFtZSkpIHsKICAgICAgICAgICAgICAgIHZhciBjaGFuZ2VzID0gZ2V0Q2hhbmdlcyhwcmV2aW91c0NvbnRlbnRzLCBjdXJyZW50Q29udGVudHMpOwogICAgICAgICAgICAgICAgaWYgKGNoYW5nZXMubGVuZ3RoKSB7CiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Wydub3RpZnlTdWJzY3JpYmVycyddKGNoYW5nZXMsIGFycmF5Q2hhbmdlRXZlbnROYW1lKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQoKICAgICAgICAgICAgLy8gRWxpbWluYXRlIHJlZmVyZW5jZXMgdG8gdGhlIG9sZCwgcmVtb3ZlZCBpdGVtcywgc28gdGhleSBjYW4gYmUgR0NlZAogICAgICAgICAgICBwcmV2aW91c0NvbnRlbnRzID0gY3VycmVudENvbnRlbnRzOwogICAgICAgICAgICBjYWNoZWREaWZmID0gbnVsbDsKICAgICAgICAgICAgcGVuZGluZ05vdGlmaWNhdGlvbnMgPSAwOwogICAgICAgIH0pOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldENoYW5nZXMocHJldmlvdXNDb250ZW50cywgY3VycmVudENvbnRlbnRzKSB7CiAgICAgICAgLy8gV2UgdHJ5IHRvIHJlLXVzZSBjYWNoZWQgZGlmZnMuCiAgICAgICAgLy8gVGhlIHNjZW5hcmlvcyB3aGVyZSBwZW5kaW5nTm90aWZpY2F0aW9ucyA+IDEgYXJlIHdoZW4gdXNpbmcgcmF0ZS1saW1pdGluZyBvciB0aGUgRGVmZXJyZWQgVXBkYXRlcwogICAgICAgIC8vIHBsdWdpbiwgd2hpY2ggd2l0aG91dCB0aGlzIGNoZWNrIHdvdWxkIG5vdCBiZSBjb21wYXRpYmxlIHdpdGggYXJyYXlDaGFuZ2Ugbm90aWZpY2F0aW9ucy4gTm9ybWFsbHksCiAgICAgICAgLy8gbm90aWZpY2F0aW9ucyBhcmUgaXNzdWVkIGltbWVkaWF0ZWx5IHNvIHdlIHdvdWxkbid0IGJlIHF1ZXVlaW5nIHVwIG1vcmUgdGhhbiBvbmUuCiAgICAgICAgaWYgKCFjYWNoZWREaWZmIHx8IHBlbmRpbmdOb3RpZmljYXRpb25zID4gMSkgewogICAgICAgICAgICBjYWNoZWREaWZmID0ga28udXRpbHMuY29tcGFyZUFycmF5cyhwcmV2aW91c0NvbnRlbnRzLCBjdXJyZW50Q29udGVudHMsIHsgJ3NwYXJzZSc6IHRydWUgfSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gY2FjaGVkRGlmZjsKICAgIH0KCiAgICB0YXJnZXQuY2FjaGVEaWZmRm9yS25vd25PcGVyYXRpb24gPSBmdW5jdGlvbihyYXdBcnJheSwgb3BlcmF0aW9uTmFtZSwgYXJncykgewogICAgICAgIC8vIE9ubHkgcnVuIGlmIHdlJ3JlIGN1cnJlbnRseSB0cmFja2luZyBjaGFuZ2VzIGZvciB0aGlzIG9ic2VydmFibGUgYXJyYXkKICAgICAgICAvLyBhbmQgdGhlcmUgYXJlbid0IGFueSBwZW5kaW5nIGRlZmVycmVkIG5vdGlmaWNhdGlvbnMuCiAgICAgICAgaWYgKCF0cmFja2luZ0NoYW5nZXMgfHwgcGVuZGluZ05vdGlmaWNhdGlvbnMpIHsKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KICAgICAgICB2YXIgZGlmZiA9IFtdLAogICAgICAgICAgICBhcnJheUxlbmd0aCA9IHJhd0FycmF5Lmxlbmd0aCwKICAgICAgICAgICAgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoLAogICAgICAgICAgICBvZmZzZXQgPSAwOwoKICAgICAgICBmdW5jdGlvbiBwdXNoRGlmZihzdGF0dXMsIHZhbHVlLCBpbmRleCkgewogICAgICAgICAgICByZXR1cm4gZGlmZltkaWZmLmxlbmd0aF0gPSB7ICdzdGF0dXMnOiBzdGF0dXMsICd2YWx1ZSc6IHZhbHVlLCAnaW5kZXgnOiBpbmRleCB9OwogICAgICAgIH0KICAgICAgICBzd2l0Y2ggKG9wZXJhdGlvbk5hbWUpIHsKICAgICAgICAgICAgY2FzZSAncHVzaCc6CiAgICAgICAgICAgICAgICBvZmZzZXQgPSBhcnJheUxlbmd0aDsKICAgICAgICAgICAgY2FzZSAndW5zaGlmdCc6CiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJnc0xlbmd0aDsgaW5kZXgrKykgewogICAgICAgICAgICAgICAgICAgIHB1c2hEaWZmKCdhZGRlZCcsIGFyZ3NbaW5kZXhdLCBvZmZzZXQgKyBpbmRleCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgJ3BvcCc6CiAgICAgICAgICAgICAgICBvZmZzZXQgPSBhcnJheUxlbmd0aCAtIDE7CiAgICAgICAgICAgIGNhc2UgJ3NoaWZ0JzoKICAgICAgICAgICAgICAgIGlmIChhcnJheUxlbmd0aCkgewogICAgICAgICAgICAgICAgICAgIHB1c2hEaWZmKCdkZWxldGVkJywgcmF3QXJyYXlbb2Zmc2V0XSwgb2Zmc2V0KTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGJyZWFrOwoKICAgICAgICAgICAgY2FzZSAnc3BsaWNlJzoKICAgICAgICAgICAgICAgIC8vIE5lZ2F0aXZlIHN0YXJ0IGluZGV4IG1lYW5zICdmcm9tIGVuZCBvZiBhcnJheScuIEFmdGVyIHRoYXQgd2UgY2xhbXAgdG8gWzAuLi5hcnJheUxlbmd0aF0uCiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc3BsaWNlCiAgICAgICAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGFyZ3NbMF0gPCAwID8gYXJyYXlMZW5ndGggKyBhcmdzWzBdIDogYXJnc1swXSksIGFycmF5TGVuZ3RoKSwKICAgICAgICAgICAgICAgICAgICBlbmREZWxldGVJbmRleCA9IGFyZ3NMZW5ndGggPT09IDEgPyBhcnJheUxlbmd0aCA6IE1hdGgubWluKHN0YXJ0SW5kZXggKyAoYXJnc1sxXSB8fCAwKSwgYXJyYXlMZW5ndGgpLAogICAgICAgICAgICAgICAgICAgIGVuZEFkZEluZGV4ID0gc3RhcnRJbmRleCArIGFyZ3NMZW5ndGggLSAyLAogICAgICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gTWF0aC5tYXgoZW5kRGVsZXRlSW5kZXgsIGVuZEFkZEluZGV4KSwKICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMgPSBbXSwgZGVsZXRpb25zID0gW107CiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IHN0YXJ0SW5kZXgsIGFyZ3NJbmRleCA9IDI7IGluZGV4IDwgZW5kSW5kZXg7ICsraW5kZXgsICsrYXJnc0luZGV4KSB7CiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgZW5kRGVsZXRlSW5kZXgpCiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5wdXNoKHB1c2hEaWZmKCdkZWxldGVkJywgcmF3QXJyYXlbaW5kZXhdLCBpbmRleCkpOwogICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGVuZEFkZEluZGV4KQogICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMucHVzaChwdXNoRGlmZignYWRkZWQnLCBhcmdzW2FyZ3NJbmRleF0sIGluZGV4KSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBrby51dGlscy5maW5kTW92ZXNJbkFycmF5Q29tcGFyaXNvbihkZWxldGlvbnMsIGFkZGl0aW9ucyk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgfQogICAgICAgIGNhY2hlZERpZmYgPSBkaWZmOwogICAgfTsKfTsKa28uY29tcHV0ZWQgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zLCBldmFsdWF0b3JGdW5jdGlvblRhcmdldCwgb3B0aW9ucykgewogICAgdmFyIF9sYXRlc3RWYWx1ZSwKICAgICAgICBfbmVlZHNFdmFsdWF0aW9uID0gdHJ1ZSwKICAgICAgICBfaXNCZWluZ0V2YWx1YXRlZCA9IGZhbHNlLAogICAgICAgIF9zdXBwcmVzc0Rpc3Bvc2FsVW50aWxEaXNwb3NlV2hlblJldHVybnNGYWxzZSA9IGZhbHNlLAogICAgICAgIF9pc0Rpc3Bvc2VkID0gZmFsc2UsCiAgICAgICAgcmVhZEZ1bmN0aW9uID0gZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnMsCiAgICAgICAgcHVyZSA9IGZhbHNlLAogICAgICAgIGlzU2xlZXBpbmcgPSBmYWxzZTsKCiAgICBpZiAocmVhZEZ1bmN0aW9uICYmIHR5cGVvZiByZWFkRnVuY3Rpb24gPT0gIm9iamVjdCIpIHsKICAgICAgICAvLyBTaW5nbGUtcGFyYW1ldGVyIHN5bnRheCAtIGV2ZXJ5dGhpbmcgaXMgb24gdGhpcyAib3B0aW9ucyIgcGFyYW0KICAgICAgICBvcHRpb25zID0gcmVhZEZ1bmN0aW9uOwogICAgICAgIHJlYWRGdW5jdGlvbiA9IG9wdGlvbnNbInJlYWQiXTsKICAgIH0gZWxzZSB7CiAgICAgICAgLy8gTXVsdGktcGFyYW1ldGVyIHN5bnRheCAtIGNvbnN0cnVjdCB0aGUgb3B0aW9ucyBhY2NvcmRpbmcgdG8gdGhlIHBhcmFtcyBwYXNzZWQKICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsKICAgICAgICBpZiAoIXJlYWRGdW5jdGlvbikKICAgICAgICAgICAgcmVhZEZ1bmN0aW9uID0gb3B0aW9uc1sicmVhZCJdOwogICAgfQogICAgaWYgKHR5cGVvZiByZWFkRnVuY3Rpb24gIT0gImZ1bmN0aW9uIikKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIlBhc3MgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBrby5jb21wdXRlZCIpOwoKICAgIGZ1bmN0aW9uIGFkZFN1YnNjcmlwdGlvblRvRGVwZW5kZW5jeShzdWJzY3JpYmFibGUsIGlkKSB7CiAgICAgICAgaWYgKCFfc3Vic2NyaXB0aW9uc1RvRGVwZW5kZW5jaWVzW2lkXSkgewogICAgICAgICAgICBfc3Vic2NyaXB0aW9uc1RvRGVwZW5kZW5jaWVzW2lkXSA9IHN1YnNjcmliYWJsZS5zdWJzY3JpYmUoZXZhbHVhdGVQb3NzaWJseUFzeW5jKTsKICAgICAgICAgICAgKytfZGVwZW5kZW5jaWVzQ291bnQ7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGRpc3Bvc2VBbGxTdWJzY3JpcHRpb25zVG9EZXBlbmRlbmNpZXMoKSB7CiAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaChfc3Vic2NyaXB0aW9uc1RvRGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoaWQsIHN1YnNjcmlwdGlvbikgewogICAgICAgICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpOwogICAgICAgIH0pOwogICAgICAgIF9zdWJzY3JpcHRpb25zVG9EZXBlbmRlbmNpZXMgPSB7fTsKICAgIH0KCiAgICBmdW5jdGlvbiBkaXNwb3NlQ29tcHV0ZWQoKSB7CiAgICAgICAgZGlzcG9zZUFsbFN1YnNjcmlwdGlvbnNUb0RlcGVuZGVuY2llcygpOwogICAgICAgIF9kZXBlbmRlbmNpZXNDb3VudCA9IDA7CiAgICAgICAgX2lzRGlzcG9zZWQgPSB0cnVlOwogICAgICAgIF9uZWVkc0V2YWx1YXRpb24gPSBmYWxzZTsKICAgIH0KCiAgICBmdW5jdGlvbiBldmFsdWF0ZVBvc3NpYmx5QXN5bmMoKSB7CiAgICAgICAgdmFyIHRocm90dGxlRXZhbHVhdGlvblRpbWVvdXQgPSBkZXBlbmRlbnRPYnNlcnZhYmxlWyd0aHJvdHRsZUV2YWx1YXRpb24nXTsKICAgICAgICBpZiAodGhyb3R0bGVFdmFsdWF0aW9uVGltZW91dCAmJiB0aHJvdHRsZUV2YWx1YXRpb25UaW1lb3V0ID49IDApIHsKICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGV2YWx1YXRpb25UaW1lb3V0SW5zdGFuY2UpOwogICAgICAgICAgICBldmFsdWF0aW9uVGltZW91dEluc3RhbmNlID0gc2V0VGltZW91dChldmFsdWF0ZUltbWVkaWF0ZSwgdGhyb3R0bGVFdmFsdWF0aW9uVGltZW91dCk7CiAgICAgICAgfSBlbHNlIGlmIChkZXBlbmRlbnRPYnNlcnZhYmxlLl9ldmFsUmF0ZUxpbWl0ZWQpIHsKICAgICAgICAgICAgZGVwZW5kZW50T2JzZXJ2YWJsZS5fZXZhbFJhdGVMaW1pdGVkKCk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgZXZhbHVhdGVJbW1lZGlhdGUoKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gZXZhbHVhdGVJbW1lZGlhdGUoc3VwcHJlc3NDaGFuZ2VOb3RpZmljYXRpb24pIHsKICAgICAgICBpZiAoX2lzQmVpbmdFdmFsdWF0ZWQpIHsKICAgICAgICAgICAgaWYgKHB1cmUpIHsKICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCJBICdwdXJlJyBjb21wdXRlZCBtdXN0IG5vdCBiZSBjYWxsZWQgcmVjdXJzaXZlbHkiKTsKICAgICAgICAgICAgfQogICAgICAgICAgICAvLyBJZiB0aGUgZXZhbHVhdGlvbiBvZiBhIGtvLmNvbXB1dGVkIGNhdXNlcyBzaWRlIGVmZmVjdHMsIGl0J3MgcG9zc2libGUgdGhhdCBpdCB3aWxsIHRyaWdnZXIgaXRzIG93biByZS1ldmFsdWF0aW9uLgogICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCBkZXNpcmFibGUgKGl0J3MgaGFyZCBmb3IgYSBkZXZlbG9wZXIgdG8gcmVhbGlzZSBhIGNoYWluIG9mIGRlcGVuZGVuY2llcyBtaWdodCBjYXVzZSB0aGlzLCBhbmQgdGhleSBhbG1vc3QKICAgICAgICAgICAgLy8gY2VydGFpbmx5IGRpZG4ndCBpbnRlbmQgaW5maW5pdGUgcmUtZXZhbHVhdGlvbnMpLiBTbywgZm9yIHByZWRpY3RhYmlsaXR5LCB3ZSBzaW1wbHkgcHJldmVudCBrby5jb21wdXRlZHMgZnJvbSBjYXVzaW5nCiAgICAgICAgICAgIC8vIHRoZWlyIG93biByZS1ldmFsdWF0aW9uLiBGdXJ0aGVyIGRpc2N1c3Npb24gYXQgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L3B1bGwvMzg3CiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB9CgogICAgICAgIC8vIERvIG5vdCBldmFsdWF0ZSAoYW5kIHBvc3NpYmx5IGNhcHR1cmUgbmV3IGRlcGVuZGVuY2llcykgaWYgZGlzcG9zZWQKICAgICAgICBpZiAoX2lzRGlzcG9zZWQpIHsKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KCiAgICAgICAgaWYgKGRpc3Bvc2VXaGVuICYmIGRpc3Bvc2VXaGVuKCkpIHsKICAgICAgICAgICAgLy8gU2VlIGNvbW1lbnQgYmVsb3cgYWJvdXQgX3N1cHByZXNzRGlzcG9zYWxVbnRpbERpc3Bvc2VXaGVuUmV0dXJuc0ZhbHNlCiAgICAgICAgICAgIGlmICghX3N1cHByZXNzRGlzcG9zYWxVbnRpbERpc3Bvc2VXaGVuUmV0dXJuc0ZhbHNlKSB7CiAgICAgICAgICAgICAgICBkaXNwb3NlKCk7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAvLyBJdCBqdXN0IGRpZCByZXR1cm4gZmFsc2UsIHNvIHdlIGNhbiBzdG9wIHN1cHByZXNzaW5nIG5vdwogICAgICAgICAgICBfc3VwcHJlc3NEaXNwb3NhbFVudGlsRGlzcG9zZVdoZW5SZXR1cm5zRmFsc2UgPSBmYWxzZTsKICAgICAgICB9CgogICAgICAgIF9pc0JlaW5nRXZhbHVhdGVkID0gdHJ1ZTsKCiAgICAgICAgLy8gV2hlbiBzbGVlcGluZywgcmVjYWxjdWxhdGUgdGhlIHZhbHVlIGFuZCByZXR1cm4uCiAgICAgICAgaWYgKGlzU2xlZXBpbmcpIHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIHZhciBkZXBlbmRlbmN5VHJhY2tpbmcgPSB7fTsKICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uYmVnaW4oewogICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoc3Vic2NyaWJhYmxlLCBpZCkgewogICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlcGVuZGVuY3lUcmFja2luZ1tpZF0pIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY3lUcmFja2luZ1tpZF0gPSAxOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgKytfZGVwZW5kZW5jaWVzQ291bnQ7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkOiBkZXBlbmRlbnRPYnNlcnZhYmxlLAogICAgICAgICAgICAgICAgICAgIGlzSW5pdGlhbDogdW5kZWZpbmVkCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIF9kZXBlbmRlbmNpZXNDb3VudCA9IDA7CiAgICAgICAgICAgICAgICBfbGF0ZXN0VmFsdWUgPSByZWFkRnVuY3Rpb24uY2FsbChldmFsdWF0b3JGdW5jdGlvblRhcmdldCk7CiAgICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmVuZCgpOwogICAgICAgICAgICAgICAgX2lzQmVpbmdFdmFsdWF0ZWQgPSBmYWxzZTsKICAgICAgICAgICAgfQogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAvLyBJbml0aWFsbHksIHdlIGFzc3VtZSB0aGF0IG5vbmUgb2YgdGhlIHN1YnNjcmlwdGlvbnMgYXJlIHN0aWxsIGJlaW5nIHVzZWQgKGkuZS4sIGFsbCBhcmUgY2FuZGlkYXRlcyBmb3IgZGlzcG9zYWwpLgogICAgICAgICAgICAgICAgLy8gVGhlbiwgZHVyaW5nIGV2YWx1YXRpb24sIHdlIGNyb3NzIG9mZiBhbnkgdGhhdCBhcmUgaW4gZmFjdCBzdGlsbCBiZWluZyB1c2VkLgogICAgICAgICAgICAgICAgdmFyIGRpc3Bvc2FsQ2FuZGlkYXRlcyA9IF9zdWJzY3JpcHRpb25zVG9EZXBlbmRlbmNpZXMsIGRpc3Bvc2FsQ291bnQgPSBfZGVwZW5kZW5jaWVzQ291bnQ7CiAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmJlZ2luKHsKICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oc3Vic2NyaWJhYmxlLCBpZCkgewogICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pc0Rpc3Bvc2VkKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcG9zYWxDb3VudCAmJiBkaXNwb3NhbENhbmRpZGF0ZXNbaWRdKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3Qgd2FudCB0byBkaXNwb3NlIHRoaXMgc3Vic2NyaXB0aW9uLCBhcyBpdCdzIHN0aWxsIGJlaW5nIHVzZWQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3Vic2NyaXB0aW9uc1RvRGVwZW5kZW5jaWVzW2lkXSA9IGRpc3Bvc2FsQ2FuZGlkYXRlc1tpZF07CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytfZGVwZW5kZW5jaWVzQ291bnQ7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRpc3Bvc2FsQ2FuZGlkYXRlc1tpZF07CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1kaXNwb3NhbENvdW50OwogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCcmFuZCBuZXcgc3Vic2NyaXB0aW9uIC0gYWRkIGl0CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3Vic2NyaXB0aW9uVG9EZXBlbmRlbmN5KHN1YnNjcmliYWJsZSwgaWQpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICBjb21wdXRlZDogZGVwZW5kZW50T2JzZXJ2YWJsZSwKICAgICAgICAgICAgICAgICAgICBpc0luaXRpYWw6IHB1cmUgPyB1bmRlZmluZWQgOiAhX2RlcGVuZGVuY2llc0NvdW50ICAgICAgICAvLyBJZiB3ZSdyZSBldmFsdWF0aW5nIHdoZW4gdGhlcmUgYXJlIG5vIHByZXZpb3VzIGRlcGVuZGVuY2llcywgaXQgbXVzdCBiZSB0aGUgZmlyc3QgdGltZQogICAgICAgICAgICAgICAgfSk7CgogICAgICAgICAgICAgICAgX3N1YnNjcmlwdGlvbnNUb0RlcGVuZGVuY2llcyA9IHt9OwogICAgICAgICAgICAgICAgX2RlcGVuZGVuY2llc0NvdW50ID0gMDsKCiAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IGV2YWx1YXRvckZ1bmN0aW9uVGFyZ2V0ID8gcmVhZEZ1bmN0aW9uLmNhbGwoZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQpIDogcmVhZEZ1bmN0aW9uKCk7CgogICAgICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmVuZCgpOwoKICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWFjaCBzdWJzY3JpcHRpb24gbm8gbG9uZ2VyIGJlaW5nIHVzZWQsIHJlbW92ZSBpdCBmcm9tIHRoZSBhY3RpdmUgc3Vic2NyaXB0aW9ucyBsaXN0IGFuZCBkaXNwb3NlIGl0CiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3Bvc2FsQ291bnQpIHsKICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaChkaXNwb3NhbENhbmRpZGF0ZXMsIGZ1bmN0aW9uKGlkLCB0b0Rpc3Bvc2UpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRGlzcG9zZS5kaXNwb3NlKCk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAgICAgX25lZWRzRXZhbHVhdGlvbiA9IGZhbHNlOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbnRPYnNlcnZhYmxlLmlzRGlmZmVyZW50KF9sYXRlc3RWYWx1ZSwgbmV3VmFsdWUpKSB7CiAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50T2JzZXJ2YWJsZVsibm90aWZ5U3Vic2NyaWJlcnMiXShfbGF0ZXN0VmFsdWUsICJiZWZvcmVDaGFuZ2UiKTsKCiAgICAgICAgICAgICAgICAgICAgX2xhdGVzdFZhbHVlID0gbmV3VmFsdWU7CiAgICAgICAgICAgICAgICAgICAgaWYgKERFQlVHKSBkZXBlbmRlbnRPYnNlcnZhYmxlLl9sYXRlc3RWYWx1ZSA9IF9sYXRlc3RWYWx1ZTsKCiAgICAgICAgICAgICAgICAgICAgaWYgKHN1cHByZXNzQ2hhbmdlTm90aWZpY2F0aW9uICE9PSB0cnVlKSB7ICAvLyBDaGVjayBmb3Igc3RyaWN0IHRydWUgdmFsdWUgc2luY2Ugc2V0VGltZW91dCBpbiBGaXJlZm94IHBhc3NlcyBhIG51bWVyaWMgdmFsdWUgdG8gdGhlIGZ1bmN0aW9uCiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudE9ic2VydmFibGVbIm5vdGlmeVN1YnNjcmliZXJzIl0oX2xhdGVzdFZhbHVlKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgICAgICBfaXNCZWluZ0V2YWx1YXRlZCA9IGZhbHNlOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICBpZiAoIV9kZXBlbmRlbmNpZXNDb3VudCkKICAgICAgICAgICAgZGlzcG9zZSgpOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlcGVuZGVudE9ic2VydmFibGUoKSB7CiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JpdGVGdW5jdGlvbiA9PT0gImZ1bmN0aW9uIikgewogICAgICAgICAgICAgICAgLy8gV3JpdGluZyBhIHZhbHVlCiAgICAgICAgICAgICAgICB3cml0ZUZ1bmN0aW9uLmFwcGx5KGV2YWx1YXRvckZ1bmN0aW9uVGFyZ2V0LCBhcmd1bWVudHMpOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB0aGlzOyAvLyBQZXJtaXRzIGNoYWluZWQgYXNzaWdubWVudHMKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAvLyBSZWFkaW5nIHRoZSB2YWx1ZQogICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLnJlZ2lzdGVyRGVwZW5kZW5jeShkZXBlbmRlbnRPYnNlcnZhYmxlKTsKICAgICAgICAgICAgaWYgKF9uZWVkc0V2YWx1YXRpb24pCiAgICAgICAgICAgICAgICBldmFsdWF0ZUltbWVkaWF0ZSh0cnVlIC8qIHN1cHByZXNzQ2hhbmdlTm90aWZpY2F0aW9uICovKTsKICAgICAgICAgICAgcmV0dXJuIF9sYXRlc3RWYWx1ZTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gcGVlaygpIHsKICAgICAgICAvLyBQZWVrIHdvbid0IHJlLWV2YWx1YXRlLCBleGNlcHQgdG8gZ2V0IHRoZSBpbml0aWFsIHZhbHVlIHdoZW4gImRlZmVyRXZhbHVhdGlvbiIgaXMgc2V0LCBvciB3aGlsZSB0aGUgY29tcHV0ZWQgaXMgc2xlZXBpbmcuCiAgICAgICAgLy8gVGhvc2UgYXJlIHRoZSBvbmx5IHRpbWVzIHRoYXQgYm90aCBvZiB0aGVzZSBjb25kaXRpb25zIHdpbGwgYmUgc2F0aXNmaWVkLgogICAgICAgIGlmIChfbmVlZHNFdmFsdWF0aW9uICYmICFfZGVwZW5kZW5jaWVzQ291bnQpCiAgICAgICAgICAgIGV2YWx1YXRlSW1tZWRpYXRlKHRydWUgLyogc3VwcHJlc3NDaGFuZ2VOb3RpZmljYXRpb24gKi8pOwogICAgICAgIHJldHVybiBfbGF0ZXN0VmFsdWU7CiAgICB9CgogICAgZnVuY3Rpb24gaXNBY3RpdmUoKSB7CiAgICAgICAgcmV0dXJuIF9uZWVkc0V2YWx1YXRpb24gfHwgX2RlcGVuZGVuY2llc0NvdW50ID4gMDsKICAgIH0KCiAgICAvLyBCeSBoZXJlLCAib3B0aW9ucyIgaXMgYWx3YXlzIG5vbi1udWxsCiAgICB2YXIgd3JpdGVGdW5jdGlvbiA9IG9wdGlvbnNbIndyaXRlIl0sCiAgICAgICAgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkID0gb3B0aW9uc1siZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkIl0gfHwgb3B0aW9ucy5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgfHwgbnVsbCwKICAgICAgICBkaXNwb3NlV2hlbk9wdGlvbiA9IG9wdGlvbnNbImRpc3Bvc2VXaGVuIl0gfHwgb3B0aW9ucy5kaXNwb3NlV2hlbiwKICAgICAgICBkaXNwb3NlV2hlbiA9IGRpc3Bvc2VXaGVuT3B0aW9uLAogICAgICAgIGRpc3Bvc2UgPSBkaXNwb3NlQ29tcHV0ZWQsCiAgICAgICAgX3N1YnNjcmlwdGlvbnNUb0RlcGVuZGVuY2llcyA9IHt9LAogICAgICAgIF9kZXBlbmRlbmNpZXNDb3VudCA9IDAsCiAgICAgICAgZXZhbHVhdGlvblRpbWVvdXRJbnN0YW5jZSA9IG51bGw7CgogICAgaWYgKCFldmFsdWF0b3JGdW5jdGlvblRhcmdldCkKICAgICAgICBldmFsdWF0b3JGdW5jdGlvblRhcmdldCA9IG9wdGlvbnNbIm93bmVyIl07CgogICAga28uc3Vic2NyaWJhYmxlLmNhbGwoZGVwZW5kZW50T2JzZXJ2YWJsZSk7CiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZk9yRXh0ZW5kKGRlcGVuZGVudE9ic2VydmFibGUsIGtvLmRlcGVuZGVudE9ic2VydmFibGVbJ2ZuJ10pOwoKICAgIGRlcGVuZGVudE9ic2VydmFibGUucGVlayA9IHBlZWs7CiAgICBkZXBlbmRlbnRPYnNlcnZhYmxlLmdldERlcGVuZGVuY2llc0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX2RlcGVuZGVuY2llc0NvdW50OyB9OwogICAgZGVwZW5kZW50T2JzZXJ2YWJsZS5oYXNXcml0ZUZ1bmN0aW9uID0gdHlwZW9mIG9wdGlvbnNbIndyaXRlIl0gPT09ICJmdW5jdGlvbiI7CiAgICBkZXBlbmRlbnRPYnNlcnZhYmxlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7IGRpc3Bvc2UoKTsgfTsKICAgIGRlcGVuZGVudE9ic2VydmFibGUuaXNBY3RpdmUgPSBpc0FjdGl2ZTsKCiAgICAvLyBSZXBsYWNlIHRoZSBsaW1pdCBmdW5jdGlvbiB3aXRoIG9uZSB0aGF0IGRlbGF5cyBldmFsdWF0aW9uIGFzIHdlbGwuCiAgICB2YXIgb3JpZ2luYWxMaW1pdCA9IGRlcGVuZGVudE9ic2VydmFibGUubGltaXQ7CiAgICBkZXBlbmRlbnRPYnNlcnZhYmxlLmxpbWl0ID0gZnVuY3Rpb24obGltaXRGdW5jdGlvbikgewogICAgICAgIG9yaWdpbmFsTGltaXQuY2FsbChkZXBlbmRlbnRPYnNlcnZhYmxlLCBsaW1pdEZ1bmN0aW9uKTsKICAgICAgICBkZXBlbmRlbnRPYnNlcnZhYmxlLl9ldmFsUmF0ZUxpbWl0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZGVwZW5kZW50T2JzZXJ2YWJsZS5fcmF0ZUxpbWl0ZWRCZWZvcmVDaGFuZ2UoX2xhdGVzdFZhbHVlKTsKCiAgICAgICAgICAgIF9uZWVkc0V2YWx1YXRpb24gPSB0cnVlOyAgICAvLyBNYXJrIGFzIGRpcnR5CgogICAgICAgICAgICAvLyBQYXNzIHRoZSBvYnNlcnZhYmxlIHRvIHRoZSByYXRlLWxpbWl0IGNvZGUsIHdoaWNoIHdpbGwgYWNjZXNzIGl0IHdoZW4KICAgICAgICAgICAgLy8gaXQncyB0aW1lIHRvIGRvIHRoZSBub3RpZmljYXRpb24uCiAgICAgICAgICAgIGRlcGVuZGVudE9ic2VydmFibGUuX3JhdGVMaW1pdGVkQ2hhbmdlKGRlcGVuZGVudE9ic2VydmFibGUpOwogICAgICAgIH0KICAgIH07CgogICAgaWYgKG9wdGlvbnNbJ3B1cmUnXSkgewogICAgICAgIHB1cmUgPSB0cnVlOwogICAgICAgIGlzU2xlZXBpbmcgPSB0cnVlOyAgICAgLy8gU3RhcnRzIG9mZiBzbGVlcGluZzsgd2lsbCBhd2FrZSBvbiB0aGUgZmlyc3Qgc3Vic2NyaXB0aW9uCiAgICAgICAgZGVwZW5kZW50T2JzZXJ2YWJsZS5iZWZvcmVTdWJzY3JpcHRpb25BZGQgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIC8vIElmIGFzbGVlcCwgd2FrZSB1cCB0aGUgY29tcHV0ZWQgYW5kIGV2YWx1YXRlIHRvIHJlZ2lzdGVyIGFueSBkZXBlbmRlbmNpZXMuCiAgICAgICAgICAgIGlmIChpc1NsZWVwaW5nKSB7CiAgICAgICAgICAgICAgICBpc1NsZWVwaW5nID0gZmFsc2U7CiAgICAgICAgICAgICAgICBldmFsdWF0ZUltbWVkaWF0ZSh0cnVlIC8qIHN1cHByZXNzQ2hhbmdlTm90aWZpY2F0aW9uICovKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBkZXBlbmRlbnRPYnNlcnZhYmxlLmFmdGVyU3Vic2NyaXB0aW9uUmVtb3ZlID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICBpZiAoIWRlcGVuZGVudE9ic2VydmFibGUuZ2V0U3Vic2NyaXB0aW9uc0NvdW50KCkpIHsKICAgICAgICAgICAgICAgIGRpc3Bvc2VBbGxTdWJzY3JpcHRpb25zVG9EZXBlbmRlbmNpZXMoKTsKICAgICAgICAgICAgICAgIGlzU2xlZXBpbmcgPSBfbmVlZHNFdmFsdWF0aW9uID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0gZWxzZSBpZiAob3B0aW9uc1snZGVmZXJFdmFsdWF0aW9uJ10pIHsKICAgICAgICAvLyBUaGlzIHdpbGwgZm9yY2UgYSBjb21wdXRlZCB3aXRoIGRlZmVyRXZhbHVhdGlvbiB0byBldmFsdWF0ZSB3aGVuIHRoZSBmaXJzdCBzdWJzY3JpcHRpb25zIGlzIHJlZ2lzdGVyZWQuCiAgICAgICAgZGVwZW5kZW50T2JzZXJ2YWJsZS5iZWZvcmVTdWJzY3JpcHRpb25BZGQgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIHBlZWsoKTsKICAgICAgICAgICAgZGVsZXRlIGRlcGVuZGVudE9ic2VydmFibGUuYmVmb3JlU3Vic2NyaXB0aW9uQWRkOwogICAgICAgIH0KICAgIH0KCiAgICBrby5leHBvcnRQcm9wZXJ0eShkZXBlbmRlbnRPYnNlcnZhYmxlLCAncGVlaycsIGRlcGVuZGVudE9ic2VydmFibGUucGVlayk7CiAgICBrby5leHBvcnRQcm9wZXJ0eShkZXBlbmRlbnRPYnNlcnZhYmxlLCAnZGlzcG9zZScsIGRlcGVuZGVudE9ic2VydmFibGUuZGlzcG9zZSk7CiAgICBrby5leHBvcnRQcm9wZXJ0eShkZXBlbmRlbnRPYnNlcnZhYmxlLCAnaXNBY3RpdmUnLCBkZXBlbmRlbnRPYnNlcnZhYmxlLmlzQWN0aXZlKTsKICAgIGtvLmV4cG9ydFByb3BlcnR5KGRlcGVuZGVudE9ic2VydmFibGUsICdnZXREZXBlbmRlbmNpZXNDb3VudCcsIGRlcGVuZGVudE9ic2VydmFibGUuZ2V0RGVwZW5kZW5jaWVzQ291bnQpOwoKICAgIC8vIEFkZCBhICJkaXNwb3NlV2hlbiIgY2FsbGJhY2sgdGhhdCwgb24gZWFjaCBldmFsdWF0aW9uLCBkaXNwb3NlcyBpZiB0aGUgbm9kZSB3YXMgcmVtb3ZlZCB3aXRob3V0IHVzaW5nIGtvLnJlbW92ZU5vZGUuCiAgICBpZiAoZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkKSB7CiAgICAgICAgLy8gU2luY2UgdGhpcyBjb21wdXRlZCBpcyBhc3NvY2lhdGVkIHdpdGggYSBET00gbm9kZSwgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzcG9zZSB0aGUgY29tcHV0ZWQKICAgICAgICAvLyB1bnRpbCB0aGUgRE9NIG5vZGUgaXMgKnJlbW92ZWQqIGZyb20gdGhlIGRvY3VtZW50IChhcyBvcHBvc2VkIHRvIG5ldmVyIGhhdmluZyBiZWVuIGluIHRoZSBkb2N1bWVudCksCiAgICAgICAgLy8gd2UnbGwgcHJldmVudCBkaXNwb3NhbCB1bnRpbCAiZGlzcG9zZVdoZW4iIGZpcnN0IHJldHVybnMgZmFsc2UuCiAgICAgICAgX3N1cHByZXNzRGlzcG9zYWxVbnRpbERpc3Bvc2VXaGVuUmV0dXJuc0ZhbHNlID0gdHJ1ZTsKCiAgICAgICAgLy8gT25seSB3YXRjaCBmb3IgdGhlIG5vZGUncyBkaXNwb3NhbCBpZiB0aGUgdmFsdWUgcmVhbGx5IGlzIGEgbm9kZS4gSXQgbWlnaHQgbm90IGJlLAogICAgICAgIC8vIGUuZy4sIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiB0cnVlIH0gY2FuIGJlIHVzZWQgdG8gb3B0IGludG8gdGhlICJvbmx5IGRpc3Bvc2UKICAgICAgICAvLyBhZnRlciBmaXJzdCBmYWxzZSByZXN1bHQiIGJlaGF2aW91ciBldmVuIGlmIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgbm9kZSB0byB3YXRjaC4gVGhpcwogICAgICAgIC8vIHRlY2huaXF1ZSBpcyBpbnRlbmRlZCBmb3IgS08ncyBpbnRlcm5hbCB1c2Ugb25seSBhbmQgc2hvdWxkbid0IGJlIGRvY3VtZW50ZWQgb3IgdXNlZAogICAgICAgIC8vIGJ5IGFwcGxpY2F0aW9uIGNvZGUsIGFzIGl0J3MgbGlrZWx5IHRvIGNoYW5nZSBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIEtPLgogICAgICAgIGlmIChkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQubm9kZVR5cGUpIHsKICAgICAgICAgICAgZGlzcG9zZVdoZW4gPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gIWtvLnV0aWxzLmRvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudChkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQpIHx8IChkaXNwb3NlV2hlbk9wdGlvbiAmJiBkaXNwb3NlV2hlbk9wdGlvbigpKTsKICAgICAgICAgICAgfTsKICAgICAgICB9CiAgICB9CgogICAgLy8gRXZhbHVhdGUsIHVubGVzcyBzbGVlcGluZyBvciBkZWZlckV2YWx1YXRpb24gaXMgdHJ1ZQogICAgaWYgKCFpc1NsZWVwaW5nICYmICFvcHRpb25zWydkZWZlckV2YWx1YXRpb24nXSkKICAgICAgICBldmFsdWF0ZUltbWVkaWF0ZSgpOwoKICAgIC8vIEF0dGFjaCBhIERPTSBub2RlIGRpc3Bvc2FsIGNhbGxiYWNrIHNvIHRoYXQgdGhlIGNvbXB1dGVkIHdpbGwgYmUgcHJvYWN0aXZlbHkgZGlzcG9zZWQgYXMgc29vbiBhcyB0aGUgbm9kZSBpcwogICAgLy8gcmVtb3ZlZCB1c2luZyBrby5yZW1vdmVOb2RlLiBCdXQgc2tpcCBpZiBpc0FjdGl2ZSBpcyBmYWxzZSAodGhlcmUgd2lsbCBuZXZlciBiZSBhbnkgZGVwZW5kZW5jaWVzIHRvIGRpc3Bvc2UpLgogICAgaWYgKGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCAmJiBpc0FjdGl2ZSgpICYmIGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZC5ub2RlVHlwZSkgewogICAgICAgIGRpc3Bvc2UgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFjayhkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQsIGRpc3Bvc2UpOwogICAgICAgICAgICBkaXNwb3NlQ29tcHV0ZWQoKTsKICAgICAgICB9OwogICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkLCBkaXNwb3NlKTsKICAgIH0KCiAgICByZXR1cm4gZGVwZW5kZW50T2JzZXJ2YWJsZTsKfTsKCmtvLmlzQ29tcHV0ZWQgPSBmdW5jdGlvbihpbnN0YW5jZSkgewogICAgcmV0dXJuIGtvLmhhc1Byb3RvdHlwZShpbnN0YW5jZSwga28uZGVwZW5kZW50T2JzZXJ2YWJsZSk7Cn07Cgp2YXIgcHJvdG9Qcm9wID0ga28ub2JzZXJ2YWJsZS5wcm90b1Byb3BlcnR5OyAvLyA9PSAiX19rb19wcm90b19fIgprby5kZXBlbmRlbnRPYnNlcnZhYmxlW3Byb3RvUHJvcF0gPSBrby5vYnNlcnZhYmxlOwoKa28uZGVwZW5kZW50T2JzZXJ2YWJsZVsnZm4nXSA9IHsKICAgICJlcXVhbGl0eUNvbXBhcmVyIjogdmFsdWVzQXJlUHJpbWl0aXZlQW5kRXF1YWwKfTsKa28uZGVwZW5kZW50T2JzZXJ2YWJsZVsnZm4nXVtwcm90b1Byb3BdID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTsKCi8vIE5vdGUgdGhhdCBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHByb3RvIGFzc2lnbm1lbnQsIHRoZQovLyBpbmhlcml0YW5jZSBjaGFpbiBpcyBjcmVhdGVkIG1hbnVhbGx5IGluIHRoZSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlIGNvbnN0cnVjdG9yCmlmIChrby51dGlscy5jYW5TZXRQcm90b3R5cGUpIHsKICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mKGtvLmRlcGVuZGVudE9ic2VydmFibGVbJ2ZuJ10sIGtvLnN1YnNjcmliYWJsZVsnZm4nXSk7Cn0KCmtvLmV4cG9ydFN5bWJvbCgnZGVwZW5kZW50T2JzZXJ2YWJsZScsIGtvLmRlcGVuZGVudE9ic2VydmFibGUpOwprby5leHBvcnRTeW1ib2woJ2NvbXB1dGVkJywga28uZGVwZW5kZW50T2JzZXJ2YWJsZSk7IC8vIE1ha2UgImtvLmNvbXB1dGVkIiBhbiBhbGlhcyBmb3IgImtvLmRlcGVuZGVudE9ic2VydmFibGUiCmtvLmV4cG9ydFN5bWJvbCgnaXNDb21wdXRlZCcsIGtvLmlzQ29tcHV0ZWQpOwoKa28ucHVyZUNvbXB1dGVkID0gZnVuY3Rpb24gKGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zLCBldmFsdWF0b3JGdW5jdGlvblRhcmdldCkgewogICAgaWYgKHR5cGVvZiBldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgewogICAgICAgIHJldHVybiBrby5jb21wdXRlZChldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucywgZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQsIHsncHVyZSc6dHJ1ZX0pOwogICAgfSBlbHNlIHsKICAgICAgICBldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucyA9IGtvLnV0aWxzLmV4dGVuZCh7fSwgZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnMpOyAgIC8vIG1ha2UgYSBjb3B5IG9mIHRoZSBwYXJhbWV0ZXIgb2JqZWN0CiAgICAgICAgZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnNbJ3B1cmUnXSA9IHRydWU7CiAgICAgICAgcmV0dXJuIGtvLmNvbXB1dGVkKGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zLCBldmFsdWF0b3JGdW5jdGlvblRhcmdldCk7CiAgICB9Cn0Ka28uZXhwb3J0U3ltYm9sKCdwdXJlQ29tcHV0ZWQnLCBrby5wdXJlQ29tcHV0ZWQpOwoKKGZ1bmN0aW9uKCkgewogICAgdmFyIG1heE5lc3RlZE9ic2VydmFibGVEZXB0aCA9IDEwOyAvLyBFc2NhcGUgdGhlICh1bmxpa2VseSkgcGF0aGFsb2dpY2FsIGNhc2Ugd2hlcmUgYW4gb2JzZXJ2YWJsZSdzIGN1cnJlbnQgdmFsdWUgaXMgaXRzZWxmIChvciBzaW1pbGFyIHJlZmVyZW5jZSBjeWNsZSkKCiAgICBrby50b0pTID0gZnVuY3Rpb24ocm9vdE9iamVjdCkgewogICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApCiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiV2hlbiBjYWxsaW5nIGtvLnRvSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LiIpOwoKICAgICAgICAvLyBXZSBqdXN0IHVud3JhcCBldmVyeXRoaW5nIGF0IGV2ZXJ5IGxldmVsIGluIHRoZSBvYmplY3QgZ3JhcGgKICAgICAgICByZXR1cm4gbWFwSnNPYmplY3RHcmFwaChyb290T2JqZWN0LCBmdW5jdGlvbih2YWx1ZVRvTWFwKSB7CiAgICAgICAgICAgIC8vIExvb3AgYmVjYXVzZSBhbiBvYnNlcnZhYmxlJ3MgdmFsdWUgbWlnaHQgaW4gdHVybiBiZSBhbm90aGVyIG9ic2VydmFibGUgd3JhcHBlcgogICAgICAgICAgICBmb3IgKHZhciBpID0gMDsga28uaXNPYnNlcnZhYmxlKHZhbHVlVG9NYXApICYmIChpIDwgbWF4TmVzdGVkT2JzZXJ2YWJsZURlcHRoKTsgaSsrKQogICAgICAgICAgICAgICAgdmFsdWVUb01hcCA9IHZhbHVlVG9NYXAoKTsKICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9NYXA7CiAgICAgICAgfSk7CiAgICB9OwoKICAgIGtvLnRvSlNPTiA9IGZ1bmN0aW9uKHJvb3RPYmplY3QsIHJlcGxhY2VyLCBzcGFjZSkgeyAgICAgLy8gcmVwbGFjZXIgYW5kIHNwYWNlIGFyZSBvcHRpb25hbAogICAgICAgIHZhciBwbGFpbkphdmFTY3JpcHRPYmplY3QgPSBrby50b0pTKHJvb3RPYmplY3QpOwogICAgICAgIHJldHVybiBrby51dGlscy5zdHJpbmdpZnlKc29uKHBsYWluSmF2YVNjcmlwdE9iamVjdCwgcmVwbGFjZXIsIHNwYWNlKTsKICAgIH07CgogICAgZnVuY3Rpb24gbWFwSnNPYmplY3RHcmFwaChyb290T2JqZWN0LCBtYXBJbnB1dENhbGxiYWNrLCB2aXNpdGVkT2JqZWN0cykgewogICAgICAgIHZpc2l0ZWRPYmplY3RzID0gdmlzaXRlZE9iamVjdHMgfHwgbmV3IG9iamVjdExvb2t1cCgpOwoKICAgICAgICByb290T2JqZWN0ID0gbWFwSW5wdXRDYWxsYmFjayhyb290T2JqZWN0KTsKICAgICAgICB2YXIgY2FuSGF2ZVByb3BlcnRpZXMgPSAodHlwZW9mIHJvb3RPYmplY3QgPT0gIm9iamVjdCIpICYmIChyb290T2JqZWN0ICE9PSBudWxsKSAmJiAocm9vdE9iamVjdCAhPT0gdW5kZWZpbmVkKSAmJiAoIShyb290T2JqZWN0IGluc3RhbmNlb2YgRGF0ZSkpICYmICghKHJvb3RPYmplY3QgaW5zdGFuY2VvZiBTdHJpbmcpKSAmJiAoIShyb290T2JqZWN0IGluc3RhbmNlb2YgTnVtYmVyKSkgJiYgKCEocm9vdE9iamVjdCBpbnN0YW5jZW9mIEJvb2xlYW4pKTsKICAgICAgICBpZiAoIWNhbkhhdmVQcm9wZXJ0aWVzKQogICAgICAgICAgICByZXR1cm4gcm9vdE9iamVjdDsKCiAgICAgICAgdmFyIG91dHB1dFByb3BlcnRpZXMgPSByb290T2JqZWN0IGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9OwogICAgICAgIHZpc2l0ZWRPYmplY3RzLnNhdmUocm9vdE9iamVjdCwgb3V0cHV0UHJvcGVydGllcyk7CgogICAgICAgIHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIGZ1bmN0aW9uKGluZGV4ZXIpIHsKICAgICAgICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBtYXBJbnB1dENhbGxiYWNrKHJvb3RPYmplY3RbaW5kZXhlcl0pOwoKICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgcHJvcGVydHlWYWx1ZSkgewogICAgICAgICAgICAgICAgY2FzZSAiYm9vbGVhbiI6CiAgICAgICAgICAgICAgICBjYXNlICJudW1iZXIiOgogICAgICAgICAgICAgICAgY2FzZSAic3RyaW5nIjoKICAgICAgICAgICAgICAgIGNhc2UgImZ1bmN0aW9uIjoKICAgICAgICAgICAgICAgICAgICBvdXRwdXRQcm9wZXJ0aWVzW2luZGV4ZXJdID0gcHJvcGVydHlWYWx1ZTsKICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgIGNhc2UgIm9iamVjdCI6CiAgICAgICAgICAgICAgICBjYXNlICJ1bmRlZmluZWQiOgogICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c2x5TWFwcGVkVmFsdWUgPSB2aXNpdGVkT2JqZWN0cy5nZXQocHJvcGVydHlWYWx1ZSk7CiAgICAgICAgICAgICAgICAgICAgb3V0cHV0UHJvcGVydGllc1tpbmRleGVyXSA9IChwcmV2aW91c2x5TWFwcGVkVmFsdWUgIT09IHVuZGVmaW5lZCkKICAgICAgICAgICAgICAgICAgICAgICAgPyBwcmV2aW91c2x5TWFwcGVkVmFsdWUKICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXBKc09iamVjdEdyYXBoKHByb3BlcnR5VmFsdWUsIG1hcElucHV0Q2FsbGJhY2ssIHZpc2l0ZWRPYmplY3RzKTsKICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgIH0pOwoKICAgICAgICByZXR1cm4gb3V0cHV0UHJvcGVydGllczsKICAgIH0KCiAgICBmdW5jdGlvbiB2aXNpdFByb3BlcnRpZXNPckFycmF5RW50cmllcyhyb290T2JqZWN0LCB2aXNpdG9yQ2FsbGJhY2spIHsKICAgICAgICBpZiAocm9vdE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSB7CiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdE9iamVjdC5sZW5ndGg7IGkrKykKICAgICAgICAgICAgICAgIHZpc2l0b3JDYWxsYmFjayhpKTsKCiAgICAgICAgICAgIC8vIEZvciBhcnJheXMsIGFsc28gcmVzcGVjdCB0b0pTT04gcHJvcGVydHkgZm9yIGN1c3RvbSBtYXBwaW5ncyAoZml4ZXMgIzI3OCkKICAgICAgICAgICAgaWYgKHR5cGVvZiByb290T2JqZWN0Wyd0b0pTT04nXSA9PSAnZnVuY3Rpb24nKQogICAgICAgICAgICAgICAgdmlzaXRvckNhbGxiYWNrKCd0b0pTT04nKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcm9vdE9iamVjdCkgewogICAgICAgICAgICAgICAgdmlzaXRvckNhbGxiYWNrKHByb3BlcnR5TmFtZSk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9OwoKICAgIGZ1bmN0aW9uIG9iamVjdExvb2t1cCgpIHsKICAgICAgICB0aGlzLmtleXMgPSBbXTsKICAgICAgICB0aGlzLnZhbHVlcyA9IFtdOwogICAgfTsKCiAgICBvYmplY3RMb29rdXAucHJvdG90eXBlID0gewogICAgICAgIGNvbnN0cnVjdG9yOiBvYmplY3RMb29rdXAsCiAgICAgICAgc2F2ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSkgewogICAgICAgICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZih0aGlzLmtleXMsIGtleSk7CiAgICAgICAgICAgIGlmIChleGlzdGluZ0luZGV4ID49IDApCiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1tleGlzdGluZ0luZGV4XSA9IHZhbHVlOwogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgIHRoaXMua2V5cy5wdXNoKGtleSk7CiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgZ2V0OiBmdW5jdGlvbihrZXkpIHsKICAgICAgICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBrby51dGlscy5hcnJheUluZGV4T2YodGhpcy5rZXlzLCBrZXkpOwogICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nSW5kZXggPj0gMCkgPyB0aGlzLnZhbHVlc1tleGlzdGluZ0luZGV4XSA6IHVuZGVmaW5lZDsKICAgICAgICB9CiAgICB9Owp9KSgpOwoKa28uZXhwb3J0U3ltYm9sKCd0b0pTJywga28udG9KUyk7CmtvLmV4cG9ydFN5bWJvbCgndG9KU09OJywga28udG9KU09OKTsKKGZ1bmN0aW9uICgpIHsKICAgIHZhciBoYXNEb21EYXRhRXhwYW5kb1Byb3BlcnR5ID0gJ19fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fJzsKCiAgICAvLyBOb3JtYWxseSwgU0VMRUNUIGVsZW1lbnRzIGFuZCB0aGVpciBPUFRJT05zIGNhbiBvbmx5IHRha2UgdmFsdWUgb2YgdHlwZSAnc3RyaW5nJyAoYmVjYXVzZSB0aGUgdmFsdWVzCiAgICAvLyBhcmUgc3RvcmVkIG9uIERPTSBhdHRyaWJ1dGVzKS4ga28uc2VsZWN0RXh0ZW5zaW9ucyBwcm92aWRlcyBhIHdheSBmb3IgU0VMRUNUcy9PUFRJT05zIHRvIGhhdmUgdmFsdWVzCiAgICAvLyB0aGF0IGFyZSBhcmJpdHJhcnkgb2JqZWN0cy4gVGhpcyBpcyB2ZXJ5IGNvbnZlbmllbnQgd2hlbiBpbXBsZW1lbnRpbmcgdGhpbmdzIGxpa2UgY2FzY2FkaW5nIGRyb3Bkb3ducy4KICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMgPSB7CiAgICAgICAgcmVhZFZhbHVlIDogZnVuY3Rpb24oZWxlbWVudCkgewogICAgICAgICAgICBzd2l0Y2ggKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSkgewogICAgICAgICAgICAgICAgY2FzZSAnb3B0aW9uJzoKICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFtoYXNEb21EYXRhRXhwYW5kb1Byb3BlcnR5XSA9PT0gdHJ1ZSkKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmRvbURhdGEuZ2V0KGVsZW1lbnQsIGtvLmJpbmRpbmdIYW5kbGVycy5vcHRpb25zLm9wdGlvblZhbHVlRG9tRGF0YUtleSk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmllVmVyc2lvbiA8PSA3CiAgICAgICAgICAgICAgICAgICAgICAgID8gKGVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZSgndmFsdWUnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZU5vZGUoJ3ZhbHVlJykuc3BlY2lmaWVkID8gZWxlbWVudC52YWx1ZSA6IGVsZW1lbnQudGV4dCkKICAgICAgICAgICAgICAgICAgICAgICAgOiBlbGVtZW50LnZhbHVlOwogICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzoKICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5zZWxlY3RlZEluZGV4ID49IDAgPyBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50Lm9wdGlvbnNbZWxlbWVudC5zZWxlY3RlZEluZGV4XSkgOiB1bmRlZmluZWQ7CiAgICAgICAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlOwogICAgICAgICAgICB9CiAgICAgICAgfSwKCiAgICAgICAgd3JpdGVWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWUsIGFsbG93VW5zZXQpIHsKICAgICAgICAgICAgc3dpdGNoIChrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCkpIHsKICAgICAgICAgICAgICAgIGNhc2UgJ29wdGlvbic6CiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHR5cGVvZiB2YWx1ZSkgewogICAgICAgICAgICAgICAgICAgICAgICBjYXNlICJzdHJpbmciOgogICAgICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQoZWxlbWVudCwga28uYmluZGluZ0hhbmRsZXJzLm9wdGlvbnMub3B0aW9uVmFsdWVEb21EYXRhS2V5LCB1bmRlZmluZWQpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0RvbURhdGFFeHBhbmRvUHJvcGVydHkgaW4gZWxlbWVudCkgeyAvLyBJRSA8PSA4IHRocm93cyBlcnJvcnMgaWYgeW91IGRlbGV0ZSBub24tZXhpc3RlbnQgcHJvcGVydGllcyBmcm9tIGEgRE9NIG5vZGUKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudFtoYXNEb21EYXRhRXhwYW5kb1Byb3BlcnR5XTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgYXJiaXRyYXJ5IG9iamVjdCB1c2luZyBEb21EYXRhCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCBrby5iaW5kaW5nSGFuZGxlcnMub3B0aW9ucy5vcHRpb25WYWx1ZURvbURhdGFLZXksIHZhbHVlKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbaGFzRG9tRGF0YUV4cGFuZG9Qcm9wZXJ0eV0gPSB0cnVlOwoKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgdHJlYXRtZW50IG9mIG51bWJlcnMgaXMganVzdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gS08gMS4yLjEgd3JvdGUgbnVtZXJpY2FsIHZhbHVlcyB0byBlbGVtZW50LnZhbHVlLgogICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gIm51bWJlciIgPyB2YWx1ZSA6ICIiOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzoKICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICIiIHx8IHZhbHVlID09PSBudWxsKSAgICAgICAvLyBBIGJsYW5rIHN0cmluZyBvciBudWxsIHZhbHVlIHdpbGwgc2VsZWN0IHRoZSBjYXB0aW9uCiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkOwogICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSAtMTsKICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGVsZW1lbnQub3B0aW9ucy5sZW5ndGgsIG9wdGlvblZhbHVlOyBpIDwgbjsgKytpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0ga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUoZWxlbWVudC5vcHRpb25zW2ldKTsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5jbHVkZSBzcGVjaWFsIGNoZWNrIHRvIGhhbmRsZSBzZWxlY3RpbmcgYSBjYXB0aW9uIHdpdGggYSBibGFuayBzdHJpbmcgdmFsdWUKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvblZhbHVlID09IHZhbHVlIHx8IChvcHRpb25WYWx1ZSA9PSAiIiAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gaTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd1Vuc2V0IHx8IHNlbGVjdGlvbiA+PSAwIHx8ICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGVsZW1lbnQuc2l6ZSA+IDEpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGlvbjsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICAgICAgICAgIGlmICgodmFsdWUgPT09IG51bGwpIHx8ICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSkKICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAiIjsKICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7CiAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9Owp9KSgpOwoKa28uZXhwb3J0U3ltYm9sKCdzZWxlY3RFeHRlbnNpb25zJywga28uc2VsZWN0RXh0ZW5zaW9ucyk7CmtvLmV4cG9ydFN5bWJvbCgnc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUnLCBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZSk7CmtvLmV4cG9ydFN5bWJvbCgnc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlJywga28uc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlKTsKa28uZXhwcmVzc2lvblJld3JpdGluZyA9IChmdW5jdGlvbiAoKSB7CiAgICB2YXIgamF2YVNjcmlwdFJlc2VydmVkV29yZHMgPSBbInRydWUiLCAiZmFsc2UiLCAibnVsbCIsICJ1bmRlZmluZWQiXTsKCiAgICAvLyBNYXRjaGVzIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0by0tZWl0aGVyIGFuIGlzb2xhdGVkIGlkZW50aWZpZXIgb3Igc29tZXRoaW5nIGVuZGluZyB3aXRoIGEgcHJvcGVydHkgYWNjZXNzb3IKICAgIC8vIFRoaXMgaXMgZGVzaWduZWQgdG8gYmUgc2ltcGxlIGFuZCBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMsIGJ1dCBjb3VsZCBwcm9kdWNlIGZhbHNlIHBvc2l0aXZlcyAoZS5nLiwgYStiLmMpLgogICAgLy8gVGhpcyBhbHNvIHdpbGwgbm90IHByb3Blcmx5IGhhbmRsZSBuZXN0ZWQgYnJhY2tldHMgKGUuZy4sIG9iajFbb2JqMlsncHJvcCddXTsgc2VlICM5MTEpLgogICAgdmFyIGphdmFTY3JpcHRBc3NpZ25tZW50VGFyZ2V0ID0gL14oPzpbJF9hLXpdWyRcd10qfCguKykoXC5ccypbJF9hLXpdWyRcd10qfFxbLitcXSkpJC9pOwoKICAgIGZ1bmN0aW9uIGdldFdyaXRlYWJsZVZhbHVlKGV4cHJlc3Npb24pIHsKICAgICAgICBpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKGphdmFTY3JpcHRSZXNlcnZlZFdvcmRzLCBleHByZXNzaW9uKSA+PSAwKQogICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgdmFyIG1hdGNoID0gZXhwcmVzc2lvbi5tYXRjaChqYXZhU2NyaXB0QXNzaWdubWVudFRhcmdldCk7CiAgICAgICAgcmV0dXJuIG1hdGNoID09PSBudWxsID8gZmFsc2UgOiBtYXRjaFsxXSA/ICgnT2JqZWN0KCcgKyBtYXRjaFsxXSArICcpJyArIG1hdGNoWzJdKSA6IGV4cHJlc3Npb247CiAgICB9CgogICAgLy8gVGhlIGZvbGxvd2luZyByZWd1bGFyIGV4cHJlc3Npb25zIHdpbGwgYmUgdXNlZCB0byBzcGxpdCBhbiBvYmplY3QtbGl0ZXJhbCBzdHJpbmcgaW50byB0b2tlbnMKCiAgICAgICAgLy8gVGhlc2UgdHdvIG1hdGNoIHN0cmluZ3MsIGVpdGhlciB3aXRoIGRvdWJsZSBxdW90ZXMgb3Igc2luZ2xlIHF1b3RlcwogICAgdmFyIHN0cmluZ0RvdWJsZSA9ICciKD86W14iXFxcXF18XFxcXC4pKiInLAogICAgICAgIHN0cmluZ1NpbmdsZSA9ICInKD86W14nXFxcXF18XFxcXC4pKiciLAogICAgICAgIC8vIE1hdGNoZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gKHRleHQgZW5jbG9zZWQgYnkgc2xhc2hlcyksIGJ1dCB3aWxsIGFsc28gbWF0Y2ggc2V0cyBvZiBkaXZpc2lvbnMKICAgICAgICAvLyBhcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiAodGhpcyBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJzaW5nIGxvb3AgYmVsb3cpLgogICAgICAgIHN0cmluZ1JlZ2V4cCA9ICcvKD86W14vXFxcXF18XFxcXC4pKi9cdyonLAogICAgICAgIC8vIFRoZXNlIGNoYXJhY3RlcnMgaGF2ZSBzcGVjaWFsIG1lYW5pbmcgdG8gdGhlIHBhcnNlciBhbmQgbXVzdCBub3QgYXBwZWFyIGluIHRoZSBtaWRkbGUgb2YgYQogICAgICAgIC8vIHRva2VuLCBleGNlcHQgYXMgcGFydCBvZiBhIHN0cmluZy4KICAgICAgICBzcGVjaWFscyA9ICcsIlwne30oKS86W1xcXScsCiAgICAgICAgLy8gTWF0Y2ggdGV4dCAoYXQgbGVhc3QgdHdvIGNoYXJhY3RlcnMpIHRoYXQgZG9lcyBub3QgY29udGFpbiBhbnkgb2YgdGhlIGFib3ZlIHNwZWNpYWwgY2hhcmFjdGVycywKICAgICAgICAvLyBhbHRob3VnaCBzb21lIG9mIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQgdG8gc3RhcnQgaXQgKGFsbCBidXQgdGhlIGNvbG9uIGFuZCBjb21tYSkuCiAgICAgICAgLy8gVGhlIHRleHQgY2FuIGNvbnRhaW4gc3BhY2VzLCBidXQgbGVhZGluZyBvciB0cmFpbGluZyBzcGFjZXMgYXJlIHNraXBwZWQuCiAgICAgICAgZXZlcnlUaGluZ0Vsc2UgPSAnW15cXHM6LC9dW14nICsgc3BlY2lhbHMgKyAnXSpbXlxccycgKyBzcGVjaWFscyArICddJywKICAgICAgICAvLyBNYXRjaCBhbnkgbm9uLXNwYWNlIGNoYXJhY3RlciBub3QgbWF0Y2hlZCBhbHJlYWR5LiBUaGlzIHdpbGwgbWF0Y2ggY29sb25zIGFuZCBjb21tYXMsIHNpbmNlIHRoZXkncmUKICAgICAgICAvLyBub3QgbWF0Y2hlZCBieSAiZXZlcnlUaGluZ0Vsc2UiLCBidXQgd2lsbCBhbHNvIG1hdGNoIGFueSBvdGhlciBzaW5nbGUgY2hhcmFjdGVyIHRoYXQgd2Fzbid0IGFscmVhZHkKICAgICAgICAvLyBtYXRjaGVkIChmb3IgZXhhbXBsZTogaW4gImE6IDEsIGI6IDIiLCBlYWNoIG9mIHRoZSBub24tc3BhY2UgY2hhcmFjdGVycyB3aWxsIGJlIG1hdGNoZWQgYnkgb25lTm90U3BhY2UpLgogICAgICAgIG9uZU5vdFNwYWNlID0gJ1teXFxzXScsCgogICAgICAgIC8vIENyZWF0ZSB0aGUgYWN0dWFsIHJlZ3VsYXIgZXhwcmVzc2lvbiBieSBvci1pbmcgdGhlIGFib3ZlIHN0cmluZ3MuIFRoZSBvcmRlciBpcyBpbXBvcnRhbnQuCiAgICAgICAgYmluZGluZ1Rva2VuID0gUmVnRXhwKHN0cmluZ0RvdWJsZSArICd8JyArIHN0cmluZ1NpbmdsZSArICd8JyArIHN0cmluZ1JlZ2V4cCArICd8JyArIGV2ZXJ5VGhpbmdFbHNlICsgJ3wnICsgb25lTm90U3BhY2UsICdnJyksCgogICAgICAgIC8vIE1hdGNoIGVuZCBvZiBwcmV2aW91cyB0b2tlbiB0byBkZXRlcm1pbmUgd2hldGhlciBhIHNsYXNoIGlzIGEgZGl2aXNpb24gb3IgcmVnZXguCiAgICAgICAgZGl2aXNpb25Mb29rQmVoaW5kID0gL1tcXSkiJ0EtWmEtejAtOV8kXSskLywKICAgICAgICBrZXl3b3JkUmVnZXhMb29rQmVoaW5kID0geydpbic6MSwncmV0dXJuJzoxLCd0eXBlb2YnOjF9OwoKICAgIGZ1bmN0aW9uIHBhcnNlT2JqZWN0TGl0ZXJhbChvYmplY3RMaXRlcmFsU3RyaW5nKSB7CiAgICAgICAgLy8gVHJpbSBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZXMgZnJvbSB0aGUgc3RyaW5nCiAgICAgICAgdmFyIHN0ciA9IGtvLnV0aWxzLnN0cmluZ1RyaW0ob2JqZWN0TGl0ZXJhbFN0cmluZyk7CgogICAgICAgIC8vIFRyaW0gYnJhY2VzICd7JyBzdXJyb3VuZGluZyB0aGUgd2hvbGUgb2JqZWN0IGxpdGVyYWwKICAgICAgICBpZiAoc3RyLmNoYXJDb2RlQXQoMCkgPT09IDEyMykgc3RyID0gc3RyLnNsaWNlKDEsIC0xKTsKCiAgICAgICAgLy8gU3BsaXQgaW50byB0b2tlbnMKICAgICAgICB2YXIgcmVzdWx0ID0gW10sIHRva3MgPSBzdHIubWF0Y2goYmluZGluZ1Rva2VuKSwga2V5LCB2YWx1ZXMsIGRlcHRoID0gMDsKCiAgICAgICAgaWYgKHRva3MpIHsKICAgICAgICAgICAgLy8gQXBwZW5kIGEgY29tbWEgc28gdGhhdCB3ZSBkb24ndCBuZWVkIGEgc2VwYXJhdGUgY29kZSBibG9jayB0byBkZWFsIHdpdGggdGhlIGxhc3QgaXRlbQogICAgICAgICAgICB0b2tzLnB1c2goJywnKTsKCiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCB0b2s7IHRvayA9IHRva3NbaV07ICsraSkgewogICAgICAgICAgICAgICAgdmFyIGMgPSB0b2suY2hhckNvZGVBdCgwKTsKICAgICAgICAgICAgICAgIC8vIEEgY29tbWEgc2lnbmFscyB0aGUgZW5kIG9mIGEga2V5L3ZhbHVlIHBhaXIgaWYgZGVwdGggaXMgemVybwogICAgICAgICAgICAgICAgaWYgKGMgPT09IDQ0KSB7IC8vICIsIgogICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA8PSAwKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZXMgPyB7a2V5OiBrZXksIHZhbHVlOiB2YWx1ZXMuam9pbignJyl9IDogeyd1bmtub3duJzoga2V5fSk7CiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHZhbHVlcyA9IGRlcHRoID0gMDsKICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgLy8gU2ltcGx5IHNraXAgdGhlIGNvbG9uIHRoYXQgc2VwYXJhdGVzIHRoZSBuYW1lIGFuZCB2YWx1ZQogICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSA1OCkgeyAvLyAiOiIKICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlcykKICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgICAgICAvLyBBIHNldCBvZiBzbGFzaGVzIGlzIGluaXRpYWxseSBtYXRjaGVkIGFzIGEgcmVndWxhciBleHByZXNzaW9uLCBidXQgY291bGQgYmUgZGl2aXNpb24KICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gNDcgJiYgaSAmJiB0b2subGVuZ3RoID4gMSkgeyAgLy8gIi8iCiAgICAgICAgICAgICAgICAgICAgLy8gTG9vayBhdCB0aGUgZW5kIG9mIHRoZSBwcmV2aW91cyB0b2tlbiB0byBkZXRlcm1pbmUgaWYgdGhlIHNsYXNoIGlzIGFjdHVhbGx5IGRpdmlzaW9uCiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdG9rc1tpLTFdLm1hdGNoKGRpdmlzaW9uTG9va0JlaGluZCk7CiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmICFrZXl3b3JkUmVnZXhMb29rQmVoaW5kW21hdGNoWzBdXSkgewogICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgc2xhc2ggaXMgYWN0dWFsbHkgYSBkaXZpc2lvbiBwdW5jdHVhdG9yOyByZS1wYXJzZSB0aGUgcmVtYWluZGVyIG9mIHRoZSBzdHJpbmcgKG5vdCBpbmNsdWRpbmcgdGhlIHNsYXNoKQogICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKHN0ci5pbmRleE9mKHRvaykgKyAxKTsKICAgICAgICAgICAgICAgICAgICAgICAgdG9rcyA9IHN0ci5tYXRjaChiaW5kaW5nVG9rZW4pOwogICAgICAgICAgICAgICAgICAgICAgICB0b2tzLnB1c2goJywnKTsKICAgICAgICAgICAgICAgICAgICAgICAgaSA9IC0xOwogICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIGp1c3QgdGhlIHNsYXNoCiAgICAgICAgICAgICAgICAgICAgICAgIHRvayA9ICcvJzsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgZGVwdGggZm9yIHBhcmVudGhlc2VzLCBicmFjZXMsIGFuZCBicmFja2V0cyBzbyB0aGF0IGludGVyaW9yIGNvbW1hcyBhcmUgaWdub3JlZAogICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSA0MCB8fCBjID09PSAxMjMgfHwgYyA9PT0gOTEpIHsgLy8gJygnLCAneycsICdbJwogICAgICAgICAgICAgICAgICAgICsrZGVwdGg7CiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09IDQxIHx8IGMgPT09IDEyNSB8fCBjID09PSA5MykgeyAvLyAnKScsICd9JywgJ10nCiAgICAgICAgICAgICAgICAgICAgLS1kZXB0aDsKICAgICAgICAgICAgICAgIC8vIFRoZSBrZXkgbXVzdCBiZSBhIHNpbmdsZSB0b2tlbjsgaWYgaXQncyBhIHN0cmluZywgdHJpbSB0aGUgcXVvdGVzCiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFrZXkgJiYgIXZhbHVlcykgewogICAgICAgICAgICAgICAgICAgIGtleSA9IChjID09PSAzNCB8fCBjID09PSAzOSkgLyogJyInLCAiJyIgKi8gPyB0b2suc2xpY2UoMSwgLTEpIDogdG9rOwogICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgaWYgKHZhbHVlcykKICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0b2spOwogICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IFt0b2tdOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CgogICAgLy8gVHdvLXdheSBiaW5kaW5ncyBpbmNsdWRlIGEgd3JpdGUgZnVuY3Rpb24gdGhhdCBhbGxvdyB0aGUgaGFuZGxlciB0byB1cGRhdGUgdGhlIHZhbHVlIGV2ZW4gaWYgaXQncyBub3QgYW4gb2JzZXJ2YWJsZS4KICAgIHZhciB0d29XYXlCaW5kaW5ncyA9IHt9OwoKICAgIGZ1bmN0aW9uIHByZVByb2Nlc3NCaW5kaW5ncyhiaW5kaW5nc1N0cmluZ09yS2V5VmFsdWVBcnJheSwgYmluZGluZ09wdGlvbnMpIHsKICAgICAgICBiaW5kaW5nT3B0aW9ucyA9IGJpbmRpbmdPcHRpb25zIHx8IHt9OwoKICAgICAgICBmdW5jdGlvbiBwcm9jZXNzS2V5VmFsdWUoa2V5LCB2YWwpIHsKICAgICAgICAgICAgdmFyIHdyaXRhYmxlVmFsOwogICAgICAgICAgICBmdW5jdGlvbiBjYWxsUHJlcHJvY2Vzc0hvb2sob2JqKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gKG9iaiAmJiBvYmpbJ3ByZXByb2Nlc3MnXSkgPyAodmFsID0gb2JqWydwcmVwcm9jZXNzJ10odmFsLCBrZXksIHByb2Nlc3NLZXlWYWx1ZSkpIDogdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoIWJpbmRpbmdQYXJhbXMpIHsKICAgICAgICAgICAgICAgIGlmICghY2FsbFByZXByb2Nlc3NIb29rKGtvWydnZXRCaW5kaW5nSGFuZGxlciddKGtleSkpKQogICAgICAgICAgICAgICAgICAgIHJldHVybjsKCiAgICAgICAgICAgICAgICBpZiAodHdvV2F5QmluZGluZ3Nba2V5XSAmJiAod3JpdGFibGVWYWwgPSBnZXRXcml0ZWFibGVWYWx1ZSh2YWwpKSkgewogICAgICAgICAgICAgICAgICAgIC8vIEZvciB0d28td2F5IGJpbmRpbmdzLCBwcm92aWRlIGEgd3JpdGUgbWV0aG9kIGluIGNhc2UgdGhlIHZhbHVlCiAgICAgICAgICAgICAgICAgICAgLy8gaXNuJ3QgYSB3cml0YWJsZSBvYnNlcnZhYmxlLgogICAgICAgICAgICAgICAgICAgIHByb3BlcnR5QWNjZXNzb3JSZXN1bHRTdHJpbmdzLnB1c2goIiciICsga2V5ICsgIic6ZnVuY3Rpb24oX3opeyIgKyB3cml0YWJsZVZhbCArICI9X3p9Iik7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSB3cmFwcGVkIGluIGEgZnVuY3Rpb24gc28gdGhhdCBlYWNoIHZhbHVlIGNhbiBiZSBhY2Nlc3NlZCBpbmRlcGVuZGVudGx5CiAgICAgICAgICAgIGlmIChtYWtlVmFsdWVBY2Nlc3NvcnMpIHsKICAgICAgICAgICAgICAgIHZhbCA9ICdmdW5jdGlvbigpe3JldHVybiAnICsgdmFsICsgJyB9JzsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXN1bHRTdHJpbmdzLnB1c2goIiciICsga2V5ICsgIic6IiArIHZhbCk7CiAgICAgICAgfQoKICAgICAgICB2YXIgcmVzdWx0U3RyaW5ncyA9IFtdLAogICAgICAgICAgICBwcm9wZXJ0eUFjY2Vzc29yUmVzdWx0U3RyaW5ncyA9IFtdLAogICAgICAgICAgICBtYWtlVmFsdWVBY2Nlc3NvcnMgPSBiaW5kaW5nT3B0aW9uc1sndmFsdWVBY2Nlc3NvcnMnXSwKICAgICAgICAgICAgYmluZGluZ1BhcmFtcyA9IGJpbmRpbmdPcHRpb25zWydiaW5kaW5nUGFyYW1zJ10sCiAgICAgICAgICAgIGtleVZhbHVlQXJyYXkgPSB0eXBlb2YgYmluZGluZ3NTdHJpbmdPcktleVZhbHVlQXJyYXkgPT09ICJzdHJpbmciID8KICAgICAgICAgICAgICAgIHBhcnNlT2JqZWN0TGl0ZXJhbChiaW5kaW5nc1N0cmluZ09yS2V5VmFsdWVBcnJheSkgOiBiaW5kaW5nc1N0cmluZ09yS2V5VmFsdWVBcnJheTsKCiAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGtleVZhbHVlQXJyYXksIGZ1bmN0aW9uKGtleVZhbHVlKSB7CiAgICAgICAgICAgIHByb2Nlc3NLZXlWYWx1ZShrZXlWYWx1ZS5rZXkgfHwga2V5VmFsdWVbJ3Vua25vd24nXSwga2V5VmFsdWUudmFsdWUpOwogICAgICAgIH0pOwoKICAgICAgICBpZiAocHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3MubGVuZ3RoKQogICAgICAgICAgICBwcm9jZXNzS2V5VmFsdWUoJ19rb19wcm9wZXJ0eV93cml0ZXJzJywgInsiICsgcHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3Muam9pbigiLCIpICsgIiB9Iik7CgogICAgICAgIHJldHVybiByZXN1bHRTdHJpbmdzLmpvaW4oIiwiKTsKICAgIH0KCiAgICByZXR1cm4gewogICAgICAgIGJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yczogW10sCgogICAgICAgIHR3b1dheUJpbmRpbmdzOiB0d29XYXlCaW5kaW5ncywKCiAgICAgICAgcGFyc2VPYmplY3RMaXRlcmFsOiBwYXJzZU9iamVjdExpdGVyYWwsCgogICAgICAgIHByZVByb2Nlc3NCaW5kaW5nczogcHJlUHJvY2Vzc0JpbmRpbmdzLAoKICAgICAgICBrZXlWYWx1ZUFycmF5Q29udGFpbnNLZXk6IGZ1bmN0aW9uKGtleVZhbHVlQXJyYXksIGtleSkgewogICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleVZhbHVlQXJyYXkubGVuZ3RoOyBpKyspCiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVBcnJheVtpXVsna2V5J10gPT0ga2V5KQogICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfSwKCiAgICAgICAgLy8gSW50ZXJuYWwsIHByaXZhdGUgS08gdXRpbGl0eSBmb3IgdXBkYXRpbmcgbW9kZWwgcHJvcGVydGllcyBmcm9tIHdpdGhpbiBiaW5kaW5ncwogICAgICAgIC8vIHByb3BlcnR5OiAgICAgICAgICAgIElmIHRoZSBwcm9wZXJ0eSBiZWluZyB1cGRhdGVkIGlzIChvciBtaWdodCBiZSkgYW4gb2JzZXJ2YWJsZSwgcGFzcyBpdCBoZXJlCiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgSWYgaXQgdHVybnMgb3V0IHRvIGJlIGEgd3JpdGFibGUgb2JzZXJ2YWJsZSwgaXQgd2lsbCBiZSB3cml0dGVuIHRvIGRpcmVjdGx5CiAgICAgICAgLy8gYWxsQmluZGluZ3M6ICAgICAgICAgQW4gb2JqZWN0IHdpdGggYSBnZXQgbWV0aG9kIHRvIHJldHJpZXZlIGJpbmRpbmdzIGluIHRoZSBjdXJyZW50IGV4ZWN1dGlvbiBjb250ZXh0LgogICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBzZWFyY2hlZCBmb3IgYSAnX2tvX3Byb3BlcnR5X3dyaXRlcnMnIHByb3BlcnR5IGluIGNhc2UgeW91J3JlIHdyaXRpbmcgdG8gYSBub24tb2JzZXJ2YWJsZQogICAgICAgIC8vIGtleTogICAgICAgICAgICAgICAgIFRoZSBrZXkgaWRlbnRpZnlpbmcgdGhlIHByb3BlcnR5IHRvIGJlIHdyaXR0ZW4uIEV4YW1wbGU6IGZvciB7IGhhc0ZvY3VzOiBteVZhbHVlIH0sIHdyaXRlIHRvICdteVZhbHVlJyBieSBzcGVjaWZ5aW5nIHRoZSBrZXkgJ2hhc0ZvY3VzJwogICAgICAgIC8vIHZhbHVlOiAgICAgICAgICAgICAgIFRoZSB2YWx1ZSB0byBiZSB3cml0dGVuCiAgICAgICAgLy8gY2hlY2tJZkRpZmZlcmVudDogICAgSWYgdHJ1ZSwgYW5kIGlmIHRoZSBwcm9wZXJ0eSBiZWluZyB3cml0dGVuIGlzIGEgd3JpdGFibGUgb2JzZXJ2YWJsZSwgdGhlIHZhbHVlIHdpbGwgb25seSBiZSB3cml0dGVuIGlmCiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgaXQgaXMgIT09IGV4aXN0aW5nIHZhbHVlIG9uIHRoYXQgd3JpdGFibGUgb2JzZXJ2YWJsZQogICAgICAgIHdyaXRlVmFsdWVUb1Byb3BlcnR5OiBmdW5jdGlvbihwcm9wZXJ0eSwgYWxsQmluZGluZ3MsIGtleSwgdmFsdWUsIGNoZWNrSWZEaWZmZXJlbnQpIHsKICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSB8fCAha28uaXNPYnNlcnZhYmxlKHByb3BlcnR5KSkgewogICAgICAgICAgICAgICAgdmFyIHByb3BXcml0ZXJzID0gYWxsQmluZGluZ3MuZ2V0KCdfa29fcHJvcGVydHlfd3JpdGVycycpOwogICAgICAgICAgICAgICAgaWYgKHByb3BXcml0ZXJzICYmIHByb3BXcml0ZXJzW2tleV0pCiAgICAgICAgICAgICAgICAgICAgcHJvcFdyaXRlcnNba2V5XSh2YWx1ZSk7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKHByb3BlcnR5KSAmJiAoIWNoZWNrSWZEaWZmZXJlbnQgfHwgcHJvcGVydHkucGVlaygpICE9PSB2YWx1ZSkpIHsKICAgICAgICAgICAgICAgIHByb3BlcnR5KHZhbHVlKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH07Cn0pKCk7Cgprby5leHBvcnRTeW1ib2woJ2V4cHJlc3Npb25SZXdyaXRpbmcnLCBrby5leHByZXNzaW9uUmV3cml0aW5nKTsKa28uZXhwb3J0U3ltYm9sKCdleHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9ycycsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzKTsKa28uZXhwb3J0U3ltYm9sKCdleHByZXNzaW9uUmV3cml0aW5nLnBhcnNlT2JqZWN0TGl0ZXJhbCcsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsKTsKa28uZXhwb3J0U3ltYm9sKCdleHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5ncycsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzKTsKCi8vIE1ha2luZyBiaW5kaW5ncyBleHBsaWNpdGx5IGRlY2xhcmUgdGhlbXNlbHZlcyBhcyAidHdvIHdheSIgaXNuJ3QgaWRlYWwgaW4gdGhlIGxvbmcgdGVybSAoaXQgd291bGQgYmUgYmV0dGVyIGlmCi8vIGFsbCBiaW5kaW5ncyBjb3VsZCB1c2UgYW4gb2ZmaWNpYWwgJ3Byb3BlcnR5IHdyaXRlcicgQVBJIHdpdGhvdXQgbmVlZGluZyB0byBkZWNsYXJlIHRoYXQgdGhleSBtaWdodCkuIEhvd2V2ZXIsCi8vIHNpbmNlIHRoaXMgaXMgbm90LCBhbmQgaGFzIG5ldmVyIGJlZW4sIGEgcHVibGljIEFQSSAoX2tvX3Byb3BlcnR5X3dyaXRlcnMgd2FzIG5ldmVyIGRvY3VtZW50ZWQpLCBpdCdzIGFjY2VwdGFibGUKLy8gYXMgYW4gaW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsIGluIHRoZSBzaG9ydCB0ZXJtLgovLyBGb3IgdGhvc2UgZGV2ZWxvcGVycyB3aG8gcmVseSBvbiBfa29fcHJvcGVydHlfd3JpdGVycyBpbiB0aGVpciBjdXN0b20gYmluZGluZ3MsIHdlIGV4cG9zZSBfdHdvV2F5QmluZGluZ3MgYXMgYW4KLy8gdW5kb2N1bWVudGVkIGZlYXR1cmUgdGhhdCBtYWtlcyBpdCByZWxhdGl2ZWx5IGVhc3kgdG8gdXBncmFkZSB0byBLTyAzLjAuIEhvd2V2ZXIsIHRoaXMgaXMgc3RpbGwgbm90IGFuIG9mZmljaWFsCi8vIHB1YmxpYyBBUEksIGFuZCB3ZSByZXNlcnZlIHRoZSByaWdodCB0byByZW1vdmUgaXQgYXQgYW55IHRpbWUgaWYgd2UgY3JlYXRlIGEgcmVhbCBwdWJsaWMgcHJvcGVydHkgd3JpdGVycyBBUEkuCmtvLmV4cG9ydFN5bWJvbCgnZXhwcmVzc2lvblJld3JpdGluZy5fdHdvV2F5QmluZGluZ3MnLCBrby5leHByZXNzaW9uUmV3cml0aW5nLnR3b1dheUJpbmRpbmdzKTsKCi8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBkZWZpbmUgdGhlIGZvbGxvd2luZyBhbGlhc2VzLiAoUHJldmlvdXNseSwgdGhlc2UgZnVuY3Rpb24gbmFtZXMgd2VyZSBtaXNsZWFkaW5nIGJlY2F1c2UKLy8gdGhleSByZWZlcnJlZCB0byBKU09OIHNwZWNpZmljYWxseSwgZXZlbiB0aG91Z2ggdGhleSBhY3R1YWxseSB3b3JrIHdpdGggYXJiaXRyYXJ5IEphdmFTY3JpcHQgb2JqZWN0IGxpdGVyYWwgZXhwcmVzc2lvbnMuKQprby5leHBvcnRTeW1ib2woJ2pzb25FeHByZXNzaW9uUmV3cml0aW5nJywga28uZXhwcmVzc2lvblJld3JpdGluZyk7CmtvLmV4cG9ydFN5bWJvbCgnanNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvbicsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzKTsKKGZ1bmN0aW9uKCkgewogICAgLy8gIlZpcnR1YWwgZWxlbWVudHMiIGlzIGFuIGFic3RyYWN0aW9uIG9uIHRvcCBvZiB0aGUgdXN1YWwgRE9NIEFQSSB3aGljaCB1bmRlcnN0YW5kcyB0aGUgbm90aW9uIHRoYXQgY29tbWVudCBub2RlcwogICAgLy8gbWF5IGJlIHVzZWQgdG8gcmVwcmVzZW50IGhpZXJhcmNoeSAoaW4gYWRkaXRpb24gdG8gdGhlIERPTSdzIG5hdHVyYWwgaGllcmFyY2h5KS4KICAgIC8vIElmIHlvdSBjYWxsIHRoZSBET00tbWFuaXB1bGF0aW5nIGZ1bmN0aW9ucyBvbiBrby52aXJ0dWFsRWxlbWVudHMsIHlvdSB3aWxsIGJlIGFibGUgdG8gcmVhZCBhbmQgd3JpdGUgdGhlIHN0YXRlCiAgICAvLyBvZiB0aGF0IHZpcnR1YWwgaGllcmFyY2h5CiAgICAvLwogICAgLy8gVGhlIHBvaW50IG9mIGFsbCB0aGlzIGlzIHRvIHN1cHBvcnQgY29udGFpbmVybGVzcyB0ZW1wbGF0ZXMgKGUuZy4sIDwhLS0ga28gZm9yZWFjaDpzb21lQ29sbGVjdGlvbiAtLT5ibGFoPCEtLSAva28gLS0+KQogICAgLy8gd2l0aG91dCBoYXZpbmcgdG8gc2NhdHRlciBzcGVjaWFsIGNhc2VzIGFsbCBvdmVyIHRoZSBiaW5kaW5nIGFuZCB0ZW1wbGF0aW5nIGNvZGUuCgogICAgLy8gSUUgOSBjYW5ub3QgcmVsaWFibHkgcmVhZCB0aGUgIm5vZGVWYWx1ZSIgcHJvcGVydHkgb2YgYSBjb21tZW50IG5vZGUgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzE4NikKICAgIC8vIGJ1dCBpdCBkb2VzIGdpdmUgdGhlbSBhIG5vbnN0YW5kYXJkIGFsdGVybmF0aXZlIHByb3BlcnR5IGNhbGxlZCAidGV4dCIgdGhhdCBpdCBjYW4gcmVhZCByZWxpYWJseS4gT3RoZXIgYnJvd3NlcnMgZG9uJ3QgaGF2ZSB0aGF0IHByb3BlcnR5LgogICAgLy8gU28sIHVzZSBub2RlLnRleHQgd2hlcmUgYXZhaWxhYmxlLCBhbmQgbm9kZS5ub2RlVmFsdWUgZWxzZXdoZXJlCiAgICB2YXIgY29tbWVudE5vZGVzSGF2ZVRleHRQcm9wZXJ0eSA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoInRlc3QiKS50ZXh0ID09PSAiPCEtLXRlc3QtLT4iOwoKICAgIHZhciBzdGFydENvbW1lbnRSZWdleCA9IGNvbW1lbnROb2Rlc0hhdmVUZXh0UHJvcGVydHkgPyAvXjwhLS1ccyprbyg/OlxzKyhbXHNcU10rKSk/XHMqLS0+JC8gOiAvXlxzKmtvKD86XHMrKFtcc1xTXSspKT9ccyokLzsKICAgIHZhciBlbmRDb21tZW50UmVnZXggPSAgIGNvbW1lbnROb2Rlc0hhdmVUZXh0UHJvcGVydHkgPyAvXjwhLS1ccypcL2tvXHMqLS0+JC8gOiAvXlxzKlwva29ccyokLzsKICAgIHZhciBodG1sVGFnc1dpdGhPcHRpb25hbGx5Q2xvc2luZ0NoaWxkcmVuID0geyAndWwnOiB0cnVlLCAnb2wnOiB0cnVlIH07CgogICAgZnVuY3Rpb24gaXNTdGFydENvbW1lbnQobm9kZSkgewogICAgICAgIHJldHVybiAobm9kZS5ub2RlVHlwZSA9PSA4KSAmJiBzdGFydENvbW1lbnRSZWdleC50ZXN0KGNvbW1lbnROb2Rlc0hhdmVUZXh0UHJvcGVydHkgPyBub2RlLnRleHQgOiBub2RlLm5vZGVWYWx1ZSk7CiAgICB9CgogICAgZnVuY3Rpb24gaXNFbmRDb21tZW50KG5vZGUpIHsKICAgICAgICByZXR1cm4gKG5vZGUubm9kZVR5cGUgPT0gOCkgJiYgZW5kQ29tbWVudFJlZ2V4LnRlc3QoY29tbWVudE5vZGVzSGF2ZVRleHRQcm9wZXJ0eSA/IG5vZGUudGV4dCA6IG5vZGUubm9kZVZhbHVlKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsQ2hpbGRyZW4oc3RhcnRDb21tZW50LCBhbGxvd1VuYmFsYW5jZWQpIHsKICAgICAgICB2YXIgY3VycmVudE5vZGUgPSBzdGFydENvbW1lbnQ7CiAgICAgICAgdmFyIGRlcHRoID0gMTsKICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTsKICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZykgewogICAgICAgICAgICBpZiAoaXNFbmRDb21tZW50KGN1cnJlbnROb2RlKSkgewogICAgICAgICAgICAgICAgZGVwdGgtLTsKICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkKICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY3VycmVudE5vZGUpOwoKICAgICAgICAgICAgaWYgKGlzU3RhcnRDb21tZW50KGN1cnJlbnROb2RlKSkKICAgICAgICAgICAgICAgIGRlcHRoKys7CiAgICAgICAgfQogICAgICAgIGlmICghYWxsb3dVbmJhbGFuY2VkKQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6ICIgKyBzdGFydENvbW1lbnQubm9kZVZhbHVlKTsKICAgICAgICByZXR1cm4gbnVsbDsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRNYXRjaGluZ0VuZENvbW1lbnQoc3RhcnRDb21tZW50LCBhbGxvd1VuYmFsYW5jZWQpIHsKICAgICAgICB2YXIgYWxsVmlydHVhbENoaWxkcmVuID0gZ2V0VmlydHVhbENoaWxkcmVuKHN0YXJ0Q29tbWVudCwgYWxsb3dVbmJhbGFuY2VkKTsKICAgICAgICBpZiAoYWxsVmlydHVhbENoaWxkcmVuKSB7CiAgICAgICAgICAgIGlmIChhbGxWaXJ0dWFsQ2hpbGRyZW4ubGVuZ3RoID4gMCkKICAgICAgICAgICAgICAgIHJldHVybiBhbGxWaXJ0dWFsQ2hpbGRyZW5bYWxsVmlydHVhbENoaWxkcmVuLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nOwogICAgICAgICAgICByZXR1cm4gc3RhcnRDb21tZW50Lm5leHRTaWJsaW5nOwogICAgICAgIH0gZWxzZQogICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gTXVzdCBoYXZlIG5vIG1hdGNoaW5nIGVuZCBjb21tZW50LCBhbmQgYWxsb3dVbmJhbGFuY2VkIGlzIHRydWUKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRVbmJhbGFuY2VkQ2hpbGRUYWdzKG5vZGUpIHsKICAgICAgICAvLyBlLmcuLCBmcm9tIDxkaXY+T0s8L2Rpdj48IS0tIGtvIGJsYWggLS0+PHNwYW4+QW5vdGhlcjwvc3Bhbj4sIHJldHVybnM6IDwhLS0ga28gYmxhaCAtLT48c3Bhbj5Bbm90aGVyPC9zcGFuPgogICAgICAgIC8vICAgICAgIGZyb20gPGRpdj5PSzwvZGl2PjwhLS0gL2tvIC0tPjwhLS0gL2tvIC0tPiwgICAgICAgICAgICAgcmV0dXJuczogPCEtLSAva28gLS0+PCEtLSAva28gLS0+CiAgICAgICAgdmFyIGNoaWxkTm9kZSA9IG5vZGUuZmlyc3RDaGlsZCwgY2FwdHVyZVJlbWFpbmluZyA9IG51bGw7CiAgICAgICAgaWYgKGNoaWxkTm9kZSkgewogICAgICAgICAgICBkbyB7CiAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZVJlbWFpbmluZykgICAgICAgICAgICAgICAgICAgLy8gV2UgYWxyZWFkeSBoaXQgYW4gdW5iYWxhbmNlZCBub2RlIGFuZCBhcmUgbm93IGp1c3Qgc2Nvb3BpbmcgdXAgYWxsIHN1YnNlcXVlbnQgbm9kZXMKICAgICAgICAgICAgICAgICAgICBjYXB0dXJlUmVtYWluaW5nLnB1c2goY2hpbGROb2RlKTsKICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzU3RhcnRDb21tZW50KGNoaWxkTm9kZSkpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hpbmdFbmRDb21tZW50ID0gZ2V0TWF0Y2hpbmdFbmRDb21tZW50KGNoaWxkTm9kZSwgLyogYWxsb3dVbmJhbGFuY2VkOiAqLyB0cnVlKTsKICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdFbmRDb21tZW50KSAgICAgICAgICAgICAvLyBJdCdzIGEgYmFsYW5jZWQgdGFnLCBzbyBza2lwIGltbWVkaWF0ZWx5IHRvIHRoZSBlbmQgb2YgdGhpcyB2aXJ0dWFsIHNldAogICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGUgPSBtYXRjaGluZ0VuZENvbW1lbnQ7CiAgICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlUmVtYWluaW5nID0gW2NoaWxkTm9kZV07IC8vIEl0J3MgdW5iYWxhbmNlZCwgc28gc3RhcnQgY2FwdHVyaW5nIGZyb20gdGhpcyBwb2ludAogICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0VuZENvbW1lbnQoY2hpbGROb2RlKSkgewogICAgICAgICAgICAgICAgICAgIGNhcHR1cmVSZW1haW5pbmcgPSBbY2hpbGROb2RlXTsgICAgIC8vIEl0J3MgdW5iYWxhbmNlZCAoaWYgaXQgd2Fzbid0LCB3ZSdkIGhhdmUgc2tpcHBlZCBvdmVyIGl0IGFscmVhZHkpLCBzbyBzdGFydCBjYXB0dXJpbmcKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSB3aGlsZSAoY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGNhcHR1cmVSZW1haW5pbmc7CiAgICB9CgogICAga28udmlydHVhbEVsZW1lbnRzID0gewogICAgICAgIGFsbG93ZWRCaW5kaW5nczoge30sCgogICAgICAgIGNoaWxkTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHsKICAgICAgICAgICAgcmV0dXJuIGlzU3RhcnRDb21tZW50KG5vZGUpID8gZ2V0VmlydHVhbENoaWxkcmVuKG5vZGUpIDogbm9kZS5jaGlsZE5vZGVzOwogICAgICAgIH0sCgogICAgICAgIGVtcHR5Tm9kZTogZnVuY3Rpb24obm9kZSkgewogICAgICAgICAgICBpZiAoIWlzU3RhcnRDb21tZW50KG5vZGUpKQogICAgICAgICAgICAgICAga28udXRpbHMuZW1wdHlEb21Ob2RlKG5vZGUpOwogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgIHZhciB2aXJ0dWFsQ2hpbGRyZW4gPSBrby52aXJ0dWFsRWxlbWVudHMuY2hpbGROb2Rlcyhub2RlKTsKICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdmlydHVhbENoaWxkcmVuLmxlbmd0aDsgaSA8IGo7IGkrKykKICAgICAgICAgICAgICAgICAgICBrby5yZW1vdmVOb2RlKHZpcnR1YWxDaGlsZHJlbltpXSk7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICBzZXREb21Ob2RlQ2hpbGRyZW46IGZ1bmN0aW9uKG5vZGUsIGNoaWxkTm9kZXMpIHsKICAgICAgICAgICAgaWYgKCFpc1N0YXJ0Q29tbWVudChub2RlKSkKICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldERvbU5vZGVDaGlsZHJlbihub2RlLCBjaGlsZE5vZGVzKTsKICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlKG5vZGUpOwogICAgICAgICAgICAgICAgdmFyIGVuZENvbW1lbnROb2RlID0gbm9kZS5uZXh0U2libGluZzsgLy8gTXVzdCBiZSB0aGUgbmV4dCBzaWJsaW5nLCBhcyB3ZSBqdXN0IGVtcHRpZWQgdGhlIGNoaWxkcmVuCiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgajsgaSsrKQogICAgICAgICAgICAgICAgICAgIGVuZENvbW1lbnROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZXNbaV0sIGVuZENvbW1lbnROb2RlKTsKICAgICAgICAgICAgfQogICAgICAgIH0sCgogICAgICAgIHByZXBlbmQ6IGZ1bmN0aW9uKGNvbnRhaW5lck5vZGUsIG5vZGVUb1ByZXBlbmQpIHsKICAgICAgICAgICAgaWYgKCFpc1N0YXJ0Q29tbWVudChjb250YWluZXJOb2RlKSkgewogICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lck5vZGUuZmlyc3RDaGlsZCkKICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLmluc2VydEJlZm9yZShub2RlVG9QcmVwZW5kLCBjb250YWluZXJOb2RlLmZpcnN0Q2hpbGQpOwogICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUuYXBwZW5kQ2hpbGQobm9kZVRvUHJlcGVuZCk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAvLyBTdGFydCBjb21tZW50cyBtdXN0IGFsd2F5cyBoYXZlIGEgcGFyZW50IGFuZCBhdCBsZWFzdCBvbmUgZm9sbG93aW5nIHNpYmxpbmcgKHRoZSBlbmQgY29tbWVudCkKICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvUHJlcGVuZCwgY29udGFpbmVyTm9kZS5uZXh0U2libGluZyk7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICBpbnNlcnRBZnRlcjogZnVuY3Rpb24oY29udGFpbmVyTm9kZSwgbm9kZVRvSW5zZXJ0LCBpbnNlcnRBZnRlck5vZGUpIHsKICAgICAgICAgICAgaWYgKCFpbnNlcnRBZnRlck5vZGUpIHsKICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5wcmVwZW5kKGNvbnRhaW5lck5vZGUsIG5vZGVUb0luc2VydCk7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzU3RhcnRDb21tZW50KGNvbnRhaW5lck5vZGUpKSB7CiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYWZ0ZXIgaW5zZXJ0aW9uIHBvaW50CiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0QWZ0ZXJOb2RlLm5leHRTaWJsaW5nKQogICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUuaW5zZXJ0QmVmb3JlKG5vZGVUb0luc2VydCwgaW5zZXJ0QWZ0ZXJOb2RlLm5leHRTaWJsaW5nKTsKICAgICAgICAgICAgICAgIGVsc2UKICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLmFwcGVuZENoaWxkKG5vZGVUb0luc2VydCk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAvLyBDaGlsZHJlbiBvZiBzdGFydCBjb21tZW50cyBtdXN0IGFsd2F5cyBoYXZlIGEgcGFyZW50IGFuZCBhdCBsZWFzdCBvbmUgZm9sbG93aW5nIHNpYmxpbmcgKHRoZSBlbmQgY29tbWVudCkKICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvSW5zZXJ0LCBpbnNlcnRBZnRlck5vZGUubmV4dFNpYmxpbmcpOwogICAgICAgICAgICB9CiAgICAgICAgfSwKCiAgICAgICAgZmlyc3RDaGlsZDogZnVuY3Rpb24obm9kZSkgewogICAgICAgICAgICBpZiAoIWlzU3RhcnRDb21tZW50KG5vZGUpKQogICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuZmlyc3RDaGlsZDsKICAgICAgICAgICAgaWYgKCFub2RlLm5leHRTaWJsaW5nIHx8IGlzRW5kQ29tbWVudChub2RlLm5leHRTaWJsaW5nKSkKICAgICAgICAgICAgICAgIHJldHVybiBudWxsOwogICAgICAgICAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZzsKICAgICAgICB9LAoKICAgICAgICBuZXh0U2libGluZzogZnVuY3Rpb24obm9kZSkgewogICAgICAgICAgICBpZiAoaXNTdGFydENvbW1lbnQobm9kZSkpCiAgICAgICAgICAgICAgICBub2RlID0gZ2V0TWF0Y2hpbmdFbmRDb21tZW50KG5vZGUpOwogICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyAmJiBpc0VuZENvbW1lbnQobm9kZS5uZXh0U2libGluZykpCiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgICAgICAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmc7CiAgICAgICAgfSwKCiAgICAgICAgaGFzQmluZGluZ1ZhbHVlOiBpc1N0YXJ0Q29tbWVudCwKCiAgICAgICAgdmlydHVhbE5vZGVCaW5kaW5nVmFsdWU6IGZ1bmN0aW9uKG5vZGUpIHsKICAgICAgICAgICAgdmFyIHJlZ2V4TWF0Y2ggPSAoY29tbWVudE5vZGVzSGF2ZVRleHRQcm9wZXJ0eSA/IG5vZGUudGV4dCA6IG5vZGUubm9kZVZhbHVlKS5tYXRjaChzdGFydENvbW1lbnRSZWdleCk7CiAgICAgICAgICAgIHJldHVybiByZWdleE1hdGNoID8gcmVnZXhNYXRjaFsxXSA6IG51bGw7CiAgICAgICAgfSwKCiAgICAgICAgbm9ybWFsaXNlVmlydHVhbEVsZW1lbnREb21TdHJ1Y3R1cmU6IGZ1bmN0aW9uKGVsZW1lbnRWZXJpZmllZCkgewogICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzE1NQogICAgICAgICAgICAvLyAoSUUgPD0gOCBvciBJRSA5IHF1aXJrcyBtb2RlIHBhcnNlcyB5b3VyIEhUTUwgd2VpcmRseSwgdHJlYXRpbmcgY2xvc2luZyA8L2xpPiB0YWdzIGFzIGlmIHRoZXkgZG9uJ3QgZXhpc3QsIHRoZXJlYnkgbW92aW5nIGNvbW1lbnQgbm9kZXMKICAgICAgICAgICAgLy8gdGhhdCBhcmUgZGlyZWN0IGRlc2NlbmRhbnRzIG9mIDx1bD4gaW50byB0aGUgcHJlY2VkaW5nIDxsaT4pCiAgICAgICAgICAgIGlmICghaHRtbFRhZ3NXaXRoT3B0aW9uYWxseUNsb3NpbmdDaGlsZHJlbltrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudFZlcmlmaWVkKV0pCiAgICAgICAgICAgICAgICByZXR1cm47CgogICAgICAgICAgICAvLyBTY2FuIGltbWVkaWF0ZSBjaGlsZHJlbiB0byBzZWUgaWYgdGhleSBjb250YWluIHVuYmFsYW5jZWQgY29tbWVudCB0YWdzLiBJZiB0aGV5IGRvLCB0aG9zZSBjb21tZW50IHRhZ3MKICAgICAgICAgICAgLy8gbXVzdCBiZSBpbnRlbmRlZCB0byBhcHBlYXIgKmFmdGVyKiB0aGF0IGNoaWxkLCBzbyBtb3ZlIHRoZW0gdGhlcmUuCiAgICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBlbGVtZW50VmVyaWZpZWQuZmlyc3RDaGlsZDsKICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkgewogICAgICAgICAgICAgICAgZG8gewogICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEpIHsKICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVuYmFsYW5jZWRUYWdzID0gZ2V0VW5iYWxhbmNlZENoaWxkVGFncyhjaGlsZE5vZGUpOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5iYWxhbmNlZFRhZ3MpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpeCB1cCB0aGUgRE9NIGJ5IG1vdmluZyB0aGUgdW5iYWxhbmNlZCB0YWdzIHRvIHdoZXJlIHRoZXkgbW9zdCBsaWtlbHkgd2VyZSBpbnRlbmRlZCB0byBiZSBwbGFjZWQgLSAqYWZ0ZXIqIHRoZSBjaGlsZAogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVUb0luc2VydEJlZm9yZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5iYWxhbmNlZFRhZ3MubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVRvSW5zZXJ0QmVmb3JlKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmVyaWZpZWQuaW5zZXJ0QmVmb3JlKHVuYmFsYW5jZWRUYWdzW2ldLCBub2RlVG9JbnNlcnRCZWZvcmUpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZlcmlmaWVkLmFwcGVuZENoaWxkKHVuYmFsYW5jZWRUYWdzW2ldKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0gd2hpbGUgKGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZyk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9Owp9KSgpOwprby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cycsIGtvLnZpcnR1YWxFbGVtZW50cyk7CmtvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5ncycsIGtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3MpOwprby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUnLCBrby52aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlKTsKLy9rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5maXJzdENoaWxkJywga28udmlydHVhbEVsZW1lbnRzLmZpcnN0Q2hpbGQpOyAgICAgLy8gZmlyc3RDaGlsZCBpcyBub3QgbWluaWZpZWQKa28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMuaW5zZXJ0QWZ0ZXInLCBrby52aXJ0dWFsRWxlbWVudHMuaW5zZXJ0QWZ0ZXIpOwovL2tvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nJywga28udmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nKTsgICAvLyBuZXh0U2libGluZyBpcyBub3QgbWluaWZpZWQKa28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMucHJlcGVuZCcsIGtvLnZpcnR1YWxFbGVtZW50cy5wcmVwZW5kKTsKa28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuJywga28udmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlbik7CihmdW5jdGlvbigpIHsKICAgIHZhciBkZWZhdWx0QmluZGluZ0F0dHJpYnV0ZU5hbWUgPSAiZGF0YS1iaW5kIjsKCiAgICBrby5iaW5kaW5nUHJvdmlkZXIgPSBmdW5jdGlvbigpIHsKICAgICAgICB0aGlzLmJpbmRpbmdDYWNoZSA9IHt9OwogICAgfTsKCiAgICBrby51dGlscy5leHRlbmQoa28uYmluZGluZ1Byb3ZpZGVyLnByb3RvdHlwZSwgewogICAgICAgICdub2RlSGFzQmluZGluZ3MnOiBmdW5jdGlvbihub2RlKSB7CiAgICAgICAgICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkgewogICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBFbGVtZW50CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKGRlZmF1bHRCaW5kaW5nQXR0cmlidXRlTmFtZSkgIT0gbnVsbAogICAgICAgICAgICAgICAgICAgICAgICB8fCBrby5jb21wb25lbnRzWydnZXRDb21wb25lbnROYW1lRm9yTm9kZSddKG5vZGUpOwogICAgICAgICAgICAgICAgY2FzZSA4OiAvLyBDb21tZW50IG5vZGUKICAgICAgICAgICAgICAgICAgICByZXR1cm4ga28udmlydHVhbEVsZW1lbnRzLmhhc0JpbmRpbmdWYWx1ZShub2RlKTsKICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCgogICAgICAgICdnZXRCaW5kaW5ncyc6IGZ1bmN0aW9uKG5vZGUsIGJpbmRpbmdDb250ZXh0KSB7CiAgICAgICAgICAgIHZhciBiaW5kaW5nc1N0cmluZyA9IHRoaXNbJ2dldEJpbmRpbmdzU3RyaW5nJ10obm9kZSwgYmluZGluZ0NvbnRleHQpLAogICAgICAgICAgICAgICAgcGFyc2VkQmluZGluZ3MgPSBiaW5kaW5nc1N0cmluZyA/IHRoaXNbJ3BhcnNlQmluZGluZ3NTdHJpbmcnXShiaW5kaW5nc1N0cmluZywgYmluZGluZ0NvbnRleHQsIG5vZGUpIDogbnVsbDsKICAgICAgICAgICAgcmV0dXJuIGtvLmNvbXBvbmVudHMuYWRkQmluZGluZ3NGb3JDdXN0b21FbGVtZW50KHBhcnNlZEJpbmRpbmdzLCBub2RlLCBiaW5kaW5nQ29udGV4dCwgLyogdmFsdWVBY2Nlc3NvcnMgKi8gZmFsc2UpOwogICAgICAgIH0sCgogICAgICAgICdnZXRCaW5kaW5nQWNjZXNzb3JzJzogZnVuY3Rpb24obm9kZSwgYmluZGluZ0NvbnRleHQpIHsKICAgICAgICAgICAgdmFyIGJpbmRpbmdzU3RyaW5nID0gdGhpc1snZ2V0QmluZGluZ3NTdHJpbmcnXShub2RlLCBiaW5kaW5nQ29udGV4dCksCiAgICAgICAgICAgICAgICBwYXJzZWRCaW5kaW5ncyA9IGJpbmRpbmdzU3RyaW5nID8gdGhpc1sncGFyc2VCaW5kaW5nc1N0cmluZyddKGJpbmRpbmdzU3RyaW5nLCBiaW5kaW5nQ29udGV4dCwgbm9kZSwgeyAndmFsdWVBY2Nlc3NvcnMnOiB0cnVlIH0pIDogbnVsbDsKICAgICAgICAgICAgcmV0dXJuIGtvLmNvbXBvbmVudHMuYWRkQmluZGluZ3NGb3JDdXN0b21FbGVtZW50KHBhcnNlZEJpbmRpbmdzLCBub2RlLCBiaW5kaW5nQ29udGV4dCwgLyogdmFsdWVBY2Nlc3NvcnMgKi8gdHJ1ZSk7CiAgICAgICAgfSwKCiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgaW50ZXJuYWxseSBieSB0aGlzIGRlZmF1bHQgcHJvdmlkZXIuCiAgICAgICAgLy8gSXQncyBub3QgcGFydCBvZiB0aGUgaW50ZXJmYWNlIGRlZmluaXRpb24gZm9yIGEgZ2VuZXJhbCBiaW5kaW5nIHByb3ZpZGVyLgogICAgICAgICdnZXRCaW5kaW5nc1N0cmluZyc6IGZ1bmN0aW9uKG5vZGUsIGJpbmRpbmdDb250ZXh0KSB7CiAgICAgICAgICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkgewogICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUoZGVmYXVsdEJpbmRpbmdBdHRyaWJ1dGVOYW1lKTsgICAvLyBFbGVtZW50CiAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBrby52aXJ0dWFsRWxlbWVudHMudmlydHVhbE5vZGVCaW5kaW5nVmFsdWUobm9kZSk7IC8vIENvbW1lbnQgbm9kZQogICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCBpbnRlcm5hbGx5IGJ5IHRoaXMgZGVmYXVsdCBwcm92aWRlci4KICAgICAgICAvLyBJdCdzIG5vdCBwYXJ0IG9mIHRoZSBpbnRlcmZhY2UgZGVmaW5pdGlvbiBmb3IgYSBnZW5lcmFsIGJpbmRpbmcgcHJvdmlkZXIuCiAgICAgICAgJ3BhcnNlQmluZGluZ3NTdHJpbmcnOiBmdW5jdGlvbihiaW5kaW5nc1N0cmluZywgYmluZGluZ0NvbnRleHQsIG5vZGUsIG9wdGlvbnMpIHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nRnVuY3Rpb24gPSBjcmVhdGVCaW5kaW5nc1N0cmluZ0V2YWx1YXRvclZpYUNhY2hlKGJpbmRpbmdzU3RyaW5nLCB0aGlzLmJpbmRpbmdDYWNoZSwgb3B0aW9ucyk7CiAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZ0Z1bmN0aW9uKGJpbmRpbmdDb250ZXh0LCBub2RlKTsKICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsKICAgICAgICAgICAgICAgIGV4Lm1lc3NhZ2UgPSAiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxuQmluZGluZ3MgdmFsdWU6ICIgKyBiaW5kaW5nc1N0cmluZyArICJcbk1lc3NhZ2U6ICIgKyBleC5tZXNzYWdlOwogICAgICAgICAgICAgICAgdGhyb3cgZXg7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9KTsKCiAgICBrby5iaW5kaW5nUHJvdmlkZXJbJ2luc3RhbmNlJ10gPSBuZXcga28uYmluZGluZ1Byb3ZpZGVyKCk7CgogICAgZnVuY3Rpb24gY3JlYXRlQmluZGluZ3NTdHJpbmdFdmFsdWF0b3JWaWFDYWNoZShiaW5kaW5nc1N0cmluZywgY2FjaGUsIG9wdGlvbnMpIHsKICAgICAgICB2YXIgY2FjaGVLZXkgPSBiaW5kaW5nc1N0cmluZyArIChvcHRpb25zICYmIG9wdGlvbnNbJ3ZhbHVlQWNjZXNzb3JzJ10gfHwgJycpOwogICAgICAgIHJldHVybiBjYWNoZVtjYWNoZUtleV0KICAgICAgICAgICAgfHwgKGNhY2hlW2NhY2hlS2V5XSA9IGNyZWF0ZUJpbmRpbmdzU3RyaW5nRXZhbHVhdG9yKGJpbmRpbmdzU3RyaW5nLCBvcHRpb25zKSk7CiAgICB9CgogICAgZnVuY3Rpb24gY3JlYXRlQmluZGluZ3NTdHJpbmdFdmFsdWF0b3IoYmluZGluZ3NTdHJpbmcsIG9wdGlvbnMpIHsKICAgICAgICAvLyBCdWlsZCB0aGUgc291cmNlIGZvciBhIGZ1bmN0aW9uIHRoYXQgZXZhbHVhdGVzICJleHByZXNzaW9uIgogICAgICAgIC8vIEZvciBlYWNoIHNjb3BlIHZhcmlhYmxlLCBhZGQgYW4gZXh0cmEgbGV2ZWwgb2YgIndpdGgiIG5lc3RpbmcKICAgICAgICAvLyBFeGFtcGxlIHJlc3VsdDogd2l0aChzYzEpIHsgd2l0aChzYzApIHsgcmV0dXJuIChleHByZXNzaW9uKSB9IH0KICAgICAgICB2YXIgcmV3cml0dGVuQmluZGluZ3MgPSBrby5leHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5ncyhiaW5kaW5nc1N0cmluZywgb3B0aW9ucyksCiAgICAgICAgICAgIGZ1bmN0aW9uQm9keSA9ICJ3aXRoKCRjb250ZXh0KXt3aXRoKCRkYXRhfHx7fSl7cmV0dXJueyIgKyByZXdyaXR0ZW5CaW5kaW5ncyArICJ9fX0iOwogICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oIiRjb250ZXh0IiwgIiRlbGVtZW50IiwgZnVuY3Rpb25Cb2R5KTsKICAgIH0KfSkoKTsKCmtvLmV4cG9ydFN5bWJvbCgnYmluZGluZ1Byb3ZpZGVyJywga28uYmluZGluZ1Byb3ZpZGVyKTsKKGZ1bmN0aW9uICgpIHsKICAgIGtvLmJpbmRpbmdIYW5kbGVycyA9IHt9OwoKICAgIC8vIFRoZSBmb2xsb3dpbmcgZWxlbWVudCB0eXBlcyB3aWxsIG5vdCBiZSByZWN1cnNlZCBpbnRvIGR1cmluZyBiaW5kaW5nLiBJbiB0aGUgZnV0dXJlLCB3ZQogICAgLy8gbWF5IGNvbnNpZGVyIGFkZGluZyA8dGVtcGxhdGU+IHRvIHRoaXMgbGlzdCwgYmVjYXVzZSBzdWNoIGVsZW1lbnRzJyBjb250ZW50cyBhcmUgYWx3YXlzCiAgICAvLyBpbnRlbmRlZCB0byBiZSBib3VuZCBpbiBhIGRpZmZlcmVudCBjb250ZXh0IGZyb20gd2hlcmUgdGhleSBhcHBlYXIgaW4gdGhlIGRvY3VtZW50LgogICAgdmFyIGJpbmRpbmdEb2VzTm90UmVjdXJzZUludG9FbGVtZW50VHlwZXMgPSB7CiAgICAgICAgLy8gRG9uJ3Qgd2FudCBiaW5kaW5ncyB0aGF0IG9wZXJhdGUgb24gdGV4dCBub2RlcyB0byBtdXRhdGUgPHNjcmlwdD4gY29udGVudHMsCiAgICAgICAgLy8gYmVjYXVzZSBpdCdzIHVuZXhwZWN0ZWQgYW5kIGEgcG90ZW50aWFsIFhTUyBpc3N1ZQogICAgICAgICdzY3JpcHQnOiB0cnVlCiAgICB9OwoKICAgIC8vIFVzZSBhbiBvdmVycmlkYWJsZSBtZXRob2QgZm9yIHJldHJpZXZpbmcgYmluZGluZyBoYW5kbGVycyBzbyB0aGF0IGEgcGx1Z2lucyBtYXkgc3VwcG9ydCBkeW5hbWljYWxseSBjcmVhdGVkIGhhbmRsZXJzCiAgICBrb1snZ2V0QmluZGluZ0hhbmRsZXInXSA9IGZ1bmN0aW9uKGJpbmRpbmdLZXkpIHsKICAgICAgICByZXR1cm4ga28uYmluZGluZ0hhbmRsZXJzW2JpbmRpbmdLZXldOwogICAgfTsKCiAgICAvLyBUaGUga28uYmluZGluZ0NvbnRleHQgY29uc3RydWN0b3IgaXMgb25seSBjYWxsZWQgZGlyZWN0bHkgdG8gY3JlYXRlIHRoZSByb290IGNvbnRleHQuIEZvciBjaGlsZAogICAgLy8gY29udGV4dHMsIHVzZSBiaW5kaW5nQ29udGV4dC5jcmVhdGVDaGlsZENvbnRleHQgb3IgYmluZGluZ0NvbnRleHQuZXh0ZW5kLgogICAga28uYmluZGluZ0NvbnRleHQgPSBmdW5jdGlvbihkYXRhSXRlbU9yQWNjZXNzb3IsIHBhcmVudENvbnRleHQsIGRhdGFJdGVtQWxpYXMsIGV4dGVuZENhbGxiYWNrKSB7CgogICAgICAgIC8vIFRoZSBiaW5kaW5nIGNvbnRleHQgb2JqZWN0IGluY2x1ZGVzIHN0YXRpYyBwcm9wZXJ0aWVzIGZvciB0aGUgY3VycmVudCwgcGFyZW50LCBhbmQgcm9vdCB2aWV3IG1vZGVscy4KICAgICAgICAvLyBJZiBhIHZpZXcgbW9kZWwgaXMgYWN0dWFsbHkgc3RvcmVkIGluIGFuIG9ic2VydmFibGUsIHRoZSBjb3JyZXNwb25kaW5nIGJpbmRpbmcgY29udGV4dCBvYmplY3QsIGFuZAogICAgICAgIC8vIGFueSBjaGlsZCBjb250ZXh0cywgbXVzdCBiZSB1cGRhdGVkIHdoZW4gdGhlIHZpZXcgbW9kZWwgaXMgY2hhbmdlZC4KICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb250ZXh0KCkgewogICAgICAgICAgICAvLyBNb3N0IG9mIHRoZSB0aW1lLCB0aGUgY29udGV4dCB3aWxsIGRpcmVjdGx5IGdldCBhIHZpZXcgbW9kZWwgb2JqZWN0LCBidXQgaWYgYSBmdW5jdGlvbiBpcyBnaXZlbiwKICAgICAgICAgICAgLy8gd2UgY2FsbCB0aGUgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIHZpZXcgbW9kZWwuIElmIHRoZSBmdW5jdGlvbiBhY2Nlc3NlcyBhbnkgb2JzZXZhYmxlcyBvciByZXR1cm5zCiAgICAgICAgICAgIC8vIGFuIG9ic2VydmFibGUsIHRoZSBkZXBlbmRlbmN5IGlzIHRyYWNrZWQsIGFuZCB0aG9zZSBvYnNlcnZhYmxlcyBjYW4gbGF0ZXIgY2F1c2UgdGhlIGJpbmRpbmcKICAgICAgICAgICAgLy8gY29udGV4dCB0byBiZSB1cGRhdGVkLgogICAgICAgICAgICB2YXIgZGF0YUl0ZW1Pck9ic2VydmFibGUgPSBpc0Z1bmMgPyBkYXRhSXRlbU9yQWNjZXNzb3IoKSA6IGRhdGFJdGVtT3JBY2Nlc3NvciwKICAgICAgICAgICAgICAgIGRhdGFJdGVtID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShkYXRhSXRlbU9yT2JzZXJ2YWJsZSk7CgogICAgICAgICAgICBpZiAocGFyZW50Q29udGV4dCkgewogICAgICAgICAgICAgICAgLy8gV2hlbiBhICJwYXJlbnQiIGNvbnRleHQgaXMgZ2l2ZW4sIHJlZ2lzdGVyIGEgZGVwZW5kZW5jeSBvbiB0aGUgcGFyZW50IGNvbnRleHQuIFRodXMgd2hlbmV2ZXIgdGhlCiAgICAgICAgICAgICAgICAvLyBwYXJlbnQgY29udGV4dCBpcyB1cGRhdGVkLCB0aGlzIGNvbnRleHQgd2lsbCBhbHNvIGJlIHVwZGF0ZWQuCiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29udGV4dC5fc3Vic2NyaWJhYmxlKQogICAgICAgICAgICAgICAgICAgIHBhcmVudENvbnRleHQuX3N1YnNjcmliYWJsZSgpOwoKICAgICAgICAgICAgICAgIC8vIENvcHkgJHJvb3QgYW5kIGFueSBjdXN0b20gcHJvcGVydGllcyBmcm9tIHRoZSBwYXJlbnQgY29udGV4dAogICAgICAgICAgICAgICAga28udXRpbHMuZXh0ZW5kKHNlbGYsIHBhcmVudENvbnRleHQpOwoKICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhlIGFib3ZlIGNvcHkgb3ZlcndyaXRlcyBvdXIgb3duIHByb3BlcnRpZXMsIHdlIG5lZWQgdG8gcmVzZXQgdGhlbS4KICAgICAgICAgICAgICAgIC8vIER1cmluZyB0aGUgZmlyc3QgZXhlY3V0aW9uLCAic3Vic2NyaWJhYmxlIiBpc24ndCBzZXQsIHNvIGRvbid0IGJvdGhlciBkb2luZyB0aGUgdXBkYXRlIHRoZW4uCiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJhYmxlKSB7CiAgICAgICAgICAgICAgICAgICAgc2VsZi5fc3Vic2NyaWJhYmxlID0gc3Vic2NyaWJhYmxlOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgc2VsZlsnJHBhcmVudHMnXSA9IFtdOwogICAgICAgICAgICAgICAgc2VsZlsnJHJvb3QnXSA9IGRhdGFJdGVtOwoKICAgICAgICAgICAgICAgIC8vIEV4cG9ydCAna28nIGluIHRoZSBiaW5kaW5nIGNvbnRleHQgc28gaXQgd2lsbCBiZSBhdmFpbGFibGUgaW4gYmluZGluZ3MgYW5kIHRlbXBsYXRlcwogICAgICAgICAgICAgICAgLy8gZXZlbiBpZiAna28nIGlzbid0IGV4cG9ydGVkIGFzIGEgZ2xvYmFsLCBzdWNoIGFzIHdoZW4gdXNpbmcgYW4gQU1EIGxvYWRlci4KICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzQ5MAogICAgICAgICAgICAgICAgc2VsZlsna28nXSA9IGtvOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHNlbGZbJyRyYXdEYXRhJ10gPSBkYXRhSXRlbU9yT2JzZXJ2YWJsZTsKICAgICAgICAgICAgc2VsZlsnJGRhdGEnXSA9IGRhdGFJdGVtOwogICAgICAgICAgICBpZiAoZGF0YUl0ZW1BbGlhcykKICAgICAgICAgICAgICAgIHNlbGZbZGF0YUl0ZW1BbGlhc10gPSBkYXRhSXRlbTsKCiAgICAgICAgICAgIC8vIFRoZSBleHRlbmRDYWxsYmFjayBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aGVuIGNyZWF0aW5nIGEgY2hpbGQgY29udGV4dCBvciBleHRlbmRpbmcgYSBjb250ZXh0LgogICAgICAgICAgICAvLyBJdCBoYW5kbGVzIHRoZSBzcGVjaWZpYyBhY3Rpb25zIG5lZWRlZCB0byBmaW5pc2ggc2V0dGluZyB1cCB0aGUgYmluZGluZyBjb250ZXh0LiBBY3Rpb25zIGluIHRoaXMKICAgICAgICAgICAgLy8gZnVuY3Rpb24gY291bGQgYWxzbyBhZGQgZGVwZW5kZW5jaWVzIHRvIHRoaXMgYmluZGluZyBjb250ZXh0LgogICAgICAgICAgICBpZiAoZXh0ZW5kQ2FsbGJhY2spCiAgICAgICAgICAgICAgICBleHRlbmRDYWxsYmFjayhzZWxmLCBwYXJlbnRDb250ZXh0LCBkYXRhSXRlbSk7CgogICAgICAgICAgICByZXR1cm4gc2VsZlsnJGRhdGEnXTsKICAgICAgICB9CiAgICAgICAgZnVuY3Rpb24gZGlzcG9zZVdoZW4oKSB7CiAgICAgICAgICAgIHJldHVybiBub2RlcyAmJiAha28udXRpbHMuYW55RG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50KG5vZGVzKTsKICAgICAgICB9CgogICAgICAgIHZhciBzZWxmID0gdGhpcywKICAgICAgICAgICAgaXNGdW5jID0gdHlwZW9mKGRhdGFJdGVtT3JBY2Nlc3NvcikgPT0gImZ1bmN0aW9uIiAmJiAha28uaXNPYnNlcnZhYmxlKGRhdGFJdGVtT3JBY2Nlc3NvciksCiAgICAgICAgICAgIG5vZGVzLAogICAgICAgICAgICBzdWJzY3JpYmFibGUgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlKHVwZGF0ZUNvbnRleHQsIG51bGwsIHsgZGlzcG9zZVdoZW46IGRpc3Bvc2VXaGVuLCBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IHRydWUgfSk7CgogICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSBiaW5kaW5nIGNvbnRleHQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQsIGFuZCB0aGUgInN1YnNjcmliYWJsZSIgY29tcHV0ZWQgb2JzZXJ2YWJsZSBpcwogICAgICAgIC8vIHN1YnNjcmliZWQgdG8gYW55IG9ic2VydmFibGVzIHRoYXQgd2VyZSBhY2Nlc3NlZCBpbiB0aGUgcHJvY2Vzcy4gSWYgdGhlcmUgaXMgbm90aGluZyB0byB0cmFjaywgdGhlCiAgICAgICAgLy8gY29tcHV0ZWQgd2lsbCBiZSBpbmFjdGl2ZSwgYW5kIHdlIGNhbiBzYWZlbHkgdGhyb3cgaXQgYXdheS4gSWYgaXQncyBhY3RpdmUsIHRoZSBjb21wdXRlZCBpcyBzdG9yZWQgaW4KICAgICAgICAvLyB0aGUgY29udGV4dCBvYmplY3QuCiAgICAgICAgaWYgKHN1YnNjcmliYWJsZS5pc0FjdGl2ZSgpKSB7CiAgICAgICAgICAgIHNlbGYuX3N1YnNjcmliYWJsZSA9IHN1YnNjcmliYWJsZTsKCiAgICAgICAgICAgIC8vIEFsd2F5cyBub3RpZnkgYmVjYXVzZSBldmVuIGlmIHRoZSBtb2RlbCAoJGRhdGEpIGhhc24ndCBjaGFuZ2VkLCBvdGhlciBjb250ZXh0IHByb3BlcnRpZXMgbWlnaHQgaGF2ZSBjaGFuZ2VkCiAgICAgICAgICAgIHN1YnNjcmliYWJsZVsnZXF1YWxpdHlDb21wYXJlciddID0gbnVsbDsKCiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBkaXNwb3NlIG9mIHRoaXMgY29tcHV0ZWQgb2JzZXJ2YWJsZSB3aGVuIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZC4gVGhpcyB3b3VsZCBiZQogICAgICAgICAgICAvLyBlYXN5IGlmIHdlIGhhZCBhIHNpbmdsZSBub2RlIHRvIHdhdGNoLCBidXQgYmluZGluZyBjb250ZXh0cyBjYW4gYmUgdXNlZCBieSBtYW55IGRpZmZlcmVudCBub2RlcywgYW5kCiAgICAgICAgICAgIC8vIHdlIGNhbm5vdCBhc3N1bWUgdGhhdCB0aG9zZSBub2RlcyBoYXZlIGFueSByZWxhdGlvbiB0byBlYWNoIG90aGVyLiBTbyBpbnN0ZWFkIHdlIHRyYWNrIGFueSBub2RlIHRoYXQKICAgICAgICAgICAgLy8gdGhlIGNvbnRleHQgaXMgYXR0YWNoZWQgdG8sIGFuZCBkaXNwb3NlIHRoZSBjb21wdXRlZCB3aGVuIGFsbCBvZiB0aG9zZSBub2RlcyBoYXZlIGJlZW4gY2xlYW5lZC4KCiAgICAgICAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvICpzdWJzY3JpYmFibGUqIGluc3RlYWQgb2YgKnNlbGYqIGJlY2F1c2UgYW55IHByb3BlcnRpZXMgYWRkZWQgdG8gKnNlbGYqIG1heSBiZSBvdmVyd3JpdHRlbiBvbiB1cGRhdGVzCiAgICAgICAgICAgIG5vZGVzID0gW107CiAgICAgICAgICAgIHN1YnNjcmliYWJsZS5fYWRkTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHsKICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7CiAgICAgICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKG5vZGUsIGZ1bmN0aW9uKG5vZGUpIHsKICAgICAgICAgICAgICAgICAgICBrby51dGlscy5hcnJheVJlbW92ZUl0ZW0obm9kZXMsIG5vZGUpOwogICAgICAgICAgICAgICAgICAgIGlmICghbm9kZXMubGVuZ3RoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliYWJsZS5kaXNwb3NlKCk7CiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3N1YnNjcmliYWJsZSA9IHN1YnNjcmliYWJsZSA9IHVuZGVmaW5lZDsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfTsKICAgICAgICB9CiAgICB9CgogICAgLy8gRXh0ZW5kIHRoZSBiaW5kaW5nIGNvbnRleHQgaGllcmFyY2h5IHdpdGggYSBuZXcgdmlldyBtb2RlbCBvYmplY3QuIElmIHRoZSBwYXJlbnQgY29udGV4dCBpcyB3YXRjaGluZwogICAgLy8gYW55IG9ic2V2YWJsZXMsIHRoZSBuZXcgY2hpbGQgY29udGV4dCB3aWxsIGF1dG9tYXRpY2FsbHkgZ2V0IGEgZGVwZW5kZW5jeSBvbiB0aGUgcGFyZW50IGNvbnRleHQuCiAgICAvLyBCdXQgdGhpcyBkb2VzIG5vdCBtZWFuIHRoYXQgdGhlICRkYXRhIHZhbHVlIG9mIHRoZSBjaGlsZCBjb250ZXh0IHdpbGwgYWxzbyBnZXQgdXBkYXRlZC4gSWYgdGhlIGNoaWxkCiAgICAvLyB2aWV3IG1vZGVsIGFsc28gZGVwZW5kcyBvbiB0aGUgcGFyZW50IHZpZXcgbW9kZWwsIHlvdSBtdXN0IHByb3ZpZGUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNvcnJlY3QKICAgIC8vIHZpZXcgbW9kZWwgb24gZWFjaCB1cGRhdGUuCiAgICBrby5iaW5kaW5nQ29udGV4dC5wcm90b3R5cGVbJ2NyZWF0ZUNoaWxkQ29udGV4dCddID0gZnVuY3Rpb24gKGRhdGFJdGVtT3JBY2Nlc3NvciwgZGF0YUl0ZW1BbGlhcywgZXh0ZW5kQ2FsbGJhY2spIHsKICAgICAgICByZXR1cm4gbmV3IGtvLmJpbmRpbmdDb250ZXh0KGRhdGFJdGVtT3JBY2Nlc3NvciwgdGhpcywgZGF0YUl0ZW1BbGlhcywgZnVuY3Rpb24oc2VsZiwgcGFyZW50Q29udGV4dCkgewogICAgICAgICAgICAvLyBFeHRlbmQgdGhlIGNvbnRleHQgaGllcmFyY2h5IGJ5IHNldHRpbmcgdGhlIGFwcHJvcHJpYXRlIHBvaW50ZXJzCiAgICAgICAgICAgIHNlbGZbJyRwYXJlbnRDb250ZXh0J10gPSBwYXJlbnRDb250ZXh0OwogICAgICAgICAgICBzZWxmWyckcGFyZW50J10gPSBwYXJlbnRDb250ZXh0WyckZGF0YSddOwogICAgICAgICAgICBzZWxmWyckcGFyZW50cyddID0gKHBhcmVudENvbnRleHRbJyRwYXJlbnRzJ10gfHwgW10pLnNsaWNlKDApOwogICAgICAgICAgICBzZWxmWyckcGFyZW50cyddLnVuc2hpZnQoc2VsZlsnJHBhcmVudCddKTsKICAgICAgICAgICAgaWYgKGV4dGVuZENhbGxiYWNrKQogICAgICAgICAgICAgICAgZXh0ZW5kQ2FsbGJhY2soc2VsZik7CiAgICAgICAgfSk7CiAgICB9OwoKICAgIC8vIEV4dGVuZCB0aGUgYmluZGluZyBjb250ZXh0IHdpdGggbmV3IGN1c3RvbSBwcm9wZXJ0aWVzLiBUaGlzIGRvZXNuJ3QgY2hhbmdlIHRoZSBjb250ZXh0IGhpZXJhcmNoeS4KICAgIC8vIFNpbWlsYXJseSB0byAiY2hpbGQiIGNvbnRleHRzLCBwcm92aWRlIGEgZnVuY3Rpb24gaGVyZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgY29ycmVjdCB2YWx1ZXMgYXJlIHNldAogICAgLy8gd2hlbiBhbiBvYnNlcnZhYmxlIHZpZXcgbW9kZWwgaXMgdXBkYXRlZC4KICAgIGtvLmJpbmRpbmdDb250ZXh0LnByb3RvdHlwZVsnZXh0ZW5kJ10gPSBmdW5jdGlvbihwcm9wZXJ0aWVzKSB7CiAgICAgICAgLy8gSWYgdGhlIHBhcmVudCBjb250ZXh0IHJlZmVyZW5jZXMgYW4gb2JzZXJ2YWJsZSB2aWV3IG1vZGVsLCAiX3N1YnNjcmliYWJsZSIgd2lsbCBhbHdheXMgYmUgdGhlCiAgICAgICAgLy8gbGF0ZXN0IHZpZXcgbW9kZWwgb2JqZWN0LiBJZiBub3QsICJfc3Vic2NyaWJhYmxlIiBpc24ndCBzZXQsIGFuZCB3ZSBjYW4gdXNlIHRoZSBzdGF0aWMgIiRkYXRhIiB2YWx1ZS4KICAgICAgICByZXR1cm4gbmV3IGtvLmJpbmRpbmdDb250ZXh0KHRoaXMuX3N1YnNjcmliYWJsZSB8fCB0aGlzWyckZGF0YSddLCB0aGlzLCBudWxsLCBmdW5jdGlvbihzZWxmLCBwYXJlbnRDb250ZXh0KSB7CiAgICAgICAgICAgIC8vIFRoaXMgImNoaWxkIiBjb250ZXh0IGRvZXNuJ3QgZGlyZWN0bHkgdHJhY2sgYSBwYXJlbnQgb2JzZXJ2YWJsZSB2aWV3IG1vZGVsLAogICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgJHJhd0RhdGEgdmFsdWUgdG8gbWF0Y2ggdGhlIHBhcmVudC4KICAgICAgICAgICAgc2VsZlsnJHJhd0RhdGEnXSA9IHBhcmVudENvbnRleHRbJyRyYXdEYXRhJ107CiAgICAgICAgICAgIGtvLnV0aWxzLmV4dGVuZChzZWxmLCB0eXBlb2YocHJvcGVydGllcykgPT0gImZ1bmN0aW9uIiA/IHByb3BlcnRpZXMoKSA6IHByb3BlcnRpZXMpOwogICAgICAgIH0pOwogICAgfTsKCiAgICAvLyBSZXR1cm5zIHRoZSB2YWx1ZUFjY2Vzb3IgZnVuY3Rpb24gZm9yIGEgYmluZGluZyB2YWx1ZQogICAgZnVuY3Rpb24gbWFrZVZhbHVlQWNjZXNzb3IodmFsdWUpIHsKICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHJldHVybiB2YWx1ZTsKICAgICAgICB9OwogICAgfQoKICAgIC8vIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgdmFsdWVBY2Nlc3NvciBmdW5jdGlvbgogICAgZnVuY3Rpb24gZXZhbHVhdGVWYWx1ZUFjY2Vzc29yKHZhbHVlQWNjZXNzb3IpIHsKICAgICAgICByZXR1cm4gdmFsdWVBY2Nlc3NvcigpOwogICAgfQoKICAgIC8vIEdpdmVuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGJpbmRpbmdzLCBjcmVhdGUgYW5kIHJldHVybiBhIG5ldyBvYmplY3QgdGhhdCBjb250YWlucwogICAgLy8gYmluZGluZyB2YWx1ZS1hY2Nlc3NvcnMgZnVuY3Rpb25zLiBFYWNoIGFjY2Vzc29yIGZ1bmN0aW9uIGNhbGxzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbgogICAgLy8gc28gdGhhdCBpdCBhbHdheXMgZ2V0cyB0aGUgbGF0ZXN0IHZhbHVlIGFuZCBhbGwgZGVwZW5kZW5jaWVzIGFyZSBjYXB0dXJlZC4gVGhpcyBpcyB1c2VkCiAgICAvLyBieSBrby5hcHBseUJpbmRpbmdzVG9Ob2RlIGFuZCBnZXRCaW5kaW5nc0FuZE1ha2VBY2Nlc3NvcnMuCiAgICBmdW5jdGlvbiBtYWtlQWNjZXNzb3JzRnJvbUZ1bmN0aW9uKGNhbGxiYWNrKSB7CiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLm9iamVjdE1hcChrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShjYWxsYmFjayksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHsKICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKClba2V5XTsKICAgICAgICAgICAgfTsKICAgICAgICB9KTsKICAgIH0KCiAgICAvLyBHaXZlbiBhIGJpbmRpbmdzIGZ1bmN0aW9uIG9yIG9iamVjdCwgY3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgb2JqZWN0IHRoYXQgY29udGFpbnMKICAgIC8vIGJpbmRpbmcgdmFsdWUtYWNjZXNzb3JzIGZ1bmN0aW9ucy4gVGhpcyBpcyB1c2VkIGJ5IGtvLmFwcGx5QmluZGluZ3NUb05vZGUuCiAgICBmdW5jdGlvbiBtYWtlQmluZGluZ0FjY2Vzc29ycyhiaW5kaW5ncywgY29udGV4dCwgbm9kZSkgewogICAgICAgIGlmICh0eXBlb2YgYmluZGluZ3MgPT09ICdmdW5jdGlvbicpIHsKICAgICAgICAgICAgcmV0dXJuIG1ha2VBY2Nlc3NvcnNGcm9tRnVuY3Rpb24oYmluZGluZ3MuYmluZChudWxsLCBjb250ZXh0LCBub2RlKSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLm9iamVjdE1hcChiaW5kaW5ncywgbWFrZVZhbHVlQWNjZXNzb3IpOwogICAgICAgIH0KICAgIH0KCiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgaWYgdGhlIGJpbmRpbmcgcHJvdmlkZXIgZG9lc24ndCBpbmNsdWRlIGEgZ2V0QmluZGluZ0FjY2Vzc29ycyBmdW5jdGlvbi4KICAgIC8vIEl0IG11c3QgYmUgY2FsbGVkIHdpdGggJ3RoaXMnIHNldCB0byB0aGUgcHJvdmlkZXIgaW5zdGFuY2UuCiAgICBmdW5jdGlvbiBnZXRCaW5kaW5nc0FuZE1ha2VBY2Nlc3NvcnMobm9kZSwgY29udGV4dCkgewogICAgICAgIHJldHVybiBtYWtlQWNjZXNzb3JzRnJvbUZ1bmN0aW9uKHRoaXNbJ2dldEJpbmRpbmdzJ10uYmluZCh0aGlzLCBub2RlLCBjb250ZXh0KSk7CiAgICB9CgogICAgZnVuY3Rpb24gdmFsaWRhdGVUaGF0QmluZGluZ0lzQWxsb3dlZEZvclZpcnR1YWxFbGVtZW50cyhiaW5kaW5nTmFtZSkgewogICAgICAgIHZhciB2YWxpZGF0b3IgPSBrby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzW2JpbmRpbmdOYW1lXTsKICAgICAgICBpZiAoIXZhbGlkYXRvcikKICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJUaGUgYmluZGluZyAnIiArIGJpbmRpbmdOYW1lICsgIicgY2Fubm90IGJlIHVzZWQgd2l0aCB2aXJ0dWFsIGVsZW1lbnRzIikKICAgIH0KCiAgICBmdW5jdGlvbiBhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c0ludGVybmFsIChiaW5kaW5nQ29udGV4dCwgZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50KSB7CiAgICAgICAgdmFyIGN1cnJlbnRDaGlsZCwKICAgICAgICAgICAgbmV4dEluUXVldWUgPSBrby52aXJ0dWFsRWxlbWVudHMuZmlyc3RDaGlsZChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCksCiAgICAgICAgICAgIHByb3ZpZGVyID0ga28uYmluZGluZ1Byb3ZpZGVyWydpbnN0YW5jZSddLAogICAgICAgICAgICBwcmVwcm9jZXNzTm9kZSA9IHByb3ZpZGVyWydwcmVwcm9jZXNzTm9kZSddOwoKICAgICAgICAvLyBQcmVwcm9jZXNzaW5nIGFsbG93cyBhIGJpbmRpbmcgcHJvdmlkZXIgdG8gbXV0YXRlIGEgbm9kZSBiZWZvcmUgYmluZGluZ3MgYXJlIGFwcGxpZWQgdG8gaXQuIEZvciBleGFtcGxlIGl0J3MKICAgICAgICAvLyBwb3NzaWJsZSB0byBpbnNlcnQgbmV3IHNpYmxpbmdzIGFmdGVyIGl0LCBhbmQvb3IgcmVwbGFjZSB0aGUgbm9kZSB3aXRoIGEgZGlmZmVyZW50IG9uZS4gVGhpcyBjYW4gYmUgdXNlZCB0bwogICAgICAgIC8vIGltcGxlbWVudCBjdXN0b20gYmluZGluZyBzeW50YXhlcywgc3VjaCBhcyB7eyB2YWx1ZSB9fSBmb3Igc3RyaW5nIGludGVycG9sYXRpb24sIG9yIGN1c3RvbSBlbGVtZW50IHR5cGVzIHRoYXQKICAgICAgICAvLyB0cmlnZ2VyIGluc2VydGlvbiBvZiA8dGVtcGxhdGU+IGNvbnRlbnRzIGF0IHRoYXQgcG9pbnQgaW4gdGhlIGRvY3VtZW50LgogICAgICAgIGlmIChwcmVwcm9jZXNzTm9kZSkgewogICAgICAgICAgICB3aGlsZSAoY3VycmVudENoaWxkID0gbmV4dEluUXVldWUpIHsKICAgICAgICAgICAgICAgIG5leHRJblF1ZXVlID0ga28udmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nKGN1cnJlbnRDaGlsZCk7CiAgICAgICAgICAgICAgICBwcmVwcm9jZXNzTm9kZS5jYWxsKHByb3ZpZGVyLCBjdXJyZW50Q2hpbGQpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIC8vIFJlc2V0IG5leHRJblF1ZXVlIGZvciB0aGUgbmV4dCBsb29wCiAgICAgICAgICAgIG5leHRJblF1ZXVlID0ga28udmlydHVhbEVsZW1lbnRzLmZpcnN0Q2hpbGQoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpOwogICAgICAgIH0KCiAgICAgICAgd2hpbGUgKGN1cnJlbnRDaGlsZCA9IG5leHRJblF1ZXVlKSB7CiAgICAgICAgICAgIC8vIEtlZXAgYSByZWNvcmQgb2YgdGhlIG5leHQgY2hpbGQgKmJlZm9yZSogYXBwbHlpbmcgYmluZGluZ3MsIGluIGNhc2UgdGhlIGJpbmRpbmcgcmVtb3ZlcyB0aGUgY3VycmVudCBjaGlsZCBmcm9tIGl0cyBwb3NpdGlvbgogICAgICAgICAgICBuZXh0SW5RdWV1ZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5uZXh0U2libGluZyhjdXJyZW50Q2hpbGQpOwogICAgICAgICAgICBhcHBseUJpbmRpbmdzVG9Ob2RlQW5kRGVzY2VuZGFudHNJbnRlcm5hbChiaW5kaW5nQ29udGV4dCwgY3VycmVudENoaWxkLCBiaW5kaW5nQ29udGV4dHNNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGFwcGx5QmluZGluZ3NUb05vZGVBbmREZXNjZW5kYW50c0ludGVybmFsIChiaW5kaW5nQ29udGV4dCwgbm9kZVZlcmlmaWVkLCBiaW5kaW5nQ29udGV4dE1heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50KSB7CiAgICAgICAgdmFyIHNob3VsZEJpbmREZXNjZW5kYW50cyA9IHRydWU7CgogICAgICAgIC8vIFBlcmYgb3B0aW1pc2F0aW9uOiBBcHBseSBiaW5kaW5ncyBvbmx5IGlmLi4uCiAgICAgICAgLy8gKDEpIFdlIG5lZWQgdG8gc3RvcmUgdGhlIGJpbmRpbmcgY29udGV4dCBvbiB0aGlzIG5vZGUgKGJlY2F1c2UgaXQgbWF5IGRpZmZlciBmcm9tIHRoZSBET00gcGFyZW50IG5vZGUncyBiaW5kaW5nIGNvbnRleHQpCiAgICAgICAgLy8gICAgIE5vdGUgdGhhdCB3ZSBjYW4ndCBzdG9yZSBiaW5kaW5nIGNvbnRleHRzIG9uIG5vbi1lbGVtZW50cyAoZS5nLiwgdGV4dCBub2RlcyksIGFzIElFIGRvZXNuJ3QgYWxsb3cgZXhwYW5kbyBwcm9wZXJ0aWVzIGZvciB0aG9zZQogICAgICAgIC8vICgyKSBJdCBtaWdodCBoYXZlIGJpbmRpbmdzIChlLmcuLCBpdCBoYXMgYSBkYXRhLWJpbmQgYXR0cmlidXRlLCBvciBpdCdzIGEgbWFya2VyIGZvciBhIGNvbnRhaW5lcmxlc3MgdGVtcGxhdGUpCiAgICAgICAgdmFyIGlzRWxlbWVudCA9IChub2RlVmVyaWZpZWQubm9kZVR5cGUgPT09IDEpOwogICAgICAgIGlmIChpc0VsZW1lbnQpIC8vIFdvcmthcm91bmQgSUUgPD0gOCBIVE1MIHBhcnNpbmcgd2VpcmRuZXNzCiAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5ub3JtYWxpc2VWaXJ0dWFsRWxlbWVudERvbVN0cnVjdHVyZShub2RlVmVyaWZpZWQpOwoKICAgICAgICB2YXIgc2hvdWxkQXBwbHlCaW5kaW5ncyA9IChpc0VsZW1lbnQgJiYgYmluZGluZ0NvbnRleHRNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCkgICAgICAgICAgICAgLy8gQ2FzZSAoMSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGtvLmJpbmRpbmdQcm92aWRlclsnaW5zdGFuY2UnXVsnbm9kZUhhc0JpbmRpbmdzJ10obm9kZVZlcmlmaWVkKTsgICAgICAgLy8gQ2FzZSAoMikKICAgICAgICBpZiAoc2hvdWxkQXBwbHlCaW5kaW5ncykKICAgICAgICAgICAgc2hvdWxkQmluZERlc2NlbmRhbnRzID0gYXBwbHlCaW5kaW5nc1RvTm9kZUludGVybmFsKG5vZGVWZXJpZmllZCwgbnVsbCwgYmluZGluZ0NvbnRleHQsIGJpbmRpbmdDb250ZXh0TWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpWydzaG91bGRCaW5kRGVzY2VuZGFudHMnXTsKCiAgICAgICAgaWYgKHNob3VsZEJpbmREZXNjZW5kYW50cyAmJiAhYmluZGluZ0RvZXNOb3RSZWN1cnNlSW50b0VsZW1lbnRUeXBlc1trby51dGlscy50YWdOYW1lTG93ZXIobm9kZVZlcmlmaWVkKV0pIHsKICAgICAgICAgICAgLy8gV2UncmUgcmVjdXJzaW5nIGF1dG9tYXRpY2FsbHkgaW50byAocmVhbCBvciB2aXJ0dWFsKSBjaGlsZCBub2RlcyB3aXRob3V0IGNoYW5naW5nIGJpbmRpbmcgY29udGV4dHMuIFNvLAogICAgICAgICAgICAvLyAgKiBGb3IgY2hpbGRyZW4gb2YgYSAqcmVhbCogZWxlbWVudCwgdGhlIGJpbmRpbmcgY29udGV4dCBpcyBjZXJ0YWlubHkgdGhlIHNhbWUgYXMgb24gdGhlaXIgRE9NIC5wYXJlbnROb2RlLAogICAgICAgICAgICAvLyAgICBoZW5jZSBiaW5kaW5nQ29udGV4dHNNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCBpcyBmYWxzZQogICAgICAgICAgICAvLyAgKiBGb3IgY2hpbGRyZW4gb2YgYSAqdmlydHVhbCogZWxlbWVudCwgd2UgY2FuJ3QgYmUgc3VyZS4gRXZhbHVhdGluZyAucGFyZW50Tm9kZSBvbiB0aG9zZSBjaGlsZHJlbiBtYXkKICAgICAgICAgICAgLy8gICAgc2tpcCBvdmVyIGFueSBudW1iZXIgb2YgaW50ZXJtZWRpYXRlIHZpcnR1YWwgZWxlbWVudHMsIGFueSBvZiB3aGljaCBtaWdodCBkZWZpbmUgYSBjdXN0b20gYmluZGluZyBjb250ZXh0LAogICAgICAgICAgICAvLyAgICBoZW5jZSBiaW5kaW5nQ29udGV4dHNNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCBpcyB0cnVlCiAgICAgICAgICAgIGFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzSW50ZXJuYWwoYmluZGluZ0NvbnRleHQsIG5vZGVWZXJpZmllZCwgLyogYmluZGluZ0NvbnRleHRzTWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQ6ICovICFpc0VsZW1lbnQpOwogICAgICAgIH0KICAgIH0KCiAgICB2YXIgYm91bmRFbGVtZW50RG9tRGF0YUtleSA9IGtvLnV0aWxzLmRvbURhdGEubmV4dEtleSgpOwoKCiAgICBmdW5jdGlvbiB0b3BvbG9naWNhbFNvcnRCaW5kaW5ncyhiaW5kaW5ncykgewogICAgICAgIC8vIERlcHRoLWZpcnN0IHNvcnQKICAgICAgICB2YXIgcmVzdWx0ID0gW10sICAgICAgICAgICAgICAgIC8vIFRoZSBsaXN0IG9mIGtleS9oYW5kbGVyIHBhaXJzIHRoYXQgd2Ugd2lsbCByZXR1cm4KICAgICAgICAgICAgYmluZGluZ3NDb25zaWRlcmVkID0ge30sICAgIC8vIEEgdGVtcG9yYXJ5IHJlY29yZCBvZiB3aGljaCBiaW5kaW5ncyBhcmUgYWxyZWFkeSBpbiAncmVzdWx0JwogICAgICAgICAgICBjeWNsaWNEZXBlbmRlbmN5U3RhY2sgPSBbXTsgLy8gS2VlcHMgdHJhY2sgb2YgYSBkZXB0aC1zZWFyY2ggc28gdGhhdCwgaWYgdGhlcmUncyBhIGN5Y2xlLCB3ZSBrbm93IHdoaWNoIGJpbmRpbmdzIGNhdXNlZCBpdAogICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2goYmluZGluZ3MsIGZ1bmN0aW9uIHB1c2hCaW5kaW5nKGJpbmRpbmdLZXkpIHsKICAgICAgICAgICAgaWYgKCFiaW5kaW5nc0NvbnNpZGVyZWRbYmluZGluZ0tleV0pIHsKICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nID0ga29bJ2dldEJpbmRpbmdIYW5kbGVyJ10oYmluZGluZ0tleSk7CiAgICAgICAgICAgICAgICBpZiAoYmluZGluZykgewogICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0IGFkZCBkZXBlbmRlbmNpZXMgKGlmIGFueSkgb2YgdGhlIGN1cnJlbnQgYmluZGluZwogICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nWydhZnRlciddKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lTdGFjay5wdXNoKGJpbmRpbmdLZXkpOwogICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goYmluZGluZ1snYWZ0ZXInXSwgZnVuY3Rpb24oYmluZGluZ0RlcGVuZGVuY3lLZXkpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nc1tiaW5kaW5nRGVwZW5kZW5jeUtleV0pIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKGN5Y2xpY0RlcGVuZGVuY3lTdGFjaywgYmluZGluZ0RlcGVuZGVuY3lLZXkpICE9PSAtMSkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigiQ2Fubm90IGNvbWJpbmUgdGhlIGZvbGxvd2luZyBiaW5kaW5ncywgYmVjYXVzZSB0aGV5IGhhdmUgYSBjeWNsaWMgZGVwZW5kZW5jeTogIiArIGN5Y2xpY0RlcGVuZGVuY3lTdGFjay5qb2luKCIsICIpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXNoQmluZGluZyhiaW5kaW5nRGVwZW5kZW5jeUtleSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgICAgICAgY3ljbGljRGVwZW5kZW5jeVN0YWNrLmxlbmd0aC0tOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAvLyBOZXh0IGFkZCB0aGUgY3VycmVudCBiaW5kaW5nCiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXk6IGJpbmRpbmdLZXksIGhhbmRsZXI6IGJpbmRpbmcgfSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBiaW5kaW5nc0NvbnNpZGVyZWRbYmluZGluZ0tleV0gPSB0cnVlOwogICAgICAgICAgICB9CiAgICAgICAgfSk7CgogICAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CgogICAgZnVuY3Rpb24gYXBwbHlCaW5kaW5nc1RvTm9kZUludGVybmFsKG5vZGUsIHNvdXJjZUJpbmRpbmdzLCBiaW5kaW5nQ29udGV4dCwgYmluZGluZ0NvbnRleHRNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCkgewogICAgICAgIC8vIFByZXZlbnQgbXVsdGlwbGUgYXBwbHlCaW5kaW5ncyBjYWxscyBmb3IgdGhlIHNhbWUgbm9kZSwgZXhjZXB0IHdoZW4gYSBiaW5kaW5nIHZhbHVlIGlzIHNwZWNpZmllZAogICAgICAgIHZhciBhbHJlYWR5Qm91bmQgPSBrby51dGlscy5kb21EYXRhLmdldChub2RlLCBib3VuZEVsZW1lbnREb21EYXRhS2V5KTsKICAgICAgICBpZiAoIXNvdXJjZUJpbmRpbmdzKSB7CiAgICAgICAgICAgIGlmIChhbHJlYWR5Qm91bmQpIHsKICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCJZb3UgY2Fubm90IGFwcGx5IGJpbmRpbmdzIG11bHRpcGxlIHRpbWVzIHRvIHRoZSBzYW1lIGVsZW1lbnQuIik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQobm9kZSwgYm91bmRFbGVtZW50RG9tRGF0YUtleSwgdHJ1ZSk7CiAgICAgICAgfQoKICAgICAgICAvLyBPcHRpbWl6YXRpb246IERvbid0IHN0b3JlIHRoZSBiaW5kaW5nIGNvbnRleHQgb24gdGhpcyBub2RlIGlmIGl0J3MgZGVmaW5pdGVseSB0aGUgc2FtZSBhcyBvbiBub2RlLnBhcmVudE5vZGUsIGJlY2F1c2UKICAgICAgICAvLyB3ZSBjYW4gZWFzaWx5IHJlY292ZXIgaXQganVzdCBieSBzY2FubmluZyB1cCB0aGUgbm9kZSdzIGFuY2VzdG9ycyBpbiB0aGUgRE9NCiAgICAgICAgLy8gKG5vdGU6IGhlcmUsIHBhcmVudCBub2RlIG1lYW5zICJyZWFsIERPTSBwYXJlbnQiIG5vdCAidmlydHVhbCBwYXJlbnQiLCBhcyB0aGVyZSdzIG5vIE8oMSkgd2F5IHRvIGZpbmQgdGhlIHZpcnR1YWwgcGFyZW50KQogICAgICAgIGlmICghYWxyZWFkeUJvdW5kICYmIGJpbmRpbmdDb250ZXh0TWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpCiAgICAgICAgICAgIGtvLnN0b3JlZEJpbmRpbmdDb250ZXh0Rm9yTm9kZShub2RlLCBiaW5kaW5nQ29udGV4dCk7CgogICAgICAgIC8vIFVzZSBiaW5kaW5ncyBpZiBnaXZlbiwgb3RoZXJ3aXNlIGZhbGwgYmFjayBvbiBhc2tpbmcgdGhlIGJpbmRpbmdzIHByb3ZpZGVyIHRvIGdpdmUgdXMgc29tZSBiaW5kaW5ncwogICAgICAgIHZhciBiaW5kaW5nczsKICAgICAgICBpZiAoc291cmNlQmluZGluZ3MgJiYgdHlwZW9mIHNvdXJjZUJpbmRpbmdzICE9PSAnZnVuY3Rpb24nKSB7CiAgICAgICAgICAgIGJpbmRpbmdzID0gc291cmNlQmluZGluZ3M7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0ga28uYmluZGluZ1Byb3ZpZGVyWydpbnN0YW5jZSddLAogICAgICAgICAgICAgICAgZ2V0QmluZGluZ3MgPSBwcm92aWRlclsnZ2V0QmluZGluZ0FjY2Vzc29ycyddIHx8IGdldEJpbmRpbmdzQW5kTWFrZUFjY2Vzc29yczsKCiAgICAgICAgICAgIC8vIEdldCB0aGUgYmluZGluZyBmcm9tIHRoZSBwcm92aWRlciB3aXRoaW4gYSBjb21wdXRlZCBvYnNlcnZhYmxlIHNvIHRoYXQgd2UgY2FuIHVwZGF0ZSB0aGUgYmluZGluZ3Mgd2hlbmV2ZXIKICAgICAgICAgICAgLy8gdGhlIGJpbmRpbmcgY29udGV4dCBpcyB1cGRhdGVkIG9yIGlmIHRoZSBiaW5kaW5nIHByb3ZpZGVyIGFjY2Vzc2VzIG9ic2VydmFibGVzLgogICAgICAgICAgICB2YXIgYmluZGluZ3NVcGRhdGVyID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSgKICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgICAgIGJpbmRpbmdzID0gc291cmNlQmluZGluZ3MgPyBzb3VyY2VCaW5kaW5ncyhiaW5kaW5nQ29udGV4dCwgbm9kZSkgOiBnZXRCaW5kaW5ncy5jYWxsKHByb3ZpZGVyLCBub2RlLCBiaW5kaW5nQ29udGV4dCk7CiAgICAgICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgYSBkZXBlbmRlbmN5IG9uIHRoZSBiaW5kaW5nIGNvbnRleHQgdG8gc3VwcG9ydCBvYnNldmFibGUgdmlldyBtb2RlbHMuCiAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRpbmdzICYmIGJpbmRpbmdDb250ZXh0Ll9zdWJzY3JpYmFibGUpCiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmdDb250ZXh0Ll9zdWJzY3JpYmFibGUoKTsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZ3M7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IG5vZGUgfQogICAgICAgICAgICApOwoKICAgICAgICAgICAgaWYgKCFiaW5kaW5ncyB8fCAhYmluZGluZ3NVcGRhdGVyLmlzQWN0aXZlKCkpCiAgICAgICAgICAgICAgICBiaW5kaW5nc1VwZGF0ZXIgPSBudWxsOwogICAgICAgIH0KCiAgICAgICAgdmFyIGJpbmRpbmdIYW5kbGVyVGhhdENvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOwogICAgICAgIGlmIChiaW5kaW5ncykgewogICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIGFjY2Vzc29yIGZvciBhIGdpdmVuIGJpbmRpbmcuIFdoZW4gYmluZGluZ3MgYXJlIHN0YXRpYyAod29uJ3QgYmUgdXBkYXRlZCBiZWNhdXNlIG9mIGEgYmluZGluZwogICAgICAgICAgICAvLyBjb250ZXh0IHVwZGF0ZSksIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZSBhY2Nlc3NvciBmcm9tIHRoZSBiaW5kaW5nLiBPdGhlcndpc2UsIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIGdldHMKICAgICAgICAgICAgLy8gdGhlIGxhdGVzdCBiaW5kaW5nIHZhbHVlIGFuZCByZWdpc3RlcnMgYSBkZXBlbmRlbmN5IG9uIHRoZSBiaW5kaW5nIHVwZGF0ZXIuCiAgICAgICAgICAgIHZhciBnZXRWYWx1ZUFjY2Vzc29yID0gYmluZGluZ3NVcGRhdGVyCiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uKGJpbmRpbmdLZXkpIHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmFsdWF0ZVZhbHVlQWNjZXNzb3IoYmluZGluZ3NVcGRhdGVyKClbYmluZGluZ0tleV0pOwogICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oYmluZGluZ0tleSkgewogICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5nc1tiaW5kaW5nS2V5XTsKICAgICAgICAgICAgICAgIH07CgogICAgICAgICAgICAvLyBVc2Ugb2YgYWxsQmluZGluZ3MgYXMgYSBmdW5jdGlvbiBpcyBtYWludGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgYnV0IGl0cyB1c2UgaXMgZGVwcmVjYXRlZAogICAgICAgICAgICBmdW5jdGlvbiBhbGxCaW5kaW5ncygpIHsKICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy5vYmplY3RNYXAoYmluZGluZ3NVcGRhdGVyID8gYmluZGluZ3NVcGRhdGVyKCkgOiBiaW5kaW5ncywgZXZhbHVhdGVWYWx1ZUFjY2Vzc29yKTsKICAgICAgICAgICAgfQogICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGlzIHRoZSAzLnggYWxsQmluZGluZ3MgQVBJCiAgICAgICAgICAgIGFsbEJpbmRpbmdzWydnZXQnXSA9IGZ1bmN0aW9uKGtleSkgewogICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdzW2tleV0gJiYgZXZhbHVhdGVWYWx1ZUFjY2Vzc29yKGdldFZhbHVlQWNjZXNzb3Ioa2V5KSk7CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIGFsbEJpbmRpbmdzWydoYXMnXSA9IGZ1bmN0aW9uKGtleSkgewogICAgICAgICAgICAgICAgcmV0dXJuIGtleSBpbiBiaW5kaW5nczsKICAgICAgICAgICAgfTsKCiAgICAgICAgICAgIC8vIEZpcnN0IHB1dCB0aGUgYmluZGluZ3MgaW50byB0aGUgcmlnaHQgb3JkZXIKICAgICAgICAgICAgdmFyIG9yZGVyZWRCaW5kaW5ncyA9IHRvcG9sb2dpY2FsU29ydEJpbmRpbmdzKGJpbmRpbmdzKTsKCiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIHNvcnRlZCBiaW5kaW5ncywgY2FsbGluZyBpbml0IGFuZCB1cGRhdGUgZm9yIGVhY2gKICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKG9yZGVyZWRCaW5kaW5ncywgZnVuY3Rpb24oYmluZGluZ0tleUFuZEhhbmRsZXIpIHsKICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0b3BvbG9naWNhbFNvcnRCaW5kaW5ncyBoYXMgYWxyZWFkeSBmaWx0ZXJlZCBvdXQgYW55IG5vbmV4aXN0ZW50IGJpbmRpbmcgaGFuZGxlcnMsCiAgICAgICAgICAgICAgICAvLyBzbyBiaW5kaW5nS2V5QW5kSGFuZGxlci5oYW5kbGVyIHdpbGwgYWx3YXlzIGJlIG5vbm51bGwuCiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckluaXRGbiA9IGJpbmRpbmdLZXlBbmRIYW5kbGVyLmhhbmRsZXJbImluaXQiXSwKICAgICAgICAgICAgICAgICAgICBoYW5kbGVyVXBkYXRlRm4gPSBiaW5kaW5nS2V5QW5kSGFuZGxlci5oYW5kbGVyWyJ1cGRhdGUiXSwKICAgICAgICAgICAgICAgICAgICBiaW5kaW5nS2V5ID0gYmluZGluZ0tleUFuZEhhbmRsZXIua2V5OwoKICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4KSB7CiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVUaGF0QmluZGluZ0lzQWxsb3dlZEZvclZpcnR1YWxFbGVtZW50cyhiaW5kaW5nS2V5KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgIC8vIFJ1biBpbml0LCBpZ25vcmluZyBhbnkgZGVwZW5kZW5jaWVzCiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVySW5pdEZuID09ICJmdW5jdGlvbiIpIHsKICAgICAgICAgICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5pdFJlc3VsdCA9IGhhbmRsZXJJbml0Rm4obm9kZSwgZ2V0VmFsdWVBY2Nlc3NvcihiaW5kaW5nS2V5KSwgYWxsQmluZGluZ3MsIGJpbmRpbmdDb250ZXh0WyckZGF0YSddLCBiaW5kaW5nQ29udGV4dCk7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBiaW5kaW5nIGhhbmRsZXIgY2xhaW1zIHRvIGNvbnRyb2wgZGVzY2VuZGFudCBiaW5kaW5ncywgbWFrZSBhIG5vdGUgb2YgdGhpcwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRSZXN1bHQgJiYgaW5pdFJlc3VsdFsnY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MnXSkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nSGFuZGxlclRoYXRDb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyAhPT0gdW5kZWZpbmVkKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIk11bHRpcGxlIGJpbmRpbmdzICgiICsgYmluZGluZ0hhbmRsZXJUaGF0Q29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MgKyAiIGFuZCAiICsgYmluZGluZ0tleSArICIpIGFyZSB0cnlpbmcgdG8gY29udHJvbCBkZXNjZW5kYW50IGJpbmRpbmdzIG9mIHRoZSBzYW1lIGVsZW1lbnQuIFlvdSBjYW5ub3QgdXNlIHRoZXNlIGJpbmRpbmdzIHRvZ2V0aGVyIG9uIHRoZSBzYW1lIGVsZW1lbnQuIik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZ0hhbmRsZXJUaGF0Q29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MgPSBiaW5kaW5nS2V5OwogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgICAgIC8vIFJ1biB1cGRhdGUgaW4gaXRzIG93biBjb21wdXRlZCB3cmFwcGVyCiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyVXBkYXRlRm4gPT0gImZ1bmN0aW9uIikgewogICAgICAgICAgICAgICAgICAgICAgICBrby5kZXBlbmRlbnRPYnNlcnZhYmxlKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlclVwZGF0ZUZuKG5vZGUsIGdldFZhbHVlQWNjZXNzb3IoYmluZGluZ0tleSksIGFsbEJpbmRpbmdzLCBiaW5kaW5nQ29udGV4dFsnJGRhdGEnXSwgYmluZGluZ0NvbnRleHQpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogbm9kZSB9CiAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsKICAgICAgICAgICAgICAgICAgICBleC5tZXNzYWdlID0gIlVuYWJsZSB0byBwcm9jZXNzIGJpbmRpbmcgXCIiICsgYmluZGluZ0tleSArICI6ICIgKyBiaW5kaW5nc1tiaW5kaW5nS2V5XSArICJcIlxuTWVzc2FnZTogIiArIGV4Lm1lc3NhZ2U7CiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHsKICAgICAgICAgICAgJ3Nob3VsZEJpbmREZXNjZW5kYW50cyc6IGJpbmRpbmdIYW5kbGVyVGhhdENvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzID09PSB1bmRlZmluZWQKICAgICAgICB9OwogICAgfTsKCiAgICB2YXIgc3RvcmVkQmluZGluZ0NvbnRleHREb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7CiAgICBrby5zdG9yZWRCaW5kaW5nQ29udGV4dEZvck5vZGUgPSBmdW5jdGlvbiAobm9kZSwgYmluZGluZ0NvbnRleHQpIHsKICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7CiAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KG5vZGUsIHN0b3JlZEJpbmRpbmdDb250ZXh0RG9tRGF0YUtleSwgYmluZGluZ0NvbnRleHQpOwogICAgICAgICAgICBpZiAoYmluZGluZ0NvbnRleHQuX3N1YnNjcmliYWJsZSkKICAgICAgICAgICAgICAgIGJpbmRpbmdDb250ZXh0Ll9zdWJzY3JpYmFibGUuX2FkZE5vZGUobm9kZSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmRvbURhdGEuZ2V0KG5vZGUsIHN0b3JlZEJpbmRpbmdDb250ZXh0RG9tRGF0YUtleSk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGdldEJpbmRpbmdDb250ZXh0KHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQpIHsKICAgICAgICByZXR1cm4gdmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCAmJiAodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCBpbnN0YW5jZW9mIGtvLmJpbmRpbmdDb250ZXh0KQogICAgICAgICAgICA/IHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQKICAgICAgICAgICAgOiBuZXcga28uYmluZGluZ0NvbnRleHQodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCk7CiAgICB9CgogICAga28uYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlID0gZnVuY3Rpb24gKG5vZGUsIGJpbmRpbmdzLCB2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0KSB7CiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIC8vIElmIGl0J3MgYW4gZWxlbWVudCwgd29ya2Fyb3VuZCBJRSA8PSA4IEhUTUwgcGFyc2luZyB3ZWlyZG5lc3MKICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLm5vcm1hbGlzZVZpcnR1YWxFbGVtZW50RG9tU3RydWN0dXJlKG5vZGUpOwogICAgICAgIHJldHVybiBhcHBseUJpbmRpbmdzVG9Ob2RlSW50ZXJuYWwobm9kZSwgYmluZGluZ3MsIGdldEJpbmRpbmdDb250ZXh0KHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQpLCB0cnVlKTsKICAgIH07CgogICAga28uYXBwbHlCaW5kaW5nc1RvTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBiaW5kaW5ncywgdmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCkgewogICAgICAgIHZhciBjb250ZXh0ID0gZ2V0QmluZGluZ0NvbnRleHQodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCk7CiAgICAgICAgcmV0dXJuIGtvLmFwcGx5QmluZGluZ0FjY2Vzc29yc1RvTm9kZShub2RlLCBtYWtlQmluZGluZ0FjY2Vzc29ycyhiaW5kaW5ncywgY29udGV4dCwgbm9kZSksIGNvbnRleHQpOwogICAgfTsKCiAgICBrby5hcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50cyA9IGZ1bmN0aW9uKHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQsIHJvb3ROb2RlKSB7CiAgICAgICAgaWYgKHJvb3ROb2RlLm5vZGVUeXBlID09PSAxIHx8IHJvb3ROb2RlLm5vZGVUeXBlID09PSA4KQogICAgICAgICAgICBhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c0ludGVybmFsKGdldEJpbmRpbmdDb250ZXh0KHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQpLCByb290Tm9kZSwgdHJ1ZSk7CiAgICB9OwoKICAgIGtvLmFwcGx5QmluZGluZ3MgPSBmdW5jdGlvbiAodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCwgcm9vdE5vZGUpIHsKICAgICAgICAvLyBJZiBqUXVlcnkgaXMgbG9hZGVkIGFmdGVyIEtub2Nrb3V0LCB3ZSB3b24ndCBpbml0aWFsbHkgaGF2ZSBhY2Nlc3MgdG8gaXQuIFNvIHNhdmUgaXQgaGVyZS4KICAgICAgICBpZiAoIWpRdWVyeUluc3RhbmNlICYmIHdpbmRvd1snalF1ZXJ5J10pIHsKICAgICAgICAgICAgalF1ZXJ5SW5zdGFuY2UgPSB3aW5kb3dbJ2pRdWVyeSddOwogICAgICAgIH0KCiAgICAgICAgaWYgKHJvb3ROb2RlICYmIChyb290Tm9kZS5ub2RlVHlwZSAhPT0gMSkgJiYgKHJvb3ROb2RlLm5vZGVUeXBlICE9PSA4KSkKICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZSIpOwogICAgICAgIHJvb3ROb2RlID0gcm9vdE5vZGUgfHwgd2luZG93LmRvY3VtZW50LmJvZHk7IC8vIE1ha2UgInJvb3ROb2RlIiBwYXJhbWV0ZXIgb3B0aW9uYWwKCiAgICAgICAgYXBwbHlCaW5kaW5nc1RvTm9kZUFuZERlc2NlbmRhbnRzSW50ZXJuYWwoZ2V0QmluZGluZ0NvbnRleHQodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCksIHJvb3ROb2RlLCB0cnVlKTsKICAgIH07CgogICAgLy8gUmV0cmlldmluZyBiaW5kaW5nIGNvbnRleHQgZnJvbSBhcmJpdHJhcnkgbm9kZXMKICAgIGtvLmNvbnRleHRGb3IgPSBmdW5jdGlvbihub2RlKSB7CiAgICAgICAgLy8gV2UgY2FuIG9ubHkgZG8gc29tZXRoaW5nIG1lYW5pbmdmdWwgZm9yIGVsZW1lbnRzIGFuZCBjb21tZW50IG5vZGVzIChpbiBwYXJ0aWN1bGFyLCBub3QgdGV4dCBub2RlcywgYXMgSUUgY2FuJ3Qgc3RvcmUgZG9tZGF0YSBmb3IgdGhlbSkKICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHsKICAgICAgICAgICAgY2FzZSAxOgogICAgICAgICAgICBjYXNlIDg6CiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IGtvLnN0b3JlZEJpbmRpbmdDb250ZXh0Rm9yTm9kZShub2RlKTsKICAgICAgICAgICAgICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDsKICAgICAgICAgICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHJldHVybiBrby5jb250ZXh0Rm9yKG5vZGUucGFyZW50Tm9kZSk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsKICAgIH07CiAgICBrby5kYXRhRm9yID0gZnVuY3Rpb24obm9kZSkgewogICAgICAgIHZhciBjb250ZXh0ID0ga28uY29udGV4dEZvcihub2RlKTsKICAgICAgICByZXR1cm4gY29udGV4dCA/IGNvbnRleHRbJyRkYXRhJ10gOiB1bmRlZmluZWQ7CiAgICB9OwoKICAgIGtvLmV4cG9ydFN5bWJvbCgnYmluZGluZ0hhbmRsZXJzJywga28uYmluZGluZ0hhbmRsZXJzKTsKICAgIGtvLmV4cG9ydFN5bWJvbCgnYXBwbHlCaW5kaW5ncycsIGtvLmFwcGx5QmluZGluZ3MpOwogICAga28uZXhwb3J0U3ltYm9sKCdhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50cycsIGtvLmFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzKTsKICAgIGtvLmV4cG9ydFN5bWJvbCgnYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlJywga28uYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlKTsKICAgIGtvLmV4cG9ydFN5bWJvbCgnYXBwbHlCaW5kaW5nc1RvTm9kZScsIGtvLmFwcGx5QmluZGluZ3NUb05vZGUpOwogICAga28uZXhwb3J0U3ltYm9sKCdjb250ZXh0Rm9yJywga28uY29udGV4dEZvcik7CiAgICBrby5leHBvcnRTeW1ib2woJ2RhdGFGb3InLCBrby5kYXRhRm9yKTsKfSkoKTsKKGZ1bmN0aW9uKHVuZGVmaW5lZCkgewogICAgdmFyIGxvYWRpbmdTdWJzY3JpYmFibGVzQ2FjaGUgPSB7fSwgLy8gVHJhY2tzIGNvbXBvbmVudCBsb2FkcyB0aGF0IGFyZSBjdXJyZW50bHkgaW4gZmxpZ2h0CiAgICAgICAgbG9hZGVkRGVmaW5pdGlvbnNDYWNoZSA9IHt9OyAgICAvLyBUcmFja3MgY29tcG9uZW50IGxvYWRzIHRoYXQgaGF2ZSBhbHJlYWR5IGNvbXBsZXRlZAoKICAgIGtvLmNvbXBvbmVudHMgPSB7CiAgICAgICAgZ2V0OiBmdW5jdGlvbihjb21wb25lbnROYW1lLCBjYWxsYmFjaykgewogICAgICAgICAgICB2YXIgY2FjaGVkRGVmaW5pdGlvbiA9IGdldE9iamVjdE93blByb3BlcnR5KGxvYWRlZERlZmluaXRpb25zQ2FjaGUsIGNvbXBvbmVudE5hbWUpOwogICAgICAgICAgICBpZiAoY2FjaGVkRGVmaW5pdGlvbikgewogICAgICAgICAgICAgICAgLy8gSXQncyBhbHJlYWR5IGxvYWRlZCBhbmQgY2FjaGVkLiBSZXVzZSB0aGUgc2FtZSBkZWZpbml0aW9uIG9iamVjdC4KICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBmb3IgQVBJIGNvbnNpc3RlbmN5LCBldmVuIGNhY2hlIGhpdHMgY29tcGxldGUgYXN5bmNocm9ub3VzbHkuCiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjYWNoZWREZWZpbml0aW9uKSB9LCAwKTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIC8vIEpvaW4gdGhlIGxvYWRpbmcgcHJvY2VzcyB0aGF0IGlzIGFscmVhZHkgdW5kZXJ3YXksIG9yIHN0YXJ0IGEgbmV3IG9uZS4KICAgICAgICAgICAgICAgIGxvYWRDb21wb25lbnRBbmROb3RpZnkoY29tcG9uZW50TmFtZSwgY2FsbGJhY2spOwogICAgICAgICAgICB9CiAgICAgICAgfSwKCiAgICAgICAgY2xlYXJDYWNoZWREZWZpbml0aW9uOiBmdW5jdGlvbihjb21wb25lbnROYW1lKSB7CiAgICAgICAgICAgIGRlbGV0ZSBsb2FkZWREZWZpbml0aW9uc0NhY2hlW2NvbXBvbmVudE5hbWVdOwogICAgICAgIH0sCgogICAgICAgIF9nZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzOiBnZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzCiAgICB9OwoKICAgIGZ1bmN0aW9uIGdldE9iamVjdE93blByb3BlcnR5KG9iaiwgcHJvcE5hbWUpIHsKICAgICAgICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KHByb3BOYW1lKSA/IG9ialtwcm9wTmFtZV0gOiB1bmRlZmluZWQ7CiAgICB9CgogICAgZnVuY3Rpb24gbG9hZENvbXBvbmVudEFuZE5vdGlmeShjb21wb25lbnROYW1lLCBjYWxsYmFjaykgewogICAgICAgIHZhciBzdWJzY3JpYmFibGUgPSBnZXRPYmplY3RPd25Qcm9wZXJ0eShsb2FkaW5nU3Vic2NyaWJhYmxlc0NhY2hlLCBjb21wb25lbnROYW1lKSwKICAgICAgICAgICAgY29tcGxldGVkQXN5bmM7CiAgICAgICAgaWYgKCFzdWJzY3JpYmFibGUpIHsKICAgICAgICAgICAgLy8gSXQncyBub3Qgc3RhcnRlZCBsb2FkaW5nIHlldC4gU3RhcnQgbG9hZGluZywgYW5kIHdoZW4gaXQncyBkb25lLCBtb3ZlIGl0IHRvIGxvYWRlZERlZmluaXRpb25zQ2FjaGUuCiAgICAgICAgICAgIHN1YnNjcmliYWJsZSA9IGxvYWRpbmdTdWJzY3JpYmFibGVzQ2FjaGVbY29tcG9uZW50TmFtZV0gPSBuZXcga28uc3Vic2NyaWJhYmxlKCk7CiAgICAgICAgICAgIGJlZ2luTG9hZGluZ0NvbXBvbmVudChjb21wb25lbnROYW1lLCBmdW5jdGlvbihkZWZpbml0aW9uKSB7CiAgICAgICAgICAgICAgICBsb2FkZWREZWZpbml0aW9uc0NhY2hlW2NvbXBvbmVudE5hbWVdID0gZGVmaW5pdGlvbjsKICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2FkaW5nU3Vic2NyaWJhYmxlc0NhY2hlW2NvbXBvbmVudE5hbWVdOwoKICAgICAgICAgICAgICAgIC8vIEZvciBBUEkgY29uc2lzdGVuY3ksIGFsbCBsb2FkcyBjb21wbGV0ZSBhc3luY2hyb25vdXNseS4gSG93ZXZlciB3ZSB3YW50IHRvIGF2b2lkCiAgICAgICAgICAgICAgICAvLyBhZGRpbmcgYW4gZXh0cmEgc2V0VGltZW91dCBpZiBpdCdzIHVubmVjZXNzYXJ5IChpLmUuLCB0aGUgY29tcGxldGlvbiBpcyBhbHJlYWR5CiAgICAgICAgICAgICAgICAvLyBhc3luYykgc2luY2Ugc2V0VGltZW91dCguLi4sIDApIHN0aWxsIHRha2VzIGFib3V0IDE2bXMgb3IgbW9yZSBvbiBtb3N0IGJyb3dzZXJzLgogICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZEFzeW5jKSB7CiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJhYmxlWydub3RpZnlTdWJzY3JpYmVycyddKGRlZmluaXRpb24pOwogICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmFibGVbJ25vdGlmeVN1YnNjcmliZXJzJ10oZGVmaW5pdGlvbik7CiAgICAgICAgICAgICAgICAgICAgfSwgMCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pOwogICAgICAgICAgICBjb21wbGV0ZWRBc3luYyA9IHRydWU7CiAgICAgICAgfQogICAgICAgIHN1YnNjcmliYWJsZS5zdWJzY3JpYmUoY2FsbGJhY2spOwogICAgfQoKICAgIGZ1bmN0aW9uIGJlZ2luTG9hZGluZ0NvbXBvbmVudChjb21wb25lbnROYW1lLCBjYWxsYmFjaykgewogICAgICAgIGdldEZpcnN0UmVzdWx0RnJvbUxvYWRlcnMoJ2dldENvbmZpZycsIFtjb21wb25lbnROYW1lXSwgZnVuY3Rpb24oY29uZmlnKSB7CiAgICAgICAgICAgIGlmIChjb25maWcpIHsKICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBjb25maWcsIHNvIG5vdyBsb2FkIGl0cyBkZWZpbml0aW9uCiAgICAgICAgICAgICAgICBnZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzKCdsb2FkQ29tcG9uZW50JywgW2NvbXBvbmVudE5hbWUsIGNvbmZpZ10sIGZ1bmN0aW9uKGRlZmluaXRpb24pIHsKICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkZWZpbml0aW9uKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgLy8gVGhlIGNvbXBvbmVudCBoYXMgbm8gY29uZmlnIC0gaXQncyB1bmtub3duIHRvIGFsbCB0aGUgbG9hZGVycy4KICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBhbiBlcnJvciAoZS5nLiwgYSBtb2R1bGUgbG9hZGluZyBlcnJvcikgLSB0aGF0IHdvdWxkIGFib3J0IHRoZQogICAgICAgICAgICAgICAgLy8gcHJvY2VzcyBhbmQgdGhpcyBjYWxsYmFjayB3b3VsZCBub3QgcnVuLiBGb3IgdGhpcyBjYWxsYmFjayB0byBydW4sIGFsbCBsb2FkZXJzIG11c3QKICAgICAgICAgICAgICAgIC8vIGhhdmUgY29uZmlybWVkIHRoZXkgZG9uJ3Qga25vdyBhYm91dCB0aGlzIGNvbXBvbmVudC4KICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpOwogICAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0Rmlyc3RSZXN1bHRGcm9tTG9hZGVycyhtZXRob2ROYW1lLCBhcmdzRXhjZXB0Q2FsbGJhY2ssIGNhbGxiYWNrLCBjYW5kaWRhdGVMb2FkZXJzKSB7CiAgICAgICAgLy8gT24gdGhlIGZpcnN0IGNhbGwgaW4gdGhlIHN0YWNrLCBzdGFydCB3aXRoIHRoZSBmdWxsIHNldCBvZiBsb2FkZXJzCiAgICAgICAgaWYgKCFjYW5kaWRhdGVMb2FkZXJzKSB7CiAgICAgICAgICAgIGNhbmRpZGF0ZUxvYWRlcnMgPSBrby5jb21wb25lbnRzWydsb2FkZXJzJ10uc2xpY2UoMCk7IC8vIFVzZSBhIGNvcHksIGJlY2F1c2Ugd2UnbGwgYmUgbXV0YXRpbmcgdGhpcyBhcnJheQogICAgICAgIH0KCiAgICAgICAgLy8gVHJ5IHRoZSBuZXh0IGNhbmRpZGF0ZQogICAgICAgIHZhciBjdXJyZW50Q2FuZGlkYXRlTG9hZGVyID0gY2FuZGlkYXRlTG9hZGVycy5zaGlmdCgpOwogICAgICAgIGlmIChjdXJyZW50Q2FuZGlkYXRlTG9hZGVyKSB7CiAgICAgICAgICAgIHZhciBtZXRob2RJbnN0YW5jZSA9IGN1cnJlbnRDYW5kaWRhdGVMb2FkZXJbbWV0aG9kTmFtZV07CiAgICAgICAgICAgIGlmIChtZXRob2RJbnN0YW5jZSkgewogICAgICAgICAgICAgICAgdmFyIHdhc0Fib3J0ZWQgPSBmYWxzZSwKICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbm91c1JldHVyblZhbHVlID0gbWV0aG9kSW5zdGFuY2UuYXBwbHkoY3VycmVudENhbmRpZGF0ZUxvYWRlciwgYXJnc0V4Y2VwdENhbGxiYWNrLmNvbmNhdChmdW5jdGlvbihyZXN1bHQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhc0Fib3J0ZWQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpOwogICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gbnVsbCkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBjYW5kaWRhdGUgcmV0dXJuZWQgYSB2YWx1ZS4gVXNlIGl0LgogICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTsKICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0aGUgbmV4dCBjYW5kaWRhdGUKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZpcnN0UmVzdWx0RnJvbUxvYWRlcnMobWV0aG9kTmFtZSwgYXJnc0V4Y2VwdENhbGxiYWNrLCBjYWxsYmFjaywgY2FuZGlkYXRlTG9hZGVycyk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9KSk7CgogICAgICAgICAgICAgICAgLy8gQ3VycmVudGx5LCBsb2FkZXJzIG1heSBub3QgcmV0dXJuIGFueXRoaW5nIHN5bmNocm9ub3VzbHkuIFRoaXMgbGVhdmVzIG9wZW4gdGhlIHBvc3NpYmlsaXR5CiAgICAgICAgICAgICAgICAvLyB0aGF0IHdlJ2xsIGV4dGVuZCB0aGUgQVBJIHRvIHN1cHBvcnQgc3luY2hyb25vdXMgcmV0dXJuIHZhbHVlcyBpbiB0aGUgZnV0dXJlLiBJdCB3b24ndCBiZQogICAgICAgICAgICAgICAgLy8gYSBicmVha2luZyBjaGFuZ2UsIGJlY2F1c2UgY3VycmVudGx5IG5vIGxvYWRlciBpcyBhbGxvd2VkIHRvIHJldHVybiBhbnl0aGluZyBleGNlcHQgdW5kZWZpbmVkLgogICAgICAgICAgICAgICAgaWYgKHN5bmNocm9ub3VzUmV0dXJuVmFsdWUgIT09IHVuZGVmaW5lZCkgewogICAgICAgICAgICAgICAgICAgIHdhc0Fib3J0ZWQgPSB0cnVlOwoKICAgICAgICAgICAgICAgICAgICAvLyBNZXRob2QgdG8gc3VwcHJlc3MgZXhjZXB0aW9ucyB3aWxsIHJlbWFpbiB1bmRvY3VtZW50ZWQuIFRoaXMgaXMgb25seSB0byBrZWVwCiAgICAgICAgICAgICAgICAgICAgLy8gS08ncyBzcGVjcyBydW5uaW5nIHRpZGlseSwgc2luY2Ugd2UgY2FuIG9ic2VydmUgdGhlIGxvYWRpbmcgZ290IGFib3J0ZWQgd2l0aG91dAogICAgICAgICAgICAgICAgICAgIC8vIGhhdmluZyBleGNlcHRpb25zIGNsdXR0ZXJpbmcgdXAgdGhlIGNvbnNvbGUgdG9vLgogICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudENhbmRpZGF0ZUxvYWRlclsnc3VwcHJlc3NMb2FkZXJFeGNlcHRpb25zJ10pIHsKICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgbG9hZGVycyBtdXN0IHN1cHBseSB2YWx1ZXMgYnkgaW52b2tpbmcgdGhlIGNhbGxiYWNrLCBub3QgYnkgcmV0dXJuaW5nIHZhbHVlcyBzeW5jaHJvbm91c2x5LicpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FuZGlkYXRlIGRvZXNuJ3QgaGF2ZSB0aGUgcmVsZXZhbnQgaGFuZGxlci4gU3luY2hyb25vdXNseSBtb3ZlIG9uIHRvIHRoZSBuZXh0IG9uZS4KICAgICAgICAgICAgICAgIGdldEZpcnN0UmVzdWx0RnJvbUxvYWRlcnMobWV0aG9kTmFtZSwgYXJnc0V4Y2VwdENhbGxiYWNrLCBjYWxsYmFjaywgY2FuZGlkYXRlTG9hZGVycyk7CiAgICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAvLyBObyBjYW5kaWRhdGVzIHJldHVybmVkIGEgdmFsdWUKICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7CiAgICAgICAgfQogICAgfQoKICAgIC8vIFJlZmVyZW5jZSB0aGUgbG9hZGVycyB2aWEgc3RyaW5nIG5hbWUgc28gaXQncyBwb3NzaWJsZSBmb3IgZGV2ZWxvcGVycwogICAgLy8gdG8gcmVwbGFjZSB0aGUgd2hvbGUgYXJyYXkgYnkgYXNzaWduaW5nIHRvIGtvLmNvbXBvbmVudHMubG9hZGVycwogICAga28uY29tcG9uZW50c1snbG9hZGVycyddID0gW107CgogICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzJywga28uY29tcG9uZW50cyk7CiAgICBrby5leHBvcnRTeW1ib2woJ2NvbXBvbmVudHMuZ2V0Jywga28uY29tcG9uZW50cy5nZXQpOwogICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLmNsZWFyQ2FjaGVkRGVmaW5pdGlvbicsIGtvLmNvbXBvbmVudHMuY2xlYXJDYWNoZWREZWZpbml0aW9uKTsKfSkoKTsKKGZ1bmN0aW9uKHVuZGVmaW5lZCkgewoKICAgIC8vIFRoZSBkZWZhdWx0IGxvYWRlciBpcyByZXNwb25zaWJsZSBmb3IgdHdvIHRoaW5nczoKICAgIC8vIDEuIE1haW50YWluaW5nIHRoZSBkZWZhdWx0IGluLW1lbW9yeSByZWdpc3RyeSBvZiBjb21wb25lbnQgY29uZmlndXJhdGlvbiBvYmplY3RzCiAgICAvLyAgICAoaS5lLiwgdGhlIHRoaW5nIHlvdSdyZSB3cml0aW5nIHRvIHdoZW4geW91IGNhbGwga28uY29tcG9uZW50cy5yZWdpc3Rlcihzb21lTmFtZSwgLi4uKSkKICAgIC8vIDIuIEFuc3dlcmluZyByZXF1ZXN0cyBmb3IgY29tcG9uZW50cyBieSBmZXRjaGluZyBjb25maWd1cmF0aW9uIG9iamVjdHMKICAgIC8vICAgIGZyb20gdGhhdCBkZWZhdWx0IGluLW1lbW9yeSByZWdpc3RyeSBhbmQgcmVzb2x2aW5nIHRoZW0gaW50byBzdGFuZGFyZAogICAgLy8gICAgY29tcG9uZW50IGRlZmluaXRpb24gb2JqZWN0cyAob2YgdGhlIGZvcm0geyBjcmVhdGVWaWV3TW9kZWw6IC4uLiwgdGVtcGxhdGU6IC4uLiB9KQogICAgLy8gQ3VzdG9tIGxvYWRlcnMgbWF5IG92ZXJyaWRlIGVpdGhlciBvZiB0aGVzZSBmYWNpbGl0aWVzLCBpLmUuLAogICAgLy8gMS4gVG8gc3VwcGx5IGNvbmZpZ3VyYXRpb24gb2JqZWN0cyBmcm9tIHNvbWUgb3RoZXIgc291cmNlIChlLmcuLCBjb252ZW50aW9ucykKICAgIC8vIDIuIE9yLCB0byByZXNvbHZlIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyBieSBsb2FkaW5nIHZpZXdtb2RlbHMvdGVtcGxhdGVzIHZpYSBhcmJpdHJhcnkgbG9naWMuCgogICAgdmFyIGRlZmF1bHRDb25maWdSZWdpc3RyeSA9IHt9OwoKICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIgPSBmdW5jdGlvbihjb21wb25lbnROYW1lLCBjb25maWcpIHsKICAgICAgICBpZiAoIWNvbmZpZykgewogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29uZmlndXJhdGlvbiBmb3IgJyArIGNvbXBvbmVudE5hbWUpOwogICAgICAgIH0KCiAgICAgICAgaWYgKGtvLmNvbXBvbmVudHMuaXNSZWdpc3RlcmVkKGNvbXBvbmVudE5hbWUpKSB7CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50ICcgKyBjb21wb25lbnROYW1lICsgJyBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQnKTsKICAgICAgICB9CgogICAgICAgIGRlZmF1bHRDb25maWdSZWdpc3RyeVtjb21wb25lbnROYW1lXSA9IGNvbmZpZzsKICAgIH0KCiAgICBrby5jb21wb25lbnRzLmlzUmVnaXN0ZXJlZCA9IGZ1bmN0aW9uKGNvbXBvbmVudE5hbWUpIHsKICAgICAgICByZXR1cm4gY29tcG9uZW50TmFtZSBpbiBkZWZhdWx0Q29uZmlnUmVnaXN0cnk7CiAgICB9CgogICAga28uY29tcG9uZW50cy51bnJlZ2lzdGVyID0gZnVuY3Rpb24oY29tcG9uZW50TmFtZSkgewogICAgICAgIGRlbGV0ZSBkZWZhdWx0Q29uZmlnUmVnaXN0cnlbY29tcG9uZW50TmFtZV07CiAgICAgICAga28uY29tcG9uZW50cy5jbGVhckNhY2hlZERlZmluaXRpb24oY29tcG9uZW50TmFtZSk7CiAgICB9CgogICAga28uY29tcG9uZW50cy5kZWZhdWx0TG9hZGVyID0gewogICAgICAgICdnZXRDb25maWcnOiBmdW5jdGlvbihjb21wb25lbnROYW1lLCBjYWxsYmFjaykgewogICAgICAgICAgICB2YXIgcmVzdWx0ID0gZGVmYXVsdENvbmZpZ1JlZ2lzdHJ5Lmhhc093blByb3BlcnR5KGNvbXBvbmVudE5hbWUpCiAgICAgICAgICAgICAgICA/IGRlZmF1bHRDb25maWdSZWdpc3RyeVtjb21wb25lbnROYW1lXQogICAgICAgICAgICAgICAgOiBudWxsOwogICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpOwogICAgICAgIH0sCgogICAgICAgICdsb2FkQ29tcG9uZW50JzogZnVuY3Rpb24oY29tcG9uZW50TmFtZSwgY29uZmlnLCBjYWxsYmFjaykgewogICAgICAgICAgICB2YXIgZXJyb3JDYWxsYmFjayA9IG1ha2VFcnJvckNhbGxiYWNrKGNvbXBvbmVudE5hbWUpOwogICAgICAgICAgICBwb3NzaWJseUdldENvbmZpZ0Zyb21BbWQoZXJyb3JDYWxsYmFjaywgY29uZmlnLCBmdW5jdGlvbihsb2FkZWRDb25maWcpIHsKICAgICAgICAgICAgICAgIHJlc29sdmVDb25maWcoY29tcG9uZW50TmFtZSwgZXJyb3JDYWxsYmFjaywgbG9hZGVkQ29uZmlnLCBjYWxsYmFjayk7CiAgICAgICAgICAgIH0pOwogICAgICAgIH0sCgogICAgICAgICdsb2FkVGVtcGxhdGUnOiBmdW5jdGlvbihjb21wb25lbnROYW1lLCB0ZW1wbGF0ZUNvbmZpZywgY2FsbGJhY2spIHsKICAgICAgICAgICAgcmVzb2x2ZVRlbXBsYXRlKG1ha2VFcnJvckNhbGxiYWNrKGNvbXBvbmVudE5hbWUpLCB0ZW1wbGF0ZUNvbmZpZywgY2FsbGJhY2spOwogICAgICAgIH0sCgogICAgICAgICdsb2FkVmlld01vZGVsJzogZnVuY3Rpb24oY29tcG9uZW50TmFtZSwgdmlld01vZGVsQ29uZmlnLCBjYWxsYmFjaykgewogICAgICAgICAgICByZXNvbHZlVmlld01vZGVsKG1ha2VFcnJvckNhbGxiYWNrKGNvbXBvbmVudE5hbWUpLCB2aWV3TW9kZWxDb25maWcsIGNhbGxiYWNrKTsKICAgICAgICB9CiAgICB9OwoKICAgIHZhciBjcmVhdGVWaWV3TW9kZWxLZXkgPSAnY3JlYXRlVmlld01vZGVsJzsKCiAgICAvLyBUYWtlcyBhIGNvbmZpZyBvYmplY3Qgb2YgdGhlIGZvcm0geyB0ZW1wbGF0ZTogLi4uLCB2aWV3TW9kZWw6IC4uLiB9LCBhbmQgYXN5bmNocm9ub3VzbHkgY29udmVydCBpdAogICAgLy8gaW50byB0aGUgc3RhbmRhcmQgY29tcG9uZW50IGRlZmluaXRpb24gZm9ybWF0OgogICAgLy8gICAgeyB0ZW1wbGF0ZTogPEFycmF5T2ZEb21Ob2Rlcz4sIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7IC4uLiB9IH0uCiAgICAvLyBTaW5jZSBib3RoIHRlbXBsYXRlIGFuZCB2aWV3TW9kZWwgbWF5IG5lZWQgdG8gYmUgcmVzb2x2ZWQgYXN5bmNocm9ub3VzbHksIGJvdGggdGFza3MgYXJlIHBlcmZvcm1lZAogICAgLy8gaW4gcGFyYWxsZWwsIGFuZCB0aGUgcmVzdWx0cyBqb2luZWQgd2hlbiBib3RoIGFyZSByZWFkeS4gV2UgZG9uJ3QgZGVwZW5kIG9uIGFueSBwcm9taXNlcyBpbmZyYXN0cnVjdHVyZSwKICAgIC8vIHNvIHRoaXMgaXMgaW1wbGVtZW50ZWQgbWFudWFsbHkgYmVsb3cuCiAgICBmdW5jdGlvbiByZXNvbHZlQ29uZmlnKGNvbXBvbmVudE5hbWUsIGVycm9yQ2FsbGJhY2ssIGNvbmZpZywgY2FsbGJhY2spIHsKICAgICAgICB2YXIgcmVzdWx0ID0ge30sCiAgICAgICAgICAgIG1ha2VDYWxsQmFja1doZW5aZXJvID0gMiwKICAgICAgICAgICAgdHJ5SXNzdWVDYWxsYmFjayA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaWYgKC0tbWFrZUNhbGxCYWNrV2hlblplcm8gPT09IDApIHsKICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9LAogICAgICAgICAgICB0ZW1wbGF0ZUNvbmZpZyA9IGNvbmZpZ1sndGVtcGxhdGUnXSwKICAgICAgICAgICAgdmlld01vZGVsQ29uZmlnID0gY29uZmlnWyd2aWV3TW9kZWwnXTsKCiAgICAgICAgaWYgKHRlbXBsYXRlQ29uZmlnKSB7CiAgICAgICAgICAgIHBvc3NpYmx5R2V0Q29uZmlnRnJvbUFtZChlcnJvckNhbGxiYWNrLCB0ZW1wbGF0ZUNvbmZpZywgZnVuY3Rpb24obG9hZGVkQ29uZmlnKSB7CiAgICAgICAgICAgICAgICBrby5jb21wb25lbnRzLl9nZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzKCdsb2FkVGVtcGxhdGUnLCBbY29tcG9uZW50TmFtZSwgbG9hZGVkQ29uZmlnXSwgZnVuY3Rpb24ocmVzb2x2ZWRUZW1wbGF0ZSkgewogICAgICAgICAgICAgICAgICAgIHJlc3VsdFsndGVtcGxhdGUnXSA9IHJlc29sdmVkVGVtcGxhdGU7CiAgICAgICAgICAgICAgICAgICAgdHJ5SXNzdWVDYWxsYmFjaygpOwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0pOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHRyeUlzc3VlQ2FsbGJhY2soKTsKICAgICAgICB9CgogICAgICAgIGlmICh2aWV3TW9kZWxDb25maWcpIHsKICAgICAgICAgICAgcG9zc2libHlHZXRDb25maWdGcm9tQW1kKGVycm9yQ2FsbGJhY2ssIHZpZXdNb2RlbENvbmZpZywgZnVuY3Rpb24obG9hZGVkQ29uZmlnKSB7CiAgICAgICAgICAgICAgICBrby5jb21wb25lbnRzLl9nZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzKCdsb2FkVmlld01vZGVsJywgW2NvbXBvbmVudE5hbWUsIGxvYWRlZENvbmZpZ10sIGZ1bmN0aW9uKHJlc29sdmVkVmlld01vZGVsKSB7CiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2NyZWF0ZVZpZXdNb2RlbEtleV0gPSByZXNvbHZlZFZpZXdNb2RlbDsKICAgICAgICAgICAgICAgICAgICB0cnlJc3N1ZUNhbGxiYWNrKCk7CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdHJ5SXNzdWVDYWxsYmFjaygpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiByZXNvbHZlVGVtcGxhdGUoZXJyb3JDYWxsYmFjaywgdGVtcGxhdGVDb25maWcsIGNhbGxiYWNrKSB7CiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZUNvbmZpZyA9PT0gJ3N0cmluZycpIHsKICAgICAgICAgICAgLy8gTWFya3VwIC0gcGFyc2UgaXQKICAgICAgICAgICAgY2FsbGJhY2soa28udXRpbHMucGFyc2VIdG1sRnJhZ21lbnQodGVtcGxhdGVDb25maWcpKTsKICAgICAgICB9IGVsc2UgaWYgKHRlbXBsYXRlQ29uZmlnIGluc3RhbmNlb2YgQXJyYXkpIHsKICAgICAgICAgICAgLy8gQXNzdW1lIGFscmVhZHkgYW4gYXJyYXkgb2YgRE9NIG5vZGVzIC0gcGFzcyB0aHJvdWdoIHVuY2hhbmdlZAogICAgICAgICAgICBjYWxsYmFjayh0ZW1wbGF0ZUNvbmZpZyk7CiAgICAgICAgfSBlbHNlIGlmIChpc0RvY3VtZW50RnJhZ21lbnQodGVtcGxhdGVDb25maWcpKSB7CiAgICAgICAgICAgIC8vIERvY3VtZW50IGZyYWdtZW50IC0gdXNlIGl0cyBjaGlsZCBub2RlcwogICAgICAgICAgICBjYWxsYmFjayhrby51dGlscy5tYWtlQXJyYXkodGVtcGxhdGVDb25maWcuY2hpbGROb2RlcykpOwogICAgICAgIH0gZWxzZSBpZiAodGVtcGxhdGVDb25maWdbJ2VsZW1lbnQnXSkgewogICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRlbXBsYXRlQ29uZmlnWydlbGVtZW50J107CiAgICAgICAgICAgIGlmIChpc0RvbUVsZW1lbnQoZWxlbWVudCkpIHsKICAgICAgICAgICAgICAgIC8vIEVsZW1lbnQgaW5zdGFuY2UgLSBjb3B5IGl0cyBjaGlsZCBub2RlcwogICAgICAgICAgICAgICAgY2FsbGJhY2soY2xvbmVOb2Rlc0Zyb21UZW1wbGF0ZVNvdXJjZUVsZW1lbnQoZWxlbWVudCkpOwogICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgewogICAgICAgICAgICAgICAgLy8gRWxlbWVudCBJRCAtIGZpbmQgaXQsIHRoZW4gY29weSBpdHMgY2hpbGQgbm9kZXMKICAgICAgICAgICAgICAgIHZhciBlbGVtSW5zdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTsKICAgICAgICAgICAgICAgIGlmIChlbGVtSW5zdGFuY2UpIHsKICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjbG9uZU5vZGVzRnJvbVRlbXBsYXRlU291cmNlRWxlbWVudChlbGVtSW5zdGFuY2UpKTsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjaygnQ2Fubm90IGZpbmQgZWxlbWVudCB3aXRoIElEICcgKyBlbGVtZW50KTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soJ1Vua25vd24gZWxlbWVudCB0eXBlOiAnICsgZWxlbWVudCk7CiAgICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBlcnJvckNhbGxiYWNrKCdVbmtub3duIHRlbXBsYXRlIHZhbHVlOiAnICsgdGVtcGxhdGVDb25maWcpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiByZXNvbHZlVmlld01vZGVsKGVycm9yQ2FsbGJhY2ssIHZpZXdNb2RlbENvbmZpZywgY2FsbGJhY2spIHsKICAgICAgICBpZiAodHlwZW9mIHZpZXdNb2RlbENvbmZpZyA9PT0gJ2Z1bmN0aW9uJykgewogICAgICAgICAgICAvLyBDb25zdHJ1Y3RvciAtIGNvbnZlcnQgdG8gc3RhbmRhcmQgZmFjdG9yeSBmdW5jdGlvbiBmb3JtYXQKICAgICAgICAgICAgLy8gQnkgZGVzaWduLCB0aGlzIGRvZXMgKm5vdCogc3VwcGx5IGNvbXBvbmVudEluZm8gdG8gdGhlIGNvbnN0cnVjdG9yLCBhcyB0aGUgaW50ZW50IGlzIHRoYXQKICAgICAgICAgICAgLy8gY29tcG9uZW50SW5mbyBjb250YWlucyBub24tdmlld21vZGVsIGRhdGEgKGUuZy4sIHRoZSBjb21wb25lbnQncyBlbGVtZW50KSB0aGF0IHNob3VsZCBvbmx5CiAgICAgICAgICAgIC8vIGJlIHVzZWQgaW4gZmFjdG9yeSBmdW5jdGlvbnMsIG5vdCB2aWV3bW9kZWwgY29uc3RydWN0b3JzLgogICAgICAgICAgICBjYWxsYmFjayhmdW5jdGlvbiAocGFyYW1zIC8qLCBjb21wb25lbnRJbmZvICovKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHZpZXdNb2RlbENvbmZpZyhwYXJhbXMpOwogICAgICAgICAgICB9KTsKICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2aWV3TW9kZWxDb25maWdbY3JlYXRlVmlld01vZGVsS2V5XSA9PT0gJ2Z1bmN0aW9uJykgewogICAgICAgICAgICAvLyBBbHJlYWR5IGEgZmFjdG9yeSBmdW5jdGlvbiAtIHVzZSBpdCBhcy1pcwogICAgICAgICAgICBjYWxsYmFjayh2aWV3TW9kZWxDb25maWdbY3JlYXRlVmlld01vZGVsS2V5XSk7CiAgICAgICAgfSBlbHNlIGlmICgnaW5zdGFuY2UnIGluIHZpZXdNb2RlbENvbmZpZykgewogICAgICAgICAgICAvLyBGaXhlZCBvYmplY3QgaW5zdGFuY2UgLSBwcm9tb3RlIHRvIGNyZWF0ZVZpZXdNb2RlbCBmb3JtYXQgZm9yIEFQSSBjb25zaXN0ZW5jeQogICAgICAgICAgICB2YXIgZml4ZWRJbnN0YW5jZSA9IHZpZXdNb2RlbENvbmZpZ1snaW5zdGFuY2UnXTsKICAgICAgICAgICAgY2FsbGJhY2soZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykgewogICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkSW5zdGFuY2U7CiAgICAgICAgICAgIH0pOwogICAgICAgIH0gZWxzZSBpZiAoJ3ZpZXdNb2RlbCcgaW4gdmlld01vZGVsQ29uZmlnKSB7CiAgICAgICAgICAgIC8vIFJlc29sdmVkIEFNRCBtb2R1bGUgd2hvc2UgdmFsdWUgaXMgb2YgdGhlIGZvcm0geyB2aWV3TW9kZWw6IC4uLiB9CiAgICAgICAgICAgIHJlc29sdmVWaWV3TW9kZWwoZXJyb3JDYWxsYmFjaywgdmlld01vZGVsQ29uZmlnWyd2aWV3TW9kZWwnXSwgY2FsbGJhY2spOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soJ1Vua25vd24gdmlld01vZGVsIHZhbHVlOiAnICsgdmlld01vZGVsQ29uZmlnKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gY2xvbmVOb2Rlc0Zyb21UZW1wbGF0ZVNvdXJjZUVsZW1lbnQoZWxlbUluc3RhbmNlKSB7CiAgICAgICAgc3dpdGNoIChrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbUluc3RhbmNlKSkgewogICAgICAgICAgICBjYXNlICdzY3JpcHQnOgogICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KGVsZW1JbnN0YW5jZS50ZXh0KTsKICAgICAgICAgICAgY2FzZSAndGV4dGFyZWEnOgogICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KGVsZW1JbnN0YW5jZS52YWx1ZSk7CiAgICAgICAgICAgIGNhc2UgJ3RlbXBsYXRlJzoKICAgICAgICAgICAgICAgIC8vIEZvciBicm93c2VycyB3aXRoIHByb3BlciA8dGVtcGxhdGU+IGVsZW1lbnQgc3VwcG9ydCAoaS5lLiwgd2hlcmUgdGhlIC5jb250ZW50IHByb3BlcnR5CiAgICAgICAgICAgICAgICAvLyBnaXZlcyBhIGRvY3VtZW50IGZyYWdtZW50KSwgdXNlIHRoYXQgZG9jdW1lbnQgZnJhZ21lbnQuCiAgICAgICAgICAgICAgICBpZiAoaXNEb2N1bWVudEZyYWdtZW50KGVsZW1JbnN0YW5jZS5jb250ZW50KSkgewogICAgICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy5jbG9uZU5vZGVzKGVsZW1JbnN0YW5jZS5jb250ZW50LmNoaWxkTm9kZXMpOwogICAgICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgLy8gUmVndWxhciBlbGVtZW50cyBzdWNoIGFzIDxkaXY+LCBhbmQgPHRlbXBsYXRlPiBlbGVtZW50cyBvbiBvbGQgYnJvd3NlcnMgdGhhdCBkb24ndCByZWFsbHkKICAgICAgICAvLyB1bmRlcnN0YW5kIDx0ZW1wbGF0ZT4gYW5kIGp1c3QgdHJlYXQgaXQgYXMgYSByZWd1bGFyIGNvbnRhaW5lcgogICAgICAgIHJldHVybiBrby51dGlscy5jbG9uZU5vZGVzKGVsZW1JbnN0YW5jZS5jaGlsZE5vZGVzKTsKICAgIH0KCiAgICBmdW5jdGlvbiBpc0RvbUVsZW1lbnQob2JqKSB7CiAgICAgICAgaWYgKHdpbmRvd1snSFRNTEVsZW1lbnQnXSkgewogICAgICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmoudGFnTmFtZSAmJiBvYmoubm9kZVR5cGUgPT09IDE7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGlzRG9jdW1lbnRGcmFnbWVudChvYmopIHsKICAgICAgICBpZiAod2luZG93WydEb2N1bWVudEZyYWdtZW50J10pIHsKICAgICAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQ7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDExOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBwb3NzaWJseUdldENvbmZpZ0Zyb21BbWQoZXJyb3JDYWxsYmFjaywgY29uZmlnLCBjYWxsYmFjaykgewogICAgICAgIGlmICh0eXBlb2YgY29uZmlnWydyZXF1aXJlJ10gPT09ICdzdHJpbmcnKSB7CiAgICAgICAgICAgIC8vIFRoZSBjb25maWcgaXMgdGhlIHZhbHVlIG9mIGFuIEFNRCBtb2R1bGUKICAgICAgICAgICAgaWYgKHJlcXVpcmUgfHwgd2luZG93WydyZXF1aXJlJ10pIHsKICAgICAgICAgICAgICAgIChyZXF1aXJlIHx8IHdpbmRvd1sncmVxdWlyZSddKShbY29uZmlnWydyZXF1aXJlJ11dLCBjYWxsYmFjayk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKCdVc2VzIHJlcXVpcmUsIGJ1dCBubyBBTUQgbG9hZGVyIGlzIHByZXNlbnQnKTsKICAgICAgICAgICAgfQogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGNhbGxiYWNrKGNvbmZpZyk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIG1ha2VFcnJvckNhbGxiYWNrKGNvbXBvbmVudE5hbWUpIHsKICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHsKICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgXCcnICsgY29tcG9uZW50TmFtZSArICdcJzogJyArIG1lc3NhZ2UpOwogICAgICAgIH07CiAgICB9CgogICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLnJlZ2lzdGVyJywga28uY29tcG9uZW50cy5yZWdpc3Rlcik7CiAgICBrby5leHBvcnRTeW1ib2woJ2NvbXBvbmVudHMuaXNSZWdpc3RlcmVkJywga28uY29tcG9uZW50cy5pc1JlZ2lzdGVyZWQpOwogICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLnVucmVnaXN0ZXInLCBrby5jb21wb25lbnRzLnVucmVnaXN0ZXIpOwoKICAgIC8vIEV4cG9zZSB0aGUgZGVmYXVsdCBsb2FkZXIgc28gdGhhdCBkZXZlbG9wZXJzIGNhbiBkaXJlY3RseSBhc2sgaXQgZm9yIGNvbmZpZ3VyYXRpb24KICAgIC8vIG9yIHRvIHJlc29sdmUgY29uZmlndXJhdGlvbgogICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLmRlZmF1bHRMb2FkZXInLCBrby5jb21wb25lbnRzLmRlZmF1bHRMb2FkZXIpOwoKICAgIC8vIEJ5IGRlZmF1bHQsIHRoZSBkZWZhdWx0IGxvYWRlciBpcyB0aGUgb25seSByZWdpc3RlcmVkIGNvbXBvbmVudCBsb2FkZXIKICAgIGtvLmNvbXBvbmVudHNbJ2xvYWRlcnMnXS5wdXNoKGtvLmNvbXBvbmVudHMuZGVmYXVsdExvYWRlcik7CgogICAgLy8gUHJpdmF0ZWx5IGV4cG9zZSB0aGUgdW5kZXJseWluZyBjb25maWcgcmVnaXN0cnkgZm9yIHVzZSBpbiBvbGQtSUUgc2hpbQogICAga28uY29tcG9uZW50cy5fYWxsUmVnaXN0ZXJlZENvbXBvbmVudHMgPSBkZWZhdWx0Q29uZmlnUmVnaXN0cnk7Cn0pKCk7CihmdW5jdGlvbiAodW5kZWZpbmVkKSB7CiAgICAvLyBPdmVycmlkYWJsZSBBUEkgZm9yIGRldGVybWluaW5nIHdoaWNoIGNvbXBvbmVudCBuYW1lIGFwcGxpZXMgdG8gYSBnaXZlbiBub2RlLiBCeSBvdmVycmlkaW5nIHRoaXMsCiAgICAvLyB5b3UgY2FuIGZvciBleGFtcGxlIG1hcCBzcGVjaWZpYyB0YWdOYW1lcyB0byBjb21wb25lbnRzIHRoYXQgYXJlIG5vdCBwcmVyZWdpc3RlcmVkLgogICAga28uY29tcG9uZW50c1snZ2V0Q29tcG9uZW50TmFtZUZvck5vZGUnXSA9IGZ1bmN0aW9uKG5vZGUpIHsKICAgICAgICB2YXIgdGFnTmFtZUxvd2VyID0ga28udXRpbHMudGFnTmFtZUxvd2VyKG5vZGUpOwogICAgICAgIHJldHVybiBrby5jb21wb25lbnRzLmlzUmVnaXN0ZXJlZCh0YWdOYW1lTG93ZXIpICYmIHRhZ05hbWVMb3dlcjsKICAgIH07CgogICAga28uY29tcG9uZW50cy5hZGRCaW5kaW5nc0ZvckN1c3RvbUVsZW1lbnQgPSBmdW5jdGlvbihhbGxCaW5kaW5ncywgbm9kZSwgYmluZGluZ0NvbnRleHQsIHZhbHVlQWNjZXNzb3JzKSB7CiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIGl0J3MgcmVhbGx5IGEgY3VzdG9tIGVsZW1lbnQgbWF0Y2hpbmcgYSBjb21wb25lbnQKICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkgewogICAgICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGtvLmNvbXBvbmVudHNbJ2dldENvbXBvbmVudE5hbWVGb3JOb2RlJ10obm9kZSk7CiAgICAgICAgICAgIGlmIChjb21wb25lbnROYW1lKSB7CiAgICAgICAgICAgICAgICAvLyBJdCBkb2VzIHJlcHJlc2VudCBhIGNvbXBvbmVudCwgc28gYWRkIGEgY29tcG9uZW50IGJpbmRpbmcgZm9yIGl0CiAgICAgICAgICAgICAgICBhbGxCaW5kaW5ncyA9IGFsbEJpbmRpbmdzIHx8IHt9OwoKICAgICAgICAgICAgICAgIGlmIChhbGxCaW5kaW5nc1snY29tcG9uZW50J10pIHsKICAgICAgICAgICAgICAgICAgICAvLyBBdm9pZCBzaWxlbnRseSBvdmVyd3JpdGluZyBzb21lIG90aGVyICdjb21wb25lbnQnIGJpbmRpbmcgdGhhdCBtYXkgYWxyZWFkeSBiZSBvbiB0aGUgZWxlbWVudAogICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSB0aGUgImNvbXBvbmVudCIgYmluZGluZyBvbiBhIGN1c3RvbSBlbGVtZW50IG1hdGNoaW5nIGEgY29tcG9uZW50Jyk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudEJpbmRpbmdWYWx1ZSA9IHsgJ25hbWUnOiBjb21wb25lbnROYW1lLCAncGFyYW1zJzogZ2V0Q29tcG9uZW50UGFyYW1zRnJvbUN1c3RvbUVsZW1lbnQobm9kZSwgYmluZGluZ0NvbnRleHQpIH07CgogICAgICAgICAgICAgICAgYWxsQmluZGluZ3NbJ2NvbXBvbmVudCddID0gdmFsdWVBY2Nlc3NvcnMKICAgICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50QmluZGluZ1ZhbHVlOyB9CiAgICAgICAgICAgICAgICAgICAgOiBjb21wb25lbnRCaW5kaW5nVmFsdWU7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiBhbGxCaW5kaW5nczsKICAgIH0KCiAgICB2YXIgbmF0aXZlQmluZGluZ1Byb3ZpZGVySW5zdGFuY2UgPSBuZXcga28uYmluZGluZ1Byb3ZpZGVyKCk7CgogICAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50UGFyYW1zRnJvbUN1c3RvbUVsZW1lbnQoZWxlbSwgYmluZGluZ0NvbnRleHQpIHsKICAgICAgICB2YXIgcGFyYW1zQXR0cmlidXRlID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3BhcmFtcycpOwoKICAgICAgICBpZiAocGFyYW1zQXR0cmlidXRlKSB7CiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBuYXRpdmVCaW5kaW5nUHJvdmlkZXJJbnN0YW5jZVsncGFyc2VCaW5kaW5nc1N0cmluZyddKHBhcmFtc0F0dHJpYnV0ZSwgYmluZGluZ0NvbnRleHQsIGVsZW0sIHsgJ3ZhbHVlQWNjZXNzb3JzJzogdHJ1ZSwgJ2JpbmRpbmdQYXJhbXMnOiB0cnVlIH0pLAogICAgICAgICAgICAgICAgcmF3UGFyYW1Db21wdXRlZFZhbHVlcyA9IGtvLnV0aWxzLm9iamVjdE1hcChwYXJhbXMsIGZ1bmN0aW9uKHBhcmFtVmFsdWUsIHBhcmFtTmFtZSkgewogICAgICAgICAgICAgICAgICAgIHJldHVybiBrby5jb21wdXRlZChwYXJhbVZhbHVlLCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogZWxlbSB9KTsKICAgICAgICAgICAgICAgIH0pLAogICAgICAgICAgICAgICAgcmVzdWx0ID0ga28udXRpbHMub2JqZWN0TWFwKHJhd1BhcmFtQ29tcHV0ZWRWYWx1ZXMsIGZ1bmN0aW9uKHBhcmFtVmFsdWVDb21wdXRlZCwgcGFyYW1OYW1lKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyB0aGUgZXZhbHVhdGlvbiBvZiB0aGUgcGFyYW1ldGVyIHZhbHVlIHVud3JhcCBhbnkgb2JzZXJ2YWJsZXM/CiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJhbVZhbHVlQ29tcHV0ZWQuaXNBY3RpdmUoKSkgewogICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBpdCBkb2Vzbid0LCBzbyB0aGVyZSdzIG5vIG5lZWQgZm9yIGFueSBjb21wdXRlZCB3cmFwcGVyLiBKdXN0IHBhc3MgdGhyb3VnaCB0aGUgc3VwcGxpZWQgdmFsdWUgZGlyZWN0bHkuCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6ICJzb21lVmFsOiBmaXJzdE5hbWUsIGFnZTogMTIzIiAod2hldGhlciBvciBub3QgZmlyc3ROYW1lIGlzIGFuIG9ic2VydmFibGUvY29tcHV0ZWQpCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbVZhbHVlQ29tcHV0ZWQucGVlaygpOwogICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFllcyBpdCBkb2VzLiBTdXBwbHkgYSBjb21wdXRlZCBwcm9wZXJ0eSB0aGF0IHVud3JhcHMgYm90aCB0aGUgb3V0ZXIgKGJpbmRpbmcgZXhwcmVzc2lvbikKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV2ZWwgb2Ygb2JzZXJ2YWJpbGl0eSwgYW5kIGFueSBpbm5lciAocmVzdWx0aW5nIG1vZGVsIHZhbHVlKSBsZXZlbCBvZiBvYnNlcnZhYmlsaXR5LgogICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIG1lYW5zIHRoZSBjb21wb25lbnQgZG9lc24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IG11bHRpcGxlIHVud3JhcHBpbmcuCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrby5jb21wdXRlZChmdW5jdGlvbigpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHBhcmFtVmFsdWVDb21wdXRlZCgpKTsKICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW0gfSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSk7CgogICAgICAgICAgICAvLyBHaXZlIGFjY2VzcyB0byB0aGUgcmF3IGNvbXB1dGVkcywgYXMgbG9uZyBhcyB0aGF0IHdvdWxkbid0IG92ZXJ3cml0ZSBhbnkgY3VzdG9tIHBhcmFtIGFsc28gY2FsbGVkICckcmF3JwogICAgICAgICAgICAvLyBUaGlzIGlzIGluIGNhc2UgdGhlIGRldmVsb3BlciB3YW50cyB0byByZWFjdCB0byBvdXRlciAoYmluZGluZykgb2JzZXJ2YWJpbGl0eSBzZXBhcmF0ZWx5IGZyb20gaW5uZXIKICAgICAgICAgICAgLy8gKG1vZGVsIHZhbHVlKSBvYnNlcnZhYmlsaXR5LCBvciBpbiBjYXNlIHRoZSBtb2RlbCB2YWx1ZSBvYnNlcnZhYmxlIGhhcyBzdWJvYnNlcnZhYmxlcy4KICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoJyRyYXcnKSkgewogICAgICAgICAgICAgICAgcmVzdWx0WyckcmF3J10gPSByYXdQYXJhbUNvbXB1dGVkVmFsdWVzOwogICAgICAgICAgICB9CgogICAgICAgICAgICByZXR1cm4gcmVzdWx0OwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIC8vIEZvciBjb25zaXN0ZW5jeSwgYWJzZW5jZSBvZiBhICJwYXJhbXMiIGF0dHJpYnV0ZSBpcyB0cmVhdGVkIHRoZSBzYW1lIGFzIHRoZSBwcmVzZW5jZSBvZgogICAgICAgICAgICAvLyBhbnkgZW1wdHkgb25lLiBPdGhlcndpc2UgY29tcG9uZW50IHZpZXdtb2RlbHMgbmVlZCBzcGVjaWFsIGNvZGUgdG8gY2hlY2sgd2hldGhlciBvciBub3QKICAgICAgICAgICAgLy8gJ3BhcmFtcycgb3IgJ3BhcmFtcy4kcmF3JyBpcyBudWxsL3VuZGVmaW5lZCBiZWZvcmUgcmVhZGluZyBzdWJwcm9wZXJ0aWVzLCB3aGljaCBpcyBhbm5veWluZy4KICAgICAgICAgICAgcmV0dXJuIHsgJyRyYXcnOiB7fSB9OwogICAgICAgIH0KICAgIH0KCiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQogICAgLy8gQ29tcGF0aWJpbGl0eSBjb2RlIGZvciBvbGRlciAocHJlLUhUTUw1KSBJRSBicm93c2VycwoKICAgIGlmIChrby51dGlscy5pZVZlcnNpb24gPCA5KSB7CiAgICAgICAgLy8gV2hlbmV2ZXIgeW91IHByZXJlZ2lzdGVyIGEgY29tcG9uZW50LCBlbmFibGUgaXQgYXMgYSBjdXN0b20gZWxlbWVudCBpbiB0aGUgY3VycmVudCBkb2N1bWVudAogICAgICAgIGtvLmNvbXBvbmVudHNbJ3JlZ2lzdGVyJ10gPSAoZnVuY3Rpb24ob3JpZ2luYWxGdW5jdGlvbikgewogICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY29tcG9uZW50TmFtZSkgewogICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wb25lbnROYW1lKTsgLy8gQWxsb3dzIElFPDkgdG8gcGFyc2UgbWFya3VwIGNvbnRhaW5pbmcgdGhlIGN1c3RvbSBlbGVtZW50CiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgICB9CiAgICAgICAgfSkoa28uY29tcG9uZW50c1sncmVnaXN0ZXInXSk7CgogICAgICAgIC8vIFdoZW5ldmVyIHlvdSBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCwgZW5hYmxlIGFsbCBwcmVyZWdpc3RlcmVkIGNvbXBvbmVudCBuYW1lcyBhcyBjdXN0b20gZWxlbWVudHMKICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCB0byBtYWtlIGlubmVyU2hpdi9qUXVlcnkgSFRNTCBwYXJzaW5nIGNvcnJlY3RseSBoYW5kbGUgdGhlIGN1c3RvbSBlbGVtZW50cwogICAgICAgIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPSAoZnVuY3Rpb24ob3JpZ2luYWxGdW5jdGlvbikgewogICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICB2YXIgbmV3RG9jRnJhZyA9IG9yaWdpbmFsRnVuY3Rpb24oKSwKICAgICAgICAgICAgICAgICAgICBhbGxDb21wb25lbnRzID0ga28uY29tcG9uZW50cy5fYWxsUmVnaXN0ZXJlZENvbXBvbmVudHM7CiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb21wb25lbnROYW1lIGluIGFsbENvbXBvbmVudHMpIHsKICAgICAgICAgICAgICAgICAgICBpZiAoYWxsQ29tcG9uZW50cy5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnROYW1lKSkgewogICAgICAgICAgICAgICAgICAgICAgICBuZXdEb2NGcmFnLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50TmFtZSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RvY0ZyYWc7CiAgICAgICAgICAgIH07CiAgICAgICAgfSkoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCk7CiAgICB9Cn0pKCk7KGZ1bmN0aW9uKHVuZGVmaW5lZCkgewoKICAgIHZhciBjb21wb25lbnRMb2FkaW5nT3BlcmF0aW9uVW5pcXVlSWQgPSAwOwoKICAgIGtvLmJpbmRpbmdIYW5kbGVyc1snY29tcG9uZW50J10gPSB7CiAgICAgICAgJ2luaXQnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBpZ25vcmVkMSwgaWdub3JlZDIsIGJpbmRpbmdDb250ZXh0KSB7CiAgICAgICAgICAgIHZhciBjdXJyZW50Vmlld01vZGVsLAogICAgICAgICAgICAgICAgY3VycmVudExvYWRpbmdPcGVyYXRpb25JZCwKICAgICAgICAgICAgICAgIGRpc3Bvc2VBc3NvY2lhdGVkQ29tcG9uZW50Vmlld01vZGVsID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Vmlld01vZGVsRGlzcG9zZSA9IGN1cnJlbnRWaWV3TW9kZWwgJiYgY3VycmVudFZpZXdNb2RlbFsnZGlzcG9zZSddOwogICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFZpZXdNb2RlbERpc3Bvc2UgPT09ICdmdW5jdGlvbicpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbERpc3Bvc2UuY2FsbChjdXJyZW50Vmlld01vZGVsKTsKICAgICAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgICAgIC8vIEFueSBpbi1mbGlnaHQgbG9hZGluZyBvcGVyYXRpb24gaXMgbm8gbG9uZ2VyIHJlbGV2YW50LCBzbyBtYWtlIHN1cmUgd2UgaWdub3JlIGl0cyBjb21wbGV0aW9uCiAgICAgICAgICAgICAgICAgICAgY3VycmVudExvYWRpbmdPcGVyYXRpb25JZCA9IG51bGw7CiAgICAgICAgICAgICAgICB9OwoKICAgICAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhlbGVtZW50LCBkaXNwb3NlQXNzb2NpYXRlZENvbXBvbmVudFZpZXdNb2RlbCk7CgogICAgICAgICAgICBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSksCiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSwgY29tcG9uZW50UGFyYW1zOwoKICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7CiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSA9IHZhbHVlOwogICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZVsnbmFtZSddKTsKICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRQYXJhbXMgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlWydwYXJhbXMnXSk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lKSB7CiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgbmFtZSBzcGVjaWZpZWQnKTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICB2YXIgbG9hZGluZ09wZXJhdGlvbklkID0gY3VycmVudExvYWRpbmdPcGVyYXRpb25JZCA9ICsrY29tcG9uZW50TG9hZGluZ09wZXJhdGlvblVuaXF1ZUlkOwogICAgICAgICAgICAgICAga28uY29tcG9uZW50cy5nZXQoY29tcG9uZW50TmFtZSwgZnVuY3Rpb24oY29tcG9uZW50RGVmaW5pdGlvbikgewogICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBjdXJyZW50IGxvYWQgb3BlcmF0aW9uIGZvciB0aGlzIGVsZW1lbnQsIGlnbm9yZSBpdC4KICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudExvYWRpbmdPcGVyYXRpb25JZCAhPT0gbG9hZGluZ09wZXJhdGlvbklkKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHByZXZpb3VzIHN0YXRlCiAgICAgICAgICAgICAgICAgICAgZGlzcG9zZUFzc29jaWF0ZWRDb21wb25lbnRWaWV3TW9kZWwoKTsKCiAgICAgICAgICAgICAgICAgICAgLy8gSW5zdGFudGlhdGUgYW5kIGJpbmQgbmV3IGNvbXBvbmVudC4gSW1wbGljaXRseSB0aGlzIGNsZWFucyBhbnkgb2xkIERPTSBub2Rlcy4KICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudERlZmluaXRpb24pIHsKICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNvbXBvbmVudCBcJycgKyBjb21wb25lbnROYW1lICsgJ1wnJyk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGNsb25lVGVtcGxhdGVJbnRvRWxlbWVudChjb21wb25lbnROYW1lLCBjb21wb25lbnREZWZpbml0aW9uLCBlbGVtZW50KTsKICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50Vmlld01vZGVsID0gY3JlYXRlVmlld01vZGVsKGNvbXBvbmVudERlZmluaXRpb24sIGVsZW1lbnQsIGNvbXBvbmVudFBhcmFtcyksCiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQmluZGluZ0NvbnRleHQgPSBiaW5kaW5nQ29udGV4dFsnY3JlYXRlQ2hpbGRDb250ZXh0J10oY29tcG9uZW50Vmlld01vZGVsKTsKICAgICAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsID0gY29tcG9uZW50Vmlld01vZGVsOwogICAgICAgICAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzKGNoaWxkQmluZGluZ0NvbnRleHQsIGVsZW1lbnQpOwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0sIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50IH0pOwoKICAgICAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9OwogICAgICAgIH0KICAgIH07CgogICAga28udmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1snY29tcG9uZW50J10gPSB0cnVlOwoKICAgIGZ1bmN0aW9uIGNsb25lVGVtcGxhdGVJbnRvRWxlbWVudChjb21wb25lbnROYW1lLCBjb21wb25lbnREZWZpbml0aW9uLCBlbGVtZW50KSB7CiAgICAgICAgdmFyIHRlbXBsYXRlID0gY29tcG9uZW50RGVmaW5pdGlvblsndGVtcGxhdGUnXTsKICAgICAgICBpZiAoIXRlbXBsYXRlKSB7CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IFwnJyArIGNvbXBvbmVudE5hbWUgKyAnXCcgaGFzIG5vIHRlbXBsYXRlJyk7CiAgICAgICAgfQoKICAgICAgICB2YXIgY2xvbmVkTm9kZXNBcnJheSA9IGtvLnV0aWxzLmNsb25lTm9kZXModGVtcGxhdGUpOwogICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW4oZWxlbWVudCwgY2xvbmVkTm9kZXNBcnJheSk7CiAgICB9CgogICAgZnVuY3Rpb24gY3JlYXRlVmlld01vZGVsKGNvbXBvbmVudERlZmluaXRpb24sIGVsZW1lbnQsIGNvbXBvbmVudFBhcmFtcykgewogICAgICAgIHZhciBjb21wb25lbnRWaWV3TW9kZWxGYWN0b3J5ID0gY29tcG9uZW50RGVmaW5pdGlvblsnY3JlYXRlVmlld01vZGVsJ107CiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFZpZXdNb2RlbEZhY3RvcnkKICAgICAgICAgICAgPyBjb21wb25lbnRWaWV3TW9kZWxGYWN0b3J5LmNhbGwoY29tcG9uZW50RGVmaW5pdGlvbiwgY29tcG9uZW50UGFyYW1zLCB7IGVsZW1lbnQ6IGVsZW1lbnQgfSkKICAgICAgICAgICAgOiBjb21wb25lbnRQYXJhbXM7IC8vIFRlbXBsYXRlLW9ubHkgY29tcG9uZW50CiAgICB9Cgp9KSgpOwp2YXIgYXR0ckh0bWxUb0phdmFzY3JpcHRNYXAgPSB7ICdjbGFzcyc6ICdjbGFzc05hbWUnLCAnZm9yJzogJ2h0bWxGb3InIH07CmtvLmJpbmRpbmdIYW5kbGVyc1snYXR0ciddID0gewogICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzKSB7CiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpIHx8IHt9OwogICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2godmFsdWUsIGZ1bmN0aW9uKGF0dHJOYW1lLCBhdHRyVmFsdWUpIHsKICAgICAgICAgICAgYXR0clZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhdHRyVmFsdWUpOwoKICAgICAgICAgICAgLy8gVG8gY292ZXIgY2FzZXMgbGlrZSAiYXR0cjogeyBjaGVja2VkOnNvbWVQcm9wIH0iLCB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgYXR0cmlidXRlIGVudGlyZWx5CiAgICAgICAgICAgIC8vIHdoZW4gc29tZVByb3AgaXMgYSAibm8gdmFsdWUiLWxpa2UgdmFsdWUgKHN0cmljdGx5IG51bGwsIGZhbHNlLCBvciB1bmRlZmluZWQpCiAgICAgICAgICAgIC8vIChiZWNhdXNlIHRoZSBhYnNlbmNlIG9mIHRoZSAiY2hlY2tlZCIgYXR0ciBpcyBob3cgdG8gbWFyayBhbiBlbGVtZW50IGFzIG5vdCBjaGVja2VkLCBldGMuKQogICAgICAgICAgICB2YXIgdG9SZW1vdmUgPSAoYXR0clZhbHVlID09PSBmYWxzZSkgfHwgKGF0dHJWYWx1ZSA9PT0gbnVsbCkgfHwgKGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKTsKICAgICAgICAgICAgaWYgKHRvUmVtb3ZlKQogICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpOwoKICAgICAgICAgICAgLy8gSW4gSUUgPD0gNyBhbmQgSUU4IFF1aXJrcyBNb2RlLCB5b3UgaGF2ZSB0byB1c2UgdGhlIEphdmFzY3JpcHQgcHJvcGVydHkgbmFtZSBpbnN0ZWFkIG9mIHRoZQogICAgICAgICAgICAvLyBIVE1MIGF0dHJpYnV0ZSBuYW1lIGZvciBjZXJ0YWluIGF0dHJpYnV0ZXMuIElFOCBTdGFuZGFyZHMgTW9kZSBzdXBwb3J0cyB0aGUgY29ycmVjdCBiZWhhdmlvciwKICAgICAgICAgICAgLy8gYnV0IGluc3RlYWQgb2YgZmlndXJpbmcgb3V0IHRoZSBtb2RlLCB3ZSdsbCBqdXN0IHNldCB0aGUgYXR0cmlidXRlIHRocm91Z2ggdGhlIEphdmFzY3JpcHQKICAgICAgICAgICAgLy8gcHJvcGVydHkgZm9yIElFIDw9IDguCiAgICAgICAgICAgIGlmIChrby51dGlscy5pZVZlcnNpb24gPD0gOCAmJiBhdHRyTmFtZSBpbiBhdHRySHRtbFRvSmF2YXNjcmlwdE1hcCkgewogICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRySHRtbFRvSmF2YXNjcmlwdE1hcFthdHRyTmFtZV07CiAgICAgICAgICAgICAgICBpZiAodG9SZW1vdmUpCiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpOwogICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbYXR0ck5hbWVdID0gYXR0clZhbHVlOwogICAgICAgICAgICB9IGVsc2UgaWYgKCF0b1JlbW92ZSkgewogICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZS50b1N0cmluZygpKTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLy8gVHJlYXQgIm5hbWUiIHNwZWNpYWxseSAtIGFsdGhvdWdoIHlvdSBjYW4gdGhpbmsgb2YgaXQgYXMgYW4gYXR0cmlidXRlLCBpdCBhbHNvIG5lZWRzCiAgICAgICAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgb24gb2xkZXIgdmVyc2lvbnMgb2YgSUUgKGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9wdWxsLzMzMykKICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGJlaW5nIGNhc2Utc2Vuc2l0aXZlIGhlcmUgYmVjYXVzZSBYSFRNTCB3b3VsZCByZWdhcmQgIk5hbWUiIGFzIGEgZGlmZmVyZW50IHRoaW5nCiAgICAgICAgICAgIC8vIGVudGlyZWx5LCBhbmQgdGhlcmUncyBubyBzdHJvbmcgcmVhc29uIHRvIGFsbG93IGZvciBzdWNoIGNhc2luZyBpbiBIVE1MLgogICAgICAgICAgICBpZiAoYXR0ck5hbWUgPT09ICJuYW1lIikgewogICAgICAgICAgICAgICAga28udXRpbHMuc2V0RWxlbWVudE5hbWUoZWxlbWVudCwgdG9SZW1vdmUgPyAiIiA6IGF0dHJWYWx1ZS50b1N0cmluZygpKTsKICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgfQp9OwooZnVuY3Rpb24oKSB7Cgprby5iaW5kaW5nSGFuZGxlcnNbJ2NoZWNrZWQnXSA9IHsKICAgICdhZnRlcic6IFsndmFsdWUnLCAnYXR0ciddLAogICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHsKICAgICAgICB2YXIgY2hlY2tlZFZhbHVlID0ga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAvLyBUcmVhdCAidmFsdWUiIGxpa2UgImNoZWNrZWRWYWx1ZSIgd2hlbiBpdCBpcyBpbmNsdWRlZCB3aXRoICJjaGVja2VkIiBiaW5kaW5nCiAgICAgICAgICAgIGlmIChhbGxCaW5kaW5nc1snaGFzJ10oJ2NoZWNrZWRWYWx1ZScpKSB7CiAgICAgICAgICAgICAgICByZXR1cm4ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhbGxCaW5kaW5ncy5nZXQoJ2NoZWNrZWRWYWx1ZScpKTsKICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxCaW5kaW5nc1snaGFzJ10oJ3ZhbHVlJykpIHsKICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFsbEJpbmRpbmdzLmdldCgndmFsdWUnKSk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlOwogICAgICAgIH0pOwoKICAgICAgICBmdW5jdGlvbiB1cGRhdGVNb2RlbCgpIHsKICAgICAgICAgICAgLy8gVGhpcyB1cGRhdGVzIHRoZSBtb2RlbCB2YWx1ZSBmcm9tIHRoZSB2aWV3IHZhbHVlLgogICAgICAgICAgICAvLyBJdCBydW5zIGluIHJlc3BvbnNlIHRvIERPTSBldmVudHMgKGNsaWNrKSBhbmQgY2hhbmdlcyBpbiBjaGVja2VkVmFsdWUuCiAgICAgICAgICAgIHZhciBpc0NoZWNrZWQgPSBlbGVtZW50LmNoZWNrZWQsCiAgICAgICAgICAgICAgICBlbGVtVmFsdWUgPSB1c2VDaGVja2VkVmFsdWUgPyBjaGVja2VkVmFsdWUoKSA6IGlzQ2hlY2tlZDsKCiAgICAgICAgICAgIC8vIFdoZW4gd2UncmUgZmlyc3Qgc2V0dGluZyB1cCB0aGlzIGNvbXB1dGVkLCBkb24ndCBjaGFuZ2UgYW55IG1vZGVsIHN0YXRlLgogICAgICAgICAgICBpZiAoa28uY29tcHV0ZWRDb250ZXh0LmlzSW5pdGlhbCgpKSB7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC8vIFdlIGNhbiBpZ25vcmUgdW5jaGVja2VkIHJhZGlvIGJ1dHRvbnMsIGJlY2F1c2Ugc29tZSBvdGhlciByYWRpbwogICAgICAgICAgICAvLyBidXR0b24gd2lsbCBiZSBnZXR0aW5nIGNoZWNrZWQsIGFuZCB0aGF0IG9uZSBjYW4gdGFrZSBjYXJlIG9mIHVwZGF0aW5nIHN0YXRlLgogICAgICAgICAgICBpZiAoaXNSYWRpbyAmJiAhaXNDaGVja2VkKSB7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0ga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUodmFsdWVBY2Nlc3Nvcik7CiAgICAgICAgICAgIGlmIChpc1ZhbHVlQXJyYXkpIHsKICAgICAgICAgICAgICAgIGlmIChvbGRFbGVtVmFsdWUgIT09IGVsZW1WYWx1ZSkgewogICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UncmUgcmVzcG9uZGluZyB0byB0aGUgY2hlY2tlZFZhbHVlIGNoYW5naW5nLCBhbmQgdGhlIGVsZW1lbnQgaXMKICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgY2hlY2tlZCwgcmVwbGFjZSB0aGUgb2xkIGVsZW0gdmFsdWUgd2l0aCB0aGUgbmV3IGVsZW0gdmFsdWUKICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgbW9kZWwgYXJyYXkuCiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkgewogICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5hZGRPclJlbW92ZUl0ZW0obW9kZWxWYWx1ZSwgZWxlbVZhbHVlLCB0cnVlKTsKICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYWRkT3JSZW1vdmVJdGVtKG1vZGVsVmFsdWUsIG9sZEVsZW1WYWx1ZSwgZmFsc2UpOwogICAgICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAgICAgb2xkRWxlbVZhbHVlID0gZWxlbVZhbHVlOwogICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHdlJ3JlIHJlc3BvbmRpbmcgdG8gdGhlIHVzZXIgaGF2aW5nIGNoZWNrZWQvdW5jaGVja2VkIGEgY2hlY2tib3gsCiAgICAgICAgICAgICAgICAgICAgLy8gYWRkL3JlbW92ZSB0aGUgZWxlbWVudCB2YWx1ZSB0byB0aGUgbW9kZWwgYXJyYXkuCiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYWRkT3JSZW1vdmVJdGVtKG1vZGVsVmFsdWUsIGVsZW1WYWx1ZSwgaXNDaGVja2VkKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcud3JpdGVWYWx1ZVRvUHJvcGVydHkobW9kZWxWYWx1ZSwgYWxsQmluZGluZ3MsICdjaGVja2VkJywgZWxlbVZhbHVlLCB0cnVlKTsKICAgICAgICAgICAgfQogICAgICAgIH07CgogICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoKSB7CiAgICAgICAgICAgIC8vIFRoaXMgdXBkYXRlcyB0aGUgdmlldyB2YWx1ZSBmcm9tIHRoZSBtb2RlbCB2YWx1ZS4KICAgICAgICAgICAgLy8gSXQgcnVucyBpbiByZXNwb25zZSB0byBjaGFuZ2VzIGluIHRoZSBib3VuZCAoY2hlY2tlZCkgdmFsdWUuCiAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpOwoKICAgICAgICAgICAgaWYgKGlzVmFsdWVBcnJheSkgewogICAgICAgICAgICAgICAgLy8gV2hlbiBhIGNoZWNrYm94IGlzIGJvdW5kIHRvIGFuIGFycmF5LCBiZWluZyBjaGVja2VkIHJlcHJlc2VudHMgaXRzIHZhbHVlIGJlaW5nIHByZXNlbnQgaW4gdGhhdCBhcnJheQogICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0ga28udXRpbHMuYXJyYXlJbmRleE9mKG1vZGVsVmFsdWUsIGNoZWNrZWRWYWx1ZSgpKSA+PSAwOwogICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2hlY2tib3gpIHsKICAgICAgICAgICAgICAgIC8vIFdoZW4gYSBjaGVja2JveCBpcyBib3VuZCB0byBhbnkgb3RoZXIgdmFsdWUgKG5vdCBhbiBhcnJheSksIGJlaW5nIGNoZWNrZWQgcmVwcmVzZW50cyB0aGUgdmFsdWUgYmVpbmcgdHJ1ZWlzaAogICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gbW9kZWxWYWx1ZTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIC8vIEZvciByYWRpbyBidXR0b25zLCBiZWluZyBjaGVja2VkIG1lYW5zIHRoYXQgdGhlIHJhZGlvIGJ1dHRvbidzIHZhbHVlIGNvcnJlc3BvbmRzIHRvIHRoZSBtb2RlbCB2YWx1ZQogICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gKGNoZWNrZWRWYWx1ZSgpID09PSBtb2RlbFZhbHVlKTsKICAgICAgICAgICAgfQogICAgICAgIH07CgogICAgICAgIHZhciBpc0NoZWNrYm94ID0gZWxlbWVudC50eXBlID09ICJjaGVja2JveCIsCiAgICAgICAgICAgIGlzUmFkaW8gPSBlbGVtZW50LnR5cGUgPT0gInJhZGlvIjsKCiAgICAgICAgLy8gT25seSBiaW5kIHRvIGNoZWNrIGJveGVzIGFuZCByYWRpbyBidXR0b25zCiAgICAgICAgaWYgKCFpc0NoZWNrYm94ICYmICFpc1JhZGlvKSB7CiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB9CgogICAgICAgIHZhciBpc1ZhbHVlQXJyYXkgPSBpc0NoZWNrYm94ICYmIChrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSkgaW5zdGFuY2VvZiBBcnJheSksCiAgICAgICAgICAgIG9sZEVsZW1WYWx1ZSA9IGlzVmFsdWVBcnJheSA/IGNoZWNrZWRWYWx1ZSgpIDogdW5kZWZpbmVkLAogICAgICAgICAgICB1c2VDaGVja2VkVmFsdWUgPSBpc1JhZGlvIHx8IGlzVmFsdWVBcnJheTsKCiAgICAgICAgLy8gSUUgNiB3b24ndCBhbGxvdyByYWRpbyBidXR0b25zIHRvIGJlIHNlbGVjdGVkIHVubGVzcyB0aGV5IGhhdmUgYSBuYW1lCiAgICAgICAgaWYgKGlzUmFkaW8gJiYgIWVsZW1lbnQubmFtZSkKICAgICAgICAgICAga28uYmluZGluZ0hhbmRsZXJzWyd1bmlxdWVOYW1lJ11bJ2luaXQnXShlbGVtZW50LCBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWUgfSk7CgogICAgICAgIC8vIFNldCB1cCB0d28gY29tcHV0ZWRzIHRvIHVwZGF0ZSB0aGUgYmluZGluZzoKCiAgICAgICAgLy8gVGhlIGZpcnN0IHJlc3BvbmRzIHRvIGNoYW5nZXMgaW4gdGhlIGNoZWNrZWRWYWx1ZSB2YWx1ZSBhbmQgdG8gZWxlbWVudCBjbGlja3MKICAgICAgICBrby5jb21wdXRlZCh1cGRhdGVNb2RlbCwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW1lbnQgfSk7CiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgImNsaWNrIiwgdXBkYXRlTW9kZWwpOwoKICAgICAgICAvLyBUaGUgc2Vjb25kIHJlc3BvbmRzIHRvIGNoYW5nZXMgaW4gdGhlIG1vZGVsIHZhbHVlICh0aGUgb25lIGFzc29jaWF0ZWQgd2l0aCB0aGUgY2hlY2tlZCBiaW5kaW5nKQogICAgICAgIGtvLmNvbXB1dGVkKHVwZGF0ZVZpZXcsIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50IH0pOwogICAgfQp9Owprby5leHByZXNzaW9uUmV3cml0aW5nLnR3b1dheUJpbmRpbmdzWydjaGVja2VkJ10gPSB0cnVlOwoKa28uYmluZGluZ0hhbmRsZXJzWydjaGVja2VkVmFsdWUnXSA9IHsKICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvcikgewogICAgICAgIGVsZW1lbnQudmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7CiAgICB9Cn07Cgp9KSgpO3ZhciBjbGFzc2VzV3JpdHRlbkJ5QmluZGluZ0tleSA9ICdfX2tvX19jc3NWYWx1ZSc7CmtvLmJpbmRpbmdIYW5kbGVyc1snY3NzJ10gPSB7CiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHsKICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7CiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAib2JqZWN0IikgewogICAgICAgICAgICBrby51dGlscy5vYmplY3RGb3JFYWNoKHZhbHVlLCBmdW5jdGlvbihjbGFzc05hbWUsIHNob3VsZEhhdmVDbGFzcykgewogICAgICAgICAgICAgICAgc2hvdWxkSGF2ZUNsYXNzID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShzaG91bGRIYXZlQ2xhc3MpOwogICAgICAgICAgICAgICAga28udXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgc2hvdWxkSGF2ZUNsYXNzKTsKICAgICAgICAgICAgfSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUgfHwgJycpOyAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgdHJ5IHRvIHN0b3JlIG9yIHNldCBhIG5vbi1zdHJpbmcgdmFsdWUKICAgICAgICAgICAga28udXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzKGVsZW1lbnQsIGVsZW1lbnRbY2xhc3Nlc1dyaXR0ZW5CeUJpbmRpbmdLZXldLCBmYWxzZSk7CiAgICAgICAgICAgIGVsZW1lbnRbY2xhc3Nlc1dyaXR0ZW5CeUJpbmRpbmdLZXldID0gdmFsdWU7CiAgICAgICAgICAgIGtvLnV0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzcyhlbGVtZW50LCB2YWx1ZSwgdHJ1ZSk7CiAgICAgICAgfQogICAgfQp9Owprby5iaW5kaW5nSGFuZGxlcnNbJ2VuYWJsZSddID0gewogICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7CiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpOwogICAgICAgIGlmICh2YWx1ZSAmJiBlbGVtZW50LmRpc2FibGVkKQogICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgiZGlzYWJsZWQiKTsKICAgICAgICBlbHNlIGlmICgoIXZhbHVlKSAmJiAoIWVsZW1lbnQuZGlzYWJsZWQpKQogICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTsKICAgIH0KfTsKCmtvLmJpbmRpbmdIYW5kbGVyc1snZGlzYWJsZSddID0gewogICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7CiAgICAgICAga28uYmluZGluZ0hhbmRsZXJzWydlbmFibGUnXVsndXBkYXRlJ10oZWxlbWVudCwgZnVuY3Rpb24oKSB7IHJldHVybiAha28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpIH0pOwogICAgfQp9OwovLyBGb3IgY2VydGFpbiBjb21tb24gZXZlbnRzIChjdXJyZW50bHkganVzdCAnY2xpY2snKSwgYWxsb3cgYSBzaW1wbGlmaWVkIGRhdGEtYmluZGluZyBzeW50YXgKLy8gZS5nLiBjbGljazpoYW5kbGVyIGluc3RlYWQgb2YgdGhlIHVzdWFsIGZ1bGwtbGVuZ3RoIGV2ZW50OntjbGljazpoYW5kbGVyfQpmdW5jdGlvbiBtYWtlRXZlbnRIYW5kbGVyU2hvcnRjdXQoZXZlbnROYW1lKSB7CiAgICBrby5iaW5kaW5nSGFuZGxlcnNbZXZlbnROYW1lXSA9IHsKICAgICAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7CiAgICAgICAgICAgIHZhciBuZXdWYWx1ZUFjY2Vzc29yID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9OwogICAgICAgICAgICAgICAgcmVzdWx0W2V2ZW50TmFtZV0gPSB2YWx1ZUFjY2Vzc29yKCk7CiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0OwogICAgICAgICAgICB9OwogICAgICAgICAgICByZXR1cm4ga28uYmluZGluZ0hhbmRsZXJzWydldmVudCddWydpbml0J10uY2FsbCh0aGlzLCBlbGVtZW50LCBuZXdWYWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncywgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCk7CiAgICAgICAgfQogICAgfQp9Cgprby5iaW5kaW5nSGFuZGxlcnNbJ2V2ZW50J10gPSB7CiAgICAnaW5pdCcgOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHsKICAgICAgICB2YXIgZXZlbnRzVG9IYW5kbGUgPSB2YWx1ZUFjY2Vzc29yKCkgfHwge307CiAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaChldmVudHNUb0hhbmRsZSwgZnVuY3Rpb24oZXZlbnROYW1lKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lID09ICJzdHJpbmciKSB7CiAgICAgICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBldmVudE5hbWUsIGZ1bmN0aW9uIChldmVudCkgewogICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyUmV0dXJuVmFsdWU7CiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJGdW5jdGlvbiA9IHZhbHVlQWNjZXNzb3IoKVtldmVudE5hbWVdOwogICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlckZ1bmN0aW9uKQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47CgogICAgICAgICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRha2UgYWxsIHRoZSBldmVudCBhcmdzLCBhbmQgcHJlZml4IHdpdGggdGhlIHZpZXdtb2RlbAogICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJnc0ZvckhhbmRsZXIgPSBrby51dGlscy5tYWtlQXJyYXkoYXJndW1lbnRzKTsKICAgICAgICAgICAgICAgICAgICAgICAgdmlld01vZGVsID0gYmluZGluZ0NvbnRleHRbJyRkYXRhJ107CiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NGb3JIYW5kbGVyLnVuc2hpZnQodmlld01vZGVsKTsKICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlclJldHVyblZhbHVlID0gaGFuZGxlckZ1bmN0aW9uLmFwcGx5KHZpZXdNb2RlbCwgYXJnc0ZvckhhbmRsZXIpOwogICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyUmV0dXJuVmFsdWUgIT09IHRydWUpIHsgLy8gTm9ybWFsbHkgd2Ugd2FudCB0byBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLiBEZXZlbG9wZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmUgZXhwbGljaXRseSByZXR1cm5pbmcgdHJ1ZS4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgICAgIHZhciBidWJibGUgPSBhbGxCaW5kaW5ncy5nZXQoZXZlbnROYW1lICsgJ0J1YmJsZScpICE9PSBmYWxzZTsKICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1YmJsZSkgewogICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0KICAgICAgICB9KTsKICAgIH0KfTsKLy8gImZvcmVhY2g6IHNvbWVFeHByZXNzaW9uIiBpcyBlcXVpdmFsZW50IHRvICJ0ZW1wbGF0ZTogeyBmb3JlYWNoOiBzb21lRXhwcmVzc2lvbiB9IgovLyAiZm9yZWFjaDogeyBkYXRhOiBzb21lRXhwcmVzc2lvbiwgYWZ0ZXJBZGQ6IG15Zm4gfSIgaXMgZXF1aXZhbGVudCB0byAidGVtcGxhdGU6IHsgZm9yZWFjaDogc29tZUV4cHJlc3Npb24sIGFmdGVyQWRkOiBteWZuIH0iCmtvLmJpbmRpbmdIYW5kbGVyc1snZm9yZWFjaCddID0gewogICAgbWFrZVRlbXBsYXRlVmFsdWVBY2Nlc3NvcjogZnVuY3Rpb24odmFsdWVBY2Nlc3NvcikgewogICAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCksCiAgICAgICAgICAgICAgICB1bndyYXBwZWRWYWx1ZSA9IGtvLnV0aWxzLnBlZWtPYnNlcnZhYmxlKG1vZGVsVmFsdWUpOyAgICAvLyBVbndyYXAgd2l0aG91dCBzZXR0aW5nIGEgZGVwZW5kZW5jeSBoZXJlCgogICAgICAgICAgICAvLyBJZiB1bndyYXBwZWRWYWx1ZSBpcyB0aGUgYXJyYXksIHBhc3MgaW4gdGhlIHdyYXBwZWQgdmFsdWUgb24gaXRzIG93bgogICAgICAgICAgICAvLyBUaGUgdmFsdWUgd2lsbCBiZSB1bndyYXBwZWQgYW5kIHRyYWNrZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZSBiaW5kaW5nCiAgICAgICAgICAgIC8vIChTZWUgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy81MjMpCiAgICAgICAgICAgIGlmICgoIXVud3JhcHBlZFZhbHVlKSB8fCB0eXBlb2YgdW53cmFwcGVkVmFsdWUubGVuZ3RoID09ICJudW1iZXIiKQogICAgICAgICAgICAgICAgcmV0dXJuIHsgJ2ZvcmVhY2gnOiBtb2RlbFZhbHVlLCAndGVtcGxhdGVFbmdpbmUnOiBrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5pbnN0YW5jZSB9OwoKICAgICAgICAgICAgLy8gSWYgdW53cmFwcGVkVmFsdWUuZGF0YSBpcyB0aGUgYXJyYXksIHByZXNlcnZlIGFsbCByZWxldmFudCBvcHRpb25zIGFuZCB1bndyYXAgYWdhaW4gdmFsdWUgc28gd2UgZ2V0IHVwZGF0ZXMKICAgICAgICAgICAga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtb2RlbFZhbHVlKTsKICAgICAgICAgICAgcmV0dXJuIHsKICAgICAgICAgICAgICAgICdmb3JlYWNoJzogdW53cmFwcGVkVmFsdWVbJ2RhdGEnXSwKICAgICAgICAgICAgICAgICdhcyc6IHVud3JhcHBlZFZhbHVlWydhcyddLAogICAgICAgICAgICAgICAgJ2luY2x1ZGVEZXN0cm95ZWQnOiB1bndyYXBwZWRWYWx1ZVsnaW5jbHVkZURlc3Ryb3llZCddLAogICAgICAgICAgICAgICAgJ2FmdGVyQWRkJzogdW53cmFwcGVkVmFsdWVbJ2FmdGVyQWRkJ10sCiAgICAgICAgICAgICAgICAnYmVmb3JlUmVtb3ZlJzogdW53cmFwcGVkVmFsdWVbJ2JlZm9yZVJlbW92ZSddLAogICAgICAgICAgICAgICAgJ2FmdGVyUmVuZGVyJzogdW53cmFwcGVkVmFsdWVbJ2FmdGVyUmVuZGVyJ10sCiAgICAgICAgICAgICAgICAnYmVmb3JlTW92ZSc6IHVud3JhcHBlZFZhbHVlWydiZWZvcmVNb3ZlJ10sCiAgICAgICAgICAgICAgICAnYWZ0ZXJNb3ZlJzogdW53cmFwcGVkVmFsdWVbJ2FmdGVyTW92ZSddLAogICAgICAgICAgICAgICAgJ3RlbXBsYXRlRW5naW5lJzoga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUuaW5zdGFuY2UKICAgICAgICAgICAgfTsKICAgICAgICB9OwogICAgfSwKICAgICdpbml0JzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHsKICAgICAgICByZXR1cm4ga28uYmluZGluZ0hhbmRsZXJzWyd0ZW1wbGF0ZSddWydpbml0J10oZWxlbWVudCwga28uYmluZGluZ0hhbmRsZXJzWydmb3JlYWNoJ10ubWFrZVRlbXBsYXRlVmFsdWVBY2Nlc3Nvcih2YWx1ZUFjY2Vzc29yKSk7CiAgICB9LAogICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7CiAgICAgICAgcmV0dXJuIGtvLmJpbmRpbmdIYW5kbGVyc1sndGVtcGxhdGUnXVsndXBkYXRlJ10oZWxlbWVudCwga28uYmluZGluZ0hhbmRsZXJzWydmb3JlYWNoJ10ubWFrZVRlbXBsYXRlVmFsdWVBY2Nlc3Nvcih2YWx1ZUFjY2Vzc29yKSwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpOwogICAgfQp9Owprby5leHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1snZm9yZWFjaCddID0gZmFsc2U7IC8vIENhbid0IHJld3JpdGUgY29udHJvbCBmbG93IGJpbmRpbmdzCmtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbJ2ZvcmVhY2gnXSA9IHRydWU7CnZhciBoYXNmb2N1c1VwZGF0aW5nUHJvcGVydHkgPSAnX19rb19oYXNmb2N1c1VwZGF0aW5nJzsKdmFyIGhhc2ZvY3VzTGFzdFZhbHVlID0gJ19fa29faGFzZm9jdXNMYXN0VmFsdWUnOwprby5iaW5kaW5nSGFuZGxlcnNbJ2hhc2ZvY3VzJ10gPSB7CiAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzKSB7CiAgICAgICAgdmFyIGhhbmRsZUVsZW1lbnRGb2N1c0NoYW5nZSA9IGZ1bmN0aW9uKGlzRm9jdXNlZCkgewogICAgICAgICAgICAvLyBXaGVyZSBwb3NzaWJsZSwgaWdub3JlIHdoaWNoIGV2ZW50IHdhcyByYWlzZWQgYW5kIGRldGVybWluZSBmb2N1cyBzdGF0ZSB1c2luZyBhY3RpdmVFbGVtZW50LAogICAgICAgICAgICAvLyBhcyB0aGlzIGF2b2lkcyBwaGFudG9tIGZvY3VzL2JsdXIgZXZlbnRzIHJhaXNlZCB3aGVuIGNoYW5naW5nIHRhYnMgaW4gbW9kZXJuIGJyb3dzZXJzLgogICAgICAgICAgICAvLyBIb3dldmVyLCBub3QgYWxsIEtPLXRhcmdldGVkIGJyb3dzZXJzIChGaXJlZm94IDIpIHN1cHBvcnQgYWN0aXZlRWxlbWVudC4gRm9yIHRob3NlIGJyb3dzZXJzLAogICAgICAgICAgICAvLyBwcmV2ZW50IGEgbG9zcyBvZiBmb2N1cyB3aGVuIGNoYW5naW5nIHRhYnMvd2luZG93cyBieSBzZXR0aW5nIGEgZmxhZyB0aGF0IHByZXZlbnRzIGhhc2ZvY3VzCiAgICAgICAgICAgIC8vIGZyb20gY2FsbGluZyAnYmx1cigpJyBvbiB0aGUgZWxlbWVudCB3aGVuIGl0IGxvc2VzIGZvY3VzLgogICAgICAgICAgICAvLyBEaXNjdXNzaW9uIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9wdWxsLzM1MgogICAgICAgICAgICBlbGVtZW50W2hhc2ZvY3VzVXBkYXRpbmdQcm9wZXJ0eV0gPSB0cnVlOwogICAgICAgICAgICB2YXIgb3duZXJEb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7CiAgICAgICAgICAgIGlmICgiYWN0aXZlRWxlbWVudCIgaW4gb3duZXJEb2MpIHsKICAgICAgICAgICAgICAgIHZhciBhY3RpdmU7CiAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IG93bmVyRG9jLmFjdGl2ZUVsZW1lbnQ7CiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHsKICAgICAgICAgICAgICAgICAgICAvLyBJRTkgdGhyb3dzIGlmIHlvdSBhY2Nlc3MgYWN0aXZlRWxlbWVudCBkdXJpbmcgcGFnZSBsb2FkIChzZWUgaXNzdWUgIzcwMykKICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSBvd25lckRvYy5ib2R5OwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgaXNGb2N1c2VkID0gKGFjdGl2ZSA9PT0gZWxlbWVudCk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCk7CiAgICAgICAgICAgIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcud3JpdGVWYWx1ZVRvUHJvcGVydHkobW9kZWxWYWx1ZSwgYWxsQmluZGluZ3MsICdoYXNmb2N1cycsIGlzRm9jdXNlZCwgdHJ1ZSk7CgogICAgICAgICAgICAvL2NhY2hlIHRoZSBsYXRlc3QgdmFsdWUsIHNvIHdlIGNhbiBhdm9pZCB1bm5lY2Vzc2FyaWx5IGNhbGxpbmcgZm9jdXMvYmx1ciBpbiB0aGUgdXBkYXRlIGZ1bmN0aW9uCiAgICAgICAgICAgIGVsZW1lbnRbaGFzZm9jdXNMYXN0VmFsdWVdID0gaXNGb2N1c2VkOwogICAgICAgICAgICBlbGVtZW50W2hhc2ZvY3VzVXBkYXRpbmdQcm9wZXJ0eV0gPSBmYWxzZTsKICAgICAgICB9OwogICAgICAgIHZhciBoYW5kbGVFbGVtZW50Rm9jdXNJbiA9IGhhbmRsZUVsZW1lbnRGb2N1c0NoYW5nZS5iaW5kKG51bGwsIHRydWUpOwogICAgICAgIHZhciBoYW5kbGVFbGVtZW50Rm9jdXNPdXQgPSBoYW5kbGVFbGVtZW50Rm9jdXNDaGFuZ2UuYmluZChudWxsLCBmYWxzZSk7CgogICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsICJmb2N1cyIsIGhhbmRsZUVsZW1lbnRGb2N1c0luKTsKICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCAiZm9jdXNpbiIsIGhhbmRsZUVsZW1lbnRGb2N1c0luKTsgLy8gRm9yIElFCiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgImJsdXIiLCAgaGFuZGxlRWxlbWVudEZvY3VzT3V0KTsKICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCAiZm9jdXNvdXQiLCAgaGFuZGxlRWxlbWVudEZvY3VzT3V0KTsgLy8gRm9yIElFCiAgICB9LAogICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHsKICAgICAgICB2YXIgdmFsdWUgPSAhIWtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTsgLy9mb3JjZSBib29sZWFuIHRvIGNvbXBhcmUgd2l0aCBsYXN0IHZhbHVlCiAgICAgICAgaWYgKCFlbGVtZW50W2hhc2ZvY3VzVXBkYXRpbmdQcm9wZXJ0eV0gJiYgZWxlbWVudFtoYXNmb2N1c0xhc3RWYWx1ZV0gIT09IHZhbHVlKSB7CiAgICAgICAgICAgIHZhbHVlID8gZWxlbWVudC5mb2N1cygpIDogZWxlbWVudC5ibHVyKCk7CiAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGtvLnV0aWxzLnRyaWdnZXJFdmVudCwgbnVsbCwgW2VsZW1lbnQsIHZhbHVlID8gImZvY3VzaW4iIDogImZvY3Vzb3V0Il0pOyAvLyBGb3IgSUUsIHdoaWNoIGRvZXNuJ3QgcmVsaWFibHkgZmlyZSAiZm9jdXMiIG9yICJibHVyIiBldmVudHMgc3luY2hyb25vdXNseQogICAgICAgIH0KICAgIH0KfTsKa28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5nc1snaGFzZm9jdXMnXSA9IHRydWU7Cgprby5iaW5kaW5nSGFuZGxlcnNbJ2hhc0ZvY3VzJ10gPSBrby5iaW5kaW5nSGFuZGxlcnNbJ2hhc2ZvY3VzJ107IC8vIE1ha2UgImhhc0ZvY3VzIiBhbiBhbGlhcwprby5leHByZXNzaW9uUmV3cml0aW5nLnR3b1dheUJpbmRpbmdzWydoYXNGb2N1cyddID0gdHJ1ZTsKa28uYmluZGluZ0hhbmRsZXJzWydodG1sJ10gPSB7CiAgICAnaW5pdCc6IGZ1bmN0aW9uKCkgewogICAgICAgIC8vIFByZXZlbnQgYmluZGluZyBvbiB0aGUgZHluYW1pY2FsbHktaW5qZWN0ZWQgSFRNTCAoYXMgZGV2ZWxvcGVycyBhcmUgdW5saWtlbHkgdG8gZXhwZWN0IHRoYXQsIGFuZCBpdCBoYXMgc2VjdXJpdHkgaW1wbGljYXRpb25zKQogICAgICAgIHJldHVybiB7ICdjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyc6IHRydWUgfTsKICAgIH0sCiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHsKICAgICAgICAvLyBzZXRIdG1sIHdpbGwgdW53cmFwIHRoZSB2YWx1ZSBpZiBuZWVkZWQKICAgICAgICBrby51dGlscy5zZXRIdG1sKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IoKSk7CiAgICB9Cn07Ci8vIE1ha2VzIGEgYmluZGluZyBsaWtlIHdpdGggb3IgaWYKZnVuY3Rpb24gbWFrZVdpdGhJZkJpbmRpbmcoYmluZGluZ0tleSwgaXNXaXRoLCBpc05vdCwgbWFrZUNvbnRleHRDYWxsYmFjaykgewogICAga28uYmluZGluZ0hhbmRsZXJzW2JpbmRpbmdLZXldID0gewogICAgICAgICdpbml0JzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHsKICAgICAgICAgICAgdmFyIGRpZERpc3BsYXlPbkxhc3RVcGRhdGUsCiAgICAgICAgICAgICAgICBzYXZlZE5vZGVzOwogICAgICAgICAgICBrby5jb21wdXRlZChmdW5jdGlvbigpIHsKICAgICAgICAgICAgICAgIHZhciBkYXRhVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSksCiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGlzcGxheSA9ICFpc05vdCAhPT0gIWRhdGFWYWx1ZSwgLy8gZXF1aXZhbGVudCB0byBpc05vdCA/ICFkYXRhVmFsdWUgOiAhIWRhdGFWYWx1ZQogICAgICAgICAgICAgICAgICAgIGlzRmlyc3RSZW5kZXIgPSAhc2F2ZWROb2RlcywKICAgICAgICAgICAgICAgICAgICBuZWVkc1JlZnJlc2ggPSBpc0ZpcnN0UmVuZGVyIHx8IGlzV2l0aCB8fCAoc2hvdWxkRGlzcGxheSAhPT0gZGlkRGlzcGxheU9uTGFzdFVwZGF0ZSk7CgogICAgICAgICAgICAgICAgaWYgKG5lZWRzUmVmcmVzaCkgewogICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgYSBjb3B5IG9mIHRoZSBpbm5lciBub2RlcyBvbiB0aGUgaW5pdGlhbCB1cGRhdGUsIGJ1dCBvbmx5IGlmIHdlIGhhdmUgZGVwZW5kZW5jaWVzLgogICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0UmVuZGVyICYmIGtvLmNvbXB1dGVkQ29udGV4dC5nZXREZXBlbmRlbmNpZXNDb3VudCgpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkTm9kZXMgPSBrby51dGlscy5jbG9uZU5vZGVzKGtvLnZpcnR1YWxFbGVtZW50cy5jaGlsZE5vZGVzKGVsZW1lbnQpLCB0cnVlIC8qIHNob3VsZENsZWFuTm9kZXMgKi8pOwogICAgICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZERpc3BsYXkpIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ZpcnN0UmVuZGVyKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuKGVsZW1lbnQsIGtvLnV0aWxzLmNsb25lTm9kZXMoc2F2ZWROb2RlcykpOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzKG1ha2VDb250ZXh0Q2FsbGJhY2sgPyBtYWtlQ29udGV4dENhbGxiYWNrKGJpbmRpbmdDb250ZXh0LCBkYXRhVmFsdWUpIDogYmluZGluZ0NvbnRleHQsIGVsZW1lbnQpOwogICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUoZWxlbWVudCk7CiAgICAgICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgICAgICBkaWREaXNwbGF5T25MYXN0VXBkYXRlID0gc2hvdWxkRGlzcGxheTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW1lbnQgfSk7CiAgICAgICAgICAgIHJldHVybiB7ICdjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyc6IHRydWUgfTsKICAgICAgICB9CiAgICB9OwogICAga28uZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNbYmluZGluZ0tleV0gPSBmYWxzZTsgLy8gQ2FuJ3QgcmV3cml0ZSBjb250cm9sIGZsb3cgYmluZGluZ3MKICAgIGtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbYmluZGluZ0tleV0gPSB0cnVlOwp9CgovLyBDb25zdHJ1Y3QgdGhlIGFjdHVhbCBiaW5kaW5nIGhhbmRsZXJzCm1ha2VXaXRoSWZCaW5kaW5nKCdpZicpOwptYWtlV2l0aElmQmluZGluZygnaWZub3QnLCBmYWxzZSAvKiBpc1dpdGggKi8sIHRydWUgLyogaXNOb3QgKi8pOwptYWtlV2l0aElmQmluZGluZygnd2l0aCcsIHRydWUgLyogaXNXaXRoICovLCBmYWxzZSAvKiBpc05vdCAqLywKICAgIGZ1bmN0aW9uKGJpbmRpbmdDb250ZXh0LCBkYXRhVmFsdWUpIHsKICAgICAgICByZXR1cm4gYmluZGluZ0NvbnRleHRbJ2NyZWF0ZUNoaWxkQ29udGV4dCddKGRhdGFWYWx1ZSk7CiAgICB9Cik7CnZhciBjYXB0aW9uUGxhY2Vob2xkZXIgPSB7fTsKa28uYmluZGluZ0hhbmRsZXJzWydvcHRpb25zJ10gPSB7CiAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQpIHsKICAgICAgICBpZiAoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpICE9PSAic2VsZWN0IikKICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJvcHRpb25zIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50cyIpOwoKICAgICAgICAvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIDxvcHRpb24+cy4KICAgICAgICB3aGlsZSAoZWxlbWVudC5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKDApOwogICAgICAgIH0KCiAgICAgICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBiaW5kaW5nIHByb2Nlc3NvciBkb2Vzbid0IHRyeSB0byBiaW5kIHRoZSBvcHRpb25zCiAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9OwogICAgfSwKICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHsKICAgICAgICBmdW5jdGlvbiBzZWxlY3RlZE9wdGlvbnMoKSB7CiAgICAgICAgICAgIHJldHVybiBrby51dGlscy5hcnJheUZpbHRlcihlbGVtZW50Lm9wdGlvbnMsIGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnNlbGVjdGVkOyB9KTsKICAgICAgICB9CgogICAgICAgIHZhciBzZWxlY3RXYXNQcmV2aW91c2x5RW1wdHkgPSBlbGVtZW50Lmxlbmd0aCA9PSAwOwogICAgICAgIHZhciBwcmV2aW91c1Njcm9sbFRvcCA9ICghc2VsZWN0V2FzUHJldmlvdXNseUVtcHR5ICYmIGVsZW1lbnQubXVsdGlwbGUpID8gZWxlbWVudC5zY3JvbGxUb3AgOiBudWxsOwogICAgICAgIHZhciB1bndyYXBwZWRBcnJheSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTsKICAgICAgICB2YXIgaW5jbHVkZURlc3Ryb3llZCA9IGFsbEJpbmRpbmdzLmdldCgnb3B0aW9uc0luY2x1ZGVEZXN0cm95ZWQnKTsKICAgICAgICB2YXIgYXJyYXlUb0RvbU5vZGVDaGlsZHJlbk9wdGlvbnMgPSB7fTsKICAgICAgICB2YXIgY2FwdGlvblZhbHVlOwogICAgICAgIHZhciBmaWx0ZXJlZEFycmF5OwogICAgICAgIHZhciBwcmV2aW91c1NlbGVjdGVkVmFsdWVzOwoKICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkgewogICAgICAgICAgICBwcmV2aW91c1NlbGVjdGVkVmFsdWVzID0ga28udXRpbHMuYXJyYXlNYXAoc2VsZWN0ZWRPcHRpb25zKCksIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBwcmV2aW91c1NlbGVjdGVkVmFsdWVzID0gZWxlbWVudC5zZWxlY3RlZEluZGV4ID49IDAgPyBbIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQub3B0aW9uc1tlbGVtZW50LnNlbGVjdGVkSW5kZXhdKSBdIDogW107CiAgICAgICAgfQoKICAgICAgICBpZiAodW53cmFwcGVkQXJyYXkpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiB1bndyYXBwZWRBcnJheS5sZW5ndGggPT0gInVuZGVmaW5lZCIpIC8vIENvZXJjZSBzaW5nbGUgdmFsdWUgaW50byBhcnJheQogICAgICAgICAgICAgICAgdW53cmFwcGVkQXJyYXkgPSBbdW53cmFwcGVkQXJyYXldOwoKICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBhbnkgZW50cmllcyBtYXJrZWQgYXMgZGVzdHJveWVkCiAgICAgICAgICAgIGZpbHRlcmVkQXJyYXkgPSBrby51dGlscy5hcnJheUZpbHRlcih1bndyYXBwZWRBcnJheSwgZnVuY3Rpb24oaXRlbSkgewogICAgICAgICAgICAgICAgcmV0dXJuIGluY2x1ZGVEZXN0cm95ZWQgfHwgaXRlbSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0gPT09IG51bGwgfHwgIWtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoaXRlbVsnX2Rlc3Ryb3knXSk7CiAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgLy8gSWYgY2FwdGlvbiBpcyBpbmNsdWRlZCwgYWRkIGl0IHRvIHRoZSBhcnJheQogICAgICAgICAgICBpZiAoYWxsQmluZGluZ3NbJ2hhcyddKCdvcHRpb25zQ2FwdGlvbicpKSB7CiAgICAgICAgICAgICAgICBjYXB0aW9uVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFsbEJpbmRpbmdzLmdldCgnb3B0aW9uc0NhcHRpb24nKSk7CiAgICAgICAgICAgICAgICAvLyBJZiBjYXB0aW9uIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkLCBkb24ndCBzaG93IGEgY2FwdGlvbgogICAgICAgICAgICAgICAgaWYgKGNhcHRpb25WYWx1ZSAhPT0gbnVsbCAmJiBjYXB0aW9uVmFsdWUgIT09IHVuZGVmaW5lZCkgewogICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQXJyYXkudW5zaGlmdChjYXB0aW9uUGxhY2Vob2xkZXIpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gSWYgYSBmYWxzeSB2YWx1ZSBpcyBwcm92aWRlZCAoZS5nLiBudWxsKSwgd2UnbGwgc2ltcGx5IGVtcHR5IHRoZSBzZWxlY3QgZWxlbWVudAogICAgICAgIH0KCiAgICAgICAgZnVuY3Rpb24gYXBwbHlUb09iamVjdChvYmplY3QsIHByZWRpY2F0ZSwgZGVmYXVsdFZhbHVlKSB7CiAgICAgICAgICAgIHZhciBwcmVkaWNhdGVUeXBlID0gdHlwZW9mIHByZWRpY2F0ZTsKICAgICAgICAgICAgaWYgKHByZWRpY2F0ZVR5cGUgPT0gImZ1bmN0aW9uIikgICAgLy8gR2l2ZW4gYSBmdW5jdGlvbjsgcnVuIGl0IGFnYWluc3QgdGhlIGRhdGEgdmFsdWUKICAgICAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGUob2JqZWN0KTsKICAgICAgICAgICAgZWxzZSBpZiAocHJlZGljYXRlVHlwZSA9PSAic3RyaW5nIikgLy8gR2l2ZW4gYSBzdHJpbmc7IHRyZWF0IGl0IGFzIGEgcHJvcGVydHkgbmFtZSBvbiB0aGUgZGF0YSB2YWx1ZQogICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdFtwcmVkaWNhdGVdOwogICAgICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHaXZlbiBubyBvcHRpb25zVGV4dCBhcmc7IHVzZSB0aGUgZGF0YSB2YWx1ZSBpdHNlbGYKICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7CiAgICAgICAgfQoKICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBjYW4gcnVuIGF0IHR3byBkaWZmZXJlbnQgdGltZXM6CiAgICAgICAgLy8gVGhlIGZpcnN0IGlzIHdoZW4gdGhlIHdob2xlIGFycmF5IGlzIGJlaW5nIHVwZGF0ZWQgZGlyZWN0bHkgZnJvbSB0aGlzIGJpbmRpbmcgaGFuZGxlci4KICAgICAgICAvLyBUaGUgc2Vjb25kIGlzIHdoZW4gYW4gb2JzZXJ2YWJsZSB2YWx1ZSBmb3IgYSBzcGVjaWZpYyBhcnJheSBlbnRyeSBpcyB1cGRhdGVkLgogICAgICAgIC8vIG9sZE9wdGlvbnMgd2lsbCBiZSBlbXB0eSBpbiB0aGUgZmlyc3QgY2FzZSwgYnV0IHdpbGwgYmUgZmlsbGVkIHdpdGggdGhlIHByZXZpb3VzbHkgZ2VuZXJhdGVkIG9wdGlvbiBpbiB0aGUgc2Vjb25kLgogICAgICAgIHZhciBpdGVtVXBkYXRlID0gZmFsc2U7CiAgICAgICAgZnVuY3Rpb24gb3B0aW9uRm9yQXJyYXlJdGVtKGFycmF5RW50cnksIGluZGV4LCBvbGRPcHRpb25zKSB7CiAgICAgICAgICAgIGlmIChvbGRPcHRpb25zLmxlbmd0aCkgewogICAgICAgICAgICAgICAgcHJldmlvdXNTZWxlY3RlZFZhbHVlcyA9IG9sZE9wdGlvbnNbMF0uc2VsZWN0ZWQgPyBbIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKG9sZE9wdGlvbnNbMF0pIF0gOiBbXTsKICAgICAgICAgICAgICAgIGl0ZW1VcGRhdGUgPSB0cnVlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHZhciBvcHRpb24gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgib3B0aW9uIik7CiAgICAgICAgICAgIGlmIChhcnJheUVudHJ5ID09PSBjYXB0aW9uUGxhY2Vob2xkZXIpIHsKICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldFRleHRDb250ZW50KG9wdGlvbiwgYWxsQmluZGluZ3MuZ2V0KCdvcHRpb25zQ2FwdGlvbicpKTsKICAgICAgICAgICAgICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZShvcHRpb24sIHVuZGVmaW5lZCk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAvLyBBcHBseSBhIHZhbHVlIHRvIHRoZSBvcHRpb24gZWxlbWVudAogICAgICAgICAgICAgICAgdmFyIG9wdGlvblZhbHVlID0gYXBwbHlUb09iamVjdChhcnJheUVudHJ5LCBhbGxCaW5kaW5ncy5nZXQoJ29wdGlvbnNWYWx1ZScpLCBhcnJheUVudHJ5KTsKICAgICAgICAgICAgICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZShvcHRpb24sIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUob3B0aW9uVmFsdWUpKTsKCiAgICAgICAgICAgICAgICAvLyBBcHBseSBzb21lIHRleHQgdG8gdGhlIG9wdGlvbiBlbGVtZW50CiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uVGV4dCA9IGFwcGx5VG9PYmplY3QoYXJyYXlFbnRyeSwgYWxsQmluZGluZ3MuZ2V0KCdvcHRpb25zVGV4dCcpLCBvcHRpb25WYWx1ZSk7CiAgICAgICAgICAgICAgICBrby51dGlscy5zZXRUZXh0Q29udGVudChvcHRpb24sIG9wdGlvblRleHQpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBbb3B0aW9uXTsKICAgICAgICB9CgogICAgICAgIC8vIEJ5IHVzaW5nIGEgYmVmb3JlUmVtb3ZlIGNhbGxiYWNrLCB3ZSBkZWxheSB0aGUgcmVtb3ZhbCB1bnRpbCBhZnRlciBuZXcgaXRlbXMgYXJlIGFkZGVkLiBUaGlzIGZpeGVzIGEgc2VsZWN0aW9uCiAgICAgICAgLy8gcHJvYmxlbSBpbiBJRTw9OCBhbmQgRmlyZWZveC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rbm9ja291dC9rbm9ja291dC9pc3N1ZXMvMTIwOAogICAgICAgIGFycmF5VG9Eb21Ob2RlQ2hpbGRyZW5PcHRpb25zWydiZWZvcmVSZW1vdmUnXSA9CiAgICAgICAgICAgIGZ1bmN0aW9uIChvcHRpb24pIHsKICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQob3B0aW9uKTsKICAgICAgICAgICAgfTsKCiAgICAgICAgZnVuY3Rpb24gc2V0U2VsZWN0aW9uQ2FsbGJhY2soYXJyYXlFbnRyeSwgbmV3T3B0aW9ucykgewogICAgICAgICAgICAvLyBJRTYgZG9lc24ndCBsaWtlIHVzIHRvIGFzc2lnbiBzZWxlY3Rpb24gdG8gT1BUSU9OIG5vZGVzIGJlZm9yZSB0aGV5J3JlIGFkZGVkIHRvIHRoZSBkb2N1bWVudC4KICAgICAgICAgICAgLy8gVGhhdCdzIHdoeSB3ZSBmaXJzdCBhZGRlZCB0aGVtIHdpdGhvdXQgc2VsZWN0aW9uLiBOb3cgaXQncyB0aW1lIHRvIHNldCB0aGUgc2VsZWN0aW9uLgogICAgICAgICAgICBpZiAocHJldmlvdXNTZWxlY3RlZFZhbHVlcy5sZW5ndGgpIHsKICAgICAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0ga28udXRpbHMuYXJyYXlJbmRleE9mKHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMsIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKG5ld09wdGlvbnNbMF0pKSA+PSAwOwogICAgICAgICAgICAgICAga28udXRpbHMuc2V0T3B0aW9uTm9kZVNlbGVjdGlvblN0YXRlKG5ld09wdGlvbnNbMF0sIGlzU2VsZWN0ZWQpOwoKICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgb3B0aW9uIHdhcyBjaGFuZ2VkIGZyb20gYmVpbmcgc2VsZWN0ZWQgZHVyaW5nIGEgc2luZ2xlLWl0ZW0gdXBkYXRlLCBub3RpZnkgdGhlIGNoYW5nZQogICAgICAgICAgICAgICAgaWYgKGl0ZW1VcGRhdGUgJiYgIWlzU2VsZWN0ZWQpCiAgICAgICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoa28udXRpbHMudHJpZ2dlckV2ZW50LCBudWxsLCBbZWxlbWVudCwgImNoYW5nZSJdKTsKICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgdmFyIGNhbGxiYWNrID0gc2V0U2VsZWN0aW9uQ2FsbGJhY2s7CiAgICAgICAgaWYgKGFsbEJpbmRpbmdzWydoYXMnXSgnb3B0aW9uc0FmdGVyUmVuZGVyJykpIHsKICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbihhcnJheUVudHJ5LCBuZXdPcHRpb25zKSB7CiAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb25DYWxsYmFjayhhcnJheUVudHJ5LCBuZXdPcHRpb25zKTsKICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGFsbEJpbmRpbmdzLmdldCgnb3B0aW9uc0FmdGVyUmVuZGVyJyksIG51bGwsIFtuZXdPcHRpb25zWzBdLCBhcnJheUVudHJ5ICE9PSBjYXB0aW9uUGxhY2Vob2xkZXIgPyBhcnJheUVudHJ5IDogdW5kZWZpbmVkXSk7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGtvLnV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcoZWxlbWVudCwgZmlsdGVyZWRBcnJheSwgb3B0aW9uRm9yQXJyYXlJdGVtLCBhcnJheVRvRG9tTm9kZUNoaWxkcmVuT3B0aW9ucywgY2FsbGJhY2spOwoKICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIGlmIChhbGxCaW5kaW5ncy5nZXQoJ3ZhbHVlQWxsb3dVbnNldCcpICYmIGFsbEJpbmRpbmdzWydoYXMnXSgndmFsdWUnKSkgewogICAgICAgICAgICAgICAgLy8gVGhlIG1vZGVsIHZhbHVlIGlzIGF1dGhvcml0YXRpdmUsIHNvIG1ha2Ugc3VyZSBpdHMgdmFsdWUgaXMgdGhlIG9uZSBzZWxlY3RlZAogICAgICAgICAgICAgICAga28uc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlKGVsZW1lbnQsIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYWxsQmluZGluZ3MuZ2V0KCd2YWx1ZScpKSwgdHJ1ZSAvKiBhbGxvd1Vuc2V0ICovKTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIGFzIGEgcmVzdWx0IG9mIHVwZGF0aW5nIHRoZSBvcHRpb25zIGxpc3QKICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25DaGFuZ2VkOwogICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHsKICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYSBtdWx0aXBsZS1zZWxlY3QgYm94LCBjb21wYXJlIHRoZSBuZXcgc2VsZWN0aW9uIGNvdW50IHRvIHRoZSBwcmV2aW91cyBvbmUKICAgICAgICAgICAgICAgICAgICAvLyBCdXQgaWYgbm90aGluZyB3YXMgc2VsZWN0ZWQgYmVmb3JlLCB0aGUgc2VsZWN0aW9uIGNhbid0IGhhdmUgY2hhbmdlZAogICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSBwcmV2aW91c1NlbGVjdGVkVmFsdWVzLmxlbmd0aCAmJiBzZWxlY3RlZE9wdGlvbnMoKS5sZW5ndGggPCBwcmV2aW91c1NlbGVjdGVkVmFsdWVzLmxlbmd0aDsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGEgc2luZ2xlLXNlbGVjdCBib3gsIGNvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgdG8gdGhlIHByZXZpb3VzIHZhbHVlCiAgICAgICAgICAgICAgICAgICAgLy8gQnV0IGlmIG5vdGhpbmcgd2FzIHNlbGVjdGVkIGJlZm9yZSBvciBub3RoaW5nIGlzIHNlbGVjdGVkIG5vdywganVzdCBsb29rIGZvciBhIGNoYW5nZSBpbiBzZWxlY3Rpb24KICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gKHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMubGVuZ3RoICYmIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA+PSAwKQogICAgICAgICAgICAgICAgICAgICAgICA/IChrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50Lm9wdGlvbnNbZWxlbWVudC5zZWxlY3RlZEluZGV4XSkgIT09IHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXNbMF0pCiAgICAgICAgICAgICAgICAgICAgICAgIDogKHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMubGVuZ3RoIHx8IGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA+PSAwKTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgY29uc2lzdGVuY3kgYmV0d2VlbiBtb2RlbCB2YWx1ZSBhbmQgc2VsZWN0ZWQgb3B0aW9uLgogICAgICAgICAgICAgICAgLy8gSWYgdGhlIGRyb3Bkb3duIHdhcyBjaGFuZ2VkIHNvIHRoYXQgc2VsZWN0aW9uIGlzIG5vIGxvbmdlciB0aGUgc2FtZSwKICAgICAgICAgICAgICAgIC8vIG5vdGlmeSB0aGUgdmFsdWUgb3Igc2VsZWN0ZWRPcHRpb25zIGJpbmRpbmcuCiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uQ2hhbmdlZCkgewogICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLnRyaWdnZXJFdmVudChlbGVtZW50LCAiY2hhbmdlIik7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICB9KTsKCiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgSUUgYnVnCiAgICAgICAga28udXRpbHMuZW5zdXJlU2VsZWN0RWxlbWVudElzUmVuZGVyZWRDb3JyZWN0bHkoZWxlbWVudCk7CgogICAgICAgIGlmIChwcmV2aW91c1Njcm9sbFRvcCAmJiBNYXRoLmFicyhwcmV2aW91c1Njcm9sbFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wKSA+IDIwKQogICAgICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHByZXZpb3VzU2Nyb2xsVG9wOwogICAgfQp9Owprby5iaW5kaW5nSGFuZGxlcnNbJ29wdGlvbnMnXS5vcHRpb25WYWx1ZURvbURhdGFLZXkgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKTsKa28uYmluZGluZ0hhbmRsZXJzWydzZWxlY3RlZE9wdGlvbnMnXSA9IHsKICAgICdhZnRlcic6IFsnb3B0aW9ucycsICdmb3JlYWNoJ10sCiAgICAnaW5pdCc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncykgewogICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsICJjaGFuZ2UiLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlQWNjZXNzb3IoKSwgdmFsdWVUb1dyaXRlID0gW107CiAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJvcHRpb24iKSwgZnVuY3Rpb24obm9kZSkgewogICAgICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQpCiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb1dyaXRlLnB1c2goa28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUobm9kZSkpOwogICAgICAgICAgICB9KTsKICAgICAgICAgICAga28uZXhwcmVzc2lvblJld3JpdGluZy53cml0ZVZhbHVlVG9Qcm9wZXJ0eSh2YWx1ZSwgYWxsQmluZGluZ3MsICdzZWxlY3RlZE9wdGlvbnMnLCB2YWx1ZVRvV3JpdGUpOwogICAgICAgIH0pOwogICAgfSwKICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvcikgewogICAgICAgIGlmIChrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCkgIT0gInNlbGVjdCIpCiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigidmFsdWVzIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50cyIpOwoKICAgICAgICB2YXIgbmV3VmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7CiAgICAgICAgaWYgKG5ld1ZhbHVlICYmIHR5cGVvZiBuZXdWYWx1ZS5sZW5ndGggPT0gIm51bWJlciIpIHsKICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIm9wdGlvbiIpLCBmdW5jdGlvbihub2RlKSB7CiAgICAgICAgICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihuZXdWYWx1ZSwga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUobm9kZSkpID49IDA7CiAgICAgICAgICAgICAgICBrby51dGlscy5zZXRPcHRpb25Ob2RlU2VsZWN0aW9uU3RhdGUobm9kZSwgaXNTZWxlY3RlZCk7CiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgIH0KfTsKa28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5nc1snc2VsZWN0ZWRPcHRpb25zJ10gPSB0cnVlOwprby5iaW5kaW5nSGFuZGxlcnNbJ3N0eWxlJ10gPSB7CiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHsKICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSB8fCB7fSk7CiAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24oc3R5bGVOYW1lLCBzdHlsZVZhbHVlKSB7CiAgICAgICAgICAgIHN0eWxlVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHN0eWxlVmFsdWUpOwoKICAgICAgICAgICAgaWYgKHN0eWxlVmFsdWUgPT09IG51bGwgfHwgc3R5bGVWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHN0eWxlVmFsdWUgPT09IGZhbHNlKSB7CiAgICAgICAgICAgICAgICAvLyBFbXB0eSBzdHJpbmcgcmVtb3ZlcyB0aGUgdmFsdWUsIHdoZXJlYXMgbnVsbC91bmRlZmluZWQgaGF2ZSBubyBlZmZlY3QKICAgICAgICAgICAgICAgIHN0eWxlVmFsdWUgPSAiIjsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZU5hbWVdID0gc3R5bGVWYWx1ZTsKICAgICAgICB9KTsKICAgIH0KfTsKa28uYmluZGluZ0hhbmRsZXJzWydzdWJtaXQnXSA9IHsKICAgICdpbml0JzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7CiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZUFjY2Vzc29yKCkgIT0gImZ1bmN0aW9uIikKICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJUaGUgdmFsdWUgZm9yIGEgc3VibWl0IGJpbmRpbmcgbXVzdCBiZSBhIGZ1bmN0aW9uIik7CiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgInN1Ym1pdCIsIGZ1bmN0aW9uIChldmVudCkgewogICAgICAgICAgICB2YXIgaGFuZGxlclJldHVyblZhbHVlOwogICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCk7CiAgICAgICAgICAgIHRyeSB7IGhhbmRsZXJSZXR1cm5WYWx1ZSA9IHZhbHVlLmNhbGwoYmluZGluZ0NvbnRleHRbJyRkYXRhJ10sIGVsZW1lbnQpOyB9CiAgICAgICAgICAgIGZpbmFsbHkgewogICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJSZXR1cm5WYWx1ZSAhPT0gdHJ1ZSkgeyAvLyBOb3JtYWxseSB3ZSB3YW50IHRvIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uIERldmVsb3BlciBjYW4gb3ZlcnJpZGUgdGhpcyBiZSBleHBsaWNpdGx5IHJldHVybmluZyB0cnVlLgogICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkKICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsKICAgICAgICAgICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICB9KTsKICAgIH0KfTsKa28uYmluZGluZ0hhbmRsZXJzWyd0ZXh0J10gPSB7CiAgICAnaW5pdCc6IGZ1bmN0aW9uKCkgewogICAgICAgIC8vIFByZXZlbnQgYmluZGluZyBvbiB0aGUgZHluYW1pY2FsbHktaW5qZWN0ZWQgdGV4dCBub2RlIChhcyBkZXZlbG9wZXJzIGFyZSB1bmxpa2VseSB0byBleHBlY3QgdGhhdCwgYW5kIGl0IGhhcyBzZWN1cml0eSBpbXBsaWNhdGlvbnMpLgogICAgICAgIC8vIEl0IHNob3VsZCBhbHNvIG1ha2UgdGhpbmdzIGZhc3RlciwgYXMgd2Ugbm8gbG9uZ2VyIGhhdmUgdG8gY29uc2lkZXIgd2hldGhlciB0aGUgdGV4dCBub2RlIG1pZ2h0IGJlIGJpbmRhYmxlLgogICAgICAgIHJldHVybiB7ICdjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyc6IHRydWUgfTsKICAgIH0sCiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHsKICAgICAgICBrby51dGlscy5zZXRUZXh0Q29udGVudChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKCkpOwogICAgfQp9Owprby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzWyd0ZXh0J10gPSB0cnVlOwooZnVuY3Rpb24gKCkgewoKaWYgKHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yKSB7CiAgICB2YXIgcGFyc2VWZXJzaW9uID0gZnVuY3Rpb24gKG1hdGNoZXMpIHsKICAgICAgICBpZiAobWF0Y2hlcykgewogICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaGVzWzFdKTsKICAgICAgICB9CiAgICB9OwoKICAgIC8vIERldGVjdCB2YXJpb3VzIGJyb3dzZXIgdmVyc2lvbnMgYmVjYXVzZSBzb21lIG9sZCB2ZXJzaW9ucyBkb24ndCBmdWxseSBzdXBwb3J0IHRoZSAnaW5wdXQnIGV2ZW50CiAgICB2YXIgb3BlcmFWZXJzaW9uID0gd2luZG93Lm9wZXJhICYmIHdpbmRvdy5vcGVyYS52ZXJzaW9uICYmIHBhcnNlSW50KHdpbmRvdy5vcGVyYS52ZXJzaW9uKCkpLAogICAgICAgIHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LAogICAgICAgIHNhZmFyaVZlcnNpb24gPSBwYXJzZVZlcnNpb24odXNlckFnZW50Lm1hdGNoKC9eKD86KD8hY2hyb21lKS4pKnZlcnNpb25cLyhbXiBdKikgc2FmYXJpL2kpKSwKICAgICAgICBmaXJlZm94VmVyc2lvbiA9IHBhcnNlVmVyc2lvbih1c2VyQWdlbnQubWF0Y2goL0ZpcmVmb3hcLyhbXiBdKikvKSk7Cn0KCi8vIElFIDggYW5kIDkgaGF2ZSBidWdzIHRoYXQgcHJldmVudCB0aGUgbm9ybWFsIGV2ZW50cyBmcm9tIGZpcmluZyB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLgovLyBCdXQgaXQgZG9lcyBmaXJlIHRoZSAnc2VsZWN0aW9uY2hhbmdlJyBldmVudCBvbiBtYW55IG9mIHRob3NlLCBwcmVzdW1hYmx5IGJlY2F1c2UgdGhlCi8vIGN1cnNvciBpcyBtb3ZpbmcgYW5kIHRoYXQgY291bnRzIGFzIHRoZSBzZWxlY3Rpb24gY2hhbmdpbmcuIFRoZSAnc2VsZWN0aW9uY2hhbmdlJyBldmVudCBpcwovLyBmaXJlZCBhdCB0aGUgZG9jdW1lbnQgbGV2ZWwgb25seSBhbmQgZG9lc24ndCBkaXJlY3RseSBpbmRpY2F0ZSB3aGljaCBlbGVtZW50IGNoYW5nZWQuIFdlCi8vIHNldCB1cCBqdXN0IG9uZSBldmVudCBoYW5kbGVyIGZvciB0aGUgZG9jdW1lbnQgYW5kIHVzZSAnYWN0aXZlRWxlbWVudCcgdG8gZGV0ZXJtaW5lIHdoaWNoCi8vIGVsZW1lbnQgd2FzIGNoYW5nZWQuCmlmIChrby51dGlscy5pZVZlcnNpb24gPCAxMCkgewogICAgdmFyIHNlbGVjdGlvbkNoYW5nZVJlZ2lzdGVyZWROYW1lID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCksCiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlck5hbWUgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKTsKICAgIHZhciBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHsKICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5hY3RpdmVFbGVtZW50LAogICAgICAgICAgICBoYW5kbGVyID0gdGFyZ2V0ICYmIGtvLnV0aWxzLmRvbURhdGEuZ2V0KHRhcmdldCwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlck5hbWUpOwogICAgICAgIGlmIChoYW5kbGVyKSB7CiAgICAgICAgICAgIGhhbmRsZXIoZXZlbnQpOwogICAgICAgIH0KICAgIH07CiAgICB2YXIgcmVnaXN0ZXJGb3JTZWxlY3Rpb25DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBoYW5kbGVyKSB7CiAgICAgICAgdmFyIG93bmVyRG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50OwogICAgICAgIGlmICgha28udXRpbHMuZG9tRGF0YS5nZXQob3duZXJEb2MsIHNlbGVjdGlvbkNoYW5nZVJlZ2lzdGVyZWROYW1lKSkgewogICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChvd25lckRvYywgc2VsZWN0aW9uQ2hhbmdlUmVnaXN0ZXJlZE5hbWUsIHRydWUpOwogICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihvd25lckRvYywgJ3NlbGVjdGlvbmNoYW5nZScsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIpOwogICAgICAgIH0KICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyTmFtZSwgaGFuZGxlcik7CiAgICB9Owp9Cgprby5iaW5kaW5nSGFuZGxlcnNbJ3RleHRJbnB1dCddID0gewogICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHsKCiAgICAgICAgdmFyIHByZXZpb3VzRWxlbWVudFZhbHVlID0gZWxlbWVudC52YWx1ZSwKICAgICAgICAgICAgdGltZW91dEhhbmRsZSwKICAgICAgICAgICAgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQ7CgogICAgICAgIHZhciB1cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChldmVudCkgewogICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7CiAgICAgICAgICAgIGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50ID0gdGltZW91dEhhbmRsZSA9IHVuZGVmaW5lZDsKCiAgICAgICAgICAgIHZhciBlbGVtZW50VmFsdWUgPSBlbGVtZW50LnZhbHVlOwogICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtZW50VmFsdWUgIT09IGVsZW1lbnRWYWx1ZSkgewogICAgICAgICAgICAgICAgLy8gUHJvdmlkZSBhIHdheSBmb3IgdGVzdHMgdG8ga25vdyBleGFjdGx5IHdoaWNoIGV2ZW50IHdhcyBwcm9jZXNzZWQKICAgICAgICAgICAgICAgIGlmIChERUJVRyAmJiBldmVudCkgZWxlbWVudFsnX2tvX3RleHRJbnB1dFByb2Nlc3NlZEV2ZW50J10gPSBldmVudC50eXBlOwogICAgICAgICAgICAgICAgcHJldmlvdXNFbGVtZW50VmFsdWUgPSBlbGVtZW50VmFsdWU7CiAgICAgICAgICAgICAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLndyaXRlVmFsdWVUb1Byb3BlcnR5KHZhbHVlQWNjZXNzb3IoKSwgYWxsQmluZGluZ3MsICd0ZXh0SW5wdXQnLCBlbGVtZW50VmFsdWUpOwogICAgICAgICAgICB9CiAgICAgICAgfTsKCiAgICAgICAgdmFyIGRlZmVyVXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHsKICAgICAgICAgICAgaWYgKCF0aW1lb3V0SGFuZGxlKSB7CiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgdmFyaWFibGUgaXMgc2V0ICpvbmx5KiBkdXJpbmcgdGhlIGJyaWVmIGdhcCBiZXR3ZWVuIGFuCiAgICAgICAgICAgICAgICAvLyBldmVudCBmaXJpbmcgYW5kIHRoZSB1cGRhdGVNb2RlbCBmdW5jdGlvbiBydW5uaW5nLiBUaGlzIGFsbG93cyB1cyB0byBpZ25vcmUgbW9kZWwKICAgICAgICAgICAgICAgIC8vIHVwZGF0ZXMgdGhhdCBhcmUgZnJvbSB0aGUgcHJldmlvdXMgc3RhdGUgb2YgdGhlIGVsZW1lbnQsIHVzdWFsbHkgZHVlIHRvIHRlY2huaXF1ZXMKICAgICAgICAgICAgICAgIC8vIHN1Y2ggYXMgcmF0ZUxpbWl0LiBTdWNoIHVwZGF0ZXMsIGlmIG5vdCBpZ25vcmVkLCBjYW4gY2F1c2Uga2V5c3Ryb2tlcyB0byBiZSBsb3N0LgogICAgICAgICAgICAgICAgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgPSBlbGVtZW50LnZhbHVlOwogICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBERUJVRyA/IHVwZGF0ZU1vZGVsLmJpbmQoZWxlbWVudCwge3R5cGU6IGV2ZW50LnR5cGV9KSA6IHVwZGF0ZU1vZGVsOwogICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoaGFuZGxlciwgNCk7CiAgICAgICAgICAgIH0KICAgICAgICB9OwoKICAgICAgICB2YXIgdXBkYXRlVmlldyA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7CgogICAgICAgICAgICBpZiAobW9kZWxWYWx1ZSA9PT0gbnVsbCB8fCBtb2RlbFZhbHVlID09PSB1bmRlZmluZWQpIHsKICAgICAgICAgICAgICAgIG1vZGVsVmFsdWUgPSAnJzsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgaWYgKGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50ICE9PSB1bmRlZmluZWQgJiYgbW9kZWxWYWx1ZSA9PT0gZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQpIHsKICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodXBkYXRlVmlldywgNCk7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZWxlbWVudCBvbmx5IGlmIHRoZSBlbGVtZW50IGFuZCBtb2RlbCBhcmUgZGlmZmVyZW50LiBPbiBzb21lIGJyb3dzZXJzLCB1cGRhdGluZyB0aGUgdmFsdWUKICAgICAgICAgICAgLy8gd2lsbCBtb3ZlIHRoZSBjdXJzb3IgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQsIHdoaWNoIHdvdWxkIGJlIGJhZCB3aGlsZSB0aGUgdXNlciBpcyB0eXBpbmcuCiAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlICE9PSBtb2RlbFZhbHVlKSB7CiAgICAgICAgICAgICAgICBwcmV2aW91c0VsZW1lbnRWYWx1ZSA9IG1vZGVsVmFsdWU7ICAvLyBNYWtlIHN1cmUgd2UgaWdub3JlIGV2ZW50cyAocHJvcGVydHljaGFuZ2UpIHRoYXQgcmVzdWx0IGZyb20gdXBkYXRpbmcgdGhlIHZhbHVlCiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gbW9kZWxWYWx1ZTsKICAgICAgICAgICAgfQogICAgICAgIH07CgogICAgICAgIHZhciBvbkV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBoYW5kbGVyKSB7CiAgICAgICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyKTsKICAgICAgICB9OwoKICAgICAgICBpZiAoREVCVUcgJiYga28uYmluZGluZ0hhbmRsZXJzWyd0ZXh0SW5wdXQnXVsnX2ZvcmNlVXBkYXRlT24nXSkgewogICAgICAgICAgICAvLyBQcm92aWRlIGEgd2F5IGZvciB0ZXN0cyB0byBzcGVjaWZ5IGV4YWN0bHkgd2hpY2ggZXZlbnRzIGFyZSBib3VuZAogICAgICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goa28uYmluZGluZ0hhbmRsZXJzWyd0ZXh0SW5wdXQnXVsnX2ZvcmNlVXBkYXRlT24nXSwgZnVuY3Rpb24oZXZlbnROYW1lKSB7CiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lLnNsaWNlKDAsNSkgPT0gJ2FmdGVyJykgewogICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoZXZlbnROYW1lLnNsaWNlKDUpLCBkZWZlclVwZGF0ZU1vZGVsKTsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgb25FdmVudChldmVudE5hbWUsIHVwZGF0ZU1vZGVsKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKGtvLnV0aWxzLmllVmVyc2lvbiA8IDEwKSB7CiAgICAgICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA8PSA4IGRvZXNuJ3Qgc3VwcG9ydCB0aGUgJ2lucHV0JyBldmVudCwgYnV0IGRvZXMgaW5jbHVkZSAncHJvcGVydHljaGFuZ2UnIHRoYXQgZmlyZXMgd2hlbmV2ZXIKICAgICAgICAgICAgICAgIC8vIGFueSBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IGNoYW5nZXMuIFVubGlrZSAnaW5wdXQnLCBpdCBhbHNvIGZpcmVzIGlmIGEgcHJvcGVydHkgaXMgY2hhbmdlZCBmcm9tIEphdmFTY3JpcHQgY29kZSwKICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGF0J3MgYW4gYWNjZXB0YWJsZSBjb21wcm9taXNlIGZvciB0aGlzIGJpbmRpbmcuIElFIDkgZG9lcyBzdXBwb3J0ICdpbnB1dCcsIGJ1dCBzaW5jZSBpdCBkb2Vzbid0IGZpcmUgaXQKICAgICAgICAgICAgICAgIC8vIHdoZW4gdXNpbmcgYXV0b2NvbXBsZXRlLCB3ZSdsbCB1c2UgJ3Byb3BlcnR5Y2hhbmdlJyBmb3IgaXQgYWxzby4KICAgICAgICAgICAgICAgIG9uRXZlbnQoJ3Byb3BlcnR5Y2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHsKICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSAndmFsdWUnKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1vZGVsKGV2ZW50KTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9KTsKCiAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuaWVWZXJzaW9uID09IDgpIHsKICAgICAgICAgICAgICAgICAgICAvLyBJRSA4IGhhcyBhIGJ1ZyB3aGVyZSBpdCBmYWlscyB0byBmaXJlICdwcm9wZXJ0eWNoYW5nZScgb24gdGhlIGZpcnN0IHVwZGF0ZSBmb2xsb3dpbmcgYSB2YWx1ZSBjaGFuZ2UgZnJvbQogICAgICAgICAgICAgICAgICAgIC8vIEphdmFTY3JpcHQgY29kZS4gSXQgYWxzbyBkb2Vzbid0IGZpcmUgaWYgeW91IGNsZWFyIHRoZSBlbnRpcmUgdmFsdWUuIFRvIGZpeCB0aGlzLCB3ZSBiaW5kIHRvIHRoZSBmb2xsb3dpbmcKICAgICAgICAgICAgICAgICAgICAvLyBldmVudHMgdG9vLgogICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2tleXVwJywgdXBkYXRlTW9kZWwpOyAgICAgIC8vIEEgc2luZ2xlIGtleXN0b2tlCiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgna2V5ZG93bicsIHVwZGF0ZU1vZGVsKTsgICAgLy8gVGhlIGZpcnN0IGNoYXJhY3RlciB3aGVuIGEga2V5IGlzIGhlbGQgZG93bgogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgaWYgKGtvLnV0aWxzLmllVmVyc2lvbiA+PSA4KSB7CiAgICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgOSBkb2Vzbid0IGZpcmUgdGhlICdpbnB1dCcgZXZlbnQgd2hlbiBkZWxldGluZyB0ZXh0LCBpbmNsdWRpbmcgdXNpbmcKICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYmFja3NwYWNlLCBkZWxldGUsIG9yIGN0cmwteCBrZXlzLCBjbGlja2luZyB0aGUgJ3gnIHRvIGNsZWFyIHRoZSBpbnB1dCwgZHJhZ2dpbmcgdGV4dAogICAgICAgICAgICAgICAgICAgIC8vIG91dCBvZiB0aGUgZmllbGQsIGFuZCBjdXR0aW5nIG9yIGRlbGV0aW5nIHRleHQgdXNpbmcgdGhlIGNvbnRleHQgbWVudS4gJ3NlbGVjdGlvbmNoYW5nZScKICAgICAgICAgICAgICAgICAgICAvLyBjYW4gZGV0ZWN0IGFsbCBvZiB0aG9zZSBleGNlcHQgZHJhZ2dpbmcgdGV4dCBvdXQgb2YgdGhlIGZpZWxkLCBmb3Igd2hpY2ggd2UgdXNlICdkcmFnZW5kJy4KICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBhcmUgYWxzbyBuZWVkZWQgaW4gSUU4IGJlY2F1c2Ugb2YgdGhlIGJ1ZyBkZXNjcmliZWQgYWJvdmUuCiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJGb3JTZWxlY3Rpb25DaGFuZ2VFdmVudChlbGVtZW50LCB1cGRhdGVNb2RlbCk7ICAvLyAnc2VsZWN0aW9uY2hhbmdlJyBjb3ZlcnMgY3V0LCBwYXN0ZSwgZHJvcCwgZGVsZXRlLCBldGMuCiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgnZHJhZ2VuZCcsIGRlZmVyVXBkYXRlTW9kZWwpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgLy8gQWxsIG90aGVyIHN1cHBvcnRlZCBicm93c2VycyBzdXBwb3J0IHRoZSAnaW5wdXQnIGV2ZW50LCB3aGljaCBmaXJlcyB3aGVuZXZlciB0aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCBpcyBjaGFuZ2VkCiAgICAgICAgICAgICAgICAvLyB0aHJvdWdoIHRoZSB1c2VyIGludGVyZmFjZS4KICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2lucHV0JywgdXBkYXRlTW9kZWwpOwoKICAgICAgICAgICAgICAgIGlmIChzYWZhcmlWZXJzaW9uIDwgNSAmJiBrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCkgPT09ICJ0ZXh0YXJlYSIpIHsKICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPDUgZG9lc24ndCBmaXJlIHRoZSAnaW5wdXQnIGV2ZW50IGZvciA8dGV4dGFyZWE+IGVsZW1lbnRzIChpdCBkb2VzIGZpcmUgJ3RleHRJbnB1dCcKICAgICAgICAgICAgICAgICAgICAvLyBidXQgb25seSB3aGVuIHR5cGluZykuIFNvIHdlJ2xsIGp1c3QgY2F0Y2ggYXMgbXVjaCBhcyB3ZSBjYW4gd2l0aCBrZXlkb3duLCBjdXQsIGFuZCBwYXN0ZS4KICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdrZXlkb3duJywgZGVmZXJVcGRhdGVNb2RlbCk7CiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgncGFzdGUnLCBkZWZlclVwZGF0ZU1vZGVsKTsKICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdjdXQnLCBkZWZlclVwZGF0ZU1vZGVsKTsKICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmFWZXJzaW9uIDwgMTEpIHsKICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSAxMCBkb2Vzbid0IGFsd2F5cyBmaXJlIHRoZSAnaW5wdXQnIGV2ZW50IGZvciBjdXQsIHBhc3RlLCB1bmRvICYgZHJvcCBvcGVyYXRpb25zLgogICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbiB0cnkgdG8gY2F0Y2ggc29tZSBvZiB0aG9zZSB1c2luZyAna2V5ZG93bicuCiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgna2V5ZG93bicsIGRlZmVyVXBkYXRlTW9kZWwpOwogICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaXJlZm94VmVyc2lvbiA8IDQuMCkgewogICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggPD0gMy42IGRvZXNuJ3QgZmlyZSB0aGUgJ2lucHV0JyBldmVudCB3aGVuIHRleHQgaXMgZmlsbGVkIGluIHRocm91Z2ggYXV0b2NvbXBsZXRlCiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgnRE9NQXV0b0NvbXBsZXRlJywgdXBkYXRlTW9kZWwpOwoKICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IDw9My41IGRvZXNuJ3QgZmlyZSB0aGUgJ2lucHV0JyBldmVudCB3aGVuIHRleHQgaXMgZHJvcHBlZCBpbnRvIHRoZSBpbnB1dC4KICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdkcmFnZHJvcCcsIHVwZGF0ZU1vZGVsKTsgICAgICAgLy8gPDMuNQogICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2Ryb3AnLCB1cGRhdGVNb2RlbCk7ICAgICAgICAgICAvLyAzLjUKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgLy8gQmluZCB0byB0aGUgY2hhbmdlIGV2ZW50IHNvIHRoYXQgd2UgY2FuIGNhdGNoIHByb2dyYW1tYXRpYyB1cGRhdGVzIG9mIHRoZSB2YWx1ZSB0aGF0IGZpcmUgdGhpcyBldmVudC4KICAgICAgICBvbkV2ZW50KCdjaGFuZ2UnLCB1cGRhdGVNb2RlbCk7CgogICAgICAgIGtvLmNvbXB1dGVkKHVwZGF0ZVZpZXcsIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50IH0pOwogICAgfQp9Owprby5leHByZXNzaW9uUmV3cml0aW5nLnR3b1dheUJpbmRpbmdzWyd0ZXh0SW5wdXQnXSA9IHRydWU7CgovLyB0ZXh0aW5wdXQgaXMgYW4gYWxpYXMgZm9yIHRleHRJbnB1dAprby5iaW5kaW5nSGFuZGxlcnNbJ3RleHRpbnB1dCddID0gewogICAgLy8gcHJlcHJvY2VzcyBpcyB0aGUgb25seSB3YXkgdG8gc2V0IHVwIGEgZnVsbCBhbGlhcwogICAgJ3ByZXByb2Nlc3MnOiBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIGFkZEJpbmRpbmcpIHsKICAgICAgICBhZGRCaW5kaW5nKCd0ZXh0SW5wdXQnLCB2YWx1ZSk7CiAgICB9Cn07Cgp9KSgpO2tvLmJpbmRpbmdIYW5kbGVyc1sndW5pcXVlTmFtZSddID0gewogICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvcikgewogICAgICAgIGlmICh2YWx1ZUFjY2Vzc29yKCkpIHsKICAgICAgICAgICAgdmFyIG5hbWUgPSAia29fdW5pcXVlXyIgKyAoKytrby5iaW5kaW5nSGFuZGxlcnNbJ3VuaXF1ZU5hbWUnXS5jdXJyZW50SW5kZXgpOwogICAgICAgICAgICBrby51dGlscy5zZXRFbGVtZW50TmFtZShlbGVtZW50LCBuYW1lKTsKICAgICAgICB9CiAgICB9Cn07CmtvLmJpbmRpbmdIYW5kbGVyc1sndW5pcXVlTmFtZSddLmN1cnJlbnRJbmRleCA9IDA7CmtvLmJpbmRpbmdIYW5kbGVyc1sndmFsdWUnXSA9IHsKICAgICdhZnRlcic6IFsnb3B0aW9ucycsICdmb3JlYWNoJ10sCiAgICAnaW5pdCc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncykgewogICAgICAgIC8vIElmIHRoZSB2YWx1ZSBiaW5kaW5nIGlzIHBsYWNlZCBvbiBhIHJhZGlvL2NoZWNrYm94LCB0aGVuIGp1c3QgcGFzcyB0aHJvdWdoIHRvIGNoZWNrZWRWYWx1ZSBhbmQgcXVpdAogICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAiaW5wdXQiICYmIChlbGVtZW50LnR5cGUgPT0gImNoZWNrYm94IiB8fCBlbGVtZW50LnR5cGUgPT0gInJhZGlvIikpIHsKICAgICAgICAgICAga28uYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlKGVsZW1lbnQsIHsgJ2NoZWNrZWRWYWx1ZSc6IHZhbHVlQWNjZXNzb3IgfSk7CiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB9CgogICAgICAgIC8vIEFsd2F5cyBjYXRjaCAiY2hhbmdlIiBldmVudDsgcG9zc2libHkgb3RoZXIgZXZlbnRzIHRvbyBpZiBhc2tlZAogICAgICAgIHZhciBldmVudHNUb0NhdGNoID0gWyJjaGFuZ2UiXTsKICAgICAgICB2YXIgcmVxdWVzdGVkRXZlbnRzVG9DYXRjaCA9IGFsbEJpbmRpbmdzLmdldCgidmFsdWVVcGRhdGUiKTsKICAgICAgICB2YXIgcHJvcGVydHlDaGFuZ2VkRmlyZWQgPSBmYWxzZTsKICAgICAgICB2YXIgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgPSBudWxsOwoKICAgICAgICBpZiAocmVxdWVzdGVkRXZlbnRzVG9DYXRjaCkgewogICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RlZEV2ZW50c1RvQ2F0Y2ggPT0gInN0cmluZyIpIC8vIEFsbG93IGJvdGggaW5kaXZpZHVhbCBldmVudCBuYW1lcywgYW5kIGFycmF5cyBvZiBldmVudCBuYW1lcwogICAgICAgICAgICAgICAgcmVxdWVzdGVkRXZlbnRzVG9DYXRjaCA9IFtyZXF1ZXN0ZWRFdmVudHNUb0NhdGNoXTsKICAgICAgICAgICAga28udXRpbHMuYXJyYXlQdXNoQWxsKGV2ZW50c1RvQ2F0Y2gsIHJlcXVlc3RlZEV2ZW50c1RvQ2F0Y2gpOwogICAgICAgICAgICBldmVudHNUb0NhdGNoID0ga28udXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlcyhldmVudHNUb0NhdGNoKTsKICAgICAgICB9CgogICAgICAgIHZhciB2YWx1ZVVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgPSBudWxsOwogICAgICAgICAgICBwcm9wZXJ0eUNoYW5nZWRGaXJlZCA9IGZhbHNlOwogICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHZhbHVlQWNjZXNzb3IoKTsKICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWx1ZSA9IGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQpOwogICAgICAgICAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLndyaXRlVmFsdWVUb1Byb3BlcnR5KG1vZGVsVmFsdWUsIGFsbEJpbmRpbmdzLCAndmFsdWUnLCBlbGVtZW50VmFsdWUpOwogICAgICAgIH0KCiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy8xMjIKICAgICAgICAvLyBJRSBkb2Vzbid0IGZpcmUgImNoYW5nZSIgZXZlbnRzIG9uIHRleHRib3hlcyBpZiB0aGUgdXNlciBzZWxlY3RzIGEgdmFsdWUgZnJvbSBpdHMgYXV0b2NvbXBsZXRlIGxpc3QKICAgICAgICB2YXIgaWVBdXRvQ29tcGxldGVIYWNrTmVlZGVkID0ga28udXRpbHMuaWVWZXJzaW9uICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICJpbnB1dCIgJiYgZWxlbWVudC50eXBlID09ICJ0ZXh0IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBlbGVtZW50LmF1dG9jb21wbGV0ZSAhPSAib2ZmIiAmJiAoIWVsZW1lbnQuZm9ybSB8fCBlbGVtZW50LmZvcm0uYXV0b2NvbXBsZXRlICE9ICJvZmYiKTsKICAgICAgICBpZiAoaWVBdXRvQ29tcGxldGVIYWNrTmVlZGVkICYmIGtvLnV0aWxzLmFycmF5SW5kZXhPZihldmVudHNUb0NhdGNoLCAicHJvcGVydHljaGFuZ2UiKSA9PSAtMSkgewogICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCAicHJvcGVydHljaGFuZ2UiLCBmdW5jdGlvbiAoKSB7IHByb3BlcnR5Q2hhbmdlZEZpcmVkID0gdHJ1ZSB9KTsKICAgICAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgImZvY3VzIiwgZnVuY3Rpb24gKCkgeyBwcm9wZXJ0eUNoYW5nZWRGaXJlZCA9IGZhbHNlIH0pOwogICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCAiYmx1ciIsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5Q2hhbmdlZEZpcmVkKSB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWVVcGRhdGVIYW5kbGVyKCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pOwogICAgICAgIH0KCiAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGV2ZW50c1RvQ2F0Y2gsIGZ1bmN0aW9uKGV2ZW50TmFtZSkgewogICAgICAgICAgICAvLyBUaGUgc3ludGF4ICJhZnRlcjxldmVudG5hbWU+IiBtZWFucyAicnVuIHRoZSBoYW5kbGVyIGFzeW5jaHJvbm91c2x5IGFmdGVyIHRoZSBldmVudCIKICAgICAgICAgICAgLy8gVGhpcyBpcyB1c2VmdWwsIGZvciBleGFtcGxlLCB0byBjYXRjaCAia2V5ZG93biIgZXZlbnRzIGFmdGVyIHRoZSBicm93c2VyIGhhcyB1cGRhdGVkIHRoZSBjb250cm9sCiAgICAgICAgICAgIC8vIChvdGhlcndpc2UsIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKHRoaXMpIHdpbGwgcmVjZWl2ZSB0aGUgY29udHJvbCdzIHZhbHVlICpiZWZvcmUqIHRoZSBrZXkgZXZlbnQpCiAgICAgICAgICAgIHZhciBoYW5kbGVyID0gdmFsdWVVcGRhdGVIYW5kbGVyOwogICAgICAgICAgICBpZiAoa28udXRpbHMuc3RyaW5nU3RhcnRzV2l0aChldmVudE5hbWUsICJhZnRlciIpKSB7CiAgICAgICAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50IHZhcmlhYmxlIGlzIG5vbi1udWxsICpvbmx5KiBkdXJpbmcgdGhlIGJyaWVmIGdhcCBiZXR3ZWVuCiAgICAgICAgICAgICAgICAgICAgLy8gYSBrZXlYIGV2ZW50IGZpcmluZyBhbmQgdGhlIHZhbHVlVXBkYXRlSGFuZGxlciBydW5uaW5nLCB3aGljaCBpcyBzY2hlZHVsZWQgdG8gaGFwcGVuCiAgICAgICAgICAgICAgICAgICAgLy8gYXQgdGhlIGVhcmxpZXN0IGFzeW5jaHJvbm91cyBvcHBvcnR1bml0eS4gV2Ugc3RvcmUgdGhpcyB0ZW1wb3JhcnkgaW5mb3JtYXRpb24gc28gdGhhdAogICAgICAgICAgICAgICAgICAgIC8vIGlmLCBiZXR3ZWVuIGtleVggYW5kIHZhbHVlVXBkYXRlSGFuZGxlciwgdGhlIHVuZGVybHlpbmcgbW9kZWwgdmFsdWUgY2hhbmdlcyBzZXBhcmF0ZWx5LAogICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBvdmVyd3JpdGUgdGhhdCBtb2RlbCB2YWx1ZSBjaGFuZ2Ugd2l0aCB0aGUgdmFsdWUgdGhlIHVzZXIganVzdCB0eXBlZC4gT3RoZXJ3aXNlLAogICAgICAgICAgICAgICAgICAgIC8vIHRlY2huaXF1ZXMgbGlrZSByYXRlTGltaXQgY2FuIHRyaWdnZXIgbW9kZWwgY2hhbmdlcyBhdCBjcml0aWNhbCBtb21lbnRzIHRoYXQgd2lsbAogICAgICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIHRoZSB1c2VyJ3MgaW5wdXRzLCBjYXVzaW5nIGtleXN0cm9rZXMgdG8gYmUgbG9zdC4KICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVCZWZvcmVFdmVudCA9IGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQpOwogICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodmFsdWVVcGRhdGVIYW5kbGVyLCAwKTsKICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBldmVudE5hbWUuc3Vic3RyaW5nKCJhZnRlciIubGVuZ3RoKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpOwogICAgICAgIH0pOwoKICAgICAgICB2YXIgdXBkYXRlRnJvbU1vZGVsID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7CiAgICAgICAgICAgIHZhciBlbGVtZW50VmFsdWUgPSBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50KTsKCiAgICAgICAgICAgIGlmIChlbGVtZW50VmFsdWVCZWZvcmVFdmVudCAhPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PT0gZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQpIHsKICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodXBkYXRlRnJvbU1vZGVsLCAwKTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgdmFyIHZhbHVlSGFzQ2hhbmdlZCA9IChuZXdWYWx1ZSAhPT0gZWxlbWVudFZhbHVlKTsKCiAgICAgICAgICAgIGlmICh2YWx1ZUhhc0NoYW5nZWQpIHsKICAgICAgICAgICAgICAgIGlmIChrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCkgPT09ICJzZWxlY3QiKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIGFsbG93VW5zZXQgPSBhbGxCaW5kaW5ncy5nZXQoJ3ZhbHVlQWxsb3dVbnNldCcpOwogICAgICAgICAgICAgICAgICAgIHZhciBhcHBseVZhbHVlQWN0aW9uID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgICBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUoZWxlbWVudCwgbmV3VmFsdWUsIGFsbG93VW5zZXQpOwogICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgICAgYXBwbHlWYWx1ZUFjdGlvbigpOwoKICAgICAgICAgICAgICAgICAgICBpZiAoIWFsbG93VW5zZXQgJiYgbmV3VmFsdWUgIT09IGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHlvdSB0cnkgdG8gc2V0IGEgbW9kZWwgdmFsdWUgdGhhdCBjYW4ndCBiZSByZXByZXNlbnRlZCBpbiBhbiBhbHJlYWR5LXBvcHVsYXRlZCBkcm9wZG93biwgcmVqZWN0IHRoYXQgY2hhbmdlLAogICAgICAgICAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHlvdSdyZSBub3QgYWxsb3dlZCB0byBoYXZlIGEgbW9kZWwgdmFsdWUgdGhhdCBkaXNhZ3JlZXMgd2l0aCBhIHZpc2libGUgVUkgc2VsZWN0aW9uLgogICAgICAgICAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShrby51dGlscy50cmlnZ2VyRXZlbnQsIG51bGwsIFtlbGVtZW50LCAiY2hhbmdlIl0pOwogICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIElFNiBidWc6IEl0IHdvbid0IHJlbGlhYmx5IGFwcGx5IHZhbHVlcyB0byBTRUxFQ1Qgbm9kZXMgZHVyaW5nIHRoZSBzYW1lIGV4ZWN1dGlvbiB0aHJlYWQKICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHQgYWZ0ZXIgeW91J3ZlIGNoYW5nZWQgdGhlIHNldCBvZiBPUFRJT04gbm9kZXMgb24gaXQuIFNvIGZvciB0aGF0IG5vZGUgdHlwZSwgd2UnbGwgc2NoZWR1bGUgYSBzZWNvbmQgdGhyZWFkCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGFwcGx5IHRoZSB2YWx1ZSBhcyB3ZWxsLgogICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFwcGx5VmFsdWVBY3Rpb24sIDApOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAga28uc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlKGVsZW1lbnQsIG5ld1ZhbHVlKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH07CgogICAgICAgIGtvLmNvbXB1dGVkKHVwZGF0ZUZyb21Nb2RlbCwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW1lbnQgfSk7CiAgICB9LAogICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKCkge30gLy8gS2VlcCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBjb2RlIHRoYXQgbWF5IGhhdmUgd3JhcHBlZCB2YWx1ZSBiaW5kaW5nCn07CmtvLmV4cHJlc3Npb25SZXdyaXRpbmcudHdvV2F5QmluZGluZ3NbJ3ZhbHVlJ10gPSB0cnVlOwprby5iaW5kaW5nSGFuZGxlcnNbJ3Zpc2libGUnXSA9IHsKICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvcikgewogICAgICAgIHZhciB2YWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTsKICAgICAgICB2YXIgaXNDdXJyZW50bHlWaXNpYmxlID0gIShlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gIm5vbmUiKTsKICAgICAgICBpZiAodmFsdWUgJiYgIWlzQ3VycmVudGx5VmlzaWJsZSkKICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gIiI7CiAgICAgICAgZWxzZSBpZiAoKCF2YWx1ZSkgJiYgaXNDdXJyZW50bHlWaXNpYmxlKQogICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7CiAgICB9Cn07Ci8vICdjbGljaycgaXMganVzdCBhIHNob3J0aGFuZCBmb3IgdGhlIHVzdWFsIGZ1bGwtbGVuZ3RoIGV2ZW50OntjbGljazpoYW5kbGVyfQptYWtlRXZlbnRIYW5kbGVyU2hvcnRjdXQoJ2NsaWNrJyk7Ci8vIElmIHlvdSB3YW50IHRvIG1ha2UgYSBjdXN0b20gdGVtcGxhdGUgZW5naW5lLAovLwovLyBbMV0gSW5oZXJpdCBmcm9tIHRoaXMgY2xhc3MgKGxpa2Uga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUgZG9lcykKLy8gWzJdIE92ZXJyaWRlICdyZW5kZXJUZW1wbGF0ZVNvdXJjZScsIHN1cHBseWluZyBhIGZ1bmN0aW9uIHdpdGggdGhpcyBzaWduYXR1cmU6Ci8vCi8vICAgICAgICBmdW5jdGlvbiAodGVtcGxhdGVTb3VyY2UsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zKSB7Ci8vICAgICAgICAgICAgLy8gLSB0ZW1wbGF0ZVNvdXJjZS50ZXh0KCkgaXMgdGhlIHRleHQgb2YgdGhlIHRlbXBsYXRlIHlvdSBzaG91bGQgcmVuZGVyCi8vICAgICAgICAgICAgLy8gLSBiaW5kaW5nQ29udGV4dC4kZGF0YSBpcyB0aGUgZGF0YSB5b3Ugc2hvdWxkIHBhc3MgaW50byB0aGUgdGVtcGxhdGUKLy8gICAgICAgICAgICAvLyAgIC0geW91IG1pZ2h0IGFsc28gd2FudCB0byBtYWtlIGJpbmRpbmdDb250ZXh0LiRwYXJlbnQsIGJpbmRpbmdDb250ZXh0LiRwYXJlbnRzLAovLyAgICAgICAgICAgIC8vICAgICBhbmQgYmluZGluZ0NvbnRleHQuJHJvb3QgYXZhaWxhYmxlIGluIHRoZSB0ZW1wbGF0ZSB0b28KLy8gICAgICAgICAgICAvLyAtIG9wdGlvbnMgZ2l2ZXMgeW91IGFjY2VzcyB0byBhbnkgb3RoZXIgcHJvcGVydGllcyBzZXQgb24gImRhdGEtYmluZDogeyB0ZW1wbGF0ZTogb3B0aW9ucyB9IgovLyAgICAgICAgICAgIC8vCi8vICAgICAgICAgICAgLy8gUmV0dXJuIHZhbHVlOiBhbiBhcnJheSBvZiBET00gbm9kZXMKLy8gICAgICAgIH0KLy8KLy8gWzNdIE92ZXJyaWRlICdjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2snLCBzdXBwbHlpbmcgYSBmdW5jdGlvbiB3aXRoIHRoaXMgc2lnbmF0dXJlOgovLwovLyAgICAgICAgZnVuY3Rpb24gKHNjcmlwdCkgewovLyAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZTogV2hhdGV2ZXIgc3ludGF4IG1lYW5zICJFdmFsdWF0ZSB0aGUgSmF2YVNjcmlwdCBzdGF0ZW1lbnQgJ3NjcmlwdCcgYW5kIG91dHB1dCB0aGUgcmVzdWx0IgovLyAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHRoZSBqcXVlcnkudG1wbCB0ZW1wbGF0ZSBlbmdpbmUgY29udmVydHMgJ3NvbWVTY3JpcHQnIHRvICckeyBzb21lU2NyaXB0IH0nCi8vICAgICAgICB9Ci8vCi8vICAgICBUaGlzIGlzIG9ubHkgbmVjZXNzYXJ5IGlmIHlvdSB3YW50IHRvIGFsbG93IGRhdGEtYmluZCBhdHRyaWJ1dGVzIHRvIHJlZmVyZW5jZSBhcmJpdHJhcnkgdGVtcGxhdGUgdmFyaWFibGVzLgovLyAgICAgSWYgeW91IGRvbid0IHdhbnQgdG8gYWxsb3cgdGhhdCwgeW91IGNhbiBzZXQgdGhlIHByb3BlcnR5ICdhbGxvd1RlbXBsYXRlUmV3cml0aW5nJyB0byBmYWxzZSAobGlrZSBrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZSBkb2VzKQovLyAgICAgYW5kIHRoZW4geW91IGRvbid0IG5lZWQgdG8gb3ZlcnJpZGUgJ2NyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaycuCgprby50ZW1wbGF0ZUVuZ2luZSA9IGZ1bmN0aW9uICgpIHsgfTsKCmtvLnRlbXBsYXRlRW5naW5lLnByb3RvdHlwZVsncmVuZGVyVGVtcGxhdGVTb3VyY2UnXSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZVNvdXJjZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpIHsKICAgIHRocm93IG5ldyBFcnJvcigiT3ZlcnJpZGUgcmVuZGVyVGVtcGxhdGVTb3VyY2UiKTsKfTsKCmtvLnRlbXBsYXRlRW5naW5lLnByb3RvdHlwZVsnY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrJ10gPSBmdW5jdGlvbiAoc2NyaXB0KSB7CiAgICB0aHJvdyBuZXcgRXJyb3IoIk92ZXJyaWRlIGNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jayIpOwp9OwoKa28udGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydtYWtlVGVtcGxhdGVTb3VyY2UnXSA9IGZ1bmN0aW9uKHRlbXBsYXRlLCB0ZW1wbGF0ZURvY3VtZW50KSB7CiAgICAvLyBOYW1lZCB0ZW1wbGF0ZQogICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PSAic3RyaW5nIikgewogICAgICAgIHRlbXBsYXRlRG9jdW1lbnQgPSB0ZW1wbGF0ZURvY3VtZW50IHx8IGRvY3VtZW50OwogICAgICAgIHZhciBlbGVtID0gdGVtcGxhdGVEb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZSk7CiAgICAgICAgaWYgKCFlbGVtKQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkNhbm5vdCBmaW5kIHRlbXBsYXRlIHdpdGggSUQgIiArIHRlbXBsYXRlKTsKICAgICAgICByZXR1cm4gbmV3IGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50KGVsZW0pOwogICAgfSBlbHNlIGlmICgodGVtcGxhdGUubm9kZVR5cGUgPT0gMSkgfHwgKHRlbXBsYXRlLm5vZGVUeXBlID09IDgpKSB7CiAgICAgICAgLy8gQW5vbnltb3VzIHRlbXBsYXRlCiAgICAgICAgcmV0dXJuIG5ldyBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUodGVtcGxhdGUpOwogICAgfSBlbHNlCiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJVbmtub3duIHRlbXBsYXRlIHR5cGU6ICIgKyB0ZW1wbGF0ZSk7Cn07Cgprby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3JlbmRlclRlbXBsYXRlJ10gPSBmdW5jdGlvbiAodGVtcGxhdGUsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCB0ZW1wbGF0ZURvY3VtZW50KSB7CiAgICB2YXIgdGVtcGxhdGVTb3VyY2UgPSB0aGlzWydtYWtlVGVtcGxhdGVTb3VyY2UnXSh0ZW1wbGF0ZSwgdGVtcGxhdGVEb2N1bWVudCk7CiAgICByZXR1cm4gdGhpc1sncmVuZGVyVGVtcGxhdGVTb3VyY2UnXSh0ZW1wbGF0ZVNvdXJjZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpOwp9OwoKa28udGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydpc1RlbXBsYXRlUmV3cml0dGVuJ10gPSBmdW5jdGlvbiAodGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpIHsKICAgIC8vIFNraXAgcmV3cml0aW5nIGlmIHJlcXVlc3RlZAogICAgaWYgKHRoaXNbJ2FsbG93VGVtcGxhdGVSZXdyaXRpbmcnXSA9PT0gZmFsc2UpCiAgICAgICAgcmV0dXJuIHRydWU7CiAgICByZXR1cm4gdGhpc1snbWFrZVRlbXBsYXRlU291cmNlJ10odGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpWydkYXRhJ10oImlzUmV3cml0dGVuIik7Cn07Cgprby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3Jld3JpdGVUZW1wbGF0ZSddID0gZnVuY3Rpb24gKHRlbXBsYXRlLCByZXdyaXRlckNhbGxiYWNrLCB0ZW1wbGF0ZURvY3VtZW50KSB7CiAgICB2YXIgdGVtcGxhdGVTb3VyY2UgPSB0aGlzWydtYWtlVGVtcGxhdGVTb3VyY2UnXSh0ZW1wbGF0ZSwgdGVtcGxhdGVEb2N1bWVudCk7CiAgICB2YXIgcmV3cml0dGVuID0gcmV3cml0ZXJDYWxsYmFjayh0ZW1wbGF0ZVNvdXJjZVsndGV4dCddKCkpOwogICAgdGVtcGxhdGVTb3VyY2VbJ3RleHQnXShyZXdyaXR0ZW4pOwogICAgdGVtcGxhdGVTb3VyY2VbJ2RhdGEnXSgiaXNSZXdyaXR0ZW4iLCB0cnVlKTsKfTsKCmtvLmV4cG9ydFN5bWJvbCgndGVtcGxhdGVFbmdpbmUnLCBrby50ZW1wbGF0ZUVuZ2luZSk7Cgprby50ZW1wbGF0ZVJld3JpdGluZyA9IChmdW5jdGlvbiAoKSB7CiAgICB2YXIgbWVtb2l6ZURhdGFCaW5kaW5nQXR0cmlidXRlU3ludGF4UmVnZXggPSAvKDwoW2Etel0rXGQqKSg/OlxzKyg/IWRhdGEtYmluZFxzKj1ccyopW2EtejAtOVwtXSsoPzo9KD86XCJbXlwiXSpcInxcJ1teXCddKlwnKSk/KSpccyspZGF0YS1iaW5kXHMqPVxzKihbIiddKShbXHNcU10qPylcMy9naTsKICAgIHZhciBtZW1vaXplVmlydHVhbENvbnRhaW5lckJpbmRpbmdTeW50YXhSZWdleCA9IC88IS0tXHMqa29cYlxzKihbXHNcU10qPylccyotLT4vZzsKCiAgICBmdW5jdGlvbiB2YWxpZGF0ZURhdGFCaW5kVmFsdWVzRm9yUmV3cml0aW5nKGtleVZhbHVlQXJyYXkpIHsKICAgICAgICB2YXIgYWxsVmFsaWRhdG9ycyA9IGtvLmV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5VmFsdWVBcnJheS5sZW5ndGg7IGkrKykgewogICAgICAgICAgICB2YXIga2V5ID0ga2V5VmFsdWVBcnJheVtpXVsna2V5J107CiAgICAgICAgICAgIGlmIChhbGxWYWxpZGF0b3JzLmhhc093blByb3BlcnR5KGtleSkpIHsKICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSBhbGxWYWxpZGF0b3JzW2tleV07CgogICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWxpZGF0b3IgPT09ICJmdW5jdGlvbiIpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgcG9zc2libGVFcnJvck1lc3NhZ2UgPSB2YWxpZGF0b3Ioa2V5VmFsdWVBcnJheVtpXVsndmFsdWUnXSk7CiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlRXJyb3JNZXNzYWdlKQogICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocG9zc2libGVFcnJvck1lc3NhZ2UpOwogICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdmFsaWRhdG9yKSB7CiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnIiArIGtleSArICInIGJpbmRpbmcgd2l0aGluIGl0cyB0ZW1wbGF0ZXMiKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBjb25zdHJ1Y3RNZW1vaXplZFRhZ1JlcGxhY2VtZW50KGRhdGFCaW5kQXR0cmlidXRlVmFsdWUsIHRhZ1RvUmV0YWluLCBub2RlTmFtZSwgdGVtcGxhdGVFbmdpbmUpIHsKICAgICAgICB2YXIgZGF0YUJpbmRLZXlWYWx1ZUFycmF5ID0ga28uZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWwoZGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZSk7CiAgICAgICAgdmFsaWRhdGVEYXRhQmluZFZhbHVlc0ZvclJld3JpdGluZyhkYXRhQmluZEtleVZhbHVlQXJyYXkpOwogICAgICAgIHZhciByZXdyaXR0ZW5EYXRhQmluZEF0dHJpYnV0ZVZhbHVlID0ga28uZXhwcmVzc2lvblJld3JpdGluZy5wcmVQcm9jZXNzQmluZGluZ3MoZGF0YUJpbmRLZXlWYWx1ZUFycmF5LCB7J3ZhbHVlQWNjZXNzb3JzJzp0cnVlfSk7CgogICAgICAgIC8vIEZvciBubyBvYnZpb3VzIHJlYXNvbiwgT3BlcmEgZmFpbHMgdG8gZXZhbHVhdGUgcmV3cml0dGVuRGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZSB1bmxlc3MgaXQncyB3cmFwcGVkIGluIGFuIGFkZGl0aW9uYWwKICAgICAgICAvLyBhbm9ueW1vdXMgZnVuY3Rpb24sIGV2ZW4gdGhvdWdoIE9wZXJhJ3MgYnVpbHQtaW4gZGVidWdnZXIgY2FuIGV2YWx1YXRlIGl0IGFueXdheS4gTm8gb3RoZXIgYnJvd3NlciByZXF1aXJlcyB0aGlzCiAgICAgICAgLy8gZXh0cmEgaW5kaXJlY3Rpb24uCiAgICAgICAgdmFyIGFwcGx5QmluZGluZ3NUb05leHRTaWJsaW5nU2NyaXB0ID0KICAgICAgICAgICAgImtvLl9fdHJfYW1idG5zKGZ1bmN0aW9uKCRjb250ZXh0LCRlbGVtZW50KXtyZXR1cm4oZnVuY3Rpb24oKXtyZXR1cm57ICIgKyByZXdyaXR0ZW5EYXRhQmluZEF0dHJpYnV0ZVZhbHVlICsgIiB9IH0pKCl9LCciICsgbm9kZU5hbWUudG9Mb3dlckNhc2UoKSArICInKSI7CiAgICAgICAgcmV0dXJuIHRlbXBsYXRlRW5naW5lWydjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2snXShhcHBseUJpbmRpbmdzVG9OZXh0U2libGluZ1NjcmlwdCkgKyB0YWdUb1JldGFpbjsKICAgIH0KCiAgICByZXR1cm4gewogICAgICAgIGVuc3VyZVRlbXBsYXRlSXNSZXdyaXR0ZW46IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgdGVtcGxhdGVFbmdpbmUsIHRlbXBsYXRlRG9jdW1lbnQpIHsKICAgICAgICAgICAgaWYgKCF0ZW1wbGF0ZUVuZ2luZVsnaXNUZW1wbGF0ZVJld3JpdHRlbiddKHRlbXBsYXRlLCB0ZW1wbGF0ZURvY3VtZW50KSkKICAgICAgICAgICAgICAgIHRlbXBsYXRlRW5naW5lWydyZXdyaXRlVGVtcGxhdGUnXSh0ZW1wbGF0ZSwgZnVuY3Rpb24gKGh0bWxTdHJpbmcpIHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4ga28udGVtcGxhdGVSZXdyaXRpbmcubWVtb2l6ZUJpbmRpbmdBdHRyaWJ1dGVTeW50YXgoaHRtbFN0cmluZywgdGVtcGxhdGVFbmdpbmUpOwogICAgICAgICAgICAgICAgfSwgdGVtcGxhdGVEb2N1bWVudCk7CiAgICAgICAgfSwKCiAgICAgICAgbWVtb2l6ZUJpbmRpbmdBdHRyaWJ1dGVTeW50YXg6IGZ1bmN0aW9uIChodG1sU3RyaW5nLCB0ZW1wbGF0ZUVuZ2luZSkgewogICAgICAgICAgICByZXR1cm4gaHRtbFN0cmluZy5yZXBsYWNlKG1lbW9pemVEYXRhQmluZGluZ0F0dHJpYnV0ZVN5bnRheFJlZ2V4LCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0TWVtb2l6ZWRUYWdSZXBsYWNlbWVudCgvKiBkYXRhQmluZEF0dHJpYnV0ZVZhbHVlOiAqLyBhcmd1bWVudHNbNF0sIC8qIHRhZ1RvUmV0YWluOiAqLyBhcmd1bWVudHNbMV0sIC8qIG5vZGVOYW1lOiAqLyBhcmd1bWVudHNbMl0sIHRlbXBsYXRlRW5naW5lKTsKICAgICAgICAgICAgfSkucmVwbGFjZShtZW1vaXplVmlydHVhbENvbnRhaW5lckJpbmRpbmdTeW50YXhSZWdleCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0TWVtb2l6ZWRUYWdSZXBsYWNlbWVudCgvKiBkYXRhQmluZEF0dHJpYnV0ZVZhbHVlOiAqLyBhcmd1bWVudHNbMV0sIC8qIHRhZ1RvUmV0YWluOiAqLyAiPCEtLSBrbyAtLT4iLCAvKiBub2RlTmFtZTogKi8gIiNjb21tZW50IiwgdGVtcGxhdGVFbmdpbmUpOwogICAgICAgICAgICB9KTsKICAgICAgICB9LAoKICAgICAgICBhcHBseU1lbW9pemVkQmluZGluZ3NUb05leHRTaWJsaW5nOiBmdW5jdGlvbiAoYmluZGluZ3MsIG5vZGVOYW1lKSB7CiAgICAgICAgICAgIHJldHVybiBrby5tZW1vaXphdGlvbi5tZW1vaXplKGZ1bmN0aW9uIChkb21Ob2RlLCBiaW5kaW5nQ29udGV4dCkgewogICAgICAgICAgICAgICAgdmFyIG5vZGVUb0JpbmQgPSBkb21Ob2RlLm5leHRTaWJsaW5nOwogICAgICAgICAgICAgICAgaWYgKG5vZGVUb0JpbmQgJiYgbm9kZVRvQmluZC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZSkgewogICAgICAgICAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ0FjY2Vzc29yc1RvTm9kZShub2RlVG9CaW5kLCBiaW5kaW5ncywgYmluZGluZ0NvbnRleHQpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9KTsKICAgICAgICB9CiAgICB9Cn0pKCk7CgoKLy8gRXhwb3J0ZWQgb25seSBiZWNhdXNlIGl0IGhhcyB0byBiZSByZWZlcmVuY2VkIGJ5IHN0cmluZyBsb29rdXAgZnJvbSB3aXRoaW4gcmV3cml0dGVuIHRlbXBsYXRlCmtvLmV4cG9ydFN5bWJvbCgnX190cl9hbWJ0bnMnLCBrby50ZW1wbGF0ZVJld3JpdGluZy5hcHBseU1lbW9pemVkQmluZGluZ3NUb05leHRTaWJsaW5nKTsKKGZ1bmN0aW9uKCkgewogICAgLy8gQSB0ZW1wbGF0ZSBzb3VyY2UgcmVwcmVzZW50cyBhIHJlYWQvd3JpdGUgd2F5IG9mIGFjY2Vzc2luZyBhIHRlbXBsYXRlLiBUaGlzIGlzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3IgdGVtcGxhdGUgbG9hZGluZy9zYXZpbmcKICAgIC8vIGxvZ2ljIHRvIGJlIGR1cGxpY2F0ZWQgaW4gZXZlcnkgdGVtcGxhdGUgZW5naW5lIChhbmQgbWVhbnMgdGhleSBjYW4gYWxsIHdvcmsgd2l0aCBhbm9ueW1vdXMgdGVtcGxhdGVzLCBldGMuKQogICAgLy8KICAgIC8vIFR3byBhcmUgcHJvdmlkZWQgYnkgZGVmYXVsdDoKICAgIC8vICAxLiBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudCAgICAgICAtIHJlYWRzL3dyaXRlcyB0aGUgdGV4dCBjb250ZW50IG9mIGFuIGFyYml0cmFyeSBET00gZWxlbWVudAogICAgLy8gIDIuIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNFbGVtZW50IC0gdXNlcyBrby51dGlscy5kb21EYXRhIHRvIHJlYWQvd3JpdGUgdGV4dCAqYXNzb2NpYXRlZCogd2l0aCB0aGUgRE9NIGVsZW1lbnQsIGJ1dAogICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aG91dCByZWFkaW5nL3dyaXRpbmcgdGhlIGFjdHVhbCBlbGVtZW50IHRleHQgY29udGVudCwgc2luY2UgaXQgd2lsbCBiZSBvdmVyd3JpdHRlbgogICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGUgcmVuZGVyZWQgdGVtcGxhdGUgb3V0cHV0LgogICAgLy8gWW91IGNhbiBpbXBsZW1lbnQgeW91ciBvd24gdGVtcGxhdGUgc291cmNlIGlmIHlvdSB3YW50IHRvIGZldGNoL3N0b3JlIHRlbXBsYXRlcyBzb21ld2hlcmUgb3RoZXIgdGhhbiBpbiBET00gZWxlbWVudHMuCiAgICAvLyBUZW1wbGF0ZSBzb3VyY2VzIG5lZWQgdG8gaGF2ZSB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczoKICAgIC8vICAgdGV4dCgpIAkJCS0gcmV0dXJucyB0aGUgdGVtcGxhdGUgdGV4dCBmcm9tIHlvdXIgc3RvcmFnZSBsb2NhdGlvbgogICAgLy8gICB0ZXh0KHZhbHVlKQkJLSB3cml0ZXMgdGhlIHN1cHBsaWVkIHRlbXBsYXRlIHRleHQgdG8geW91ciBzdG9yYWdlIGxvY2F0aW9uCiAgICAvLyAgIGRhdGEoa2V5KQkJCS0gcmVhZHMgdmFsdWVzIHN0b3JlZCB1c2luZyBkYXRhKGtleSwgdmFsdWUpIC0gc2VlIGJlbG93CiAgICAvLyAgIGRhdGEoa2V5LCB2YWx1ZSkJLSBhc3NvY2lhdGVzICJ2YWx1ZSIgd2l0aCB0aGlzIHRlbXBsYXRlIGFuZCB0aGUga2V5ICJrZXkiLiBJcyB1c2VkIHRvIHN0b3JlIGluZm9ybWF0aW9uIGxpa2UgImlzUmV3cml0dGVuIi4KICAgIC8vCiAgICAvLyBPcHRpb25hbGx5LCB0ZW1wbGF0ZSBzb3VyY2VzIGNhbiBhbHNvIGhhdmUgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6CiAgICAvLyAgIG5vZGVzKCkgICAgICAgICAgICAtIHJldHVybnMgYSBET00gZWxlbWVudCBjb250YWluaW5nIHRoZSBub2RlcyBvZiB0aGlzIHRlbXBsYXRlLCB3aGVyZSBhdmFpbGFibGUKICAgIC8vICAgbm9kZXModmFsdWUpICAgICAgIC0gd3JpdGVzIHRoZSBnaXZlbiBET00gZWxlbWVudCB0byB5b3VyIHN0b3JhZ2UgbG9jYXRpb24KICAgIC8vIElmIGEgRE9NIGVsZW1lbnQgaXMgYXZhaWxhYmxlIGZvciBhIGdpdmVuIHRlbXBsYXRlIHNvdXJjZSwgdGVtcGxhdGUgZW5naW5lcyBhcmUgZW5jb3VyYWdlZCB0byB1c2UgaXQgaW4gcHJlZmVyZW5jZSBvdmVyIHRleHQoKQogICAgLy8gZm9yIGltcHJvdmVkIHNwZWVkLiBIb3dldmVyLCBhbGwgdGVtcGxhdGVTb3VyY2VzIG11c3Qgc3VwcGx5IHRleHQoKSBldmVuIGlmIHRoZXkgZG9uJ3Qgc3VwcGx5IG5vZGVzKCkuCiAgICAvLwogICAgLy8gT25jZSB5b3UndmUgaW1wbGVtZW50ZWQgYSB0ZW1wbGF0ZVNvdXJjZSwgbWFrZSB5b3VyIHRlbXBsYXRlIGVuZ2luZSB1c2UgaXQgYnkgc3ViY2xhc3Npbmcgd2hhdGV2ZXIgdGVtcGxhdGUgZW5naW5lIHlvdSB3ZXJlCiAgICAvLyB1c2luZyBhbmQgb3ZlcnJpZGluZyAibWFrZVRlbXBsYXRlU291cmNlIiB0byByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgeW91ciBjdXN0b20gdGVtcGxhdGUgc291cmNlLgoKICAgIGtvLnRlbXBsYXRlU291cmNlcyA9IHt9OwoKICAgIC8vIC0tLS0ga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQgLS0tLS0KCiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHsKICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBlbGVtZW50OwogICAgfQoKICAgIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50LnByb3RvdHlwZVsndGV4dCddID0gZnVuY3Rpb24oLyogdmFsdWVUb1dyaXRlICovKSB7CiAgICAgICAgdmFyIHRhZ05hbWVMb3dlciA9IGtvLnV0aWxzLnRhZ05hbWVMb3dlcih0aGlzLmRvbUVsZW1lbnQpLAogICAgICAgICAgICBlbGVtQ29udGVudHNQcm9wZXJ0eSA9IHRhZ05hbWVMb3dlciA9PT0gInNjcmlwdCIgPyAidGV4dCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0YWdOYW1lTG93ZXIgPT09ICJ0ZXh0YXJlYSIgPyAidmFsdWUiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogImlubmVySFRNTCI7CgogICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudFtlbGVtQ29udGVudHNQcm9wZXJ0eV07CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdmFyIHZhbHVlVG9Xcml0ZSA9IGFyZ3VtZW50c1swXTsKICAgICAgICAgICAgaWYgKGVsZW1Db250ZW50c1Byb3BlcnR5ID09PSAiaW5uZXJIVE1MIikKICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldEh0bWwodGhpcy5kb21FbGVtZW50LCB2YWx1ZVRvV3JpdGUpOwogICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnRbZWxlbUNvbnRlbnRzUHJvcGVydHldID0gdmFsdWVUb1dyaXRlOwogICAgICAgIH0KICAgIH07CgogICAgdmFyIGRhdGFEb21EYXRhUHJlZml4ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCkgKyAiXyI7CiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudC5wcm90b3R5cGVbJ2RhdGEnXSA9IGZ1bmN0aW9uKGtleSAvKiwgdmFsdWVUb1dyaXRlICovKSB7CiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHsKICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmRvbURhdGEuZ2V0KHRoaXMuZG9tRWxlbWVudCwgZGF0YURvbURhdGFQcmVmaXggKyBrZXkpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KHRoaXMuZG9tRWxlbWVudCwgZGF0YURvbURhdGFQcmVmaXggKyBrZXksIGFyZ3VtZW50c1sxXSk7CiAgICAgICAgfQogICAgfTsKCiAgICAvLyAtLS0tIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZSAtLS0tLQogICAgLy8gQW5vbnltb3VzIHRlbXBsYXRlcyBhcmUgbm9ybWFsbHkgc2F2ZWQvcmV0cmlldmVkIGFzIERPTSBub2RlcyB0aHJvdWdoICJub2RlcyIuCiAgICAvLyBGb3IgY29tcGF0aWJpbGl0eSwgeW91IGNhbiBhbHNvIHJlYWQgInRleHQiOyBpdCB3aWxsIGJlIHNlcmlhbGl6ZWQgZnJvbSB0aGUgbm9kZXMgb24gZGVtYW5kLgogICAgLy8gV3JpdGluZyB0byAidGV4dCIgaXMgc3RpbGwgc3VwcG9ydGVkLCBidXQgdGhlbiB0aGUgdGVtcGxhdGUgZGF0YSB3aWxsIG5vdCBiZSBhdmFpbGFibGUgYXMgRE9NIG5vZGVzLgoKICAgIHZhciBhbm9ueW1vdXNUZW1wbGF0ZXNEb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7CiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUgPSBmdW5jdGlvbihlbGVtZW50KSB7CiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZWxlbWVudDsKICAgIH0KICAgIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZS5wcm90b3R5cGUgPSBuZXcga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQoKTsKICAgIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGU7CiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUucHJvdG90eXBlWyd0ZXh0J10gPSBmdW5jdGlvbigvKiB2YWx1ZVRvV3JpdGUgKi8pIHsKICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7CiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZURhdGEgPSBrby51dGlscy5kb21EYXRhLmdldCh0aGlzLmRvbUVsZW1lbnQsIGFub255bW91c1RlbXBsYXRlc0RvbURhdGFLZXkpIHx8IHt9OwogICAgICAgICAgICBpZiAodGVtcGxhdGVEYXRhLnRleHREYXRhID09PSB1bmRlZmluZWQgJiYgdGVtcGxhdGVEYXRhLmNvbnRhaW5lckRhdGEpCiAgICAgICAgICAgICAgICB0ZW1wbGF0ZURhdGEudGV4dERhdGEgPSB0ZW1wbGF0ZURhdGEuY29udGFpbmVyRGF0YS5pbm5lckhUTUw7CiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZURhdGEudGV4dERhdGE7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdmFyIHZhbHVlVG9Xcml0ZSA9IGFyZ3VtZW50c1swXTsKICAgICAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQodGhpcy5kb21FbGVtZW50LCBhbm9ueW1vdXNUZW1wbGF0ZXNEb21EYXRhS2V5LCB7dGV4dERhdGE6IHZhbHVlVG9Xcml0ZX0pOwogICAgICAgIH0KICAgIH07CiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudC5wcm90b3R5cGVbJ25vZGVzJ10gPSBmdW5jdGlvbigvKiB2YWx1ZVRvV3JpdGUgKi8pIHsKICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7CiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZURhdGEgPSBrby51dGlscy5kb21EYXRhLmdldCh0aGlzLmRvbUVsZW1lbnQsIGFub255bW91c1RlbXBsYXRlc0RvbURhdGFLZXkpIHx8IHt9OwogICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVEYXRhLmNvbnRhaW5lckRhdGE7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdmFyIHZhbHVlVG9Xcml0ZSA9IGFyZ3VtZW50c1swXTsKICAgICAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQodGhpcy5kb21FbGVtZW50LCBhbm9ueW1vdXNUZW1wbGF0ZXNEb21EYXRhS2V5LCB7Y29udGFpbmVyRGF0YTogdmFsdWVUb1dyaXRlfSk7CiAgICAgICAgfQogICAgfTsKCiAgICBrby5leHBvcnRTeW1ib2woJ3RlbXBsYXRlU291cmNlcycsIGtvLnRlbXBsYXRlU291cmNlcyk7CiAgICBrby5leHBvcnRTeW1ib2woJ3RlbXBsYXRlU291cmNlcy5kb21FbGVtZW50Jywga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQpOwogICAga28uZXhwb3J0U3ltYm9sKCd0ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUnLCBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUpOwp9KSgpOwooZnVuY3Rpb24gKCkgewogICAgdmFyIF90ZW1wbGF0ZUVuZ2luZTsKICAgIGtvLnNldFRlbXBsYXRlRW5naW5lID0gZnVuY3Rpb24gKHRlbXBsYXRlRW5naW5lKSB7CiAgICAgICAgaWYgKCh0ZW1wbGF0ZUVuZ2luZSAhPSB1bmRlZmluZWQpICYmICEodGVtcGxhdGVFbmdpbmUgaW5zdGFuY2VvZiBrby50ZW1wbGF0ZUVuZ2luZSkpCiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigidGVtcGxhdGVFbmdpbmUgbXVzdCBpbmhlcml0IGZyb20ga28udGVtcGxhdGVFbmdpbmUiKTsKICAgICAgICBfdGVtcGxhdGVFbmdpbmUgPSB0ZW1wbGF0ZUVuZ2luZTsKICAgIH0KCiAgICBmdW5jdGlvbiBpbnZva2VGb3JFYWNoTm9kZUluQ29udGludW91c1JhbmdlKGZpcnN0Tm9kZSwgbGFzdE5vZGUsIGFjdGlvbikgewogICAgICAgIHZhciBub2RlLCBuZXh0SW5RdWV1ZSA9IGZpcnN0Tm9kZSwgZmlyc3RPdXRPZlJhbmdlTm9kZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5uZXh0U2libGluZyhsYXN0Tm9kZSk7CiAgICAgICAgd2hpbGUgKG5leHRJblF1ZXVlICYmICgobm9kZSA9IG5leHRJblF1ZXVlKSAhPT0gZmlyc3RPdXRPZlJhbmdlTm9kZSkpIHsKICAgICAgICAgICAgbmV4dEluUXVldWUgPSBrby52aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcobm9kZSk7CiAgICAgICAgICAgIGFjdGlvbihub2RlLCBuZXh0SW5RdWV1ZSk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmluZGluZ3NPbkNvbnRpbnVvdXNOb2RlQXJyYXkoY29udGludW91c05vZGVBcnJheSwgYmluZGluZ0NvbnRleHQpIHsKICAgICAgICAvLyBUbyBiZSB1c2VkIG9uIGFueSBub2RlcyB0aGF0IGhhdmUgYmVlbiByZW5kZXJlZCBieSBhIHRlbXBsYXRlIGFuZCBoYXZlIGJlZW4gaW5zZXJ0ZWQgaW50byBzb21lIHBhcmVudCBlbGVtZW50CiAgICAgICAgLy8gV2Fsa3MgdGhyb3VnaCBjb250aW51b3VzTm9kZUFycmF5ICh3aGljaCAqbXVzdCogYmUgY29udGludW91cywgaS5lLiwgYW4gdW5pbnRlcnJ1cHRlZCBzZXF1ZW5jZSBvZiBzaWJsaW5nIG5vZGVzLCBiZWNhdXNlCiAgICAgICAgLy8gdGhlIGFsZ29yaXRobSBmb3Igd2Fsa2luZyB0aGVtIHJlbGllcyBvbiB0aGlzKSwgYW5kIGZvciBlYWNoIHRvcC1sZXZlbCBpdGVtIGluIHRoZSB2aXJ0dWFsLWVsZW1lbnQgc2Vuc2UsCiAgICAgICAgLy8gKDEpIERvZXMgYSByZWd1bGFyICJhcHBseUJpbmRpbmdzIiB0byBhc3NvY2lhdGUgYmluZGluZ0NvbnRleHQgd2l0aCB0aGlzIG5vZGUgYW5kIHRvIGFjdGl2YXRlIGFueSBub24tbWVtb2l6ZWQgYmluZGluZ3MKICAgICAgICAvLyAoMikgVW5tZW1vaXplcyBhbnkgbWVtb3MgaW4gdGhlIERPTSBzdWJ0cmVlIChlLmcuLCB0byBhY3RpdmF0ZSBiaW5kaW5ncyB0aGF0IGhhZCBiZWVuIG1lbW9pemVkIGR1cmluZyB0ZW1wbGF0ZSByZXdyaXRpbmcpCgogICAgICAgIGlmIChjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aCkgewogICAgICAgICAgICB2YXIgZmlyc3ROb2RlID0gY29udGludW91c05vZGVBcnJheVswXSwKICAgICAgICAgICAgICAgIGxhc3ROb2RlID0gY29udGludW91c05vZGVBcnJheVtjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aCAtIDFdLAogICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IGZpcnN0Tm9kZS5wYXJlbnROb2RlLAogICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBrby5iaW5kaW5nUHJvdmlkZXJbJ2luc3RhbmNlJ10sCiAgICAgICAgICAgICAgICBwcmVwcm9jZXNzTm9kZSA9IHByb3ZpZGVyWydwcmVwcm9jZXNzTm9kZSddOwoKICAgICAgICAgICAgaWYgKHByZXByb2Nlc3NOb2RlKSB7CiAgICAgICAgICAgICAgICBpbnZva2VGb3JFYWNoTm9kZUluQ29udGludW91c1JhbmdlKGZpcnN0Tm9kZSwgbGFzdE5vZGUsIGZ1bmN0aW9uKG5vZGUsIG5leHROb2RlSW5SYW5nZSkgewogICAgICAgICAgICAgICAgICAgIHZhciBub2RlUHJldmlvdXNTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7CiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld05vZGVzID0gcHJlcHJvY2Vzc05vZGUuY2FsbChwcm92aWRlciwgbm9kZSk7CiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld05vZGVzKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBmaXJzdE5vZGUpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5vZGUgPSBuZXdOb2Rlc1swXSB8fCBuZXh0Tm9kZUluUmFuZ2U7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBsYXN0Tm9kZSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROb2RlID0gbmV3Tm9kZXNbbmV3Tm9kZXMubGVuZ3RoIC0gMV0gfHwgbm9kZVByZXZpb3VzU2libGluZzsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9KTsKCiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHByZXByb2Nlc3NOb2RlIGNhbiBjaGFuZ2UgdGhlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIGZpcnN0IGFuZCBsYXN0IG5vZGVzLCB1cGRhdGUgY29udGludW91c05vZGVBcnJheSB0byBtYXRjaC4KICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdGhlIGZ1bGwgc2V0LCBpbmNsdWRpbmcgaW5uZXIgbm9kZXMsIGJlY2F1c2UgdGhlIHVubWVtb2l6ZSBzdGVwIG1pZ2h0IHJlbW92ZSB0aGUgZmlyc3Qgbm9kZSAoYW5kIHNvIHRoZSByZWFsCiAgICAgICAgICAgICAgICAvLyBmaXJzdCBub2RlIG5lZWRzIHRvIGJlIGluIHRoZSBhcnJheSkuCiAgICAgICAgICAgICAgICBjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aCA9IDA7CiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0Tm9kZSkgeyAvLyBwcmVwcm9jZXNzTm9kZSBtaWdodCBoYXZlIHJlbW92ZWQgYWxsIHRoZSBub2RlcywgaW4gd2hpY2ggY2FzZSB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byBkbwogICAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmIChmaXJzdE5vZGUgPT09IGxhc3ROb2RlKSB7CiAgICAgICAgICAgICAgICAgICAgY29udGludW91c05vZGVBcnJheS5wdXNoKGZpcnN0Tm9kZSk7CiAgICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgICAgIGNvbnRpbnVvdXNOb2RlQXJyYXkucHVzaChmaXJzdE5vZGUsIGxhc3ROb2RlKTsKICAgICAgICAgICAgICAgICAgICBrby51dGlscy5maXhVcENvbnRpbnVvdXNOb2RlQXJyYXkoY29udGludW91c05vZGVBcnJheSwgcGFyZW50Tm9kZSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC8vIE5lZWQgdG8gYXBwbHlCaW5kaW5ncyAqYmVmb3JlKiB1bm1lbW96aWF0aW9uLCBiZWNhdXNlIHVubWVtb2l6YXRpb24gbWlnaHQgaW50cm9kdWNlIGV4dHJhIG5vZGVzICh0aGF0IHdlIGRvbid0IHdhbnQgdG8gcmUtYmluZCkKICAgICAgICAgICAgLy8gd2hlcmVhcyBhIHJlZ3VsYXIgYXBwbHlCaW5kaW5ncyB3b24ndCBpbnRyb2R1Y2UgbmV3IG1lbW9pemVkIG5vZGVzCiAgICAgICAgICAgIGludm9rZUZvckVhY2hOb2RlSW5Db250aW51b3VzUmFuZ2UoZmlyc3ROb2RlLCBsYXN0Tm9kZSwgZnVuY3Rpb24obm9kZSkgewogICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgfHwgbm9kZS5ub2RlVHlwZSA9PT0gOCkKICAgICAgICAgICAgICAgICAgICBrby5hcHBseUJpbmRpbmdzKGJpbmRpbmdDb250ZXh0LCBub2RlKTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIGludm9rZUZvckVhY2hOb2RlSW5Db250aW51b3VzUmFuZ2UoZmlyc3ROb2RlLCBsYXN0Tm9kZSwgZnVuY3Rpb24obm9kZSkgewogICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgfHwgbm9kZS5ub2RlVHlwZSA9PT0gOCkKICAgICAgICAgICAgICAgICAgICBrby5tZW1vaXphdGlvbi51bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHMobm9kZSwgW2JpbmRpbmdDb250ZXh0XSk7CiAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGFueSBjaGFuZ2VzIGRvbmUgYnkgYXBwbHlCaW5kaW5ncyBvciB1bm1lbW9pemUgYXJlIHJlZmxlY3RlZCBpbiB0aGUgYXJyYXkKICAgICAgICAgICAga28udXRpbHMuZml4VXBDb250aW51b3VzTm9kZUFycmF5KGNvbnRpbnVvdXNOb2RlQXJyYXksIHBhcmVudE5vZGUpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBnZXRGaXJzdE5vZGVGcm9tUG9zc2libGVBcnJheShub2RlT3JOb2RlQXJyYXkpIHsKICAgICAgICByZXR1cm4gbm9kZU9yTm9kZUFycmF5Lm5vZGVUeXBlID8gbm9kZU9yTm9kZUFycmF5CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5vZGVPck5vZGVBcnJheS5sZW5ndGggPiAwID8gbm9kZU9yTm9kZUFycmF5WzBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7CiAgICB9CgogICAgZnVuY3Rpb24gZXhlY3V0ZVRlbXBsYXRlKHRhcmdldE5vZGVPck5vZGVBcnJheSwgcmVuZGVyTW9kZSwgdGVtcGxhdGUsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zKSB7CiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307CiAgICAgICAgdmFyIGZpcnN0VGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGVPck5vZGVBcnJheSAmJiBnZXRGaXJzdE5vZGVGcm9tUG9zc2libGVBcnJheSh0YXJnZXROb2RlT3JOb2RlQXJyYXkpOwogICAgICAgIHZhciB0ZW1wbGF0ZURvY3VtZW50ID0gZmlyc3RUYXJnZXROb2RlICYmIGZpcnN0VGFyZ2V0Tm9kZS5vd25lckRvY3VtZW50OwogICAgICAgIHZhciB0ZW1wbGF0ZUVuZ2luZVRvVXNlID0gKG9wdGlvbnNbJ3RlbXBsYXRlRW5naW5lJ10gfHwgX3RlbXBsYXRlRW5naW5lKTsKICAgICAgICBrby50ZW1wbGF0ZVJld3JpdGluZy5lbnN1cmVUZW1wbGF0ZUlzUmV3cml0dGVuKHRlbXBsYXRlLCB0ZW1wbGF0ZUVuZ2luZVRvVXNlLCB0ZW1wbGF0ZURvY3VtZW50KTsKICAgICAgICB2YXIgcmVuZGVyZWROb2Rlc0FycmF5ID0gdGVtcGxhdGVFbmdpbmVUb1VzZVsncmVuZGVyVGVtcGxhdGUnXSh0ZW1wbGF0ZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIHRlbXBsYXRlRG9jdW1lbnQpOwoKICAgICAgICAvLyBMb29zZWx5IGNoZWNrIHJlc3VsdCBpcyBhbiBhcnJheSBvZiBET00gbm9kZXMKICAgICAgICBpZiAoKHR5cGVvZiByZW5kZXJlZE5vZGVzQXJyYXkubGVuZ3RoICE9ICJudW1iZXIiKSB8fCAocmVuZGVyZWROb2Rlc0FycmF5Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHJlbmRlcmVkTm9kZXNBcnJheVswXS5ub2RlVHlwZSAhPSAibnVtYmVyIikpCiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiVGVtcGxhdGUgZW5naW5lIG11c3QgcmV0dXJuIGFuIGFycmF5IG9mIERPTSBub2RlcyIpOwoKICAgICAgICB2YXIgaGF2ZUFkZGVkTm9kZXNUb1BhcmVudCA9IGZhbHNlOwogICAgICAgIHN3aXRjaCAocmVuZGVyTW9kZSkgewogICAgICAgICAgICBjYXNlICJyZXBsYWNlQ2hpbGRyZW4iOgogICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlbih0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlcmVkTm9kZXNBcnJheSk7CiAgICAgICAgICAgICAgICBoYXZlQWRkZWROb2Rlc1RvUGFyZW50ID0gdHJ1ZTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlICJyZXBsYWNlTm9kZSI6CiAgICAgICAgICAgICAgICBrby51dGlscy5yZXBsYWNlRG9tTm9kZXModGFyZ2V0Tm9kZU9yTm9kZUFycmF5LCByZW5kZXJlZE5vZGVzQXJyYXkpOwogICAgICAgICAgICAgICAgaGF2ZUFkZGVkTm9kZXNUb1BhcmVudCA9IHRydWU7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSAiaWdub3JlVGFyZ2V0Tm9kZSI6IGJyZWFrOwogICAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJVbmtub3duIHJlbmRlck1vZGU6ICIgKyByZW5kZXJNb2RlKTsKICAgICAgICB9CgogICAgICAgIGlmIChoYXZlQWRkZWROb2Rlc1RvUGFyZW50KSB7CiAgICAgICAgICAgIGFjdGl2YXRlQmluZGluZ3NPbkNvbnRpbnVvdXNOb2RlQXJyYXkocmVuZGVyZWROb2Rlc0FycmF5LCBiaW5kaW5nQ29udGV4dCk7CiAgICAgICAgICAgIGlmIChvcHRpb25zWydhZnRlclJlbmRlciddKQogICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUob3B0aW9uc1snYWZ0ZXJSZW5kZXInXSwgbnVsbCwgW3JlbmRlcmVkTm9kZXNBcnJheSwgYmluZGluZ0NvbnRleHRbJyRkYXRhJ11dKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiByZW5kZXJlZE5vZGVzQXJyYXk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVzb2x2ZVRlbXBsYXRlTmFtZSh0ZW1wbGF0ZSwgZGF0YSwgY29udGV4dCkgewogICAgICAgIC8vIFRoZSB0ZW1wbGF0ZSBjYW4gYmUgc3BlY2lmaWVkIGFzOgogICAgICAgIGlmIChrby5pc09ic2VydmFibGUodGVtcGxhdGUpKSB7CiAgICAgICAgICAgIC8vIDEuIEFuIG9ic2VydmFibGUsIHdpdGggc3RyaW5nIHZhbHVlCiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZSgpOwogICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnZnVuY3Rpb24nKSB7CiAgICAgICAgICAgIC8vIDIuIEEgZnVuY3Rpb24gb2YgKGRhdGEsIGNvbnRleHQpIHJldHVybmluZyBhIHN0cmluZwogICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUoZGF0YSwgY29udGV4dCk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gMy4gQSBzdHJpbmcKICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlOwogICAgICAgIH0KICAgIH0KCiAgICBrby5yZW5kZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgZGF0YU9yQmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIHRhcmdldE5vZGVPck5vZGVBcnJheSwgcmVuZGVyTW9kZSkgewogICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OwogICAgICAgIGlmICgob3B0aW9uc1sndGVtcGxhdGVFbmdpbmUnXSB8fCBfdGVtcGxhdGVFbmdpbmUpID09IHVuZGVmaW5lZCkKICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJTZXQgYSB0ZW1wbGF0ZSBlbmdpbmUgYmVmb3JlIGNhbGxpbmcgcmVuZGVyVGVtcGxhdGUiKTsKICAgICAgICByZW5kZXJNb2RlID0gcmVuZGVyTW9kZSB8fCAicmVwbGFjZUNoaWxkcmVuIjsKCiAgICAgICAgaWYgKHRhcmdldE5vZGVPck5vZGVBcnJheSkgewogICAgICAgICAgICB2YXIgZmlyc3RUYXJnZXROb2RlID0gZ2V0Rmlyc3ROb2RlRnJvbVBvc3NpYmxlQXJyYXkodGFyZ2V0Tm9kZU9yTm9kZUFycmF5KTsKCiAgICAgICAgICAgIHZhciB3aGVuVG9EaXNwb3NlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKCFmaXJzdFRhcmdldE5vZGUpIHx8ICFrby51dGlscy5kb21Ob2RlSXNBdHRhY2hlZFRvRG9jdW1lbnQoZmlyc3RUYXJnZXROb2RlKTsgfTsgLy8gUGFzc2l2ZSBkaXNwb3NhbCAob24gbmV4dCBldmFsdWF0aW9uKQogICAgICAgICAgICB2YXIgYWN0aXZlbHlEaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgPSAoZmlyc3RUYXJnZXROb2RlICYmIHJlbmRlck1vZGUgPT0gInJlcGxhY2VOb2RlIikgPyBmaXJzdFRhcmdldE5vZGUucGFyZW50Tm9kZSA6IGZpcnN0VGFyZ2V0Tm9kZTsKCiAgICAgICAgICAgIHJldHVybiBrby5kZXBlbmRlbnRPYnNlcnZhYmxlKCAvLyBTbyB0aGUgRE9NIGlzIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB3aGVuIGFueSBkZXBlbmRlbmN5IGNoYW5nZXMKICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgd2UndmUgZ290IGEgcHJvcGVyIGJpbmRpbmcgY29udGV4dCB0byB3b3JrIHdpdGgKICAgICAgICAgICAgICAgICAgICB2YXIgYmluZGluZ0NvbnRleHQgPSAoZGF0YU9yQmluZGluZ0NvbnRleHQgJiYgKGRhdGFPckJpbmRpbmdDb250ZXh0IGluc3RhbmNlb2Yga28uYmluZGluZ0NvbnRleHQpKQogICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGFPckJpbmRpbmdDb250ZXh0CiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IGtvLmJpbmRpbmdDb250ZXh0KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoZGF0YU9yQmluZGluZ0NvbnRleHQpKTsKCiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlTmFtZSA9IHJlc29sdmVUZW1wbGF0ZU5hbWUodGVtcGxhdGUsIGJpbmRpbmdDb250ZXh0WyckZGF0YSddLCBiaW5kaW5nQ29udGV4dCksCiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkTm9kZXNBcnJheSA9IGV4ZWN1dGVUZW1wbGF0ZSh0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlck1vZGUsIHRlbXBsYXRlTmFtZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpOwoKICAgICAgICAgICAgICAgICAgICBpZiAocmVuZGVyTW9kZSA9PSAicmVwbGFjZU5vZGUiKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGVPck5vZGVBcnJheSA9IHJlbmRlcmVkTm9kZXNBcnJheTsKICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RUYXJnZXROb2RlID0gZ2V0Rmlyc3ROb2RlRnJvbVBvc3NpYmxlQXJyYXkodGFyZ2V0Tm9kZU9yTm9kZUFycmF5KTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgbnVsbCwKICAgICAgICAgICAgICAgIHsgZGlzcG9zZVdoZW46IHdoZW5Ub0Rpc3Bvc2UsIGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogYWN0aXZlbHlEaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgfQogICAgICAgICAgICApOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIC8vIFdlIGRvbid0IHlldCBoYXZlIGEgRE9NIG5vZGUgdG8gZXZhbHVhdGUsIHNvIHVzZSBhIG1lbW8gYW5kIHJlbmRlciB0aGUgdGVtcGxhdGUgbGF0ZXIgd2hlbiB0aGVyZSBpcyBhIERPTSBub2RlCiAgICAgICAgICAgIHJldHVybiBrby5tZW1vaXphdGlvbi5tZW1vaXplKGZ1bmN0aW9uIChkb21Ob2RlKSB7CiAgICAgICAgICAgICAgICBrby5yZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YU9yQmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIGRvbU5vZGUsICJyZXBsYWNlTm9kZSIpOwogICAgICAgICAgICB9KTsKICAgICAgICB9CiAgICB9OwoKICAgIGtvLnJlbmRlclRlbXBsYXRlRm9yRWFjaCA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgYXJyYXlPck9ic2VydmFibGVBcnJheSwgb3B0aW9ucywgdGFyZ2V0Tm9kZSwgcGFyZW50QmluZGluZ0NvbnRleHQpIHsKICAgICAgICAvLyBTaW5jZSBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nIGFsd2F5cyBjYWxscyBleGVjdXRlVGVtcGxhdGVGb3JBcnJheUl0ZW0gYW5kIHRoZW4KICAgICAgICAvLyBhY3RpdmF0ZUJpbmRpbmdzQ2FsbGJhY2sgZm9yIGFkZGVkIGl0ZW1zLCB3ZSBjYW4gc3RvcmUgdGhlIGJpbmRpbmcgY29udGV4dCBpbiB0aGUgZm9ybWVyIHRvIHVzZSBpbiB0aGUgbGF0dGVyLgogICAgICAgIHZhciBhcnJheUl0ZW1Db250ZXh0OwoKICAgICAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcgdG8gZ2V0IHRoZSBub2RlcyB0byBhZGQgdG8gdGFyZ2V0Tm9kZQogICAgICAgIHZhciBleGVjdXRlVGVtcGxhdGVGb3JBcnJheUl0ZW0gPSBmdW5jdGlvbiAoYXJyYXlWYWx1ZSwgaW5kZXgpIHsKICAgICAgICAgICAgLy8gU3VwcG9ydCBzZWxlY3RpbmcgdGVtcGxhdGUgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGF0YSBiZWluZyByZW5kZXJlZAogICAgICAgICAgICBhcnJheUl0ZW1Db250ZXh0ID0gcGFyZW50QmluZGluZ0NvbnRleHRbJ2NyZWF0ZUNoaWxkQ29udGV4dCddKGFycmF5VmFsdWUsIG9wdGlvbnNbJ2FzJ10sIGZ1bmN0aW9uKGNvbnRleHQpIHsKICAgICAgICAgICAgICAgIGNvbnRleHRbJyRpbmRleCddID0gaW5kZXg7CiAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgdmFyIHRlbXBsYXRlTmFtZSA9IHJlc29sdmVUZW1wbGF0ZU5hbWUodGVtcGxhdGUsIGFycmF5VmFsdWUsIGFycmF5SXRlbUNvbnRleHQpOwogICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVRlbXBsYXRlKG51bGwsICJpZ25vcmVUYXJnZXROb2RlIiwgdGVtcGxhdGVOYW1lLCBhcnJheUl0ZW1Db250ZXh0LCBvcHRpb25zKTsKICAgICAgICB9CgogICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZyBoYXMgYWRkZWQgbm9kZXMgdG8gdGFyZ2V0Tm9kZQogICAgICAgIHZhciBhY3RpdmF0ZUJpbmRpbmdzQ2FsbGJhY2sgPSBmdW5jdGlvbihhcnJheVZhbHVlLCBhZGRlZE5vZGVzQXJyYXksIGluZGV4KSB7CiAgICAgICAgICAgIGFjdGl2YXRlQmluZGluZ3NPbkNvbnRpbnVvdXNOb2RlQXJyYXkoYWRkZWROb2Rlc0FycmF5LCBhcnJheUl0ZW1Db250ZXh0KTsKICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2FmdGVyUmVuZGVyJ10pCiAgICAgICAgICAgICAgICBvcHRpb25zWydhZnRlclJlbmRlciddKGFkZGVkTm9kZXNBcnJheSwgYXJyYXlWYWx1ZSk7CiAgICAgICAgfTsKCiAgICAgICAgcmV0dXJuIGtvLmRlcGVuZGVudE9ic2VydmFibGUoZnVuY3Rpb24gKCkgewogICAgICAgICAgICB2YXIgdW53cmFwcGVkQXJyYXkgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFycmF5T3JPYnNlcnZhYmxlQXJyYXkpIHx8IFtdOwogICAgICAgICAgICBpZiAodHlwZW9mIHVud3JhcHBlZEFycmF5Lmxlbmd0aCA9PSAidW5kZWZpbmVkIikgLy8gQ29lcmNlIHNpbmdsZSB2YWx1ZSBpbnRvIGFycmF5CiAgICAgICAgICAgICAgICB1bndyYXBwZWRBcnJheSA9IFt1bndyYXBwZWRBcnJheV07CgogICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IGFueSBlbnRyaWVzIG1hcmtlZCBhcyBkZXN0cm95ZWQKICAgICAgICAgICAgdmFyIGZpbHRlcmVkQXJyYXkgPSBrby51dGlscy5hcnJheUZpbHRlcih1bndyYXBwZWRBcnJheSwgZnVuY3Rpb24oaXRlbSkgewogICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNbJ2luY2x1ZGVEZXN0cm95ZWQnXSB8fCBpdGVtID09PSB1bmRlZmluZWQgfHwgaXRlbSA9PT0gbnVsbCB8fCAha28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShpdGVtWydfZGVzdHJveSddKTsKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICAvLyBDYWxsIHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcsIGlnbm9yaW5nIGFueSBvYnNlcnZhYmxlcyB1bndyYXBwZWQgd2l0aGluIChtb3N0IGxpa2VseSBmcm9tIGEgY2FsbGJhY2sgZnVuY3Rpb24pLgogICAgICAgICAgICAvLyBJZiB0aGUgYXJyYXkgaXRlbXMgYXJlIG9ic2VydmFibGVzLCB0aG91Z2gsIHRoZXkgd2lsbCBiZSB1bndyYXBwZWQgaW4gZXhlY3V0ZVRlbXBsYXRlRm9yQXJyYXlJdGVtIGFuZCBtYW5hZ2VkIHdpdGhpbiBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nLgogICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShrby51dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nLCBudWxsLCBbdGFyZ2V0Tm9kZSwgZmlsdGVyZWRBcnJheSwgZXhlY3V0ZVRlbXBsYXRlRm9yQXJyYXlJdGVtLCBvcHRpb25zLCBhY3RpdmF0ZUJpbmRpbmdzQ2FsbGJhY2tdKTsKCiAgICAgICAgfSwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IHRhcmdldE5vZGUgfSk7CiAgICB9OwoKICAgIHZhciB0ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleSA9IGtvLnV0aWxzLmRvbURhdGEubmV4dEtleSgpOwogICAgZnVuY3Rpb24gZGlzcG9zZU9sZENvbXB1dGVkQW5kU3RvcmVOZXdPbmUoZWxlbWVudCwgbmV3Q29tcHV0ZWQpIHsKICAgICAgICB2YXIgb2xkQ29tcHV0ZWQgPSBrby51dGlscy5kb21EYXRhLmdldChlbGVtZW50LCB0ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleSk7CiAgICAgICAgaWYgKG9sZENvbXB1dGVkICYmICh0eXBlb2Yob2xkQ29tcHV0ZWQuZGlzcG9zZSkgPT0gJ2Z1bmN0aW9uJykpCiAgICAgICAgICAgIG9sZENvbXB1dGVkLmRpc3Bvc2UoKTsKICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCB0ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleSwgKG5ld0NvbXB1dGVkICYmIG5ld0NvbXB1dGVkLmlzQWN0aXZlKCkpID8gbmV3Q29tcHV0ZWQgOiB1bmRlZmluZWQpOwogICAgfQoKICAgIGtvLmJpbmRpbmdIYW5kbGVyc1sndGVtcGxhdGUnXSA9IHsKICAgICAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHsKICAgICAgICAgICAgLy8gU3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzCiAgICAgICAgICAgIHZhciBiaW5kaW5nVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7CiAgICAgICAgICAgIGlmICh0eXBlb2YgYmluZGluZ1ZhbHVlID09ICJzdHJpbmciIHx8IGJpbmRpbmdWYWx1ZVsnbmFtZSddKSB7CiAgICAgICAgICAgICAgICAvLyBJdCdzIGEgbmFtZWQgdGVtcGxhdGUgLSBjbGVhciB0aGUgZWxlbWVudAogICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZShlbGVtZW50KTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIC8vIEl0J3MgYW4gYW5vbnltb3VzIHRlbXBsYXRlIC0gc3RvcmUgdGhlIGVsZW1lbnQgY29udGVudHMsIHRoZW4gY2xlYXIgdGhlIGVsZW1lbnQKICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZU5vZGVzID0ga28udmlydHVhbEVsZW1lbnRzLmNoaWxkTm9kZXMoZWxlbWVudCksCiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0ga28udXRpbHMubW92ZUNsZWFuZWROb2Rlc1RvQ29udGFpbmVyRWxlbWVudCh0ZW1wbGF0ZU5vZGVzKTsgLy8gVGhpcyBhbHNvIHJlbW92ZXMgdGhlIG5vZGVzIGZyb20gdGhlaXIgY3VycmVudCBwYXJlbnQKICAgICAgICAgICAgICAgIG5ldyBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUoZWxlbWVudClbJ25vZGVzJ10oY29udGFpbmVyKTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4geyAnY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MnOiB0cnVlIH07CiAgICAgICAgfSwKICAgICAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7CiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlQWNjZXNzb3IoKSwKICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSwKICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlKSwKICAgICAgICAgICAgICAgIHNob3VsZERpc3BsYXkgPSB0cnVlLAogICAgICAgICAgICAgICAgdGVtcGxhdGVDb21wdXRlZCA9IG51bGwsCiAgICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWU7CgogICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gInN0cmluZyIpIHsKICAgICAgICAgICAgICAgIHRlbXBsYXRlTmFtZSA9IHZhbHVlOwogICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gb3B0aW9uc1snbmFtZSddOwoKICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgImlmIi8iaWZub3QiIGNvbmRpdGlvbnMKICAgICAgICAgICAgICAgIGlmICgnaWYnIGluIG9wdGlvbnMpCiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGlzcGxheSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUob3B0aW9uc1snaWYnXSk7CiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRGlzcGxheSAmJiAnaWZub3QnIGluIG9wdGlvbnMpCiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGlzcGxheSA9ICFrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG9wdGlvbnNbJ2lmbm90J10pOwoKICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUob3B0aW9uc1snZGF0YSddKTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgaWYgKCdmb3JlYWNoJyBpbiBvcHRpb25zKSB7CiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgb25jZSBmb3IgZWFjaCBkYXRhIHBvaW50ICh0cmVhdGluZyBkYXRhIHNldCBhcyBlbXB0eSBpZiBzaG91bGREaXNwbGF5PT1mYWxzZSkKICAgICAgICAgICAgICAgIHZhciBkYXRhQXJyYXkgPSAoc2hvdWxkRGlzcGxheSAmJiBvcHRpb25zWydmb3JlYWNoJ10pIHx8IFtdOwogICAgICAgICAgICAgICAgdGVtcGxhdGVDb21wdXRlZCA9IGtvLnJlbmRlclRlbXBsYXRlRm9yRWFjaCh0ZW1wbGF0ZU5hbWUgfHwgZWxlbWVudCwgZGF0YUFycmF5LCBvcHRpb25zLCBlbGVtZW50LCBiaW5kaW5nQ29udGV4dCk7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNob3VsZERpc3BsYXkpIHsKICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUoZWxlbWVudCk7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgb25jZSBmb3IgdGhpcyBzaW5nbGUgZGF0YSBwb2ludCAob3IgdXNlIHRoZSB2aWV3TW9kZWwgaWYgbm8gZGF0YSB3YXMgcHJvdmlkZWQpCiAgICAgICAgICAgICAgICB2YXIgaW5uZXJCaW5kaW5nQ29udGV4dCA9ICgnZGF0YScgaW4gb3B0aW9ucykgPwogICAgICAgICAgICAgICAgICAgIGJpbmRpbmdDb250ZXh0WydjcmVhdGVDaGlsZENvbnRleHQnXShkYXRhVmFsdWUsIG9wdGlvbnNbJ2FzJ10pIDogIC8vIEdpdmVuIGFuIGV4cGxpdGl0ICdkYXRhJyB2YWx1ZSwgd2UgY3JlYXRlIGEgY2hpbGQgYmluZGluZyBjb250ZXh0IGZvciBpdAogICAgICAgICAgICAgICAgICAgIGJpbmRpbmdDb250ZXh0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2l2ZW4gbm8gZXhwbGljaXQgJ2RhdGEnIHZhbHVlLCB3ZSByZXRhaW4gdGhlIHNhbWUgYmluZGluZyBjb250ZXh0CiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbXB1dGVkID0ga28ucmVuZGVyVGVtcGxhdGUodGVtcGxhdGVOYW1lIHx8IGVsZW1lbnQsIGlubmVyQmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIGVsZW1lbnQpOwogICAgICAgICAgICB9CgogICAgICAgICAgICAvLyBJdCBvbmx5IG1ha2VzIHNlbnNlIHRvIGhhdmUgYSBzaW5nbGUgdGVtcGxhdGUgY29tcHV0ZWQgcGVyIGVsZW1lbnQgKG90aGVyd2lzZSB3aGljaCBvbmUgc2hvdWxkIGhhdmUgaXRzIG91dHB1dCBkaXNwbGF5ZWQ/KQogICAgICAgICAgICBkaXNwb3NlT2xkQ29tcHV0ZWRBbmRTdG9yZU5ld09uZShlbGVtZW50LCB0ZW1wbGF0ZUNvbXB1dGVkKTsKICAgICAgICB9CiAgICB9OwoKICAgIC8vIEFub255bW91cyB0ZW1wbGF0ZXMgY2FuJ3QgYmUgcmV3cml0dGVuLiBHaXZlIGEgbmljZSBlcnJvciBtZXNzYWdlIGlmIHlvdSB0cnkgdG8gZG8gaXQuCiAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1sndGVtcGxhdGUnXSA9IGZ1bmN0aW9uKGJpbmRpbmdWYWx1ZSkgewogICAgICAgIHZhciBwYXJzZWRCaW5kaW5nVmFsdWUgPSBrby5leHByZXNzaW9uUmV3cml0aW5nLnBhcnNlT2JqZWN0TGl0ZXJhbChiaW5kaW5nVmFsdWUpOwoKICAgICAgICBpZiAoKHBhcnNlZEJpbmRpbmdWYWx1ZS5sZW5ndGggPT0gMSkgJiYgcGFyc2VkQmluZGluZ1ZhbHVlWzBdWyd1bmtub3duJ10pCiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBJdCBsb29rcyBsaWtlIGEgc3RyaW5nIGxpdGVyYWwsIG5vdCBhbiBvYmplY3QgbGl0ZXJhbCwgc28gdHJlYXQgaXQgYXMgYSBuYW1lZCB0ZW1wbGF0ZSAod2hpY2ggaXMgYWxsb3dlZCBmb3IgcmV3cml0aW5nKQoKICAgICAgICBpZiAoa28uZXhwcmVzc2lvblJld3JpdGluZy5rZXlWYWx1ZUFycmF5Q29udGFpbnNLZXkocGFyc2VkQmluZGluZ1ZhbHVlLCAibmFtZSIpKQogICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gTmFtZWQgdGVtcGxhdGVzIGNhbiBiZSByZXdyaXR0ZW4sIHNvIHJldHVybiAibm8gZXJyb3IiCiAgICAgICAgcmV0dXJuICJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IGFub255bW91cyB0ZW1wbGF0ZXMgbmVzdGVkIHdpdGhpbiBpdHMgdGVtcGxhdGVzIjsKICAgIH07CgogICAga28udmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1sndGVtcGxhdGUnXSA9IHRydWU7Cn0pKCk7Cgprby5leHBvcnRTeW1ib2woJ3NldFRlbXBsYXRlRW5naW5lJywga28uc2V0VGVtcGxhdGVFbmdpbmUpOwprby5leHBvcnRTeW1ib2woJ3JlbmRlclRlbXBsYXRlJywga28ucmVuZGVyVGVtcGxhdGUpOwovLyBHbyB0aHJvdWdoIHRoZSBpdGVtcyB0aGF0IGhhdmUgYmVlbiBhZGRlZCBhbmQgZGVsZXRlZCBhbmQgdHJ5IHRvIGZpbmQgbWF0Y2hlcyBiZXR3ZWVuIHRoZW0uCmtvLnV0aWxzLmZpbmRNb3Zlc0luQXJyYXlDb21wYXJpc29uID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCBsaW1pdEZhaWxlZENvbXBhcmVzKSB7CiAgICBpZiAobGVmdC5sZW5ndGggJiYgcmlnaHQubGVuZ3RoKSB7CiAgICAgICAgdmFyIGZhaWxlZENvbXBhcmVzLCBsLCByLCBsZWZ0SXRlbSwgcmlnaHRJdGVtOwogICAgICAgIGZvciAoZmFpbGVkQ29tcGFyZXMgPSBsID0gMDsgKCFsaW1pdEZhaWxlZENvbXBhcmVzIHx8IGZhaWxlZENvbXBhcmVzIDwgbGltaXRGYWlsZWRDb21wYXJlcykgJiYgKGxlZnRJdGVtID0gbGVmdFtsXSk7ICsrbCkgewogICAgICAgICAgICBmb3IgKHIgPSAwOyByaWdodEl0ZW0gPSByaWdodFtyXTsgKytyKSB7CiAgICAgICAgICAgICAgICBpZiAobGVmdEl0ZW1bJ3ZhbHVlJ10gPT09IHJpZ2h0SXRlbVsndmFsdWUnXSkgewogICAgICAgICAgICAgICAgICAgIGxlZnRJdGVtWydtb3ZlZCddID0gcmlnaHRJdGVtWydpbmRleCddOwogICAgICAgICAgICAgICAgICAgIHJpZ2h0SXRlbVsnbW92ZWQnXSA9IGxlZnRJdGVtWydpbmRleCddOwogICAgICAgICAgICAgICAgICAgIHJpZ2h0LnNwbGljZShyLCAxKTsgICAgICAgICAvLyBUaGlzIGl0ZW0gaXMgbWFya2VkIGFzIG1vdmVkOyBzbyByZW1vdmUgaXQgZnJvbSByaWdodCBsaXN0CiAgICAgICAgICAgICAgICAgICAgZmFpbGVkQ29tcGFyZXMgPSByID0gMDsgICAgIC8vIFJlc2V0IGZhaWxlZCBjb21wYXJlcyBjb3VudCBiZWNhdXNlIHdlJ3JlIGNoZWNraW5nIGZvciBjb25zZWN1dGl2ZSBmYWlsdXJlcwogICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIGZhaWxlZENvbXBhcmVzICs9IHI7CiAgICAgICAgfQogICAgfQp9OwoKa28udXRpbHMuY29tcGFyZUFycmF5cyA9IChmdW5jdGlvbiAoKSB7CiAgICB2YXIgc3RhdHVzTm90SW5PbGQgPSAnYWRkZWQnLCBzdGF0dXNOb3RJbk5ldyA9ICdkZWxldGVkJzsKCiAgICAvLyBTaW1wbGUgY2FsY3VsYXRpb24gYmFzZWQgb24gTGV2ZW5zaHRlaW4gZGlzdGFuY2UuCiAgICBmdW5jdGlvbiBjb21wYXJlQXJyYXlzKG9sZEFycmF5LCBuZXdBcnJheSwgb3B0aW9ucykgewogICAgICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBpZiB0aGUgdGhpcmQgYXJnIGlzIGFjdHVhbGx5IGEgYm9vbCwgaW50ZXJwcmV0CiAgICAgICAgLy8gaXQgYXMgdGhlIG9sZCBwYXJhbWV0ZXIgJ2RvbnRMaW1pdE1vdmVzJy4gTmV3ZXIgY29kZSBzaG91bGQgdXNlIHsgZG9udExpbWl0TW92ZXM6IHRydWUgfS4KICAgICAgICBvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpID8geyAnZG9udExpbWl0TW92ZXMnOiBvcHRpb25zIH0gOiAob3B0aW9ucyB8fCB7fSk7CiAgICAgICAgb2xkQXJyYXkgPSBvbGRBcnJheSB8fCBbXTsKICAgICAgICBuZXdBcnJheSA9IG5ld0FycmF5IHx8IFtdOwoKICAgICAgICBpZiAob2xkQXJyYXkubGVuZ3RoIDw9IG5ld0FycmF5Lmxlbmd0aCkKICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVTbWFsbEFycmF5VG9CaWdBcnJheShvbGRBcnJheSwgbmV3QXJyYXksIHN0YXR1c05vdEluT2xkLCBzdGF0dXNOb3RJbk5ldywgb3B0aW9ucyk7CiAgICAgICAgZWxzZQogICAgICAgICAgICByZXR1cm4gY29tcGFyZVNtYWxsQXJyYXlUb0JpZ0FycmF5KG5ld0FycmF5LCBvbGRBcnJheSwgc3RhdHVzTm90SW5OZXcsIHN0YXR1c05vdEluT2xkLCBvcHRpb25zKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjb21wYXJlU21hbGxBcnJheVRvQmlnQXJyYXkoc21sQXJyYXksIGJpZ0FycmF5LCBzdGF0dXNOb3RJblNtbCwgc3RhdHVzTm90SW5CaWcsIG9wdGlvbnMpIHsKICAgICAgICB2YXIgbXlNaW4gPSBNYXRoLm1pbiwKICAgICAgICAgICAgbXlNYXggPSBNYXRoLm1heCwKICAgICAgICAgICAgZWRpdERpc3RhbmNlTWF0cml4ID0gW10sCiAgICAgICAgICAgIHNtbEluZGV4LCBzbWxJbmRleE1heCA9IHNtbEFycmF5Lmxlbmd0aCwKICAgICAgICAgICAgYmlnSW5kZXgsIGJpZ0luZGV4TWF4ID0gYmlnQXJyYXkubGVuZ3RoLAogICAgICAgICAgICBjb21wYXJlUmFuZ2UgPSAoYmlnSW5kZXhNYXggLSBzbWxJbmRleE1heCkgfHwgMSwKICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSBzbWxJbmRleE1heCArIGJpZ0luZGV4TWF4ICsgMSwKICAgICAgICAgICAgdGhpc1JvdywgbGFzdFJvdywKICAgICAgICAgICAgYmlnSW5kZXhNYXhGb3JSb3csIGJpZ0luZGV4TWluRm9yUm93OwoKICAgICAgICBmb3IgKHNtbEluZGV4ID0gMDsgc21sSW5kZXggPD0gc21sSW5kZXhNYXg7IHNtbEluZGV4KyspIHsKICAgICAgICAgICAgbGFzdFJvdyA9IHRoaXNSb3c7CiAgICAgICAgICAgIGVkaXREaXN0YW5jZU1hdHJpeC5wdXNoKHRoaXNSb3cgPSBbXSk7CiAgICAgICAgICAgIGJpZ0luZGV4TWF4Rm9yUm93ID0gbXlNaW4oYmlnSW5kZXhNYXgsIHNtbEluZGV4ICsgY29tcGFyZVJhbmdlKTsKICAgICAgICAgICAgYmlnSW5kZXhNaW5Gb3JSb3cgPSBteU1heCgwLCBzbWxJbmRleCAtIDEpOwogICAgICAgICAgICBmb3IgKGJpZ0luZGV4ID0gYmlnSW5kZXhNaW5Gb3JSb3c7IGJpZ0luZGV4IDw9IGJpZ0luZGV4TWF4Rm9yUm93OyBiaWdJbmRleCsrKSB7CiAgICAgICAgICAgICAgICBpZiAoIWJpZ0luZGV4KQogICAgICAgICAgICAgICAgICAgIHRoaXNSb3dbYmlnSW5kZXhdID0gc21sSW5kZXggKyAxOwogICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNtbEluZGV4KSAgLy8gVG9wIHJvdyAtIHRyYW5zZm9ybSBlbXB0eSBhcnJheSBpbnRvIG5ldyBhcnJheSB2aWEgYWRkaXRpb25zCiAgICAgICAgICAgICAgICAgICAgdGhpc1Jvd1tiaWdJbmRleF0gPSBiaWdJbmRleCArIDE7CiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbWxBcnJheVtzbWxJbmRleCAtIDFdID09PSBiaWdBcnJheVtiaWdJbmRleCAtIDFdKQogICAgICAgICAgICAgICAgICAgIHRoaXNSb3dbYmlnSW5kZXhdID0gbGFzdFJvd1tiaWdJbmRleCAtIDFdOyAgICAgICAgICAgICAgICAgIC8vIGNvcHkgdmFsdWUgKG5vIGVkaXQpCiAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICB2YXIgbm9ydGhEaXN0YW5jZSA9IGxhc3RSb3dbYmlnSW5kZXhdIHx8IG1heERpc3RhbmNlOyAgICAgICAvLyBub3QgaW4gYmlnIChkZWxldGlvbikKICAgICAgICAgICAgICAgICAgICB2YXIgd2VzdERpc3RhbmNlID0gdGhpc1Jvd1tiaWdJbmRleCAtIDFdIHx8IG1heERpc3RhbmNlOyAgICAvLyBub3QgaW4gc21hbGwgKGFkZGl0aW9uKQogICAgICAgICAgICAgICAgICAgIHRoaXNSb3dbYmlnSW5kZXhdID0gbXlNaW4obm9ydGhEaXN0YW5jZSwgd2VzdERpc3RhbmNlKSArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHZhciBlZGl0U2NyaXB0ID0gW10sIG1lTWludXNPbmUsIG5vdEluU21sID0gW10sIG5vdEluQmlnID0gW107CiAgICAgICAgZm9yIChzbWxJbmRleCA9IHNtbEluZGV4TWF4LCBiaWdJbmRleCA9IGJpZ0luZGV4TWF4OyBzbWxJbmRleCB8fCBiaWdJbmRleDspIHsKICAgICAgICAgICAgbWVNaW51c09uZSA9IGVkaXREaXN0YW5jZU1hdHJpeFtzbWxJbmRleF1bYmlnSW5kZXhdIC0gMTsKICAgICAgICAgICAgaWYgKGJpZ0luZGV4ICYmIG1lTWludXNPbmUgPT09IGVkaXREaXN0YW5jZU1hdHJpeFtzbWxJbmRleF1bYmlnSW5kZXgtMV0pIHsKICAgICAgICAgICAgICAgIG5vdEluU21sLnB1c2goZWRpdFNjcmlwdFtlZGl0U2NyaXB0Lmxlbmd0aF0gPSB7ICAgICAvLyBhZGRlZAogICAgICAgICAgICAgICAgICAgICdzdGF0dXMnOiBzdGF0dXNOb3RJblNtbCwKICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBiaWdBcnJheVstLWJpZ0luZGV4XSwKICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiBiaWdJbmRleCB9KTsKICAgICAgICAgICAgfSBlbHNlIGlmIChzbWxJbmRleCAmJiBtZU1pbnVzT25lID09PSBlZGl0RGlzdGFuY2VNYXRyaXhbc21sSW5kZXggLSAxXVtiaWdJbmRleF0pIHsKICAgICAgICAgICAgICAgIG5vdEluQmlnLnB1c2goZWRpdFNjcmlwdFtlZGl0U2NyaXB0Lmxlbmd0aF0gPSB7ICAgICAvLyBkZWxldGVkCiAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cyc6IHN0YXR1c05vdEluQmlnLAogICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNtbEFycmF5Wy0tc21sSW5kZXhdLAogICAgICAgICAgICAgICAgICAgICdpbmRleCc6IHNtbEluZGV4IH0pOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgLS1iaWdJbmRleDsKICAgICAgICAgICAgICAgIC0tc21sSW5kZXg7CiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnNbJ3NwYXJzZSddKSB7CiAgICAgICAgICAgICAgICAgICAgZWRpdFNjcmlwdC5wdXNoKHsKICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cyc6ICJyZXRhaW5lZCIsCiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGJpZ0FycmF5W2JpZ0luZGV4XSB9KTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgLy8gU2V0IGEgbGltaXQgb24gdGhlIG51bWJlciBvZiBjb25zZWN1dGl2ZSBub24tbWF0Y2hpbmcgY29tcGFyaXNvbnM7IGhhdmluZyBpdCBhIG11bHRpcGxlIG9mCiAgICAgICAgLy8gc21sSW5kZXhNYXgga2VlcHMgdGhlIHRpbWUgY29tcGxleGl0eSBvZiB0aGlzIGFsZ29yaXRobSBsaW5lYXIuCiAgICAgICAga28udXRpbHMuZmluZE1vdmVzSW5BcnJheUNvbXBhcmlzb24obm90SW5TbWwsIG5vdEluQmlnLCBzbWxJbmRleE1heCAqIDEwKTsKCiAgICAgICAgcmV0dXJuIGVkaXRTY3JpcHQucmV2ZXJzZSgpOwogICAgfQoKICAgIHJldHVybiBjb21wYXJlQXJyYXlzOwp9KSgpOwoKa28uZXhwb3J0U3ltYm9sKCd1dGlscy5jb21wYXJlQXJyYXlzJywga28udXRpbHMuY29tcGFyZUFycmF5cyk7CihmdW5jdGlvbiAoKSB7CiAgICAvLyBPYmplY3RpdmU6CiAgICAvLyAqIEdpdmVuIGFuIGlucHV0IGFycmF5LCBhIGNvbnRhaW5lciBET00gbm9kZSwgYW5kIGEgZnVuY3Rpb24gZnJvbSBhcnJheSBlbGVtZW50cyB0byBhcnJheXMgb2YgRE9NIG5vZGVzLAogICAgLy8gICBtYXAgdGhlIGFycmF5IGVsZW1lbnRzIHRvIGFycmF5cyBvZiBET00gbm9kZXMsIGNvbmNhdGVuYXRlIHRvZ2V0aGVyIGFsbCB0aGVzZSBhcnJheXMsIGFuZCB1c2UgdGhlbSB0byBwb3B1bGF0ZSB0aGUgY29udGFpbmVyIERPTSBub2RlCiAgICAvLyAqIE5leHQgdGltZSB3ZSdyZSBnaXZlbiB0aGUgc2FtZSBjb21iaW5hdGlvbiBvZiB0aGluZ3MgKHdpdGggdGhlIGFycmF5IHBvc3NpYmx5IGhhdmluZyBtdXRhdGVkKSwgdXBkYXRlIHRoZSBjb250YWluZXIgRE9NIG5vZGUKICAgIC8vICAgc28gdGhhdCBpdHMgY2hpbGRyZW4gaXMgYWdhaW4gdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIG1hcHBpbmdzIG9mIHRoZSBhcnJheSBlbGVtZW50cywgYnV0IGRvbid0IHJlLW1hcCBhbnkgYXJyYXkgZWxlbWVudHMgdGhhdCB3ZQogICAgLy8gICBwcmV2aW91c2x5IG1hcHBlZCAtIHJldGFpbiB0aG9zZSBub2RlcywgYW5kIGp1c3QgaW5zZXJ0L2RlbGV0ZSBvdGhlciBvbmVzCgogICAgLy8gImNhbGxiYWNrQWZ0ZXJBZGRpbmdOb2RlcyIgd2lsbCBiZSBpbnZva2VkIGFmdGVyIGFueSAibWFwcGluZyItZ2VuZXJhdGVkIG5vZGVzIGFyZSBpbnNlcnRlZCBpbnRvIHRoZSBjb250YWluZXIgbm9kZQogICAgLy8gWW91IGNhbiB1c2UgdGhpcywgZm9yIGV4YW1wbGUsIHRvIGFjdGl2YXRlIGJpbmRpbmdzIG9uIHRob3NlIG5vZGVzLgoKICAgIGZ1bmN0aW9uIG1hcE5vZGVBbmRSZWZyZXNoV2hlbkNoYW5nZWQoY29udGFpbmVyTm9kZSwgbWFwcGluZywgdmFsdWVUb01hcCwgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzLCBpbmRleCkgewogICAgICAgIC8vIE1hcCB0aGlzIGFycmF5IHZhbHVlIGluc2lkZSBhIGRlcGVuZGVudE9ic2VydmFibGUgc28gd2UgcmUtbWFwIHdoZW4gYW55IGRlcGVuZGVuY3kgY2hhbmdlcwogICAgICAgIHZhciBtYXBwZWROb2RlcyA9IFtdOwogICAgICAgIHZhciBkZXBlbmRlbnRPYnNlcnZhYmxlID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZShmdW5jdGlvbigpIHsKICAgICAgICAgICAgdmFyIG5ld01hcHBlZE5vZGVzID0gbWFwcGluZyh2YWx1ZVRvTWFwLCBpbmRleCwga28udXRpbHMuZml4VXBDb250aW51b3VzTm9kZUFycmF5KG1hcHBlZE5vZGVzLCBjb250YWluZXJOb2RlKSkgfHwgW107CgogICAgICAgICAgICAvLyBPbiBzdWJzZXF1ZW50IGV2YWx1YXRpb25zLCBqdXN0IHJlcGxhY2UgdGhlIHByZXZpb3VzbHktaW5zZXJ0ZWQgRE9NIG5vZGVzCiAgICAgICAgICAgIGlmIChtYXBwZWROb2Rlcy5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgICAgICBrby51dGlscy5yZXBsYWNlRG9tTm9kZXMobWFwcGVkTm9kZXMsIG5ld01hcHBlZE5vZGVzKTsKICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMpCiAgICAgICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzLCBudWxsLCBbdmFsdWVUb01hcCwgbmV3TWFwcGVkTm9kZXMsIGluZGV4XSk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBtYXBwZWROb2RlcyBhcnJheSwgdGhlcmVieSB1cGRhdGluZyB0aGUgcmVjb3JkCiAgICAgICAgICAgIC8vIG9mIHdoaWNoIG5vZGVzIHdvdWxkIGJlIGRlbGV0ZWQgaWYgdmFsdWVUb01hcCB3YXMgaXRzZWxmIGxhdGVyIHJlbW92ZWQKICAgICAgICAgICAgbWFwcGVkTm9kZXMubGVuZ3RoID0gMDsKICAgICAgICAgICAga28udXRpbHMuYXJyYXlQdXNoQWxsKG1hcHBlZE5vZGVzLCBuZXdNYXBwZWROb2Rlcyk7CiAgICAgICAgfSwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGNvbnRhaW5lck5vZGUsIGRpc3Bvc2VXaGVuOiBmdW5jdGlvbigpIHsgcmV0dXJuICFrby51dGlscy5hbnlEb21Ob2RlSXNBdHRhY2hlZFRvRG9jdW1lbnQobWFwcGVkTm9kZXMpOyB9IH0pOwogICAgICAgIHJldHVybiB7IG1hcHBlZE5vZGVzIDogbWFwcGVkTm9kZXMsIGRlcGVuZGVudE9ic2VydmFibGUgOiAoZGVwZW5kZW50T2JzZXJ2YWJsZS5pc0FjdGl2ZSgpID8gZGVwZW5kZW50T2JzZXJ2YWJsZSA6IHVuZGVmaW5lZCkgfTsKICAgIH0KCiAgICB2YXIgbGFzdE1hcHBpbmdSZXN1bHREb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7CgogICAga28udXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZyA9IGZ1bmN0aW9uIChkb21Ob2RlLCBhcnJheSwgbWFwcGluZywgb3B0aW9ucywgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzKSB7CiAgICAgICAgLy8gQ29tcGFyZSB0aGUgcHJvdmlkZWQgYXJyYXkgYWdhaW5zdCB0aGUgcHJldmlvdXMgb25lCiAgICAgICAgYXJyYXkgPSBhcnJheSB8fCBbXTsKICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsKICAgICAgICB2YXIgaXNGaXJzdEV4ZWN1dGlvbiA9IGtvLnV0aWxzLmRvbURhdGEuZ2V0KGRvbU5vZGUsIGxhc3RNYXBwaW5nUmVzdWx0RG9tRGF0YUtleSkgPT09IHVuZGVmaW5lZDsKICAgICAgICB2YXIgbGFzdE1hcHBpbmdSZXN1bHQgPSBrby51dGlscy5kb21EYXRhLmdldChkb21Ob2RlLCBsYXN0TWFwcGluZ1Jlc3VsdERvbURhdGFLZXkpIHx8IFtdOwogICAgICAgIHZhciBsYXN0QXJyYXkgPSBrby51dGlscy5hcnJheU1hcChsYXN0TWFwcGluZ1Jlc3VsdCwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguYXJyYXlFbnRyeTsgfSk7CiAgICAgICAgdmFyIGVkaXRTY3JpcHQgPSBrby51dGlscy5jb21wYXJlQXJyYXlzKGxhc3RBcnJheSwgYXJyYXksIG9wdGlvbnNbJ2RvbnRMaW1pdE1vdmVzJ10pOwoKICAgICAgICAvLyBCdWlsZCB0aGUgbmV3IG1hcHBpbmcgcmVzdWx0CiAgICAgICAgdmFyIG5ld01hcHBpbmdSZXN1bHQgPSBbXTsKICAgICAgICB2YXIgbGFzdE1hcHBpbmdSZXN1bHRJbmRleCA9IDA7CiAgICAgICAgdmFyIG5ld01hcHBpbmdSZXN1bHRJbmRleCA9IDA7CgogICAgICAgIHZhciBub2Rlc1RvRGVsZXRlID0gW107CiAgICAgICAgdmFyIGl0ZW1zVG9Qcm9jZXNzID0gW107CiAgICAgICAgdmFyIGl0ZW1zRm9yQmVmb3JlUmVtb3ZlQ2FsbGJhY2tzID0gW107CiAgICAgICAgdmFyIGl0ZW1zRm9yTW92ZUNhbGxiYWNrcyA9IFtdOwogICAgICAgIHZhciBpdGVtc0ZvckFmdGVyQWRkQ2FsbGJhY2tzID0gW107CiAgICAgICAgdmFyIG1hcERhdGE7CgogICAgICAgIGZ1bmN0aW9uIGl0ZW1Nb3ZlZE9yUmV0YWluZWQoZWRpdFNjcmlwdEluZGV4LCBvbGRQb3NpdGlvbikgewogICAgICAgICAgICBtYXBEYXRhID0gbGFzdE1hcHBpbmdSZXN1bHRbb2xkUG9zaXRpb25dOwogICAgICAgICAgICBpZiAobmV3TWFwcGluZ1Jlc3VsdEluZGV4ICE9PSBvbGRQb3NpdGlvbikKICAgICAgICAgICAgICAgIGl0ZW1zRm9yTW92ZUNhbGxiYWNrc1tlZGl0U2NyaXB0SW5kZXhdID0gbWFwRGF0YTsKICAgICAgICAgICAgLy8gU2luY2UgdXBkYXRpbmcgdGhlIGluZGV4IG1pZ2h0IGNoYW5nZSB0aGUgbm9kZXMsIGRvIHNvIGJlZm9yZSBjYWxsaW5nIGZpeFVwQ29udGludW91c05vZGVBcnJheQogICAgICAgICAgICBtYXBEYXRhLmluZGV4T2JzZXJ2YWJsZShuZXdNYXBwaW5nUmVzdWx0SW5kZXgrKyk7CiAgICAgICAgICAgIGtvLnV0aWxzLmZpeFVwQ29udGludW91c05vZGVBcnJheShtYXBEYXRhLm1hcHBlZE5vZGVzLCBkb21Ob2RlKTsKICAgICAgICAgICAgbmV3TWFwcGluZ1Jlc3VsdC5wdXNoKG1hcERhdGEpOwogICAgICAgICAgICBpdGVtc1RvUHJvY2Vzcy5wdXNoKG1hcERhdGEpOwogICAgICAgIH0KCiAgICAgICAgZnVuY3Rpb24gY2FsbENhbGxiYWNrKGNhbGxiYWNrLCBpdGVtcykgewogICAgICAgICAgICBpZiAoY2FsbGJhY2spIHsKICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gaXRlbXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7CiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zW2ldKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChpdGVtc1tpXS5tYXBwZWROb2RlcywgZnVuY3Rpb24obm9kZSkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobm9kZSwgaSwgaXRlbXNbaV0uYXJyYXlFbnRyeSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVkaXRTY3JpcHRJdGVtLCBtb3ZlZEluZGV4OyBlZGl0U2NyaXB0SXRlbSA9IGVkaXRTY3JpcHRbaV07IGkrKykgewogICAgICAgICAgICBtb3ZlZEluZGV4ID0gZWRpdFNjcmlwdEl0ZW1bJ21vdmVkJ107CiAgICAgICAgICAgIHN3aXRjaCAoZWRpdFNjcmlwdEl0ZW1bJ3N0YXR1cyddKSB7CiAgICAgICAgICAgICAgICBjYXNlICJkZWxldGVkIjoKICAgICAgICAgICAgICAgICAgICBpZiAobW92ZWRJbmRleCA9PT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEgPSBsYXN0TWFwcGluZ1Jlc3VsdFtsYXN0TWFwcGluZ1Jlc3VsdEluZGV4XTsKCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdHJhY2tpbmcgY2hhbmdlcyB0byB0aGUgbWFwcGluZyBmb3IgdGhlc2Ugbm9kZXMKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcERhdGEuZGVwZW5kZW50T2JzZXJ2YWJsZSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEuZGVwZW5kZW50T2JzZXJ2YWJsZS5kaXNwb3NlKCk7CgogICAgICAgICAgICAgICAgICAgICAgICAvLyBRdWV1ZSB0aGVzZSBub2RlcyBmb3IgbGF0ZXIgcmVtb3ZhbAogICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvRGVsZXRlLnB1c2guYXBwbHkobm9kZXNUb0RlbGV0ZSwga28udXRpbHMuZml4VXBDb250aW51b3VzTm9kZUFycmF5KG1hcERhdGEubWFwcGVkTm9kZXMsIGRvbU5vZGUpKTsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2JlZm9yZVJlbW92ZSddKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0ZvckJlZm9yZVJlbW92ZUNhbGxiYWNrc1tpXSA9IG1hcERhdGE7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RvUHJvY2Vzcy5wdXNoKG1hcERhdGEpOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIGxhc3RNYXBwaW5nUmVzdWx0SW5kZXgrKzsKICAgICAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgICAgICBjYXNlICJyZXRhaW5lZCI6CiAgICAgICAgICAgICAgICAgICAgaXRlbU1vdmVkT3JSZXRhaW5lZChpLCBsYXN0TWFwcGluZ1Jlc3VsdEluZGV4KyspOwogICAgICAgICAgICAgICAgICAgIGJyZWFrOwoKICAgICAgICAgICAgICAgIGNhc2UgImFkZGVkIjoKICAgICAgICAgICAgICAgICAgICBpZiAobW92ZWRJbmRleCAhPT0gdW5kZWZpbmVkKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Nb3ZlZE9yUmV0YWluZWQoaSwgbW92ZWRJbmRleCk7CiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YSA9IHsgYXJyYXlFbnRyeTogZWRpdFNjcmlwdEl0ZW1bJ3ZhbHVlJ10sIGluZGV4T2JzZXJ2YWJsZToga28ub2JzZXJ2YWJsZShuZXdNYXBwaW5nUmVzdWx0SW5kZXgrKykgfTsKICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWFwcGluZ1Jlc3VsdC5wdXNoKG1hcERhdGEpOwogICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RvUHJvY2Vzcy5wdXNoKG1hcERhdGEpOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmlyc3RFeGVjdXRpb24pCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0ZvckFmdGVyQWRkQ2FsbGJhY2tzW2ldID0gbWFwRGF0YTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIC8vIENhbGwgYmVmb3JlTW92ZSBmaXJzdCBiZWZvcmUgYW55IGNoYW5nZXMgaGF2ZSBiZWVuIG1hZGUgdG8gdGhlIERPTQogICAgICAgIGNhbGxDYWxsYmFjayhvcHRpb25zWydiZWZvcmVNb3ZlJ10sIGl0ZW1zRm9yTW92ZUNhbGxiYWNrcyk7CgogICAgICAgIC8vIE5leHQgcmVtb3ZlIG5vZGVzIGZvciBkZWxldGVkIGl0ZW1zIChvciBqdXN0IGNsZWFuIGlmIHRoZXJlJ3MgYSBiZWZvcmVSZW1vdmUgY2FsbGJhY2spCiAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKG5vZGVzVG9EZWxldGUsIG9wdGlvbnNbJ2JlZm9yZVJlbW92ZSddID8ga28uY2xlYW5Ob2RlIDoga28ucmVtb3ZlTm9kZSk7CgogICAgICAgIC8vIE5leHQgYWRkL3Jlb3JkZXIgdGhlIHJlbWFpbmluZyBpdGVtcyAod2lsbCBpbmNsdWRlIGRlbGV0ZWQgaXRlbXMgaWYgdGhlcmUncyBhIGJlZm9yZVJlbW92ZSBjYWxsYmFjaykKICAgICAgICBmb3IgKHZhciBpID0gMCwgbmV4dE5vZGUgPSBrby52aXJ0dWFsRWxlbWVudHMuZmlyc3RDaGlsZChkb21Ob2RlKSwgbGFzdE5vZGUsIG5vZGU7IG1hcERhdGEgPSBpdGVtc1RvUHJvY2Vzc1tpXTsgaSsrKSB7CiAgICAgICAgICAgIC8vIEdldCBub2RlcyBmb3IgbmV3bHkgYWRkZWQgaXRlbXMKICAgICAgICAgICAgaWYgKCFtYXBEYXRhLm1hcHBlZE5vZGVzKQogICAgICAgICAgICAgICAga28udXRpbHMuZXh0ZW5kKG1hcERhdGEsIG1hcE5vZGVBbmRSZWZyZXNoV2hlbkNoYW5nZWQoZG9tTm9kZSwgbWFwcGluZywgbWFwRGF0YS5hcnJheUVudHJ5LCBjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMsIG1hcERhdGEuaW5kZXhPYnNlcnZhYmxlKSk7CgogICAgICAgICAgICAvLyBQdXQgbm9kZXMgaW4gdGhlIHJpZ2h0IHBsYWNlIGlmIHRoZXkgYXJlbid0IHRoZXJlIGFscmVhZHkKICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IG5vZGUgPSBtYXBEYXRhLm1hcHBlZE5vZGVzW2pdOyBuZXh0Tm9kZSA9IG5vZGUubmV4dFNpYmxpbmcsIGxhc3ROb2RlID0gbm9kZSwgaisrKSB7CiAgICAgICAgICAgICAgICBpZiAobm9kZSAhPT0gbmV4dE5vZGUpCiAgICAgICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyKGRvbU5vZGUsIG5vZGUsIGxhc3ROb2RlKTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLy8gUnVuIHRoZSBjYWxsYmFja3MgZm9yIG5ld2x5IGFkZGVkIG5vZGVzIChmb3IgZXhhbXBsZSwgdG8gYXBwbHkgYmluZGluZ3MsIGV0Yy4pCiAgICAgICAgICAgIGlmICghbWFwRGF0YS5pbml0aWFsaXplZCAmJiBjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMpIHsKICAgICAgICAgICAgICAgIGNhbGxiYWNrQWZ0ZXJBZGRpbmdOb2RlcyhtYXBEYXRhLmFycmF5RW50cnksIG1hcERhdGEubWFwcGVkTm9kZXMsIG1hcERhdGEuaW5kZXhPYnNlcnZhYmxlKTsKICAgICAgICAgICAgICAgIG1hcERhdGEuaW5pdGlhbGl6ZWQgPSB0cnVlOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvLyBJZiB0aGVyZSdzIGEgYmVmb3JlUmVtb3ZlIGNhbGxiYWNrLCBjYWxsIGl0IGFmdGVyIHJlb3JkZXJpbmcuCiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGFzc3VtZSB0aGF0IHRoZSBiZWZvcmVSZW1vdmUgY2FsbGJhY2sgd2lsbCB1c3VhbGx5IGJlIHVzZWQgdG8gcmVtb3ZlIHRoZSBub2RlcyB1c2luZwogICAgICAgIC8vIHNvbWUgc29ydCBvZiBhbmltYXRpb24sIHdoaWNoIGlzIHdoeSB3ZSBmaXJzdCByZW9yZGVyIHRoZSBub2RlcyB0aGF0IHdpbGwgYmUgcmVtb3ZlZC4gSWYgdGhlCiAgICAgICAgLy8gY2FsbGJhY2sgaW5zdGVhZCByZW1vdmVzIHRoZSBub2RlcyByaWdodCBhd2F5LCBpdCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCB0byBza2lwIHJlb3JkZXJpbmcgdGhlbS4KICAgICAgICAvLyBQZXJoYXBzIHdlJ2xsIG1ha2UgdGhhdCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZSBpZiB0aGlzIHNjZW5hcmlvIGJlY29tZXMgbW9yZSBjb21tb24uCiAgICAgICAgY2FsbENhbGxiYWNrKG9wdGlvbnNbJ2JlZm9yZVJlbW92ZSddLCBpdGVtc0ZvckJlZm9yZVJlbW92ZUNhbGxiYWNrcyk7CgogICAgICAgIC8vIEZpbmFsbHkgY2FsbCBhZnRlck1vdmUgYW5kIGFmdGVyQWRkIGNhbGxiYWNrcwogICAgICAgIGNhbGxDYWxsYmFjayhvcHRpb25zWydhZnRlck1vdmUnXSwgaXRlbXNGb3JNb3ZlQ2FsbGJhY2tzKTsKICAgICAgICBjYWxsQ2FsbGJhY2sob3B0aW9uc1snYWZ0ZXJBZGQnXSwgaXRlbXNGb3JBZnRlckFkZENhbGxiYWNrcyk7CgogICAgICAgIC8vIFN0b3JlIGEgY29weSBvZiB0aGUgYXJyYXkgaXRlbXMgd2UganVzdCBjb25zaWRlcmVkIHNvIHdlIGNhbiBkaWZmZXJlbmNlIGl0IG5leHQgdGltZQogICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KGRvbU5vZGUsIGxhc3RNYXBwaW5nUmVzdWx0RG9tRGF0YUtleSwgbmV3TWFwcGluZ1Jlc3VsdCk7CiAgICB9Cn0pKCk7Cgprby5leHBvcnRTeW1ib2woJ3V0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcnLCBrby51dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nKTsKa28ubmF0aXZlVGVtcGxhdGVFbmdpbmUgPSBmdW5jdGlvbiAoKSB7CiAgICB0aGlzWydhbGxvd1RlbXBsYXRlUmV3cml0aW5nJ10gPSBmYWxzZTsKfQoKa28ubmF0aXZlVGVtcGxhdGVFbmdpbmUucHJvdG90eXBlID0gbmV3IGtvLnRlbXBsYXRlRW5naW5lKCk7CmtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lOwprby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3JlbmRlclRlbXBsYXRlU291cmNlJ10gPSBmdW5jdGlvbiAodGVtcGxhdGVTb3VyY2UsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zKSB7CiAgICB2YXIgdXNlTm9kZXNJZkF2YWlsYWJsZSA9ICEoa28udXRpbHMuaWVWZXJzaW9uIDwgOSksIC8vIElFPDkgY2xvbmVOb2RlIGRvZXNuJ3Qgd29yayBwcm9wZXJseQogICAgICAgIHRlbXBsYXRlTm9kZXNGdW5jID0gdXNlTm9kZXNJZkF2YWlsYWJsZSA/IHRlbXBsYXRlU291cmNlWydub2RlcyddIDogbnVsbCwKICAgICAgICB0ZW1wbGF0ZU5vZGVzID0gdGVtcGxhdGVOb2Rlc0Z1bmMgPyB0ZW1wbGF0ZVNvdXJjZVsnbm9kZXMnXSgpIDogbnVsbDsKCiAgICBpZiAodGVtcGxhdGVOb2RlcykgewogICAgICAgIHJldHVybiBrby51dGlscy5tYWtlQXJyYXkodGVtcGxhdGVOb2Rlcy5jbG9uZU5vZGUodHJ1ZSkuY2hpbGROb2Rlcyk7CiAgICB9IGVsc2UgewogICAgICAgIHZhciB0ZW1wbGF0ZVRleHQgPSB0ZW1wbGF0ZVNvdXJjZVsndGV4dCddKCk7CiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KHRlbXBsYXRlVGV4dCk7CiAgICB9Cn07Cgprby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5pbnN0YW5jZSA9IG5ldyBrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZSgpOwprby5zZXRUZW1wbGF0ZUVuZ2luZShrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5pbnN0YW5jZSk7Cgprby5leHBvcnRTeW1ib2woJ25hdGl2ZVRlbXBsYXRlRW5naW5lJywga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUpOwooZnVuY3Rpb24oKSB7CiAgICBrby5qcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmUgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgLy8gRGV0ZWN0IHdoaWNoIHZlcnNpb24gb2YganF1ZXJ5LXRtcGwgeW91J3JlIHVzaW5nLiBVbmZvcnR1bmF0ZWx5IGpxdWVyeS10bXBsCiAgICAgICAgLy8gZG9lc24ndCBleHBvc2UgYSB2ZXJzaW9uIG51bWJlciwgc28gd2UgaGF2ZSB0byBpbmZlciBpdC4KICAgICAgICAvLyBOb3RlIHRoYXQgYXMgb2YgS25vY2tvdXQgMS4zLCB3ZSBvbmx5IHN1cHBvcnQgalF1ZXJ5LnRtcGwgMS4wLjBwcmUgYW5kIGxhdGVyLAogICAgICAgIC8vIHdoaWNoIEtPIGludGVybmFsbHkgcmVmZXJzIHRvIGFzIHZlcnNpb24gIjIiLCBzbyBvbGRlciB2ZXJzaW9ucyBhcmUgbm8gbG9uZ2VyIGRldGVjdGVkLgogICAgICAgIHZhciBqUXVlcnlUbXBsVmVyc2lvbiA9IHRoaXMualF1ZXJ5VG1wbFZlcnNpb24gPSAoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmICghalF1ZXJ5SW5zdGFuY2UgfHwgIShqUXVlcnlJbnN0YW5jZVsndG1wbCddKSkKICAgICAgICAgICAgICAgIHJldHVybiAwOwogICAgICAgICAgICAvLyBTaW5jZSBpdCBleHBvc2VzIG5vIG9mZmljaWFsIHZlcnNpb24gbnVtYmVyLCB3ZSB1c2Ugb3VyIG93biBudW1iZXJpbmcgc3lzdGVtLiBUbyBiZSB1cGRhdGVkIGFzIGpxdWVyeS10bXBsIGV2b2x2ZXMuCiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5SW5zdGFuY2VbJ3RtcGwnXVsndGFnJ11bJ3RtcGwnXVsnb3BlbiddLnRvU3RyaW5nKCkuaW5kZXhPZignX18nKSA+PSAwKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgMS4wLjBwcmUsIGN1c3RvbSB0YWdzIHNob3VsZCBhcHBlbmQgbWFya3VwIHRvIGFuIGFycmF5IGNhbGxlZCAiX18iCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI7IC8vIEZpbmFsIHZlcnNpb24gb2YganF1ZXJ5LnRtcGwKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSBjYXRjaChleCkgeyAvKiBBcHBhcmVudGx5IG5vdCB0aGUgdmVyc2lvbiB3ZSB3ZXJlIGxvb2tpbmcgZm9yICovIH0KCiAgICAgICAgICAgIHJldHVybiAxOyAvLyBBbnkgb2xkZXIgdmVyc2lvbiB0aGF0IHdlIGRvbid0IHN1cHBvcnQKICAgICAgICB9KSgpOwoKICAgICAgICBmdW5jdGlvbiBlbnN1cmVIYXNSZWZlcmVuY2VkSlF1ZXJ5VGVtcGxhdGVzKCkgewogICAgICAgICAgICBpZiAoalF1ZXJ5VG1wbFZlcnNpb24gPCAyKQogICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJZb3VyIHZlcnNpb24gb2YgalF1ZXJ5LnRtcGwgaXMgdG9vIG9sZC4gUGxlYXNlIHVwZ3JhZGUgdG8galF1ZXJ5LnRtcGwgMS4wLjBwcmUgb3IgbGF0ZXIuIik7CiAgICAgICAgfQoKICAgICAgICBmdW5jdGlvbiBleGVjdXRlVGVtcGxhdGUoY29tcGlsZWRUZW1wbGF0ZSwgZGF0YSwgalF1ZXJ5VGVtcGxhdGVPcHRpb25zKSB7CiAgICAgICAgICAgIHJldHVybiBqUXVlcnlJbnN0YW5jZVsndG1wbCddKGNvbXBpbGVkVGVtcGxhdGUsIGRhdGEsIGpRdWVyeVRlbXBsYXRlT3B0aW9ucyk7CiAgICAgICAgfQoKICAgICAgICB0aGlzWydyZW5kZXJUZW1wbGF0ZVNvdXJjZSddID0gZnVuY3Rpb24odGVtcGxhdGVTb3VyY2UsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zKSB7CiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OwogICAgICAgICAgICBlbnN1cmVIYXNSZWZlcmVuY2VkSlF1ZXJ5VGVtcGxhdGVzKCk7CgogICAgICAgICAgICAvLyBFbnN1cmUgd2UgaGF2ZSBzdG9yZWQgYSBwcmVjb21waWxlZCB2ZXJzaW9uIG9mIHRoaXMgdGVtcGxhdGUgKGRvbid0IHdhbnQgdG8gcmVwYXJzZSBvbiBldmVyeSByZW5kZXIpCiAgICAgICAgICAgIHZhciBwcmVjb21waWxlZCA9IHRlbXBsYXRlU291cmNlWydkYXRhJ10oJ3ByZWNvbXBpbGVkJyk7CiAgICAgICAgICAgIGlmICghcHJlY29tcGlsZWQpIHsKICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZVRleHQgPSB0ZW1wbGF0ZVNvdXJjZVsndGV4dCddKCkgfHwgIiI7CiAgICAgICAgICAgICAgICAvLyBXcmFwIGluICJ3aXRoKCR3aGF0ZXZlci5rb0JpbmRpbmdDb250ZXh0KSB7IC4uLiB9IgogICAgICAgICAgICAgICAgdGVtcGxhdGVUZXh0ID0gInt7a29fd2l0aCAkaXRlbS5rb0JpbmRpbmdDb250ZXh0fX0iICsgdGVtcGxhdGVUZXh0ICsgInt7L2tvX3dpdGh9fSI7CgogICAgICAgICAgICAgICAgcHJlY29tcGlsZWQgPSBqUXVlcnlJbnN0YW5jZVsndGVtcGxhdGUnXShudWxsLCB0ZW1wbGF0ZVRleHQpOwogICAgICAgICAgICAgICAgdGVtcGxhdGVTb3VyY2VbJ2RhdGEnXSgncHJlY29tcGlsZWQnLCBwcmVjb21waWxlZCk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHZhciBkYXRhID0gW2JpbmRpbmdDb250ZXh0WyckZGF0YSddXTsgLy8gUHJld3JhcCB0aGUgZGF0YSBpbiBhbiBhcnJheSB0byBzdG9wIGpxdWVyeS50bXBsIGZyb20gdHJ5aW5nIHRvIHVud3JhcCBhbnkgYXJyYXlzCiAgICAgICAgICAgIHZhciBqUXVlcnlUZW1wbGF0ZU9wdGlvbnMgPSBqUXVlcnlJbnN0YW5jZVsnZXh0ZW5kJ10oeyAna29CaW5kaW5nQ29udGV4dCc6IGJpbmRpbmdDb250ZXh0IH0sIG9wdGlvbnNbJ3RlbXBsYXRlT3B0aW9ucyddKTsKCiAgICAgICAgICAgIHZhciByZXN1bHROb2RlcyA9IGV4ZWN1dGVUZW1wbGF0ZShwcmVjb21waWxlZCwgZGF0YSwgalF1ZXJ5VGVtcGxhdGVPcHRpb25zKTsKICAgICAgICAgICAgcmVzdWx0Tm9kZXNbJ2FwcGVuZFRvJ10oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IikpOyAvLyBVc2luZyAiYXBwZW5kVG8iIGZvcmNlcyBqUXVlcnkvalF1ZXJ5LnRtcGwgdG8gcGVyZm9ybSBuZWNlc3NhcnkgY2xlYW51cCB3b3JrCgogICAgICAgICAgICBqUXVlcnlJbnN0YW5jZVsnZnJhZ21lbnRzJ10gPSB7fTsgLy8gQ2xlYXIgalF1ZXJ5J3MgZnJhZ21lbnQgY2FjaGUgdG8gYXZvaWQgYSBtZW1vcnkgbGVhayBhZnRlciBhIGxhcmdlIG51bWJlciBvZiB0ZW1wbGF0ZSByZW5kZXJzCiAgICAgICAgICAgIHJldHVybiByZXN1bHROb2RlczsKICAgICAgICB9OwoKICAgICAgICB0aGlzWydjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2snXSA9IGZ1bmN0aW9uKHNjcmlwdCkgewogICAgICAgICAgICByZXR1cm4gInt7a29fY29kZSAoKGZ1bmN0aW9uKCkgeyByZXR1cm4gIiArIHNjcmlwdCArICIgfSkoKSkgfX0iOwogICAgICAgIH07CgogICAgICAgIHRoaXNbJ2FkZFRlbXBsYXRlJ10gPSBmdW5jdGlvbih0ZW1wbGF0ZU5hbWUsIHRlbXBsYXRlTWFya3VwKSB7CiAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKCI8c2NyaXB0IHR5cGU9J3RleHQvaHRtbCcgaWQ9JyIgKyB0ZW1wbGF0ZU5hbWUgKyAiJz4iICsgdGVtcGxhdGVNYXJrdXAgKyAiPCIgKyAiL3NjcmlwdD4iKTsKICAgICAgICB9OwoKICAgICAgICBpZiAoalF1ZXJ5VG1wbFZlcnNpb24gPiAwKSB7CiAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlWyd0bXBsJ11bJ3RhZyddWydrb19jb2RlJ10gPSB7CiAgICAgICAgICAgICAgICBvcGVuOiAiX18ucHVzaCgkMSB8fCAnJyk7IgogICAgICAgICAgICB9OwogICAgICAgICAgICBqUXVlcnlJbnN0YW5jZVsndG1wbCddWyd0YWcnXVsna29fd2l0aCddID0gewogICAgICAgICAgICAgICAgb3BlbjogIndpdGgoJDEpIHsiLAogICAgICAgICAgICAgICAgY2xvc2U6ICJ9ICIKICAgICAgICAgICAgfTsKICAgICAgICB9CiAgICB9OwoKICAgIGtvLmpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGUgPSBuZXcga28udGVtcGxhdGVFbmdpbmUoKTsKICAgIGtvLmpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBrby5qcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmU7CgogICAgLy8gVXNlIHRoaXMgb25lIGJ5IGRlZmF1bHQgKm9ubHkgaWYganF1ZXJ5LnRtcGwgaXMgcmVmZXJlbmNlZCoKICAgIHZhciBqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVJbnN0YW5jZSA9IG5ldyBrby5qcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmUoKTsKICAgIGlmIChqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVJbnN0YW5jZS5qUXVlcnlUbXBsVmVyc2lvbiA+IDApCiAgICAgICAga28uc2V0VGVtcGxhdGVFbmdpbmUoanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lSW5zdGFuY2UpOwoKICAgIGtvLmV4cG9ydFN5bWJvbCgnanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lJywga28uanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lKTsKfSkoKTsKfSkpOwp9KCkpOwp9KSgpOwo=');
});