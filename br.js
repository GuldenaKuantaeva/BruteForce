let fs = require('fs');
let argv = process.argv;

let hS = 0;
let hT = 0;

let S = fs.readFileSync(argv[2],'utf8');
S.toString();
let n = S.length;

let T = fs.readFileSync(argv[3],'utf8');
T.toString();
let m = T.length;

for (let i=0; i<m; i++){
	hT+=T.charCodeAt(i)*(Math.pow(2,m-i-1));
	hS+=S.charCodeAt(i)*(Math.pow(2,m-i-1));
}

let x = 1;

while (x<=n-m+1) {
	if (hT == hS) {
		let y = 0;
		while (S.charAt(x-1+y) == T.charAt(y)){
			y++
			if (y == m){
				console.log(x);
				break;
			}
		}
	}
	hS = (hS - S.charCodeAt(x-1)*(Math.pow(2,m-1)))*2 + S.charCodeAt(x-1+m) ;
	x++;
}