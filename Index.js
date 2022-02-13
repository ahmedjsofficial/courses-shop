const cardGrid = document.getElementById("Card-Grid");

const API_URL = `https://gist.githubusercontent.com/jsstackdevelopers/cbab57d432e5983f1aa56c74e3a2b1b7/raw/08add41d469a63e332e6c5a1e72f725c70620ed6/design-code-api`;

const fetchAPI = async () => {
    return await fetch(API_URL).then((api_data) => api_data.json()).then((response)=>{
        return response;
    })
}


const showAPIData = (data) =>{
//    console.log(data)
    let HTML_Screen = "";

    data.forEach(doc => {
        
        HTML_Screen = `    
            <div class="course-card" style="background: linear-gradient(${doc.backgroundColor});}">
                <div class="card-body">
                    <div class="card-img"><img class="animation-forwards illustration-state" src="${doc.courseCover}" alt="cover/img" /></div>
                    <div class="card-caption">
                        <div class="caption-img"><img class="animation-forwards" src="${doc.languageImg}" alt="language/img" /></div>
                        <div class="caption-img"><img class="animation-forwards" src="${doc.authorImg}" alt="author/img" /></div>
                    </div>
                </div>
                <div class="card-body">
                    <h1 class="animation-forwards">${doc.courseTitle}</h1>
                    <p class="animation-forwards">${doc.courseDuration}</p>
                    <a href="#" class="goto-detail">Go to Details</a>
                </div>
                <div class="card-footer d-flex flex-row justify-between">
                    <button type="button" class="cart-btn d-flex animation-forwards">
                        <div class="icon d-flex justify-center">
                            <svg width="19" height="19" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 19H4C3.17 19 2.5 18.33 2.5 17.5V6.5C2.5 5.67 3.17 5 4 5H21C21.83 5 22.5 5.67 22.5 6.5V17.5C22.5 18.33 21.83 19 21 19Z" fill="white" fill-opacity="0.5"/><path d="M22.5 9H2.5V10H22.5V9Z" fill="white" fill-opacity="0.8"/></svg>
                        </div>
                        <span>Subscribe</span>
                    </button>
                    <div class="card-star animation-forwards d-flex justify-center">
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 9H22L17 15L19 22L12 18L5 22L7 15L2 9H9L12 2Z" fill="#fff" fill-opacity="0.8"/></svg>
                    </div>
                </div>
            </div>
        `;
        cardGrid.insertAdjacentHTML('beforeend', HTML_Screen);
    });

}

fetchAPI().then((response) =>{
    showAPIData(response);
});