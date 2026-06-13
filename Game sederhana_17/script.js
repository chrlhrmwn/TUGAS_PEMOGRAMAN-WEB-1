class Game {
    constructor() {
        this.score = 0;
        this.box = document.getElementById("box");
        this.scoreText = document.getElementById("score");

        this.moveBox();

        this.box.addEventListener("click", () => {
            this.score++;
            this.scoreText.textContent = this.score;
            this.moveBox();
        });
    }

    moveBox() {
        const x = Math.random() * 450;
        const y = Math.random() * 350;

        this.box.style.left = x + "px";
        this.box.style.top = y + "px";
    }
}

const game = new Game();