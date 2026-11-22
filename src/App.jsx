import { useState, useMemo, useEffect } from 'react'
import laptopPhoto from './assets/laptop.jpg'
import mousePhoto from './assets/mouse.jpg'
import keyboardPhoto from './assets/keyboard.jpg'
import monitorPhoto from './assets/monitor.jpg'
import headphonesPhoto from './assets/headphones.jpg'
import tabletPhoto from './assets/tablet.jpg'
import speakerPhoto from './assets/speaker.jpg'
import watchPhoto from './assets/watch.jpg'
import './App.css'

const initialProducts = [
  {
    id: 1,
    name: 'កុំព្យូទ័រយួរដៃ UltraPro 16"',
    subtitle: 'M3 Max · 32GB RAM · 1TB SSD',
    price: 1299,
    originalPrice: 1450,
    category: 'កុំព្យូទ័រ',
    image: laptopPhoto,
    badge: 'លក់ដាច់បំផុត',
    badgeType: 'hot',
    rating: 4.9,
    reviews: 142,
    specs: ['អេក្រង់ 16" Liquid Retina XDR 120Hz', 'បន្ទះឈីបកម្លាំងខ្លាំង Next-Gen', 'ថ្មកាន់បានរហូតដល់ ២២ ម៉ោង', 'តួអាលុយមីញ៉ូមស្រាលត្រឹម 1.6kg'],
    description: 'កុំព្យូទ័រយួរដៃកម្រិតកំពូល ស័ក្តិសមបំផុតសម្រាប់ការងារកាត់តវីដេអូ កូដ និងការងារទាមទារសមត្ថភាពខ្ពស់។ អេក្រង់ច្បាស់ត្រជាក់ភ្នែក ថ្មកាន់បានពេញមួយថ្ងៃ។',
    inStock: true,
    color: '#0e1726'
  },
  {
    id: 2,
    name: 'កណ្ដុរឥតខ្សែ Ergonomic Master 3S',
    subtitle: 'Quiet Click · 8000 DPI · MagSpeed',
    price: 69,
    originalPrice: 85,
    category: 'គ្រឿងបន្ថែម',
    image: mousePhoto,
    badge: 'ពេញនិយម',
    badgeType: 'popular',
    rating: 4.8,
    reviews: 98,
    specs: ['រំកិល MagSpeed លឿននិងស្ងាត់ល្អឥតខ្ចោះ', 'សេនស័រ 8K DPI ដើរលើកញ្ចក់បាន', 'ភ្ជាប់បាន 3 ឧបករណ៍ក្នុងពេលតែមួយ', 'ថ្មសាក Type-C ប្រើបាន ៧០ ថ្ងៃ'],
    description: 'រចនាឡើងតាមទម្រង់ដៃធម្មជាតិ កាត់បន្ថយការចុកដៃពេលធ្វើការយូរម៉ោង។ ប៊ូតុងចុចស្ងាត់ល្អ មិនរំខានអ្នកជុំវិញ។',
    inStock: true,
    color: '#1a1921'
  },
  {
    id: 3,
    name: 'ក្ដារចុចមេកានិច RGB Custom Edition',
    subtitle: 'Hot-swappable · Wireless 2.4G & BT · RGB',
    price: 89,
    originalPrice: 110,
    category: 'គ្រឿងបន្ថែម',
    image: keyboardPhoto,
    badge: '-20%',
    badgeType: 'discount',
    rating: 4.9,
    reviews: 76,
    specs: ['Gateron Pro Switches វាយស្រួលដៃសម្លេងពិរោះ', 'តភ្ជាប់បាន 3 របៀប (Bluetooth, 2.4G, Type-C)', 'ភ្លើងពណ៌ RGB ១៨ ម៉ូត', 'តួអាលុយមីញ៉ូមរឹងមាំ premium'],
    description: 'ក្ដារចុចមេកានិចដែលផ្តល់នូវអារម្មណ៍វាយអក្សរយ៉ាងរីករាយ។ អាចដោះប្តូរ Switch បានយ៉ាងងាយស្រួល និងមានភ្លើង RGB ស្រស់ស្អាត។',
    inStock: true,
    color: '#1b1728'
  },
  {
    id: 4,
    name: 'ម៉ូនីទ័រ UltraSharp 4K IPS 27"',
    subtitle: 'HDR400 · 99% sRGB · USB-C Hub 90W',
    price: 349,
    originalPrice: 399,
    category: 'កុំព្យូទ័រ',
    image: monitorPhoto,
    badge: 'ណែនាំពិសេស',
    badgeType: 'featured',
    rating: 4.7,
    reviews: 54,
    specs: ['កម្រិតបង្ហាញ 4K UHD 3840 x 2160', 'ពណ៌ត្រឹមត្រូវ 99% sRGB សម្រាប់ Graphic Designer', 'ច្រក USB-C សាកថ្មកុំព្យូទ័របាន 90W', 'ជើងទម្របត់បែនបាន 360 ដឺក្រេ'],
    description: 'ផ្តល់រូបភាពច្បាស់ម៉ត់ខៃ និងពណ៌ដិតស្រស់ត្រឹមត្រូវ 100% សម្រាប់អ្នកឌីហ្សាញ និងអ្នកបង្កើតមាតិកា។ ភ្ជាប់ជាមួយកុំព្យូទ័រតែខ្សែមួយគត់។',
    inStock: true,
    color: '#0f1d24'
  },
  {
    id: 5,
    name: 'កាសឥតខ្សែ Studio Pro ANC',
    subtitle: 'Active Noise Cancelling · Hi-Res Audio · 40h',
    price: 159,
    originalPrice: 199,
    category: 'គ្រឿងបន្ថែម',
    image: headphonesPhoto,
    badge: 'ថ្មី ២០២៦',
    badgeType: 'new',
    rating: 5.0,
    reviews: 189,
    specs: ['បច្ចេកវិទ្យាកាត់សម្លេងរំខាន ANC ទំនើប', 'សម្លេងពិរោះកម្រិត Hi-Res Audio Bass ធ្ងន់', 'ថ្មកាន់បាន ៤០ ម៉ោង + សាកលឿន 10 នាទី', 'ពូកត្រចៀក Memory Foam ទន់ស្រួលពាក់'],
    description: 'កម្ចាត់សម្លេងរំខានជុំវិញខ្លួនទាំងស្រុង ដើម្បីផ្តោតលើការងារ ឬរីករាយជាមួយបទចម្រៀងដែលអ្នកចូលចិត្ត។',
    inStock: true,
    color: '#211e13'
  },
  {
    id: 6,
    name: 'ថេប្លេត NextGen Pad 11" 128GB',
    subtitle: 'OLED 120Hz · Stylus Pen Supported · WiFi 6E',
    price: 480,
    originalPrice: 530,
    category: 'កុំព្យូទ័រ',
    image: tabletPhoto,
    badge: 'HOT',
    badgeType: 'hot',
    rating: 4.8,
    reviews: 62,
    specs: ['អេក្រង់ 11" 2.8K 120Hz រលូនគ្រប់ចលនា', 'គាំទ្រប៊ិចគូរ Stylus កម្រិត 4096 pressure levels', 'បំពងសំឡេង 4 គ្រាប់ Dolby Atmos', 'កាមេរ៉ាមុខ Ultra-wide សម្រាប់ Video Call ច្បាស់'],
    description: 'ឧបករណ៍ដ៏ល្អឥតខ្ចោះសម្រាប់គូរគំនូរ កត់ត្រា និងកម្សាន្ត។ ស្តើង ស្រាល និងងាយស្រួលយកតាមខ្លួនគ្រប់ទីកន្លែង។',
    inStock: true,
    color: '#131e28'
  },
  {
    id: 7,
    name: 'ឧបករណ៍បំពងសំឡេង Ambient SoundBar',
    subtitle: 'Spatial Audio 3D · 60W RMS · Bluetooth 5.3',
    price: 75,
    originalPrice: 95,
    category: 'គ្រឿងបន្ថែម',
    image: speakerPhoto,
    badge: '-21%',
    badgeType: 'discount',
    rating: 4.7,
    reviews: 43,
    specs: ['កម្លាំងសំឡេង 60W RMS ពិរោះរណ្តំពេញបន្ទប់', 'បច្ចេកវិទ្យា 3D Spatial Audio ដូចក្នុងរោងកុន', 'តភ្ជាប់ Bluetooth 5.3 + AUX + Optical', 'រចនាបថ Minimalist ដាក់លើតុធ្វើការយ៉ាងស្រស់ស្អាត'],
    description: 'បង្កើនបរិយាកាសបន្ទប់ធ្វើការរបស់អ្នកជាមួយសម្លេងដ៏ពិរោះរណ្តំ និងបាសបុកធ្ងន់។',
    inStock: true,
    color: '#17221b'
  },
  {
    id: 8,
    name: 'នាឡិកាឆ្លាតវៃ Horizon Watch Pro',
    subtitle: 'AMOLED Always-On · GPS · សុខភាព & កីឡា',
    price: 119,
    originalPrice: 149,
    category: 'គ្រឿងបន្ថែម',
    image: watchPhoto,
    badge: 'ពេញនិយម',
    badgeType: 'popular',
    rating: 4.9,
    reviews: 115,
    specs: ['អេក្រង់ AMOLED Always-On កញ្ចក់ Sapphire មិនឆ្កូត', 'វាស់ចង្វាក់បេះដូង SpO2 កម្រិតស្រ្តេស និងដំណេក', 'មិនជ្រាបទឹកកម្រិត 5ATM (ចុះហែលទឹកបាន)', 'ថ្មប្រើប្រាស់បានរហូតដល់ ១៤ ថ្ងៃ'],
    description: 'ដៃគូសុខភាពប្រចាំថ្ងៃរបស់អ្នក។ តាមដានលំហាត់ប្រាណ ចង្វាក់បេះដូង និងទទួលការជូនដំណឹងពីទូរស័ព្ទភ្លាមៗ។',
    inStock: true,
    color: '#181b22'
  },
]

