// 1) Reverse String: Write a function that takes a string and returns it reversed.

/* function returnReverseString(str)
{
    let revStr="";
    for(let i = str.length-1; i >= 0; i--)
    {
        revStr += str[i];
    }
    return revStr;
}
console.log(returnReverseString("Hello")); */

// 2) FizzBuzz: Write a program that prints 1 to 100. Print "Fizz" for multiples of 3, "Buzz" for 5, and "FizzBuzz" for both.

/* function FizzBuzz()
{
    for(let i = 1; i <= 100; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log("FizzBuzz")
        }
        else if(i % 3 === 0)
        {
            console.log("Fizz");
        }
        else if(i % 5 === 0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}
FizzBuzz(); */


// 3) Even or Odd: Write a function that checks if a given number is even or odd without using the % operator (Hint: bitwise).

/* function EvenOdd(n)
{
    return n & 1 ? "Odd":"Even";
}
console.log(EvenOdd(6)); */

// 4) Palindrome Check: Create a function that checks if a string reads the same forwards and backwards (ignoring spaces and casing).

/* function Palindrome(str)
{
    str.trim();
    let revStr= "";
    for(let i = str.length-1; i >= 0; i--)
    {
        revStr+= str[i];
    }
    if(str == revStr)
    {
        console.log("Palindrome");
    }
    else
    {
        console.log("Not a Palindrome")
    }
}
Palindrome("Hello") */

// 5) Vowel Count: Write a function that returns the number of vowels in a given string.

/* function checkVowels(str)
{
    let count=0;
    for(let i = 0; i <str.length; i++)
    {
        if("AEIOUaeiou".includes(str[i]))
        {
            count++;
        }
    }
    return count;
}
console.log(checkVowels("Hello")); */

// 6) Factorial: Write a function to calculate the factorial of a number iteratively.

/* function factorial(num)
{
    let fact=1;
    for(let i = 1; i <= num; i++)
    {
        fact*=i;
    }
    console.log(fact);
}
factorial(5); */

// 7) Max in Array: Find the largest number in an array using Math.max and the spread operator.

/* let arr = [10,20,30,1,5,100,200];
console.log(Math.max(...arr)); */

// 8) Random Number: Generate a random integer between a given min and max value.

/* function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max-min +1) + min);
}
console.log(randomNumber(1,100)); */

// 9) Truncate String: Write a function to truncate a string to a certain number of words and append "...".

/* function truncate(str, k)
{
    let newStr = "";
    for(let i = 0; i < k; i++)
    {
        newStr+= str[i];
    }
    newStr+="...";
    console.log(newStr);
}
truncate("Hello", 4); */

// 10) Capitalize First Letter: Write a function that capitalizes the first letter of every word in a sentence.

/* function capitalizeFirstLetter(str)
{
    let arr = str.split(" ");

    // for(let i = 0; i < arr.length; i++)
    // {
    //     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    // }
    // let newStr = arr.join(" ");
    // console.log(newStr); 
    arr = arr.map(word => word[0].toUpperCase() + word.slice(1));
    
    let newStr = arr.join(" ")
    console.log(newStr);
}
capitalizeFirstLetter("Write a function that capitalizes the first letter of every word in a sentence.");  */

// 11) 11. Anagram Check: Write a function to check if two strings are anagrams of each other.

/* function checkAnagram(str1,str2)
{
    if(str1.length != str2.length)
    {
        return false;
    }
    let newStr1 = str1.split("").sort().join();
    let newStr2 = str2.split("").sort().join();

    if(newStr1 === newStr2)
    {
        return true
    }
    else{
        return false
    }
}
console.log(checkAnagram("listen", "listen")); */

// 12) Longest Word: Find and return the longest word in a given sentence.

/* function longestWord(str)
{
    let arr = str.split(" ");
    // let longest = arr[0];
    // for(let i = 0; i < arr.length; i++)
    // {
    //     if(longest.length < arr[i].length)
    //     {
    //         longest = arr[i];
    //     }
    // }
    let longest = arr.reduce((longest, word)=> {
        return word.length > longest.length? word: longest;
    })
    console.log(longest);
}
longestWord("Find and return the longest word in a given sentence."); */

// 13) Fibonacci Sequence: Generate an array of the first n numbers in the Fibonacci sequence.

/* function Fibonacci(n)
{
    if(n<=0)
    {
        return n;
    }
    if(n===1) return 1;
    if(n===2) return 2;
    return Fibonacci(n-1) + Fibonacci(n-2);
}
console.log(Fibonacci(5)); */

// 14) Prime Number: Write a function to efficiently check if a given number is a prime number.

/* function CheckPrime(num)
{
    if(num === 1 || num === 2 || num === 3) return true;

    if(num % 2 != 0 && num % 3 != 0) return true;
    else return false;
}
console.log(CheckPrime(47)); */

// 15) Title Case: Convert a string to Title Case (e.g., "I'm a little tea pot" -> "I'm A Little Tea Pot").

/* function TitleCase(str)
{
    str = str.toLowerCase();
    let arr = str.split(" ");

    arr = arr.map(word => word[0].toUpperCase() + word.slice(1));

    let newStr = arr.join(" ");
    console.log(newStr);
}
TitleCase("I'm a little tea pot"); */

