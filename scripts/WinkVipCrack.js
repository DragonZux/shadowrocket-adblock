// Wink VIP (Meitu) - Mở khóa tính năng VIP & Siêu độ nét
var body = $response.body;
if (!body) {
    $done({});
} else {
    var obj;
    try {
        obj = JSON.parse(body);
    } catch (e) {
        $done({});
    }

    if (obj && typeof obj === 'object') {
        obj.data = obj.data || {};

        // 1. Kích hoạt VIP vĩnh viễn
        obj.data.is_vip = true;
        obj.data.use_vip = true;
        obj.data.have_valid_contract = true;
        obj.data.in_trial_period = false;
        obj.data.vip_type = 1;
        obj.data.derive_type_name = "普通会员";
        obj.data.derive_type = 1;
        obj.data.active_sub_type = 2;
        obj.data.active_sub_type_name = "续期";
        obj.data.trial_period_invalid_time = 4092599349000;
        obj.data.current_order_invalid_time = 4092599349000;
        obj.data.valid_time = 1569664800000;
        obj.data.invalid_time = 4092599349000;
        obj.data.show_renew_flag = true;

        if (!obj.data.membership || typeof obj.data.membership !== 'object') {
            obj.data.membership = {};
        }
        obj.data.membership.id = "4";
        obj.data.membership.display_name = "Wink会员";
        obj.data.membership.level = 1;
        obj.data.membership.level_name = "普通会员";

        // 2. Thao tác trên /user/show
        if ($request.url.indexOf('/user/show') !== -1) {
            obj.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
            obj.data.follower_count = 999000;
            obj.data.fan_count = 999000;
            obj.data.favorites_count = 999000;
            obj.data.be_like_count = 999000;
        }
    }

    $done({ body: JSON.stringify(obj) });
}
