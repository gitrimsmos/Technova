import { useMemo, useState } from 'react'
import laptopPhoto from './assets/laptop.jpg'
import mousePhoto from './assets/mouse.jpg'
import keyboardPhoto from './assets/keyboard.jpg'
import monitorPhoto from './assets/monitor.jpg'
import headphonesPhoto from './assets/headphones.jpg'
import tabletPhoto from './assets/tablet.jpg'
import speakerPhoto from './assets/speaker.jpg'
import watchPhoto from './assets/watch.jpg'
import './App.css'

const products = [
  { id: 1, name: 'កុំព្យូទ័រយួរដៃ', price: 650, category: 'កុំព្យូទ័រ', image: laptopPhoto, color: '#dbe4ff' },
  { id: 2, name: 'កណ្ដុរកុំព្យូទ័រ', price: 15, category: 'គ្រឿងបន្ថែម', image: mousePhoto, color: '#ffe1d6' },
  { id: 3, name: 'ក្ដារចុច', price: 25, category: 'គ្រឿងបន្ថែម', image: keyboardPhoto, color: '#e8dfff' },
  { id: 4, name: 'ម៉ូនីទ័រ', price: 120, category: 'កុំព្យូទ័រ', image: monitorPhoto, color: '#d8eddf' },
  { id: 5, name: 'កាសឥតខ្សែ', price: 79, category: 'គ្រឿងបន្ថែម', image: headphonesPhoto, color: '#f6e8ac' },
  { id: 6, name: 'ថេប្លេត', price: 320, category: 'កុំព្យូទ័រ', image: tabletPhoto, color: '#d7e5f3' },
  { id: 7, name: 'ឧបករណ៍បំពងសំឡេង', price: 45, category: 'គ្រឿងបន្ថែម', image: speakerPhoto, color: '#e5e8e1' },
  { id: 8, name: 'នាឡិកាឆ្លាតវៃ', price: 95, category: 'គ្រឿងបន្ថែម', image: watchPhoto, color: '#e4e6e5' },
]

const khmerMonths = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
const toKhmerDigits = value => String(value).replace(/\d/g, digit => '០១២៣៤៥៦៧៨៩'[Number(digit)])
const formatKhmerDate = date => `${toKhmerDigits(date.getDate())} ${khmerMonths[date.getMonth()]} ${toKhmerDigits(date.getFullYear())}`

function Header({ cartCount, page, setPage }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => setPage('shop')}>
        <span className="brand-mark">T</span>
        <span>Tech<span>Nova</span></span>
      </button>
      <nav>
        <button className={page === 'shop' ? 'active' : ''} onClick={() => setPage('shop')}>ផលិតផល</button>
        <button className={page === 'cart' ? 'active' : ''} onClick={() => setPage('cart')}>កន្ត្រក</button>
      </nav>
      <button className="cart-button" aria-label="មើលកន្ត្រក" onClick={() => setPage('cart')}>
        <svg viewBox="0 0 24 24"><path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6M9 20h.01M18 20h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        {cartCount > 0 && <span>{cartCount}</span>}
      </button>
    </header>
  )
}

