// 理事会ポータル ランチャー用 サービスワーカー
// ホーム画面に「アプリとして」追加できるようにするための最小実装。
// （データのキャッシュ等はせず、通信はそのままネットワークへ流すだけ）
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { /* network passthrough */ });
