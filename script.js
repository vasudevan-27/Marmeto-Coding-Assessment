const tabs = document.querySelector('#tabs')
function fetchProducts() {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {
            const categories = data.categories
            // 1. Create the tabs for each category
            categories.forEach((category, index) => {
                const tabItem = document.createElement('button')
                tabItem.classList.add('tab-item')
                if (index == 0) {
                    tabItem.classList.add("clicked")
                }
                tabItem.textContent = category.category_name


                const icon = document.createElement('span')
                icon.classList.add("icon-on-tabs")
                const image = document.createElement('img')

                image.width = 15
                if (category.category_name == "Men") {
                    image.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='M9.608 14.563c.521-.185 1.268-.326 2.255-.233a.5.5 0 1 0 .094-.996c-1.133-.106-2.026.053-2.685.287a.5.5 0 1 0 .336.942m12.57-.942c-.66-.234-1.552-.393-2.685-.287a.5.5 0 1 0 .094.996c.987-.093 1.734.048 2.255.233a.5.5 0 0 0 .336-.942M11.2 15.53c-1.45 0-2.67 1-3.01 2.34c-.1.38.2.75.6.75h.958a1.985 1.985 0 0 1 1.912-2.5a1.985 1.985 0 0 1 1.913 2.5h.157c.32 0 .57-.29.51-.6a3.093 3.093 0 0 0-3.04-2.49m9.62 0c1.45 0 2.67 1 3.01 2.34c.1.38-.2.75-.6.75h-.958a1.985 1.985 0 0 0-1.912-2.5a1.985 1.985 0 0 0-1.913 2.5h-.157c-.32 0-.57-.29-.51-.6a3.093 3.093 0 0 1 3.04-2.49'/%3E%3Cpath fill='white' d='M19.429 17.459a1.124 1.124 0 0 0-.199.641c0 .19.05.37.13.53h2a1.129 1.129 0 0 0-1.398-1.588a.35.35 0 1 1-.533.417m-6.639.641a1.129 1.129 0 0 0-1.575-1.04a.349.349 0 0 1-.235.61a.35.35 0 0 1-.289-.152a1.13 1.13 0 0 0-.031 1.112h2c.08-.16.13-.34.13-.53m3.203 3.9c.68 0 1.27-.345 1.63-.873c.32-.477-.02-1.127-.59-1.127h-2.07c-.57 0-.91.65-.59 1.127c.35.528.95.873 1.62.873m.009 1.174a6.473 6.473 0 0 1-3.016-.733a.328.328 0 0 0-.429.472a4.1 4.1 0 0 0 3.445 1.887a4.1 4.1 0 0 0 3.445-1.887c.18-.281-.13-.622-.43-.472a6.354 6.354 0 0 1-3.015.733'/%3E%3Cpath fill='white' d='M25.107 4.726c.246.55.688.98 1.238 1.2a4.08 4.08 0 0 1 2.534 3.892a4.093 4.093 0 0 1-1.032 2.632a2.97 2.97 0 0 0-.67 1.289a4.251 4.251 0 0 1-.372 8.134C25.865 27.38 21.359 31 16.005 31c-5.355 0-9.86-3.622-10.8-9.13a4.251 4.251 0 0 1-.39-8.122l-.058-1.718c-.176-4.336 2.847-8.038 6.927-8.86a4.426 4.426 0 0 1 2.855-1.176c.953-.03 1.836.25 2.573.74c.442.3 1.022.3 1.464 0c.736-.49 1.63-.77 2.583-.74c1.768.06 3.28 1.171 3.948 2.732M6.76 12.073l.082 2.418a1 1 0 0 1-.875 1.027a2.25 2.25 0 0 0 .173 4.48a1 1 0 0 1 .947.892C7.612 25.792 11.41 29 16.005 29c4.595 0 8.393-3.208 8.918-8.11a1 1 0 0 1 .95-.892a2.25 2.25 0 0 0 .147-4.484a1 1 0 0 1-.89-1.04l.093-2.042a2.152 2.152 0 0 0-1.285-.423H18.86a6.63 6.63 0 0 1-5.313-2.681a.206.206 0 0 0-.108-.08h-.128a.207.207 0 0 0-.157.21v1.73a.817.817 0 0 1-.806.821c-1.728 0-3.201-1.1-3.81-2.641a.176.176 0 0 0-.216-.11a.18.18 0 0 0-.138.15c-.157.93-.59 1.79-1.228 2.451c-.068.07-.134.142-.196.214'/%3E%3C/svg%3E`

                } else if (category.category_name == "Women") {
                    image.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='M20.36 16.44c-.14 0-.274.025-.397.072a.35.35 0 1 1-.534.417a1.125 1.125 0 0 0-.199.641c0 .19.05.37.13.53h2a1.129 1.129 0 0 0-1-1.66m-7.57 1.13a1.129 1.129 0 0 0-1.575-1.039a.35.35 0 1 1-.524.457a1.133 1.133 0 0 0-.031 1.112h2c.08-.16.13-.34.13-.53m-1.13-1.98a1.985 1.985 0 0 1 1.913 2.5h.157c.32 0 .57-.29.51-.6A3.093 3.093 0 0 0 11.2 15c-1.45 0-2.67 1-3.01 2.34c-.1.38.2.75.6.75h.958a1.985 1.985 0 0 1 1.912-2.5m9.16-.59c-1.51 0-2.76 1.07-3.04 2.49c-.06.31.19.6.51.6h.157a1.985 1.985 0 0 1 1.913-2.5a1.985 1.985 0 0 1 1.912 2.5h.958c.4 0 .7-.37.6-.75A3.112 3.112 0 0 0 20.82 15m-11.212-.437c.521-.186 1.268-.326 2.255-.233a.5.5 0 0 0 .094-.996c-1.133-.107-2.026.052-2.685.287a.5.5 0 0 0 .336.942m9.979-.233c.987-.093 1.734.048 2.255.233a.5.5 0 0 0 .336-.942c-.659-.234-1.552-.394-2.685-.287a.5.5 0 0 0 .094.996m-.558 7.31a6.352 6.352 0 0 1-3.016.733a6.47 6.47 0 0 1-3.016-.733c-.3-.161-.619.181-.429.472a4.088 4.088 0 0 0 6.89 0c.18-.281-.129-.622-.429-.472M16.003 21c.67 0 1.27-.345 1.62-.873c.32-.477-.02-1.127-.59-1.127h-2.07c-.57 0-.91.65-.59 1.127c.36.528.96.873 1.63.873m13.626 3.25l-3.431-2.304c.121-.42.23-.847.31-1.291A4.342 4.342 0 0 0 30 16.386a4.343 4.343 0 0 0-1.991-3.651V11c0-5.52-4.48-10-10-10h-5.81c-1.164 0-2.12.921-2.177 2.08a7.06 7.06 0 0 0-5.993 6.98v2.64A4.35 4.35 0 0 0 2 16.386c0 1.922 1.24 3.56 2.968 4.131c.102.606.252 1.185.43 1.745L2.439 24.25c-.55.37-.59 1.17-.08 1.6l3.19 2.81c.72.64 1.85.34 2.18-.56l.437-1.221C10.134 28.852 12.802 30 15.75 30c3.155 0 5.992-1.321 7.994-3.564l.595 1.664c.33.9 1.46 1.2 2.18.56l3.19-2.81c.51-.43.47-1.23-.08-1.6m-3.979-5.517l-.903-.014l-.106.897a11.51 11.51 0 0 1-.202 1.149a9.867 9.867 0 0 1-1.488 3.454C21.306 26.604 18.68 28 15.75 28c-2.716 0-5.166-1.196-6.819-3.263c-.812-1.016-1.429-2.243-1.789-3.646a11.117 11.117 0 0 1-.286-1.504l-.089-.77l-.768-.106A2.336 2.336 0 0 1 4 16.386a2.34 2.34 0 0 1 1.82-2.293l.811-.178l-.012-.383l-.003-.094l.133-.389a2.39 2.39 0 0 1 .741-1.075a11.673 11.673 0 0 0 3.173-4.06c1.778 2.537 4.652 4.201 7.915 4.201h2.36c1.129 0 2.138.499 2.849 1.316l.125.144l.27.47h1.65c1.2.076 2.166 1.088 2.166 2.342c0 1.305-1.045 2.346-2.314 2.346z'/%3E%3C/svg%3E`

                } else {
                    image.src = "asserts/vector.png"
                }
                icon.append(image)
                tabItem.addEventListener('click', () => {
                    let alltabItem = document.querySelectorAll('button')
                    const allIcons = document.querySelectorAll(".icon-on-tabs");
                    allIcons.forEach(container => {
                        container.style.display = "none"
                    })
                    alltabItem.forEach(container => {
                        container.classList.remove("clicked")
                    })

                    tabItem.classList.add("clicked")
                    icon.style.display = "inline-block"
                    tabItem.prepend(icon)


                    const categoryContainer = document.querySelector(`#${category.category_name.toLowerCase()}`)
                    const allCategoryContainers = document.querySelectorAll('.category-container')
                    allCategoryContainers.forEach(container => container.style.display = 'none')
                    categoryContainer.style.display = 'flex'

                })
                tabs.appendChild(tabItem)

                const categoryContainer = document.createElement('div')
                categoryContainer.classList.add('category-container')
                categoryContainer.id = category.category_name.toLowerCase()

                if (index === 0) {
                    categoryContainer.style.display = 'flex'
                } else {
                    categoryContainer.style.display = 'none'
                }
                document.querySelector('.container').appendChild(categoryContainer)

                // 2. Create the cards for each product
                category.category_products.forEach(product => {
                    const card = document.createElement('div')
                    card.classList.add('card')
                    categoryContainer.appendChild(card)

                    const img = document.createElement('img')
                    img.src = product.image
                    card.appendChild(img)

                    const productHeadings = document.createElement('div')
                    productHeadings.classList.add('product-headings')
                    card.appendChild(productHeadings)

                    const h3 = document.createElement('h3')
                    h3.textContent = product.title
                    productHeadings.appendChild(h3)

                    const vendor_div = document.createElement("div")

                    const dot = document.createElement("div")
                    dot.textContent = "•"
                    vendor_div.classList.add("vendor-container")
                    vendor_div.appendChild(dot)
                    dot.classList.add("dot")

                    const p = document.createElement('p')
                    p.textContent = product.vendor
                    vendor_div.appendChild(p)
                    productHeadings.appendChild(vendor_div)

                    const priceDetails = document.createElement('div')
                    priceDetails.classList.add('price-details')
                    card.appendChild(priceDetails)

                    const originalPrice = document.createElement('h4')
                    originalPrice.textContent = `Rs: ${product.compare_at_price}`
                    priceDetails.appendChild(originalPrice)

                    const discountedPrice = document.createElement('h4')
                    discountedPrice.textContent = `Rs: ${product.price}.00`
                    priceDetails.appendChild(discountedPrice)

                    const discount = document.createElement('h4')
                    discount.textContent = `${((product.compare_at_price - product.price) / product.compare_at_price * 100).toFixed(2)}% Off`
                    priceDetails.appendChild(discount)

                    const button = document.createElement('button')
                    button.classList.add('btn')
                    button.textContent = 'Add to Cart'
                    card.appendChild(button)
                })
            })

        })
        .catch(error => {
            console.log(error);
        });
}

fetchProducts();
