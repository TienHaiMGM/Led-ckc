import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // 1. Lấy một số header thường dùng để chứa địa chỉ IP thực của user
  const forwardedFor = request.headers.get("x-forwarded-for"); // Chuỗi IP do nhiều proxy cộng dồn
  const realIP = request.headers.get("x-real-ip"); // Thường do Nginx hoặc proxy gán
  const cfConnectingIP = request.headers.get("cf-connecting-ip"); // Cloudflare gán

  // 2. Ưu tiên lấy IP theo độ tin cậy:
  //    - x-forwarded-for: có thể chứa nhiều IP (cách nhau dấu phẩy). IP đầu tiên là IP gốc.
  //    - x-real-ip: header này do một số proxy/nginx thiết lập.
  //    - cf-connecting-ip: do Cloudflare thiết lập.
  //    - request.ip: Thuộc tính có sẵn trong NextRequest, nhưng không phải lúc nào cũng có giá trị.
  //    - Nếu tất cả đều không có, trả về "unknown".
  const ip = forwardedFor
    ? forwardedFor.split(",")[0].trim()
    : realIP
      ? realIP
      : cfConnectingIP
        ? cfConnectingIP
        : request.ip || "unknown";

  // 3. Trả về response dạng JSON,
  //    kèm theo chi tiết các header gốc để tiện debug.
  return NextResponse.json({
    ip,
    headers: {
      forwarded: forwardedFor || null,
      realIP: realIP || null,
      cfIP: cfConnectingIP || null,
      requestIP: request.ip || null,
    },
  });
}
