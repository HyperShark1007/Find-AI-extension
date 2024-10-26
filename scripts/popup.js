async function fetchProductData() {
    const query = document.getElementById('search-input').value;
    const priceRange = document.getElementById('price-range').value;
    const quality = document.getElementById('quality-select').value;
  
    // Example API URL – replace with the actual API endpoint
    const apiUrl = `https://api.example.com/products?query=${query}&priceRange=${priceRange}&quality=${quality}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      displayProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch product data:", error);
    }
  }
  
  function displayProducts(products) {
    const tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = ''; // Clear previous results
  
    products.forEach(product => {
      const row = document.createElement('tr');
  
      // Platform column
      const platformCell = document.createElement('td');
      platformCell.textContent = product.platform;
      row.appendChild(platformCell);
  
      // Price column
      const priceCell = document.createElement('td');
      priceCell.textContent = `$${product.price}`;
      row.appendChild(priceCell);
  
      // Quality column
      const qualityCell = document.createElement('td');
      qualityCell.textContent = product.quality;
      row.appendChild(qualityCell);
  
      // Details button
      const detailsCell = document.createElement('td');
      const detailsBtn = document.createElement('button');
      detailsBtn.textContent = 'View';
      detailsBtn.className = 'details-btn';
      detailsBtn.onclick = () => viewProductDetails(product);
      detailsCell.appendChild(detailsBtn);
      row.appendChild(detailsCell);
  
      tableBody.appendChild(row);
    });
  }
  
  function viewProductDetails(product) {
    alert(`Product details for ${product.name}:\nPrice: $${product.price}\nQuality: ${product.quality}`);
  }
  