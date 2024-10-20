function toggleNav() {
    var nav = document.querySelector("nav");
    if (nav.style.left === "0px") {
        nav.style.left = "-250px"; // Hide the menu
    } else {
        nav.style.left = "0px"; // Show the menu
    }
}

// Toggle dropdown visibility
function toggleDropdown(event) {
    var dropdown = event.currentTarget.querySelector(".dropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

// Add event listeners for dropdown toggling
document.querySelectorAll("nav > ul > li").forEach(function (item) {
    item.addEventListener("click", toggleDropdown);
});

// Data structure to hold price data for different crops and seasons 
const cropData = {
    maize: {
        dry: { price: '₦200 - ₦250 per bag', image: '/maize.jpg' },
        rainy: { price: '₦180 - ₦230 per bag', image: '/maize.jpg' }
    },
    yam: {
        dry: { price: '₦500 - ₦700 per tuber', image: '/yam.jpg' },
        rainy: { price: '₦450 - ₦650 per tuber', image: '/yam.jpg' }
    },
    cassava: {
        dry: { price: '₦150 - ₦200 per bag', image: '/casava-image.jpg' },
        rainy: { price: '₦130 - ₦180 per bag', image: '/casava-image.jpg' }
    },
    rice: {
        dry: { price: '₦900 - ₦1,200 per bag', image: '/rice.jpeg' },
        rainy: { price: '₦850 - ₦1,100 per bag', image: '/rice.jpeg' }
    }
};

// Elements
const seasonSelect = document.getElementById('season-select');
const cropSelect = document.getElementById('crop-select');
const cropTitle = document.getElementById('crop-title');
const cropImage = document.getElementById('crop-image');
const priceDry = document.getElementById('price-dry');
const priceRainy = document.getElementById('price-rainy');

// Function to update the dashboard based on selected crop and season
function updateDashboard() {
    const selectedCrop = cropSelect.value;
    const selectedSeason = seasonSelect.value;

    console.log('Selected Crop:', selectedCrop);
    console.log('Selected Season:', selectedSeason);

    // Check if crop data exists for the selected crop
    if (!cropData[selectedCrop]) {
        console.error('Crop data not found for:', selectedCrop);
        return;
    }

    const cropInfo = cropData[selectedCrop];

    // Update crop title
    cropTitle.textContent = `${capitalizeFirstLetter(selectedCrop)} - Predicted Price`;

    // Update crop image
    cropImage.src = cropInfo[selectedSeason].image;
    cropImage.alt = selectedCrop;

    // Update price based on the selected season
    const selectedPrice = cropInfo[selectedSeason].price;
    if (selectedSeason === 'dry') {
        priceDry.textContent = selectedPrice + ' (Dry Season)';
        priceDry.style.display = 'block';
        priceRainy.style.display = 'none';
    } else {
        priceRainy.textContent = selectedPrice + ' (Rainy Season)';
        priceRainy.style.display = 'block';
        priceDry.style.display = 'none';
    }
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    seasonSelect.addEventListener('change', updateDashboard);
    cropSelect.addEventListener('change', updateDashboard);
    updateDashboard(); // Initialize the dashboard
});


// Render the chart
// Sample data for crops and prices across different regions in Nigeria
const regionData = {
    north: [
        { crop: 'Millet', price: '₦300 - ₦350 per bag' },
        { crop: 'Sorghum', price: '₦200 - ₦250 per bag' },
        { crop: 'Maize', price: '₦180 - ₦230 per bag' }
    ],
    south: [
        { crop: 'Yam', price: '₦500 - ₦700 per tuber' },
        { crop: 'Cassava', price: '₦130 - ₦180 per bag' },
        { crop: 'Oil Palm', price: '₦1,200 - ₦1,500 per litre' }
    ],
    east: [
        { crop: 'Cocoyam', price: '₦300 - ₦400 per tuber' },
        { crop: 'Rice', price: '₦850 - ₦1,100 per bag' },
        { crop: 'Plantain', price: '₦150 - ₦200 per bunch' }
    ],
    west: [
        { crop: 'Cocoa', price: '₦2,000 - ₦2,500 per kg' },
        { crop: 'Maize', price: '₦200 - ₦250 per bag' },
        { crop: 'Cassava', price: '₦150 - ₦200 per bag' }
    ]
};

// Elements
const regionDropdown = document.getElementById('regionDropdown');
const trendingPricesList = document.getElementById('trendingPricesList');

// Function to update the list based on the selected region
function updateTrendingPrices() {
    const selectedRegion = regionDropdown.value;
    const cropsInRegion = regionData[selectedRegion];

    // Clear the existing list
    trendingPricesList.innerHTML = '';

    // Populate the list with data for the selected region
    cropsInRegion.forEach(cropData => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cropData.crop}: ${cropData.price}`;
        trendingPricesList.appendChild(listItem);
    });
}

// Event listener to update the list when the region changes
regionDropdown.addEventListener('change', updateTrendingPrices);

// Initialize with the first region's data
updateTrendingPrices();

