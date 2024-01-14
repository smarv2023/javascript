// Practicing the classes and method
// Get the values from the text boxes and text area
class TextSearchEdit {
    constructor(searchWord, replaceWord, paragraph) {
        this.searchWord = searchWord;
        this.replaceWord = replaceWord;
        this.paragraph = paragraph;
        this.highlightWords = '<mark>' + this.searchWord + '</mark>';
        this.highlights = paragraph.replaceAll(this.searchWord, this.highlightWords);
        this.replacedParagraph = this.paragraph.replaceAll(this.searchWord, this.replaceWord);
        this.msg = "Original paragraph before modification for comparison";
        this.userMsg = document.getElementById('userMsg');
        this.originDiv = document.getElementById('originDiv');
    }
    replaceWords() {
        if (this.replacedParagraph !== this.paragraph) {
            document.getElementById('paragraph').value = this.replacedParagraph; // I still do not know why (this.paragraph) is not working.
            this.originDiv.innerHTML = 'Original:<br>' + this.highlights;
            this.userMsg.innerHTML = 'Word replaced successfully: ' + '[ <u>' + this.searchWord + '</u> ] replaced by: [ <u>' + this.replaceWord + '</u> ]';
        } else {
            this.userMsg.innerText = 'Word not found. No changes were made.';
        }
    }

    search() {
        if (this.searchWord) {
            if (this.replacedParagraph !== this.paragraph) {
                this.userMsg.innerText = "";
                document.getElementById('originDiv').innerHTML = 'Original:<br>' + this.highlights;
                this.userMsg.innerHTML = 'Word found: ' + '[ <u>' + this.searchWord + '</u> ].';
            } else {
                this.userMsg.innerHTML = 'Word not found: ' + '[ <u>' + this.searchWord + '</u> ].';
                document.getElementById('originDiv').innerHTML = this.msg;
            }
        } else {
            this.userMsg.innerHTML = 'Please enter text to find.';
            document.getElementById('originDiv').innerHTML = this.msg;
        }
    }
}

function search() {
    var searchWord = document.getElementById('searchWord').value;
    var paragraph = document.getElementById('paragraph').value;
    var searching = new TextSearchEdit(searchWord, null, paragraph);
    searching.search();
}

function replaceWords() {
    var searchWord = document.getElementById('searchWord').value;
    var replaceWord = document.getElementById('replaceWord').value;
    var paragraph = document.getElementById('paragraph').value;
    var replaceWords = new TextSearchEdit(searchWord, replaceWord, paragraph);
    replaceWords.replaceWords();
}