my-product-app/

├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── Badge.jsx            <-- Reusable UI component
│   │   └── product/
│   │       ├── ProductImage.jsx     <-- Image & Badge handling
│   │       ├── ProductInfo.jsx      <-- Text & Button handling
│   │       └── ProductCard.jsx      <-- Main wrapper combining both
│   ├── App.jsx                      <-- Main rendering page
│   ├── main.jsx                     <-- React DOM render
│   └── index.css                    <-- Tailwind utilities