thay thế {{mobile_shop}} là http://domainforoffer.com

get category: {{mobile_shop}}/get-categories

get Sản phẩm nổi bật: {{mobile_shop}}/get-products?isFeatured=true

hiển thị image: khi lấy produc về các bạn có 1 field như này: 

```
 "image": "uploads/2020-01-09T05:54:43.740ZiPhone-7-Plus-32GB-Rose-Gold.png",
```

Thì url hiển thị ảnh ra các bạn cắt bỏ phần uploads rồi ghép vào domain sẽ như này:

`http://domainforoffer.com/2020-01-09T05:54:43.740ZiPhone-7-Plus-32GB-Rose-Gold.png`


get Sản phẩm mới: {{mobile_shop}}/get-products?isFeatured=false

tao comment: {{mobile_shop}}/create-comment

(body truyền vô như trong postman)

get comment của sản phẩm: {{mobile_shop}}/get-product-comments/:productId

get product theo category: {{mobile_shop}}/get-products?categoryId=:categoryId


get detail product: {{mobile_shop}}/product/:productId  


File postman up trong gr lớp, có gì cứ mạnh dạn inbox mình.