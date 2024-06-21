
function resumepage() {
    var iframeContainer = document.getElementById('navigate');
    var iframe = document.getElementById('iframe');
    iframe.src = 'Resume.html'
    iframeContainer.style.display = 'block';
    document.getElementById("about").style.display = 'none';
}

function aboutpage() {
    var iframeContainer = document.getElementById('navigate');
    var iframe = document.getElementById('iframe');
    iframe.src = 'about.html'
    document.getElementById("about").style.display = 'none';
    iframeContainer.style.display = 'block';
}

function skillspage() {
    var iframeContainer = document.getElementById('navigate');
    var iframe = document.getElementById('iframe');
    iframe.src = 'skillspage.html'
    iframeContainer.style.display = 'block';
    document.getElementById("about").style.display = 'none';
}

function educationpage() {
    var iframeContainer = document.getElementById('navigate');
    var iframe = document.getElementById('iframe');
    iframe.src = 'education.html'
    iframeContainer.style.display = 'block';
    document.getElementById("about").style.display = 'none';
}

function downloadcv() {
    const url = 'resume/Resume.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Resume.pdf';
    link.target = '_blank';
    link.click();
}