function Shop({ cart, addToCart, setPage }) {
  const [category, setCategory] = useState('ទាំងអស់')
  const [query, setQuery] = useState('')
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const filteredProducts = useMemo(() => products.filter(product => {
    const matchesCategory = category === 'ទាំងអស់' || product.category === category
    const matchesQuery = product.name.toLowerCase().includes(query.trim().toLowerCase())
    return matchesCategory && matchesQuery
  }), [category, query])

  return (
    <>
      <Header cartCount={cartCount} page="shop" setPage={setPage}/>
      <main className="shop-page">
        <section className="hero-banner">
          <div>
            <span className="eyebrow"><span className="live-dot"/> ផលិតផលថ្មី · ២០២៦</span>
            <h1>បង្កើនគុណភាព<br/><em>កន្លែងធ្វើការ។</em></h1>
            <p>ឧបករណ៍ល្អៗសម្រាប់ការងារ ការកម្សាន្ត និងគ្រប់ពេលវេលារបស់អ្នក។</p>
            <button onClick={() => document.querySelector('.products-grid')?.scrollIntoView({ behavior: 'smooth' })}>មើលផលិតផល <span>→</span></button>
          </div>
          <div className="hero-art">
            <span className="hero-orbit orbit-one"/><span className="hero-orbit orbit-two"/>
            <img className="hero-product" src={laptopPhoto} alt="កុំព្យូទ័រយួរដៃនៅលើតុធ្វើការបែបទំនើប"/>
            <div className="hero-note"><span>✦</span><div><strong>ជួយផ្តោតអារម្មណ៍</strong><small>ធ្វើការបានកាន់តែឆ្លាតវៃ រាល់ថ្ងៃ</small></div></div>
            <div className="hero-sticker">ថ្មី<br/><strong>២០២៦</strong></div>
          </div>
        </section>
        <section className="benefit-strip" aria-label="អត្ថប្រយោជន៍របស់ហាង">
          <div><span className="benefit-icon">✦</span><span><strong>គុណភាពដែលអ្នកទុកចិត្ត</strong><small>ជ្រើសរើសផលិតផលដោយយកចិត្តទុកដាក់</small></span></div>
          <div><span className="benefit-icon">↗</span><span><strong>ដឹកជញ្ជូនឥតគិតថ្លៃ</strong><small>សម្រាប់រាល់ការបញ្ជាទិញ</small></span></div>
          <div><span className="benefit-icon">♡</span><span><strong>យើងនៅទីនេះដើម្បីជួយ</strong><small>សេវាកម្មរួសរាយរាក់ទាក់</small></span></div>
        </section>
        <section className="products-section">
          <div className="section-heading">
            <div><span className="eyebrow">ជម្រើសពិសេសសម្រាប់អ្នក</span><h2>ស្វែងរកផលិតផលដែលអ្នកចូលចិត្ត</h2><p className="section-subtitle">បន្ថែមភាពងាយស្រួលដល់ការងារប្រចាំថ្ងៃរបស់អ្នក។</p></div>
            <label className="search-box">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></svg>
              <input aria-label="ស្វែងរកផលិតផល" placeholder="ស្វែងរកផលិតផល..." value={query} onChange={event => setQuery(event.target.value)}/>
            </label>
          </div>
          <div className="product-toolbar">
            <div className="category-filters" aria-label="តម្រៀបផលិតផលតាមប្រភេទ">
              {['ទាំងអស់', 'កុំព្យូទ័រ', 'គ្រឿងបន្ថែម'].map(option => <button key={option} className={category === option ? 'selected' : ''} onClick={() => setCategory(option)}>{option}</button>)}
            </div>
            <span className="result-count">{filteredProducts.length} មុខ</span>
          </div>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <article className="product-card" key={product.id}>
                <div className="product-image" style={{ background: product.color }}>
                  <span className="product-sparkle">✦</span>
                  <img className="product-photo" src={product.image} alt={product.name} loading="lazy" decoding="async"/>
                  <button className="quick-add" onClick={() => addToCart(product)}>ដាក់ក្នុងកន្ត្រក <span>+</span></button>
                </div>
                <div className="product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p><strong>${product.price.toFixed(2)}</strong><span>ដឹកជញ្ជូនឥតគិតថ្លៃ</span></p>
                  </div>
                  <button className="add-button" onClick={() => addToCart(product)} aria-label={`ដាក់${product.name}ក្នុងកន្ត្រក`} title="ដាក់ក្នុងកន្ត្រក">
                    <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
          {filteredProducts.length === 0 && <div className="no-results"><span>⌕</span><h3>រកមិនឃើញផលិតផលទេ</h3><p>សូមសាកល្បងស្វែងរក ឬជ្រើសរើសប្រភេទផ្សេង។</p><button onClick={() => { setCategory('ទាំងអស់'); setQuery('') }}>សម្អាតការតម្រង</button></div>}
        </section>
        <section className="closing-banner">
          <div className="closing-copy">
            <span className="eyebrow">បង្កើតកន្លែងធ្វើការក្នុងក្តីស្រមៃ</span>
            <h2>គំនិតល្អៗ ចាប់ផ្ដើមពីឧបករណ៍ត្រឹមត្រូវ។</h2>
            <p>ជ្រើសរើសឧបករណ៍ដែលជួយឲ្យរាល់ថ្ងៃរបស់អ្នកកាន់តែមានប្រសិទ្ធភាព។</p>
            <button onClick={() => document.querySelector('.products-section')?.scrollIntoView({ behavior: 'smooth' })}>ស្វែងរកផលិតផល <span>↑</span></button>
          </div>
          <div className="closing-art" aria-hidden="true">
            <span className="closing-orbit"/>
            <img src={laptopPhoto} alt="" loading="lazy"/>
            <div className="closing-note"><span>✦</span><div><strong>ត្រៀមរួចជាស្រេច</strong><small>សម្រាប់គំនិតបន្ទាប់របស់អ្នក</small></div></div>
          </div>
        </section>
        <footer className="site-footer">
          <div className="footer-main">
            <div className="footer-about">
              <button className="brand" onClick={() => document.querySelector('.hero-banner')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="brand-mark">T</span><span>Tech<span>Nova</span></span>
              </button>
              <p>ឧបករណ៍បច្ចេកវិទ្យាដែលជួយឲ្យការងារ និងជីវិតប្រចាំថ្ងៃកាន់តែងាយស្រួល។</p>
            </div>
            <div className="footer-links">
              <strong>រុករក</strong>
              <button onClick={() => document.querySelector('.products-section')?.scrollIntoView({ behavior: 'smooth' })}>ផលិតផល</button>
              <button onClick={() => setPage('cart')}>កន្ត្រកទំនិញ</button>
            </div>
            <div className="footer-promise">
              <strong>ទិញដោយភាពជឿជាក់</strong>
              <p>ផលិតផលដែលបានជ្រើសរើសដោយយកចិត្តទុកដាក់ និងសេវាកម្មរួសរាយរាក់ទាក់។</p>
            </div>
          </div>
          <div className="footer-bottom"><span>© ២០២៦ TechNova · រក្សាសិទ្ធិគ្រប់យ៉ាង</span><span>បង្កើតឡើងដោយយកចិត្តទុកដាក់ ✦</span></div>
        </footer>
      </main>
    </>
  )
}

function Cart({ cart, setCart, setPage }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const count = cart.reduce((sum, item) => sum + item.qty, 0)
  const updateQty = (id, delta) => setCart(items => items.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
  const removeItem = id => setCart(items => items.filter(item => item.id !== id))

  return (
    <>
      <Header cartCount={count} page="cart" setPage={setPage}/>
      <main className="cart-page">
        <div className="breadcrumbs"><button onClick={() => setPage('shop')}>ទំព័រដើម</button><span>/</span><strong>កន្ត្រកទំនិញ</strong></div>
        <h1>កន្ត្រកទំនិញ</h1>
        {cart.length === 0 ? (
          <section className="empty-cart">
            <h2>កន្ត្រករបស់អ្នកមិនទាន់មានទំនិញទេ</h2>
            <p>សូមជ្រើសរើសផលិតផលដែលអ្នកចង់បាន។</p>
            <button onClick={() => setPage('shop')}>បន្តទិញទំនិញ</button>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {cart.map(item => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-thumb" style={{ background: item.color }}><img src={item.image} alt={item.name} loading="lazy"/></div>
                  <div className="cart-item-name"><h3>{item.name}</h3><p>{item.category}</p></div>
                  <div className="quantity">
                    <button onClick={() => updateQty(item.id, -1)} aria-label={`បន្ថយចំនួន ${item.name}`}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} aria-label={`បន្ថែមចំនួន ${item.name}`}>+</button>
                  </div>
                  <strong className="item-total">${(item.price * item.qty).toFixed(2)}</strong>
                  <button className="remove" onClick={() => removeItem(item.id)} aria-label={`ដក ${item.name} ចេញពីកន្ត្រក`}>×</button>
                </article>
              ))}
            </section>
            <aside className="order-summary">
              <h2>សង្ខេបការបញ្ជាទិញ</h2>
              <div><span>សរុបរង</span><strong>${subtotal.toFixed(2)}</strong></div>
              <div><span>ដឹកជញ្ជូន</span><strong>ឥតគិតថ្លៃ</strong></div>
              <div className="summary-total"><span>សរុប</span><strong>${subtotal.toFixed(2)}</strong></div>
              <button className="primary-button" onClick={() => setPage('checkout')}>បន្តទៅការបញ្ជាទិញ</button>
              <button className="text-button" onClick={() => setPage('shop')}>← បន្តទិញទំនិញ</button>
            </aside>
          </div>
        )}
      </main>
    </>
  )
}

