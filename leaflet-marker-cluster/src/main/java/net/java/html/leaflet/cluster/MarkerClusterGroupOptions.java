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
import net.java.html.leaflet.IIcon;
import net.java.html.leaflet.Options;

import java.util.function.Function;

/**
 * Options for configuring a {@link MarkerClusterGroup}.
 *
 * @author Geoffroy Jamgotchian <geoffroy.jamgotchian at gmail.com>
 */
public final class MarkerClusterGroupOptions {

    static {
        Options.initJS();
    }

    private final Options options = new Options();

    Object getJSObj() {
        return options.createJSObj();
    }

    /**
     * Creates a MarkerClusterGroupOptions object
     */
    public MarkerClusterGroupOptions() {

    }
    /**
     * Sets showCoverageOnHover option
     *
     * @param showCoverageOnHover When you mouse over a cluster it shows the bounds of its markers.
     * @return updated options
     */
    public MarkerClusterGroupOptions setShowCoverageOnHover(boolean showCoverageOnHover) {
        options.setValue("showCoverageOnHover", showCoverageOnHover);
        return this;
    }

    /**
     * Sets spiderfyOnMaxZoom option
     *
     * @param spiderfyOnMaxZoom When you click a cluster at the bottom zoom level we spiderfy it so you can see all of its markers.
     * @return updated options
     */
    public MarkerClusterGroupOptions setSpiderfyOnMaxZoom(boolean spiderfyOnMaxZoom) {
        options.setValue("spiderfyOnMaxZoom", spiderfyOnMaxZoom);
        return this;
    }

    /**
     * Sets zoomToBoundsOnClick option
     *
     * @param zoomToBoundsOnClick When you click a cluster we zoom to its bounds.
     * @return updated options
     */
    public MarkerClusterGroupOptions setZoomToBoundsOnClick(boolean zoomToBoundsOnClick) {
        options.setValue("zoomToBoundsOnClick", zoomToBoundsOnClick);
        return this;
    }

    @JavaScriptBody(args = {"fn"}, javacall = true,
            body = "return function (cluster) {\n" +
                    "          return fn.@net.java.html.leaflet.cluster.IconCreateFunctionInternal::create(Ljava/lang/Object;)(cluster);\n" +
                    "      };\n")
    private static native Object wrapIconCreateFunctionInternal(IconCreateFunctionInternal iconCreateFunction);

    public MarkerClusterGroupOptions setIconCreateFunction(Function<MarkerCluster, IIcon> iconCreateFunction) {
        options.setValue("iconCreateFunction", wrapIconCreateFunctionInternal(new IconCreateFunctionInternal(iconCreateFunction)));
        return this;
    }

}
