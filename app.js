const imageContainer=document.querySelector(".imageContainer");


// Promise.all([
//     fetch('https://http.dog/101.jpg'),
//     fetch('https://http.dog/102.jpg'),
//     fetch('https://http.dog/103.jpg')
// ]).then(responses=>{
//     console.log(responses)

    


// }).catch((error)=>{
//     console.log('Error',error)
// })


// Promise.all([
//     fetch('https://http.dog/101.jpg'),
//     fetch('https://http.dog/102.jpg'),
//     fetch('https://http.dog/103.jpg')
// ])
// .then((data)=>console.log(data))



async function fetchImages() {
    try {
        const responses=await Promise.all([
            fetch('https://http.dog/101.jpg'),
            fetch('https://http.dog/102.jpg'),
            fetch('https://http.dog/103.jpg')
        ]);
        
        const imageUrls=await Promise.all(responses.map((response=>response.blob().then((blob)=>URL.createObjectURL(blob)))));

        imageUrls.forEach((url=>{
            addImage(url)
        }))

    } catch (error) {
        console.log('Error',error)
    }
}

function addImage(url){
    
    const img=document.createElement('img');
    img.setAttribute('src',url);
    img.height=300;
    img.width=300;

    const imageContainer=document.querySelector('.imageContainer')
    if(imageContainer){
        imageContainer.append(img);
    }else{
        console.log("NO image found")
    }

}
fetchImages();
