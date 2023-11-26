#Leader-Follower Simulation

This project is a simulation of a leader-follower system using p5.js, a JavaScript library for creative coding. In this simulation, vehicles follow a leader, and there are various behaviors implemented, such as obstacle avoidance, separation, and arrival.

Project Structure
let variables: Initialization of variables such as arrays for enemies and bullets, sliders for different parameters, and the leader.
setup(): Setting up the canvas, creating a leader vehicle, and initializing sliders.
draw(): Main animation loop where the simulation is rendered. It includes the drawing of the leader's glow, updating positions of vehicles, handling obstacle and enemy spawning, updating parameters based on sliders, and drawing various elements like targets, obstacles, enemies, bullets, and vehicles.
mousePressed(): Triggered when the mouse is pressed. It initiates the shooting mechanism, spawning bullets from vehicles towards enemies.
keyPressed(): Triggered when a key is pressed. It handles the creation of new vehicles and toggling between leader following modes.
findProjection(): A helper function to find the projection of a point onto a line segment.
Vehicle class: Defines the behavior and properties of the vehicles in the simulation, including methods for seeking, avoiding, wandering, pursuing, evading, applying behaviors, and updating and drawing the vehicle.
Sliders
The project includes sliders for adjusting various parameters in real-time:

obstacleSizeSlider: Controls the size of obstacles.
enemyHPSlider: Controls the health points of enemies.
vehicleSpeedSlider: Controls the speed of vehicles.
separationDistanceSlider: Controls the separation distance between vehicles.
Key Bindings
Press 'o' to spawn an obstacle at the mouse position.
Press 'v' to create a new vehicle at a random position.
Press 'm' to toggle between leader following modes ("queueLeuLeu" and "samePointWithSeparationAndEvade").
Leader Following Modes
The simulation supports two leader-following modes:

queueLeuLeu: Each vehicle in the queue follows the mouse position.
samePointWithSeparationAndEvade: All vehicles follow the same point, with separation and evade behaviors.
Vehicle Class
The Vehicle class encapsulates the functionality of individual vehicles. It includes methods for various behaviors such as arrival, seek, flee, pursue, evade, applyBehaviors, and more. The class also handles obstacle and leader avoidance, separation from other vehicles, and updates the vehicle's position and appearance.

Obstacle Class
There is also an Obstacle class that represents obstacles in the simulation. Obstacles are spawned by pressing the 'o' key and affect the movement of vehicles.

Debugging
The code includes debugging features, such as the visualization of vectors, avoidance zones, and the leader's glow.

Feel free to experiment with the sliders, key bindings, and leader following modes to observe different behaviors in the simulation. Have fun exploring the dynamics of the leader-follower system! */
