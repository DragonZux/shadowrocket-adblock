// Wink VIP (Meitu) - Mở khóa tính năng VIP & Siêu độ nét AI
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
        obj.code = 0;
        obj.data = obj.data || {};

        // 1. Dữ liệu VIP chi tiết tương thích mọi phiên bản Wink iOS
        var vipData = {
            active_sub_type: 2,
            account_type: 1,
            sub_type_name: "续期",
            active_sub_order_id: "7069961436604422668",
            trial_period_invalid_time: "4092599349000",
            current_order_invalid_time: "4092599349000",
            active_order_id: "7069961436340181123",
            limit_type: 0,
            active_sub_type_name: "续期",
            use_vip: true,
            have_valid_contract: true,
            derive_type_name: "普通会员",
            derive_type: 1,
            in_trial_period: false,
            is_vip: true,
            membership: {
                id: "4",
                display_name: "Wink会员",
                level: 1,
                level_name: "普通会员"
            },
            active_promotion_status_list: [2],
            sub_type: 2,
            account_id: "1230010086",
            invalid_time: "4092599349000",
            valid_time: "1569664800000",
            active_product_id: "0",
            active_promotion_status: 2,
            show_renew_flag: true,
            vip_type: 1
        };

        // Gộp toàn bộ thông số VIP
        Object.assign(obj.data, vipData);

        // 2. Thao tác trên /user/show
        if ($request.url.indexOf('/user/show') !== -1) {
            obj.data.vip_type = 1;
            obj.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
            obj.data.follower_count = 999000;
            obj.data.fan_count = 999000;
            obj.data.favorites_count = 999000;
            obj.data.be_like_count = 999000;
        }
    }

    $done({ body: JSON.stringify(obj) });
}
