var Close = document.getElementById('Close');

// Function to transliterate Arabic text to English
    function transliterateText(text) {
        const arabicToEnglishMap = {
            'ا': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'h', 'خ': 'kh',
            'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh', 'ص': 's',
            'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': 'a', 'غ': 'gh', 'ف': 'f', 'ق': 'q',
            'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h', 'و': 'w', 'ي': 'y'
        };

        return text.split('').map(function (char) {
            return arabicToEnglishMap[char] || char;
        }).join('');
    }

    // Translate button click event
    document.getElementById('translate-btn').addEventListener('click', function () {
        const inputText = document.getElementById('input-text').value;
        const translatedText = transliterateText(inputText);
        const translatedDiv = document.getElementById('translated-text');

        // Set translated text and display it
        translatedDiv.innerText = translatedText;
        translatedDiv.style.display = 'block'; // Change display property to 'block'

        // Copy translated text to clipboard
        document.getElementById('copy-btn').addEventListener('click', function () {
            const textarea = document.createElement('textarea');
            textarea.value = translatedText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Copied to clipboard!');
        });
    });

    var Close = document.getElementById('Close');
    var translatedDiv = document.getElementById('translated-text');
    
    Close.onclick = function(){
        translatedDiv.style.display = 'none';
    }
    