document.addEventListener("DOMContentLoaded", function() {
    const configForm = document.getElementById("configForm");
    const wheelContainer = document.getElementById("wheelContainer");
    const container = document.querySelector(".container");
    const head = document.getElementById("head");
    const btn = document.getElementById("spin");
    let number = 0;

    document.getElementById("configure").addEventListener("click", function() {
        const partitionCount = parseInt(document.getElementById("partitionCount").value);
        if (partitionCount >= 4 && partitionCount <= 10) {
            createWheel(partitionCount);
            head.style.display = "none";
            configForm.style.display = "none";
            
            wheelContainer.style.display = "block";
        } else {
            alert("Please enter a valid partition count between 4 and 15.");
        }
    });

    btn.onclick = function () {
        var x = 1024;
        var y = 5000;
        
  
    var number = Math.floor(Math.random() * (x - y)) + y;
        container.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 1000);
        var audio = document.getElementById("audio");
        audio.play();
        var element = document.querySelector('.container'); 
        element.classList.remove('animate');
        setTimeout(function() {
            element.classList.add('animate');
            audio.pause();
        }, 5000);
    }

    function createWheel(partitionCount) {
        container.innerHTML = "";
        for (let i = 0; i < partitionCount; i++) {
            const label = prompt("Enter label for Partition " + (i + 1));
            if (label.trim() !== "") {
                const div = document.createElement("div");
                div.className = `part${i}`;
                div.textContent = label;
                container.appendChild(div);
            } else {
                const div = document.createElement("div");
                div.className = `part${i}`;
                div.textContent = "Partition " + (i + 1);
                container.appendChild(div);
            }
        }
        number = Math.ceil(Math.random() * 1000);
    }
});
