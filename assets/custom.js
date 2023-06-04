document.addEventListener('ajaxProduct:added', function(response) {
    //debugger;
    var item = {
      "$value": (response.detail.product.price / 100).toFixed(2),
      "Name": response.detail.product.product_title,
      "ProductID": response.detail.product.id,
      "SKU": response.detail.product.sku,
      "Categories": [response.detail.product.product_type],
      "ImageURL": response.detail.product.image,
      "URL": 'https://www.sweetwaterdecor.com' + response.detail.product.url,
      "Brand": response.detail.product.vendor,
      "Price": (response.detail.product.price / 100).toFixed(2),
      "CompareAtPrice": (response.detail.product.discounted_price / 100).toFixed(2)
    };
    _learnq.push(['track', 'Added to Cart', item]); 
});