       var start = new Date().getTime();
        var randomheight = 0;
        var randomwidth = 0;
        var locationshape = ["0", "0"];
        var randomshape = ["0", "50"];
        var counter = 0;
        var randomColor = ["red", "green", "blue", "pink", "purple"];
        var colorNumber = randomColor.length;
        var timeKeeper = new Array();


        function makeShapeAppear() {

            document.getElementById("randomobject").style.display = "block";
            start = new Date().getTime();

        }

        function appearAfterDelay() {
            setTimeout(makeShapeAppear(), 5000);
            }

            appearAfterDelay();


            document.getElementById("randomobject").onclick = function () {
                var cyclegame = 5;

                if (counter < cyclegame) {



                    randomColortik = (Math.floor(Math.random() * 4));
                    document.getElementById("randomobject").style.backgroundColor = (randomColor[randomColortik]);
                    randomheight = (Math.floor(Math.random() * 300) + 30);
                    randomwidth = (Math.floor(Math.random() * 300) + 30);
                    i = (Math.floor(Math.random() * 2));
                    locationshape[0] = (Math.floor(Math.random() * 20) + 1);
                    locationshape[1] = (Math.floor(Math.random() * 95) + 1);
                    document.getElementById("randomobject").style.height = (randomheight + "px");
                    document.getElementById("randomobject").style.width = (randomwidth + "px");
                    document.getElementById("randomobject").style.borderRadius = (randomshape[i] + "%");
                    document.getElementById("randomobject").style.margin = (locationshape[0] + "%" + " " + locationshape[1] + "%");
                    counter++;

                    var end = new Date().getTime();
                    var timeTaken = (end - start) / 1000;
                    document.getElementById("checktimer").innerHTML = timeTaken + "s";
                    appearAfterDelay();

                } else {

                    console.log(timeKeeper);
                    var averageTime = 0;
                    var totalTime = 0;
                    for (var i = 0; i < timeKeeper.length; i++) {
                        totalTime += timeKeeper[i];

                    }
                    averageTime = totalTime / timeKeeper.length;
                    alert("Game Over");
                    document.getElementById("randomobject").style.display = "none";
                    document.getElementById("checktimer").innerHTML = timeKeeper[4] + "s. Average Time taken: " +
                        averageTime.toFixed(2);
                    return;
                    counter++;
                }

                timeKeeper.push(timeTaken);

            }