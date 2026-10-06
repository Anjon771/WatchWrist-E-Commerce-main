/**
 * CHRONO ATELIER — Luxury Horology & Accessories
 * Application Logic & Interactive Storefront Engine
 */

// 1. Comprehensive Catalog Data
const CATALOG = [
  {
    id: 'watch-01',
    name: 'Chronotrigger 42mm',
    kicker: 'Flyback Chronograph',
    category: 'chronograph',
    price: 649.99,
    oldPrice: 750.00,
    image: './WATCHES/product-14.png',
    badge: 'Best Seller',
    specs: {
      movement: 'Automatic Calibre 4130 (28,800 vph)',
      case: '316L Surgical Stainless Steel',
      diameter: '42mm · 12.8mm thickness',
      crystal: 'Curved Anti-Reflective Sapphire',
      waterResist: '100m / 10 ATM',
      strap: 'Integrated 3-Link Steel with Micro-Clasp',
      powerReserve: '72 Hours'
    },
    description: 'The benchmark of precision timing. Engineered with a triple-subdial flyback chronograph complication, ceramic tachymeter scale, and precision mechanical escapement.'
  },
  {
    id: 'watch-02',
    name: 'Prestige Horizons',
    kicker: 'Classic Dress Calibre',
    category: 'automatic',
    price: 719.49,
    image: './WATCHES/product-13.png',
    badge: 'Signature',
    specs: {
      movement: 'In-House Calibre 8900 Automatic',
      case: 'Brushed Rose-Gold PVD & Steel',
      diameter: '41mm · 10.5mm thickness',
      crystal: 'Double-Domed Sapphire Crystal',
      waterResist: '50m / 5 ATM',
      strap: 'Hand-Stitched Italian Tuscan Calfskin',
      powerReserve: '60 Hours'
    },
    description: 'Understated elegance for black-tie gatherings and executive boardrooms. Features hand-applied baton indices, sunburst dial finish, and exhibition rotor back.'
  },
  {
    id: 'watch-03',
    name: 'Dynachrono Aurum',
    kicker: '18K Champagne Accent',
    category: 'chronograph',
    price: 659.89,
    image: './WATCHES/product-11.png',
    badge: 'Limited 500 Pcs',
    specs: {
      movement: 'Swiss High-Beat Mechanical Calibre',
      case: 'Bespoke Aurum Gold Finished Steel',
      diameter: '43mm · 13mm thickness',
      crystal: 'Scratch-Proof Sapphire with Double AR',
      waterResist: '100m / 10 ATM',
      strap: 'Sculpted Solid Link Aurum Bracelet',
      powerReserve: '68 Hours'
    },
    description: 'A striking statement piece radiating warm golden reflections. Limited numbered edition of 500 pieces engraved on the exhibition caseback.'
  },
  {
    id: 'watch-04',
    name: 'Dynachrono Slate',
    kicker: 'DLC Coated Titanium',
    category: 'automatic',
    price: 599.75,
    image: './WATCHES/product-10.png',
    badge: 'Stealth Slate',
    specs: {
      movement: 'Automatic Self-Winding Calibre 3235',
      case: 'Diamond-Like Carbon (DLC) Titanium',
      diameter: '42mm · 11.8mm thickness',
      crystal: 'Flat Sapphire with Blue Anti-Reflective',
      waterResist: '100m / 10 ATM',
      strap: 'Matte Slate Hybrid Rubber & Leather',
      powerReserve: '70 Hours'
    },
    description: 'Tactical sophistication. Finished with a non-reflective stealth DLC coating that provides extreme scratch resistance and contemporary architectural presence.'
  },
  {
    id: 'watch-05',
    name: 'SmartSync Titanium',
    kicker: 'Biometric Chrono',
    category: 'hybrid',
    price: 739.20,
    image: './WATCHES/product-09.png',
    badge: 'Smart Precision',
    specs: {
      movement: 'Hybrid Swiss Quartz + Biometric Digital',
      case: 'Aerospace Grade-5 Satin Titanium',
      diameter: '44mm · 12.2mm thickness',
      crystal: 'Sapphire Crystal with Integrated OLED Ring',
      waterResist: '50m / 5 ATM',
      strap: 'Hypoallergenic Fluorocarbon Rubber',
      powerReserve: '30-Day Battery Life'
    },
    description: 'Traditional mechanical analog dials seamlessly married to a hidden micro-OLED notification and biometric display beneath the sapphire crystal.'
  },
  {
    id: 'watch-06',
    name: 'DigitalEdge Ceramic',
    kicker: 'Zirconia Ceramic',
    category: 'chronograph',
    price: 689.55,
    image: './WATCHES/product-08.png',
    badge: 'Ceramic Matrix',
    specs: {
      movement: 'High-Frequency Chronograph (36,000 vph)',
      case: 'High-Tech Sintered Zirconia Ceramic',
      diameter: '42.5mm · 12.5mm thickness',
      crystal: 'Anti-Reflective Sapphire',
      waterResist: '100m / 10 ATM',
      strap: 'Ceramic & Steel Composite Bracelet',
      powerReserve: '55 Hours'
    },
    description: 'Forged under 1500°C sintering pressures, creating a deep obsidian ceramic exterior that is virtually impervious to scratches and daily wear.'
  },
  {
    id: 'watch-07',
    name: 'ApexGuard Diver',
    kicker: 'ISO 6425 Certified',
    category: 'diver',
    price: 579.90,
    image: './WATCHES/product-07.png',
    badge: '300m Diver',
    specs: {
      movement: 'Ruggedized Calibre 2824-2 Automatic',
      case: '316L Heavy-Duty Stainless Steel',
      diameter: '43mm · 14mm thickness',
      crystal: '4mm Thick Double-Domed Sapphire',
      waterResist: '300m / 30 ATM with Helium Valve',
      strap: 'Diver Extension Steel + Marine Rubber',
      powerReserve: '42 Hours'
    },
    description: 'Engineered for abyssal expeditions. Features a 120-click unidirectional ceramic bezel, automatic helium escape valve, and high-intensity SuperLuminova BGW9.'
  },
  {
    id: 'watch-08',
    name: 'Aerosport Aviator',
    kicker: 'Pilot Chronograph',
    category: 'chronograph',
    price: 629.30,
    image: './WATCHES/product-04.png',
    badge: 'Aviator Heritage',
    specs: {
      movement: 'Dual-Time Chronograph Movement',
      case: 'Satin-Brushed Steel with Coin-Edge Bezel',
      diameter: '41.5mm · 12mm thickness',
      crystal: 'Box-Shaped Vintage Sapphire Crystal',
      waterResist: '100m / 10 ATM',
      strap: 'Vintage Riveted Brown Aviator Leather',
      powerReserve: '48 Hours'
    },
    description: 'An homage to golden-age aviation. Equipped with a circular bidirectional slide rule bezel for flight speed, fuel consumption, and distance calculations.'
  },
  {
    id: 'shades-01',
    name: 'Flare Glaciers Sunglasses',
    kicker: 'Polarized Eyewear',
    category: 'eyewear',
    price: 185.00,
    image: './WATCHES/product-glasses-01-520x520.png',
    badge: 'Spotlight',
    specs: {
      movement: 'Optical Polarized Filter (UV400 Category 3)',
      case: 'Grade-5 Featherweight Titanium Frame',
      diameter: 'Lens Width 54mm · Bridge 18mm · Temple 145mm',
      crystal: 'Scratch-Proof Oleophobic Mineral Glass',
      waterResist: 'Sweat & Saltwater Resistant',
      strap: 'Hand-Polished Black Italian Acetate Tips',
      powerReserve: 'Lifetime Frame Warranty'
    },
    description: 'Optically centered mineral lenses providing 100% glare mitigation across snow, sea, and highway horizons. Framed in featherlight titanium.'
  },
  {
    id: 'bracelet-01',
    name: 'Artisan Braided Leather Bracelet',
    kicker: 'Wristwear Accessory',
    category: 'accessories',
    price: 145.00,
    image: './WATCHES/damcreativ_Hyper_realistic_image_of_a_mans_stylish_bracelet_per_cadc1f19-ada4-4738-b821-05362eff42b6-768x768.png',
    badge: 'Handcrafted',
    specs: {
      movement: 'Precision Magnetic Locking Mechanism',
      case: '316L Brushed Architectural Steel Clasp',
      diameter: '19cm / 21cm Length Options',
      crystal: 'N/A',
      waterResist: 'Moisture Treated',
      strap: 'Full-Grain Braided Tuscan Calfskin',
      powerReserve: 'Lifetime Clasp Guarantee'
    },
    description: 'Artisanal hand-woven Italian leather designed to pair seamlessly with your steel or gold chronograph.'
  }
];

