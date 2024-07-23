   const score = {
            win:0,
            tie:0,
            lose:0
          };
          
        document.querySelector('.js-rock').addEventListener('click',()=>{human('Rock');});
        document.querySelector('.js-paper').addEventListener('click',()=>{human('Paper');});
        document.querySelector('.js-scissors').addEventListener('click',()=>{human('Scissors');});

        document.body.addEventListener('keydown',(event)=>{
            if(event.key==='Enter')
            {
                autoplay();
            }
        });

        function updateScore(result) {
            if (result === 'won') {
                score.win++;
            } else if (result === 'tie') {
                score.tie++;
            } else {
                score.lose++;
            }
           
        }

        function computer() {
            let a = Math.floor(Math.random() * 100);
            let random; 
            if (a >= 0 && a <= 30) {
                random = 'Rock';
            } else if (a >= 31 && a <= 70) { 
                random = 'Paper';
            } else {
                random = 'Scissors'; 
            }
            return random; 
        }

        function human(a) {
            let b = a;
           
            let c = computer();
            
            if (c == 'Scissors' && b == 'Rock') {
                result = 'won';
            } else if (c == 'Paper' && b == 'Scissors') {
                result = 'won';
            } else if (c == 'Rock' && b == 'Paper') {
                result = 'won';
            } else if (c == b) {
                result = 'tie';  // Changed 'Tie' to 'tie' for consistency
            } else {
                result = 'lose';  // Corrected spelling from 'loose' to 'lose'
            }
            updateScore(result);

            document.getElementById('result').innerText = `You: ${b}\nComputer: ${c}`;
            updatedislay();
         
        }
        
        function updatedislay()
        {
            document.getElementById('score').innerText=`win: ${score.win} lose: ${score.lose} tie:${score.tie}`;
        }

        function resetscore()
        {
            score.win=0;
            score.lose=0;
            score.tie=0;
            updatedislay();
        }

        let intervalId;

        function autoplay() {
            const change = document.querySelector('.auto');
            if (change.innerHTML === 'AutoPlay') {
                // Start the game
                intervalId = setInterval(()=> {
                    human(computer());
                }, 1000);
                change.innerHTML = 'Stop';
            } else {
                // Stop the game
                clearInterval(intervalId);
                change.innerHTML = 'AutoPlay';
            }
            resetscore();
        }