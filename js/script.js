/**
 * Insyte Param Teknologi - Dynamic Renderer & Interactive Scripts
 * Membaca data dari window.siteData (atau data/data.json) dan me-render seluruh konten secara dinamis
 */

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Dapatkan data (prioritas window.siteData, fallback ke fetch data/data.json)
  let data = window.siteData;
  if (!data) {
    try {
      const response = await fetch('data/data.json');
      if (response.ok) {
        data = await response.json();
      }
    } catch (e) {
      console.warn('Gagal memuat data/data.json secara lokal (CORS), menggunakan data fallback.');
    }
  }

  // 2. Render seluruh data jika tersedia
  if (data) {
    renderSite(data);
  }

  // 3. Inisialisasi ikon Lucide
  refreshIcons();

  // 4. Inisialisasi interaksi halaman (menu mobile, accordion, scroll, dll)
  initInteractions(data);
});

/**
 * Render semua bagian dinamis dari objek data
 */
function renderSite(data) {
  // --- Trusted By Logos ---
  const trustedContainer = document.getElementById('trusted-logos-container');
  if (trustedContainer && data.trustedBy) {
    trustedContainer.innerHTML = data.trustedBy.map(item => {
      if (item.type === 'dot') {
        return `
          <div class="flex items-center gap-2 font-bold text-base tracking-tighter text-brand-navy">
            <span class="w-3 h-3 rounded-full bg-brand-steel"></span> ${item.name}
          </div>`;
      } else if (item.highlight) {
        const baseName = item.name.replace(item.highlight, '');
        return `
          <div class="flex items-center gap-1 font-extrabold text-base tracking-wider text-brand-navy">
            ${baseName}<span class="text-brand-steel">${item.highlight}</span>
          </div>`;
      } else {
        return `
          <div class="flex items-center gap-2 font-bold text-base tracking-tight text-brand-navy">
            <i data-lucide="${item.icon}" class="w-5 h-5 text-brand-steel"></i> ${item.name}
          </div>`;
      }
    }).join('');
  }

  // --- Featured 3 Services ---
  const featContainer = document.getElementById('featured-services-container');
  if (featContainer && data.featuredServices) {
    featContainer.innerHTML = data.featuredServices.map(srv => {
      if (srv.featured) {
        return `
          <div class="bg-brand-steel rounded-2xl p-6 text-white shadow-xl transform md:-translate-y-2 transition-transform duration-200">
            <div class="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
              <i data-lucide="${srv.icon}" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-lg text-white mb-2">${srv.title}</h3>
            <p class="text-sm text-blue-100 leading-relaxed mb-4">${srv.desc}</p>
            <a class="text-xs font-bold text-white flex items-center gap-1.5 underline underline-offset-2" href="${srv.link || '#layanan'}">
              Selengkapnya <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>`;
      } else {
        return `
          <div class="bg-white border border-brand-border rounded-2xl p-6 hover:shadow-lg transition-all duration-200">
            <div class="w-12 h-12 rounded-xl bg-brand-ice text-brand-steel flex items-center justify-center mb-4">
              <i data-lucide="${srv.icon}" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-lg text-brand-navy mb-2">${srv.title}</h3>
            <p class="text-sm text-brand-slate leading-relaxed mb-4">${srv.desc}</p>
            <a class="text-xs font-bold text-brand-steel flex items-center gap-1.5 hover:underline" href="${srv.link || '#layanan'}">
              Selengkapnya <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>`;
      }
    }).join('');
  }

  // --- About Features Checklist ---
  const aboutFeatContainer = document.getElementById('about-features-container');
  if (aboutFeatContainer && data.about && data.about.features) {
    aboutFeatContainer.innerHTML = data.about.features.map(feat => `
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-full bg-brand-ice text-brand-steel flex items-center justify-center text-xs">✓</span>
        ${feat}
      </div>
    `).join('');
  }

  // --- All Services (Dark Section) ---
  const allServicesContainer = document.getElementById('all-services-container');
  if (allServicesContainer && data.allServices) {
    allServicesContainer.innerHTML = data.allServices.map(item => `
      <div class="bg-white text-brand-navy p-5 rounded-2xl shadow hover:shadow-md transition-shadow">
        <div class="w-10 h-10 rounded-xl bg-brand-ice text-brand-steel flex items-center justify-center mb-3">
          <i data-lucide="${item.icon}" class="w-5 h-5 text-brand-steel"></i>
        </div>
        <h4 class="font-bold text-sm mb-1.5">${item.title}</h4>
        <p class="text-xs text-brand-slate leading-relaxed">${item.desc}</p>
      </div>
    `).join('');
  }

  // --- Portfolio Categories Filter ---
  const portfolioTabsContainer = document.getElementById('portfolio-tabs-container');
  if (portfolioTabsContainer && data.portfolio && data.portfolio.categories) {
    portfolioTabsContainer.innerHTML = data.portfolio.categories.map((cat, idx) => `
      <button data-filter="${cat.id}" class="portfolio-tab ${idx === 0 ? 'active bg-brand-steel text-white' : 'text-brand-slate bg-gray-100 hover:bg-gray-200'} px-4 py-1.5 rounded-full text-xs font-semibold transition-colors">
        ${cat.label}
      </button>
    `).join('');
  }

  // --- Portfolio Items Grid ---
  const portfolioContainer = document.getElementById('portfolio-container');
  if (portfolioContainer && data.portfolio && data.portfolio.items) {
    portfolioContainer.innerHTML = data.portfolio.items.map(item => `
      <div data-category="${item.category}" class="portfolio-item group border border-brand-border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <div class="overflow-hidden">
          <img alt="${item.title}" class="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105" src="${item.image}">
        </div>
        <div class="p-4">
          <div class="text-sm font-bold text-brand-navy truncate">${item.title}</div>
          <div class="text-xs text-brand-steel font-medium mt-0.5">${item.categoryLabel}</div>
        </div>
      </div>
    `).join('');
  }

  // --- Team Grid ---
  const teamContainer = document.getElementById('team-container');
  if (teamContainer && data.team) {
    teamContainer.innerHTML = data.team.map(member => `
      <div class="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-brand-border shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1">
        <img alt="${member.name}" class="w-24 h-24 rounded-full object-cover shadow border-2 border-brand-steel/30 mb-3.5" src="${member.image}">
        <div class="text-sm font-bold text-brand-navy">${member.name}</div>
        <div class="text-xs text-brand-steel font-medium mt-1">${member.role}</div>
        <div class="flex gap-2.5 mt-3.5 text-brand-slate">
          ${member.socials.map(soc => `
            <a href="${soc.url}" class="hover:text-brand-steel transition-colors" aria-label="${soc.platform}">
              <i class="w-4 h-4" data-lucide="${soc.platform}"></i>
            </a>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // --- Why Choose Us Checklist ---
  const whyUsContainer = document.getElementById('why-us-checklist-container');
  if (whyUsContainer && data.whyUs && data.whyUs.points) {
    whyUsContainer.innerHTML = data.whyUs.points.map(point => `
      <div class="flex items-center gap-3">
        <span class="w-5 h-5 rounded-full bg-brand-steel text-white flex items-center justify-center text-xs">✓</span>
        ${point}
      </div>
    `).join('');
  }

  // --- Pricing Plans ---
  renderPricingCards(data, 'monthly');

  // --- Testimonials ---
  const testimonialsContainer = document.getElementById('testimonials-container');
  if (testimonialsContainer && data.testimonials && data.testimonials.length > 0) {
    const t = data.testimonials[0];
    testimonialsContainer.innerHTML = `
      <div class="w-12 h-12 rounded-full bg-brand-ice text-brand-steel flex items-center justify-center mx-auto mb-4 text-2xl font-serif">
        “
      </div>
      <p class="text-sm md:text-base text-brand-slate italic max-w-2xl mx-auto leading-relaxed mb-6">
        "${t.quote}"
      </p>
      <div class="flex items-center justify-center gap-3 mb-4">
        <img alt="${t.name}" class="w-12 h-12 rounded-full object-cover border-2 border-brand-steel" src="${t.avatar}">
        <div class="text-left">
          <div class="text-sm font-bold text-brand-navy">${t.name}</div>
          <div class="text-xs text-brand-slate">${t.position}</div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-2">
        <span class="w-6 h-1.5 rounded-full bg-brand-steel"></span>
        <span class="w-2 h-1.5 rounded-full bg-gray-300"></span>
        <span class="w-2 h-1.5 rounded-full bg-gray-300"></span>
      </div>
    `;
  }

  // --- FAQ Accordion ---
  const faqContainer = document.getElementById('faq-accordion-container');
  if (faqContainer && data.faq) {
    faqContainer.innerHTML = data.faq.map(item => `
      <div class="faq-item ${item.active ? 'active border-brand-steel/40' : 'border-brand-border'} border bg-white rounded-2xl p-5 transition-all duration-200">
        <div class="faq-header flex justify-between items-center cursor-pointer">
          <span class="text-sm ${item.active ? 'font-bold' : 'font-semibold'} text-brand-navy">${item.question}</span>
          <i data-lucide="chevron-down" class="faq-icon w-5 h-5 ${item.active ? 'text-brand-steel' : 'text-brand-slate'}"></i>
        </div>
        <div class="faq-content">
          <p class="text-xs md:text-sm text-brand-slate mt-3 leading-relaxed border-t border-gray-100 pt-3">
            ${item.answer}
          </p>
        </div>
      </div>
    `).join('');
  }

  // --- Key Metrics / Stats ---
  const statsContainer = document.getElementById('stats-container');
  if (statsContainer && data.stats) {
    statsContainer.innerHTML = data.stats.map(st => `
      <div class="py-2">
        <div class="text-2xl md:text-3xl font-black text-brand-navy">${st.value}</div>
        <div class="text-xs text-brand-slate uppercase font-semibold mt-1">${st.label}</div>
      </div>
    `).join('');
  }

  // --- Footer Quick Links ---
  const footerQuickContainer = document.getElementById('footer-quick-links');
  if (footerQuickContainer && data.footerLinks && data.footerLinks.quickLinks) {
    footerQuickContainer.innerHTML = data.footerLinks.quickLinks.map(lk => `
      <li><a class="hover:text-white transition-colors" href="${lk.href}">${lk.label}</a></li>
    `).join('');
  }

  // --- Footer Service Links ---
  const footerServicesContainer = document.getElementById('footer-services-links');
  if (footerServicesContainer && data.footerLinks && data.footerLinks.services) {
    footerServicesContainer.innerHTML = data.footerLinks.services.map(lk => `
      <li><a class="hover:text-white transition-colors" href="${lk.href}">${lk.label}</a></li>
    `).join('');
  }
}

/**
 * Render Kartu Harga berdasarkan periode ('monthly' atau 'yearly')
 */
function renderPricingCards(data, period = 'monthly') {
  const pricingContainer = document.getElementById('pricing-cards-container');
  if (!pricingContainer || !data || !data.pricing || !data.pricing.plans) return;

  const isYearly = period === 'yearly';

  pricingContainer.innerHTML = data.pricing.plans.map(plan => {
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const periodText = isYearly ? '/bln (ditagih tahunan)' : '/bulan';

    if (plan.featured) {
      return `
        <div class="bg-brand-steel text-white rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative border-2 border-white/20 transform md:-translate-y-2">
          ${plan.badge ? `
            <div class="absolute -top-3 right-6 bg-white text-brand-navy text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
              ${plan.badge}
            </div>` : ''}
          <div>
            <h4 class="font-bold text-base mb-1 text-white">${plan.name}</h4>
            <p class="text-xs text-blue-100 mb-4">${plan.desc}</p>
            <div class="text-2xl font-extrabold text-white mb-5">
              <span>${price}</span> <span class="text-xs font-normal text-blue-100">${periodText}</span>
            </div>
            <ul class="text-xs space-y-2.5 text-white mb-6">
              ${plan.features.map(f => `
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-4 h-4 text-white"></i> ${f}
                </li>`).join('')}
            </ul>
          </div>
          <a href="#kontak" class="w-full py-3 bg-white text-brand-navy text-xs font-bold rounded-xl hover:bg-gray-100 transition-colors shadow text-center inline-block">
            Pilih ${plan.name}
          </a>
        </div>`;
    } else {
      return `
        <div class="bg-white text-brand-navy rounded-2xl p-6 flex flex-col justify-between shadow hover:shadow-lg transition-shadow">
          <div>
            <h4 class="font-bold text-base mb-1">${plan.name}</h4>
            <p class="text-xs text-brand-slate mb-4">${plan.desc}</p>
            <div class="text-2xl font-extrabold text-brand-navy mb-5">
              <span>${price}</span> <span class="text-xs font-normal text-brand-slate">${periodText}</span>
            </div>
            <ul class="text-xs space-y-2.5 text-brand-slate mb-6">
              ${plan.features.map(f => `
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-4 h-4 text-brand-steel"></i> ${f}
                </li>`).join('')}
            </ul>
          </div>
          <a href="#kontak" class="w-full py-3 bg-brand-navy text-white text-xs font-semibold rounded-xl hover:bg-brand-logonavy transition-colors text-center inline-block">
            Pilih ${plan.name}
          </a>
        </div>`;
    }
  }).join('');

  refreshIcons();
}

/**
 * Re-render ikon Lucide dengan aman
 */
function refreshIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/**
 * Inisialisasi event listener interaktif
 */
function initInteractions(data) {
  // --- Navigasi Aktif, Scrollspy & Smooth Scrolling ---
  initNavigation();

  // --- Delegated FAQ Accordion Click ---
  const faqContainer = document.getElementById('faq-accordion-container');
  if (faqContainer) {
    faqContainer.addEventListener('click', (e) => {
      const header = e.target.closest('.faq-header');
      if (!header) return;

      const item = header.closest('.faq-item');
      if (!item) return;

      const isActive = item.classList.contains('active');

      // Tutup FAQ lainnya
      faqContainer.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active', 'border-brand-steel/40');
          otherItem.classList.add('border-brand-border');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherIcon) {
            otherIcon.classList.remove('text-brand-steel');
            otherIcon.classList.add('text-brand-slate');
          }
        }
      });

      // Toggle FAQ saat ini
      const icon = item.querySelector('.faq-icon');
      if (isActive) {
        item.classList.remove('active', 'border-brand-steel/40');
        item.classList.add('border-brand-border');
        if (icon) {
          icon.classList.remove('text-brand-steel');
          icon.classList.add('text-brand-slate');
        }
      } else {
        item.classList.add('active', 'border-brand-steel/40');
        item.classList.remove('border-brand-border');
        if (icon) {
          icon.classList.add('text-brand-steel');
          icon.classList.remove('text-brand-slate');
        }
      }
    });
  }

  // --- Delegated Portfolio Tabs Click ---
  const portfolioTabsContainer = document.getElementById('portfolio-tabs-container');
  if (portfolioTabsContainer) {
    portfolioTabsContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.portfolio-tab');
      if (!tab) return;

      portfolioTabsContainer.querySelectorAll('.portfolio-tab').forEach(t => {
        t.classList.remove('active', 'bg-brand-steel', 'text-white');
        t.classList.add('text-brand-slate', 'bg-gray-100');
      });

      tab.classList.add('active', 'bg-brand-steel', 'text-white');
      tab.classList.remove('text-brand-slate', 'bg-gray-100');

      const filterValue = tab.getAttribute('data-filter');
      const portfolioItems = document.querySelectorAll('#portfolio-container .portfolio-item');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden-item');
        } else {
          item.classList.add('hidden-item');
        }
      });
    });
  }

  // --- Billing Period Toggle (Bulanan / Tahunan) ---
  const monthlyBtn = document.getElementById('billing-monthly');
  const yearlyBtn = document.getElementById('billing-yearly');

  if (monthlyBtn && yearlyBtn) {
    monthlyBtn.addEventListener('click', () => {
      monthlyBtn.classList.add('active');
      yearlyBtn.classList.remove('active');
      renderPricingCards(data, 'monthly');
    });

    yearlyBtn.addEventListener('click', () => {
      yearlyBtn.classList.add('active');
      monthlyBtn.classList.remove('active');
      renderPricingCards(data, 'yearly');
    });
  }

  // --- Scroll to Top Button ---
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Newsletter Form Submit ---
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== '') {
        alert(`Terima kasih! Email ${emailInput.value.trim()} telah berhasil terdaftar.`);
        emailInput.value = '';
      }
    });
  }

  // --- Animasi Fade-In Halus Bertahap untuk Section Industri ---
  initIndustriCardAnimation();
}

