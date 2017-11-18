# Fastest Website in the World

https://muhammadhaidar.me

## Optimized for Performance

I don't like web development. 

I do enjoy performance optimization, networking, and distributed computing. 

To motivate this personal website, I attempted to create the most performant website in the world. I learned a lot about how the web works through this project, and acheived a perfectly optimized website. This is the fastest implementation possible, short of finding a dedicated host faster than Google Firebase (costly, and not very practical for a personal website).

### Optimizations

#### Inline CSS styling within HTML.

utilizes Emogrifier tool with working_files/main.css and working_files/index.html as inputs. Outputs public/index.html.
The result in an index.html with all styling from main.css applied inline.

Performance Improvement: Eliminates the need to serve main.css -> one less file to be loaded by client from host. 

Downside: Client can no longer cache main.css. Not a concern for personal website purposes.

#### Minified HTML.

utilizes html_minifer to remove whitespace in index.html

Performance Improvement: ~23% reduction in index.html file size.

Downside: File is no longer legible. Our deployment structure effectively works around this.

#### Optimized Images.

All images served on site are vectors (.svg). These are scaled to 22px as specified in main.css.

Performance Improvement: tiny file sizes; can be dynamically scaled with no change in size.

Downside: More difficult to work with as opposed to a library like fontawesome.


#### Browser Caching.

All images are cached for 31536000 seconds. (1 year)

Performance Improvement: client does not need to load images from host on subsequent visits.

Downside: changes won't be reflected when images are modified unless client clears cache. 


#### Compression.

Firebase automatically compresses images with gzip when serving requests.

Performance Improvement: ~50% reduction in file size (varies with image).

Downside: legacy browser compatability. 

#### Extraneous HTTP Request Removal.

index.html specifies the following to remove an extraneous request for favicon.ico (site does not have a favicon):

```
<head>
...
<link rel="icon" href="data:,">
...
</head>
```

Performance Improvement: client no longer has to ask host for favicon.ico, which doesn't exist.

Downside: None (if your site has a favicon.ico, then this optimization doesn't apply).

#### Minimized Server Response Time.

Firebase is up there with the fastest publically or comercially available hosting services.

And, it's free! Highly recommended for personal website and projects.

Performance Improvement: reduces connection time between client and host.

Downside: There are probably faster, more expensive solutions (i.e. dedicated Akamai server).

### Benchmarks

This site acheives a perfect score on the following pagespeed testing bechmarks:

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=muhammadhaidar.me)

[Pingdom Website Speed Test](https://tools.pingdom.com/#!/Kzvjw/https://muhammadhaidar.me)

[GTmetrix Performance Report (PageSpeed and YSlow)](https://gtmetrix.com/reports/muhammadhaidar.me/fvnHBURR)

*GTmetrix awards a 99/100 for the "Specify Image Dimensions" criterion. This is a [false negative](https://gtmetrix.com/specify-image-dimensions.html).

## Credits

* [Firebase](https://firebase.google.com/) - web hosting
* [Emogrifier](https://github.com/kangax/html-minifier) - HTML + CSS inline
* [html-minifier](https://github.com/kangax/html-minifier) - minify HTML

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
