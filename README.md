created bit size functions in order to break the problem into more managale problems

    getPasswordLength prompts the user to to enter the desired length of password while making sure length is between 8 and 128 characters

    getLowercase asks user if they would like lower case letters in their generated password and then adds those characters to a variable called bank to be used later

    similar process for getUppercase, getNumbers, getSpecialChar.

    verifyBank verifies that at least one charcter type was selected

    converted bank from a string to an array then generated a random number to index a random character from the bank of charcters. which I would add to a temporary password variable. I would loop this process until the desired length was reached.

https://brickly26.github.io/Password-generator/

![The Password Generator application displays a red button to "Generate Password".](./assets/image/03-javascript-homework-demo.png)