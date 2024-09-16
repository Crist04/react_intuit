const searchBox = document.getElementById("search-box");
const content = document.querySelector(".content");
const userList = document.querySelector(".user-list");
const noRecordsMessage = document.getElementById("no-records");

searchBox.addEventListener("focus", () => {
    content.style.display = "block"; 
    noRecordsMessage.style.display = "none"; 
});

searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();
    let hasVisibleUser=false;
    

    userList.querySelectorAll("li").forEach(user => {
        const name = user.querySelector(".name").textContent.toLowerCase();
        const location = user.querySelector(".location").textContent.toLowerCase();
        
        if (name.includes(searchTerm) || location.includes(searchTerm)) {
            user.style.display = "block";
             hasVisibleUser = true;
           
        } else {
            user.style.display = "none";
           
        }
    });

    noRecordsMessage.style.display = hasVisibleUser ? "none" : "block";
});
