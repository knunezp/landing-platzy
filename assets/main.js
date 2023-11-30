const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9k0tTsh_qStx0HPuPftSsg&part=snippet%2Cid&order=date&maxResults=9';

const content= document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f92654cd2cmsh643e8b3eda7a614p1dd184jsn5f7834872bc0',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);
    const data=await response.json();
    return data;
}

(async ()=>{
 try {
    const videos=await fetchData(API);
    let view=  `${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700" style="color:white;">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h4>
            </div>
        </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
 } catch (error) {
    console.log("error",error);
 }
})();
