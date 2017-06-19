/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2017 Geoffroy Jamgotchian <geoffroy.jamgotchian at gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package net.java.html.leaflet.cluster;

import net.java.html.js.JavaScriptBody;
import net.java.html.leaflet.Marker;
import net.java.html.leaflet.Options;

import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

/**
 * @author Geoffroy Jamgotchian <geoffroy.jamgotchian at gmail.com>
 */
public class MarkerCluster {

    static {
        Options.initJS();
    }

    private final Object jsObj;

    public MarkerCluster(Object jsObj) {
        this.jsObj = jsObj;
    }

    public Object getJSObj() {
        return jsObj;
    }

    @JavaScriptBody(args = {"jsObj"},
                    body = "return jsObj.getChildCount();")
    private static native Object getChildCountInternal(Object jsObj);

    @JavaScriptBody(args = {"jsObj"},
                    body = "return jsObj.getAllChildMarkers();")
    private static native Object getAllChildMarkersInternal(Object jsObj);

    public int getChildCount() {
        return (int) getChildCountInternal(jsObj);
    }

    public Collection<Marker> getAllChildMarkers() {
        return Arrays.stream((Object[]) getAllChildMarkersInternal(jsObj))
                .map(Marker::new)
                .collect(Collectors.toList());
    }
}