// 2. Global State
let cart = [
  { id: 'watch-01', qty: 1 } // Pre-seed 1 item for immediate delight
];
let wishlist = new Set();
let activeFilter = 'all';
let promoDiscount = 0; // 0.10 for LUXURY10
let sliderIndex = 0;
let testimonialIndex = 0;
let currentHeroModelId = 'watch-01';

const HERO_MODELS = {
  'watch-01': {
    name: 'Chronotrigger 42mm',
    price: '$649.99',
    calibreBadge: 'Calibre 4130 Flyback',
    image: './WATCHES/product-14.png',
    freq: '28,800 VPH',
    reserve: '72 Hours',
    wr: '100 Metres',
    cert: 'COSC -2/+2s',
    desc: 'Engineered with aerospace-grade titanium, hand-finished sapphire crystals, and Swiss-inspired automatic calibres. Defined by uncompromising horological precision.',
    hotspots: [
      { title: 'Ceramic Tachymeter', desc: 'Laser-engraved bezel measuring speed up to 400 km/h with diamond-honed precision.' },
      { title: 'Sunray Dial & Lume', desc: 'Swiss SuperLuminova BGW9 emission with 8-hour continuous luminescence.' },
      { title: 'Triple-Lock Crown', desc: 'Surgical 316L screw-down crown with dual helium safety gaskets rated to 10 ATM.' }
    ]
  },
  'watch-02': {
    name: 'Prestige Horizons',
    price: '$719.49',
    calibreBadge: 'Calibre 8900 Automatic',
    image: './WATCHES/product-13.png',
    freq: '25,200 VPH',
    reserve: '60 Hours',
    wr: '50 Metres',
    cert: 'METAS Master Spec',
    desc: 'An iconic dress timepiece in hand-finished rose gold PVD and supple Tuscan calfskin. Tailored for discerning connoisseurs who value heritage craftsmanship.',
    hotspots: [
      { title: 'Double-Domed Sapphire', desc: 'Hand-ground convex crystal with dual anti-reflective interior coating.' },
      { title: '18K Applied Indices', desc: 'Faceted baton markers polished by master jewellers under magnification.' },
      { title: 'Tuscan Calfskin Strap', desc: 'Vegetable-tanned full-grain leather with ergonomic butterfly deployment clasp.' }
    ]
  },
  'watch-03': {
    name: 'Dynachrono Aurum',
    price: '$659.89',
    calibreBadge: 'Calibre High-Beat Aurum',
    image: './WATCHES/product-11.png',
    freq: '36,000 VPH',
    reserve: '68 Hours',
    wr: '100 Metres',
    cert: 'Geneva Seal Tier',
    desc: 'Bespoke champagne-accented case with high-frequency escapement. Limited numbered edition of 500 pieces forged for true horological individuality.',
    hotspots: [
      { title: 'Aurum Sunburst Bezel', desc: 'Electrolytic gold vapor deposition offering intense luster and corrosion immunity.' },
      { title: 'Triple Subdial Layout', desc: 'Precision 30-minute, 12-hour, and small seconds registers with circular graining.' },
      { title: 'Sculpted Solid Links', desc: 'Articulated solid links with micro-chamfered edges and concealed security clasp.' }
    ]
  }
};

