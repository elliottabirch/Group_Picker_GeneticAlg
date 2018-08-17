# Group_Picker_GeneticAlg

Create the most optimal permutation of groups for group projects in a classroom setting. These groups can have no more than 5 people in them

Each participant has defined the people they want to work with and people they don't want to work with.

How algorithm works

1. Random groups are created
2. Groups are scored:
	a. Being in a group with an enemy gives -5 points to group score.
	b. Being in a group with a friend gives +1 point to group score.
	c. Having a group larger than 5 people gives -1000 points to a group score.
3. Groups are sorted by score.
4. the worst group permutations are removed from population
5. New permutations are created from remaining permutaions
6. 2-5 are repeated until a goal is achieved, and printed out in solutions.txt

TO RUN:
-
Group data is in Genetic_Algo_Stuff.json

run --  node index.js --  in terminal

Find 4 optimal group permutations in solution.txt
