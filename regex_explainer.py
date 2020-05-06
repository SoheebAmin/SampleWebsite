# Welcome to this tutorial on regular expressions in Python. The syntax will be explained with examples that you can modify and execute.

# First, we need to import the regex module.
import re

# Let's say we want to find every mention of a money amount in dollars in a passage. Unfortunately the author is very inconsistent, 
# so we need to search for different formats, such as all of these examples: "$10, 7 dollars, two dollars, and $4.75."
# Here is our sample text. Let's make things easy by putting it into a string to begin with:
sample_text = """
I went to the store with 10 dollars in my pocket. I bought milk for $2.50. I bought bread for $1 and cheese for two dollars.""" 

# So, we want a regex to give us this list: 
# ["10 dollars", "$2.50", "$1", "two dollars"]

# We first want to create a variable using re.compile(r"<the pattern>"). Raw strings (the r) are used so we can use \ without escaping.
# Let's start simple and just find the $ signs, which there are two of.
our_regex_pattern = re.compile(r'"(.*?)"')

# Now we can search our string and store the results in a match object. We use the find all to get a list of all matches.
match_object = our_regex_pattern.findall(sample_text)

print(match_object)