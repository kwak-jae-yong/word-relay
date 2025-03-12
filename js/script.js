const input = document.querySelector('.userInput')
const wordDisplay = document.querySelector('.currentWord')
const btn = document.querySelector('.submitBtn')
const msg = document.querySelector('.message')

let word = '사과'

wordDisplay.textContent = word
msg.textContent = '끝말잇기 시작!'

function check() {
    const userWord = input.value.trim()

    if (!userWord) {
        msg.textContent = '단어를 입력하세요!'
        return
    }
    /*userWord가 있지않다를 설정하는 not,부정을위해 !를 넣음 */

    const lastChar = word[word.length - 1]
    console.log(lastChar, userWord[0]);

    if (lastChar !== userWord[0]) {
        msg.textContent = `"${lastChar}" 으로 시작하는 단어를 입력하세요`;
        input.value = ''
    } else {
        lastChar == userWord[0];
        msg.textContent = '죽음의 끝말잇기는 계속된다'
        input.value = ''
        word=userWord
        wordDisplay.textContent=word
    }
}


btn.addEventListener('click', () => {
    check()
})
/*btn을 클릭하면 check를 함 */
input.addEventListener('keypress', (e) => {

    if (e.key == 'Enter') {
        check()
    }
})
/*userInput에 엔터를 입력할시 check출력*/