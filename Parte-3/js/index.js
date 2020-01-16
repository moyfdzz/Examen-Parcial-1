function addComment() {
    let addCommentButton = document.getElementById('submit');
    
    addCommentButton.addEventListener('click', () => {
        let userName = document.getElementsByClassName('userName')[0].value;
        let comment = document.getElementById('userComment').value;

        if (userName !== '' && comment !== '') {
            let elem = document.createElement('div');
            let text = document.createElement('p');
            let commentSection = document.getElementsByClassName('seccionComments');
            document.getElementsByClassName('userName') = '';
            document.getElementById('userComment') = '';

            elem.classList.add('comment');
            text.append(document.createTextNode(userName));
            text.append(document.createTextNode(comment));
            elem.appendChild(text);
            commentSection.appendChild(elem);
        }
    });
}

function init() {
    addComment();
}

init();