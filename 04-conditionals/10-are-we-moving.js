let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// logs true

/*

If the bracket in the expression evaluating isMoving is removed, the evaluation 
order is different, although we still get the same result. As the operator 
precedence is: ( < or > ) > && > ||,  the expression 
is equivalent to:
	((brakingForce < acceleration) && (speed > 0)) || (acceleration > 0),
which returns true.

*/