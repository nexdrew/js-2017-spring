# Welcome class!

This repository represents your final assignment for the semester. Now is your chance to apply what you have learned and show off your JavaScript programming skills!

## Your assignment

Copy the `check-args.js` file from this repository to your local computer. See [more on this below](#copying).

Modify it using Atom or your favorite code editor. Complete the `TODO`s found in the code:

1. Write a `for` loop that iterates over `args`
2. Check if the argument is a boolean and, if it is:
    - Convert the argument (string) to a boolean value
    - Print `type: boolean, value: ${value}` **in blue** to the console, using the converted boolean value
3. Check if the argument is a number and, if it is:
    - Convert the argument (string) to a number value
    - Print `type: number, value: ${value}` **in yellow** to the console, using the converted number value
4. Otherwise, if the argument is not a boolean or number, then:
    - Print `type: string, value: ${arg}` **in green** to the console

## Copying

If you do not have `git` installed, the easiest thing to do is to [download the ZIP file of this repository](https://github.com/nexdrew/js-2017-spring/archive/master.zip) and open/unzip it locally.

If you do have `git` installed, you can clone the repository by running this:

```console
git clone https://github.com/nexdrew/js-2017-spring.git
```

That command will download the repository and put it in a new directory/folder named `js-2017-spring`.

## Testing

Test your code! You should all now have `node` installed and available on your computer.

Before you can test your program, you need to:

1. Open a command prompt
2. `cd` to the directory where you downloaded this repository
3. Run `npm install` to install dependencies
4. And then use `node` to run your program

The commands to run look like this:

```console
cd js-2017-spring
npm install
node check-args.js
```

You only need to run `npm install` once. After that, you can test your program just by running `node check-args.js`.

Then you can give it some arguments such as the following:

```console
node check-args.js one true 3 four
```

Make sure your program outputs what you expect based on the arguments you give it!

## Hints

You already have a good starting point with the code in this repository.

Start adding your code where the `TODO`s are.

You already have `args` available, which is an array of strings.

Make use of the functions that already exist in the code.

The functions provided will help you:
- check the argument type
- convert the argument to the checked type
- paint your message a specific color for printing to the console

## Bonus points

You can get bonus points for the following:
- forking this repository on GitHub
- using `git` to clone your fork to your local computer
- using `git` to add, commit, and push your changes to your fork

You need a GitHub account to fork this repository. You can [create one for free](https://github.com/join)!

To use `git`, you need to [download](https://git-scm.com/download/win) and install it first.

To clone your fork, run `git clone https://github.com/YOUR_USERNAME_HERE/js-2017-spring.git`.

To add, commit, and push changes to your fork, run:

```console
git add check-args.js
git commit -m 'some commit message'
git push origin master
```
