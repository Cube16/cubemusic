function filterReleases() {
		const selectedCategory = document.querySelector('input[name="release-category"]:checked').value;
		const musicCards = document.querySelectorAll('.release-item');

		musicCards.forEach(card => {
			const categories = card.getAttribute('data-category').split(' ');
			if (selectedCategory === 'All' || categories.includes(selectedCategory)) {
            card.style.display = 'block';
			} else {
            card.style.display = 'none';
			}
		});
}

document.addEventListener("DOMContentLoaded", () => {
    filterReleases(); // Фильтруем при загрузке страницы
		const filters = document.querySelectorAll('input[name="release-category"]');
		filters.forEach(filter => {
			filter.addEventListener('change', filterReleases);
		});
});
