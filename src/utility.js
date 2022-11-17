export function backToTop(){
    if('scrollRestoration' in window.history){
        window.history.scrollRestoration = 'manual';
    };
    window.scrollTo({top: 0, left:0, behavior: 'instant'})
};

