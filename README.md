# 🎓 Zorunlu Staj Yol Haritası

Zorunlu staj süreci için detaylı evrak rehberi ve yol haritası. Hangi evrakın nereye verileceğini, kaç adet çıkarılacağını ve staj adımlarını görsel bir timeline ile sunar.

## ✨ Özellikler

- 📱 **Responsive Design** - Mobil, tablet ve masaüstü uyumlu
- 🌓 **Dark Mode** - Sistem tercihine göre otomatik tema
- ♿ **Erişilebilir** - WCAG 2.1 AA standartlarına uygun, klavye navigasyonu
- ⚡ **Performanslı** - Lazy-load, IntersectionObserver, optimize edilmiş animasyonlar
- 🎨 **Modern UI** - Glassmorphism, smooth animations, micro-interactions
- 🧩 **Modüler Yapı** - Bakımı kolay, ölçeklenebilir kod mimarisi

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+ (önerilir)
- npm veya yarn

### Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## 📁 Proje Yapısı

```
staj-rehberi/
├── index.html              # Ana HTML iskelet
├── css/
│   ├── variables.css       # CSS değişkenleri ve tema
│   ├── base.css            # Reset, typography, container
│   ├── timeline.css        # Timeline bileşeni
│   ├── alert.css           # Alert box bileşeni
│   └── animations.css      # Animasyonlar
├── js/
│   ├── data.js             # Staj adımları verisi
│   ├── render.js           # DOM render mantığı
│   ├── animations.js       # Scroll animasyonları
│   ├── keyboard.js         # Klavye navigasyonu
│   └── main.js             # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## ⌨️ Klavye Kısayolları

- `Tab` - Adımlar arasında gezin
- `Enter` / `Space` - Seçili adımı ortala
- `↑` / `↓` - Önceki/sonraki adıma geç

## 🎨 Özelleştirme

### Renk Teması
`css/variables.css` dosyasından CSS değişkenlerini düzenleyebilirsiniz:

```css
:root {
    --primary: #143264;    /* Ana renk */
    --secondary: #b4141e;  /* Vurgu rengi */
    /* ... diğer değişkenler */
}
```

### Staj Adımları
`js/data.js` dosyasından staj adımlarını düzenleyebilirsiniz.

## 📦 Deployment

### GitHub Pages
```bash
npm run build
# dist/ klasörünü GitHub Pages'e deploy edin
```

### Netlify / Vercel
- Repository'yi bağlayın
- Build command: `npm run build`
- Publish directory: `dist`

## 🧪 Tarayıcı Desteği

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📄 Lisans

MIT License - İstediğiniz gibi kullanabilirsiniz.

## 🤝 Katkıda Bulunma

Pull request'ler memnuniyetle karşılanır. Büyük değişiklikler için lütfen önce bir issue açın.
