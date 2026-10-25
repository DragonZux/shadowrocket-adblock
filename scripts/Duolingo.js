// Duolingo Unlimited Hearts + Super/Max VIP
(function () {
  'use strict';

  const body = $response && $response.body;
  if (!body) {
    $done({});
    return;
  }

  let data;
  try {
    data = JSON.parse(body);
  } catch (e) {
    $done({});
    return;
  }

  const CUSTOM_SHOP_ITEMS = {
    gold_subscription: {
      itemName: "gold_subscription",
      subscriptionInfo: {
        vendor: "STRIPE",
        renewing: true,
        isFamilyPlan: true,
        expectedExpiration: 4092599349000
      }
    }
  };

  if (data && typeof data === 'object') {
    // 1. Trái tim vô hạn (Unlimited Hearts)
    if (!data.health || typeof data.health !== 'object') {
      data.health = {};
    }
    data.health.unlimitedHeartsAvailable = true;
    data.health.hearts = 5;
    data.health.eligibleForFreeRefill = true;
    data.health.secondsUntilNextHeart = 0;

    // 2. Kích hoạt Super / Plus / Max
    data.hasPlus = true;
    data.hasSuper = true;

    if (!data.trackingProperties || typeof data.trackingProperties !== 'object') {
      data.trackingProperties = {};
    }
    data.trackingProperties.has_item_gold_subscription = true;
    data.trackingProperties.has_plus = true;
    data.trackingProperties.has_super = true;

    // 3. Kích hoạt gói Max / Gold trong shopItems
    if (!data.shopItems || typeof data.shopItems !== 'object') {
      data.shopItems = {};
    }
    data.shopItems = Object.assign({}, data.shopItems, CUSTOM_SHOP_ITEMS);
  }

  $done({ body: JSON.stringify(data) });
})();
