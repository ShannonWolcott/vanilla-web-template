
export default function loadSort(callback) {
    const select = document.getElementById('sort-select');
    
    select.addEventListener('change', () => {
        callback(select.value);
    });
}