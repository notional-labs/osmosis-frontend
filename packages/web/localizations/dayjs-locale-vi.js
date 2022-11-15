!(function (e, n) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = n())
      : "function" == typeof define && define.amd
      ? define(n)
      : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).dayjs_locale_en = n());
  })(this, function () {
    "use strict";
    return {
      name: "ko",
      weekdays: "Chủ Nhật_Thứ Hai_Thứ Ba_Thứ Tư_Thứ Năm_Thứ Sáu_Thứ Bảy".split("_"),
      months: "Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12".split("_"),
    };
  });