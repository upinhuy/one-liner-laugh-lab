[![make.fun](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/upinhuy/one-liner-laugh-lab/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/upinhuy/one-liner-laugh-lab/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

# One-Liner Laugh Lab

Entry for the [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) bounty on [make.fun](https://make.fun/r/hv9zk8y5) — one short funny line answering a prompt, judged head-to-head on funniness and originality.

## The entry

> I didn't eat your sock. It sought asylum in my dustbin, and I never turn away a refugee.

The prompt: the excuse a robot vacuum gives after eating a sock. The joke is deadpan: the vacuum does not deny the sock is gone, it reframes the dustbin as a sanctuary and itself as a principled host. 88 characters, one line, no setup that overstays.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`, after checking the competition gate itself: UTF-8 text of 1 to 200 characters, not only white space.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
