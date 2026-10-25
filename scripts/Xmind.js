// XMind - Mở khóa VIP Pro Trọn đời
var obj = JSON.parse($response.body);
const vip = /_res\/devices/;
const token = /_res\/token\/.+/;

if (vip.test($request.url)) {
    obj = {
      "license" : {
        "status" : "sub",
        "expireTime" : 4092599349000
      },
      "_code" : 200,
      "raw_data" : "GfxYgAqnrQ\/ggD9UwqnZyAj6FKnopXzM8s5m3eZLOsmVr4FwCzv41qTmgi\/u72cv+jpaAoljaEPti1twzOS7X7KUPY1KNJ2xalbS7SXbvFHSvs21QXjaUtIOkeJWAl4\/vHl4IvMeHTBVqD8mFCXOmvnBPLRMAJEPgHEJYF1InvQ="
    };
}

if (token.test($request.url)) {
    obj.expireDate = 4092599349000;
    obj.token = "f50633ea8eb04cbb85962b99c47045d7AjOobEGo";
}

$done({body : JSON.stringify(obj)});

