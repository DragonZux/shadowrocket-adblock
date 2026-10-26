// Wink VIP+ (Meitu) - Mở khóa toàn bộ đặc quyền VIP+ / SVIP cao cấp nhất & Siêu độ nét AI 4K
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

        var url = ($request && $request.url) ? $request.url : "";

        // 1. Dữ liệu gói VIP+ SVIP (Level 2 - Cao cấp nhất)
        var vipPlusData = {
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
            derive_type_name: "高级会员",
            derive_type: 2,
            in_trial_period: false,
            is_vip: true,
            membership: {
                id: "7",
                display_name: "Wink VIP+",
                level: 2,
                level_name: "高级会员"
            },
            active_promotion_status_list: [2, 6],
            sub_type: 2,
            account_id: "1230010086",
            invalid_time: "4092599349000",
            valid_time: "1569664800000",
            active_product_id: "0",
            active_promotion_status: 2,
            show_renew_flag: true,
            vip_type: 101,
            is_new_vipsub: 0,
            s: 1,
            expire_days: -66666
        };

        // Gộp dữ liệu VIP+
        Object.assign(obj.data, vipPlusData);

        // 2. Xử lý các endpoint bổ trợ của Meitu/Wink
        if (url.indexOf('/vip/prompt/query') !== -1) {
            obj.data.home_btn_prompt = "VIP+";
            obj.data.home_prompt = "VIP+ 有效期至 2099/09/09";
            obj.data.svip_bubble_text = "VIP+: 有效期至 2099/09/09\nVIP: 有效期至 2099/09/09";
            obj.data.beautify_btn_prompt = "";
        } else if (url.indexOf('/vip/vip_show') !== -1) {
            obj.data.id = "7069961436340181123";
            obj.data.vip_type = 101;
            obj.data.sub_name = "高级会员";
            obj.data.valid_time = 4092599349;
            obj.data.in_valid_time = 4092599349;
            obj.data.is_valid_user = 1;
            obj.data.is_expire = 0;
            obj.data.renew = 2;
        } else if (url.indexOf('/user/show') !== -1) {
            obj.data.vip_type = 101;
            obj.data.vip_icon = "https://xximg1.meitudata.com/6948531747980333892.png";
            obj.data.follower_count = 999000;
            obj.data.fan_count = 999000;
            obj.data.favorites_count = 999000;
            obj.data.be_like_count = 999000;
        } else if (url.indexOf('/vip/vip_navigation') !== -1) {
            obj.data.vip_type = 101;
            obj.data.display_vip_type = 2;
            obj.data.display_vip_time = 1;
        }
    }

    $done({ body: JSON.stringify(obj) });
}
