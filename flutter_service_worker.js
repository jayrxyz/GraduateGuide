'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f351e81022ec73c71ff86f42e7bc2323",
"version.json": "bbacc740c04d568a7f45c6a7778bae76",
"index.html": "00d8fe0acf40ec1139caccdd6ae5d121",
"/": "00d8fe0acf40ec1139caccdd6ae5d121",
"main.dart.js": "8cea53c475cb510144761379e14932d2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "567f1b636571514e834a98a2bd61f209",
".git/config": "7fcc037b5039132cd26a1ceb1b71258f",
".git/objects/92/837f52a2055b9f34e0065c7a1124601218bc6f": "719cd911e378fcb6a7b71c7ce109e38e",
".git/objects/0c/58f2ef9f394262342c71b2e48499cd7fc0bf6e": "2c1edcc44c7a38cb56afa4ed651ad107",
".git/objects/3e/e81a92ea422211dacfcd83e38441553e557efa": "6bacd4032d08a0bc1e8bddaf45905835",
".git/objects/3e/f5425020ae84ba960ad90ad6ee2dd1d4d635d1": "5e0d6db67d3e1c61ed7ed5a1688d5717",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/9229b76d92e5720b1b6da6ed87a4fb5f69bf4d": "7bc1426b8c44c8c44654f7de700c31b5",
".git/objects/57/117b4d4ac3c45611d5b4107f0aa8ac7f2b0bff": "abd0d8dd35a122b978610be15d531124",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/9e28ffadb4067bc89af25f2c8932bfd12b6869": "3de733fab2b8b9f50cd439d2e0ed4259",
".git/objects/3c/0ed725ae2d92597967f3a9c1615a34e3b02d14": "a1ccb558fb110b6ec0c0da13bc773080",
".git/objects/33/1a1620ff733c08a2874235650729a96e1d69b1": "534cf3cc102ea79e9df66b95f901fdb9",
".git/objects/02/4063a662293feb0402bde8ffddb75d31fda06a": "fcd81daf7f41dd46c8ee18983f8d5b76",
".git/objects/a4/75a8f44cbda7b054168a825f0dcbe9efdd3177": "25ff8e452665f074cc5d311e44683367",
".git/objects/b2/65b581492ecf984aa8e619491659746f295cb8": "ecd319d102412c4acb38f2b19117a58e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/09384109750d4fe428e907418f89af0d3832fb": "84367124cf37fabe3bb947270965fd20",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/74404a05c84905b7d9ce65ee77f98ebf3c15a5": "a2fbc22d860f575d23255ae7ea0d5eda",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d21bd4a8d69f0ae64f6b868d3c5da28c826469": "e7372842e45213afd3adc85c419cd767",
".git/objects/f2/939e8c5b04d3adfe659b407920eccaa69b8710": "aa0a022b2bdcd67fc22bc006426b8647",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/27/41ec434fe2e49f5e5ceedf4df10395c51a54bf": "5ee6153d0f49f61766dc992e5d287f4a",
".git/objects/27/201e8ce76769227d59efb3638f0c035e204474": "f72b034ebe4067ed8d5a4d81c0e6e427",
".git/objects/4b/06caf4b11eb317fda3a5e8b965b7e353300798": "83ff79a67c925c1173121711d0515779",
".git/objects/11/7bf7a3ff7578ef04d53a59b8c3e2c5b3a7f523": "724f427e7c76d57d02420dbec6ccd856",
".git/objects/29/9122c9b79e0a788a36ed1da70cec56b7a91478": "3ee25023e78f6bb1601b1cdcfd9e8731",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/5d4d1ed6ff41b4b3dbc65e572e9be611596b15": "46efacda654bad486726aaa96c4e055e",
".git/objects/42/b71c134b60cc5e1871ffeea6e3d6a2a39f00be": "aa2258eca553d5617f73061419d26cfc",
".git/objects/89/797fb0367a43e28b33ea215bd1ad1010dc6c4e": "28d28f80b2d7ba4b77fc361596e10338",
".git/objects/45/74065e365568d183b709b25dd2760681da9dea": "bbf17a9df0fc7a17aa37965cc2ab46a6",
".git/objects/45/cab43011bcf6735b569f44bc1ab8629d994755": "8d9d1e33ccd495b26fd967f283efed2c",
".git/objects/80/a28a30d6d086ab4272374c1f7d33fe18014db2": "034b7172d55965e4ef848b067249608d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/476ac27bbe5be04b0dcc8595148f8b300238c1": "bddb7bcbd596c183b4b46f14c2a2ae8d",
".git/objects/26/fe1b9099377a1538e08dd1fda52bc7e57cbc46": "935802a49547478fca82ce23c0819071",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/32219489394f6adbce9ceb829ab04e2225aea5": "371172af0c8268a4b16e17ff3fc366a4",
".git/objects/2f/9f4b9ffc7e0d002af29c7be735a2649a190e55": "4ceeb421b6ba669d40ccb584b45465ce",
".git/objects/88/e010b07b9045679704897bcaf3f66a8fcad150": "7cc2c888dac623ce3caaca1c3b81205c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/b43880d2641ccf6b4c7da6644f01e589076b2a": "cb07c0e8e41af221c9054712ed3fa6f6",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/7969e885726cdb00d1da8e6ae618d5afb97785": "853e7811a198635f6f6d25a818d3851d",
".git/objects/00/715ade40d4debdf77ee30fd91701286c23f35b": "4de6d06397a23ca8869a0094760bd05a",
".git/objects/00/1aab3da314923198ec2cead3dcdc386f387b4b": "2bbbe84cc75d1696283cc9229f2a8832",
".git/objects/6e/5c760f8252d24e63e9434a9120c3bf5f49365f": "37d171179735864ab6d7210ef90c43cd",
".git/objects/9a/109bf214fd4db9fad1c2b624e3858478f12893": "0e1b21b2df79cfba22465aae0f324d47",
".git/objects/5c/8813c5e75ae5873545101ff43c9961f36fb652": "aff533cd541d59494a8bc7683f8e6635",
".git/objects/31/14a047e8a72fb915602e0ed242a7122766d74b": "4cd7d58d88a450b0483ecb178de2da33",
".git/objects/91/e34d7b68cb411421b5651057e0cf1cb4e5916e": "b948c8e3e0642eb4b0029782fc8de739",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/72ee84c9ecaa4fde5404b865be38e122bc1458": "2129173300ea0523b93564e25f0bd5b8",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/565a0022826f680251d5166cbf0884c6f5a23e": "f9d701c98646e9001b16d745d1990352",
".git/objects/6c/ae465377dba90a3c7f2ea60d4071254502d209": "89c71b4828e5eeef7aa9faf17bcdb1b2",
".git/objects/0f/3a78b8738babebf542017eb39bb1a2eff749a1": "56a46e763c627a270fedfee832317380",
".git/objects/0a/c48cde2e7a7d418619240520655971946e205b": "297354989f927e0c618e00d1899233a6",
".git/objects/64/79d8e0a07f184a8358c50ab9b56e631080e589": "d6c20a01990f44206101c515d52bff6e",
".git/objects/90/18d09b1882d5c958cb1d1c80230224da083b17": "9780f25c0a3913d51cfae454e3cb24e4",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/e05c14fdd2834e571de5f4be3f263a46ba0f79": "39ece99906378e195aacd7362135c870",
".git/objects/d3/145930bf18de6ae89bbfef2439d1f1847ff9aa": "3aa34d704f2dc68a6e13f2477cabc788",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/5527df6221a4a93e63516e6bb10a2f616604b7": "e720216244a6e1fbfaaef74fccd7c5f9",
".git/objects/a0/e9a640c8b45974d6c911e65007a733053e7a21": "f34f8ee1d4e0a4c17510f772dc8821b8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/6140be52f230d42b58b0fb9bbd586072e43c9c": "33c742f4fa86efd900a1b86c2c4361c0",
".git/objects/a8/eaa2767885031cd2193e8384e6ba5c3fb062c7": "d043d8e21b76e3e73e4ebe7c879a3da3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/1f3f6b0551173c025ca21c0ed6a58bbf42f60e": "8cd45375a346efa765604f5b26d82684",
".git/objects/e8/d2c989dfb08192982f4dad4cd7a7f77e93804b": "5cf93be2b91cf352a9fb63a5bd9003db",
".git/objects/c2/8458a520901d81b1014be2a16c66f063e71e2f": "06a761f6b56f411d4df462714feab436",
".git/objects/46/63c2fdf35a11d05472fc497ae05239d1d0fc99": "ad9b8f692b0879024bf6b0a72511675d",
".git/objects/41/1e6f6b792bc9981e7d7f15b1e3ccfe78ffd23b": "c6c4a8d652a06d27d984a5c9fda95292",
".git/objects/48/a29231cb16173ca4c0d626053d4afab234389b": "8543326f279e64ec1cd2776d8457cdc6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/209ee6da61f43a937d49199f97270a61b9e407": "af09c9275d8b44886dc44d40397ce96d",
".git/objects/8c/46aacc50251f237046266a9cf8e6c0b2a5963d": "d4e057760ec759a0ff5abc0e99c045e1",
".git/objects/82/131b8a9713ebdab9cbc6a6f8dbae475e732431": "0956b4fec53128822dec4df4e1e45325",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/8b5988c84adb16016e48dd9bfbca27045658e8": "b262fb3dcf654b5a74d614cd5d6055bb",
".git/objects/8b/a7776780d008784b755a384e1c1540ea7fd050": "9cfe1625c3e4e1ef6bc4cef3d8aa0b76",
".git/objects/13/c722defd9c2093e0b09610536cb9579adf9cb8": "2ffb159a9832e0f96860e00a25949f4f",
".git/objects/7f/9dc7f0c6197a1cb33dfdc67d49822b48c70b7b": "48a3a185f62ead7ad74f07d66fe6b9dd",
".git/objects/14/a897551d50fb9d14c90f70d25404a1969f7015": "e1d3bed1efcd61ce517b28bc0b6f6f32",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "faa6c20daf419cdc76b638d74bff0519",
".git/logs/refs/heads/gh-pages": "faa6c20daf419cdc76b638d74bff0519",
".git/logs/refs/remotes/origin/gh-pages": "8d44ff7aca8401298043a010bd5c5700",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "83fe32e344e7826c73e7e95e70da2ee0",
".git/refs/remotes/origin/gh-pages": "83fe32e344e7826c73e7e95e70da2ee0",
".git/index": "2d2dd986e4c655705ca17bfdb509887f",
".git/COMMIT_EDITMSG": "a9295d217fd7bcee407adc1101fda398",
".git/FETCH_HEAD": "72ee59c63323a02eb7f57628c4adab85",
".git/sourcetreeconfig": "2d709c33940000f920ec5aa823225aff",
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
"assets/assets/images/google.png": "b4beea2eba797e0269da9cadb760f7bb",
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
