document.addEventListener('DOMContentLoaded', () => {
    // মোবাইল এবং ডেস্কটপ উভয়ের জন্য ইভেন্ট হ্যান্ডলার
    const handleCartClick = (event) => {
        // যদি ক্লিক করা এলিমেন্টটিতে 'add-to-cart-btn' ক্লাস থাকে
        if (event.target.classList.contains('add-to-cart-btn')) {
            event.preventDefault();
            const btn = event.target;
            const badge = document.getElementById('cart-badge');

            if (badge) {
                // ১. কাউন্ট বাড়ানো
                let currentCount = parseInt(badge.textContent) || 0;
                badge.textContent = currentCount + 1;

                // ২. ব্যাজে ছোট এনিমেশন
                badge.style.transform = "scale(1.3)";
                setTimeout(() => { badge.style.transform = "scale(1)"; }, 200);

                // ৩. বাটনে ফিডব্যাক দেওয়া
                const originalText = btn.textContent;
                btn.textContent = "ADDED";
                btn.style.color = "#3ABFA0";

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.color = "";
                }, 1000);
            }
        }
    };

    // মোবাইল এবং ডেস্কটপ দুই ধরনের টাচ/ক্লিক সাপোর্ট করার জন্য
    document.addEventListener('click', handleCartClick);
    document.addEventListener('touchstart', handleCartClick, { passive: true });

    // স্মার্ট হেডার স্ক্রল ইফেক্ট
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.background = "rgba(10, 10, 10, 0.98)";
                header.style.padding = "10px 0";
                header.style.borderBottom = "1px solid rgba(58, 191, 160, 0.3)";
            } else {
                header.style.background = "rgba(18, 18, 18, 0.8)";
                header.style.padding = "20px 0";
                header.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";
            }
        }
    });
});