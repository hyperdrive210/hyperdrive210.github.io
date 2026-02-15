 // Simple banner carousel
        let bannerIndex = 0;
        const banners = [
            "PENGIRIMAN KE SELURUH DUNIA",
            "GRATIS ONGKIR UNTUK INDONESIA",
            "DISKON 5% OTOMATIS"
        ];

        const bannerText = document.getElementById('banner-text');

        function prevBanner() {
            bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
            bannerText.textContent = banners[bannerIndex];
        }

        function nextBanner() {
            bannerIndex = (bannerIndex + 1) % banners.length;
            bannerText.textContent = banners[bannerIndex];
        }

        // Auto rotate banner
        setInterval(() => {
            bannerIndex = (bannerIndex + 1) % banners.length;
            bannerText.textContent = banners[bannerIndex];
        }, 5000);

        
        function addToCart(productName) {
            alert('✅ ' + productName + ' berhasil ditambahkan ke keranjang!');
            // Di sini nanti bisa ditambahkan logika untuk menyimpan ke cart
        }

         // Product data
        const productsData = {
            'luke-rescue': { name: 'Luke Rescue', vendor: 'ELF SABERS', price: 5350000 },
            'vader-mpp': { name: 'Vader MPP (Anakin & ESB)', vendor: 'ELF SABERS', price: 9450000 },
            'ky-lightsaber': { name: 'K.Y. Lightsaber Sith Killer (Jedi Killer silver version)', vendor: "JAWA'S DEPOT", price: 16750000 },
            'thrawn-hunters': { name: 'Thrawn Hunters Ahsoka with custom metal crystal chambers (KR Sabers)', vendor: "JAWA'S DEPOT", price: 12000000 },
            'arcann': { name: 'Arcann', vendor: 'ELF SABERS', price: 13150000 },
            'darth-malgus': { name: 'Darth Malgus', vendor: 'ELF SABERS', price: 8750000 },
            'orgus-din': { name: 'Orgus Din', vendor: 'ELF SABERS', price: 11250000 },
            'sabine-wren': { name: 'Sabine Wren Lightsaber', vendor: 'ELF SABERS', price: 8100000 }
        };

        // Get cart from localStorage
        function getCart() {
            const cart = localStorage.getItem('lightsaberCart');
            return cart ? JSON.parse(cart) : [];
        }

        // Save cart to localStorage
        function saveCart(cart) {
            localStorage.setItem('lightsaberCart', JSON.stringify(cart));
            updateCartBadge();
        }

        // Update cart badge
        function updateCartBadge() {
            const cart = getCart();
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartBadge').textContent = totalItems;
        }

        // Add to cart function
        function addToCart(productKey) {
            const product = productsData[productKey];
            if (!product) return;

            let cart = getCart();
            
            // Check if product already in cart
            const existingIndex = cart.findIndex(item => item.id === productKey);
            
            if (existingIndex > -1) {
                // Update quantity
                cart[existingIndex].quantity += 1;
                alert('✅ Jumlah ' + product.name + ' di keranjang ditambah!');
            } else {
                // Add new item
                cart.push({
                    id: productKey,
                    name: product.name,
                    vendor: product.vendor,
                    price: product.price,
                    quantity: 1
                });
                alert('✅ ' + product.name + ' berhasil ditambahkan ke keranjang!');
            }
            
            saveCart(cart);
        }

        // Initialize cart badg
        updateCartBadge();

         // Create star background
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }