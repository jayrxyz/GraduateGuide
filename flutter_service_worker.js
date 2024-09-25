'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ca1eaa86b0c5e158d9141e80911eb955",
"version.json": "bbacc740c04d568a7f45c6a7778bae76",
"index.html": "00d8fe0acf40ec1139caccdd6ae5d121",
"/": "00d8fe0acf40ec1139caccdd6ae5d121",
"main.dart.js": "8d34f1a37046a7a3f29a36a0a7ebba77",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "567f1b636571514e834a98a2bd61f209",
"assets/AssetManifest.json": "a292c56356665ebed25415448a0afb5a",
"assets/NOTICES": "c5051c87361cf10f0c8b464bc6d083c2",
"assets/FontManifest.json": "22ccccd567c5f2b7fac645036975188a",
"assets/AssetManifest.bin.json": "8dfaaee9de2a69ecf7a70b220e8c4045",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6eb6d9687c44d314c7bdf4ca2e8b228a",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/tiktokS.png": "63d959b157ad3e3ba94b6e4ba8706525",
"assets/assets/images/hazzle.png": "1290082c6cb86c696ea02d3066643aea",
"assets/assets/images/instagramS.png": "bb2cdb5b53999fe9303686b204ebd3bc",
"assets/assets/images/instagram.png": "bce9ccd78aa533c1be8793a128a72f73",
"assets/assets/images/hyber.png": "542aa77f52d3c6a7e6766e218e6d13b0",
"assets/assets/images/Marlene.png": "00754cf8d9b64708d8153f0aa8c2a81a",
"assets/assets/images/Peter.png": "5cb441acad15a79767d01f312516d448",
"assets/assets/images/youtubeS.png": "e19fba8319a636883d9b775acc103794",
"assets/assets/images/tiktok.png": "3b2f2fe0c375d4fe4c6676ee9c560455",
"assets/assets/images/logo.png": "55f0ee4571e255666537bc3a927a5b92",
"assets/assets/images/logoS.png": "3852f8dc7e1fb3595d688cdd38d65ef3",
"assets/assets/images/linkedin.png": "16c82dc092b46a2a144ba87f69094717",
"assets/assets/images/bgS.png": "797fc22bec255e5544ce33fe111111d4",
"assets/assets/images/youtube.png": "86495e0041f91b775fd3a3cd75b7d4fa",
"assets/assets/images/google.png": "578dfc2500214bd06d7068fe4faa8724",
"assets/assets/images/zero_gravity.png": "df33f06791149ce013dbf2f46c9a35ab",
"assets/assets/images/bg.png": "b824e9529b686b1474d4a26bac356f29",
"assets/assets/images/linkedinS.png": "7302baac5838efea85de996789e8f21f",
"assets/assets/fonts/NeueHaasDisplayRomanItalic.ttf": "87fe6070b5f7ea418084763c10068ab0",
"assets/assets/fonts/NeueHaasDisplayRoman.ttf": "13568ea57eda4ce469fa0600426963a5",
"assets/assets/fonts/NeueHaasDisplayBoldItalic.ttf": "dae896913597a8269d58cc1c63df41f8",
"assets/assets/fonts/NeueHaasDisplayThinItalic.ttf": "8500b8d2a64f210955bc15e37131fedd",
"assets/assets/fonts/NeueHaasDisplayBlack.ttf": "a9f8a301de697ebfb4e9a0157cbe9160",
"assets/assets/fonts/NeueHaasDisplayMedium.ttf": "c00931e8b3cca8082101c210353fe27e",
"assets/assets/fonts/NeueHaasDisplayLight.ttf": "cedb0be9ae2bd1fd529d9003a5ddae34",
"assets/assets/fonts/NeueHaasDisplayBlackItalic.ttf": "88f74963845c5350ae260220778b3e3c",
"assets/assets/fonts/NeueHaasDisplayMediumItalic.ttf": "bfbca08a0812b80a8b42a8bf42ed7564",
"assets/assets/fonts/NeueHaasDisplayBold.ttf": "822ebe551ca0a1191ecadaa8fa71ddb5",
"assets/assets/fonts/NeueHaasDisplayLightItalic.ttf": "f2f64f245b960df542dbc956f00c4150",
"assets/assets/fonts/NeueHaasDisplayThin.ttf": "880401ec0686993ae377a6621e50d58a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
