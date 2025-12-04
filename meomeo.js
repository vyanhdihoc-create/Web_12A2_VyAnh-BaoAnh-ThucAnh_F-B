
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('search-icon').addEventListener('click', function(e) {
        e.preventDefault(); 
        
        document.getElementById('search-bar').classList.toggle('visible'); 
        
        document.getElementById('category-bar').classList.remove('visible'); 
    });

    document.getElementById('products-link').addEventListener('click', function(e) {
        e.preventDefault(); 
        
        document.getElementById('category-bar').classList.toggle('visible');
        
        document.getElementById('search-bar').classList.remove('visible'); 
    });
    
    document.getElementById('search-bar').addEventListener('keypress', function(e) {
        if (e.keyCode === 13) { 
            const searchInput = this.querySelector('input[type="text"]');
            const query = searchInput.value.trim(); 
            
            if (query) { 
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
                
                document.getElementById('search-bar').classList.remove('visible'); 
            }
        }
    });
    
});