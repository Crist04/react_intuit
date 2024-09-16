// JavaScript
function toggleFAQ(index) {
    var faqContent = document.getElementsByClassName('faq-content')[index];
    var arrow = document.getElementsByClassName('arrow')[index];
    
    if (faqContent.style.display == 'flex') {
        faqContent.style.display = 'none';
        arrow.innerHTML = '&#9660;'; // Down arrow
    } else {
        faqContent.style.display = 'flex';
        arrow.innerHTML = '&#9650;'; // Up arrow
    }
}