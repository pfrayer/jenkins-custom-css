document.observe("dom:loaded", function() {
        var img = document.createElement('img');
        img.src = 'http://192.168.251.117:8080/jenkins/userContent/logo_atos_origin.png';
        img.style = 'vertical-align: middle;padding-left: 0.75em;';
        img.width = '110';

        var jenkins_ci = document.createElement('span');
        jenkins_ci.innerHTML="Jenkins CI";
        jenkins_ci.id='heading_text';

        document.getElementById("top-panel").firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.appendChild(img);
        document.getElementById("top-panel").firstElementChild.firstElementChild.firstElementChild.firstElementChild.appendChild(jenkins_ci);
        document.getElementById("top-panel").firstElementChild.firstElementChild.firstElementChild.firstElementChild.style=('vertical-align:middle;font-weight:bold; font-size: 2em;');
});