const khmerMonths = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
const toKhmerDigits = value => String(value).replace(/\d/g, digit => '០១២៣៤៥៦៧៨៩'[Number(digit)])
const formatKhmerDate = date => `${toKhmerDigits(date.getDate())} ${khmerMonths[date.getMonth()]} ${toKhmerDigits(date.getFullYear())}`

// Top Announcement Bar
function AnnouncementBar({ onPromoClick }) {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <span className="announcement-tag">🔥 ប្រូម៉ូសិនពិសេស</span>
        <p>
          បញ្ចុះតម្លៃរហូតដល់ <strong>15%</strong> ដោយប្រើកូដ <code>TECHNOVA</code> ពេលបញ្ជាទិញ · ដឹកជញ្ជូនឥតគិតថ្លៃទូទាំងប្រទេស!
        </p>
        <button className="announcement-btn" onClick={onPromoClick}>
          មើលឥឡូវនេះ <span>→</span>
        </button>
      </div>
    </div>
  )
}

// Navigation & Header
function Header({ cartCount, wishlistCount, page, setPage, theme, toggleTheme, onOpenWishlist }) {
  return (
    <header className="header">
      <div className="header-inner">
        <button className="brand" onClick={() => setPage('shop')} aria-label="TechNova ទំព័រដើម">
          <div className="brand-mark">
            <span className="brand-glow" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div className="brand-text">
            <span>Tech<span className="highlight">Nova</span></span>
            <small>EST. 2026</small>
          </div>
        </button>

        <nav className="nav-menu">
          <button className={page === 'shop' ? 'active' : ''} onClick={() => setPage('shop')}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            ផលិតផល
          </button>
          <button onClick={() => { setPage('shop'); setTimeout(() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            អត្ថប្រយោជន៍
          </button>
          <button className={page === 'cart' ? 'active' : ''} onClick={() => setPage('cart')}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            កន្ត្រកទំនិញ
          </button>
        </nav>

        <div className="header-actions">
          {/* Wishlist Button */}
          <button className="icon-btn wishlist-btn" onClick={onOpenWishlist} title="បញ្ជីទំនិញពេញចិត្ត" aria-label="ទំនិញពេញចិត្ត">
            <svg viewBox="0 0 24 24" width="20" height="20" fill={wishlistCount > 0 ? '#f43f5e' : 'none'} stroke={wishlistCount > 0 ? '#f43f5e' : 'currentColor'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {wishlistCount > 0 && <span className="badge wishlist-badge">{wishlistCount}</span>}
          </button>

          {/* Cart Button */}
          <button className="icon-btn cart-btn" onClick={() => setPage('cart')} title="មើលកន្ត្រកទំនិញ" aria-label="កន្ត្រក">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span className="badge cart-badge">{cartCount}</span>}
          </button>

          {/* Theme Switcher */}
          <button className="icon-btn theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'ប្តូរទៅពន្លឺភ្លឺ' : 'ប្តូរទៅ Dark Mode'}>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

// Quick View Modal
function QuickViewModal({ product, onClose, onAddToCart, onBuyNow, isWishlisted, onToggleWishlist }) {
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="បិទ">✕</button>

        <div className="modal-grid">
          <div className="modal-visual" style={{ background: `radial-gradient(circle at center, ${product.color}aa 0%, #0d121d 100%)` }}>
            <span className={`product-badge badge-${product.badgeType}`}>{product.badge}</span>
            <img src={product.image} alt={product.name} className="modal-img" />
            <div className="modal-color-preview">
              <span>ជម្រើសពណ៌៖</span>
              <div className="color-dots">
                <span className={`color-dot ${selectedColor === 0 ? 'active' : ''}`} style={{ background: '#3b82f6' }} onClick={() => setSelectedColor(0)} />
                <span className={`color-dot ${selectedColor === 1 ? 'active' : ''}`} style={{ background: '#10b981' }} onClick={() => setSelectedColor(1)} />
                <span className={`color-dot ${selectedColor === 2 ? 'active' : ''}`} style={{ background: '#64748b' }} onClick={() => setSelectedColor(2)} />
              </div>
            </div>
          </div>

          <div className="modal-details">
            <div className="modal-category-rating">
              <span className="category-pill">{product.category}</span>
              <div className="rating-pill">
                <span className="star">★</span>
                <strong>{product.rating}</strong>
                <small>({product.reviews} ការវាយតម្លៃ)</small>
              </div>
            </div>

            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-subtitle">{product.subtitle}</p>

            <div className="modal-price-box">
              <div className="modal-price">
                <span className="currency">$</span>
                <span className="amount">{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <span className="stock-tag">✓ មានក្នុងស្តុកស្រាប់</span>
            </div>

            <p className="modal-desc">{product.description}</p>

            <div className="modal-specs">
              <h4>លក្ខណៈបច្ចេកទេសពិសេស (Key Specs)៖</h4>
              <ul>
                {product.specs.map((spec, i) => (
                  <li key={i}>
                    <span className="spec-check">✦</span> {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-actions-row">
              <div className="quantity-control modal-qty">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>

              <button className="btn-secondary wishlist-action-btn" onClick={() => onToggleWishlist(product)}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill={isWishlisted ? '#f43f5e' : 'none'} stroke={isWishlisted ? '#f43f5e' : 'currentColor'} strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>

              <button className="btn-primary add-cart-btn" onClick={() => { onAddToCart(product, quantity); onClose(); }}>
                <span>ដាក់ចូលកន្ត្រក</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
              </button>

              <button className="btn-accent buy-now-btn" onClick={() => { onAddToCart(product, quantity); onClose(); onBuyNow(); }}>
                ទិញភ្លាមៗ ⚡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Toast Notification
function ToastNotification({ toast, onClose }) {
  if (!toast) return null

  return (
    <div className={`toast-container ${toast.show ? 'show' : ''}`}>
      <div className="toast-card">
        <div className="toast-icon">✓</div>
        <div className="toast-body">
          <strong>{toast.title}</strong>
          <p>{toast.message}</p>
        </div>
        <button className="toast-close" onClick={onClose}>✕</button>
      </div>
    </div>
  )
}

// Flash Deal Countdown Component
function FlashCountdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 42, seconds: 19 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return { hours: 12, minutes: 0, seconds: 0 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-box">
      <span className="countdown-label">⏳ បញ្ចុះតម្លៃពិសេសសល់ពេល៖</span>
      <div className="countdown-digits">
        <span className="digit">{toKhmerDigits(String(timeLeft.hours).padStart(2, '0'))}</span>
        <span className="sep">:</span>
        <span className="digit">{toKhmerDigits(String(timeLeft.minutes).padStart(2, '0'))}</span>
        <span className="sep">:</span>
        <span className="digit">{toKhmerDigits(String(timeLeft.seconds).padStart(2, '0'))}</span>
      </div>
    </div>
  )
}

// Shop Component
function Shop({ addToCart, onOpenQuickView, wishlist, toggleWishlist, showOnlyWishlist, setShowOnlyWishlist }) {
  const [category, setCategory] = useState('ទាំងអស់')
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter(product => {
        const matchesCategory = category === 'ទាំងអស់' || product.category === category
        const matchesQuery = product.name.toLowerCase().includes(query.trim().toLowerCase()) ||
                             product.subtitle.toLowerCase().includes(query.trim().toLowerCase())
        const matchesWishlist = !showOnlyWishlist || wishlist.includes(product.id)
        return matchesCategory && matchesQuery && matchesWishlist
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price
        if (sortBy === 'price-desc') return b.price - a.price
        if (sortBy === 'rating') return b.rating - a.rating
        return b.reviews - a.reviews
      })
  }, [category, query, sortBy, showOnlyWishlist, wishlist])

  return (
    <main className="shop-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow-blob top-left" />
        <div className="hero-glow-blob bottom-right" />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="beacon-dot" />
            <span>ជំនាន់ថ្មី ២០២៦ · NEXT-GEN TECH ECOSYSTEM</span>
          </div>

          <h1 className="hero-heading">
            បង្កើនគុណភាព និងថាមពល <br />
            <span className="gradient-text">កន្លែងធ្វើការទំនើប</span>
          </h1>

          <p className="hero-description">
            ស្វែងរកកុំព្យូទ័រ គ្រឿងបន្ថែម និងឧបករណ៍បច្ចេកវិទ្យាកម្រិតកំពូលដែលត្រូវបានសម្រិតសម្រាំងយ៉ាងយកចិត្តទុកដាក់ ដើម្បីផ្តល់នូវប្រសិទ្ធភាព និងសោភ័ណភាពល្អឥតខ្ចោះដល់អ្នក។
          </p>

          <FlashCountdown />

          <div className="hero-actions">
            <button className="btn-glow-primary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>ស្វែងរកផលិតផល</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-glass" onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>ស្វែងយល់បន្ថែម</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>99.8%</strong>
              <span>ការពេញចិត្តពីអតិថិជន</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>១,២០០+</strong>
              <span>ផលិតផលបញ្ជាទិញក្នុងខែនេះ</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>២៤ ខេត្ត/ក្រុង</strong>
              <span>ដឹកជញ្ជូនរហ័សទូទាំងប្រទេស</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="hero-visual">
          <div className="hero-card-frame">
            <div className="hero-ring ring-1" />
            <div className="hero-ring ring-2" />
            <img src={laptopPhoto} alt="UltraPro Laptop" className="hero-main-img" />

            <div className="hero-floating-card top-right-card">
              <span className="floating-icon">⚡</span>
              <div>
                <strong>បន្ទះឈីបកម្លាំងខ្លាំង</strong>
                <small>ល្បឿនលឿនមិនទាក់</small>
              </div>
            </div>

            <div className="hero-floating-card bottom-left-card">
              <span className="floating-icon">🛡️</span>
              <div>
                <strong>ការធានាគុណភាព ១ ឆ្នាំ</strong>
                <small>ផលិតផលសុទ្ធ ១០០%</small>
              </div>
            </div>

            <div className="hero-seal-badge">
              <span>TECHNOVA</span>
              <strong>PRO</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Strip */}
      <section id="benefits" className="benefits-section">
        <div className="benefit-card">
          <div className="benefit-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <div>
            <h3>ដឹកជញ្ជូនឥតគិតថ្លៃ</h3>
            <p>សម្រាប់រាល់ការបញ្ជាទិញទូទាំង ២៤ ខេត្ត/ក្រុង</p>
          </div>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h3>ធានាផលិតផលសុទ្ធ ១០០%</h3>
            <p>មានការធានាផ្លូវការរយៈពេល ១ ឆ្នាំពេញ</p>
          </div>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
          </div>
          <div>
            <h3>ប្តូរថ្មីក្នុងរយៈពេល ៧ ថ្ងៃ</h3>
            <p>ប្តូរទំនិញថ្មីភ្លាមៗបើមានបញ្ហាបច្ចេកទេស</p>
          </div>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <h3>ជំនួយបច្ចេកទេស ២៤/៧</h3>
            <p>ក្រុមការងារជំនាញរង់ចាំជួយលោកអ្នកជានិច្ច</p>
          </div>
        </div>
      </section>

      {/* Brand Partners Ticker */}
      <div className="partners-ribbon">
        <span className="partner-label">ដៃគូបច្ចេកវិទ្យាល្បីៗ៖</span>
        <div className="partner-names">
          <span>APPLE</span> · <span>SONY</span> · <span>DELL</span> · <span>LOGITECH</span> · <span>KEYCHRON</span> · <span>ASUS</span> · <span>RAZER</span>
        </div>
      </div>

      {/* Products Catalog Section */}
      <section id="products" className="products-section">
        <div className="section-header">
          <div>
            <div className="section-pill">🔥 CATALOGUE ២០២៦</div>
            <h2 className="section-title">ស្វែងរកឧបករណ៍ដែលសក្តិសមសម្រាប់អ្នក</h2>
            <p className="section-subtitle">ផលិតផលទាំងអស់ត្រូវបានត្រួតពិនិត្យគុណភាពយ៉ាងម៉ត់ចត់</p>
          </div>

          {/* Search Box */}
          <div className="search-bar">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="ស្វែងរកផលិតផល ឬលក្ខណៈពិសេស..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && <button className="clear-search" onClick={() => setQuery('')}>✕</button>}
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="filter-toolbar">
          <div className="category-tabs">
            {['ទាំងអស់', 'កុំព្យូទ័រ', 'គ្រឿងបន្ថែម'].map(cat => (
              <button
                key={cat}
                className={`tab-btn ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat === 'ទាំងអស់' && '✨ '}
                {cat === 'កុំព្យូទ័រ' && '💻 '}
                {cat === 'គ្រឿងបន្ថែម' && '🎧 '}
                {cat}
              </button>
            ))}

            {wishlist.length > 0 && (
              <button
                className={`tab-btn wishlist-filter-btn ${showOnlyWishlist ? 'active' : ''}`}
                onClick={() => setShowOnlyWishlist(v => !v)}
              >
                ❤️ ទំនិញពេញចិត្ត ({wishlist.length})
              </button>
            )}
          </div>

          <div className="sort-box">
            <span>តម្រៀបតាម៖</span>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="popular">ពេញនិយមបំផុត</option>
              <option value="price-asc">តម្លៃ៖ ទាប ➔ ខ្ពស់</option>
              <option value="price-desc">តម្លៃ៖ ខ្ពស់ ➔ ទាប</option>
              <option value="rating">ពិន្ទុវាយតម្លៃខ្ពស់</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => {
            const isWishlisted = wishlist.includes(product.id)

            return (
              <article className="product-card" key={product.id}>
                <div className="product-media" style={{ background: `radial-gradient(circle at center, ${product.color}99 0%, #111827 100%)` }}>
                  {/* Badge */}
                  <span className={`product-badge badge-${product.badgeType}`}>{product.badge}</span>

                  {/* Wishlist Heart */}
                  <button
                    className={`wishlist-toggle ${isWishlisted ? 'liked' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="ចូលចិត្ត"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill={isWishlisted ? '#f43f5e' : 'none'} stroke={isWishlisted ? '#f43f5e' : 'currentColor'} strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>

                  <img src={product.image} alt={product.name} className="product-thumb" loading="lazy" />

                  {/* Hover Quick View overlay */}
                  <div className="media-overlay">
                    <button className="quick-view-btn" onClick={() => onOpenQuickView(product)}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                      <span>មើលលម្អិត</span>
                    </button>
                  </div>
                </div>

                <div className="product-info-box">
                  <div className="product-meta">
                    <span className="product-category">{product.category}</span>
                    <div className="product-rating">
                      <span className="star-icon">★</span>
                      <span>{product.rating}</span>
                      <small>({product.reviews})</small>
                    </div>
                  </div>

                  <h3 className="product-title" onClick={() => onOpenQuickView(product)}>
                    {product.name}
                  </h3>
                  <p className="product-specs-line">{product.subtitle}</p>

                  <div className="product-bottom-row">
                    <div className="price-tag-group">
                      <span className="price-current">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="price-struck">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>

                    <button
                      className="add-to-cart-action"
                      onClick={() => addToCart(product)}
                      title="ដាក់ចូលកន្ត្រក"
                      aria-label="ដាក់ក្នុងកន្ត្រក"
                    >
                      <span>ដាក់កន្ត្រក</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-search-state">
            <div className="empty-icon">🔍</div>
            <h3>រកមិនឃើញផលិតផលដែលត្រូវនឹងការស្វែងរកទេ</h3>
            <p>សូមសាកល្បងពាក្យគន្លឹះផ្សេង ឬសម្អាតការច្រោះផលិតផល។</p>
            <button className="btn-primary" onClick={() => { setCategory('ទាំងអស់'); setQuery(''); setShowOnlyWishlist(false); }}>
              សម្អាតការស្វែងរកទាំងអស់
            </button>
          </div>
        )}
      </section>

      {/* Modern Banner CTA */}
      <section className="cta-banner">
        <div className="cta-glow" />
        <div className="cta-content">
          <span className="cta-pill">✨ បង្កើតកន្លែងធ្វើការក្នុងក្តីស្រមៃ</span>
          <h2>គំនិតដ៏អស្ចារ្យ ចាប់ផ្តើមពីឧបករណ៍ដែលត្រឹមត្រូវ</h2>
          <p>ចូលរួមជាមួយអ្នកជំនាញបច្ចេកវិទ្យារាប់ពាន់នាក់ដែលបានផ្លាស់ប្តូរបទពិសោធន៍ធ្វើការរបស់ពួកគេជាមួយ TechNova។</p>
          <div className="cta-buttons">
            <button className="btn-glow-primary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              បញ្ជាទិញឥឡូវនេះ
            </button>
            <button className="btn-glass" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              ត្រឡប់ទៅលើវិញ ↑
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Cart Component
function Cart({ cart, setCart, setPage }) {
  const [promoCode, setPromoCode] = useState('')
  const [discountPercent, setDiscountPercent] = useState(0)
  const [promoMessage, setPromoMessage] = useState('')

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const discountAmount = (subtotal * discountPercent) / 100
  const finalTotal = subtotal - discountAmount

  const updateQty = (id, delta) => {
    setCart(items => items.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
  }

  const removeItem = id => {
    setCart(items => items.filter(item => item.id !== id))
  }

  const applyPromo = e => {
    e.preventDefault()
    const clean = promoCode.trim().toUpperCase()
    if (clean === 'TECHNOVA' || clean === 'KHMER2026') {
      setDiscountPercent(15)
      setPromoMessage('🎉 អបអរសាទរ! បានបញ្ចុះតម្លៃ 15% ដោយជោគជ័យ!')
    } else if (clean === 'WELCOME10') {
      setDiscountPercent(10)
      setPromoMessage('🎉 បានបញ្ចុះតម្លៃ 10% សម្រាប់ការស្វាគមន៍!')
    } else {
      setDiscountPercent(0)
      setPromoMessage('❌ កូដមិនត្រឹមត្រូវទេ។ សូមសាកល្បងកូដ TECHNOVA')
    }
  }

  return (
    <main className="cart-page">
      <div className="breadcrumbs">
        <button onClick={() => setPage('shop')}>ទំព័រដើម</button>
        <span>/</span>
        <strong>កន្ត្រកទំនិញ</strong>
      </div>

      <div className="page-heading">
        <h1>កន្ត្រកទំនិញរបស់អ្នក</h1>
        <p>ពិនិត្យមើលមុខទំនិញដែលអ្នកបានជ្រើសរើស មុនពេលបន្តទៅកាន់ការទូទាត់។</p>
      </div>

      {cart.length === 0 ? (
        <section className="empty-cart-card">
          <div className="empty-cart-icon">🛒</div>
          <h2>កន្ត្រករបស់អ្នកមិនទាន់មានទំនិញនៅឡើយទេ</h2>
          <p>សូមចូលទៅកាន់ទំព័រផលិតផល ដើម្បីស្វែងរកឧបករណ៍បច្ចេកវិទ្យាដែលអ្នកចង់បាន។</p>
          <button className="btn-glow-primary" onClick={() => setPage('shop')}>
            <span>បន្តទិញទំនិញឥឡូវនេះ</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-section">
            <div className="cart-items-header">
              <span>មុខទំនិញ</span>
              <span>ចំនួន</span>
              <span>តម្លៃសរុប</span>
              <span></span>
            </div>

            <div className="cart-items-list">
              {cart.map(item => (
                <article className="cart-item-row" key={item.id}>
                  <div className="item-details-col">
                    <div className="item-thumb" style={{ background: item.color }}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-text">
                      <h3>{item.name}</h3>
                      <p>{item.subtitle || item.category}</p>
                      <strong className="item-unit-price">${item.price.toFixed(2)}</strong>
                    </div>
                  </div>

                  <div className="item-quantity-col">
                    <div className="quantity-control">
                      <button onClick={() => updateQty(item.id, -1)} aria-label="បន្ថយ">−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} aria-label="បន្ថែម">+</button>
                    </div>
                  </div>

                  <div className="item-total-col">
                    <strong>${(item.price * item.qty).toFixed(2)}</strong>
                  </div>

                  <div className="item-remove-col">
                    <button className="remove-btn" onClick={() => removeItem(item.id)} title="លុបចេញពីកន្ត្រក">✕</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-perks-box">
              <div className="perk">🚚 <strong>ដឹកជញ្ជូនឥតគិតថ្លៃ</strong> សម្រាប់រាល់ការបញ្ជាទិញ</div>
              <div className="perk">🔒 <strong>ទូទាត់ប្រាក់មានសុវត្ថិភាព</strong> តាម KHQR & ABA</div>
            </div>
          </section>

          {/* Order Summary Sidebar */}
          <aside className="order-summary-card">
            <h2>សង្ខេបការបញ្ជាទិញ</h2>

            {/* Promo Code Form */}
            <form className="promo-box" onSubmit={applyPromo}>
              <div className="promo-input-group">
                <input
                  type="text"
                  placeholder="កូដបញ្ចុះតម្លៃ (ឧ. TECHNOVA)"
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                />
                <button type="submit">ប្រើកូដ</button>
              </div>
              {promoMessage && (
                <small className={`promo-alert ${discountPercent > 0 ? 'success' : 'error'}`}>
                  {promoMessage}
                </small>
              )}
            </form>

            <div className="summary-lines">
              <div className="summary-line">
                <span>សរុបរង (Subtotal)</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>

              {discountAmount > 0 && (
                <div className="summary-line discount-line">
                  <span>បញ្ចុះតម្លៃ (-{discountPercent}%)</span>
                  <strong>-${discountAmount.toFixed(2)}</strong>
                </div>
              )}

              <div className="summary-line">
                <span>ថ្លៃដឹកជញ្ជូន</span>
                <strong className="free-tag">ឥតគិតថ្លៃ</strong>
              </div>

              <div className="summary-total-line">
                <span>ទឹកប្រាក់សរុប</span>
                <strong>${finalTotal.toFixed(2)}</strong>
              </div>
            </div>

            <button className="btn-glow-primary checkout-btn" onClick={() => setPage('checkout')}>
              <span>បន្តទៅកាន់ការទូទាត់</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>

            <button className="btn-text continue-btn" onClick={() => setPage('shop')}>
              ← បន្តទិញទំនិញបន្ថែម
            </button>
          </aside>
        </div>
      )}
    </main>
  )
}

// Checkout Component
function Checkout({ cart, setPage, placeOrder }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'ភ្នំពេញ',
    note: ''
  })
  const [shipping, setShipping] = useState('free')
  const [paymentMethod, setPaymentMethod] = useState('khqr')
  const [errors, setErrors] = useState({})

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const deliveryFee = shipping === 'express' ? 5.00 : 0.00
  const total = subtotal + deliveryFee

  const update = (field, val) => {
    setForm(f => ({ ...f, [field]: val }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'សូមបញ្ចូលនាមខ្លួន'
    if (!form.lastName.trim()) next.lastName = 'សូមបញ្ចូលនាមត្រកូល'
    if (!form.phone.trim()) next.phone = 'សូមបញ្ចូលលេខទូរស័ព្ទសម្រាប់ដឹកជញ្ជូន'
    if (!form.address.trim()) next.address = 'សូមបញ្ចូលអាសយដ្ឋានដឹកជញ្ជូន'
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) next.email = 'ទម្រង់អ៊ីមែលមិនត្រឹមត្រូវទេ'

    setErrors(next)
    if (Object.keys(next).length === 0) {
      placeOrder({
        ...form,
        shipping,
        paymentMethod,
        total
      })
    }
  }

  return (
    <main className="checkout-page">
      <div className="breadcrumbs">
        <button onClick={() => setPage('shop')}>ទំព័រដើម</button>
        <span>/</span>
        <button onClick={() => setPage('cart')}>កន្ត្រក</button>
        <span>/</span>
        <strong>ការទូទាត់ប្រាក់</strong>
      </div>

      <div className="checkout-header-block">
        <div>
          <span className="section-pill">🔒 សុវត្ថិភាពខ្ពស់ ១០០%</span>
          <h1>បញ្ចប់ការបញ្ជាទិញ</h1>
          <p>សូមបំពេញព័ត៌មានខាងក្រោមដើម្បីឱ្យយើងរៀបចំដឹកជញ្ជូនជូនលោកអ្នក។</p>
        </div>
      </div>

      <div className="checkout-layout">
        {/* Form Form */}
        <form id="checkout-form" className="checkout-form" onSubmit={handleSubmit} noValidate>
          {/* Section 1: Customer Contact */}
          <section className="form-card">
            <div className="form-card-title">
              <span className="step-num">១</span>
              <h2>ព័ត៌មានអតិថិជន និងការដឹកជញ្ជូន</h2>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label>នាមខ្លួន *</label>
                <input
                  type="text"
                  placeholder="សុខា"
                  value={form.firstName}
                  className={errors.firstName ? 'error' : ''}
                  onChange={e => update('firstName', e.target.value)}
                />
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
              </div>

              <div className="form-field">
                <label>នាមត្រកូល *</label>
                <input
                  type="text"
                  placeholder="ចាន់"
                  value={form.lastName}
                  className={errors.lastName ? 'error' : ''}
                  onChange={e => update('lastName', e.target.value)}
                />
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
              </div>

              <div className="form-field">
                <label>លេខទូរស័ព្ទទំនាក់ទំនង *</label>
                <input
                  type="tel"
                  placeholder="012 345 678"
                  value={form.phone}
                  className={errors.phone ? 'error' : ''}
                  onChange={e => update('phone', e.target.value)}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-field">
                <label>អ៊ីមែល (ស្រេចចិត្ត)</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  className={errors.email ? 'error' : ''}
                  onChange={e => update('email', e.target.value)}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-field full-width">
                <label>អាសយដ្ឋានដឹកជញ្ជូនជាក់លាក់ *</label>
                <input
                  type="text"
                  placeholder="ផ្ទះលេខ ផ្លូវ សង្កាត់ ខណ្ឌ ឬភូមិ ឃុំ"
                  value={form.address}
                  className={errors.address ? 'error' : ''}
                  onChange={e => update('address', e.target.value)}
                />
                {errors.address && <span className="error-text">{errors.address}</span>}
              </div>

              <div className="form-field">
                <label>រាជធានី/ខេត្ត</label>
                <select value={form.city} onChange={e => update('city', e.target.value)}>
                  <option value="ភ្នំពេញ">រាជធានីភ្នំពេញ</option>
                  <option value="សៀមរាប">ខេត្តសៀមរាប</option>
                  <option value="បាត់ដំបង">ខេត្តបាត់ដំបង</option>
                  <option value="ព្រះសីហនុ">ខេត្តព្រះសីហនុ</option>
                  <option value="កំពត">ខេត្តកំពត</option>
                  <option value="កណ្តាល">ខេត្តកណ្តាល</option>
                  <option value="ផ្សេងៗ">ខេត្តផ្សេងៗ</option>
                </select>
              </div>

              <div className="form-field">
                <label>សម្គាល់បន្ថែម (ស្រេចចិត្ត)</label>
                <input
                  type="text"
                  placeholder="ឧ. ហៅមកមុនមកដល់"
                  value={form.note}
                  onChange={e => update('note', e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Shipping Options */}
          <section className="form-card">
            <div className="form-card-title">
              <span className="step-num">២</span>
              <h2>ជម្រើសដឹកជញ្ជូន</h2>
            </div>

            <div className="shipping-grid">
              <label className={`option-card ${shipping === 'free' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="shipping"
                  checked={shipping === 'free'}
                  onChange={() => setShipping('free')}
                />
                <div className="option-info">
                  <strong>ដឹកជញ្ជូនស្តង់ដារ (Standard Delivery)</strong>
                  <small>រយៈពេល ២ ទៅ ៣ ថ្ងៃធ្វើការ</small>
                </div>
                <span className="option-price free">ឥតគិតថ្លៃ</span>
              </label>

              <label className={`option-card ${shipping === 'express' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="shipping"
                  checked={shipping === 'express'}
                  onChange={() => setShipping('express')}
                />
                <div className="option-info">
                  <strong>ដឹកជញ្ជូនរហ័សទាន់ចិត្ត (Express Delivery)</strong>
                  <small>ទទួលបានក្នុងថ្ងៃតែមួយ (ភ្នំពេញ)</small>
                </div>
                <span className="option-price">$5.00</span>
              </label>
            </div>
          </section>

          {/* Section 3: Payment Options */}
          <section className="form-card">
            <div className="form-card-title">
              <span className="step-num">៣</span>
              <h2>វិធីសាស្ត្រទូទាត់ប្រាក់</h2>
            </div>

            <div className="payment-grid">
              <label className={`option-card payment-card ${paymentMethod === 'khqr' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'khqr'}
                  onChange={() => setPaymentMethod('khqr')}
                />
                <div className="option-info">
                  <strong>KHQR / ABA PAY / ធនាគារនានា</strong>
                  <small>ស្កេនទូទាត់ភ្លាមៗជាមួយ Bakong & Mobile Banking</small>
                </div>
                <span className="khqr-badge">KHQR</span>
              </label>

              <label className={`option-card payment-card ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                <div className="option-info">
                  <strong>ទូទាត់ពេលទំនិញដល់ដៃ (Cash On Delivery)</strong>
                  <small>ពិនិត្យទំនិញរួចទើបបង់ប្រាក់ជូនអ្នកដឹក</small>
                </div>
                <span className="cod-badge">COD</span>
              </label>
            </div>

            {paymentMethod === 'khqr' && (
              <div className="khqr-preview-box">
                <div className="khqr-qr-mock">
                  <div className="khqr-top">
                    <span>KHQR</span>
                  </div>
                  <div className="qr-code-graphic">
                    <div className="qr-corner top-left"/>
                    <div className="qr-corner top-right"/>
                    <div className="qr-corner bottom-left"/>
                    <div className="qr-center-logo">T</div>
                  </div>
                  <small>ស្កេនទូទាត់ ${total.toFixed(2)}</small>
                </div>
                <div className="khqr-instructions">
                  <h4>របៀបទូទាត់តាម KHQR៖</h4>
                  <ol>
                    <li>បើកកម្មវិធីធនាគាររបស់អ្នក (ABA, ACLEDA, Wing, Canadia...)</li>
                    <li>ជ្រើសរើសមុខងារ <strong>Scan QR</strong></li>
                    <li>ផ្ទៀងផ្ទាត់ឈ្មោះ <strong>TechNova Electronics</strong> និងចំនួនទឹកប្រាក់</li>
                  </ol>
                </div>
              </div>
            )}
          </section>
        </form>

        {/* Sidebar Order Review */}
        <aside className="checkout-summary-card">
          <h2>សង្ខេបទំនិញក្នុងកន្ត្រក ({cart.length})</h2>

          <div className="checkout-items-list">
            {cart.map(item => (
              <div className="checkout-item-preview" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-preview-meta">
                  <strong>{item.name}</strong>
                  <small>ចំនួន៖ {item.qty} × ${item.price.toFixed(2)}</small>
                </div>
                <b className="item-preview-total">${(item.price * item.qty).toFixed(2)}</b>
              </div>
            ))}
          </div>

          <div className="summary-lines">
            <div className="summary-line">
              <span>សរុបរង</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <div className="summary-line">
              <span>ដឹកជញ្ជូន</span>
              <strong>{deliveryFee > 0 ? `$${deliveryFee.toFixed(2)}` : 'ឥតគិតថ្លៃ'}</strong>
            </div>
            <div className="summary-total-line">
              <span>ទឹកប្រាក់សរុប</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          <button className="btn-glow-primary place-order-btn" type="submit" form="checkout-form">
            <span>បញ្ជាក់ការបញ្ជាទិញ (${total.toFixed(2)})</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </button>

          <p className="security-notice">
            🔒 ការបញ្ជាទិញរបស់អ្នកត្រូវបានការពារដោយប្រព័ន្ធសុវត្ថិភាព 256-bit SSL Encryption
          </p>
        </aside>
      </div>
    </main>
  )
}

// Confirmation Component
function Confirmation({ order, setPage }) {
  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <div className="confirmation-hero">
          <div className="success-badge-pulse">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <span className="order-success-pill">✓ ការបញ្ជាទិញបានសម្រេច</span>
          <h1>សូមអរគុណសម្រាប់ការបញ្ជាទិញ!</h1>
          <p>
            យើងបានទទួលការបញ្ជាទិញរបស់អ្នកហើយ។ ក្រុមការងារយើងកំពុងរៀបចំវេចខ្ចប់ និងផ្ញើទៅកាន់អាសយដ្ឋានរបស់អ្នក។
          </p>
        </div>

        {/* Status Timeline */}
        <div className="order-timeline">
          <div className="timeline-step completed">
            <span className="dot">✓</span>
            <small>បានទទួល</small>
          </div>
          <div className="timeline-line active" />
          <div className="timeline-step active">
            <span className="dot">📦</span>
            <small>កំពុងរៀបចំ</small>
          </div>
          <div className="timeline-line" />
          <div className="timeline-step">
            <span className="dot">🚚</span>
            <small>កំពុងដឹក</small>
          </div>
          <div className="timeline-line" />
          <div className="timeline-step">
            <span className="dot">🏡</span>
            <small>បានដល់ដៃ</small>
          </div>
        </div>

        <div className="confirmation-details-body">
          <div className="info-cards-grid">
            <div className="info-card">
              <span>លេខកូដបញ្ជាទិញ (Order ID)</span>
              <strong>{order.id}</strong>
            </div>
            <div className="info-card">
              <span>អតិថិជន</span>
              <strong>{order.firstName} {order.lastName}</strong>
            </div>
            <div className="info-card">
              <span>លេខទូរស័ព្ទ</span>
              <strong>{order.phone}</strong>
            </div>
            <div className="info-card">
              <span>កាលបរិច្ឆេទ</span>
              <strong>{order.date}</strong>
            </div>
            <div className="info-card full">
              <span>អាសយដ្ឋានដឹកជញ្ជូន</span>
              <strong>{order.address}, {order.city}</strong>
            </div>
          </div>

          <div className="order-items-receipt">
            <h3>មុខទំនិញដែលបានបញ្ជាទិញ</h3>
            <div className="receipt-list">
              {order.items.map(item => (
                <div className="receipt-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="receipt-item-meta">
                    <strong>{item.name}</strong>
                    <small>ចំនួន៖ {item.qty} × ${item.price.toFixed(2)}</small>
                  </div>
                  <strong>${(item.price * item.qty).toFixed(2)}</strong>
                </div>
              ))}
            </div>

            <div className="receipt-total-bar">
              <span>ទឹកប្រាក់សរុប (រួមទាំងថ្លៃដឹកជញ្ជូន)៖</span>
              <strong>${order.total.toFixed(2)}</strong>
            </div>
          </div>

          <div className="confirmation-actions">
            <button className="btn-glow-primary" onClick={() => setPage('shop')}>
              <span>បន្តទិញទំនិញផ្សេងទៀត</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-glass" onClick={() => window.print()}>
              <span>🖨️ បោះពុម្ពវិក្កយបត្រ</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

// Footer Component
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col brand-col">
          <div className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="brand-text">
              <span>Tech<span className="highlight">Nova</span></span>
              <small>E-COMMERCE 2026</small>
            </div>
          </div>
          <p className="footer-desc">
            ហាងលក់ឧបករណ៍បច្ចេកវិទ្យា គ្រឿងកុំព្យូទ័រ និង Gadgets ទំនើបលំដាប់ថ្នាក់ខ្ពស់ ផ្តល់នូវទំនុកចិត្ត គុណភាព និងសេវាកម្មដ៏ល្អឥតខ្ចោះដល់អ្នកប្រើប្រាស់កម្ពុជា។
          </p>
          <div className="payment-badges">
            <span className="pay-pill">ABA PAY</span>
            <span className="pay-pill">KHQR</span>
            <span className="pay-pill">WING</span>
            <span className="pay-pill">VISA</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>ទំព័ររហ័ស</h4>
          <ul>
            <li><button onClick={() => { setPage('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>ទំព័រដើម</button></li>
            <li><button onClick={() => { setPage('shop'); setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>ផលិតផលទាំងអស់</button></li>
            <li><button onClick={() => { setPage('shop'); setTimeout(() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' }), 100) }}>ការធានា & សេវាកម្ម</button></li>
            <li><button onClick={() => setPage('cart')}>កន្ត្រកទំនិញ</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>ប្រភេទផលិតផល</h4>
          <ul>
            <li><button onClick={() => { setPage('shop'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }}>កុំព្យូទ័រយួរដៃ (Laptops)</button></li>
            <li><button onClick={() => { setPage('shop'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }}>ម៉ូនីទ័រ 4K Displays</button></li>
            <li><button onClick={() => { setPage('shop'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }}>កាសឥតខ្សែ & សំឡេង</button></li>
            <li><button onClick={() => { setPage('shop'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }}>ក្ដារចុច & កណ្ដុរ Ergonomic</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>ទំនាក់ទំនងយើង</h4>
          <p className="contact-info">📍 រាជធានីភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពុជា</p>
          <p className="contact-info">📞 +855 (0) 12 345 678</p>
          <p className="contact-info">✉️ support@technova.store</p>
          <p className="contact-info">⏰ ច័ន្ទ - អាទិត្យ: 8:00 AM - 9:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© ២០២៦ TechNova. រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ [gitrimsmos](https://github.com/gitrimsmos)។</p>
        <div className="footer-bottom-links">
          <span>រចនាឡើងប្រកបដោយភាពច្នៃប្រឌិត និងសោភ័ណភាពខ្ពស់ ✦</span>
        </div>
      </div>
    </footer>
  )
}

// Main App Container
function App() {
  const [page, setPage] = useState('shop')
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState(null)
  const [wishlist, setWishlist] = useState([1, 5])
  const [showOnlyWishlist, setShowOnlyWishlist] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [theme, setTheme] = useState(() => localStorage.getItem('technova_theme') || 'dark')
  const [toast, setToast] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('technova_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  const showToast = (title, message) => {
    setToast({ title, message, show: true })
    setTimeout(() => {
      setToast(prev => (prev ? { ...prev, show: false } : null))
    }, 3200)
  }

  const addToCart = (product, qty = 1) => {
    setCart(items => {
      const existing = items.find(item => item.id === product.id)
      if (existing) {
        return items.map(item => item.id === product.id ? { ...item, qty: item.qty + qty } : item)
      }
      return [...items, { ...product, qty }]
    })
    showToast('បានបន្ថែមទៅក្នុងកន្ត្រក! 🛒', `${product.name} (ចំនួន ${qty}) ត្រូវបានដាក់ចូលក្នុងកន្ត្រក។`)
  }

  const toggleWishlist = id => {
    setWishlist(current => {
      const exists = current.includes(id)
      const next = exists ? current.filter(x => x !== id) : [...current, id]
      const prod = initialProducts.find(p => p.id === id)
      if (exists) {
        showToast('បានដកចេញពីបញ្ជីពេញចិត្ត', `${prod?.name || 'ផលិតផល'} ត្រូវបានដកចេញ។`)
      } else {
        showToast('បានបន្ថែមទៅបញ្ជីពេញចិត្ត ❤️', `${prod?.name || 'ផលិតផល'} ត្រូវបានរក្សាទុកក្នុងបញ្ជី។`)
      }
      return next
    })
  }

  const placeOrder = customerData => {
    const randomOrderNum = Math.floor(1000 + Math.random() * 9000)
    setOrder({
      ...customerData,
      id: `TN-${new Date().getFullYear()}-${randomOrderNum}`,
      date: formatKhmerDate(new Date()),
      items: cart,
    })
    setCart([])
    setPage('confirmation')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`app-wrapper ${theme}-theme`}>
      <AnnouncementBar onPromoClick={() => { setPage('shop'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }} />

      <Header
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        wishlistCount={wishlist.length}
        page={page}
        setPage={setPage}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenWishlist={() => { setPage('shop'); setShowOnlyWishlist(true); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}
      />

      {page === 'shop' && (
        <Shop
          addToCart={addToCart}
          onOpenQuickView={p => setQuickViewProduct(p)}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          showOnlyWishlist={showOnlyWishlist}
          setShowOnlyWishlist={setShowOnlyWishlist}
        />
      )}

      {page === 'cart' && (
        <Cart cart={cart} setCart={setCart} setPage={setPage} />
      )}

      {page === 'checkout' && cart.length > 0 && (
        <Checkout cart={cart} setPage={setPage} placeOrder={placeOrder} />
      )}

      {page === 'confirmation' && order && (
        <Confirmation order={order} setPage={setPage} />
      )}

      <Footer setPage={setPage} />

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={addToCart}
          onBuyNow={() => setPage('checkout')}
          isWishlisted={wishlist.includes(quickViewProduct.id)}
          onToggleWishlist={() => toggleWishlist(quickViewProduct.id)}
        />
      )}

      {/* Toast Notification */}
      <ToastNotification toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}

export default App
