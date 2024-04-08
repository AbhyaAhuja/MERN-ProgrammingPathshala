console.log("... app started...");
document.getElementsByTagName("header").innerText="News Website";
document.getElementsByTagName("footer").innerText="News Website";   
function callAPI() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=f31ba813746e444dba7ac90fe3fcdc41")
        .then((res) => res.json())
        .then((data) => renderUI(data))
}
// return res.json();

//    --- }).then((data)=>{
//         renderUI(data);
//     })
// }

function renderUI(data) {
    const articles = data.articles;

    console.log(articles);
    const root = document.getElementById("root");
    for(let i=0;i<articles.length;i++){
        const ar = articles[i];
        

        // created parent div
        const div = document.createElement("div");
        div.setAttribute("class","news-card")
        const h3 = document.createElement("h3");
        const para = document.createElement("p");
        const img = document.createElement("img");
        const a = document.createElement("a");
        a.innerText="Read More";
        a.target="_blank";
        a.href=ar.url;
        img.src = ar.urlToImage;
        para.innerText=ar.description;
        h3.innerText = ar.title;


        
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(para);
        div.appendChild(a);
        root.appendChild(div);
    }
    
}

callAPI();
// renderUI();


// api calls are limited hence commented it out.
// or
// fetch(url)
// .then((res)=>{
//     return res.json()})

//     .then((data)=>{
//         console.log(data);
//     })
// _________________________________________________

// a extract, inner text read more...

