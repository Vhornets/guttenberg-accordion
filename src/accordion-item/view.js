document.addEventListener("DOMContentLoaded", () => { 
    let $accordionItems = document.querySelectorAll('.wp-block-accordion-accordion-item');
    
    $accordionItems.forEach($item => {
        $item.addEventListener('click', e => {
            $accordionItems.forEach($item => $item.classList.remove('is-active'));    
            
            $item.classList.add('is-active');
        });
    });
});