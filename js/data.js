/* =========================================
   VERİ YAPISI (Yol Haritası & Evrak Detayları)
   ========================================= */

export const roadmapData = [
    {
        id: 1,
        title: "Evrakların Çıktılarının Alınması (Hazırlık)",
        timeLabel: "Staj Öncesi",
        icon: "ph-printer",
        description: "Sürece başlamadan önce aşağıdaki evrakları eksiksiz olarak belirtilen adetlerde yazdırmalı ve imzalatmalısınız:",
        list: [
            `<span class="tag tag-action"><i class="ph-bold ph-copy"></i> 3 Adet Nüsha</span>
             <span class="doc-title">Staj Başvuru Formu & İş Yeri Staj Sözleşmesi</span>
             <span class="doc-desc">En önemli belgelerdir. Tüm sayfalarında sizin, staj kurumu yetkilisinin ve okul müdürünün ıslak imzası ile kaşesi bulunmak zorundadır.</span>`,
            
            `<span class="tag tag-action"><i class="ph-bold ph-book"></i> 1 Adet Ciltlenmiş</span>
             <span class="doc-title">Staj Faaliyet Raporu (Staj Defteri)</span>
             <span class="doc-desc">Toplam 30 sayfa olmalı ve her iş gününe 1 sayfa ayrılacak şekilde defter formatında ciltlenmelidir.</span>`,
             
            `<span class="tag tag-action"><i class="ph-bold ph-file-text"></i> 1'er Adet Nüsha</span>
             <span class="doc-title">Değerlendirme Formu, Takip Formu ve Hastane Evrakları</span>
             <span class="doc-desc">1 adet Zorunlu Staj Değerlendirme Formu, 1 adet Devam Takip (Yoklama) Formu. Hastane için: Personel Gizlilik Sözleşmesi ve Taahhütnameler çıkarılmalıdır.</span>`
        ]
    },
    {
        id: 2,
        title: "Yüksekokula (Okula) Evrak Teslimi (SGK Girişi)",
        timeLabel: "En Az 10 İş Günü Önce",
        icon: "ph-student",
        description: "Staj sigortanızın okul tarafından resmi olarak başlatılabilmesi için aşağıdaki belgeleri <strong>Yüksekokul Müdürlüğüne / Bölüm Başkanlığına</strong> elden teslim etmelisiniz:",
        list: [
            `<span class="tag tag-school"><i class="ph-bold ph-bank"></i> OKULA TESLİM EDİLECEK</span>
             <span class="doc-title">Staj Başvuru Formu ve Staj Sözleşmesi</span>
             <span class="doc-desc">Kurum ve öğrenci tarafından tamamen imzalanmış halleri teslim edilir. Islak imza olmadan SGK girişi <strong>kesinlikle yapılmaz.</strong></span>`,
             
            `<span class="tag tag-school"><i class="ph-bold ph-bank"></i> OKULA TESLİM EDİLECEK (DİLEKÇELER)</span>
             <span class="doc-title">Sağlık Sigortası (EK-1) ve Çalışma Durumu (EK-2) Dilekçesi</span>
             <span class="doc-desc">Ailenizin sigortasından yararlanıyorsanız bunu EK-1 ile; hali hazırda sigortalı bir işte çalışıyorsanız bunu EK-2 dilekçesi ile okula mutlaka bildirmelisiniz.</span>`
        ]
    },
    {
        id: 3,
        title: "Staj Kurumuna (Hastaneye) Evrak Teslimi",
        timeLabel: "En Geç 15 Gün Önce",
        icon: "ph-hospital",
        description: "Okulunuz SGK girişinizi yaptıktan sonra, staj yerinize (Örn: Hastane Hizmetiçi Eğitim Birimine) aşağıdaki dosyayı teslim etmelisiniz:",
        list: [
            `<span class="tag tag-hospital"><i class="ph-bold ph-first-aid"></i> HASTANEYE TESLİM EDİLECEK</span>
             <span class="doc-title">Okul Onaylı Formlar ve SGK Bildirgesi</span>
             <span class="doc-desc">Okulun da imzaladığı 3 adet Başvuru Formu ve Sözleşme teslim edilir. Ek olarak e-Devlet'ten alınmış barkodlu <strong>"4A İşe Giriş Çıkış Bildirgesi"</strong> dosyaya eklenir.</span>`,
             
            `<span class="tag tag-hospital"><i class="ph-bold ph-first-aid"></i> HASTANEYE TESLİM EDİLECEK</span>
             <span class="doc-title">Kişisel ve Sağlık Evrakları</span>
             <span class="doc-desc">Güncel öğrenci belgesi, öğrencinin imzaladığı gizlilik sözleşmeleri/taahhütnameler, banka IBAN bilgisi (örn. Ziraat) ve son 1 ay içinde alınmış İSG Tahlil/Tetkik sonuçları veya tek hekim raporu.</span>`
        ]
    },
    {
        id: 4,
        title: "Staj Sürecinde (Kurumda) Kullanılacak Evraklar",
        timeLabel: "Staj Boyunca (30 İş Günü)",
        icon: "ph-calendar-check",
        description: "Staj yaparken her gün düzenli olarak doldurmanız ve kurumdaki yetkili amirinize imzalatmanız gereken evraklar:",
        list: [
            `<span class="tag tag-action"><i class="ph-bold ph-pen-nib"></i> GÜNLÜK DOLDURULACAK</span>
             <span class="doc-title">Staj Faaliyet Raporu (Staj Defteri)</span>
             <span class="doc-desc">O gün görülen cihazlar ve yapılan uygulamalar teknik dille yazılır. Sayfanın altındaki KONTROL alanı yetkili amire <strong>her gün</strong> imzalatılır.</span>`,
             
            `<span class="tag tag-action"><i class="ph-bold ph-clock"></i> GÜNLÜK DOLDURULACAK</span>
             <span class="doc-title">Devam Takip Formu (Yoklama)</span>
             <span class="doc-desc">Kuruma sabah geliş ve akşam ayrılış saatleri yazılır, sizin ve yetkili amirin günlük imzası atılır.</span>`
        ]
    },
    {
        id: 5,
        title: "Staj Bitiminde Yüksekokula Teslim",
        timeLabel: "Stajın Son Günü / Bitimi",
        icon: "ph-envelope-simple-open",
        description: "Stajınız bittikten sonra not girişinizin yapılabilmesi için aşağıdaki evrakları doğrudan okulunuza (Yüksekokula) teslim etmelisiniz:",
        list: [
            `<span class="tag tag-school"><i class="ph-bold ph-bank"></i> OKULA TESLİM EDİLECEK</span>
             <span class="doc-title">Değerlendirme Formu (Kapalı, Mühürlü Zarf)</span>
             <span class="doc-desc">İşyeri yetkilisi formu (A/B/C/D şeklinde) puanlar. Form bir zarfa konur, zarfın ağzı kapatılıp üstüne imza ve mühür vurulur. <strong>Açık zarflar kabul edilmez.</strong></span>`,
             
            `<span class="tag tag-school"><i class="ph-bold ph-bank"></i> OKULA TESLİM EDİLECEK</span>
             <span class="doc-title">Doldurulmuş Staj Defteri ve Yoklama Formu</span>
             <span class="doc-desc">Amire imzalatılmış 30 sayfalık faaliyet raporu ve tamamı doldurulmuş devam takip formunuz elden teslim edilir.</span>`
        ]
    }
];
