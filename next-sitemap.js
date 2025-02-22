/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sieuthibanghieu.com", // 🔗 Thay bằng domain thật của bạn
  generateRobotsTxt: true, // ✅ Tạo file robots.txt tự động
  sitemapSize: 7000, // 📏 Số URL tối đa trong một sitemap
  changefreq: "daily", // 🔄 Tần suất thay đổi (daily/weekly/monthly)
  priority: 0.7, // ⭐ Mức độ ưu tiên (0-1)
  exclude: ["/admin/*", "/private/*"], // 🚫 Loại trừ URL không cần index
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // 🤖 Cho phép crawl tất cả URL
      { userAgent: "*", disallow: "/admin/" }, // 🚫 Cấm crawl thư mục admin
    ],
  },
};
