# Notes

### Manifest.json
|Property|Possible Values|Description|
|--------|---------------|-----------|
|  name  | "long name" | long name of the app (shown on splashscreen) |
|  short_name | "short name" | short name of the app (shown under icon) |
|  start_url  | "/index.html"| url of page that loads on startup |
|  scope      | "."          | url of all the pages which are to be included in the PWA part |
|  display    | "standalone" | should it open like a standalone application or in a browser window |
|  background_color |   "#fff"  | Allows to set background color (shown while PWA is loading and on splashscreen)|
|  theme_color |"#3F51B5"|  Allows to set theme color (shown on top bar and notification bar) |
|  description |"long description ...." | description of the PWA |
|  dir         | "ltr", "rtl" | text direction of the application |
|  lang        | "en-US"      | Main language of the application |
|  orientation | "potrait-primary" | Set (and enforce) default orientation|
|  icons       | [{src,type,sizes},{src,type,sizes},....] | Configure icons (src="image source", type="image/png", sizes="WxH")  |