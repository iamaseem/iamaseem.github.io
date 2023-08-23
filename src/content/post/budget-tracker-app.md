---
title: "Budget Tracker App"
description: "I have been looking app that can track my spending and predict my runway of my budget I couldn't find any app that open sourced for this so I'm building it."
publishDate: "24 Aug 2023"
tags: ["idea", "thoughts"]
---
> Anything that you do more than twice has to be automated.
## Reason
Previously I was building a system for reducing my spending and improving my financial state (Blog about that will be published soon). The center component of that system is a strict budgeting and week wise spending quota. Right now I'm manually calculating that thing checking how much money is in my spending account and how much can I spend all those things. As A true over engineer I want to automate that things thats the real motivation behind this.
Some of you guys may tell there are several Apps like that out there but the thing is there are none with open sourced and good looking in the same time.

## Solution
#### First Iteration
The current idea is to get the spending from sms that is sent by the bank on successful transactions and display it on the app and calculate the remaining budget for the rest of the week.
Also the total amount left in the account.
In future we can assign category for each spending and some category can be exclude from the system like lending because it is credited. 

## Code & Progress
[Repo](https://github.com/iamaseem/budget-it)