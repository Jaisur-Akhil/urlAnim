s= ""
const arr = Array.from('AkhilJaisurrr')
for(let i = 0; i< arr.length; i++){
    s=s+ arr[i];
    const news = s;
    setTimeout(()=> history.replaceState({},"","/"+news),800*i)
}
//Paste this to your console 
//go to any url 
//
