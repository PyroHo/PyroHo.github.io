
// window.addEventListener('loaded', function() {
//     var canvas = document.querySelector('canvas');
//     canvas.height = canvas.width = 256.5;
//     var ctx = canvas.getContext('2d');
//     ctx.setLineDash([8,4]);
//     var offset = 0;

//     function draw() {
//         offset++;
//         if( offset >= 12){
//             offset = 0;
//         }
//         ctx.clearRect( 0, 0, canvas.width, canvas.height);
//         ctx.lineDashOffset = -offset;
//         ctx.lineWidth = 3;
//         ctx.strokeRect(50, 50, 200, 200);
//         setTimeout(draw, 16);
//     }

//     draw();
// }, false);