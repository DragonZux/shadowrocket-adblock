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

var locketData = {
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

// Luôn kích hoạt gói Gold cho Locket và Pro cho các app RevenueCat khác
obj.subscriber.subscriptions["com.locket02.premium.yearly"] = locketData;
obj.subscriber.entitlements["Gold"] = locketEntitlement;
obj.subscriber.entitlements["pro"] = locketEntitlement;
obj.subscriber.entitlements["vip"] = locketEntitlement;

$done({ body: JSON.stringify(obj) });
