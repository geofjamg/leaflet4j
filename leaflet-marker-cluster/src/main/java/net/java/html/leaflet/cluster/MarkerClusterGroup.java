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
import net.java.html.js.JavaScriptResource;
import net.java.html.leaflet.ILayer;
import net.java.html.leaflet.Options;

/**
 * @author Geoffroy Jamgotchian <geoffroy.jamgotchian at gmail.com>
 */
@JavaScriptResource("leaflet.markercluster.js")
public class MarkerClusterGroup extends ILayer {
    static {
        Options.initJS();
        ILayer.registerLayerType("L.MarkerClusterGroup", obj -> new MarkerClusterGroup(obj));
    }

    private MarkerClusterGroup(Object jsObj) {
        super(jsObj);
    }

    public MarkerClusterGroup() {
        this(new MarkerClusterGroupOptions());
    }

    public MarkerClusterGroup(MarkerClusterGroupOptions options) {
        super(create(options.getJSObj()));
    }

    @JavaScriptBody(args = {"options"}, body
            = "return L.markerClusterGroup(options);")
    private static native Object create(Object options);

    // ------ Methods for Layers and Controls -------------------------
    /**
     * Adds the given layer to the map.
     *
     * @param layer The added layer.
     * @return The map object.
     */
    public MarkerClusterGroup addLayer(ILayer layer) {
        addLayerInternal(jsObj, layer.getJSObj());
        return this;
    }

    @JavaScriptBody(args = {"jsObj", "layer"},
            body = "jsObj.addLayer(layer);")
    private static native void addLayerInternal(Object jsObj, Object layer);
}

