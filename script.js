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


// Example data for price trends
const priceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Maize Price (₦ per bag)',
        data: [220, 215, 210, 205, 200, 195, 190, 185, 195, 200, 205, 210],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    },
    {
        label: 'Yam Price (₦ per tuber)',
        data: [650, 640, 630, 620, 610, 600, 590, 580, 590, 600, 610, 620],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Configuring the chart
const config = {
    type: 'line',
    data: priceData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Price in ₦'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            }
        }
    }
};

// Render the chart
const ctx = document.getElementById('priceTrendChart').getContext('2d');
new Chart(ctx, config);
