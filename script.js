
document.querySelector('button').onclick = function(){

    let count = 
    document.querySelector('input').value;

    const interval = 
    setInterval(function(){

        if ( count > 0)
        {
            count --;

            document.querySelector('input').value = count; 
        }else {       
    
    clearInterval(interval)
}
} , 1000 )
}