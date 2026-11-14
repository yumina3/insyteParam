/**
 * Insyte Param Teknologi - Centralized Site Data
 * Migrasi seluruh data konten website statis
 */

window.siteData = {
  company: {
    name: "INSYTE PARAM",
    suffix: "Teknologi",
    legalName: "PT Insyte Param Teknologi",
    tagline: "Kami Membangun Solusi Digital yang Mendorong Pertumbuhan Bisnis.",
    subTagline: "Solusi web, aplikasi terintegrasi, dan rekayasa data untuk startup dan korporasi Indonesia yang siap berkembang di era digital modern.",
    badge: "Mitra Solusi Digital Terpercaya",
    bio: "Membangun fondasi digital tangguh, modern, dan memberikan keunggulan kompetitif bagi setiap perusahaan rekanan kami di Indonesia.",
    phone: "+62 812-3456-7890",
    phoneClean: "6281234567890",
    email: "consultinginsyte@gmail.com",
    address: "Jl. Jendral Sudirman Kav. 52, Jakarta Selatan, Indonesia",
    workingHours: "Senin - Jumat, 08.00 - 17.00 WIB",
    copyright: "© 2026 PT Insyte Param Teknologi. Hak cipta dilindungi undang-undang.",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAozFWVroiwqa5xfHzppjJCV_smr9kQKyhYwyhv_IG1HX2vza5U1HOsxMDpaeoiDTL7MVNnQHGrpRhD4jVDYE-PY8AzZaEZNBJjSvqXi18XwhsNNmrhLcrJX76fJW6KR_ZtLKs4kNksEI2678137QaGTXNifNbpeRh2z3YJ5PrRgKbaibIy0ZZeH0xpTu12CQ7EPzfxCKR15JuG0VEt5LOaZ70RyKFr0mTnm7wj_eNFutYWx7Un6qwy",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVg2rLq8CztMYBvY97NOksMVIf24Gl5nShuR9Yh7ibrirtU22LrAUbsfizNdXNN5slma-6rUAXyGVSHGaKvjMahvHdYK6R5UkR2JJ96x2E-ZQ8QJpvBQjXjtZ9n_5Sggz6N1GyShU_q9Gr1zdhacegu71qTG1Hn7RyrQYmUfWwCW8eNycmZf__Iu7GWD0aSz-REGVpqCLv11Wv-agGnQJnJvW90W2kQk_5-8RIuW8",
    heroStat: {
      label: "Pertumbuhan Klien",
      value: "+340% / Tahun"
    },
    socials: [
      { name: "LinkedIn", url: "#", icon: "linkedin" },
      { name: "Instagram", url: "#", icon: "instagram" },
      { name: "Twitter / X", url: "#", icon: "twitter" },
      { name: "YouTube", url: "#", icon: "youtube" }
    ]
  },

  navLinks: [
    { label: "Beranda", href: "#beranda", active: true },
    { label: "Tentang Kami", href: "#tentang-kami" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Paket", href: "#pricing" }
  ],

  trustedBy: [
    { name: "NEXUS.IO", type: "dot" },
    { name: "SYNTIX", icon: "layers" },
    { name: "VERTEX AI", highlight: "AI" },
    { name: "CLOUDPULSE", icon: "cloud" },
    { name: "OPTIMA ID", icon: "shield-check" }
  ],

  featuredServices: [
    {
      id: 1,
      title: "Desain Web",
      icon: "layout",
      desc: "Website modern, elegan, responsif dan siap mencerminkan kredibilitas brand Anda secara prima.",
      featured: false,
      link: "#layanan"
    },
    {
      id: 2,
      title: "Pengembangan Software",
      icon: "code-2",
      desc: "Aplikasi web dan mobile berkinerja tinggi, aman, dengan arsitektur cloud terstandarisasi.",
      featured: true,
      link: "#layanan"
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: "bar-chart-2",
      desc: "Strategi pemasaran digital berbasis data untuk melipatgandakan prospek dan konversi nyata.",
      featured: false,
      link: "#layanan"
    }
  ],

  about: {
    badge: "10+ Proyek Selesai",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBWvP1uUhl5Fb50HJ8oWwOa63pngp9-c_6ZE0FOTI2HwGRLkkdYplFQnz0Ill5mV9-hFxgkXVlsRfPWbwAPyQdp2HnBny6P8sDJtpZCbTvCwW5EIDHtKvZYqguXFKguNz5eDBTgp0erh_5_f8b5EAlm0WA48fHmihJZ0-ZC_-AjmSrw4p8qBfSOLrK0E0bawYWc4j6inf6O7QEVfTKcQLEKUUuVwHTjWsVPWIFNV0",
    label: "TENTANG KAMI",
    title: "Solusi Kreatif. Hasil Terukur.",
    desc: "Kami adalah kolektif desainer, insinyur perangkat lunak, dan analis strategi yang berdedikasi menciptakan dampak nyata bagi ekosistem bisnis digital.",
    features: [
      "Desain Kustom",
      "Kode Bersih",
      "Tepat Waktu",
      "Tim Berdedikasi"
    ]
  },

  allServices: [
    {
      title: "UI/UX Design",
      icon: "pen-tool",
      desc: "Desain intuitif yang memikat pelanggan Anda."
    },
    {
      title: "Web Dev",
      icon: "globe",
      desc: "Platform website cepat, aman, & terukur."
    },
    {
      title: "E-Commerce",
      icon: "shopping-bag",
      desc: "Solusi toko online terintegrasi payment."
    },
    {
      title: "SEO Optimasi",
      icon: "search",
      desc: "Raih ranking 1 Google secara organik."
    }
  ],

  portfolio: {
    categories: [
      { id: "all", label: "Semua" },
      { id: "design", label: "Web Design" },
      { id: "dev", label: "Development" },
      { id: "branding", label: "Branding" },
      { id: "marketing", label: "Marketing" }
    ],
    items: [
      {
        id: 1,
        title: "Fintech Dashboard",
        category: "dev",
        categoryLabel: "Web Application",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVIta2qlGsJl3ZpiieR6xiUaSrZlxZ_NJ_goeDWZLnCUeXdIJuXSd5YLJYmyezeOmTuVuDTCBNZRf_ioikhub6t5berpFwabu9RWTbZwAcv5eaAptrE1TpWQvYIi9htyx5wjeGbePb2KU5-OS1kCKN3QNDUpd4OocC2HfGUlenSSxuEnek6V8MW0GDn3boJ-HQcyf4m-3J_gc5_M0QVK5twSRBCEwaoYoo-qMnQjQ"
      },
      {
        id: 2,
        title: "Travel Experience",
        category: "design",
        categoryLabel: "Portal Wisata",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvxfoPfX8W65tKwt16YtWMq4-Yyq_h-r-hSV3E6wEsSUTpZtX3AKzrSHb1pUkscvJxwgxHyToT9R4zVUXKpNySqUvcznCpeKZZ-6eK2Kx2lk3fQdKON9i9ymJ6ufLcT0Zwes4ibj_L99-NalHRDg407X7W1VgP946sRZAQm04iBI5JAwxvSsktNLmCpZ4ZD0379I8wYvXDPMBtjaAFQYKIv83khQ87iChcM1ugPwE"
      },
      {
        id: 3,
        title: "Ecommerce Store",
        category: "dev",
        categoryLabel: "B2B Platform",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhcmVtrpUG_6dLRQVTwQu4nnROZ-oJGcmAd3hlOeaSH4Jk47CwU01QzGkI0GbsbOXUfuXSdLiJpZeZjzUDqOyzpArELrwMECraaGkdXUJq9vxmoH63aiwycvsBspBu7O4KgGgsOytU2xEQ0TNPA7qLpzagfbtybse_ZqqEeINzfHci0LJIDJJUqzvT5j5Zr4zmv0JOzaNB8oRCoLTlgqxoRZZ_R-iKiDgHbVzFW98"
      },
      {
        id: 4,
        title: "SaaS Landing Page",
        category: "design",
        categoryLabel: "Cloud System",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuSnhH1TXqGOlvzFyfSmWq7yjnaeNIKG4IdUUaR_NzXE9q6cipes0Nmtyv7U-TnkWcjidtKFanNExfo-2eX1B6nLkrLCxEPAoZs6wmm_kFHFHHW9Bxo37jYOCYHsSrzCsfn_CUTjvQ67QnkbM36ZgzN9uD-iAGcq5ItM36sfs7fpmeW9j9pdP5osThZOtCvBQnBGS_-uncrRwQ8Kc62mlLbbTqZkOGH8UKDwMoHv4"
      },
      {
        id: 5,
        title: "Mobile App Concept",
        category: "marketing",
        categoryLabel: "iOS & Android",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8HCacgtMVSwsjV6BTqnQPwR6DMyHRQZ1ROCqRNICI44tu94LMqbwezmjVnSr9xgewT5mNg-NjE5Evw5bzNVFkUVIO21_OyK5VradATPcOpidSgUce7Y9ijGfJ6RjWa7gPNAE6DafUkfktrN1L-HxYn5CXLFJQERun9SSkWqS_e2nd0lvPjcbX5vtqmEKI0HdZN9SB-zEe0eQ_vCa1XJ-s-_ZH0v9rXKrmhig3T8M"
      },
      {
        id: 6,
        title: "Brand Identity",
        category: "branding",
        categoryLabel: "Visual Guidelines",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6JYvzl1mDPvZCcp3jsawUsb1XJVVVJpEaCLCZA1c7CYFA5UqD5IBc-jNGSxnpqjA4pohvR6i55yEFxF9C0shki8sA0l6bqUmChp0k3BDXc5u6Uw0QMQ7QM_v4pcKDAgJCJmJSAtvcoXfHIqdxqDbh3XkgF8Hi05i7j-J6Ur8nzjj4-nsmABHa1kNdbIu-OPo65sIwD-2D7qnc-8cqCGHEIwTMAbUjkTC39JiFCS0"
      }
    ]
  },

  team: [
    {
      name: "Alina Fadlila Sifa",
      role: "Founder",
      image: "data/Alina.jpeg",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      name: "Raditya Atma Aziz",
      role: "CTO",
      image: "data/Atma.jpeg",
      socials: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      name: "Nazzwa Vientika Triana",
      role: "Direktur Operasional",
      image: "data/nazzwa.jpeg",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "instagram", url: "#" }
      ]
    },
    {
      name: "Yun Sabarina Mikanda",
      role: "Business Analyst",
      image: "data/Yun.jpeg",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      name: "Yessy Shafitri",
      role: "Data Engineer",
      image: "data/Yessy.jpeg",
      socials: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      name: "Rista Az-Zahra Novita Wijaya",
      role: "Finance, Market, & Administrasi",
      image: "data/Rista.jpeg",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "instagram", url: "#" }
      ]
    }
  ],

  whyUs: {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkWPY0cYE0nEkVu7oyA5QFbV_jYZIVUpDJTAJZUliX0_avGPAElQCH8NhyyFwXP8SW5Yxu1D4kVQ-ME4x3E_a-XRyuDI93GnckGfrOi3ypL76KLcRMdB_-jdUyQv1MU9SSDlt0TJJ6aY-kJqgDnvzXEHoOohsx3ItQ-u1cQeYSLuxKw01kzUI8WLqgjS0zMyCZ4lHaUIC1DUzEFUqhU8YZqwS9GcZ3Se7zeFowH1U",
    label: "MENGAPA MEMILIH KAMI",
    title: "Solusi Cerdas untuk Bisnis Cerdas",
    desc: "Kami menggabungkan ketelitian rekayasa kode, desain estetis, dan metodologi agile agar setiap solusi teknologi tepat sasaran dan berdaya saing global.",
    points: [
      "Solusi Disesuaikan dengan Skala Bisnis",
      "Tim Senior & Berpengalaman",
      "Proses Transparan & Komunikasi Intensif",
      "Fokus pada Hasil & ROI Riil"
    ]
  },

  pricing: {
    label: "PAKET BIAYA INVESTASI",
    title: "Paket Fleksibel untuk Setiap Bisnis",
    discount: "-20%",
    plans: [
      {
        id: "starter",
        name: "Starter",
        desc: "Cocok untuk UMKM & rintisan awal",
        monthlyPrice: "Rp1.500k",
        yearlyPrice: "Rp1.200k",
        featured: false,
        features: [
          "1 Website Responsif",
          "Optimasi SEO Dasar",
          "Domain & SSL Gratis",
          "Formulir Kontak WA"
        ]
      },
      {
        id: "pro",
        name: "Professional",
        desc: "Solusi tepat bagi bisnis berkembang",
        monthlyPrice: "Rp3.500k",
        yearlyPrice: "Rp2.800k",
        featured: true,
        badge: "Terpopuler",
        features: [
          "Hingga 5 Halaman Dinamis",
          "SEO Tingkat Lanjut",
          "Integrasi CMS Mandiri",
          "Dukungan Prioritas 24/7"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        desc: "Skalabilitas penuh korporasi besar",
        monthlyPrice: "Rp6.500k",
        yearlyPrice: "Rp5.200k",
        featured: false,
        features: [
          "Halaman Tanpa Batas",
          "Modul Custom Software",
          "Integrasi ERP / API",
          "Dedicated Tech Lead"
        ]
      }
    ]
  },

  testimonials: [
    {
      id: 1,
      quote: "Insyte Param Teknologi benar-benar mentransformasi kehadiran digital perusahaan kami. Sistem web dan arsitektur database yang dibangun sangat stabil, cepat, dan tim mereka tanggap terhadap setiap masukan kami.",
      name: "Daniel Hartono",
      position: "CEO, TechNova Solusindo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmk6wRpH8azIS3lwYQaTXKkWu-0Y9tY8aGlCyfowKsbDlz8yYU72BZAVJp8gTviiukqfY8sWQ2UnK98fxgs69E37848FNgWNYxIippX_Cah2sKsYRvssSw2rQiVp4u7XTW3H5m3G0U2WikhL96wCJkADlIjTx9GjYBoSVGSmyDJhM93iPxeV8iu1MYsYZ1PBP30tKiztl4NGGPDq8HnQa-DI1zKTMVdyIwTbFXubA"
    }
  ],

  faq: [
    {
      question: "Berapa lama proses pembuatan website?",
      answer: "Rata-rata proyek selesai antara 2 hingga 6 minggu, tergantung skala kebutuhan fitur kustom serta kelengkapan materi awal dari klien.",
      active: true
    },
    {
      question: "Apakah ada dukungan teknis berkelanjutan?",
      answer: "Ya, kami menyediakan paket pemeliharaan (maintenance) dan dukungan teknis 24/7 termasuk backup berkala, pembaruan keamanan, dan optimasi performa server.",
      active: false
    },
    {
      question: "Bisakah Anda mendesain ulang website lama?",
      answer: "Tentu saja! Kami dapat melakukan audit menyeluruh pada website lama Anda dan melakukan perombakan UI/UX serta modernisasi arsitektur kode agar lebih cepat dan modern.",
      active: false
    },
    {
      question: "Apakah website dijamin ramah perangkat HP?",
      answer: "Pasti. Semua website yang kami bangun menerapkan prinsip Mobile-First Design yang adaptif dan optimal di smartphone, tablet, laptop, maupun monitor desktop resolusi tinggi.",
      active: false
    }
  ],

  cta: {
    title: "Punya Proyek di Pikiran Anda?",
    desc: "Mari wujudkan visi digital bisnis Anda bersama tim rekayasa kami.",
    points: [
      "Konsultasi Kebutuhan",
      "Estimasi Biaya Transparan",
      "Desain Prototipe Gratis"
    ],
    buttonText: "Dapatkan Penawaran",
    whatsappText: "Halo Insyte Param, saya ingin konsultasi mengenai proyek digital."
  },

  newsletter: {
    title: "Dapatkan Tips & Insight Terbaru",
    desc: "Berlangganan buletin teknologi dan strategi bisnis kami mingguan langsung ke email Anda.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5z3vuIKOB5dmQ12KjKtQrjz0fxOaQP7VFnIIM6RHYSmVGIXCsUOyQ063UakwxJeAwD4aYBvfB0xagWGEyHwOuK5qzj20i1DdJhjTFAGhaIkfuSq2rSkmydUT42Rda9TOMeLuEqtQdbMByTJddFjwOS80JpAq_AFfQkGDRltOmpLhCrbu2hlXioHlFGwDCpzoA_drnclR9OmO5WkMgBsOs2GnUjqnTQeOF2Ifx2Ao"
  },

  stats: [
    { value: "150+", label: "Proyek Selesai" },
    { value: "120+", label: "Klien Puas" },
    { value: "10+", label: "Tahun Jam Terbang" },
    { value: "25+", label: "Anggota Ahli" }
  ],

  footerLinks: {
    quickLinks: [
      { label: "Tentang Kami", href: "#tentang-kami" },
      { label: "Layanan", href: "#layanan" },
      { label: "Portofolio", href: "#portofolio" },
      { label: "Paket Investasi", href: "#pricing" },
      { label: "Kontak", href: "#kontak" }
    ],
    services: [
      { label: "Web Design", href: "#layanan" },
      { label: "Web Development", href: "#layanan" },
      { label: "Digital Marketing", href: "#layanan" },
      { label: "Optimasi SEO", href: "#layanan" },
      { label: "Branding UI/UX", href: "#layanan" }
    ]
  }
};
