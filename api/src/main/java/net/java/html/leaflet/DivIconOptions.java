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
package net.java.html.leaflet;

/**
 * Options for configuring a {@link DivIcon}.
 */
public final class DivIconOptions {

    private final Options options = new Options();

    /**
     * Creates an DivIcon options instance
     */
    public DivIconOptions() {
    }

    Object getJSObj() {
        return options.createJSObj();
    }

    /**
     * Sets icon size option
     *
     * @param size Size of the icon image in pixels.
     * @return updated options
     */
    public DivIconOptions setIconSize(Point size) {
        options.setValue("iconSize", size.getJSObj());
        return this;
    }

    /**
     * Sets icon anchor option
     *
     * @param anchor The coordinates of the "tip" of the icon (relative to its
     * top left corner). The icon will be aligned so that this point is at the
     * marker's geographical location. Centered by default if size is specified,
     * also can be set in CSS with negative margins.
     * @return updated options
     */
    public DivIconOptions setIconAnchor(Point anchor) {
        options.setValue("iconAnchor", anchor.getJSObj());
        return this;
    }

    /**
     * Sets popup anchor option
     *
     * @param anchor The coordinates of the point from which popups will "open",
     * relative to the icon anchor.
     * @return updated options
     */
    public DivIconOptions setPopupAnchor(Point anchor) {
        options.setValue("popupAnchor", anchor.getJSObj());
        return this;
    }

    /**
     * Sets className option
     *
     * @param className A custom class name to assign to the icon.
     *                  'leaflet-div-icon' by default.
     * @return updated options
     */
    public DivIconOptions setClassName(String className) {
        options.setValue("className", className);
        return this;
    }

    /**
     * Sets html option
     *
     * @param html A custom HTML code to put inside the div element,
     *             empty by default.
     * @return updated options
     */
    public DivIconOptions setHtml(String html) {
        options.setValue("html", html);
        return this;
    }
}
