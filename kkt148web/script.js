window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const container = document.getElementById('header-container');
    const logo = document.getElementById('header-logo');
    const desc = document.getElementById('header-desc');

    if (!header) return;

    const isTransparent = header.getAttribute('data-navbar-type') === 'transparent';

    if (window.scrollY > 30) {
        // === Efek saat di-scroll ke bawah ===
        header.classList.remove('shadow-sm');
        header.classList.add('shadow-md');
        
        if (isTransparent) {
            // Ketika di-scroll ke bawah, pasang Banner.png & sesuaikan utility-nya
            header.style.backgroundImage = "url('Banner.png')";
            header.classList.remove('bg-transparent');
            header.classList.add('bg-cover', 'bg-center');
            
            // Opsional: Jika Anda memakai elemen overlay gelap terpisah
            const overlay = document.getElementById('header-overlay');
            if (overlay) overlay.classList.remove('opacity-0');
        }

        // Perkecil container & logo (Logika asli Anda tetap terjaga)
        if (container) {
            container.classList.remove('py-4');
            container.classList.add('py-1.5');
        }
        if (logo) {
            logo.classList.remove('h-16', 'w-16');
            logo.classList.add('h-11', 'w-11');
        }
        if (desc) {
            desc.classList.add('hidden');
        }
    } else {
        // === Efek saat kembali ke paling atas ===
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
        
        if (isTransparent) {
            // Ketika kembali ke atas, hapus Banner.png dan kembalikan transparan penuh
            header.style.backgroundImage = "none";
            header.classList.add('bg-transparent');
            header.classList.remove('bg-cover', 'bg-center');
            
            // Sembunyikan kembali overlay gelap jika ada
            const overlay = document.getElementById('header-overlay');
            if (overlay) overlay.classList.add('opacity-0');
        }

        // Kembalikan ukuran semula (Logika asli Anda tetap terjaga)
        if (container) {
            container.classList.remove('py-1.5');
            container.classList.add('py-4');
        }
        if (logo) {
            logo.classList.remove('h-11', 'w-11');
            logo.classList.add('h-16', 'w-16');
        }
        if (desc) {
            desc.classList.remove('hidden');
        }
    }
});

// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) menuToggle.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
    if (menuClose && mobileMenu) menuClose.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});