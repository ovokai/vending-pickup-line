# Vending Machine Pickup Line

An entry for make.fun's **One Line, One Minute: The Vending Machine Pickup Line Contest**: one pickup line, spoken by a vending machine flirting with a passing human.

![Competition](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)
![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/ovokai/vending-pickup-line/rank.svg)
![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/ovokai/vending-pickup-line/reward.svg)

[bounty page](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

## The line

> Hey gorgeous — slide a coin in my slot, press B4, and I'll drop everything for you.

## How it runs

`main.ts` (Node, standard library only) checks the line against the contest gate (a single line of 1–200 characters) and writes it to `/output/entry.txt`, falling back to a local `entry.txt` when `/output` is not writable.

```sh
node main.ts
```
