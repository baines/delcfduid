#Block cloudflare \_\_cfduid cookie

Simple Firefox addon to delete + block cookies named \_\_cfduid

CloudFlare's documentation about the cookie
[can be found here.](https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-CloudFlare-cfduid-cookie-do-)

They say it's for a good purpose, but I don't like having these unique IDs stored on so many websites. The fact that it can't be disabled even if you don't want to use CloudFlare's security features also rubs me the wrong way.

## How to install

1. get jpm: `npm install jpm`, or if that doesn't work see https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation
2. clone this repo somewhere
3. run `jpm xpi` in the cloned repo directory
4. go to about:addons, choose 'install addon from file', select the .xpi