// 3. Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initHeaderScroll();
  initHeroSection();
  initSlider();
  initTestimonials();
  initVideoControls();
  initModalsAndEvents();
  initSearch();
  renderCart();
  renderWishlistCount();
});

// Hero Section Interactive Logic
function initHeroSection() {
  const switcher = document.getElementById('heroModelSwitcher');
  const watchCard = document.getElementById('heroWatchDisplayCard');
  const mainImg = document.getElementById('heroMainWatchImg');

  if (switcher) {
    const buttons = switcher.querySelectorAll('.hero-model-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const modelId = btn.dataset.model;
        switchHeroModel(modelId);
      });
    });
  }

  // Interactive 3D Subtle Mouse Parallax Tilt
  if (watchCard && mainImg) {
    watchCard.addEventListener('mousemove', (e) => {
      const rect = watchCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = -(y / (rect.height / 2)) * 8;
      const tiltY = (x / (rect.width / 2)) * 8;
      mainImg.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
    });

    watchCard.addEventListener('mouseleave', () => {
      mainImg.style.transform = '';
    });
  }

  // Hotspot Click to Toggle on Mobile / Touch
  const hotspots = document.querySelectorAll('.hero-hotspot');
  hotspots.forEach(spot => {
    spot.addEventListener('click', (e) => {
      e.stopPropagation();
      hotspots.forEach(s => { if (s !== spot) s.classList.remove('active'); });
      spot.classList.toggle('active');
    });
  });

  document.addEventListener('click', () => {
    hotspots.forEach(s => s.classList.remove('active'));
  });
}

