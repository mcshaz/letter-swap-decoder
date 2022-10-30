# letter-swap-decoder

## Background
My father would send my kids messages with simple letter for letter sustitutions
as a game. Included with the messages were some letter frequency data taken from Cornell University.
This tool was designed to
- Facilitate and give hints to the 'codebreakers', without _solving_ or eliminating the challenge .
- Provide a personal exploration of the statistics around letter frequency,
and how useful they might prove.

## Get started
The working application is at https://mcshaz.github.io/letter-swap-decoder/

## Using
Copy a message paste it into the text area, then click 'go'. 

Three sections then display:
1) The message, with each letter selectable. All instances of that (now active) 
letter will be coloured red.
Any letters that have already been substituted (decoded) will have an azure background in the message.
2) The keyboard (you can type the key with your normal keyboard). Once a letter is selected in the message above, each key you press will provide the decoded value. Letters which have already been assiged will be grey, but are still usable (unsetting the previous value in exchange for the currently selected [encoded] letter)
The keyboard has a rank button which changes the scale/graduation of the keyboard 'likelihood' colours for the selected (encoded) letter. That is, it changes the graduation across the available colour range (from red to green). Pure green is statistically the most likely (based on single charachter counts) and coloursare graduated towards red. With rank, it is only the _order_ of probabilities which apply so that there will be 26 even graduations. Otherwise the graduations take into account the magnitude of differences between probabilities. if you have a mouse, hovering will display the p value.
3) The letter stats, including the number of occurences of the letter. The row 
labelled 'p diff 1' refers to the difference between the highest p value to the 2nd highest 
for the selected (encoded) letter.
diff 2 refers to the 2nd to 3rd difference. The idea being that looking for encoded letters in which
the probability (calculated on frequency) makes 1 or 2 decoded letters more likely than others may be a good starting place.

The probability/p is calculated using bayes theorum:

$$P(X = a \mid F_{X} ) = \frac{ P(F_X \mid X = a) P(X = a) }{ P(F_X) }$$

- $P(F_X \mid X = a)$ is the binomial PMF $Pr(k; n; p)$ 
     - $k$ being the letter count for a given letter
     - $n$ the total count of [a-z] characters in the message
     - $p$ is the frequency taken from Peter Norvig google libraries analysis
- $P(X = a)$ is $1 \over 26$ (term is not required given ${ P(F_X) }$ below)
- ${ P(F_X) }$ is the sum of all numerators $\sum_{a = A...Z} P(F_X | X=a) P(X=a)$.

## Acknowledgements
Written in Vue3 with ViteJS and using @stdlib/stats-base-dists-binomial-cdf for
the cumulative distribution function. The keyboard in particular is heavily 
based on Evan You's Vue version of Wordle on StackBlitz at https://stackblitz.com/edit/vitejs-vite-jjggsx
