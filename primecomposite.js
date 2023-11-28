let num = 17;
for (let i = 2; i <= num ; i++) {
    if ( num % i == 0 && i != num) {
        console.log("its composite")
        break
    }
    else if (i == num) {
        console.log("its prime.")
    } 
}