function switchHeroModel(modelId) {
  const model = HERO_MODELS[modelId];
  if (!model) return;

  currentHeroModelId = modelId;

  const mainImg = document.getElementById('heroMainWatchImg');
  const priceText = document.getElementById('heroPriceText');
  const descText = document.getElementById('heroDesc');
  const calibreBadge = document.getElementById('heroCalibreBadge');
  const telemFreq = document.getElementById('heroTelemFreq');
  const telemReserve = document.getElementById('heroTelemReserve');
  const telemWR = document.getElementById('heroTelemWR');
  const telemCert = document.getElementById('heroTelemCert');

  // Smooth Fade Animation on image
  if (mainImg) {
    mainImg.style.opacity = '0';
    mainImg.style.transform = 'scale(0.96)';
    setTimeout(() => {
      mainImg.src = model.image;
      mainImg.alt = model.name;
      mainImg.style.opacity = '1';
      mainImg.style.transform = '';
    }, 180);
  }

  if (priceText) priceText.textContent = model.price;
  if (descText) descText.textContent = model.desc;
  if (calibreBadge) calibreBadge.textContent = model.calibreBadge;
  if (telemFreq) telemFreq.textContent = model.freq;
  if (telemReserve) telemReserve.textContent = model.reserve;
  if (telemWR) telemWR.textContent = model.wr;
  if (telemCert) telemCert.textContent = model.cert;

  // Update Hotspot Tooltip Contents
  const h1Title = document.getElementById('hotspot1Title');
  const h1Desc = document.getElementById('hotspot1Desc');
  const h2Title = document.getElementById('hotspot2Title');
  const h2Desc = document.getElementById('hotspot2Desc');
  const h3Title = document.getElementById('hotspot3Title');
  const h3Desc = document.getElementById('hotspot3Desc');

  if (h1Title && model.hotspots[0]) h1Title.textContent = model.hotspots[0].title;
  if (h1Desc && model.hotspots[0]) h1Desc.textContent = model.hotspots[0].desc;
  if (h2Title && model.hotspots[1]) h2Title.textContent = model.hotspots[1].title;
  if (h2Desc && model.hotspots[1]) h2Desc.textContent = model.hotspots[1].desc;
  if (h3Title && model.hotspots[2]) h3Title.textContent = model.hotspots[2].title;
  if (h3Desc && model.hotspots[2]) h3Desc.textContent = model.hotspots[2].desc;
}

function addCurrentHeroToCart() {
  addToCart(currentHeroModelId);
}

function inspectCurrentHeroWatch() {
  openQuickView(currentHeroModelId);
}

// 4. Countdown Timer Engine
function initCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  // 14 days from initial boot
  const targetTime = Date.now() + (14 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000) + (35 * 60 * 1000);

  setInterval(() => {
    const diff = targetTime - Date.now();
    if (diff <= 0) {
      countdownEl.textContent = 'Offer Renewed';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % 1000) / 1000);
    countdownEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
  }, 1000);
}

