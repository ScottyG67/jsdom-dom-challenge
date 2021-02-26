let isPaused = false

document.addEventListener("DOMContentLoaded",function(){
    createUl()
    const counterTimer = window.setInterval(increment, 1000);
    document.getElementById("plus").addEventListener("click",increment)
    document.getElementById("minus").addEventListener("click",negIncrement)
    document.getElementById("comment-form").addEventListener("submit",addComment)
    document.getElementById("pause").addEventListener("click",pauseCounter)
    document.getElementById("heart").addEventListener("click",addLike)
})

function addLike() {
    let lastWord = "time"
    let likeCounter = 1
    let likes = document.getElementById('likeList')
    let currentCounter = document.getElementById("counter").innerText
    let matchingLi = document.getElementById("counter"+currentCounter)
    if(matchingLi){
        likeCounter = parseInt(matchingLi.innerText.split(" ")[4])+1
        console.log(matchingLi)
        lastWord = "times"
    } else {
        matchingLi = document.createElement('li')
    }
    matchingLi.innerText = currentCounter +` has been liked ${likeCounter} ${lastWord}`
    console.log (lastWord)
    matchingLi.id = "counter"+currentCounter
    likes.append(matchingLi)
}

function createUl(){
    let commentList = document.getElementById('list')
    let commentUl = document.createElement("ul")
    commentUl.id = "commentList"
    commentList.append(commentUl)

    let likeList = document.querySelector('.likes')
    let likeUl = document.createElement("ul")
    likeUl.id = "likeList"
    likeList.append(likeUl)
}


function negIncrement(){
    let counter = document.getElementById("counter")
    let current = parseInt(counter.innerText)
    counter.innerText = current - 1
}

function increment() {
    if(!isPaused){
        let counter = document.getElementById("counter")
        let current = parseInt(counter.innerText)
        counter.innerText = current + 1
    }
}

function addComment(event){
    event.preventDefault();
    let list = document.getElementById('commentList')
    let li = document.createElement('li')
    li.innerText = event.target.commentInput.value
    list.append(li)
    document.getElementById('comment-form').reset()
}

function pauseCounter(){
    if(isPaused === false){
        isPaused = true
        text = "Resume"
    } else {
        isPaused = false
        text = "pause"
    }
    document.querySelector("#minus").disabled = isPaused
    document.querySelector("#plus").disabled = isPaused
    document.querySelector("#heart").disabled = isPaused
    document.querySelector("#pause").innerText = text
}
