document.getElementById('apply-filters-btn').addEventListener('click', function () {
    var searchQuery = document.getElementById('search-input').value.toLowerCase();
    var selectedCategory = document.getElementById('filter-select').value;
    console.log(selectedCategory);
    var products = document.querySelectorAll('#product-list .col');
    console.log('products', products);
    products.forEach(function (product) {
        var title = product.querySelector('.card-title').textContent.toLowerCase();
        var category = product.getAttribute('data-category');

        // Проверяем, соответствует ли товар категории и поисковому запросу
        var isCategoryMatch = (selectedCategory === 'all' || selectedCategory === category);
        var isSearchMatch = title.includes(searchQuery);

        if (isCategoryMatch && isSearchMatch) {
            product.style.display = 'block'; // Показываем товар
        } else {
            product.style.display = 'none'; // Скрываем товар
        }
    });
});
