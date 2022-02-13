/* Animated Blobs */
.blob-animation{
    position: absolute;
    top: 25vh;
    left: 250px;
    right: 0;
    bottom: 0;
    opacity: 1;
    z-index: 2000;
    mix-blend-mode: overlay;
}
.blob-1{
    width: 500px;
    height: 500px;
    z-index: -1;
    mix-blend-mode: color-dodge;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    animation: 25s ease 0s infinite alternate none running blob1;
    background: linear-gradient(rgba(47, 184, 255, 0.42) 31.77%, rgb(158, 236, 217) 100%);
}
.blob-2{
    width: 500px;
    height: 500px;
    z-index: -1;
    mix-blend-mode: color-dodge;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    animation: 30s ease 0s infinite alternate none running blob2;
    background: linear-gradient(rgba(186, 117, 255, 0.49) 26.56%, rgb(57, 19, 184) 100%);
}
.blob-1:hover{
    width: 520px;
    height: 520px;
    filter: blur(30px);
    box-shadow: rgb(255 255 255 / 60%) 0px 0px 0px 0.5px inset, rgb(250 112 154) 100px 100px 0px 0px inset, rgb(120 75 160) 200px 200px 0px 0px inset, rgb(43 134 197) 300px 300px 0px 0px inset;
}
.blob-2:hover{
    width: 520px;
    height: 520px;
    filter: blur(30px);
    box-shadow: rgb(255 255 255 / 60%) 0px 0px 0px 0.5px inset, rgb(250 112 154) 100px 100px 0px 0px inset, rgb(120 75 160) 200px 200px 0px 0px inset, rgb(43 134 197) 300px 300px 0px 0px inset;
}
@keyframes blob1{
    0% {
        transform: translate(0px, -50px) rotate(-90deg);
        border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    100% {
        transform: translate(500px, 100px) rotate(-10deg);
        border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
}
@keyframes blob2 {
    0% {
        transform: translate(-200px, 0px) rotate(-90deg);
        border-radius: 51% 49% 58% 42% / 34% 78% 22% 66%;
    }
    
    100% {
        transform: translate(400px, 100px) rotate(-120deg);
        border-radius: 22% 78% 73% 27% / 67% 31% 69% 33%;
    }
}