// 5. Header Scroll Effect
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// 6. Timepiece Slider & Category Filtering
function initSlider() {
  const track = document.getElementById('sliderTrack');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const filterTabs = document.querySelectorAll('.filter-tab');

  if (!track) return;

  const updateSliderPosition = () => {
    const card = track.querySelector('.product-card:not([style*="display: none"])');
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 28; // 1.75rem
    track.style.transform = `translateX(-${sliderIndex * (cardWidth + gap)}px)`;
  };

  const getVisibleCount = () => {
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 992) return 2;
    if (w < 1200) return 3;
    return 4;
  };

  prevBtn?.addEventListener('click', () => {
    if (sliderIndex > 0) {
      sliderIndex--;
    } else {
      const visible = track.querySelectorAll('.product-card:not([style*="display: none"])').length;
      sliderIndex = Math.max(0, visible - getVisibleCount());
    }
    updateSliderPosition();
  });

  nextBtn?.addEventListener('click', () => {
    const visibleCards = track.querySelectorAll('.product-card:not([style*="display: none"])').length;
    const maxIdx = Math.max(0, visibleCards - getVisibleCount());
    if (sliderIndex < maxIdx) {
      sliderIndex++;
    } else {
      sliderIndex = 0;
    }
    updateSliderPosition();
  });

  // Filter Tabs Event Listeners
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      activeFilter = filter;
      sliderIndex = 0;

      const cards = track.querySelectorAll('.product-card');
      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      track.style.transform = `translateX(0px)`;
    });
  });

  window.addEventListener('resize', updateSliderPosition, { passive: true });
}

// 7. Testimonials Carousel
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!track || dots.length === 0) return;

  const goToSlide = (idx) => {
    testimonialIndex = idx;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
  };

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      goToSlide(idx);
    });
  });

  // Auto Advance every 7 seconds
  setInterval(() => {
    const nextIdx = (testimonialIndex + 1) % dots.length;
    goToSlide(nextIdx);
  }, 7000);
}

// 8. Video Player Controls
function initVideoControls() {
  const video = document.getElementById('craftsmanshipVideo');
  const btnPlay = document.getElementById('btnTogglePlayVideo');
  const playIcon = document.getElementById('playIcon');
  const playText = document.getElementById('playText');
  const btnAudio = document.getElementById('btnToggleAudioVideo');
  const audioIcon = document.getElementById('audioIcon');
  const audioText = document.getElementById('audioText');

  if (!video) return;

  btnPlay?.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playIcon.className = 'fa-solid fa-pause';
      playText.textContent = 'Pause Film';
    } else {
      video.pause();
      playIcon.className = 'fa-solid fa-play';
      playText.textContent = 'Resume Film';
    }
  });

  btnAudio?.addEventListener('click', () => {
    video.muted = !video.muted;
    if (video.muted) {
      audioIcon.className = 'fa-solid fa-volume-xmark';
      audioText.textContent = 'Unmute Audio';
    } else {
      audioIcon.className = 'fa-solid fa-volume-high';
      audioText.textContent = 'Mute Audio';
    }
  });
}

// 9. Shopping Cart Operations & Drawer
function addToCart(productId, qty = 1) {
  const product = CATALOG.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }

  renderCart();
  openCartDrawer();
  showToast(`Added ${product.name} to shopping bag`, 'fa-solid fa-bag-shopping');
}

