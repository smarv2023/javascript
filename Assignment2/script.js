            // Variables
            //var names =["Marvin", "Cloud", "Tifa", "Barret", "Cid", "Red", "Cait", "Vincent", "Aerith", "Yuffie"];
            //document.getElementById("content").innerHTML = names;
            let names =[];

            function enterNames() {
                let userNames = prompt("Please Enter Names:");
                names.push(userNames)
                document.getElementById("content").innerHTML = names;

            }

            // This will reverse the order and spelling of the names
            function reverse(){
                var revName ="";
                var spelling =[];
                var result ="";
                var revSpelling =[];
                for(var i = names.length -1; i >= 0; i--) {
                    revName += names[i] + " ";
                    spelling = names[i];
                    spelling.split();
                    revSpelling = [];
                    for(var x = spelling.length -1; x >= 0; x--) {
                        revSpelling.push(spelling[x]);
                    }
                    result += revSpelling.join("") + " ";
                }
                document.getElementById("result").innerHTML = revName;
                document.getElementById("result2").innerHTML = result;
            }