function Checkout({ cart, setPage, placeOrder }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', zip: '' })
  const [shipping, setShipping] = useState('free')
  const [errors, setErrors] = useState({})
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const delivery = shipping === 'express' ? 12 : 0

  const update = (field, value) => {
    setForm(current => ({ ...current, [field]: value }))
    if (errors[field]) setErrors(current => ({ ...current, [field]: '' }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const nextErrors = {}
    ;['firstName','lastName','email','phone','address','city','zip'].forEach(field => {
      if (!form[field].trim()) nextErrors[field] = 'សូមបំពេញព័ត៌មាននេះ'
    })
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'សូមបញ្ចូលអ៊ីមែលឲ្យបានត្រឹមត្រូវ'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) placeOrder({ ...form, shipping, total: subtotal + delivery })
  }

  return (
    <>
      <Header cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} page="cart" setPage={setPage}/>
      <main className="checkout-page">
        <div className="breadcrumbs"><button onClick={() => setPage('shop')}>ទំព័រដើម</button><span>/</span><button onClick={() => setPage('cart')}>កន្ត្រក</button><span>/</span><strong>ការបញ្ជាទិញ</strong></div>
        <div className="checkout-heading">
          <div>
            <span className="eyebrow">បញ្ចប់ការបញ្ជាទិញ</span>
            <h1>ការបញ្ជាទិញ</h1>
            <p>បំពេញព័ត៌មានខាងក្រោម ដើម្បីឲ្យយើងដឹកជញ្ជូនផលិតផលទៅកាន់អ្នក។</p>
          </div>
          <div className="secure-note">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
            ការបញ្ជាទិញមានសុវត្ថិភាព
          </div>
        </div>
        <div className="checkout-layout">
          <form id="checkout-form" className="checkout-form" onSubmit={handleSubmit} noValidate>
            <section>
              <h2>ព័ត៌មានអតិថិជន</h2>
              <div className="form-grid">
                <label>នាមខ្លួន<input className={errors.firstName ? 'invalid' : ''} value={form.firstName} onChange={e => update('firstName', e.target.value)} placeholder="សុខា"/>{errors.firstName && <small>{errors.firstName}</small>}</label>
                <label>នាមត្រកូល<input className={errors.lastName ? 'invalid' : ''} value={form.lastName} onChange={e => update('lastName', e.target.value)} placeholder="សុវណ្ណ"/>{errors.lastName && <small>{errors.lastName}</small>}</label>
                <label>អាសយដ្ឋានអ៊ីមែល<input className={errors.email ? 'invalid' : ''} type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="name@example.com"/>{errors.email && <small>{errors.email}</small>}</label>
                <label>លេខទូរស័ព្ទ<input className={errors.phone ? 'invalid' : ''} value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+855 12 345 678"/>{errors.phone && <small>{errors.phone}</small>}</label>
                <label className="full">អាសយដ្ឋាន<input className={errors.address ? 'invalid' : ''} value={form.address} onChange={e => update('address', e.target.value)} placeholder="ផ្ទះលេខ និងផ្លូវ"/>{errors.address && <small>{errors.address}</small>}</label>
                <label>ក្រុង/ខេត្ត<input className={errors.city ? 'invalid' : ''} value={form.city} onChange={e => update('city', e.target.value)} placeholder="ភ្នំពេញ"/>{errors.city && <small>{errors.city}</small>}</label>
                <label>លេខកូដប្រៃសណីយ៍<input className={errors.zip ? 'invalid' : ''} value={form.zip} onChange={e => update('zip', e.target.value)} placeholder="12000"/>{errors.zip && <small>{errors.zip}</small>}</label>
              </div>
            </section>
            <section>
              <h2>វិធីសាស្ត្រដឹកជញ្ជូន</h2>
              <div className="shipping-options">
                <label className={shipping === 'free' ? 'selected' : ''}><input type="radio" name="shipping" checked={shipping === 'free'} onChange={() => setShipping('free')}/><span><strong>ដឹកជញ្ជូនធម្មតា</strong><small>៣–៥ ថ្ងៃធ្វើការ</small></span><b>ឥតគិតថ្លៃ</b></label>
                <label className={shipping === 'express' ? 'selected' : ''}><input type="radio" name="shipping" checked={shipping === 'express'} onChange={() => setShipping('express')}/><span><strong>ដឹកជញ្ជូនរហ័ស</strong><small>១–២ ថ្ងៃធ្វើការ</small></span><b>$12.00</b></label>
              </div>
            </section>
          </form>
          <aside className="order-summary checkout-summary">
            <h2>ទំនិញក្នុងកន្ត្រក</h2>
            {cart.map(item => (
              <div className="summary-product" key={item.id}>
                <div className="mini-thumb" style={{ background: item.color }}><img src={item.image} alt="" loading="lazy"/></div>
                <div><strong>{item.name}</strong><small>ចំនួន៖ {item.qty}</small></div>
                <b>${(item.price * item.qty).toFixed(2)}</b>
              </div>
            ))}
            <div className="summary-line"><span>សរុបរង</span><strong>${subtotal.toFixed(2)}</strong></div>
            <div className="summary-line"><span>ដឹកជញ្ជូន</span><strong>{delivery ? `$${delivery.toFixed(2)}` : 'ឥតគិតថ្លៃ'}</strong></div>
            <div className="summary-total"><span>សរុបរួម</span><strong>${(subtotal + delivery).toFixed(2)}</strong></div>
            <button className="primary-button" type="submit" form="checkout-form">បញ្ជាទិញ</button>
          </aside>
        </div>
      </main>
    </>
  )
}

