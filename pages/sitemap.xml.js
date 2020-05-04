import React, { Component } from "react";

export default class SiteMap extends Component {
    static async getInitialProps({req, res}) {
        if(res) {
          res.setHeader("Content-Type", "text/xml");
          res.write(`
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
              <url>
                <loc>https://www.pixelstocode.com/</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
              <url>
                <loc>https://www.pixelstocode.com/services</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
              <url>
                <loc>https://www.pixelstocode.com/dev-services</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
              <url>
                <loc>https://www.pixelstocode.com/web-hosting-services</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
              <url>
                <loc>https://www.pixelstocode.com/digital-strategy</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
              <url>
                <loc>https://www.pixelstocode.com/about</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
              <url>
                <loc>https://www.pixelstocode.com/contact</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
              <url>
                <loc>https://www.pixelstocode.com/privacy-policy</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
              <url>
                <loc>https://www.pixelstocode.com/terms-and-conditions</loc>
                <lastmod>2020-05-04</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
              </url>
            </urlset>
          `);
          res.end();
        }

    }
}
