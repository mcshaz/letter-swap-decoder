# letter-swap-decoder

## Background
My father would send my kids messages with simple letter for letter sustitutions
as a game. Included with the messages were some letter frequency data taken from Cornell University.
This tool was designed to
- Facilitate and give hints to the 'codebreakers', without _solving_ or eliminating the challenge 
- Provide a personal exploration of the statistics around letter frequency,
and how usful they might prove

## Get started
The working application is at https://mcshaz.github.io/letter-swap-decoder/

## Using
Copy a message paste it into the text area, then click 'go'. 

Three sections then display:
1) the message with each letter selectable, All instances of that (now active) 
letter will be coloured red.
Any letters has already been substituted (decoded), it will have an azure background.
2) the keyboard (you can type the key with your normal keyboard). Once a letter is selected in the message above, each key you press will provide the decoded value. Letters which have already been assiged will be grey, but are still usable (unsetting the previous value in exchange for the currently selected [encoded] letter)
The keyboard has a normalise button which scales the range of keyboard 'likelihood' colours for the selected (encoded) letter across the available colour range (red to green). The colours range from red to green, with pure green being the most likely and graduated colours in between. if you have a mouse, hovering will display the p value.
3) The letter stats, including the number of occurences of the letter. The row 
labelled 'p diff 1' refers to the difference between the highest p value to the 2nd highest 
for the selected (encoded) letter.
diff 2 refers to the 2nd to 3rd difference. The idea being that looking for encoded letters in which
the frequency makes 1 or 2 decoded letters much more likely than others may be a good starting place.

The p-value refers to a 1-tail binomial cumulative distribution function - meaning the probability that the number of occurences or more extreme was seen, given the frequency counted by Cornell Uni.

## Acknowledgements
Written in Vue3 with ViteJS and using @stdlib/stats-base-dists-binomial-cdf for
the cumulative distribution function. The keyboard in particular is heavily 
based on Evan You's Vue version of Wordle on StackBlitz at https://stackblitz.com/edit/vitejs-vite-jjggsx
