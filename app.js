new Vue({
    el: '#app',
    data: {
        name: 'John Doe'
    },

    methods:{
        crash(){
            let sound = new Audio ("sounds/crash.mp3");
            sound.play();
        },
        kickBass(){
            let sound = new Audio ("sounds/kick-bass.mp3");
            sound.play();
        },
        snare(){
            let sound = new Audio ("sounds/snare.mp3");
            sound.play();
        },
        tom1(){
            let sound = new Audio ("sounds/tom-1.mp3");
            sound.play();
        },
        tom2(){
            let sound = new Audio ("sounds/tom-2.mp3");
            sound.play();
        },
        tom3(){
            let sound = new Audio ("sounds/tom-3.mp3");
            sound.play();
        },
        tom4(){
            let sound = new Audio ("sounds/tom-4.mp3");
            sound.play();
        }
    },
    created:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.keyCode == 71){
                this.tom1()
            }
            else if (e.keyCode == 72){
                this.tom2()
            }
            else if (e.keyCode == 73){
                this.crash()
            }
            else if (e.keyCode == 84){
                this.snare()
            }
            else if (e.keyCode == 66){
                this.kickBass()
            }
            else if (e.keyCode == 74){
                this.tom3()
            }
            else if (e.keyCode == 75){
                this.tom4()
            }
            
        })
    }

})