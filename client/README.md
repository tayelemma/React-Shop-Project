App (Routing component)
├─ Home
   ├─ Announcement
   ├─ Navbar
   ├─ Slider
   ├─ Categories
   │     └─CategoryItem
   │           └─ ("/products/:category")pages- ProductList
   │                ├─Navbar
   │                ├─components/Products
   │                ├─Newsletter
   │                └─Footer
   ├─ Products
   │     └─Product
   │           └─("/product/:id")pages- Product
   │                ├─Navbar
   │                ├─Newsletter
   │                └─Footer
   ├─ Newsletter
   └─ Footer

   
   └─Login
        ├─("/")pages- Home
        └─("/admin") pages- ProductDisplayForAdmin
              ├─("/")pages- Home
              ├─("/product/update) pages- ProductUpdateForm
              │        └─ ("/product/display") pages- ProductDisplayForAdmin
              └─("/product/addnew")pages- ProductAddNew
                       └─("/product/display") pages- ProductDisplayForAdmin


