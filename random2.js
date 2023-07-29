function printRandom1() {
    /**
     * This function generates and prints a random number between 0 and 1.
     */
    
    try {
        // Generate a random number between 0 and 1
        const randomNumber = Math.random();
        
        // Print the random number
        console.log(randomNumber);
    } catch (error) {
        // Log any errors that occur
        console.error("An error occurred:", error);
    }
}

// Example usage
printRandom();
