//main file for elevator project. requirements are up and down buttons (1st floor only up)
//inside the elevator buttons to go to different floors

const elevator = new Map<number, number>();
for(let i = 0; i <= 100; i++){
    elevator.set(i, i);
}

console.log(elevator);




/*
function elevatorSearch() {
    for (let i = 0; i < elevator.length; i++) {
        for (let j = i + 1; j < elevator.length + 1; j++) {
            if (nums[i] + nums[j] == target) {
                return [i + j]
            }
        }
    }
}

*/