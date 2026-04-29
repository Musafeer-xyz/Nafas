document.addEventListener('DOMContentLoaded', () => {
    // মোবাইল ড্রয়ার মেনু টগল করার জন্য
    const burgerMenu = document.getElementById('burger-menu');
    const mobileSideMenu = document.getElementById('mobile-side-menu');
    const closeMenu = document.getElementById('close-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    const toggleMenu = () => {
        mobileSideMenu.classList.toggle('open');
        menuOverlay.classList.toggle('open');
    };

    if (burgerMenu) burgerMenu.addEventListener('click', toggleMenu);
    if (closeMenu) closeMenu.addEventListener('click', toggleMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', toggleMenu); // ওভারলেতে ক্লিক করলেও বন্ধ হবে


    // কার্ট ক্লিক ফাংশন (touchstart মোবাইল এবং click ডেস্কটপের জন্য)
    const clickEvent = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0)) ? 'touchstart' : 'click';

    document.addEventListener(clickEvent, function (event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            event.preventDefault();
            const btn = event.target;
            const badge = document.getElementById('cart-badge');

            if (badge) {
                let currentCount = parseInt(badge.textContent) || 0;
                badge.textContent = currentCount + 1;

                // বাটন ফিডব্যাক
                const originalText = btn.textContent;
                btn.textContent = "ADDED";
                btn.style.color = "#3ABFA0";

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.color = "";
                }, 1000);
            }
        }
    });

    // স্মার্ট হেডার স্ক্রল ইফেক্ট
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.background = "rgba(10, 10, 10, 0.98)";
                header.style.borderBottom = "1px solid rgba(58, 191, 160, 0.3)";
            } else {
                header.style.background = "rgba(18, 18, 18, 0.8)";
                header.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";
            }
        }
    });

    // Cart Drawer Toggle Logic
    const cartOpenBtn = document.getElementById('cart-open-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');

    const toggleCart = () => {
        cartDrawer.classList.toggle('open');
        cartOverlay.classList.toggle('open');
    };

    if (cartOpenBtn) cartOpenBtn.addEventListener('click', (e) => {
        e.preventDefault(); // বাটনের ডিফল্ট কাজ বন্ধ করা
        toggleCart();
    });
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);
});