/**
 * Inisialisasi Animasi Fade-In Halus Saat Di-Scroll untuk Kartu Industri
 */
function initIndustriCardAnimation() {
  const cards = document.querySelectorAll('.industri-card');
  if (!cards.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    cards.forEach(card => observer.observe(card));
  } else {
    cards.forEach(card => card.classList.add('is-visible'));
  }
}

/**
 * Inisialisasi Navigasi, Scrollspy Dinamis, dan Smooth Scrolling
 */
function initNavigation() {
  const navbar = document.getElementById('navbar') || document.querySelector('nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navSectionIds = ['beranda', 'tentang-kami', 'layanan', 'portofolio', 'industri', 'testimoni', 'pricing'];

  let isManualScrolling = false;
  let scrollTimer = null;

  // Toggle Mobile Menu
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      mobileMenuBtn.innerHTML = isOpen
        ? '<i data-lucide="x" class="w-6 h-6 text-brand-navy"></i>'
        : '<i data-lucide="menu" class="w-6 h-6 text-brand-navy"></i>';
      refreshIcons();
    });
  }

  // Tutup Mobile Menu jika terbuka
  function closeMobileMenu() {
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6 text-brand-navy"></i>';
        refreshIcons();
      }
    }
  }

  // Update status active pada link navbar desktop dan mobile
  function setActiveNav(targetHref) {
    if (!targetHref) return;
    const normalized = (targetHref === '#' || targetHref === '#beranda') ? '#beranda' : targetHref;

    const desktopLinks = document.querySelectorAll('#desktop-nav .nav-link');
    const mobileLinks = document.querySelectorAll('#mobile-menu .mobile-nav-link');

    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isMatch = (href === normalized) || (normalized === '#beranda' && (href === '#' || href === '#beranda'));
      if (isMatch) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isMatch = (href === normalized) || (normalized === '#beranda' && (href === '#' || href === '#beranda'));
      if (isMatch) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Deteksi section yang sedang aktif di viewport (Scrollspy)
  function getActiveSectionId() {
    const scrollY = window.scrollY;
    const navHeight = navbar ? navbar.offsetHeight : 70;

    // Jika dekat dengan posisi teratas halaman
    if (scrollY < 120) {
      return 'beranda';
    }

    // Jika telah mencapai bagian paling bawah halaman
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
      return navSectionIds[navSectionIds.length - 1];
    }

    // Garis deteksi: scrollY + tinggi navbar + 25% tinggi viewport
    const detectionLine = scrollY + navHeight + (window.innerHeight * 0.25);

    let currentId = 'beranda';
    for (let i = 0; i < navSectionIds.length; i++) {
      const secId = navSectionIds[i];
      const el = document.getElementById(secId);
      if (!el) continue;

      if (el.offsetTop <= detectionLine) {
        currentId = secId;
      } else {
        break;
      }
    }

    return currentId;
  }

  // Event listener scroll dengan requestAnimationFrame
  let ticking = false;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Efek elevasi bayangan navbar saat di-scroll
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 20);
    }

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (!isManualScrolling) {
          const currentSection = getActiveSectionId();
          if (currentSection) {
            setActiveNav('#' + currentSection);
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Fungsi scroll halus ke target section dengan memperhitungkan sticky navbar
  function scrollToTarget(hash) {
    const targetEl = document.querySelector(hash);
    if (!targetEl) return;

    closeMobileMenu();

    const navHeight = navbar ? navbar.offsetHeight : 70;
    const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;

    isManualScrolling = true;
    setActiveNav(hash);

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth'
    });

    if (history.pushState) {
      history.pushState(null, '', hash);
    }

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      isManualScrolling = false;
      const current = getActiveSectionId();
      if (current) setActiveNav('#' + current);
    }, 850);
  }

  // Tangkap klik pada semua link hash (#)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#!')) return;

      if (href === '#' || href === '#beranda') {
        e.preventDefault();
        scrollToTarget('#beranda');
        return;
      }

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        scrollToTarget(href);
      }
    });
  });

  // Handle URL hash saat halaman pertama kali dimuat
  if (window.location.hash) {
    setTimeout(() => {
      scrollToTarget(window.location.hash);
    }, 150);
  } else {
    setActiveNav('#beranda');
  }
}
