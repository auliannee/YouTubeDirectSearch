var searchBar = document.getElementById("searchQuery");

searchBar.addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    document.getElementById("searchButton").click(); // Things you want to do
    Event.preventDefault(); // No need to `return false;`.
});

function searchYoutube()
{
    var url = "https://www.youtube.com/results?search_query="+encodeURIComponent(searchBar.value);
    var win = window.open(url, '_blank');
    win.focus();
}