function removeFromCart(productId) {
  const item = CATALOG.find(p => p.id === productId);
  cart = cart.filter(i => i.id !== productId);
  renderCart();
  if (item) {
    showToast(`Removed ${item.name} from bag`, 'fa-regular fa-trash-can');
  }
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    renderCart();
  }
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const badge = document.getElementById('cartBadgeCount');
  const subtotalEl = document.getElementById('cartSubtotalText');
  const totalEl = document.getElementById('cartTotalText');
  const footer = document.getElementById('cartFooter');
  const discountRow = document.getElementById('promoDiscountRow');
  const discountEl = document.getElementById('cartDiscountText');

  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
  if (badge) badge.textContent = `(${totalCount})`;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4 style="font-family: var(--font-display); font-size: 1.1rem; color: var(--text-primary);">Your Bag is Empty</h4>
        <p style="font-size: 0.85rem; max-width: 240px;">Explore our catalog of Swiss calibres and luxury accessories.</p>
        <button class="btn-primary" style="margin-top: 1rem;" onclick="closeCartDrawer()">Browse Timepieces</button>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  let subtotal = 0;
  let itemsHtml = '';

  cart.forEach(item => {
    const prod = CATALOG.find(p => p.id === item.id);
    if (!prod) return;

    const linePrice = prod.price * item.qty;
    subtotal += linePrice;

    itemsHtml += `
      <div class="cart-item-row">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${prod.name}</h4>
          <div class="cart-item-price tabular-nums">$${prod.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateCartQty('${prod.id}', -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${prod.id}', 1)">+</button>
            </div>
            <button class="btn-remove-item" onclick="removeFromCart('${prod.id}')" title="Remove item">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = itemsHtml;

  const discountAmount = subtotal * promoDiscount;
  const finalTotal = subtotal - discountAmount;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;

  if (promoDiscount > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  // Update checkout modal total as well
  const coTotal = document.getElementById('checkoutTotalAmount');
  if (coTotal) coTotal.textContent = `$${finalTotal.toFixed(2)}`;
}

function openCartDrawer() {
  document.getElementById('cartBackdrop')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartBackdrop')?.classList.remove('open');
  document.body.style.overflow = '';
}

// 10. Quick View Modal
function openQuickView(productId) {
  const prod = CATALOG.find(p => p.id === productId);
  if (!prod) return;

  const body = document.getElementById('quickViewBody');
  if (!body) return;

  body.innerHTML = `
    <div class="quickview-image-pane">
      <img src="${prod.image}" alt="${prod.name}" />
    </div>
    <div class="quickview-details-pane">
      <span class="section-subtitle">${prod.kicker}</span>
      <h2>${prod.name}</h2>
      <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1rem;">
        <span class="tabular-nums" style="font-family: var(--font-mono); font-size: 1.85rem; font-weight: 700; color: var(--accent-gold-light);">
          $${prod.price.toFixed(2)}
        </span>
        ${prod.oldPrice ? `<span class="tabular-nums" style="font-size: 1rem; color: var(--text-muted); text-decoration: line-through;">$${prod.oldPrice.toFixed(2)}</span>` : ''}
      </div>

      <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.25rem;">
        ${prod.description}
      </p>

      <div class="quickview-specs-list">
        <div class="quickview-spec-item">
          <strong>Movement</strong>
          <span>${prod.specs.movement}</span>
        </div>
        <div class="quickview-spec-item">
          <strong>Case Material</strong>
          <span>${prod.specs.case}</span>
        </div>
        <div class="quickview-spec-item">
          <strong>Diameter</strong>
          <span>${prod.specs.diameter}</span>
        </div>
        <div class="quickview-spec-item">
          <strong>Crystal</strong>
          <span>${prod.specs.crystal}</span>
        </div>
        <div class="quickview-spec-item">
          <strong>Water Resistance</strong>
          <span>${prod.specs.waterResist}</span>
        </div>
        <div class="quickview-spec-item">
          <strong>Power Reserve</strong>
          <span>${prod.specs.powerReserve}</span>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1.5rem;">
        <button class="btn-primary" style="flex: 1;" onclick="addToCart('${prod.id}'); closeAllModals();">
          <i class="fa-solid fa-bag-shopping"></i> Add to Bag — $${prod.price.toFixed(2)}
        </button>
        <button class="btn-card-quickview" style="width: 46px; height: 46px;" onclick="toggleWishlist('${prod.id}', this)" title="Wishlist">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickViewModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// 11. Wishlist Operations
function toggleWishlist(productId, btnElement) {
  const prod = CATALOG.find(p => p.id === productId);
  if (!prod) return;

  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    btnElement?.classList.remove('active');
    btnElement?.querySelector('i')?.classList.replace('fa-solid', 'fa-regular');
    showToast(`Removed ${prod.name} from wishlist`, 'fa-regular fa-heart');
  } else {
    wishlist.add(productId);
    btnElement?.classList.add('active');
    btnElement?.querySelector('i')?.classList.replace('fa-regular', 'fa-solid');
    showToast(`Saved ${prod.name} to wishlist`, 'fa-solid fa-heart');
  }
  renderWishlistCount();
}

function renderWishlistCount() {
  const badge = document.getElementById('wishlistCount');
  if (!badge) return;
  badge.textContent = wishlist.size;
  badge.style.display = wishlist.size > 0 ? 'flex' : 'none';
}

// 12. Checkout & Order Placement Flow
function openCheckoutModal() {
  closeCartDrawer();
  document.getElementById('checkoutStep1').style.display = 'block';
  document.getElementById('checkoutConfirmation').style.display = 'none';
  document.getElementById('checkoutModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function handlePlaceOrder(event) {
  event.preventDefault();
  const orderRef = '#CR-' + Math.floor(10000 + Math.random() * 90000);
  
  document.getElementById('confirmedOrderNum').textContent = orderRef;
  document.getElementById('checkoutStep1').style.display = 'none';
  document.getElementById('checkoutConfirmation').style.display = 'block';

  // Empty cart
  cart = [];
  renderCart();
  showToast(`Order ${orderRef} authorized successfully!`, 'fa-solid fa-circle-check');
}

// 13. Search Modal & Engine
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem;">Type to search master timepieces, sunglasses, and leather accessories.</p>';
      return;
    }

    const matched = CATALOG.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.kicker.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.specs.case.toLowerCase().includes(q) ||
      p.specs.movement.toLowerCase().includes(q)
    );

    if (matched.length === 0) {
      results.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">No items found matching "${q}".</p>`;
      return;
    }

    results.innerHTML = matched.map(prod => `
      <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); cursor: pointer;" onclick="openQuickView('${prod.id}'); closeAllModals();">
        <img src="${prod.image}" alt="${prod.name}" style="width: 50px; height: 50px; object-fit: contain;" />
        <div style="flex: 1;">
          <h4 style="font-size: 0.9rem; color: var(--text-primary); margin-bottom: 2px;">${prod.name}</h4>
          <span style="font-size: 0.74rem; color: var(--text-muted);">${prod.kicker}</span>
        </div>
        <div class="tabular-nums" style="font-weight: 600; color: var(--accent-gold-light); font-size: 0.95rem;">
          $${prod.price.toFixed(2)}
        </div>
      </div>
    `).join('');
  });
}

