'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "26d8180f8dab6833724fa50253259774",
".git/config": "e3a18fcc2917e77dd54d9030cc6c7014",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ead37d680c7eacb8aad3645d6632cd05",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1e05cfc1c00e3e334f5389937f87ec9d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "014a9f0af7d05fd25fd0979bd89cf735",
".git/logs/refs/heads/gh-pages": "014a9f0af7d05fd25fd0979bd89cf735",
".git/logs/refs/remotes/origin/gh-pages": "15be40a7fecb61099be9928eb2caa22d",
".git/logs/refs/remotes/origin/main": "72a1af75c336571a2021cdb393db31cf",
".git/objects/01/989448684259dc4abc70eb6b3602e4f39f7c1d": "f9203eabd7a62413f50d2700e93a5c92",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0d/ba24276826dd5bf3a1d24432e40a2e35e3baa2": "237fbcb26367c94c1666097c90cea32e",
".git/objects/1b/64264d0a0ba85750ae609cdf38a9d9749ee2bc": "18d634eccdf386e53f68c651dab3e1b9",
".git/objects/1c/b5fbff4eed442d234d176212bfa94d68e1176b": "8307705c58100e173b34724f86921076",
".git/objects/1d/c5473a1d72e6744933d8ef2a6905d6e4f225eb": "26a796f3db1fbec5b909042ba09848b2",
".git/objects/23/3d3e8f3e7340fd97468efd24c73814c66c01a2": "bbcef39edeb2bb61735cfe49cee73c63",
".git/objects/27/b462412aca45ae4b9d6c6310cbfc445c186e77": "946bce331e667e2484818e7a8028e77b",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/abba36dc2ef38117fde3965a3716c270f68b42": "7b0904d4cd13a1fa7c8dd6e1eba19cbf",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/1012edfaeecf53e647ffbf86334e905da09576": "bb172226d290d180b381dd1b17b5e85e",
".git/objects/43/ba9f7010bde71875eab020592a7642056758b2": "b5092c1c858cb65bd807fb4f1475c1e8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/bce419ebeb407e51ad572cf3f2380ab01e8598": "85f21f40c7495975a197466a829ff9fb",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/8d94742b000501cb7726d1303bc958dde85a7f": "e0ccaeeb5d2c7644d5a24b0278fc7792",
".git/objects/52/0ed29666a5ada7ebda0c0887a36d333603d046": "735d727d0cb132bc51526dc0d53dfcdd",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/66fe0e96cf1daeb997bc063a3abfeedd832593": "c7471cc239781cf1a0f057ca0d406c26",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6a/1e0322da44aee372860614b1a8b1256111dc07": "dec8a4f274b57efd253144fd06672ee7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/27c79fe5a0ec18a258f6f5ee76e647da52a5f0": "8028063ecfc8117d1081adbf2b452119",
".git/objects/6e/159ad178243dba147cde3438fc4a20f909bb7e": "a8d7a6bcea1e3717d7db1448a105bd79",
".git/objects/84/35d1aa5c926a39657cd96f8d9b230c11f718b6": "00ac4a14949bbf6f588c258bd2b18db7",
".git/objects/86/4f26025fbd45613a7f072cfa8f8e51da3d8c46": "7b3eee8b3e48efff6ffc5e3ce961c8dd",
".git/objects/88/3e03f0c70d0f60a2ad57f1b527e5002c8a6eb7": "bb76286a787ad860c2c5c11d803d2d56",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/b2e924504f18661fb6a4500229ce5af003a8a1": "80097051901c3790b92ad01649d6fc9a",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/ef852a29a4647cc90a3b918e8f4291c9b9cd19": "bf1001992d2ecbe7af25fe74d8134ec8",
".git/objects/b2/2dbf94bc16fd2798773393fe24567f607ad851": "2a0754ddf2038cc2b1c061fe63f74d04",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/33fc04d0e6448423cb8742948608a9ccca4570": "670525b3463f6e9a719e7472c5f84b79",
".git/objects/cd/e16623382c4d331ee0670f9955d66b06148bd4": "9c1ea38b8208127d9cab7acb9436437e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/08adde47096c7a1249a4372b0228d14318b5a3": "fb2884a14c7cf0ff5c8cbf9475530ee9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/e4c30788c6308f3596b22c292b9a2d043eab24": "7d073a31a3c8144a97ea55235356528d",
".git/objects/de/028779d82ef13351ce5417d97cd67d7dbf06a5": "d7e8f262cdd639f2e38a418bba388e4b",
".git/objects/e0/01c4bd525b9f2a02421778cdb9b76a1d53e105": "cef5e37bae7d31342a8e8f76a33a0d45",
".git/objects/e4/f990ee1b11810db8e9aa56cc8f71150c6f077d": "4b0e59ecc1f8b27d1481a4855a551473",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/4fed0de334f93ea5bc5930e445147d8672c293": "be058107411b110f89a6d1aa9c02097a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/pack/pack-5d7c9662b44c09eea76dcacc4e4f8617579083aa.idx": "d78c19d96af63cbda71d713bbfa763cf",
".git/objects/pack/pack-5d7c9662b44c09eea76dcacc4e4f8617579083aa.pack": "cac380773911cd286a27db3378c29bfd",
".git/objects/pack/pack-5d7c9662b44c09eea76dcacc4e4f8617579083aa.rev": "935b24e1fbaa2f48e04a5766ec42f764",
".git/refs/heads/gh-pages": "0c9b3774f73e2bb4e06cb34caa7d7b0b",
".git/refs/remotes/origin/gh-pages": "0c9b3774f73e2bb4e06cb34caa7d7b0b",
".git/refs/remotes/origin/main": "031c1725982ec30d19ef1f59652023a2",
"assets/AssetManifest.bin": "de438f0745265fbd6f10f990e5495296",
"assets/AssetManifest.bin.json": "a155eec918185d2bc7651b46a275e5dc",
"assets/AssetManifest.json": "d0432052e3da39b736b3f5df0b45e511",
"assets/assets/camel.png": "8825c2f28abe36cc88fc58aac695e17e",
"assets/assets/cube.png": "43cc4b7540ad5f1f3327e4528af8083f",
"assets/assets/img1.jpg": "9aa49a541e72a5d29c2ab0fe0b52075a",
"assets/assets/img10.jpg": "20fc4c9e9a2ff6143603f010353164f0",
"assets/assets/img2.jpg": "e31733978f498f6e814e234c09e5b641",
"assets/assets/img3.jpg": "ee621352f41183578666552632659da1",
"assets/assets/img4.jpg": "3053de0021ee6303834c687e395fa089",
"assets/assets/img5.jpg": "e8226835fe52ab773a409183fb7ec272",
"assets/assets/img6.jpg": "f5e1e56c05cf87d1369d879f8ba755d3",
"assets/assets/img7.jpg": "dd354d17cb6176d9fd93b2c67209ecb5",
"assets/assets/img8.jpg": "6851053f03395ca620ad5a09c5160a0e",
"assets/assets/img9.jpg": "ba5307bbf01b5360f6d09cc6cc2ea1c0",
"assets/assets/lion.png": "bc5a7e5316f901476229a86e6757aae5",
"assets/assets/rhino.png": "0ffe99803e8afd6b0d2ac624a0bb53d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2feff1add6ebf679edd5fc059aa6dd48",
"assets/NOTICES": "969e81974074329dcf911345007586ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f27ab40a5add3b5166ffa6d8a72a89dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "89db0bc0dc430820f250525e5ab6fd05",
"/": "89db0bc0dc430820f250525e5ab6fd05",
"main.dart.js": "d71b19595156b559498bbf6a3e836de2",
"manifest.json": "e7c090e60f9ed6f98c549c3716323faa",
"version.json": "776fdafe0136631a7a1aa5a7cc8246d3"};
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
