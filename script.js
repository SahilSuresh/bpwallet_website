// script.js
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const helpEl = document.getElementById("helpText");
  const btn = document.getElementById("downloadBtn");

  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  if (!helpEl || !btn) return;

  if (isIOS) {
    helpEl.textContent = "This APK cannot be installed on iPhone. Please use an Android device.";
    btn.setAttribute("aria-disabled", "true");
    btn.addEventListener("click", function (e) { e.preventDefault(); });
    return;
  }

  if (!isAndroid) {
    helpEl.textContent = "بہترین تجربے کے لیے، ایک Android فون استعمال کریں۔ ڈاؤن لوڈ کرنے کے بعد، انسٹال کرنے کے لیے فائل کو کھولیں۔.";
  } else {
    helpEl.textContent = "ڈاؤن لوڈ کرنے کے بعد، فائل کو کھولیں. اگر اشارہ کیا جائے تو، ڈاؤن لوڈ کردہ فائلوں سے انسٹالیشن کی اجازت دیں۔.";
  }
})();