// 14. Toast Notification Manager
function showToast(message, icon = 'fa-solid fa-info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <i class="${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 300ms ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 15. Modal Events & Listeners
function initModalsAndEvents() {
  // Cart Drawer
  document.getElementById('btnOpenCart')?.addEventListener('click', openCartDrawer);
  document.getElementById('btnCloseCart')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartBackdrop') closeCartDrawer();
  });

  // Proceed Checkout
  document.getElementById('btnProceedCheckout')?.addEventListener('click', openCheckoutModal);
  document.getElementById('btnCloseCheckout')?.addEventListener('click', closeAllModals);

  // Quick View
  document.getElementById('btnCloseQuickView')?.addEventListener('click', closeAllModals);

  // Search
  document.getElementById('btnOpenSearch')?.addEventListener('click', () => {
    document.getElementById('searchModal')?.classList.add('open');
    document.getElementById('searchInput')?.focus();
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('btnCloseSearch')?.addEventListener('click', closeAllModals);

  // Wishlist Icon in Top Bar
  document.getElementById('btnWishlist')?.addEventListener('click', () => {
    if (wishlist.size === 0) {
      showToast('Your wishlist is empty. Click the heart icon on any watch!', 'fa-regular fa-heart');
    } else {
      showToast(`You have ${wishlist.size} timepiece(s) saved.`, 'fa-solid fa-heart');
    }
  });

  // Promo Code
  document.getElementById('btnApplyPromo')?.addEventListener('click', () => {
    const input = document.getElementById('promoInput');
    const code = input?.value.trim().toUpperCase();
    if (code === 'LUXURY10') {
      promoDiscount = 0.10;
      renderCart();
      showToast('VIP Promo applied: 10% discount deducted!', 'fa-solid fa-tag');
    } else {
      showToast('Invalid or expired promotional code.', 'fa-solid fa-circle-exclamation');
    }
  });

  // Newsletter Submit
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value;
    showToast(`Privilege invitation sent to ${email}`, 'fa-solid fa-envelope');
    e.target.reset();
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeCartDrawer();
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuToggle');
  mobileBtn?.addEventListener('click', () => {
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '74px';
      nav.style.left = '0';
      nav.style.width = '100%';
      nav.style.background = 'var(--bg-secondary)';
      nav.style.padding = '1.5rem';
      nav.style.borderBottom = '1px solid var(--border-medium)';
    }
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

// 16. Concierge & Legal Modals
function showConciergeModal() {
  showToast('Horological Concierge connected. Direct line: +41 22 710 8800', 'fa-solid fa-headset');
}

function showLegalModal(title) {
  showToast(`${title} certified under Swiss Horological Standards 2026.`, 'fa-solid fa-file-contract');
}
