document.addEventListener('DOMContentLoaded', ()=>{
    toggleMobileMenu();
    smoothScrollController();
});

/// アンカーリンクのスムーススクロール処理
function smoothScrollController() {
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');

            if(href.length>1){
                const el = document.querySelector(href);
                if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
            }
        });
    });
}

/// ハンバーガーメニューの切り替え処理
function toggleMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if(menuBtn && mobileMenu){
    menuBtn.addEventListener('click', ()=>{
        const isHidden = mobileMenu.classList.contains('hidden');
        if(isHidden){
            mobileMenu.classList.remove('hidden');
            menuBtn.setAttribute('aria-expanded','true');
        } else {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded','false');
        }
    });
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(a=> a.addEventListener('click', ()=>{
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded','false');
    }));
    }
}