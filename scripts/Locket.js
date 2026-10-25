var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (!obj.subscriber) {
  obj.subscriber = {};
}
if (!obj.subscriber.subscriptions) {
  obj.subscriber.subscriptions = {};
}
if (!obj.subscriber.entitlements) {
  obj.subscriber.entitlements = {};
}

var commonData = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-07-28T01:04:18Z",
  purchase_date: "2024-07-28T01:04:17Z",
  store: "app_store"
};

var locketEntitlement = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "com.locket02.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z"
};

var scannerEntitlement = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "com.readdle.Scanner.subscription.year30",
  expires_date: "2099-12-18T01:04:17Z"
};

// 1. Locket Gold
obj.subscriber.subscriptions["com.locket02.premium.yearly"] = commonData;
obj.subscriber.entitlements["Gold"] = locketEntitlement;

// 2. Scanner Pro (Readdle)
obj.subscriber.subscriptions["com.readdle.Scanner.subscription.year30"] = commonData;
obj.subscriber.entitlements["plus"] = scannerEntitlement;

// 3. Các app RevenueCat khác dùng pro/vip
obj.subscriber.entitlements["pro"] = locketEntitlement;
obj.subscriber.entitlements["vip"] = locketEntitlement;

$done({ body: JSON.stringify(obj) });
