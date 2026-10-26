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

  function patchUser(u) {
    if (!u || typeof u !== 'object') return;

    // 1. Trái tim vô hạn (Unlimited Hearts)
    if (!u.health || typeof u.health !== 'object') {
      u.health = {};
    }
    u.health.unlimitedHeartsAvailable = true;
    u.health.hearts = 5;
    u.health.eligibleForFreeRefill = true;
    u.health.secondsUntilNextHeart = 0;

    // 2. Kích hoạt Super / Plus / Max
    u.hasPlus = true;
    u.hasSuper = true;

    if (!u.trackingProperties || typeof u.trackingProperties !== 'object') {
      u.trackingProperties = {};
    }
    u.trackingProperties.has_item_gold_subscription = true;
    u.trackingProperties.has_plus = true;
    u.trackingProperties.has_super = true;

    // 3. Kích hoạt gói Max / Gold trong shopItems
    if (!u.shopItems || typeof u.shopItems !== 'object') {
      u.shopItems = {};
    }
    u.shopItems = Object.assign({}, u.shopItems, CUSTOM_SHOP_ITEMS);
  }

  if (data && typeof data === 'object') {
    patchUser(data);
    if (data.users && Array.isArray(data.users)) {
      data.users.forEach(patchUser);
    }
  }

  $done({ body: JSON.stringify(data) });
})();
