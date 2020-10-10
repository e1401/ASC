export default function randomGradient() {
    return 'linear-gradient(#'+(Math.floor(Math.random() * 0xFFFFFF).toString(16))+', #' +(Math.floor(Math.random() * 0xFFFFFF).toString(16))+')';
  }