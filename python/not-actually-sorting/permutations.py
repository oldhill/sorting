""" Permuations 'n' stuff
"""


my_string = 'ABCD'


# There's a library for that
import itertools
import math


permutation_iterator = itertools.permutations(my_string)
perms_list = [perm for perm in permutation_iterator]

print 'Itertools results: %s' % perms_list
print len(perms_list)
print math.factorial(4)


# That was cool now let's try it by hand