function Confirmation({ order, setPage }) {
  return (
    <>
      <Header cartCount={0} page="shop" setPage={setPage}/>
      <main className="confirmation-page">
        <section className="confirmation-card">
          <div className="confirmation-hero">
            <div className="success-icon">✓</div>
            <span className="eyebrow">សូមអរគុណ</span>
            <h1>ការបញ្ជាទិញបានជោគជ័យ!</h1>
            <p className="confirmation-copy">យើងបានទទួលការបញ្ជាទិញរបស់អ្នក ហើយកំពុងរៀបចំ។</p>
          </div>
          <div className="confirmation-body">
            <div className="confirmation-details">
              <div><span>លេខបញ្ជាទិញ</span><strong>{order.id}</strong></div>
              <div><span>ឈ្មោះអតិថិជន</span><strong>{order.firstName} {order.lastName}</strong></div>
              <div><span>កាលបរិច្ឆេទបញ្ជាទិញ</span><strong>{order.date}</strong></div>
              <div><span>ស្ថានភាពការបញ្ជាទិញ</span><strong className="status">កំពុងរង់ចាំ</strong></div>
            </div>
            <div className="confirmed-products">
              <h2>ផលិតផលដែលបានបញ្ជាទិញ</h2>
              {order.items.map(item => (
                <div className="confirmed-row" key={item.id}>
                  <img src={item.image} alt="" loading="lazy"/>
                  <div className="confirmed-item-info"><strong>{item.name}</strong><small>ចំនួន៖ {item.qty}</small></div>
                  <strong>${(item.price * item.qty).toFixed(2)}</strong>
                </div>
              ))}
            </div>
            <div className="confirmed-total"><span>ទឹកប្រាក់សរុប</span><strong>${order.total.toFixed(2)}</strong></div>
            <button className="primary-button" onClick={() => setPage('shop')}>បន្តទិញទំនិញ <span>→</span></button>
          </div>
        </section>
      </main>
    </>
  )
}

function App() {
  const [page, setPage] = useState('shop')
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState(null)

  const addToCart = product => {
    setCart(items => {
      const existing = items.find(item => item.id === product.id)
      if (existing) return items.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      return [...items, { ...product, qty: 1 }]
    })
  }

  const placeOrder = customer => {
    setOrder({
      ...customer,
      id: 'ORD-0001',
      date: formatKhmerDate(new Date()),
      items: cart,
    })
    setCart([])
    setPage('confirmation')
  }

  return (
    <>
      {page === 'shop' && <Shop cart={cart} addToCart={addToCart} setPage={setPage}/>}
      {page === 'cart' && <Cart cart={cart} setCart={setCart} setPage={setPage}/>}
      {page === 'checkout' && cart.length > 0 && <Checkout cart={cart} setPage={setPage} placeOrder={placeOrder}/>}
      {page === 'confirmation' && order && <Confirmation order={order} setPage={setPage}/>}
    </>
  )
}

export default App
