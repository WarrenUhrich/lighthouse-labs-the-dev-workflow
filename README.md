# Lighthouse Labs | The Dev Workflow

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-the-dev-workflow/tree/2023-10-19-web-flex-day-16october2023) | [Vimeo Video Recording](https://vimeo.com/876117988/1cee026eb5?share=copy)

* [X] Introduction
* [X] Curriculum Overview
* [X] Approach to Lectures
* [X] Tools of the Trade
* [X] Version Control
* [X] Incremental Development

## Welcome to Lighthouse Labs

Welcome to our family. Look to your left... (in Zoom...) now to your right... (still in Zoom...) who are these people!? Your peers, your teammates! We are all here to learn—even us instructors. Each and every one of us... let us do our best to lift each other up. Yes, we've designed this program to be an incredible and detailed experience, well worth the time, on its own! But remember that working together, we can achieve even greater heights. Let no one be left behind.

## About Me

I'm Warren Uhrich: an instructor here at Lighthouse Labs. I help with operations in the Web Flex program, run office hours, and run lectures just like this on the regular! My background includes time as a Ruby on Rails developer, front-end developer, a PHP / WordPress developer, and an instructor with both InnoTech College and the University of Alberta—developing its current Full Stack Application Development Diploma and Certificate programs. My favourite part of programming... was helping juniors learn programming! So, naturally, I grew from programming each day to *teaching* programming each day, and I've yet to regret it! Being here, tending to the next generation of web developers, is my passion. Thank you for joining me in that adventure!

## Learning to Program

Learning is about failure. Try stuff, break stuff, fix stuff, and takeaway lessons! With programming, your biggest enemy is freezing in front of an empty file... wondering about what the *very best* approach might be.

> I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.
> — Michael Jordan

We don't talk about the fifty-six things we tried that didn't work.. we brag about the one that finally did! Or heck, if we found another approach entirely was better, we have a great lesson we can share with others to hopefully spare them the same trouble.

## Approach to Lectures

* We offer lectures over Zoom.
* Tues. && Thurs. @ 1 PM ET / 10 AM PT
* 2 hours; usually a break in the middle
* Before our halfway break, we need to take attendance! ***This is a screenshot the instructor will take, please make sure your cameras are on!***
* Ask questions!
* Have your camera turned on so we can see each other!
* Don't code every line we write...
  * Run little experiments
  * Use the provided repo (most lectures / instructors provide a link)
  * Write notes
* Lectures are a mix of theory and practice (walking through an example)
* Focus on the APPROACH!!!
  * Problem solving
  * Step-by-step incremental development
  * Error-driven development

After a lecture...

* Don't expect to understand 100% of the covered content immediately!
* Sometimes it takes hours, days, weeks, or even months for something to click *completely*
* Look for patterns that you can repeat
* Get in the habit of coming back to working examples (in-class or your own experiments) when working on exercises or new problems
* Repetition helps! Review lecture projects and videos
* Ask questions! During class, to your peers, and to mentors
  * Don't worry about it seeming silly—someone has asked before, and someone else in your class has the same one!
  * Get your money's worth, strive to know as much as you'll need!

How to ask questions...

* Raise your hand `(ALT+Y)`
* Type into the chat (don't overflow chat with a lot of student-to-student discussion, keep it focused on the lecture)
* If in-doubt, check with your instructor if they have a preference!

Lectures are not...

* Code-along (don't type every word the instructor does... look at the repo after)
* Times to do your exercises (you WILL get overwhelmed)

## VSCode

* Go to HELP-->Keyboard Shortcuts Reference
  * Get familiar with keyboard shortcuts, they save a lot of time
  * Note they may vary from OS to OS, so use this link in your own VSCode for accurate shortcuts
    * [MacOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    * [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
    * [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* Do not use GitHub co-pilot or strong tools that predict and write code for you
* When learning, it is crucial that you understand the code you're writing, and write things with intent
  * Think about your code, plan it, and try something!
  * Writing line-by-line will help your typing speed
  * Writing line-by-line helps you memorize common keywords and methods
  * Writing line-by-line gets you more familiar with the language's syntax
  * Writing line-by-line builds habits and muscle memory
* Some instructors may run commands in VSCode's terminal pane for easy-to-read demonstration, but we do NOT recommend this... especially during installations, it increases the likliehood of error or permission issues—please use your dedicated terminal window in your environment
* Recommended extensions:
  * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
  * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Git

You can make your default branch `main` instead of `master` by running:

`git config --global init.defaultBranch my_branch_name`

* `git init`
* `git add PATH/FILE.EXT` will add a file to the stage
  * Can instead use `--all`, `-A`, or `.` to represent all
* `.gitignore` is a file you can list files / folders to never include in your `--all` adds... think files like `.DS_Store` on Mac
* `git branch` shows current branch
* `git branch -M main` renames your current branch to `main`
* `git commit -m "my descriptive message"` commits staged (added) files to a snapshot
* `git remote -v` checks for remotes (places to pull/push to) set up locally
* `git remote add origin YOUR_URL` add a new remote (named `origin` in this example)
* `git push origin branch-name` sends your commits to your remote location

## Incremental Development

How to approach problem solving?

* List the steps in order to solve a problem (don't think about syntax)
* Step-by-step process
  1. State hypothesis
  2. Verify the hypothesis
  3. Make changes
* We express ourselves through code (like an author with a book)
    * ***Make sure your book can be understood!***
